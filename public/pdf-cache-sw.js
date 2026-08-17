const PDF_CACHE = 'fehm-quran-pdfs-v1';
const MAX_CACHED_PDFS = 6;

const isPdfRequest = (request) => {
  if (request.method !== 'GET') return false;
  return new URL(request.url).pathname.toLowerCase().endsWith('.pdf');
};

const trimPdfCache = async (cache) => {
  const keys = await cache.keys();
  while (keys.length > MAX_CACHED_PDFS) {
    await cache.delete(keys.shift());
  }
};

const cachedRangeResponse = async (cachedResponse, rangeHeader) => {
  if (!rangeHeader) return cachedResponse;

  const match = /^bytes=(\d*)-(\d*)$/i.exec(rangeHeader);
  if (!match) return cachedResponse;

  const fullPdf = await cachedResponse.arrayBuffer();
  const size = fullPdf.byteLength;
  const [, startValue, endValue] = match;
  const start = startValue ? Number(startValue) : Math.max(size - Number(endValue), 0);
  const end = endValue ? Math.min(Number(endValue), size - 1) : size - 1;

  if (start > end || start >= size) {
    return new Response(null, {
      status: 416,
      headers: { 'Content-Range': `bytes */${size}` },
    });
  }

  return new Response(fullPdf.slice(start, end + 1), {
    status: 206,
    headers: {
      'Content-Type': cachedResponse.headers.get('Content-Type') || 'application/pdf',
      'Content-Length': String(end - start + 1),
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=2592000',
    },
  });
};

const servePdf = async (request) => {
  const cache = await caches.open(PDF_CACHE);
  const cachedResponse = await cache.match(request.url);

  if (cachedResponse) {
    return cachedRangeResponse(cachedResponse, request.headers.get('Range'));
  }

  const networkResponse = await fetch(request);
  const isFullPdfResponse = networkResponse.ok && !request.headers.has('Range');

  if (isFullPdfResponse) {
    await cache.put(request.url, networkResponse.clone());
    await trimPdfCache(cache);
  }

  return networkResponse;
};

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  if (isPdfRequest(event.request)) {
    event.respondWith(servePdf(event.request));
  }
});

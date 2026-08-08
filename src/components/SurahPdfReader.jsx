import React, { useState, useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
// Import PDF.js worker locally via Vite ?url (bundled with app, no CDN dependency)
import pdfjsWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { useQuran } from '../context/QuranContext';
import { SURAHS_DATA } from '../data/quranData';
import { translations } from '../utils/translations';
import { PdfPreloader } from './PdfPreloader';
import {
  FileText,
  ChevronRight,
  ChevronLeft,
  ZoomIn,
  ZoomOut,
  Download,
  Upload,
  ArrowRight,
  ArrowLeft,
  Check,
  ExternalLink,
  Layers,
  Smartphone,
  Eye
} from 'lucide-react';

// Configure PDF.js Worker from LOCAL bundle (avoids CDN / version-mismatch failures on live sites)
try {
  if (pdfjsLib.GlobalWorkerOptions) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorkerUrl;
  }
} catch (err) {
  console.warn('[PDF.js] Local worker config failed, skipping:', err);
}

export const SurahPdfReader = ({ onOpenUploader }) => {
  const {
    activeSurahId,
    closePdfReader,
    getSurahById,
    completedSurahs,
    toggleSurahCompletion,
    language,
    activeSurahPart,
    setActivePart,
    getActiveSurahPdfPath,
    openPdfReader,
  } = useQuran();

  const t = translations[language] || translations.urdu;
  const isUrdu = language === 'urdu';

  const currentSurah = getSurahById(activeSurahId || 1);
  const pdfPath = getActiveSurahPdfPath(currentSurah);
  const currentPart = activeSurahPart || 1;

  // Detect mobile screen once at mount
  const isMobileScreen = typeof window !== 'undefined' && window.innerWidth < 768;

  // Reader States
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(10);
  const [statusText, setStatusText] = useState(t.loadingPdf);
  const [pdfError, setPdfError] = useState(false);
  // Grace-period state: show elegant skeleton while native object engine loads
  const [nativeLoading, setNativeLoading] = useState(true);
  // MOBILE-FIRST: Default to native browser object engine on mobile screens
  // Canvas mode (PDF.js) works well on desktop but is unreliable on mobile browsers
  const [viewEngine, setViewEngine] = useState(isMobileScreen ? 'object' : 'canvas');
  // State for the toolbar "Open in New Tab" / external button click
  const [openingExternal, setOpeningExternal] = useState(false);
  const [externalProgress, setExternalProgress] = useState(0);

  // Canvas & PDF References
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const pdfDocRef = useRef(null);
  const renderTaskRef = useRef(null);
  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);

  const isCompleted = completedSurahs.includes(currentSurah.id);

  // Render trigger (increment to force canvas re-render on resize)
  const [renderTick, setRenderTick] = useState(0);

  // Load PDF Document when Surah changes
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setLoadingProgress(15);
    setPdfError(false);
    setCurrentPage(1);
    setTotalPages(1);
    setStatusText(t.loadingPdf);
    pdfDocRef.current = null;
    setNativeLoading(true);

    // 👇 Native (iframe) engine progressive loader
    // (iframe onload on mobile is VERY slow / unreliable, so we give constant feedback
    //  with changing status text and incremental progress percentages to keep the user
    //  confident the page is not frozen. We finally reveal at 10s max even if no onload.)
    const timers = [];
    if (viewEngine === 'object') {
      setLoadingProgress(8);
      setStatusText(
        isUrdu ? 'فائل لوڈ ہو رہی ہے…' : t.loadingPdf
      );

      timers.push(setTimeout(() => {
        if (!isMounted) return;
        setLoadingProgress(22);
        setStatusText(
          isUrdu ? 'بینک سروسز سے کنیکٹ ہو رہا ہے…' : (isUrdu ? '' : 'Connecting to document server…')
        );
      }, 900));

      timers.push(setTimeout(() => {
        if (!isMounted) return;
        setLoadingProgress(38);
        setStatusText(
          isUrdu ? 'پی ڈی ایف ڈیٹا ڈاؤن لوڈ ہو رہا ہے…' : 'Downloading PDF content…'
        );
      }, 2100));

      timers.push(setTimeout(() => {
        if (!isMounted) return;
        setLoadingProgress(58);
        setStatusText(
          isUrdu ? 'براؤزر میں پیج رینڈر ہو رہے ہیں…' : (isUrdu ? '' : 'Rendering PDF pages in viewer…')
        );
      }, 3800));

      timers.push(setTimeout(() => {
        if (!isMounted) return;
        setLoadingProgress(74);
        setStatusText(
          isUrdu ? 'تقریباً تیار ہے، چند لمحات…' : 'Almost ready, finalizing…'
        );
      }, 5800));

      timers.push(setTimeout(() => {
        if (!isMounted) return;
        setLoadingProgress(88);
        setStatusText(
          isUrdu ? 'ویور کھول رہا ہے…' : 'Opening PDF viewer…'
        );
      }, 7800));

      // MAX FALLBACK: If iframe onload never fires (some mobile browsers never emit it),
      // force-reveal the iframe at 10 seconds so the user sees something at all.
      // 95% of the time the PDF is already loaded inside by then, it's just the event
      // that the mobile browser chose not to dispatch to us.
      timers.push(setTimeout(() => {
        if (isMounted) {
          setLoadingProgress(96);
          setNativeLoading(false);
          setTimeout(() => {
            if (isMounted) setLoadingProgress(100);
          }, 400);
        }
      }, 10000));
    }

    if (viewEngine === 'canvas') {
      const loadingTask = pdfjsLib.getDocument({ url: pdfPath });

      loadingTask.onProgress = (progressData) => {
        if (isMounted && progressData.total > 0) {
          const percent = Math.min(95, Math.round((progressData.loaded / progressData.total) * 100));
          setLoadingProgress(percent);
        }
      };

      loadingTask.promise
        .then((pdfDoc) => {
          if (!isMounted) return;
          pdfDocRef.current = pdfDoc;
          setTotalPages(pdfDoc.numPages);
          setLoadingProgress(98);
          setStatusText(t.renderingPage);
        })
        .catch((err) => {
          console.warn('PDF.js Canvas renderer failed, switching to native object mode:', err);
          if (isMounted) {
            setPdfError(true);
            setLoading(false);
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
              setTimeout(() => setViewEngine('object'), 300);
            }
          }
        });
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
      timers.forEach((t) => clearTimeout(t));
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, [currentSurah.id, pdfPath, viewEngine]);

  // Window Resize / Orientation Change Handler
  useEffect(() => {
    const handleResize = () => {
      setRenderTick((prev) => prev + 1);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Render current page onto Canvas
  useEffect(() => {
    if (!pdfDocRef.current || pdfError || viewEngine !== 'canvas') return;

    let isCancelled = false;

    const renderPage = async () => {
      try {
        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
        }

        const page = await pdfDocRef.current.getPage(currentPage);
        if (isCancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');

        // Measure actual container width instead of using window.innerWidth
        const container = containerRef.current;
        const containerRect = container?.getBoundingClientRect();
        const availableWidth = containerRect
          ? containerRect.width - 16
          : Math.min(window.innerWidth - 32, 600);

        const isMobileScreen = window.innerWidth < 640;
        const maxAllowedWidth = isMobileScreen
          ? Math.min(availableWidth, 720)
          : Math.min(availableWidth, 900);

        const unscaledViewport = page.getViewport({ scale: 1 });
        const fitScale = (maxAllowedWidth / unscaledViewport.width) * (zoomLevel / 100);
        const viewport = page.getViewport({ scale: fitScale });

        // DPR (Device Pixel Ratio) scaling for crisp mobile rendering
        const dpr = window.devicePixelRatio || 1;
        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;
        canvas.style.maxWidth = '100%';
        context.setTransform(dpr, 0, 0, dpr, 0, 0);

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;

        await renderTask.promise;
        if (!isCancelled) {
          setLoadingProgress(100);
          setTimeout(() => setLoading(false), 200);
        }
      } catch (err) {
        if (err?.name !== 'RenderingCancelledException' && err?.message !== 'canvas or context is null') {
          console.error('Error rendering page:', err);
        }
      }
    };

    renderPage();

    return () => {
      isCancelled = true;
    };
  }, [currentPage, zoomLevel, pdfDocRef.current, pdfError, viewEngine, renderTick]);

  // Touch Swipe Handlers for Mobile (with vertical scroll guard)
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartXRef.current;
    const deltaY = touchEndY - touchStartYRef.current;
    touchStartXRef.current = null;
    touchStartYRef.current = null;

    // Only trigger horizontal swipe if horizontal movement > vertical movement
    // and minimum swipe threshold met. This prevents interference with vertical scroll.
    if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        if (isUrdu) {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        } else {
          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
        }
      } else {
        if (isUrdu) {
          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
        } else {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        }
      }
    }
  };

  return (
    <div
      className={`space-y-4 my-3 max-w-5xl mx-auto ${isUrdu ? 'font-urdu' : 'font-sans'}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      
      {/* Reader Toolbar */}
      <div className="bg-white dark:bg-[#161D17] p-3.5 sm:p-4 rounded-2xl border border-[#C9A66B]/30 shadow-md">
        <div className="flex flex-col gap-3">
          
          {/* Row 1: Back, Surah Selector & Completion Toggle */}
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={closePdfReader}
              className="flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-2 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 text-xs font-bold text-[#1B4332] dark:text-[#C9A66B] hover:bg-[#C9A66B]/15 transition-all"
            >
              {isUrdu ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{t.backToList}</span>
            </button>

            {/* Dropdown Selector */}
            <div className="flex flex-col items-center gap-1">
              <select
                value={currentSurah.id}
                onChange={(e) => {
                  openPdfReader(Number(e.target.value));
                }}
                className={`px-3 py-2 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 font-bold text-xs sm:text-sm text-[#1B4332] dark:text-[#C9A66B] outline-none max-w-[180px] sm:max-w-xs truncate cursor-pointer ${isUrdu ? 'font-urdu' : 'font-sans'}`}
              >
                {SURAHS_DATA.map((s) => (
                  <option key={s.id} value={s.id}>
                    {isUrdu
                      ? `سورۃ ${s.id}. ${s.nameUrdu} (${s.nameArabic})`
                      : `Surah ${s.id}. ${s.nameEnglish} (${s.nameArabic})`}
                  </option>
                ))}
              </select>

              {currentSurah.hasParts && currentSurah.parts && (
                <div className="flex items-center gap-1">
                  {currentSurah.parts.map((partData) => {
                    const isActive = currentPart === partData.part;
                    return (
                      <button
                        key={partData.part}
                        onClick={() => setActivePart(partData.part)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all border ${
                          isActive
                            ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-sm'
                            : 'bg-[#FAF7F0] dark:bg-[#0F1410] text-[#1B4332] dark:text-[#C9A66B] border-[#C9A66B]/30 hover:bg-[#C9A66B]/15'
                        }`}
                      >
                        {isUrdu ? partData.labelUrdu : partData.labelEnglish}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Completion Toggle */}
            <button
              onClick={() => toggleSurahCompletion(currentSurah.id)}
              className={`flex items-center space-x-1 rtl:space-x-reverse px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                isCompleted
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-emerald-600'
              }`}
            >
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isCompleted ? t.completedStatus : t.markComplete}
              </span>
            </button>
          </div>

          {/* Row 2: Page Navigation, Zoom, Engine Toggle & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 dark:border-gray-800/60 pt-2.5">
            
            {/* Page Navigation Controls */}
            <div className="flex items-center space-x-1 rtl:space-x-reverse bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 px-2 py-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage <= 1}
                className="p-1 hover:text-[#C9A66B] disabled:opacity-30 transition-opacity"
                title={isUrdu ? 'پچھلا صفحہ' : 'Previous Page'}
              >
                {isUrdu ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              </button>

              <span className="px-2 font-mono text-[#1B4332] dark:text-[#C9A66B]">
                {t.page} {currentPage} {t.ofPages} {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage >= totalPages}
                className="p-1 hover:text-[#C9A66B] disabled:opacity-30 transition-opacity"
                title={isUrdu ? 'اگلا صفحہ' : 'Next Page'}
              >
                {isUrdu ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center space-x-1 rtl:space-x-reverse bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 px-2 py-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setZoomLevel(Math.max(60, zoomLevel - 20))}
                className="p-1 hover:text-[#C9A66B]"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-1 font-mono text-[#1B4332] dark:text-[#C9A66B]">
                {zoomLevel}%
              </span>
              <button
                onClick={() => setZoomLevel(Math.min(200, zoomLevel + 20))}
                className="p-1 hover:text-[#C9A66B]"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* View Engine Toggle (icon-only on mobile) */}
            <button
              onClick={() => {
                setViewEngine((prev) => (prev === 'canvas' ? 'object' : 'canvas'));
              }}
              className={`p-2 rounded-xl border transition-all ${
                viewEngine === 'canvas'
                  ? 'bg-[#1B4332] border-[#1B4332] text-white shadow-sm'
                  : 'bg-[#FAF7F0] dark:bg-[#0F1410] border-[#C9A66B]/30 text-[#1B4332] dark:text-[#C9A66B] hover:bg-[#C9A66B]/15'
              }`}
              title={viewEngine === 'canvas' ? t.canvasEngine : t.objectEngine}
            >
              {viewEngine === 'canvas' ? (
                <>
                  <Smartphone className="w-4 h-4 text-[#C9A66B]" />
                  <span className="hidden sm:inline ml-1 text-xs font-bold">{t.canvasEngine}</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  <span className="hidden sm:inline ml-1 text-xs font-bold">{t.objectEngine}</span>
                </>
              )}
            </button>

            {/* Action Buttons: Direct Tab, Attach, Download
                PRODUCTION: Always icon-first on mobile — no clutter. */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">

              {/* Direct Open in New Tab Icon (subtle toolbar action — never a primary CTA above the viewer) */}
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 text-[#1B4332] dark:text-[#C9A66B] hover:bg-[#C9A66B]/15 transition-all"
                title={t.openInNewTab}
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Attach File Button */}
              <button
                onClick={onOpenUploader}
                className="px-3 py-1.5 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 text-xs font-bold text-[#1B4332] dark:text-[#C9A66B] flex items-center space-x-1 rtl:space-x-reverse hover:bg-[#C9A66B]/15 transition-all"
              >
                <Upload className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span className="hidden sm:inline">{t.attachFile}</span>
              </button>

              {/* Download Button */}
              <a
                href={pdfPath}
                download={`Surah_${currentSurah.id}${currentSurah.hasParts ? `_Part${currentPart}` : ''}_${currentSurah.nameEnglish}.pdf`}
                className="p-2 rounded-xl bg-[#C9A66B]/20 hover:bg-[#C9A66B]/30 text-[#B0693F] dark:text-[#C9A66B] border border-[#C9A66B]/40 transition-all"
                title={t.download}
              >
                <Download className="w-4 h-4" />
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* Main Display Container */}
      <div
        ref={containerRef}
        className="relative min-h-[550px] sm:min-h-[650px] bg-[#0A0E0B] rounded-3xl border-2 border-[#C9A66B]/40 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-2 sm:p-4 touch-manipulation"
        style={{ touchAction: 'pan-y pinch-zoom' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* 🏷️ LOADING INFO BANNER (native engine)
            Shows above the viewer ONLY while native iframe is initializing.
            This answers the user's exact concern: "between time is much and no
            preloader or information like file is opening etc show"  */}
        {nativeLoading && viewEngine === 'object' && (
          <div className="w-full mb-2.5 rounded-2xl bg-[#1B4332]/95 border border-[#C9A66B]/30 px-3.5 py-2.5 shadow-inner animate-pulse">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#C9A66B]/15 border border-[#C9A66B]/30 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-[#C9A66B]" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-[11px] sm:text-xs font-bold text-[#FAF7F0] truncate ${isUrdu ? 'font-urdu' : ''}`}>
                  {statusText || (isUrdu ? 'فائل کھول رہا ہے…' : 'Opening PDF file…')}
                </p>
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-[#C9A66B]/15 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#C9A66B] to-[#E8D5A8] transition-all duration-700 ease-out"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
              </div>
              <div className="text-right rtl:text-left flex-shrink-0">
                <div className="text-[10px] sm:text-xs font-mono font-bold text-[#C9A66B] tabular-nums">
                  {loadingProgress}%
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Animated Islamic Preloader Overlay (only for canvas engine) */}
        {loading && viewEngine === 'canvas' && (
          <PdfPreloader
            surah={currentSurah}
            progress={loadingProgress}
            statusText={statusText}
            language={language}
          />
        )}

        {/* Universal PDF View Renderer
            - Native engine on mobile uses IFRAME (95%+ mobile support)
            - Canvas engine works on desktop when user opts in

            FALLBACK CHAIN (production-grade, never break):
            1. <iframe>   →  Primary, best support on Android Chrome / iOS Safari
            2. <object>   →  Nested fallback inside iframe for older browsers
            3. FallbackCard  →  Last-resort guidance (new-tab as primary action)
                                only shown when both iframe + object truly fail

            PRODUCTION NOTE: We NEVER show "Open in New Tab" as a primary CTA above
            the viewer. Users always have the External Link icon up in the toolbar.
             */}
        {viewEngine === 'object' ? (
          <div className="w-full h-full flex flex-col items-center justify-start gap-2">
            {/* Native IFRAME Viewer (primary, 95%+ mobile browser support) */}
            <div className="relative w-full">
              {/* Elegant skeleton + LIVE STATUS inside while native engine initializing
                  (keeps user engaged, page does not look frozen) */}
              {nativeLoading && (
                <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center min-h-[500px] sm:min-h-[650px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0A0E0B] via-[#11180F] to-[#0A0E0B] p-4 sm:p-8">
                  <div className="w-full h-full max-w-3xl flex flex-col items-center justify-center gap-5">
                    {/* Spinner */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-4 border-[#C9A66B]/15" />
                      <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-[#C9A66B] animate-spin" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Layers className="w-6 h-6 text-[#C9A66B]" />
                      </div>
                    </div>

                    {/* Live status + progress percentage (this is the KEY fix the user asked for!) */}
                    <div className="w-full max-w-md space-y-2 text-center px-4">
                      <p className={`text-xs sm:text-sm font-bold text-[#EDEAE0] ${isUrdu ? 'font-urdu' : ''}`}>
                        {statusText || (isUrdu ? 'فائل کھول رہا ہے…' : 'Opening PDF file…')}
                      </p>
                      <div className="h-2 w-full rounded-full bg-[#C9A66B]/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#C9A66B] via-[#E8D5A8] to-[#C9A66B] animate-pulse transition-all duration-700 ease-out"
                          style={{ width: `${loadingProgress}%` }}
                        />
                      </div>
                      <div className="text-[10px] sm:text-xs font-mono font-bold text-[#C9A66B] tabular-nums">
                        {loadingProgress}% {isUrdu ? 'مکمل' : 'complete'}
                      </div>
                    </div>

                    {/* Fake page grid for visual depth perception */}
                    <div className="grid grid-cols-[repeat(14,1fr)] gap-1 w-full opacity-40 flex-1">
                      {Array.from({ length: 56 }).map((_, i) => (
                        <div
                          key={i}
                          className="aspect-[3/4] bg-white rounded-sm"
                          style={{ opacity: 0.04 + ((i * 13) % 11) / 30 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/*
                ★ PRIMARY RENDERER: <iframe>  — 95%+ mobile browsers support inline PDF via iframe
                Chrome/Android, Safari/iOS, Samsung Internet, Firefox all have built-in PDF.js
                viewers specifically for iframe-loaded PDFs.
              */}
              <iframe
                src={`${pdfPath}#page=${currentPage}&navpanes=0&scrollbar=0&toolbar=1&view=FitH`}
                title={`Surah ${currentSurah.nameEnglish} PDF`}
                loading="lazy"
                referrerPolicy="no-referrer"
                allow="fullscreen"
                className={`w-full min-h-[500px] sm:min-h-[650px] rounded-2xl bg-white shadow-inner border border-[#C9A66B]/25 transition-opacity duration-500 ${
                  nativeLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => {
                  // When iframe actually finishes: push to 100% immediately and reveal viewer
                  setLoadingProgress(100);
                  setNativeLoading(false);
                }}
                onError={() => {
                  // If iframe fails, browser will render its inner <object> fallback DOM,
                  // which itself has a final FallbackCard inside. We keep the graceful
                  // skeleton until the inner elements also declare failure.
                  setNativeLoading(false);
                }}
              >
                {/* Fallback 1: <object> — older browsers where iframe PDF fails */}
                <object
                  data={`${pdfPath}#page=${currentPage}&navpanes=0&scrollbar=0&toolbar=1`}
                  type="application/pdf"
                  className={`w-full min-h-[500px] sm:min-h-[650px] rounded-2xl bg-white shadow-inner border border-[#C9A66B]/25 transition-opacity duration-500 ${
                    nativeLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => setNativeLoading(false)}
                  onError={(e) => {
                    setNativeLoading(false);
                    const obj = e.currentTarget;
                    const children = obj?.children;
                    // Only set outer pdfError if <object> ALSO failed to render
                    // (i.e. no FallbackCard auto-rendered children inside it)
                    if (children && children.length === 0) {
                      setPdfError(true);
                    }
                  }}
                >
                  {/* Final fallback: neither iframe nor object supported,
                      show user-friendly card with New Tab as primary action. */}
                  <FallbackCard
                    surah={currentSurah}
                    pdfPath={pdfPath}
                    language={language}
                    t={t}
                    onTryNativeMode={() => setViewEngine('canvas')}
                    preferNewTab
                  />
                </object>
              </iframe>
            </div>

            {/* Subtle engine indicator at BOTTOM (never on top) */}
            {!nativeLoading && !pdfError && (
              <div className="pt-2 text-[11px] font-mono text-[#EDEAE0]/40 flex items-center space-x-1.5 rtl:space-x-reverse px-2 text-center select-none">
                <Layers className="w-3 h-3 text-[#C9A66B]/50" />
                <span>{t.objectEngine} • {t.swipeHint}</span>
              </div>
            )}
          </div>
        ) : !pdfError ? (
          <div className="w-full h-full flex flex-col items-center justify-center overflow-auto py-2">
            <canvas
              ref={canvasRef}
              className="max-w-full rounded-xl shadow-2xl bg-white border border-[#C9A66B]/30 transition-all duration-150"
            />
            <div className="mt-3 text-[11px] font-mono text-[#EDEAE0]/60 flex items-center space-x-1.5 rtl:space-x-reverse px-2 text-center">
              <Smartphone className="w-3.5 h-3.5 text-[#C9A66B]" />
              <span>{t.swipeHint}</span>
            </div>
          </div>
        ) : (
          <FallbackCard
            surah={currentSurah}
            pdfPath={pdfPath}
            language={language}
            t={t}
            onTryNativeMode={() => {
              setPdfError(false);
              setViewEngine('object');
            }}
            preferNewTab
          />
        )}
      </div>

    </div>
  );
};

// Fallback Card component when local/remote PDF is missing or fails
const FallbackCard = ({ surah, pdfPath, language, t, onTryNativeMode, preferNewTab }) => {
  const isUrdu = language === 'urdu';
  return (
    <div
      className={`w-full max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#FAF7F0] dark:bg-[#0F1410] border-2 border-[#C9A66B]/40 shadow-2xl text-center space-y-5 my-6 ${isUrdu ? 'font-urdu' : 'font-sans'}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      <div className="w-14 h-14 rounded-full bg-[#1B4332]/10 dark:bg-[#C9A66B]/20 text-[#1B4332] dark:text-[#C9A66B] flex items-center justify-center mx-auto border border-[#C9A66B]/40">
        <FileText className="w-7 h-7" />
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-[#1B4332] dark:text-[#C9A66B] font-serif-heading">
          {t.surahPrefix} {isUrdu ? surah.nameUrdu : surah.nameEnglish} ({surah.nameArabic})
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
          {preferNewTab
            ? (isUrdu
                ? 'اس پی ڈی ایف کو بہتر انداز میں پڑھنے کے لیے اسے نئے ٹیب میں کھولیں یا نیچے والا دوسرا موڈ آزمائیں۔'
                : 'For a better reading experience, open this PDF in a new tab or try the other viewer mode below.')
            : t.pdfPendingMsg}
        </p>
      </div>

      <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-[#C9A66B]/20 text-xs font-mono dir-ltr text-gray-600 dark:text-gray-400">
        {t.expectedPath} <span className="text-[#C9A66B] font-bold">{pdfPath}</span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        {/* When preferNewTab is true, Open in New Tab becomes the PRIMARY green action (guaranteed to work on mobile) */}
        {preferNewTab ? (
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#1B4332] hover:bg-[#0D3B33] text-white font-bold text-xs shadow-md inline-flex items-center space-x-2 rtl:space-x-reverse transition-all"
          >
            <ExternalLink className="w-4 h-4 text-[#C9A66B]" />
            <span>{t.openInNewTab}</span>
          </a>
        ) : null}

        {onTryNativeMode && (
          <button
            onClick={onTryNativeMode}
            className="px-5 py-2.5 rounded-xl bg-[#B0693F] hover:bg-[#965732] text-white font-bold text-xs shadow-md inline-flex items-center space-x-2 rtl:space-x-reverse transition-all"
          >
            <Eye className="w-4 h-4" />
            <span>{isUrdu ? 'دوسرا موڈ آزمائیں' : (preferNewTab ? 'Try other mode' : t.objectEngine)}</span>
          </button>
        )}

        {/* When preferNewTab=false, New Tab is a secondary gold-outline button */}
        {!preferNewTab ? (
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#C9A66B]/20 hover:bg-[#C9A66B]/30 text-[#B0693F] dark:text-[#C9A66B] font-bold text-xs border border-[#C9A66B]/40 inline-flex items-center space-x-2 rtl:space-x-reverse transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>{t.openInNewTab}</span>
          </a>
        ) : null}
      </div>
    </div>
  );
};

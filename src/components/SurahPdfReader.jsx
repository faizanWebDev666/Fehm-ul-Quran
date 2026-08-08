import React, { useState, useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
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
  Eye,
  Sparkles
} from 'lucide-react';

// Configure PDF.js Worker using unpkg / cdnjs fallback
if (pdfjsLib.GlobalWorkerOptions) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version || '3.11.174'}/pdf.worker.min.js`;
}

export const SurahPdfReader = ({ onOpenUploader }) => {
  const {
    activeSurahId,
    setActiveSurahId,
    closePdfReader,
    getSurahById,
    surahPdfs,
    completedSurahs,
    toggleSurahCompletion,
    language
  } = useQuran();

  const t = translations[language] || translations.urdu;
  const isUrdu = language === 'urdu';

  const currentSurah = getSurahById(activeSurahId || 1);
  const pdfPath = surahPdfs[currentSurah.id] || currentSurah.pdfPath;

  // Reader States
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(10);
  const [statusText, setStatusText] = useState(t.loadingPdf);
  const [pdfError, setPdfError] = useState(false);
  const [viewEngine, setViewEngine] = useState('canvas'); // 'canvas' or 'object'

  // Canvas & PDF References
  const canvasRef = useRef(null);
  const pdfDocRef = useRef(null);
  const renderTaskRef = useRef(null);
  const touchStartXRef = useRef(null);

  const isCompleted = completedSurahs.includes(currentSurah.id);

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

    const loadingTask = pdfjsLib.getDocument(pdfPath);

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
        console.warn('PDF.js Canvas renderer fallback triggered:', err);
        if (isMounted) {
          setPdfError(true);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, [currentSurah.id, pdfPath]);

  // Render current page onto Canvas
  useEffect(() => {
    if (!pdfDocRef.current || pdfError) return;

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
        
        // Calculate appropriate scale for mobile vs desktop screen widths
        const isMobileScreen = window.innerWidth < 640;
        const containerWidth = isMobileScreen 
          ? Math.min(window.innerWidth - 32, 600)
          : Math.min(window.innerWidth - 64, 850);

        const unscaledViewport = page.getViewport({ scale: 1 });
        const fitScale = (containerWidth / unscaledViewport.width) * (zoomLevel / 100);
        const viewport = page.getViewport({ scale: fitScale });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

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
        if (err?.name !== 'RenderingCancelledException') {
          console.error('Error rendering page:', err);
        }
      }
    };

    renderPage();

    return () => {
      isCancelled = true;
    };
  }, [currentPage, zoomLevel, pdfDocRef.current, pdfError]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        // Swipe Left -> Next Page (in LTR) / Prev Page (in RTL Urdu)
        if (isUrdu) {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        } else {
          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
        }
      } else {
        // Swipe Right -> Prev Page (in LTR) / Next Page (in RTL Urdu)
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
            <select
              value={currentSurah.id}
              onChange={(e) => {
                setActiveSurahId(Number(e.target.value));
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

            {/* Action Buttons: Direct Tab, Attach, Download */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              
              {/* Direct Open in New Tab Button (Perfect for Mobile Preview) */}
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-[#1B4332] hover:bg-[#0D3B33] text-white text-xs font-bold flex items-center space-x-1 rtl:space-x-reverse shadow-sm transition-all"
                title={t.openInNewTab}
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span className="hidden sm:inline">{t.openMobileView}</span>
              </a>

              {/* Attach File Button */}
              <button
                onClick={onOpenUploader}
                className="px-3 py-1.5 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 text-xs font-bold text-[#1B4332] dark:text-[#C9A66B] flex items-center space-x-1 rtl:space-x-reverse hover:bg-[#C9A66B]/15 transition-all"
              >
                <Upload className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>{t.attachFile}</span>
              </button>

              {/* Download Button */}
              <a
                href={pdfPath}
                download={`Surah_${currentSurah.id}_${currentSurah.nameEnglish}.pdf`}
                className="px-3 py-1.5 rounded-xl bg-[#C9A66B]/20 hover:bg-[#C9A66B]/30 text-[#B0693F] dark:text-[#C9A66B] border border-[#C9A66B]/40 text-xs font-bold flex items-center space-x-1 rtl:space-x-reverse transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.download}</span>
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* Main Display Container */}
      <div
        className="relative min-h-[550px] sm:min-h-[650px] bg-[#0A0E0B] rounded-3xl border-2 border-[#C9A66B]/40 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-2 sm:p-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Animated Islamic Preloader Overlay */}
        {loading && (
          <PdfPreloader
            surah={currentSurah}
            progress={loadingProgress}
            statusText={statusText}
            language={language}
          />
        )}

        {/* Universal PDF View Renderer */}
        {!pdfError ? (
          viewEngine === 'canvas' ? (
            <div className="w-full h-full flex flex-col items-center justify-center overflow-auto py-2">
              <canvas
                ref={canvasRef}
                className="max-w-full rounded-xl shadow-2xl bg-white border border-[#C9A66B]/30 transition-all duration-150"
              />
              <div className="mt-3 text-[11px] font-mono text-[#EDEAE0]/60 flex items-center space-x-1.5 rtl:space-x-reverse">
                <Smartphone className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>{t.swipeHint}</span>
              </div>
            </div>
          ) : (
            <object
              data={`${pdfPath}#page=${currentPage}`}
              type="application/pdf"
              className="w-full min-h-[600px] rounded-xl shadow-inner bg-white"
              onError={() => setPdfError(true)}
            >
              <FallbackCard surah={currentSurah} pdfPath={pdfPath} onOpenUploader={onOpenUploader} language={language} t={t} />
            </object>
          )
        ) : (
          <FallbackCard surah={currentSurah} pdfPath={pdfPath} onOpenUploader={onOpenUploader} language={language} t={t} />
        )}
      </div>

    </div>
  );
};

// Fallback Card component when local/remote PDF is missing or fails
const FallbackCard = ({ surah, pdfPath, onOpenUploader, language, t }) => {
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
          {t.pdfPendingMsg}
        </p>
      </div>

      <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-[#C9A66B]/20 text-xs font-mono dir-ltr text-gray-600 dark:text-gray-400">
        {t.expectedPath} <span className="text-[#C9A66B] font-bold">{pdfPath}</span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={onOpenUploader}
          className="px-5 py-2.5 rounded-xl bg-[#1B4332] hover:bg-[#0D3B33] text-white font-bold text-xs shadow-md inline-flex items-center space-x-2 rtl:space-x-reverse transition-all"
        >
          <Upload className="w-4 h-4 text-[#C9A66B]" />
          <span>{t.selectPdfFile}</span>
        </button>

        <a
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-[#C9A66B]/20 hover:bg-[#C9A66B]/30 text-[#B0693F] dark:text-[#C9A66B] font-bold text-xs border border-[#C9A66B]/40 inline-flex items-center space-x-2 rtl:space-x-reverse transition-all"
        >
          <ExternalLink className="w-4 h-4" />
          <span>{t.openInNewTab}</span>
        </a>
      </div>
    </div>
  );
};

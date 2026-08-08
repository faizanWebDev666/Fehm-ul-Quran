import React, { useState, useEffect } from 'react';
import { useQuran } from '../context/QuranContext';
import { SURAHS_DATA } from '../data/quranData';
import {
  FileText,
  ChevronRight,
  ChevronLeft,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Download,
  Bookmark,
  CheckCircle2,
  Upload,
  BookOpen,
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

export const SurahPdfViewer = ({ onOpenUploader }) => {
  const {
    selectedSurahId,
    setSelectedSurahId,
    getSurahById,
    surahPdfs,
    completedSurahs,
    toggleSurahCompletion,
    addPageBookmark,
    surahPdfProgress,
    updatePdfProgress,
    openSurahText,
    setActiveView
  } = useQuran();

  const currentSurah = getSurahById(selectedSurahId);
  const pdfPath = surahPdfs[currentSurah.id] || currentSurah.pdfPath;

  // Local PDF Viewer State
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  // Sync saved page number if available
  useEffect(() => {
    if (surahPdfProgress[currentSurah.id]?.page) {
      setCurrentPage(surahPdfProgress[currentSurah.id].page);
    } else {
      setCurrentPage(1);
    }
    setPdfError(false);
  }, [selectedSurahId]);

  const handlePageChange = (newPage) => {
    const pageNum = Math.max(1, newPage);
    setCurrentPage(pageNum);
    updatePdfProgress(currentSurah.id, pageNum);
  };

  const isCompleted = completedSurahs.includes(currentSurah.id);

  const toggleFullScreenMode = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div
      className={`space-y-4 my-6 ${
        isFullScreen
          ? 'fixed inset-0 z-50 bg-[#0F1410] p-4 overflow-y-auto'
          : ''
      }`}
    >
      {/* Top Header & Navigation Bar */}
      <div className="bg-white/90 dark:bg-[#161D17]/90 p-4 rounded-2xl border border-[#C9A66B]/30 shadow-lg font-urdu" dir="rtl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Surah Dropdown Selector & Title */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <button
              onClick={() => setActiveView('library')}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-[#C9A66B]/20 text-[#1B4332] dark:text-[#C9A66B] transition-colors"
              title="واپس لائبریری"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="w-10 h-10 rounded-xl bg-[#1B4332] text-[#C9A66B] font-mono font-bold flex items-center justify-center border border-[#C9A66B]/40 text-sm">
              {currentSurah.id}
            </div>

            <div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <select
                  value={currentSurah.id}
                  onChange={(e) => setSelectedSurahId(Number(e.target.value))}
                  className="font-bold text-lg text-[#1B4332] dark:text-[#C9A66B] bg-transparent border-b border-[#C9A66B]/40 focus:border-[#C9A66B] outline-none cursor-pointer py-0.5"
                >
                  {SURAHS_DATA.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#FAF7F0] dark:bg-[#0F1410] text-[#22261F] dark:text-[#EDEAE0]">
                      سورۃ {s.id}. {s.nameUrdu} ({s.nameArabic}) - پارہ {s.para}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-xs text-gray-500 font-sans-ui">
                {currentSurah.nameEnglish} • {currentSurah.revelationType === 'Makki' ? 'مکی' : 'مدنی'} • {currentSurah.ayahCount} آیات
              </p>
            </div>
          </div>

          {/* PDF Viewer Controls Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Page Navigation */}
            <div className="flex items-center space-x-1 rtl:space-x-reverse bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 px-2 py-1 rounded-xl">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className="p-1 hover:text-[#C9A66B] disabled:opacity-40"
                title="پچھلا صفحہ"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold px-2 text-[#1B4332] dark:text-[#C9A66B]">
                صفحہ {currentPage}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="p-1 hover:text-[#C9A66B]"
                title="اگلا صفحہ"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center space-x-1 rtl:space-x-reverse bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 px-2 py-1 rounded-xl">
              <button
                onClick={() => setZoomLevel(Math.max(50, zoomLevel - 25))}
                className="p-1 hover:text-[#C9A66B]"
                title="چھوٹا کریں"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-1 font-bold text-[#1B4332] dark:text-[#C9A66B]">
                {zoomLevel}%
              </span>
              <button
                onClick={() => setZoomLevel(Math.min(200, zoomLevel + 25))}
                className="p-1 hover:text-[#C9A66B]"
                title="بڑا کریں"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Bookmark Page */}
            <button
              onClick={() => addPageBookmark(currentSurah.id, currentPage, currentSurah.nameUrdu)}
              className="p-2.5 rounded-xl border border-[#C9A66B]/30 hover:border-[#C9A66B] bg-[#FAF7F0] dark:bg-[#0F1410] text-[#B0693F] dark:text-[#C9A66B] transition-all"
              title="صفحہ محفوظ کریں"
            >
              <Bookmark className="w-4 h-4" />
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullScreenMode}
              className="p-2.5 rounded-xl border border-[#C9A66B]/30 hover:border-[#C9A66B] bg-[#FAF7F0] dark:bg-[#0F1410] text-[#1B4332] dark:text-[#C9A66B] transition-all"
              title="فل سکرین"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* PDF File Manager / Upload Trigger */}
            <button
              onClick={onOpenUploader}
              className="p-2.5 rounded-xl border border-[#C9A66B]/30 hover:border-[#C9A66B] bg-[#FAF7F0] dark:bg-[#0F1410] text-[#1B4332] dark:text-[#C9A66B] flex items-center space-x-1 rtl:space-x-reverse text-xs font-bold transition-all"
              title="سورۃ کی پی ڈی ایف اپلوڈ کریں"
            >
              <Upload className="w-4 h-4 text-[#C9A66B]" />
              <span className="hidden sm:inline">اپلوڈ</span>
            </button>

            {/* Download PDF Button */}
            <a
              href={pdfPath}
              download={`Surah_${currentSurah.id}_${currentSurah.nameEnglish}.pdf`}
              className="p-2.5 rounded-xl bg-[#C9A66B]/20 hover:bg-[#C9A66B]/30 border border-[#C9A66B]/40 text-[#B0693F] dark:text-[#C9A66B] flex items-center space-x-1 rtl:space-x-reverse text-xs font-bold transition-all"
              title="ڈاؤن لوڈ"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">ڈاؤن لوڈ</span>
            </a>

            {/* Completion Toggle */}
            <button
              onClick={() => toggleSurahCompletion(currentSurah.id)}
              className={`flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                isCompleted
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-emerald-600'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'مکمل شدہ' : 'مکمل نشان دیں'}</span>
            </button>

          </div>

        </div>
      </div>

      {/* Main PDF Viewer Display Body */}
      <div className="relative min-h-[650px] bg-stone-900 rounded-3xl border-2 border-[#C9A66B]/30 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-4">
        
        {/* If PDF path exists and no error, render iframe/object */}
        {!pdfError ? (
          <div
            className="w-full h-full flex items-center justify-center transition-all duration-300"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          >
            <object
              data={`${pdfPath}#page=${currentPage}`}
              type="application/pdf"
              className="w-full min-h-[650px] rounded-xl shadow-inner bg-white"
              onError={() => setPdfError(true)}
            >
              {/* Fallback component rendered inside object if PDF fails to render */}
              <FallbackPdfCard
                surah={currentSurah}
                pdfPath={pdfPath}
                onOpenUploader={onOpenUploader}
                openSurahText={openSurahText}
              />
            </object>
          </div>
        ) : (
          <FallbackPdfCard
            surah={currentSurah}
            pdfPath={pdfPath}
            onOpenUploader={onOpenUploader}
            openSurahText={openSurahText}
          />
        )}

      </div>
    </div>
  );
};

// Fallback card when actual PDF is pending upload
const FallbackPdfCard = ({ surah, pdfPath, onOpenUploader, openSurahText }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-8 rounded-2xl bg-[#FAF7F0] dark:bg-[#0F1410] border-2 border-[#C9A66B]/40 shadow-2xl text-center space-y-6 font-urdu" dir="rtl">
      
      <div className="w-16 h-16 rounded-full bg-[#1B4332]/10 dark:bg-[#C9A66B]/20 text-[#1B4332] dark:text-[#C9A66B] flex items-center justify-center mx-auto border border-[#C9A66B]/40">
        <FileText className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-[#C9A66B]/15 text-[#B0693F] dark:text-[#C9A66B] text-xs font-bold">
          <Sparkles className="w-4 h-4" />
          <span>سورۃ پی ڈی ایف سٹرکچر (PDF Ready)</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#1B4332] dark:text-[#C9A66B] font-serif-heading">
          سورۃ {surah.nameUrdu} ({surah.nameArabic})
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
          اس سورۃ کی پی ڈی ایف فائل فہم القرآن سرور پر لوڈ کی جا سکتی ہے یا آپ اپنے ڈیوائس سے لوکل پی ڈی ایف منتخب کر سکتے ہیں۔
        </p>
      </div>

      {/* Target Path Info Box */}
      <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-[#C9A66B]/20 text-xs font-mono dir-ltr text-center text-gray-600 dark:text-gray-400">
        Default file path: <span className="text-[#C9A66B] font-bold">{pdfPath}</span>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <button
          onClick={onOpenUploader}
          className="px-6 py-3 rounded-xl bg-[#1B4332] hover:bg-[#0D3B33] text-white font-bold text-sm shadow-md flex items-center space-x-2 rtl:space-x-reverse transition-all"
        >
          <Upload className="w-4 h-4 text-[#C9A66B]" />
          <span>اس سورۃ کی PDF فائل اپلوڈ / منتخب کریں</span>
        </button>

        <button
          onClick={() => openSurahText(surah.id)}
          className="px-6 py-3 rounded-xl bg-[#B0693F] hover:bg-[#965732] text-white font-bold text-sm shadow-md flex items-center space-x-2 rtl:space-x-reverse transition-all"
        >
          <BookOpen className="w-4 h-4" />
          <span>اردو ترجمہ مودودیؒ متنی موڈ میں پڑھیں</span>
        </button>
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 flex items-center justify-center space-x-2 rtl:space-x-reverse">
        <Info className="w-4 h-4 text-[#C9A66B]" />
        <span>آئندہ جب آپ /public/pdfs/ میں فائل رکھیں گے، پی ڈی ایف یہی خودکار ظاہر ہوگی۔</span>
      </div>
    </div>
  );
};

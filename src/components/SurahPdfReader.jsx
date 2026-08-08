import React, { useState } from 'react';
import { useQuran } from '../context/QuranContext';
import { SURAHS_DATA } from '../data/quranData';
import { translations } from '../utils/translations';
import {
  FileText,
  ChevronRight,
  ChevronLeft,
  ZoomIn,
  ZoomOut,
  Download,
  CheckCircle2,
  Upload,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Info,
  Check
} from 'lucide-react';

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

  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [pdfError, setPdfError] = useState(false);

  const isCompleted = completedSurahs.includes(currentSurah.id);

  return (
    <div
      className={`space-y-4 my-3 max-w-5xl mx-auto ${isUrdu ? 'font-urdu' : 'font-sans'}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      
      {/* Top Mobile Friendly Reader Toolbar */}
      <div className="bg-white dark:bg-[#161D17] p-3.5 sm:p-4 rounded-2xl border border-[#C9A66B]/30 shadow-md">
        <div className="flex flex-col gap-3">
          
          {/* Row 1: Back Button & Surah Selector */}
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={closePdfReader}
              className="flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-2 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 text-xs font-bold text-[#1B4332] dark:text-[#C9A66B] hover:bg-[#C9A66B]/15"
            >
              {isUrdu ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{t.backToList}</span>
            </button>

            {/* Surah Selector Dropdown */}
            <select
              value={currentSurah.id}
              onChange={(e) => {
                setActiveSurahId(Number(e.target.value));
                setCurrentPage(1);
                setPdfError(false);
              }}
              className={`px-3 py-2 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 font-bold text-sm text-[#1B4332] dark:text-[#C9A66B] outline-none max-w-[220px] sm:max-w-xs truncate ${isUrdu ? 'font-urdu' : 'font-sans'}`}
            >
              {SURAHS_DATA.map((s) => (
                <option key={s.id} value={s.id}>
                  {isUrdu
                    ? `سورۃ ${s.id}. ${s.nameUrdu} (${s.nameArabic})`
                    : `Surah ${s.id}. ${s.nameEnglish} - ${s.englishMeaning} (${s.nameArabic})`}
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

          {/* Row 2: Page Nav, Zoom & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 dark:border-gray-800/60 pt-2.5">
            
            {/* Page Navigation */}
            <div className="flex items-center space-x-1 rtl:space-x-reverse bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 px-2 py-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage <= 1}
                className="p-1 hover:text-[#C9A66B] disabled:opacity-40"
              >
                {isUrdu ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              </button>
              <span className="px-2 font-mono text-[#1B4332] dark:text-[#C9A66B]">
                {t.page} {currentPage}
              </span>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="p-1 hover:text-[#C9A66B]"
              >
                {isUrdu ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center space-x-1 rtl:space-x-reverse bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 px-2 py-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setZoomLevel(Math.max(50, zoomLevel - 25))}
                className="p-1 hover:text-[#C9A66B]"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-1 font-mono text-[#1B4332] dark:text-[#C9A66B]">
                {zoomLevel}%
              </span>
              <button
                onClick={() => setZoomLevel(Math.min(200, zoomLevel + 25))}
                className="p-1 hover:text-[#C9A66B]"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Upload & Download Buttons */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <button
                onClick={onOpenUploader}
                className="px-3 py-1.5 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 text-xs font-bold text-[#1B4332] dark:text-[#C9A66B] flex items-center space-x-1 rtl:space-x-reverse"
              >
                <Upload className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>{t.attachFile}</span>
              </button>

              <a
                href={pdfPath}
                download={`Surah_${currentSurah.id}_${currentSurah.nameEnglish}.pdf`}
                className="px-3 py-1.5 rounded-xl bg-[#C9A66B]/20 text-[#B0693F] dark:text-[#C9A66B] border border-[#C9A66B]/40 text-xs font-bold flex items-center space-x-1 rtl:space-x-reverse"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t.download}</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Main Display Container */}
      <div className="relative min-h-[600px] bg-stone-900 rounded-3xl border-2 border-[#C9A66B]/30 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-3 sm:p-4">
        {!pdfError ? (
          <div
            className="w-full h-full flex items-center justify-center transition-all duration-200"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          >
            <object
              data={`${pdfPath}#page=${currentPage}`}
              type="application/pdf"
              className="w-full min-h-[600px] rounded-xl shadow-inner bg-white"
              onError={() => setPdfError(true)}
            >
              <FallbackCard surah={currentSurah} pdfPath={pdfPath} onOpenUploader={onOpenUploader} language={language} t={t} />
            </object>
          </div>
        ) : (
          <FallbackCard surah={currentSurah} pdfPath={pdfPath} onOpenUploader={onOpenUploader} language={language} t={t} />
        )}
      </div>

    </div>
  );
};

const FallbackCard = ({ surah, pdfPath, onOpenUploader, language, t }) => {
  const isUrdu = language === 'urdu';
  return (
    <div
      className={`w-full max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#FAF7F0] dark:bg-[#0F1410] border-2 border-[#C9A66B]/40 shadow-2xl text-center space-y-5 ${isUrdu ? 'font-urdu' : 'font-sans'}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      <div className="w-14 h-14 rounded-full bg-[#1B4332]/10 dark:bg-[#C9A66B]/20 text-[#1B4332] dark:text-[#C9A66B] flex items-center justify-center mx-auto border border-[#C9A66B]/40">
        <FileText className="w-7 h-7" />
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-[#1B4332] dark:text-[#C9A66B] font-serif-heading">
          {t.surahPrefix} {isUrdu ? surah.nameUrdu : surah.nameEnglish} ({surah.nameArabic})
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
          {t.pdfPendingMsg}
        </p>
      </div>

      <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-[#C9A66B]/20 text-xs font-mono dir-ltr text-gray-600 dark:text-gray-400">
        {t.expectedPath} <span className="text-[#C9A66B] font-bold">{pdfPath}</span>
      </div>

      <button
        onClick={onOpenUploader}
        className="px-6 py-3 rounded-xl bg-[#1B4332] hover:bg-[#0D3B33] text-white font-bold text-sm shadow-md inline-flex items-center space-x-2 rtl:space-x-reverse"
      >
        <Upload className="w-4 h-4 text-[#C9A66B]" />
        <span>{t.selectPdfFile}</span>
      </button>
    </div>
  );
};

import React, { useState } from 'react';
import { useQuran } from '../context/QuranContext';
import { SURAHS_DATA } from '../data/quranData';
import { translations } from '../utils/translations';
import { X, Upload, FileText, Check, Link as LinkIcon, Info, Sparkles } from 'lucide-react';

export const PdfUploaderModal = ({ isOpen, onClose }) => {
  const {
    activeSurahId,
    setSurahPdfUrl,
    surahPdfs,
    getSurahById,
    openPdfReader,
    language
  } = useQuran();

  const t = translations[language] || translations.urdu;
  const isUrdu = language === 'urdu';

  const [targetSurahId, setTargetSurahId] = useState(activeSurahId || 1);
  const [customUrl, setCustomUrl] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const currentTargetSurah = getSurahById(targetSurahId);
  const currentAssignedUrl = surahPdfs[targetSurahId] || currentTargetSurah.pdfPath;

  const surahName = isUrdu ? currentTargetSurah.nameUrdu : currentTargetSurah.nameEnglish;

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileObjectUrl = URL.createObjectURL(file);
      setSurahPdfUrl(targetSurahId, fileObjectUrl);
      setSuccessMsg(`${t.surahPrefix} ${surahName}: ${t.attachedSuccess}`);
      setTimeout(() => setSuccessMsg(''), 4000);
    } else {
      alert(t.selectPdfError);
    }
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (customUrl.trim()) {
      setSurahPdfUrl(targetSurahId, customUrl.trim());
      setSuccessMsg(`${t.surahPrefix} ${surahName}: ${t.linkUpdatedSuccess}`);
      setCustomUrl('');
      setTimeout(() => setSuccessMsg(''), 4000);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto ${isUrdu ? 'font-urdu' : 'font-sans'}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-lg rounded-3xl bg-[#FAF7F0] dark:bg-[#0F1410] border-2 border-[#C9A66B]/40 shadow-2xl overflow-hidden p-6 space-y-6">
          
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-[#C9A66B]/30 pb-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-xl bg-[#1B4332] text-[#C9A66B] flex items-center justify-center border border-[#C9A66B]/40 shrink-0">
                <Upload className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1B4332] dark:text-[#C9A66B]">
                  {t.modalTitle}
                </h3>
                <p className="text-xs text-gray-500">
                  {t.modalSubtitle}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Alert / Success Toast */}
          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-600/15 border border-emerald-600/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center space-x-2 rtl:space-x-reverse animate-fade-in">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Form Content */}
          <div className="space-y-5">
            
            {/* Surah Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                {t.selectSurahLabel}
              </label>
              <select
                value={targetSurahId}
                onChange={(e) => setTargetSurahId(Number(e.target.value))}
                className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#161D17] border border-[#C9A66B]/40 text-sm font-bold outline-none ${isUrdu ? 'font-urdu' : 'font-sans'}`}
              >
                {SURAHS_DATA.map((s) => (
                  <option key={s.id} value={s.id}>
                    {isUrdu
                      ? `سورۃ ${s.id}. ${s.nameUrdu} (${s.nameArabic}) - پارہ ${s.para}`
                      : `Surah ${s.id}. ${s.nameEnglish} - ${s.englishMeaning} (${s.nameArabic}) - Juz ${s.para}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Method 1: Local PDF File Selection */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#161D17] border border-[#C9A66B]/30 space-y-3">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs font-bold text-[#1B4332] dark:text-[#C9A66B]">
                <FileText className="w-4 h-4 text-[#C9A66B]" />
                <span>{t.chooseDevicePdf}</span>
              </div>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileUpload}
                className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#1B4332] file:text-white hover:file:bg-[#0D3B33] cursor-pointer"
              />
            </div>

            {/* Method 2: Dynamic PDF URL Link */}
            <form onSubmit={handleUrlSubmit} className="p-4 rounded-2xl bg-white dark:bg-[#161D17] border border-[#C9A66B]/30 space-y-3">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs font-bold text-[#1B4332] dark:text-[#C9A66B]">
                <LinkIcon className="w-4 h-4 text-[#C9A66B]" />
                <span>{t.orEnterUrl}</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={t.urlPlaceholder}
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] border border-gray-300 dark:border-gray-700 text-xs dir-ltr text-left outline-none font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1B4332] text-white text-xs font-bold rounded-xl hover:bg-[#0D3B33]"
                >
                  {t.saveUrlBtn}
                </button>
              </div>
            </form>

            {/* Currently Assigned Link Info */}
            <div className="p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border border-[#C9A66B]/20 text-xs space-y-1">
              <span className="font-bold text-[#1B4332] dark:text-[#C9A66B]">
                {t.currentlyAttached}
              </span>
              <p className="font-mono text-[11px] text-gray-600 dark:text-gray-400 break-all dir-ltr text-left">
                {currentAssignedUrl}
              </p>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-[#C9A66B]/30 gap-2">
            <button
              onClick={() => {
                openPdfReader(targetSurahId);
                onClose();
              }}
              className="px-4 py-2.5 rounded-xl bg-[#1B4332] text-white font-bold text-xs flex items-center space-x-2 rtl:space-x-reverse"
            >
              <FileText className="w-4 h-4 text-[#C9A66B]" />
              <span>{t.readPdf}: {t.surahPrefix} {surahName}</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-400"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

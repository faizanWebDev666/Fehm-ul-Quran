import React, { useState } from 'react';
import { useQuran } from '../context/QuranContext';
import { SURAHS_DATA, SAMPLE_SURAH_VERSES } from '../data/quranData';
import {
  BookOpen,
  FileText,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Bookmark,
  Volume2,
  VolumeX,
  Type,
  ArrowRight,
  Info,
  Sparkles
} from 'lucide-react';

export const SurahTextReader = () => {
  const {
    selectedSurahId,
    setSelectedSurahId,
    getSurahById,
    completedSurahs,
    toggleSurahCompletion,
    openSurahPdf,
    setActiveView
  } = useQuran();

  const currentSurah = getSurahById(selectedSurahId);
  const sampleData = SAMPLE_SURAH_VERSES[currentSurah.id] || SAMPLE_SURAH_VERSES[1];

  const [fontSize, setFontSize] = useState(24); // Arabic font size in px
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showNotes, setShowNotes] = useState(true);

  const isCompleted = completedSurahs.includes(currentSurah.id);

  const handleNextSurah = () => {
    if (currentSurah.id < 114) {
      setSelectedSurahId(currentSurah.id + 1);
    }
  };

  const handlePrevSurah = () => {
    if (currentSurah.id > 1) {
      setSelectedSurahId(currentSurah.id - 1);
    }
  };

  return (
    <div className="space-y-6 my-6 font-urdu" dir="rtl">
      
      {/* Reader Control Header */}
      <div className="bg-white/90 dark:bg-[#161D17]/90 p-4 rounded-2xl border border-[#C9A66B]/30 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <button
              onClick={() => setActiveView('library')}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-[#C9A66B]/20 text-[#1B4332] dark:text-[#C9A66B]"
              title="واپس لائبریری"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="w-10 h-10 rounded-xl bg-[#1B4332] text-[#C9A66B] font-mono font-bold flex items-center justify-center border border-[#C9A66B]/40 text-sm">
              {currentSurah.id}
            </div>

            <div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <h2 className="text-xl font-bold text-[#1B4332] dark:text-[#C9A66B]">
                  سورۃ {currentSurah.nameUrdu} ({currentSurah.nameArabic})
                </h2>
                <span className="bg-[#C9A66B]/15 text-[#B0693F] dark:text-[#C9A66B] text-xs font-bold px-2 py-0.5 rounded-full">
                  ترجمہ: مولانا مودودیؒ
                </span>
              </div>
              <p className="text-xs text-gray-500 font-sans-ui">
                پارہ {currentSurah.para} • {currentSurah.revelationType === 'Makki' ? 'مکی' : 'مدنی'} • {currentSurah.ayahCount} آیات
              </p>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Font Size Adjuster */}
            <div className="flex items-center space-x-1 rtl:space-x-reverse bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 px-2 py-1.5 rounded-xl text-xs font-bold">
              <Type className="w-4 h-4 text-[#C9A66B]" />
              <span>فونٹ سائز:</span>
              <button
                onClick={() => setFontSize(Math.max(18, fontSize - 2))}
                className="px-2 py-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                -
              </button>
              <span className="font-mono text-[#C9A66B]">{fontSize}px</span>
              <button
                onClick={() => setFontSize(Math.min(40, fontSize + 2))}
                className="px-2 py-0.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                +
              </button>
            </div>

            {/* Footnotes Toggle */}
            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`px-3 py-1.5 rounded-xl border border-[#C9A66B]/30 text-xs font-bold transition-all ${
                showNotes
                  ? 'bg-[#C9A66B]/20 text-[#B0693F] dark:text-[#C9A66B]'
                  : 'bg-[#FAF7F0] dark:bg-[#0F1410] text-gray-500'
              }`}
            >
              حواشی تفہیم: {showNotes ? 'آن' : 'آف'}
            </button>

            {/* Switch to PDF View */}
            <button
              onClick={() => openSurahPdf(currentSurah.id)}
              className="flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1.5 rounded-xl bg-[#1B4332] text-white text-xs font-bold shadow-sm"
            >
              <FileText className="w-4 h-4 text-[#C9A66B]" />
              <span>پی ڈی ایف (PDF) میں کھولیں</span>
            </button>

            {/* Completion Toggle */}
            <button
              onClick={() => toggleSurahCompletion(currentSurah.id)}
              className={`flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                isCompleted
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'مکمل' : 'مکمل نشان دیں'}</span>
            </button>

          </div>

        </div>
      </div>

      {/* Main Reading Canvas */}
      <div className="bg-[#FAF7F0] dark:bg-[#0F1410] rounded-3xl border-2 border-[#C9A66B]/30 p-6 sm:p-10 shadow-xl space-y-8">
        
        {/* Bismillah Header */}
        <div className="text-center py-6 border-b border-[#C9A66B]/30 space-y-3">
          <div className="font-quran text-3xl sm:text-4xl text-[#1B4332] dark:text-[#C9A66B] font-bold leading-relaxed">
            {sampleData.bismillah}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-urdu">
            شروع اللہ کے نام سے جو بے حد مہربان اور نہایت رحم فرمانے والا ہے
          </p>
        </div>

        {/* Verses Container */}
        <div className="space-y-8">
          {sampleData.verses.map((v) => (
            <div
              key={v.number}
              className="p-6 rounded-2xl bg-white/80 dark:bg-[#161D17]/80 border border-[#C9A66B]/20 hover:border-[#C9A66B]/60 shadow-sm transition-all space-y-4"
            >
              {/* Arabic Verse */}
              <div className="flex items-start justify-between gap-4">
                <div
                  className="font-quran text-[#1B4332] dark:text-[#FAF7F0] leading-loose text-right flex-1"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {v.arabic}
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#C9A66B]/60 text-[#C9A66B] font-mono text-xs font-bold mr-3 bg-[#C9A66B]/10">
                    ﴿{v.number}﴾
                  </span>
                </div>
              </div>

              {/* Urdu Translation by Maulana Maududi */}
              <div className="pt-3 border-t border-gray-100 dark:border-gray-800 space-y-2">
                <div className="text-xs text-[#B0693F] dark:text-[#C9A66B] font-bold flex items-center space-x-1 rtl:space-x-reverse">
                  <span>ترجمہ تفہیم القرآن:</span>
                </div>
                <p className="font-urdu text-base sm:text-lg text-[#22261F] dark:text-[#EDEAE0] leading-relaxed">
                  {v.urduTarjuma}
                </p>
              </div>

              {/* Maududi Tafseer Note / Footnote */}
              {showNotes && v.maududiNote && (
                <div className="p-3.5 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] border-r-4 border-[#C9A66B] text-xs text-gray-700 dark:text-gray-300 space-y-1">
                  <div className="font-bold text-[#1B4332] dark:text-[#C9A66B] flex items-center space-x-1 rtl:space-x-reverse">
                    <Info className="w-3.5 h-3.5" />
                    <span>حاشیہ مولانا مودودیؒ:</span>
                  </div>
                  <p className="leading-relaxed">{v.maududiNote}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Navigation (Prev / Next Surah) */}
        <div className="flex items-center justify-between pt-6 border-t border-[#C9A66B]/30">
          <button
            onClick={handlePrevSurah}
            disabled={currentSurah.id <= 1}
            className="flex items-center space-x-2 rtl:space-x-reverse px-5 py-3 rounded-xl bg-white dark:bg-[#161D17] border border-[#C9A66B]/30 hover:border-[#C9A66B] text-sm font-bold disabled:opacity-40"
          >
            <ChevronRight className="w-4 h-4" />
            <span>پچھلی سورۃ ({currentSurah.id > 1 ? currentSurah.id - 1 : 1})</span>
          </button>

          <button
            onClick={handleNextSurah}
            disabled={currentSurah.id >= 114}
            className="flex items-center space-x-2 rtl:space-x-reverse px-5 py-3 rounded-xl bg-[#1B4332] text-white hover:bg-[#0D3B33] text-sm font-bold disabled:opacity-40 shadow-md"
          >
            <span>اگلی سورۃ ({currentSurah.id < 114 ? currentSurah.id + 1 : 114})</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

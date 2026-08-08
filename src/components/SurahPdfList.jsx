import React, { useState } from 'react';
import { useQuran } from '../context/QuranContext';
import { SURAHS_DATA } from '../data/quranData';
import { translations } from '../utils/translations';
import { Search, FileText, CheckCircle2, Check, X, Sparkles } from 'lucide-react';

export const SurahPdfList = ({ onOpenUploader }) => {
  const { completedSurahs, toggleSurahCompletion, openPdfReader, language } = useQuran();
  const t = translations[language] || translations.urdu;
  const isUrdu = language === 'urdu';

  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all', 'Makki', 'Madani', 'completed'

  const completedCount = completedSurahs.length;

  // Search & Filter Logic
  const filteredSurahs = SURAHS_DATA.filter((s) => {
    const searchLower = search.trim().toLowerCase();
    const matchesSearch =
      s.nameArabic.includes(search) ||
      s.nameUrdu.includes(search) ||
      s.nameEnglish.toLowerCase().includes(searchLower) ||
      (s.englishMeaning && s.englishMeaning.toLowerCase().includes(searchLower)) ||
      s.id.toString() === search.trim();

    if (!matchesSearch) return false;

    if (filterType === 'Makki') return s.revelationType === 'Makki';
    if (filterType === 'Madani') return s.revelationType === 'Madani';
    if (filterType === 'completed') return completedSurahs.includes(s.id);
    return true;
  });

  return (
    <div
      className={`space-y-6 my-4 sm:my-6 max-w-4xl mx-auto ${isUrdu ? 'font-urdu' : 'font-sans'}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      
      {/* Top Mobile Friendly Banner */}
      <div className="bg-gradient-to-br from-[#1B4332] via-[#0D3B33] to-[#0A2923] text-white p-5 sm:p-7 rounded-3xl border-2 border-[#C9A66B]/40 shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs px-3 py-1 rounded-full bg-[#C9A66B]/20 text-[#C9A66B] font-bold border border-[#C9A66B]/30">
            {t.bannerBadge}
          </span>
          <span className="text-xs text-[#C9A66B] font-mono font-bold">
            {completedCount} / 114 {t.completed}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#FAF7F0]">
          {t.bannerTitle}
        </h2>
        <p className="text-xs sm:text-sm text-[#EDEAE0]/80 leading-relaxed">
          {t.bannerDesc}
        </p>

        {/* Progress Bar */}
        <div className="pt-2">
          <div className="h-2.5 w-full bg-black/40 rounded-full overflow-hidden p-0.5 border border-[#C9A66B]/30">
            <div
              className="h-full bg-gradient-to-r from-[#C9A66B] to-[#B0693F] rounded-full transition-all duration-500"
              style={{ width: `${Math.max(Math.round((completedCount / 114) * 100), 2)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Search Input & Quick Filters */}
      <div className="space-y-3">
        
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full py-3.5 ${isUrdu ? 'pr-11 pl-10' : 'pl-11 pr-10'} rounded-2xl bg-white dark:bg-[#161D17] border-2 border-[#C9A66B]/30 focus:border-[#C9A66B] text-base text-[#1B4332] dark:text-[#EDEAE0] shadow-md outline-none placeholder:text-gray-400 ${isUrdu ? 'font-urdu' : 'font-sans'}`}
          />
          <Search className={`w-5 h-5 text-[#C9A66B] absolute ${isUrdu ? 'right-4' : 'left-4'} top-4 pointer-events-none`} />
          {search && (
            <button
              onClick={() => setSearch('')}
              className={`p-1 rounded-full text-gray-400 hover:text-gray-600 absolute ${isUrdu ? 'left-3' : 'right-3'} top-3.5`}
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold pt-1">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-xl transition-all ${
              filterType === 'all'
                ? 'bg-[#1B4332] text-white shadow-sm'
                : 'bg-white dark:bg-[#161D17] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800'
            }`}
          >
            {t.allSurahs} (114)
          </button>

          <button
            onClick={() => setFilterType('Makki')}
            className={`px-4 py-2 rounded-xl transition-all ${
              filterType === 'Makki'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white dark:bg-[#161D17] text-amber-700 dark:text-amber-300 border border-gray-200 dark:border-gray-800'
            }`}
          >
            {t.makkiSurahs} (86)
          </button>

          <button
            onClick={() => setFilterType('Madani')}
            className={`px-4 py-2 rounded-xl transition-all ${
              filterType === 'Madani'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white dark:bg-[#161D17] text-emerald-700 dark:text-emerald-300 border border-gray-200 dark:border-gray-800'
            }`}
          >
            {t.madaniSurahs} (28)
          </button>

          <button
            onClick={() => setFilterType('completed')}
            className={`px-4 py-2 rounded-xl transition-all ${
              filterType === 'completed'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white dark:bg-[#161D17] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800'
            }`}
          >
            {t.completedSurahs} ({completedCount})
          </button>
        </div>

      </div>

      {/* Surah List Cards */}
      <div className="space-y-3">
        {filteredSurahs.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-[#161D17] rounded-3xl border border-[#C9A66B]/30 p-6 space-y-3">
            <p className="text-gray-500 font-bold">{t.noSurahFound}</p>
            <button
              onClick={() => {
                setSearch('');
                setFilterType('all');
              }}
              className="text-xs text-[#C9A66B] font-bold underline"
            >
              {t.showAllSurahs}
            </button>
          </div>
        ) : (
          filteredSurahs.map((surah) => {
            const isCompleted = completedSurahs.includes(surah.id);

            return (
              <div
                key={surah.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 ${
                  isCompleted
                    ? 'bg-emerald-950/10 dark:bg-emerald-950/30 border-emerald-600/40'
                    : 'bg-white dark:bg-[#161D17] border-[#C9A66B]/30 hover:border-[#C9A66B]'
                }`}
              >
                
                {/* Surah Info */}
                <div className="flex items-center space-x-3.5 rtl:space-x-reverse flex-1">
                  
                  {/* Surah Number Emblem */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1B4332] to-[#0D3B33] text-[#C9A66B] font-mono font-bold text-base flex items-center justify-center border border-[#C9A66B]/40 shrink-0 shadow-sm">
                    {surah.id}
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center space-x-2 rtl:space-x-reverse gap-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-[#1B4332] dark:text-[#EDEAE0]">
                        {t.surahPrefix} {isUrdu ? surah.nameUrdu : surah.nameEnglish}
                      </h3>
                      {!isUrdu && surah.englishMeaning && (
                        <span className="text-xs italic text-gray-500 font-normal">
                          ({surah.englishMeaning})
                        </span>
                      )}
                      <span className="font-quran text-xl text-[#C9A66B] mx-1">
                        {surah.nameArabic}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-gray-500 font-sans-ui">
                      <span
                        className={`px-2 py-0.5 rounded font-bold ${
                          surah.revelationType === 'Makki'
                            ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300'
                            : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                        }`}
                      >
                        {surah.revelationType === 'Makki' ? t.makki : t.madani}
                      </span>
                      <span>•</span>
                      <span className="font-mono">{surah.ayahCount} {t.ayahs}</span>
                      <span>•</span>
                      <span className="font-mono">{t.para} {surah.para}</span>
                    </div>
                  </div>

                </div>

                {/* Actions: Primary PDF Button & Checkbox */}
                <div className="flex items-center space-x-2.5 rtl:space-x-reverse shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100 dark:border-gray-800">
                  
                  {/* Read PDF Button */}
                  <button
                    onClick={() => openPdfReader(surah.id)}
                    className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 rtl:space-x-reverse px-5 py-3 rounded-xl bg-[#1B4332] hover:bg-[#0D3B33] active:bg-[#071F17] text-white text-sm font-bold shadow-md transition-all"
                  >
                    <FileText className="w-4 h-4 text-[#C9A66B]" />
                    <span>{t.readPdf}</span>
                  </button>

                  {/* Completion Toggle Button */}
                  <button
                    onClick={() => toggleSurahCompletion(surah.id)}
                    className={`px-3 py-3 rounded-xl border transition-all ${
                      isCompleted
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                        : 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400 hover:text-emerald-600'
                    }`}
                    title={isCompleted ? t.completedStatus : t.markComplete}
                  >
                    <Check className="w-5 h-5 stroke-[3]" />
                  </button>

                </div>

              </div>
            );
          })
        )}
      </div>

    </div>
  );
};

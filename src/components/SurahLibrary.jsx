import React, { useState } from 'react';
import { useQuran } from '../context/QuranContext';
import { SURAHS_DATA, PARAS_DATA } from '../data/quranData';
import {
  FileText,
  BookOpen,
  CheckCircle2,
  Bookmark,
  Search,
  Filter,
  Grid,
  List,
  Upload,
  Sparkles,
  Check
} from 'lucide-react';

export const SurahLibrary = ({ onOpenUploader }) => {
  const {
    completedSurahs,
    toggleSurahCompletion,
    bookmarkedSurahs,
    toggleBookmarkSurah,
    openSurahPdf,
    openSurahText,
    surahPdfs
  } = useQuran();

  const [search, setSearch] = useState('');
  const [revelationFilter, setRevelationFilter] = useState('all'); // 'all', 'Makki', 'Madani'
  const [paraFilter, setParaFilter] = useState('all'); // 'all' or Para number 1-30
  const [completionFilter, setCompletionFilter] = useState('all'); // 'all', 'completed', 'incomplete'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Filtering logic
  const filteredSurahs = SURAHS_DATA.filter((surah) => {
    // Search
    const matchesSearch =
      surah.nameArabic.includes(search) ||
      surah.nameUrdu.includes(search) ||
      surah.nameEnglish.toLowerCase().includes(search.toLowerCase()) ||
      surah.id.toString() === search.trim();

    // Revelation
    const matchesRevelation =
      revelationFilter === 'all' || surah.revelationType === revelationFilter;

    // Para
    const matchesPara =
      paraFilter === 'all' || surah.para === Number(paraFilter);

    // Completion
    const isCompleted = completedSurahs.includes(surah.id);
    const matchesCompletion =
      completionFilter === 'all' ||
      (completionFilter === 'completed' && isCompleted) ||
      (completionFilter === 'incomplete' && !isCompleted);

    return matchesSearch && matchesRevelation && matchesPara && matchesCompletion;
  });

  return (
    <section className="space-y-6 my-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#C9A66B]/20 pb-4">
        <div className="text-right font-urdu" dir="rtl">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4332] dark:text-[#C9A66B] font-serif-heading">
              تمام 114 سورتوں کی فہرست
            </h2>
            <span className="bg-[#1B4332]/10 text-[#1B4332] dark:bg-[#C9A66B]/20 dark:text-[#C9A66B] text-xs font-bold font-mono px-3 py-1 rounded-full">
              {filteredSurahs.length} / 114 سورتیں
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
            کسی بھی سورۃ پر کلک کر کے فوری پی ڈی ایف (PDF) یا اردو متن پڑھنا شروع کریں۔
          </p>
        </div>

        {/* View Layout Switcher & PDF Upload Action */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <button
            onClick={onOpenUploader}
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-xl bg-[#C9A66B]/15 hover:bg-[#C9A66B]/25 text-[#B0693F] dark:text-[#C9A66B] border border-[#C9A66B]/30 text-xs font-bold transition-all font-urdu"
            dir="rtl"
          >
            <Upload className="w-4 h-4" />
            <span>پی ڈی ایف اپلوڈر (Uploader)</span>
          </button>

          <div className="flex items-center bg-white dark:bg-[#161D17] border border-[#C9A66B]/30 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-[#1B4332] text-[#FAF7F0]'
                  : 'text-gray-500 hover:text-[#1B4332] dark:hover:text-[#C9A66B]'
              }`}
              title="گرڈ ویو (Grid View)"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-[#1B4332] text-[#FAF7F0]'
                  : 'text-gray-500 hover:text-[#1B4332] dark:hover:text-[#C9A66B]'
              }`}
              title="فہرست ویو (List View)"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Controls & Filters */}
      <div className="bg-white/80 dark:bg-[#161D17]/80 p-4 sm:p-5 rounded-2xl border border-[#C9A66B]/30 shadow-md space-y-4 font-urdu" dir="rtl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
          
          {/* Search Box */}
          <div className="lg:col-span-4 relative">
            <input
              type="text"
              placeholder="سورۃ کے نام، نمبر یا انگریزی سے تلاش کریں..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 focus:border-[#C9A66B] text-sm font-urdu outline-none"
            />
            <Search className="w-4 h-4 text-[#C9A66B] absolute right-3 top-3.5 pointer-events-none" />
          </div>

          {/* Revelation Type Filter (Makki / Madani) */}
          <div className="lg:col-span-3">
            <select
              value={revelationFilter}
              onChange={(e) => setRevelationFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 focus:border-[#C9A66B] text-sm font-urdu outline-none"
            >
              <option value="all">تمام نزول (مکی + مدنی)</option>
              <option value="Makki">مکی سورتیں (86)</option>
              <option value="Madani">مدنی سورتیں (28)</option>
            </select>
          </div>

          {/* Para Filter (1 to 30) */}
          <div className="lg:col-span-3">
            <select
              value={paraFilter}
              onChange={(e) => setParaFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 focus:border-[#C9A66B] text-sm font-urdu outline-none"
            >
              <option value="all">تمام پارے (1 تا 30)</option>
              {PARAS_DATA.map((p) => (
                <option key={p.id} value={p.id}>
                  پارہ {p.id}: {p.nameUrdu}
                </option>
              ))}
            </select>
          </div>

          {/* Completion Status Filter */}
          <div className="lg:col-span-2">
            <select
              value={completionFilter}
              onChange={(e) => setCompletionFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] border border-[#C9A66B]/30 focus:border-[#C9A66B] text-sm font-urdu outline-none"
            >
              <option value="all">تمام حالتیں</option>
              <option value="completed">مکمل شدہ</option>
              <option value="incomplete">غیر مکمل</option>
            </select>
          </div>

        </div>
      </div>

      {/* Surahs Display: GRID VIEW */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSurahs.map((surah) => {
            const isCompleted = completedSurahs.includes(surah.id);
            const isBookmarked = bookmarkedSurahs.includes(surah.id);

            return (
              <div
                key={surah.id}
                className={`relative rounded-2xl p-5 border transition-all duration-300 hover:shadow-xl font-urdu flex flex-col justify-between ${
                  isCompleted
                    ? 'bg-emerald-950/10 dark:bg-emerald-950/20 border-emerald-600/40'
                    : 'bg-white/90 dark:bg-[#161D17]/90 border-[#C9A66B]/30 hover:border-[#C9A66B]'
                }`}
                dir="rtl"
              >
                {/* Header Row: Surah Number, Type, Completion Checkbox */}
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3 mb-3">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    {/* Surah Number Emblem */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B4332] to-[#0D3B33] text-[#C9A66B] font-mono font-bold text-sm flex items-center justify-center border border-[#C9A66B]/30 shadow-sm">
                      {surah.id}
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        surah.revelationType === 'Makki'
                          ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30'
                          : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                      }`}
                    >
                      {surah.revelationType === 'Makki' ? 'مکی' : 'مدنی'}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">
                      پارہ {surah.para}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                    {/* Bookmark Toggle */}
                    <button
                      onClick={() => toggleBookmarkSurah(surah.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isBookmarked
                          ? 'text-[#B0693F] bg-[#B0693F]/10'
                          : 'text-gray-400 hover:text-[#C9A66B]'
                      }`}
                      title={isBookmarked ? 'محفوظ شدہ' : 'نشان لگائیں'}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>

                    {/* Completion Toggle */}
                    <button
                      onClick={() => toggleSurahCompletion(surah.id)}
                      className={`flex items-center space-x-1 rtl:space-x-reverse px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                        isCompleted
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-emerald-600'
                      }`}
                      title="مکمل نشان زد کریں"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{isCompleted ? 'مکمل' : 'غیر پڑھا'}</span>
                    </button>
                  </div>
                </div>

                {/* Main Titles */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold text-[#1B4332] dark:text-[#EDEAE0] font-urdu">
                      سورۃ {surah.nameUrdu}
                    </h3>
                    <span className="font-quran text-2xl text-[#C9A66B]">
                      {surah.nameArabic}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 dir-ltr font-sans-ui">
                    <span className="italic">{surah.englishMeaning}</span>
                    <span className="font-mono">{surah.ayahCount} آیات</span>
                  </div>

                  {surah.descriptionUrdu && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 pt-2 leading-relaxed">
                      {surah.descriptionUrdu}
                    </p>
                  )}
                </div>

                {/* Card Actions: PDF Reader vs Text Reader */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100 dark:border-gray-800/60">
                  <button
                    onClick={() => openSurahPdf(surah.id)}
                    className="flex items-center justify-center space-x-1.5 rtl:space-x-reverse py-2 px-3 rounded-xl bg-[#1B4332] hover:bg-[#0D3B33] text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#C9A66B]" />
                    <span>پی ڈی ایف (PDF)</span>
                  </button>

                  <button
                    onClick={() => openSurahText(surah.id)}
                    className="flex items-center justify-center space-x-1.5 rtl:space-x-reverse py-2 px-3 rounded-xl bg-[#FAF7F0] dark:bg-[#0F1410] hover:bg-gray-100 dark:hover:bg-gray-800 text-[#1B4332] dark:text-[#C9A66B] border border-[#C9A66B]/30 text-xs font-bold transition-all"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#C9A66B]" />
                    <span>اردو متن</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* LIST VIEW TABLE */
        <div className="bg-white/90 dark:bg-[#161D17]/90 rounded-2xl border border-[#C9A66B]/30 overflow-hidden shadow-lg font-urdu" dir="rtl">
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-[#1B4332] text-[#FAF7F0] text-xs font-bold border-b border-[#C9A66B]/30">
                  <th className="p-3 text-center">#</th>
                  <th className="p-3">سورۃ المبارکہ</th>
                  <th className="p-3 text-center">عربی نام</th>
                  <th className="p-3 text-center">نزول</th>
                  <th className="p-3 text-center">آیات</th>
                  <th className="p-3 text-center">پارہ</th>
                  <th className="p-3 text-center">حالت</th>
                  <th className="p-3 text-center">مطالعہ اقدام</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                {filteredSurahs.map((surah) => {
                  const isCompleted = completedSurahs.includes(surah.id);
                  return (
                    <tr
                      key={surah.id}
                      className={`hover:bg-[#FAF7F0] dark:hover:bg-[#0F1410] transition-colors ${
                        isCompleted ? 'bg-emerald-950/10' : ''
                      }`}
                    >
                      <td className="p-3 text-center font-mono font-bold text-gray-500">
                        {surah.id}
                      </td>
                      <td className="p-3 font-bold text-[#1B4332] dark:text-[#EDEAE0]">
                        سورۃ {surah.nameUrdu}
                        <span className="block text-xs text-gray-400 font-sans font-normal">
                          {surah.nameEnglish} ({surah.englishMeaning})
                        </span>
                      </td>
                      <td className="p-3 text-center font-quran text-xl text-[#C9A66B]">
                        {surah.nameArabic}
                      </td>
                      <td className="p-3 text-center text-xs">
                        <span
                          className={`px-2 py-0.5 rounded ${
                            surah.revelationType === 'Makki'
                              ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300'
                              : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                          }`}
                        >
                          {surah.revelationType === 'Makki' ? 'مکی' : 'مدنی'}
                        </span>
                      </td>
                      <td className="p-3 text-center font-mono text-xs">
                        {surah.ayahCount}
                      </td>
                      <td className="p-3 text-center font-mono text-xs text-gray-500">
                        {surah.para}
                      </td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => toggleSurahCompletion(surah.id)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                            isCompleted
                              ? 'bg-emerald-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                          }`}
                        >
                          {isCompleted ? 'مکمل' : 'غیر مکمل'}
                        </button>
                      </td>
                      <td className="p-3 text-center">
                        <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                          <button
                            onClick={() => openSurahPdf(surah.id)}
                            className="p-1.5 rounded-lg bg-[#1B4332] text-white hover:bg-[#0D3B33] text-xs font-bold flex items-center space-x-1 rtl:space-x-reverse px-2.5"
                          >
                            <FileText className="w-3.5 h-3.5 text-[#C9A66B]" />
                            <span>PDF</span>
                          </button>
                          <button
                            onClick={() => openSurahText(surah.id)}
                            className="p-1.5 rounded-lg border border-[#C9A66B]/30 hover:border-[#C9A66B] text-xs font-bold flex items-center space-x-1 rtl:space-x-reverse px-2.5"
                          >
                            <BookOpen className="w-3.5 h-3.5 text-[#C9A66B]" />
                            <span>متن</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

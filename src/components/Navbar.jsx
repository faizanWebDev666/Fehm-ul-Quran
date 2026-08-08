import React, { useState } from 'react';
import { useQuran } from '../context/QuranContext';
import {
  BookOpen,
  FileText,
  Bookmark,
  Sun,
  Moon,
  Search,
  CheckCircle2,
  Award,
  Layers,
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { SURAHS_DATA } from '../data/quranData';

export const Navbar = ({ onOpenBookmarks }) => {
  const {
    darkMode,
    toggleTheme,
    activeView,
    setActiveView,
    completedSurahs,
    bookmarkedSurahs,
    bookmarkedPages,
    setSelectedSurahId,
    openSurahPdf
  } = useQuran();

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredSurahs = searchQuery.trim()
    ? SURAHS_DATA.filter(
        (s) =>
          s.nameArabic.includes(searchQuery) ||
          s.nameUrdu.includes(searchQuery) ||
          s.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.id.toString() === searchQuery.trim()
      ).slice(0, 6)
    : [];

  const handleSelectSearchResult = (surahId) => {
    openSurahPdf(surahId);
    setSearchQuery('');
    setShowSearchResults(false);
  };

  const totalBookmarks = bookmarkedSurahs.length + bookmarkedPages.length;
  const progressPercent = Math.round((completedSurahs.length / 114) * 100);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F0]/90 dark:bg-[#0F1410]/90 backdrop-blur-md border-b border-[#C9A66B]/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Calligraphy Brand */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer" onClick={() => setActiveView('library')}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B4332] to-[#0D3B33] dark:from-[#C9A66B]/20 dark:to-[#1B4332] flex items-center justify-center border border-[#C9A66B]/40 shadow-md">
              <span className="font-quran text-2xl text-[#C9A66B] leading-none select-none">ف</span>
            </div>
            <div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <h1 className="font-urdu text-xl font-bold text-[#1B4332] dark:text-[#C9A66B] leading-tight">
                  فہم القرآن
                </h1>
                <span className="bg-[#C9A66B]/15 text-[#B0693F] dark:text-[#C9A66B] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-[#C9A66B]/30">
                  مولانا مودودیؒ
                </span>
              </div>
              <p className="font-sans-ui text-xs text-[#22261F]/60 dark:text-[#EDEAE0]/60 font-medium">
                Fehm-ul-Quran • 114 Surah Platform
              </p>
            </div>
          </div>

          {/* Quick Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-8 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="سورۃ تلاش کریں (مثلاً: الفاتحة، یس، 36)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(true);
                }}
                onFocus={() => setShowSearchResults(true)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white/80 dark:bg-[#161D17] border border-[#C9A66B]/30 focus:border-[#C9A66B] focus:ring-2 focus:ring-[#C9A66B]/20 text-sm placeholder:text-gray-400 font-urdu dir-rtl text-right transition-all outline-none"
              />
              <Search className="w-4 h-4 text-[#C9A66B] absolute left-3.5 top-3.5 pointer-events-none" />
            </div>

            {/* Live Search Dropdown */}
            {showSearchResults && filteredSurahs.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white dark:bg-[#161D17] border border-[#C9A66B]/30 rounded-xl shadow-xl z-50 overflow-hidden font-urdu animate-fade-in">
                <div className="p-2 text-xs text-gray-500 border-b border-gray-100 dark:border-gray-800 text-right">
                  تلاش کے نتائج:
                </div>
                {filteredSurahs.map((surah) => (
                  <button
                    key={surah.id}
                    onClick={() => handleSelectSearchResult(surah.id)}
                    className="w-full px-4 py-2.5 text-right flex items-center justify-between hover:bg-[#FAF7F0] dark:hover:bg-[#0F1410] border-b border-gray-50 dark:border-gray-800/40 last:border-0 transition-colors"
                  >
                    <span className="text-xs px-2 py-0.5 rounded bg-[#1B4332]/10 text-[#1B4332] dark:text-[#C9A66B] font-mono">
                      سورۃ {surah.id}
                    </span>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <span className="font-bold text-[#1B4332] dark:text-[#EDEAE0]">{surah.nameUrdu}</span>
                      <span className="font-quran text-[#C9A66B]">{surah.nameArabic}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse bg-white/50 dark:bg-[#161D17]/50 p-1.5 rounded-xl border border-[#C9A66B]/20">
            <button
              onClick={() => setActiveView('library')}
              className={`flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeView === 'library'
                  ? 'bg-[#1B4332] text-[#FAF7F0] shadow-sm'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              <Layers className="w-4 h-4 text-[#C9A66B]" />
              <span>114 سورہ لائبریری</span>
            </button>

            <button
              onClick={() => setActiveView('pdf-reader')}
              className={`flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeView === 'pdf-reader'
                  ? 'bg-[#1B4332] text-[#FAF7F0] shadow-sm'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              <FileText className="w-4 h-4 text-[#C9A66B]" />
              <span>سورۃ پی ڈی ایف (PDF)</span>
            </button>

            <button
              onClick={() => setActiveView('text-reader')}
              className={`flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeView === 'text-reader'
                  ? 'bg-[#1B4332] text-[#FAF7F0] shadow-sm'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#C9A66B]" />
              <span>کلامِ الٰہی متنی قارئ</span>
            </button>

            <button
              onClick={() => setActiveView('progress')}
              className={`flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeView === 'progress'
                  ? 'bg-[#1B4332] text-[#FAF7F0] shadow-sm'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              <Award className="w-4 h-4 text-[#C9A66B]" />
              <span>پیش رفت ({progressPercent}%)</span>
            </button>
          </nav>

          {/* Action Tools */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* Bookmarks Counter Button */}
            <button
              onClick={onOpenBookmarks}
              className="relative p-2.5 rounded-xl border border-[#C9A66B]/30 hover:border-[#C9A66B] bg-white/80 dark:bg-[#161D17] text-[#1B4332] dark:text-[#C9A66B] transition-all"
              title="محفوظ شدہ نشانات"
            >
              <Bookmark className="w-5 h-5" />
              {totalBookmarks > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#B0693F] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-[#0F1410]">
                  {totalBookmarks}
                </span>
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-[#C9A66B]/30 hover:border-[#C9A66B] bg-white/80 dark:bg-[#161D17] text-[#C9A66B] transition-all"
              title={darkMode ? 'روشن موڈ (Light Mode)' : 'تاریک موڈ (Dark Mode)'}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-[#0D3B33]" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-[#C9A66B]/30 bg-white/80 dark:bg-[#161D17] text-[#1B4332] dark:text-[#C9A66B]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#C9A66B]/20 space-y-2 font-urdu animate-fade-in">
            <button
              onClick={() => {
                setActiveView('library');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/60 dark:bg-[#161D17]"
            >
              <span className="font-bold text-[#1B4332] dark:text-[#C9A66B]">114 سورہ لائبریری</span>
              <Layers className="w-4 h-4 text-[#C9A66B]" />
            </button>
            <button
              onClick={() => {
                setActiveView('pdf-reader');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/60 dark:bg-[#161D17]"
            >
              <span className="font-bold text-[#1B4332] dark:text-[#C9A66B]">سورۃ پی ڈی ایف (PDF Reader)</span>
              <FileText className="w-4 h-4 text-[#C9A66B]" />
            </button>
            <button
              onClick={() => {
                setActiveView('text-reader');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/60 dark:bg-[#161D17]"
            >
              <span className="font-bold text-[#1B4332] dark:text-[#C9A66B]">متنی قارئ (Text Reader)</span>
              <BookOpen className="w-4 h-4 text-[#C9A66B]" />
            </button>
            <button
              onClick={() => {
                setActiveView('progress');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/60 dark:bg-[#161D17]"
            >
              <span className="font-bold text-[#1B4332] dark:text-[#C9A66B]">پیش رفت و احصائیات ({progressPercent}%)</span>
              <Award className="w-4 h-4 text-[#C9A66B]" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

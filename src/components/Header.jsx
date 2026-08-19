import React from 'react';
import { useQuran } from '../context/QuranContext';
import { translations } from '../utils/translations';
import { Sun, Moon, Upload, Languages, Heart } from 'lucide-react';

export const Header = ({ onOpenUploader }) => {
  const {
    darkMode,
    toggleTheme,
    language,
    toggleLanguage,
    completedSurahs,
    closePdfReader,
    openAzkar,
  } = useQuran();
  const t = translations[language] || translations.urdu;
  const completedCount = completedSurahs.length;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F0]/95 dark:bg-[#0F1410]/95 backdrop-blur-md border-b border-[#C9A66B]/30 transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        
        {/* Brand Title & Logo */}
        <div
          onClick={closePdfReader}
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer select-none"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#1B4332] to-[#0D3B33] dark:from-[#C9A66B]/20 dark:to-[#1B4332] flex items-center justify-center border border-[#C9A66B]/40 shadow-sm shrink-0">
            <span className="font-quran text-2xl text-[#C9A66B]">ف</span>
          </div>
          <div>
            <h1 className={`text-xl sm:text-2xl font-bold text-[#1B4332] dark:text-[#C9A66B] leading-tight ${language === 'urdu' ? 'font-urdu' : 'font-sans'}`}>
              {t.brandTitle}
            </h1>
           
          </div>
        </div>

        {/* Right Tools */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <button
            onClick={openAzkar}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-[#161D17] hover:border-[#C9A66B] border border-[#C9A66B]/30 text-xs font-bold text-[#1B4332] dark:text-[#C9A66B] transition-all shadow-sm"
            title={t.azkarTitle}
          >
            <Heart className="w-4 h-4 text-[#B0693F] dark:text-[#C9A66B]" />
            <span className="hidden sm:inline font-urdu">{t.azkarNav}</span>
          </button>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-2 rounded-xl bg-white dark:bg-[#161D17] hover:border-[#C9A66B] border border-[#C9A66B]/30 text-xs font-bold text-[#1B4332] dark:text-[#C9A66B] transition-all shadow-sm"
            title={language === 'urdu' ? 'Switch to English' : 'اردو منتخب کریں'}
          >
            <Languages className="w-4 h-4 text-[#C9A66B]" />
            <span className="font-sans text-xs uppercase tracking-wider font-semibold">
              {language === 'urdu' ? 'ENG' : 'اردو'}
            </span>
          </button>


          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-[#C9A66B]/30 hover:border-[#C9A66B] bg-white dark:bg-[#161D17] text-[#C9A66B] transition-all shadow-sm"
            title={darkMode ? t.lightMode : t.darkMode}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-[#0D3B33]" />}
          </button>
        </div>

      </div>
    </header>
  );
};

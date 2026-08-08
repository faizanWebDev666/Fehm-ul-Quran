import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

export const PdfPreloader = ({ surah, progress = 0, statusText, language = 'urdu' }) => {
  const isUrdu = language === 'urdu';

  return (
    <div
      className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 bg-[#0F1410]/95 backdrop-blur-md text-[#FAF7F0] transition-all duration-300 rounded-3xl"
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
      {/* Decorative Outer Glow */}
      <div className="absolute w-64 h-64 bg-[#C9A66B]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Luxury Islamic Dual Spinning Emblem */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Outer Spinning Ring */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-[#C9A66B]/60 animate-[spin_8s_linear_infinite]" />
        
        {/* Inner Counter Spinning Ring */}
        <div className="absolute w-18 h-18 sm:w-20 sm:h-20 rounded-full border-2 border-[#1B4332] border-t-[#C9A66B] border-b-[#C9A66B] animate-[spin_3s_linear_infinite_reverse]" />

        {/* Center Quran Icon */}
        <div className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#1B4332] to-[#0D3B33] border border-[#C9A66B]/60 flex items-center justify-center shadow-lg shadow-[#C9A66B]/20">
          <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-[#C9A66B] animate-pulse" />
        </div>
      </div>

      {/* Surah Title Header */}
      {surah && (
        <div className="text-center space-y-1 mb-4 z-10">
          <div className="inline-flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1 rounded-full bg-[#C9A66B]/15 border border-[#C9A66B]/30 text-xs font-bold text-[#C9A66B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {isUrdu ? `سورۃ ${surah.id} • ${surah.nameUrdu}` : `Surah ${surah.id} • ${surah.nameEnglish}`}
            </span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold font-quran text-[#C9A66B] pt-1">
            {surah.nameArabic}
          </h4>
        </div>
      )}

      {/* Progress Bar & Percentage */}
      <div className="w-full max-w-xs space-y-2 z-10">
        <div className="flex items-center justify-between text-xs font-mono text-[#EDEAE0]/80">
          <span className="truncate max-w-[200px]">
            {statusText || (isUrdu ? 'پی ڈی ایف لوڈ ہو رہی ہے...' : 'Loading PDF...')}
          </span>
          <span className="font-bold text-[#C9A66B] font-mono">{Math.round(progress)}%</span>
        </div>

        <div className="w-full h-2.5 bg-black/60 rounded-full overflow-hidden p-0.5 border border-[#C9A66B]/40 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#C9A66B] via-[#E5C17C] to-[#B0693F] rounded-full transition-all duration-300 shadow-sm"
            style={{ width: `${Math.min(100, Math.max(5, progress))}%` }}
          />
        </div>
      </div>

      {/* Subtitle Hint */}
      <p className="text-[11px] text-[#EDEAE0]/60 mt-4 font-sans-ui text-center z-10">
        {isUrdu
          ? 'برائے مہربانی انتظار فرمائیں، تمام صفحات ترتیب دیے جا رہے ہیں...'
          : 'Please wait, rendering document pages...'}
      </p>
    </div>
  );
};

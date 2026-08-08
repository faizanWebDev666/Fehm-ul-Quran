import React from 'react';
import { useQuran } from '../context/QuranContext';
import { BookOpen, FileText, Sparkles, CheckCircle2, Flame, ArrowLeft, ArrowRight } from 'lucide-react';

export const HeroSection = ({ onOpenUploader }) => {
  const {
    completedSurahs,
    selectedSurahId,
    openSurahPdf,
    openSurahText,
    getSurahById,
    streakCount
  } = useQuran();

  const currentSurah = getSurahById(selectedSurahId);
  const completedCount = completedSurahs.length;
  const progressPercent = Math.round((completedCount / 114) * 100);

  return (
    <section className="relative overflow-hidden my-6">
      {/* Container with Modern Mosque Arch Styling */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#1B4332] via-[#0D3B33] to-[#0A2923] text-white p-6 sm:p-10 border-2 border-[#C9A66B]/40 shadow-2xl overflow-hidden arch-card">
        
        {/* Subtle Islamic Geometric Accent Grid Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A66B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Copy (Urdu Focused) */}
          <div className="lg:col-span-7 space-y-5 text-right font-urdu" dir="rtl">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full bg-[#C9A66B]/20 border border-[#C9A66B]/40 text-[#C9A66B] text-xs font-bold shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>پلیٹ فارم فہم القرآن • مولانا ابوالاعلیٰ مودودیؒ</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#FAF7F0] font-serif-heading">
              مکمل قرآن مجید <span className="text-[#C9A66B]">سورت وار</span> باطنز تفہیم القرآن
            </h1>

            <p className="text-sm sm:text-base text-[#EDEAE0]/90 leading-relaxed font-urdu max-w-2xl">
              مولانا مودودیؒ کے آسان، فصیح اور باوقار اردو ترجمے اور حواشی کے ساتھ تمام 114 سورتوں کا فہم اور تفصیلی مطالعہ حاصل کریں۔ ہر سورۃ کی پی ڈی ایف (PDF) ڈاؤن لوڈ یا یہیں پڑھیں۔
            </p>

            {/* Quick CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openSurahPdf(selectedSurahId)}
                className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-3.5 rounded-xl bg-[#B0693F] hover:bg-[#965732] text-white font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#B0693F]/30"
              >
                <FileText className="w-4 h-4 text-[#FAF7F0]" />
                <span>سورۃ {currentSurah.nameUrdu} (PDF پڑھیں)</span>
              </button>

              <button
                onClick={() => openSurahText(selectedSurahId)}
                className="inline-flex items-center space-x-2 rtl:space-x-reverse px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FAF7F0] font-bold text-sm border border-[#C9A66B]/40 backdrop-blur-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#C9A66B]" />
                <span>متنی مطالعہ (Text Mode)</span>
              </button>

              <button
                onClick={onOpenUploader}
                className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-3.5 rounded-xl bg-[#C9A66B]/20 hover:bg-[#C9A66B]/30 text-[#C9A66B] text-xs font-bold border border-[#C9A66B]/40 transition-all"
              >
                <span>پی ڈی ایف مینیجر / اپلوڈ</span>
              </button>
            </div>
          </div>

          {/* Right Card: Progress Tracker Wheel & Streak Badge */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 dark:bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-[#C9A66B]/30 shadow-xl space-y-6">
              
              {/* Daily Streak & Overall Metric Header */}
              <div className="flex items-center justify-between border-b border-[#C9A66B]/20 pb-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="w-10 h-10 rounded-full bg-[#B0693F]/20 flex items-center justify-center border border-[#B0693F]/40 text-[#B0693F]">
                    <Flame className="w-5 h-5 fill-current" />
                  </div>
                  <div className="text-right font-urdu" dir="rtl">
                    <span className="text-xs text-gray-300">روزانہ کا تسلسل</span>
                    <p className="font-bold text-white text-sm">{streakCount} دن متواتر مطالعہ</p>
                  </div>
                </div>

                <div className="text-left">
                  <span className="text-xs text-[#C9A66B] font-mono">114 سورتیں</span>
                  <p className="font-serif-heading font-bold text-xl text-white">
                    {completedCount} <span className="text-xs text-gray-300 font-sans">/ 114</span>
                  </p>
                </div>
              </div>

              {/* Surah Completion Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-urdu" dir="rtl">
                  <span className="text-[#EDEAE0]">کل سورتوں کی تکمیل:</span>
                  <span className="font-bold text-[#C9A66B] font-mono">{progressPercent}%</span>
                </div>
                <div className="h-3 w-full bg-black/40 rounded-full overflow-hidden p-0.5 border border-[#C9A66B]/30">
                  <div
                    className="h-full bg-gradient-to-r from-[#C9A66B] via-[#B0693F] to-[#C9A66B] rounded-full transition-all duration-700 shadow-sm"
                    style={{ width: `${Math.max(progressPercent, 2)}%` }}
                  />
                </div>
              </div>

              {/* Verses Showcase / Daily Ayah Card */}
              <div className="p-4 rounded-xl bg-black/20 border border-[#C9A66B]/20 space-y-2 text-right font-urdu" dir="rtl">
                <div className="flex items-center justify-between text-xs text-[#C9A66B]">
                  <span className="font-bold">آیت مبارکہ - سورۃ الفاتحہ</span>
                  <span className="font-mono">1:5</span>
                </div>
                <p className="font-quran text-lg text-white leading-relaxed">
                  اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
                </p>
                <p className="text-xs text-[#EDEAE0]/80">
                  "ہمیں سیدھا راستہ دکھا، ان لوگوں کا راستہ جن پر تو نے انعام فرمایا۔"
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

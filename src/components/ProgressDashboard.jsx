import React from 'react';
import { useQuran } from '../context/QuranContext';
import { SURAHS_DATA } from '../data/quranData';
import { Award, CheckCircle2, Flame, Sparkles, BookOpen, Clock, Calendar, RefreshCw } from 'lucide-react';

export const ProgressDashboard = () => {
  const {
    completedSurahs,
    toggleSurahCompletion,
    streakCount,
    openSurahPdf
  } = useQuran();

  const completedCount = completedSurahs.length;
  const totalCount = 114;
  const percentage = Math.round((completedCount / totalCount) * 100);

  // Breakdown metrics
  const makkiCompleted = SURAHS_DATA.filter(
    (s) => s.revelationType === 'Makki' && completedSurahs.includes(s.id)
  ).length;

  const madaniCompleted = SURAHS_DATA.filter(
    (s) => s.revelationType === 'Madani' && completedSurahs.includes(s.id)
  ).length;

  const estimatedDaysLeft = Math.ceil((totalCount - completedCount) / 1);

  return (
    <div className="space-y-8 my-8 font-urdu" dir="rtl">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1B4332] via-[#0D3B33] to-[#1B4332] text-[#FAF7F0] p-6 sm:p-8 rounded-3xl border-2 border-[#C9A66B]/40 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-[#C9A66B]/20 text-[#C9A66B] text-xs font-bold border border-[#C9A66B]/30">
              <Award className="w-4 h-4" />
              <span>قرآنی احصائیات و پیش رفت ڈیش بورڈ</span>
            </div>
            <h2 className="text-3xl font-bold font-serif-heading text-white">
              آپ کی 114 سورتوں کی تکمیل: <span className="text-[#C9A66B]">{completedCount}</span> / 114
            </h2>
            <p className="text-sm text-[#EDEAE0]/80">
              باطل پر حق کی فتح اور کلام الٰہی کی تلاوت میں استقامت کا مکمل ریکارڈ۔
            </p>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse bg-black/20 p-4 rounded-2xl border border-[#C9A66B]/30">
            <div className="w-16 h-16 rounded-full bg-[#C9A66B]/20 flex items-center justify-center border-2 border-[#C9A66B] font-mono text-xl font-bold text-[#C9A66B]">
              {percentage}%
            </div>
            <div>
              <span className="text-xs text-gray-300">کل تکمیل کا فیصد</span>
              <p className="text-sm font-bold text-white">
                {completedCount === 114 ? 'مبارک ہو! ختمِ قرآن مکمل' : 'مطالعہ جاری ہے'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white/80 dark:bg-[#161D17]/80 p-5 rounded-2xl border border-[#C9A66B]/30 shadow-md space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-bold">مکمل شدہ سورتیں</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          </div>
          <p className="text-2xl font-bold text-[#1B4332] dark:text-[#C9A66B] font-mono">
            {completedCount} <span className="text-xs text-gray-400 font-sans">/ 114</span>
          </p>
        </div>

        <div className="bg-white/80 dark:bg-[#161D17]/80 p-5 rounded-2xl border border-[#C9A66B]/30 shadow-md space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-bold">مکی سورتیں</span>
            <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold">
              مکی
            </span>
          </div>
          <p className="text-2xl font-bold text-amber-600 font-mono">
            {makkiCompleted} <span className="text-xs text-gray-400 font-sans">/ 86</span>
          </p>
        </div>

        <div className="bg-white/80 dark:bg-[#161D17]/80 p-5 rounded-2xl border border-[#C9A66B]/30 shadow-md space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-bold">مدنی سورتیں</span>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold">
              مدنی
            </span>
          </div>
          <p className="text-2xl font-bold text-emerald-600 font-mono">
            {madaniCompleted} <span className="text-xs text-gray-400 font-sans">/ 28</span>
          </p>
        </div>

        <div className="bg-white/80 dark:bg-[#161D17]/80 p-5 rounded-2xl border border-[#C9A66B]/30 shadow-md space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-bold">تسلسل اور باقی ایام</span>
            <Flame className="w-5 h-5 text-[#B0693F]" />
          </div>
          <p className="text-2xl font-bold text-[#B0693F] font-mono">
            {streakCount} <span className="text-xs text-gray-400 font-urdu">دن متواتر</span>
          </p>
        </div>

      </div>

      {/* 114 Surahs Visual Matrix Box */}
      <div className="bg-white/90 dark:bg-[#161D17]/90 p-6 sm:p-8 rounded-3xl border border-[#C9A66B]/30 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
          <div>
            <h3 className="text-xl font-bold text-[#1B4332] dark:text-[#C9A66B]">
              114 سورتوں کی تفصیلی میٹرکس (Visual Matrix)
            </h3>
            <p className="text-xs text-gray-500">
              سبز رنگ (Green) پڑھ چکی سورتوں کو ظاہر کرتا ہے۔ کسی بھی خانے پر کلک کر کے موڈ تبدیل کریں۔
            </p>
          </div>

          <div className="flex items-center space-x-3 rtl:space-x-reverse text-xs">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <span className="w-3.5 h-3.5 rounded bg-emerald-600 inline-block"></span>
              <span>مکمل ({completedCount})</span>
            </div>
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <span className="w-3.5 h-3.5 rounded bg-gray-200 dark:bg-gray-800 border border-gray-400 inline-block"></span>
              <span>باقی ({114 - completedCount})</span>
            </div>
          </div>
        </div>

        {/* Matrix Grid of 114 Tiles */}
        <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-19 gap-2">
          {SURAHS_DATA.map((s) => {
            const isDone = completedSurahs.includes(s.id);
            return (
              <button
                key={s.id}
                onClick={() => openSurahPdf(s.id)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  toggleSurahCompletion(s.id);
                }}
                className={`aspect-square rounded-xl p-1 font-mono font-bold text-xs flex flex-col items-center justify-center transition-all transform hover:scale-110 shadow-sm border ${
                  isDone
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-emerald-600/30'
                    : 'bg-[#FAF7F0] dark:bg-[#0F1410] text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-800 hover:border-[#C9A66B]'
                }`}
                title={`سورۃ ${s.id}. ${s.nameUrdu} (${s.nameArabic}) - ${isDone ? 'مکمل' : 'غیر مکمل'}`}
              >
                <span>{s.id}</span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};

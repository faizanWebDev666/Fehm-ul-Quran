import React, { useMemo, useState } from 'react';
import { BookOpen, Check, CheckCircle2, Clock3, ExternalLink, ListChecks, Moon, RotateCcw, Sparkles, Sun } from 'lucide-react';
import { useQuran } from '../context/QuranContext';
import { translations } from '../utils/translations';
import { AZKAR_DATA } from '../data/azkarData';

const copy = {
  english: { progress: 'Today’s progress', progressHint: 'Progress is kept on this device while you recite.', guide: 'A gentle guide', guideText: 'Recite with presence, then tap the counter once for each repetition.', contents: 'In this collection', repetitions: 'total repetitions', resetHint: 'Clear today’s counters' },
  urdu: { progress: 'آج کی پیش رفت', progressHint: 'تلاوت کے دوران آپ کی پیش رفت اسی ڈیوائس پر محفوظ رہتی ہے۔', guide: 'ایک مختصر رہنمائی', guideText: 'یکسوئی کے ساتھ پڑھیں، پھر ہر تکرار کے بعد شمار پر ٹیپ کریں۔', contents: 'اس مجموعے میں', repetitions: 'کل تکرار', resetHint: 'آج کی گنتی صاف کریں' },
};

export const Azkar = () => {
  const { language } = useQuran();
  const t = translations[language] || translations.urdu;
  const ui = copy[language] || copy.urdu;
  const isUrdu = language === 'urdu';
  const [period, setPeriod] = useState('morning');
  const [counts, setCounts] = useState({});
  const azkar = AZKAR_DATA[period];
  const completedCount = azkar.filter((zikr) => (counts[zikr.id] || 0) >= zikr.count).length;
  const repetitionCount = useMemo(() => azkar.reduce((total, zikr) => total + zikr.count, 0), [azkar]);
  const progress = azkar.length ? Math.round((completedCount / azkar.length) * 100) : 0;

  const increment = (zikr) => setCounts((current) => ({ ...current, [zikr.id]: Math.min(zikr.count, (current[zikr.id] || 0) + 1) }));
  const selectPeriod = (nextPeriod) => { setPeriod(nextPeriod); setCounts({}); };
  const scrollToZikr = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const Sidebar = ({ compact = false }) => (
    <aside className={`${compact ? 'lg:hidden mt-5' : 'hidden lg:block'}`}>
      <div className="space-y-4">
        <section className="rounded-2xl border border-[#C9A66B]/25 bg-white p-5 shadow-sm dark:bg-[#161D17]">
          <div className="flex items-center justify-between gap-3"><div className="flex items-center gap-2 text-[#1B4332] dark:text-[#C9A66B]"><ListChecks className="h-4 w-4" /><h3 className="text-sm font-bold">{ui.progress}</h3></div><span className="text-sm font-bold text-[#1B4332] dark:text-[#EDEAE0]">{progress}%</span></div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#1B4332]/10 dark:bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-[#1B4332] to-[#4F7A61] transition-all duration-500" style={{ width: `${progress}%` }} /></div>
          <p className="mt-3 text-xs leading-5 text-gray-500 dark:text-gray-400">{ui.progressHint}</p>
          <button onClick={() => setCounts({})} className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#B0693F] transition-colors hover:text-[#8E4E2B] dark:text-[#C9A66B]" title={ui.resetHint}><RotateCcw className="h-3.5 w-3.5" />{t.resetAzkar}</button>
        </section>
        <section className="rounded-2xl border border-[#C9A66B]/25 bg-[#0D3B33] p-5 text-[#FAF7F0] shadow-sm"><div className="flex items-center gap-2 text-[#C9A66B]"><Sparkles className="h-4 w-4" /><h3 className="text-sm font-bold">{ui.guide}</h3></div><p className="mt-3 text-sm leading-6 text-[#EDEAE0]/80">{ui.guideText}</p></section>
        <section className="rounded-2xl border border-[#C9A66B]/25 bg-white p-3 shadow-sm dark:bg-[#161D17]"><h3 className="px-2 pb-2 pt-1 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{ui.contents}</h3><div className="max-h-64 space-y-1 overflow-y-auto pr-1">{azkar.map((zikr, index) => { const complete = (counts[zikr.id] || 0) >= zikr.count; return <button key={zikr.id} onClick={() => scrollToZikr(zikr.id)} className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left text-sm transition-colors hover:bg-[#C9A66B]/10 dark:hover:bg-[#C9A66B]/10"><span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${complete ? 'bg-[#1B4332] text-white' : 'bg-[#1B4332]/10 text-[#1B4332] dark:bg-[#C9A66B]/15 dark:text-[#C9A66B]'}`}>{complete ? <Check className="h-3.5 w-3.5" /> : index + 1}</span><span className="truncate text-gray-700 dark:text-gray-200">{zikr.transliteration}</span></button>; })}</div></section>
      </div>
    </aside>
  );

  return (
    <section className="mx-auto max-w-7xl py-5 sm:py-8 lg:py-10 animate-fade-in" dir={isUrdu ? 'rtl' : 'ltr'}>
      <header className="relative overflow-hidden rounded-3xl border border-[#C9A66B]/40 bg-[#0D3B33] px-5 py-8 text-[#FAF7F0] shadow-xl sm:px-9 sm:py-10 lg:px-12"><div className="absolute -left-12 -top-16 h-56 w-56 rounded-full border border-[#C9A66B]/20" /><div className="absolute -bottom-24 -right-10 h-56 w-56 rounded-full border border-[#C9A66B]/15" /><div className="relative max-w-2xl"><div className="inline-flex items-center gap-2 rounded-full border border-[#C9A66B]/30 bg-[#C9A66B]/10 px-3 py-1.5 text-xs font-bold tracking-wide text-[#E7C992]"><Sparkles className="h-3.5 w-3.5" />{t.azkarBadge}</div><h1 className="mt-4 font-urdu text-3xl font-bold leading-relaxed sm:text-5xl">{t.azkarTitle}</h1><p className="mt-3 max-w-xl text-sm leading-6 text-[#EDEAE0]/75 sm:text-base">{t.azkarDescription}</p></div></header>
      <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl border border-[#C9A66B]/25 bg-white p-1.5 shadow-sm dark:bg-[#161D17] sm:mt-6 sm:max-w-md">{[{ id: 'morning', icon: Sun, label: t.morningAzkar }, { id: 'evening', icon: Moon, label: t.eveningAzkar }].map(({ id, icon: Icon, label }) => <button key={id} onClick={() => selectPeriod(id)} aria-pressed={period === id} className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition-all sm:px-4 ${period === id ? 'bg-[#1B4332] text-[#FAF7F0] shadow-sm' : 'text-[#1B4332] hover:bg-[#C9A66B]/10 dark:text-[#EDEAE0]'}`}><Icon className={`h-4 w-4 ${period === id ? 'text-[#E7C992]' : 'text-[#B0693F] dark:text-[#C9A66B]'}`} /><span>{label}</span></button>)}</div>
      <Sidebar compact />
      <div className="mt-5 grid gap-6 lg:mt-6 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start"><main className="min-w-0"><div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#C9A66B]/35 bg-[#C9A66B]/[0.07] px-4 py-3 dark:bg-[#C9A66B]/[0.06]"><div className="flex items-center gap-2 text-sm font-bold text-[#1B4332] dark:text-[#C9A66B]"><CheckCircle2 className="h-4 w-4" />{completedCount} / {azkar.length} {t.completedAzkar}</div><div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"><Clock3 className="h-4 w-4" />{repetitionCount} {ui.repetitions}</div></div><div className="space-y-7">{azkar.map((zikr, index) => { const current = counts[zikr.id] || 0; const complete = current >= zikr.count; return <article id={zikr.id} key={zikr.id} className={`scroll-mt-24 arch-card rounded-[1.75rem] border-2 bg-white p-6 shadow-[0_12px_34px_rgba(0,0,0,0.08)] transition-all sm:p-8 lg:p-10 dark:bg-[#131B15] dark:shadow-[0_16px_38px_rgba(0,0,0,0.22)] ${complete ? 'border-[#1B4332]/70 dark:border-[#C9A66B]/75' : 'border-[#C9A66B]/60 dark:border-[#C9A66B]/55'}`}><div className="mb-7 flex items-start justify-between gap-3"><div className="flex items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1B4332]/10 text-sm font-bold text-[#1B4332] dark:bg-[#C9A66B]/15 dark:text-[#C9A66B]">{index + 1}</span><div><h2 className="text-base font-bold text-[#1B4332] dark:text-[#EDEAE0]">{isUrdu ? zikr.titleUrdu : zikr.title}</h2><p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{zikr.count}× {isUrdu ? 'تکرار' : 'recitation'}</p></div></div><a href={zikr.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex max-w-[48%] items-center gap-1.5 rounded-full border border-[#C9A66B]/35 bg-[#C9A66B]/10 px-2.5 py-1.5 text-xs text-[#8E4E2B] transition-colors hover:bg-[#C9A66B]/20 dark:text-[#E7C992]" title={zikr.reference}><BookOpen className="h-3 w-3 shrink-0" /><span className="truncate">{zikr.reference}</span><ExternalLink className="h-3 w-3 shrink-0" /></a></div><div className="rounded-2xl border border-[#C9A66B]/20 bg-[#C9A66B]/[0.035] px-4 py-5 sm:px-7 sm:py-7 dark:border-[#C9A66B]/25 dark:bg-black/10"><p className="mx-auto max-w-5xl whitespace-pre-line font-quran text-right text-[1.65rem] leading-[2.55] tracking-[0.015em] text-[#1B4332] sm:text-[2rem] sm:leading-[2.65] lg:text-[2.15rem] lg:leading-[2.75] dark:text-[#F2EFE5]" dir="rtl">{zikr.arabic}</p></div><div className="my-6 h-px bg-[#C9A66B]/35" /><p className="text-sm italic leading-7 text-[#B0693F] dark:text-[#E7C992]" dir="ltr">{zikr.transliteration}</p><p className="mt-4 text-base leading-9 text-gray-700 sm:text-lg dark:text-gray-200">{isUrdu ? zikr.urdu : zikr.english}</p><button onClick={() => increment(zikr)} disabled={complete} className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:ring-offset-2 disabled:cursor-default ${complete ? 'bg-[#1B4332]/10 text-[#1B4332] dark:bg-[#C9A66B]/15 dark:text-[#C9A66B]' : 'bg-[#1B4332] text-[#FAF7F0] hover:bg-[#0D3B33] active:scale-[0.99]'}`}>{complete ? <CheckCircle2 className="h-5 w-5" /> : <span>{t.tapToCount}</span>}<span className="rounded-full bg-black/10 px-2 py-0.5 text-xs">{current} / {zikr.count}</span></button></article>; })}</div></main><div className="lg:sticky lg:top-5"><Sidebar /></div></div>
    </section>
  );
};

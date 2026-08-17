import React, { useState, useEffect, useCallback } from 'react';
import { useQuran } from '../context/QuranContext';
import { SURAHS_DATA } from '../data/quranData';
import { translations } from '../utils/translations';
import quranPattern from '../assets/slider/quran-pattern.jpg';
import islamicArch from '../assets/slider/islamic-arch.jpg';
import islamicDetail from '../assets/slider/islamic-detail.jpg';
import { Search, FileText, Check, X } from 'lucide-react';

const SURAH_SEARCH_ALIASES = {
  36: ['yaseen', 'yasin', 'ya seen', 'ya-sin'],
};

const normalizeSearchText = (value = '') => (
  String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[’'`-]/g, ' ')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
);

const SURAH_SEARCH_INDEX = new Map(
  SURAHS_DATA.map((surah) => {
    const searchableText = [
      surah.nameArabic,
      surah.nameUrdu,
      surah.nameEnglish,
      surah.englishMeaning,
      ...(SURAH_SEARCH_ALIASES[surah.id] || []),
    ].filter(Boolean).map(normalizeSearchText).join(' ');

    return [surah.id, {
      text: searchableText,
      compactText: searchableText.replace(/\s/g, ''),
    }];
  })
);

const matchesSurahSearch = (surah, rawQuery) => {
  const query = normalizeSearchText(rawQuery);
  if (!query) return true;
  if (surah.id.toString() === rawQuery.trim()) return true;

  const searchIndex = SURAH_SEARCH_INDEX.get(surah.id);
  const keywords = query.split(' ');
  const compactQuery = query.replace(/\s/g, '');

  return keywords.every((keyword) => searchIndex.text.includes(keyword))
    || searchIndex.compactText.includes(compactQuery);
};

const PREFETCHED_PDF_URLS = new Set();

const prefetchPdf = (pdfUrl) => {
  if (!pdfUrl || typeof window === 'undefined' || PREFETCHED_PDF_URLS.has(pdfUrl)) return;

  PREFETCHED_PDF_URLS.add(pdfUrl);
  const warmPdfCache = () => {
    fetch(pdfUrl, { cache: 'force-cache' }).catch(() => {
      PREFETCHED_PDF_URLS.delete(pdfUrl);
    });
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(warmPdfCache, { timeout: 800 });
  } else {
    window.setTimeout(warmPdfCache, 100);
  }
};

export const SurahPdfList = () => {
  const { completedSurahs, toggleSurahCompletion, getActiveSurahPdfPath, language } = useQuran();
  const t = translations[language] || translations.urdu;
  const isUrdu = language === 'urdu';

  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all', 'Makki', 'Madani', 'completed'

  const completedCount = completedSurahs.length;
  // Ayah slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const AUTO_ADVANCE_MS = 6000;
  const SLIDE_BACKGROUNDS = [
    quranPattern,
    islamicArch,
    islamicDetail,
    quranPattern,
  ];
  const AYAH_SLIDES = [
    {
      arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
      translation: isUrdu
        ? 'ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔'
        : 'You alone we worship, and You alone we ask for help.',
      reference: isUrdu ? 'سورۃ الفاتحہ — آیت 5' : 'Surah Al-Fatihah — Ayah 5',
    },
    {
      arabic: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
      translation: isUrdu
        ? 'اللہ کسی جان کو اس کی طاقت سے بڑھ کر تکلیف نہیں دیتا۔'
        : 'Allah does not burden any soul beyond what it can bear.',
      reference: isUrdu ? 'سورۃ البقرہ — آیت 286' : 'Surah Al-Baqarah — Ayah 286',
    },
    {
      arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
      translation: isUrdu
        ? 'خبردار! اللہ کے ذکر ہی سے دلوں کو اطمینان ملتا ہے۔'
        : 'Surely, in the remembrance of Allah do hearts find comfort.',
      reference: isUrdu ? 'سورۃ الرعد — آیت 28' : 'Surah Ar-Ra’d — Ayah 28',
    },
    {
      arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
      translation: isUrdu
        ? 'پس یقیناً تنگی کے ساتھ آسانی ہے۔'
        : 'Indeed, with hardship comes ease.',
      reference: isUrdu ? 'سورۃ الشرح — آیت 5' : 'Surah Ash-Sharh — Ayah 5',
    },
  ];

  const TOTAL_SLIDES = 4;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
  }, []);

  // Automatically rotate through the ayat, pausing while the card is hovered.
  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(nextSlide, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [currentSlide, isPaused, nextSlide]);

  // Search & Filter Logic
  const filteredSurahs = SURAHS_DATA.filter((s) => {
    if (!matchesSurahSearch(s, search)) return false;

    if (filterType === 'Makki') return s.revelationType === 'Makki';
    if (filterType === 'Madani') return s.revelationType === 'Madani';
    if (filterType === 'completed') return completedSurahs.includes(s.id);
    return true;
  });

  // When a search identifies one Surah, warm its PDF before the user clicks Read PDF.
  useEffect(() => {
    if (!search.trim() || filteredSurahs.length !== 1) return undefined;

    const timeout = window.setTimeout(() => {
      prefetchPdf(getActiveSurahPdfPath(filteredSurahs[0]));
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [search, filteredSurahs, getActiveSurahPdfPath]);

  return (
    <div
      className={`space-y-6 my-4 sm:my-6 max-w-4xl mx-auto ${isUrdu ? 'font-urdu' : 'font-sans'}`}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >

      {/* ====== COMPACT PROFESSIONAL HERO SLIDER ====== */}
      <div
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C9A66B]/35 shadow-lg select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Online Islamic artwork, darkened so the slide content stays readable. */}
        <div
          className="absolute inset-0 bg-center bg-cover transition-[background-image] duration-700"
          style={{
            backgroundImage: `linear-gradient(110deg, rgba(7, 42, 34, 0.84), rgba(11, 55, 45, 0.66), rgba(4, 27, 23, 0.76)), url(${SLIDE_BACKGROUNDS[currentSlide]})`,
          }}
        />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#C9A66B_0.7px,transparent_0.7px)] [background-size:16px_16px] pointer-events-none" />

        {/* Slider Track */}
        <div
          className="slider-track relative"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >

          {AYAH_SLIDES.map((ayah) => (
            <div
              key={ayah.reference}
              className="min-w-full h-[195px] sm:h-[220px] px-10 py-5 sm:px-16 sm:py-6 text-white flex items-center justify-center"
            >
              <article className="w-full max-w-3xl text-center">
                <p className="text-[10px] sm:text-xs font-semibold tracking-wide text-[#E7C98F] mb-2">
                  {ayah.reference}
                </p>
                <div className="mx-auto mb-3 h-px w-16 bg-[#C9A66B]/60" />
                <p className="font-quran text-2xl leading-[2] sm:text-3xl md:text-4xl text-[#FFFDF8]" dir="rtl">
                  {ayah.arabic}
                </p>
                <p className={`mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed text-[#F3EEE3] ${isUrdu ? 'font-urdu' : ''}`}>
                  {ayah.translation}
                </p>
              </article>
            </div>
          ))}

          {/* Ayah-only slider content is rendered above. */}
        </div>
        {/* END Slider Track */}

      </div>
      {/* ====== END COMPACT PROFESSIONAL SLIDER ====== */}

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

                {/* Actions: Primary PDF Button(s) & Checkbox */}
                <div className="flex items-center space-x-2.5 rtl:space-x-reverse shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100 dark:border-gray-800">

                  {surah.hasParts && surah.parts ? (
                    <div className="flex flex-col sm:flex-row items-stretch gap-1.5 flex-1 sm:flex-initial">
                      {surah.parts.map((partData) => (
                        <a
                          key={partData.part}
                          href={getActiveSurahPdfPath(surah, partData.part)}
                          target="_blank"
                          rel="noreferrer"
                          onMouseEnter={() => prefetchPdf(getActiveSurahPdfPath(surah, partData.part))}
                          onFocus={() => prefetchPdf(getActiveSurahPdfPath(surah, partData.part))}
                          onTouchStart={() => prefetchPdf(getActiveSurahPdfPath(surah, partData.part))}
                          className="flex items-center justify-center space-x-1.5 rtl:space-x-reverse px-4 sm:px-5 py-2.5 rounded-xl bg-[#1B4332] hover:bg-[#0D3B33] active:bg-[#071F17] text-white text-xs sm:text-sm font-bold shadow-md transition-all border border-[#C9A66B]/30"
                        >
                          <FileText className="w-3.5 h-3.5 text-[#C9A66B]" />
                          <span>{isUrdu ? partData.labelUrdu : partData.labelEnglish}</span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={getActiveSurahPdfPath(surah)}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => prefetchPdf(getActiveSurahPdfPath(surah))}
                      onFocus={() => prefetchPdf(getActiveSurahPdfPath(surah))}
                      onTouchStart={() => prefetchPdf(getActiveSurahPdfPath(surah))}
                      className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 rtl:space-x-reverse px-5 py-3 rounded-xl bg-[#1B4332] hover:bg-[#0D3B33] active:bg-[#071F17] text-white text-sm font-bold shadow-md transition-all"
                    >
                      <FileText className="w-4 h-4 text-[#C9A66B]" />
                      <span>{t.readPdf}</span>
                    </a>
                  )}

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

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SURAHS_DATA } from '../data/quranData';

const QuranContext = createContext();

export const QuranProvider = ({ children }) => {
  // Theme State
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('fehm_dark_mode');
    if (saved !== null) return JSON.parse(saved);
    return false;
  });

  // Language State ('urdu' or 'english', default: 'urdu')
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('fehm_language');
    if (saved === 'english' || saved === 'urdu') return saved;
    return 'urdu';
  });

  // Current selected Surah for PDF reader (null = viewing Surah list, or Surah object = reading PDF)
  const [activeSurahId, setActiveSurahId] = useState(null);

  // Completed Surahs Tracking Array [1, 2, ...]
  const [completedSurahs, setCompletedSurahs] = useState(() => {
    const saved = localStorage.getItem('fehm_completed_surahs');
    return saved ? JSON.parse(saved) : [];
  });

  // Custom PDF paths or uploaded URLs per Surah { 1: "/pdfs/surah_001.pdf" }
  const [surahPdfs, setSurahPdfs] = useState(() => {
    const saved = localStorage.getItem('fehm_surah_pdfs');
    const initial = {};
    SURAHS_DATA.forEach((s) => {
      initial[s.id] = s.pdfPath;
    });
    if (!saved) return initial;

    const savedPdfs = JSON.parse(saved);
    const migratedPdfs = { ...savedPdfs };
    const bundledDefaults = {
      1: '/pdfs/surah_001.pdf',
      2: '/pdfs/surah_002.pdf',
    };

    Object.entries(bundledDefaults).forEach(([surahId, oldPath]) => {
      if (migratedPdfs[surahId] === oldPath) {
        migratedPdfs[surahId] = initial[surahId];
      }
    });

    return { ...initial, ...migratedPdfs };
  });

  // Bookmarked Pages { 1: pageNumber }
  const [bookmarkedPages, setBookmarkedPages] = useState(() => {
    const saved = localStorage.getItem('fehm_bookmarked_pages');
    return saved ? JSON.parse(saved) : {};
  });

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem('fehm_dark_mode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('fehm_language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('fehm_completed_surahs', JSON.stringify(completedSurahs));
  }, [completedSurahs]);

  useEffect(() => {
    localStorage.setItem('fehm_surah_pdfs', JSON.stringify(surahPdfs));
  }, [surahPdfs]);

  useEffect(() => {
    localStorage.setItem('fehm_bookmarked_pages', JSON.stringify(bookmarkedPages));
  }, [bookmarkedPages]);

  // Actions
  const toggleTheme = () => setDarkMode(!darkMode);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'urdu' ? 'english' : 'urdu'));
  };

  const toggleSurahCompletion = (surahId) => {
    setCompletedSurahs((prev) =>
      prev.includes(surahId) ? prev.filter((id) => id !== surahId) : [...prev, surahId]
    );
  };

  const setSurahPdfUrl = (surahId, url) => {
    setSurahPdfs((prev) => ({
      ...prev,
      [surahId]: url,
    }));
  };

  const bookmarkPage = (surahId, page) => {
    setBookmarkedPages((prev) => ({
      ...prev,
      [surahId]: page,
    }));
  };

  const openPdfReader = (surahId) => {
    setActiveSurahId(surahId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closePdfReader = () => {
    setActiveSurahId(null);
  };

  const getSurahById = (id) => SURAHS_DATA.find((s) => s.id === Number(id)) || SURAHS_DATA[0];

  return (
    <QuranContext.Provider
      value={{
        darkMode,
        toggleTheme,
        language,
        setLanguage,
        toggleLanguage,
        activeSurahId,
        setActiveSurahId,
        completedSurahs,
        toggleSurahCompletion,
        surahPdfs,
        setSurahPdfUrl,
        bookmarkedPages,
        bookmarkPage,
        openPdfReader,
        closePdfReader,
        getSurahById,
      }}
    >
      {children}
    </QuranContext.Provider>
  );
};

export const useQuran = () => {
  const context = useContext(QuranContext);
  if (!context) {
    throw new Error('useQuran must be used within a QuranProvider');
  }
  return context;
};

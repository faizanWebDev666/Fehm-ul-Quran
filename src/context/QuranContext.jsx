import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SURAHS_DATA } from '../data/quranData';

const QuranContext = createContext();

export const QuranProvider = ({ children }) => {
  const navigate = useNavigate();

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

  // Current selected Part for multi-part surahs (null = default part 1, 1 or 2 for specific)
  const [activeSurahPart, setActiveSurahPart] = useState(null);

  // Completed Surahs Tracking Array [1, 2, ...]
  const [completedSurahs, setCompletedSurahs] = useState(() => {
    const saved = localStorage.getItem('fehm_completed_surahs');
    return saved ? JSON.parse(saved) : [];
  });

  // Bookmarked Surahs Array [1, 2, ...]
  const [bookmarkedSurahs, setBookmarkedSurahs] = useState(() => {
    const saved = localStorage.getItem('fehm_bookmarked_surahs');
    return saved ? JSON.parse(saved) : [];
  });

  // Custom PDF paths or uploaded URLs per Surah
  const [surahPdfs, setSurahPdfs] = useState(() => {
    const saved = localStorage.getItem('fehm_surah_pdfs');
    const initial = {};
    SURAHS_DATA.forEach((s) => {
      initial[s.id] = s.pdfPath;
    });
    if (!saved) return initial;

    const savedPdfs = JSON.parse(saved);
    const migratedPdfs = { ...savedPdfs };

    // Automatically migrate any legacy '/pdfs/' paths to the correct '/surah/' paths
    Object.entries(migratedPdfs).forEach(([surahId, savedPath]) => {
      if (typeof savedPath === 'string' && savedPath.startsWith('/pdfs/')) {
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
    localStorage.setItem('fehm_bookmarked_surahs', JSON.stringify(bookmarkedSurahs));
  }, [bookmarkedSurahs]);

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

  const toggleBookmarkSurah = (surahId) => {
    setBookmarkedSurahs((prev) =>
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

  const openPdfReader = (surahId, part = null) => {
    const surah = SURAHS_DATA.find((s) => s.id === Number(surahId));
    const targetPart = part !== undefined && part !== null ? part : (surah && surah.hasParts ? 1 : null);
    setActiveSurahId(surahId);
    setActiveSurahPart(targetPart);
    if (targetPart) {
      navigate(`/read/${surahId}/part/${targetPart}`);
    } else {
      navigate(`/read/${surahId}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openSurahPdf = openPdfReader;

  const openSurahText = (surahId) => {
    setActiveSurahId(surahId);
    setActiveSurahPart(null);
    navigate(`/read/${surahId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closePdfReader = () => {
    setActiveSurahId(null);
    setActiveSurahPart(null);
    navigate('/');
  };

  const openAzkar = () => {
    setActiveSurahId(null);
    setActiveSurahPart(null);
    navigate('/azkar');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setActivePart = (part) => {
    if (!activeSurahId) return;
    setActiveSurahPart(part);
    navigate(`/read/${activeSurahId}/part/${part}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSurahById = (id) => SURAHS_DATA.find((s) => s.id === Number(id)) || SURAHS_DATA[0];

  // Get the correct PDF path for a surah, considering multi-part surahs and active part
  const getActiveSurahPdfPath = (surah, part) => {
    const surahData = surah || getSurahById(activeSurahId);
    const partNum = part !== undefined && part !== null ? part : activeSurahPart;

    // Check for custom uploaded path first (overrides defaults)
    const customPath = surahPdfs[surahData.id];
    // If custom path exists and is different from the default first part path, use it
    // (user uploaded a custom file, so use that regardless of parts)
    const defaultFirstPartPath = surahData.hasParts && surahData.parts ? surahData.parts[0].pdfPath : surahData.pdfPath;
    if (customPath && customPath !== defaultFirstPartPath && !surahData.pdfPath.includes(customPath)) {
      // Custom path set by user (uploaded), always use that
      return customPath;
    }

    // For multi-part surahs, return the correct part path
    if (surahData.hasParts && surahData.parts && surahData.parts.length > 0) {
      const targetPart = partNum || 1;
      const partData = surahData.parts.find((p) => p.part === targetPart);
      if (partData) return partData.pdfPath;
      // Fallback to first part
      return surahData.parts[0].pdfPath;
    }

    // Single-part surah: return the (possibly custom) pdf path
    return customPath || surahData.pdfPath;
  };

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
        activeSurahPart,
        setActiveSurahPart,
        setActivePart,
        completedSurahs,
        toggleSurahCompletion,
        bookmarkedSurahs,
        toggleBookmarkSurah,
        surahPdfs,
        setSurahPdfUrl,
        bookmarkedPages,
        bookmarkPage,
        openPdfReader,
        openSurahPdf,
        openSurahText,
        closePdfReader,
        openAzkar,
        getSurahById,
        getActiveSurahPdfPath,
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

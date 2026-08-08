import React, { useState } from 'react';
import { QuranProvider, useQuran } from './context/QuranContext';
import { Header } from './components/Header';
import { SurahPdfList } from './components/SurahPdfList';
import { SurahPdfReader } from './components/SurahPdfReader';
import { PdfUploaderModal } from './components/PdfUploaderModal';
import { translations } from './utils/translations';
import { ArrowUp, ShieldCheck } from 'lucide-react';

const AppContent = () => {
  const { activeSurahId, language } = useQuran();
  const t = translations[language] || translations.urdu;
  const isUrdu = language === 'urdu';
  const [isUploaderOpen, setIsUploaderOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#C9A66B]/30 selection:text-[#1B4332] bg-[#FAF7F0] dark:bg-[#0F1410] text-[#22261F] dark:text-[#EDEAE0] transition-colors">
      
      {/* Clean Mobile Friendly Header */}
      <Header onOpenUploader={() => setIsUploaderOpen(true)} />

      {/* Main Single-Focus Content Area */}
      <main className="flex-1 px-3 sm:px-6 pb-12">
        {activeSurahId ? (
          <SurahPdfReader onOpenUploader={() => setIsUploaderOpen(true)} />
        ) : (
          <SurahPdfList onOpenUploader={() => setIsUploaderOpen(true)} />
        )}
      </main>

      {/* Modal */}
      <PdfUploaderModal
        isOpen={isUploaderOpen}
        onClose={() => setIsUploaderOpen(false)}
      />

      {/* Back to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 ${isUrdu ? 'left-5' : 'right-5'} z-30 p-3 rounded-full bg-[#1B4332] text-[#C9A66B] border border-[#C9A66B]/40 shadow-xl hover:scale-110 active:scale-95 transition-all`}
        title={t.backToTop}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Minimal Mobile Friendly Footer */}
      <footer
        className={`bg-[#0D3B33] dark:bg-[#070A08] text-[#FAF7F0] border-t border-[#C9A66B]/40 py-6 text-center text-xs space-y-2 transition-colors ${isUrdu ? 'font-urdu' : 'font-sans'}`}
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[#EDEAE0]/80">
          <div className="flex items-center space-x-1.5 rtl:space-x-reverse font-bold text-[#C9A66B]">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.footerText}</span>
          </div>
          <div className="flex items-center space-x-1 rtl:space-x-reverse text-[11px] text-[#EDEAE0]/60">
            <span>{t.sadaqahJariyah}</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default function App() {
  return (
    <QuranProvider>
      <AppContent />
    </QuranProvider>
  );
}

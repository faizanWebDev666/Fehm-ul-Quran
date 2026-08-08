import React from 'react';
import { useQuran } from '../context/QuranContext';
import { SURAHS_DATA } from '../data/quranData';
import { X, Bookmark, FileText, Trash2, ArrowLeft } from 'lucide-react';

export const BookmarksDrawer = ({ isOpen, onClose }) => {
  const {
    bookmarkedSurahs,
    toggleBookmarkSurah,
    bookmarkedPages,
    addPageBookmark,
    openSurahPdf
  } = useQuran();

  if (!isOpen) return null;

  const savedSurahObjects = SURAHS_DATA.filter((s) => bookmarkedSurahs.includes(s.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-urdu" dir="rtl">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F0] dark:bg-[#0F1410] border-l-2 border-[#C9A66B]/40 shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#C9A66B]/30 bg-[#1B4332] text-white flex items-center justify-between">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Bookmark className="w-5 h-5 text-[#C9A66B]" />
              <h3 className="text-lg font-bold">محفوظ شدہ نشانات و صفحات</h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-gray-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-5 overflow-y-auto flex-1 space-y-6">
            
            {/* Bookmarked Pages Section */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#1B4332] dark:text-[#C9A66B] flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
                <span>محفوظ پی ڈی ایف صفحات ({bookmarkedPages.length})</span>
              </h4>

              {bookmarkedPages.length === 0 ? (
                <p className="text-xs text-gray-500 italic py-2">
                  آپ نے کوئی پی ڈی ایف صفحہ محفوظ نہیں کیا۔
                </p>
              ) : (
                <div className="space-y-2">
                  {bookmarkedPages.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white dark:bg-[#161D17] border border-[#C9A66B]/30 flex items-center justify-between shadow-sm"
                    >
                      <div>
                        <span className="font-bold text-sm text-[#1B4332] dark:text-[#EDEAE0]">
                          سورۃ {b.surahName}
                        </span>
                        <div className="text-xs text-gray-500 font-mono">
                          صفحہ نمبر {b.pageNumber} • {b.date}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <button
                          onClick={() => {
                            openSurahPdf(b.surahId);
                            onClose();
                          }}
                          className="px-3 py-1.5 rounded-lg bg-[#1B4332] text-white text-xs font-bold"
                        >
                          کھولیں
                        </button>
                        <button
                          onClick={() => addPageBookmark(b.surahId, b.pageNumber, b.surahName)}
                          className="p-1.5 text-red-500 hover:bg-red-500/10 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Saved Surahs Section */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#1B4332] dark:text-[#C9A66B] flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
                <span>محفوظ شدہ سورتیں ({savedSurahObjects.length})</span>
              </h4>

              {savedSurahObjects.length === 0 ? (
                <p className="text-xs text-gray-500 italic py-2">
                  کوئی محفوظ شدہ سورۃ موجود نہیں۔
                </p>
              ) : (
                <div className="space-y-2">
                  {savedSurahObjects.map((s) => (
                    <div
                      key={s.id}
                      className="p-3 rounded-xl bg-white dark:bg-[#161D17] border border-[#C9A66B]/30 flex items-center justify-between shadow-sm"
                    >
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="font-mono text-xs font-bold text-[#C9A66B]">
                          #{s.id}
                        </span>
                        <div>
                          <span className="font-bold text-sm text-[#1B4332] dark:text-[#EDEAE0]">
                            سورۃ {s.nameUrdu}
                          </span>
                          <span className="block text-xs font-quran text-[#C9A66B]">
                            {s.nameArabic}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <button
                          onClick={() => {
                            openSurahPdf(s.id);
                            onClose();
                          }}
                          className="p-2 rounded-lg bg-[#1B4332] text-white hover:bg-[#0D3B33]"
                        >
                          <FileText className="w-4 h-4 text-[#C9A66B]" />
                        </button>
                        <button
                          onClick={() => toggleBookmarkSurah(s.id)}
                          className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

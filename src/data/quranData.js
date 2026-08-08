// Fehm-ul-Quran Complete Quran Dataset & Metadata
// Translation: Maulana Abul A'la Maududi (Tafheem-ul-Quran - تفہیم القرآن)

export const SURAHS_DATA = [
  { id: 1, nameArabic: "الفاتحة", nameUrdu: "الفاتحہ", nameEnglish: "Al-Fatihah", englishMeaning: "The Opening", revelationType: "Makki", ayahCount: 7, para: 1, pdfPath: "/surah/001_Surah_Al-Fatiha.pdf", descriptionUrdu: "قرآن مجید کی پہلی سورۃ جو دعا اور التجا کا خلاصہ ہے۔ مولانا مودودی کے نزدیک یہ قرآن کا دیباچہ ہے۔" },
  { id: 2, nameArabic: "البقرة", nameUrdu: "البقرہ", nameEnglish: "Al-Baqarah", englishMeaning: "The Cow", revelationType: "Madani", ayahCount: 286, para: 1, pdfPath: "/surah/002_Surah_Al-Baqra_Part1.pdf", descriptionUrdu: "قرآن کی سب سے بڑی سورۃ جس میں اسلامی شریعت، عبادات اور اجتماعی زندگی کے بنیادی احکام بیان کیے گئے ہیں۔" },
  { id: 3, nameArabic: "آل عمران", nameUrdu: "آل عمران", nameEnglish: "Ali 'Imran", englishMeaning: "Family of Imran", revelationType: "Madani", ayahCount: 200, para: 3, pdfPath: "/pdfs/surah_003.pdf", descriptionUrdu: "عقیدہ توحید، غزوہ احد کے دروس اور عیسائیت کے غلط عقائد کے رد پر جامع بحث۔" },
  { id: 4, nameArabic: "النساء", nameUrdu: "النساء", nameEnglish: "An-Nisa", englishMeaning: "The Women", revelationType: "Madani", ayahCount: 176, para: 4, pdfPath: "/pdfs/surah_004.pdf", descriptionUrdu: "خاندانی حقوق، عورتوں، یتیموں، وراثت کے قوانین اور معاشرتی اصلاح کے تفصیلی احکام۔" },
  { id: 5, nameArabic: "المائدة", nameUrdu: "المائدہ", nameEnglish: "Al-Ma'idah", englishMeaning: "The Table Spread", revelationType: "Madani", ayahCount: 120, para: 6, pdfPath: "/pdfs/surah_005.pdf", descriptionUrdu: "حلال و حرام کے احکام، عہد و پیمان کی پاسداری اور تکمیل دین کا عظیم الشان اعلان۔" },
  { id: 6, nameArabic: "الأنعام", nameUrdu: "الأنعام", nameEnglish: "Al-An'am", englishMeaning: "The Cattle", revelationType: "Makki", ayahCount: 165, para: 7, pdfPath: "/pdfs/surah_006.pdf", descriptionUrdu: "توحید، رسالت اور آخرت کا زبردست عقلی و استدلالی اثبات۔" },
  { id: 7, nameArabic: "الأعراف", nameUrdu: "الأعراف", nameEnglish: "Al-A'raf", englishMeaning: "The Heights", revelationType: "Makki", ayahCount: 206, para: 8, pdfPath: "/pdfs/surah_007.pdf", descriptionUrdu: "انبیاء علیہم السلام کی تاریخ، قوموں کا عروج و زوال اور میدان حشر کا منظر۔" },
  { id: 8, nameArabic: "الأنفال", nameUrdu: "الأنفال", nameEnglish: "Al-Anfal", englishMeaning: "The Spoils of War", revelationType: "Madani", ayahCount: 75, para: 9, pdfPath: "/pdfs/surah_008.pdf", descriptionUrdu: "غزوہ بدر کی فتح اور اسلامی ریاست کے جنگی و معاشی احکام۔" },
  { id: 9, nameArabic: "التوبة", nameUrdu: "التوبہ", nameEnglish: "At-Tawbah", englishMeaning: "The Repentance", revelationType: "Madani", ayahCount: 129, para: 10, pdfPath: "/pdfs/surah_009.pdf", descriptionUrdu: "منافقین کا پردہ چاک اور مشرکین سے بیزاری کا باقاعدہ اعلان۔" },
  { id: 10, nameArabic: "يونس", nameUrdu: "یونس", nameEnglish: "Yunus", englishMeaning: "Jonah", revelationType: "Makki", ayahCount: 109, para: 11, pdfPath: "/pdfs/surah_010.pdf", descriptionUrdu: "اللہ کی قدرت کے دلائل اور حضرت یونس علیہ السلام کی قوم کا تذکرہ۔" },
  { id: 11, nameArabic: "هود", nameUrdu: "ہود", nameEnglish: "Hud", englishMeaning: "Hud", revelationType: "Makki", ayahCount: 123, para: 11, pdfPath: "/pdfs/surah_011.pdf", descriptionUrdu: "انبیاء کی دعوت اور سرکش قوموں پر آنے والے عذاب کا احوال۔" },
  { id: 12, nameArabic: "يوسف", nameUrdu: "یوسف", nameEnglish: "Yusuf", englishMeaning: "Joseph", revelationType: "Makki", ayahCount: 111, para: 12, pdfPath: "/pdfs/surah_012.pdf", descriptionUrdu: "احسن القصص - حضرت یوسف علیہ السلام کا سچا اور عبرت انگیز واقعہ۔" },
  { id: 13, nameArabic: "الرعد", nameUrdu: "الرعد", nameEnglish: "Ar-Ra'd", englishMeaning: "The Thunder", revelationType: "Madani", ayahCount: 43, para: 13, pdfPath: "/pdfs/surah_013.pdf", descriptionUrdu: "کائنات کی تسخیر اور رعد و کڑک کی تسبیح سے توحید کا ثبوت۔" },
  { id: 14, nameArabic: "إبراهيم", nameUrdu: "ابراہیم", nameEnglish: "Ibrahim", englishMeaning: "Abraham", revelationType: "Makki", ayahCount: 52, para: 13, pdfPath: "/pdfs/surah_014.pdf", descriptionUrdu: "حضرت ابراہیم علیہ السلام کی دعا اور شکرگزاری کا درس۔" },
  { id: 15, nameArabic: "الحجر", nameUrdu: "الحجر", nameEnglish: "Al-Hijr", englishMeaning: "The Rocky Tract", revelationType: "Makki", ayahCount: 99, para: 14, pdfPath: "/pdfs/surah_015.pdf", descriptionUrdu: "قرآن مجید کی حفاظت کا خدائی وعدہ اور حجر کی قوم کا تذکرہ۔" },
  { id: 16, nameArabic: "النحل", nameUrdu: "النحل", nameEnglish: "An-Nahl", englishMeaning: "The Bee", revelationType: "Makki", ayahCount: 128, para: 14, pdfPath: "/pdfs/surah_016.pdf", descriptionUrdu: "نعمتوں کی سورۃ - شہد کی مکھی کی ساخت اور اللہ کے احسانات۔" },
  { id: 17, nameArabic: "الإسراء", nameUrdu: "بنی اسرائیل / الإسراء", nameEnglish: "Al-Isra", englishMeaning: "The Night Journey", revelationType: "Makki", ayahCount: 111, para: 15, pdfPath: "/pdfs/surah_017.pdf", descriptionUrdu: "واقعہ معراج اور فرد و معاشرہ کے لیے 14 اخلاقی اصول۔" },
  { id: 18, nameArabic: "الكهف", nameUrdu: "الکہف", nameEnglish: "Al-Kahf", englishMeaning: "The Cave", revelationType: "Makki", ayahCount: 110, para: 15, pdfPath: "/pdfs/surah_018.pdf", descriptionUrdu: "اصحاب کہف، حضرت موسیٰ و خضر، اور ذوالقرنین کے عبرت ناک واقعات۔" },
  { id: 19, nameArabic: "مريم", nameUrdu: "مریم", nameEnglish: "Maryam", englishMeaning: "Mary", revelationType: "Makki", ayahCount: 98, para: 16, pdfPath: "/pdfs/surah_019.pdf", descriptionUrdu: "حضرت مریم اور حضرت عیسیٰ علیہ السلام کی ولادت کا معجزہ۔" },
  { id: 20, nameArabic: "طه", nameUrdu: "طٰہٰ", nameEnglish: "Taha", englishMeaning: "Taha", revelationType: "Makki", ayahCount: 135, para: 16, pdfPath: "/pdfs/surah_020.pdf", descriptionUrdu: "حضرت موسیٰ علیہ السلام اور فرعون کی تفصیلی گفتگو۔" },
  { id: 21, nameArabic: "الأنبياء", nameUrdu: "الانبیاء", nameEnglish: "Al-Anbiya", englishMeaning: "The Prophets", revelationType: "Makki", ayahCount: 112, para: 17, pdfPath: "/pdfs/surah_021.pdf", descriptionUrdu: "بیک وقت کئی جلیل القدر انبیاء کی جدوجہد اور دعاؤں کا تذکرہ۔" },
  { id: 22, nameArabic: "الحج", nameUrdu: "الحج", nameEnglish: "Al-Hajj", englishMeaning: "The Pilgrimage", revelationType: "Madani", ayahCount: 78, para: 17, pdfPath: "/pdfs/surah_022.pdf", descriptionUrdu: "فریضہ حج کی تاریخ اور دفاع اسلام کے لیے پہلی بار قتال کی اجازت۔" },
  { id: 23, nameArabic: "المؤمنون", nameUrdu: "المؤمنون", nameEnglish: "Al-Mu'minun", englishMeaning: "The Believers", revelationType: "Makki", ayahCount: 118, para: 18, pdfPath: "/pdfs/surah_023.pdf", descriptionUrdu: "سچے مومنوں کی اوصاف حمیدہ اور کامیابی کا معیار۔" },
  { id: 24, nameArabic: "النور", nameUrdu: "النور", nameEnglish: "An-Nur", englishMeaning: "The Light", revelationType: "Madani", ayahCount: 64, para: 18, pdfPath: "/pdfs/surah_024.pdf", descriptionUrdu: "معاشرتی پاکیزگی، حجاب اور واقعہ افک کا واقعہ۔" },
  { id: 25, nameArabic: "الفرقان", nameUrdu: "الفرقان", nameEnglish: "Al-Furqan", englishMeaning: "The Criterion", revelationType: "Makki", ayahCount: 77, para: 18, pdfPath: "/pdfs/surah_025.pdf", descriptionUrdu: "حق اور باطل میں فرق کرنے والی کتاب اور عباد الرحمن کی صفات۔" },
  { id: 26, nameArabic: "الشعراء", nameUrdu: "الشعراء", nameEnglish: "Ash-Shu'ara", englishMeaning: "The Poets", revelationType: "Makki", ayahCount: 227, para: 19, pdfPath: "/pdfs/surah_026.pdf", descriptionUrdu: "حق کی دعوت پر شاعرانہ بیانیے کے مقابلے میں ربانی کلام کی برتری۔" },
  { id: 27, nameArabic: "النمل", nameUrdu: "النمل", nameEnglish: "An-Naml", englishMeaning: "The Ant", revelationType: "Makki", ayahCount: 93, para: 19, pdfPath: "/pdfs/surah_027.pdf", descriptionUrdu: "حضرت سلیمان علیہ السلام، ملکہ سبا اور نمل (چیونٹی) کا تذکرہ۔" },
  { id: 28, nameArabic: "القصص", nameUrdu: "القصص", nameEnglish: "Al-Qasas", englishMeaning: "The Stories", revelationType: "Makki", ayahCount: 88, para: 20, pdfPath: "/pdfs/surah_028.pdf", descriptionUrdu: "حضرت موسیٰ علیہ السلام کے بچپن سے لے کر نبوت تک کے عبرت ناک احوال۔" },
  { id: 29, nameArabic: "العنكبوت", nameUrdu: "العنکبوت", nameEnglish: "Al-'Ankabut", englishMeaning: "The Spider", revelationType: "Makki", ayahCount: 69, para: 20, pdfPath: "/pdfs/surah_029.pdf", descriptionUrdu: "باطل کا سہارا مکڑی کے جالے کی طرح کمزور ہے۔ آزمائش میں ثابت قدمی۔" },
  { id: 30, nameArabic: "الروم", nameUrdu: "الروم", nameEnglish: "Ar-Rum", englishMeaning: "The Romans", revelationType: "Makki", ayahCount: 60, para: 21, pdfPath: "/pdfs/surah_030.pdf", descriptionUrdu: "روم و فارس کی جنگ کی عظیم الشان قرآنی پیشگوئی جو من وعن سچی ہوئی۔" },
  { id: 31, nameArabic: "لقمان", nameUrdu: "لقمان", nameEnglish: "Luqman", englishMeaning: "Luqman", revelationType: "Makki", ayahCount: 34, para: 21, pdfPath: "/pdfs/surah_031.pdf", descriptionUrdu: "حکیم لقمان کی اپنے بیٹے کو جامع اور بصیرت افروز نصیحتیں۔" },
  { id: 32, nameArabic: "السجدة", nameUrdu: "السجدہ", nameEnglish: "As-Sajdah", englishMeaning: "The Prostration", revelationType: "Makki", ayahCount: 30, para: 21, pdfPath: "/pdfs/surah_032.pdf", descriptionUrdu: "انسان کی تخلیق اور روز محشر خدا کے سامنے عاجزی اور سجدہ ریزی۔" },
  { id: 33, nameArabic: "الأحزاب", nameUrdu: "الاحزاب", nameEnglish: "Al-Ahzab", englishMeaning: "The Combined Forces", revelationType: "Madani", ayahCount: 73, para: 21, pdfPath: "/pdfs/surah_033.pdf", descriptionUrdu: "غزوہ خندق (احزاب)، امہات المؤمنین کے احکام اور ختم نبوت کا مقام۔" },
  { id: 34, nameArabic: "سبأ", nameUrdu: "سبأ", nameEnglish: "Saba", englishMeaning: "Sheba", revelationType: "Makki", ayahCount: 54, para: 22, pdfPath: "/pdfs/surah_034.pdf", descriptionUrdu: "قوم سبأ کی خوشحالی اور ان کی ناشکری پر ملنے والے عذاب کی داستان۔" },
  { id: 35, nameArabic: "فاطر", nameUrdu: "فاطر", nameEnglish: "Fatir", englishMeaning: "Originator", revelationType: "Makki", ayahCount: 45, para: 22, pdfPath: "/pdfs/surah_035.pdf", descriptionUrdu: "کائنات کا پیدا کرنے والا اللہ اور فرشتوں کی تخلیق۔" },
  { id: 36, nameArabic: "يس", nameUrdu: "یسين", nameEnglish: "Ya-Sin", englishMeaning: "Ya Sin", revelationType: "Makki", ayahCount: 83, para: 22, pdfPath: "/pdfs/surah_036.pdf", descriptionUrdu: "قلب القرآن (قرآن کا دل) - توحید، رسالت اور قیامت کا مؤثر ترین بیان۔" },
  { id: 37, nameArabic: "الصافات", nameUrdu: "الصافات", nameEnglish: "As-Saffat", englishMeaning: "Those who set the Ranks", revelationType: "Makki", ayahCount: 182, para: 23, pdfPath: "/pdfs/surah_037.pdf", descriptionUrdu: "صف بستہ فرشتوں کی قسم اور انبیاء کی قربانیوں کا تذکرہ۔" },
  { id: 38, nameArabic: "ص", nameUrdu: "ص", nameEnglish: "Sad", englishMeaning: "The Letter Sad", revelationType: "Makki", ayahCount: 88, para: 23, pdfPath: "/pdfs/surah_038.pdf", descriptionUrdu: "حضرت داؤد، سلیمان اور ایوب علیہم السلام کے صابرانہ احوال۔" },
  { id: 39, nameArabic: "الزمر", nameUrdu: "الزمر", nameEnglish: "Az-Zumar", englishMeaning: "The Troops", revelationType: "Makki", ayahCount: 75, para: 23, pdfPath: "/pdfs/surah_039.pdf", descriptionUrdu: "خالص بندگی کی دعوت اور قیامت کے دن گروہ در گروہ تقسیم۔" },
  { id: 40, nameArabic: "غافر", nameUrdu: "غافر / المؤمن", nameEnglish: "Ghafir", englishMeaning: "The Forgiver", revelationType: "Makki", ayahCount: 85, para: 24, pdfPath: "/pdfs/surah_040.pdf", descriptionUrdu: "گناہوں کا بخشنے والا اور آل فرعون کے مومن کی جرأت مندانہ تقریر۔" },
  { id: 41, nameArabic: "فصلت", nameUrdu: "فصلت", nameEnglish: "Fussilat", englishMeaning: "Explained in Detail", revelationType: "Makki", ayahCount: 54, para: 24, pdfPath: "/pdfs/surah_041.pdf", descriptionUrdu: "واضح اور مفصل کلام ہدایت، اور استقامت اختیار کرنے والوں کو خوشخبری۔" },
  { id: 42, nameArabic: "الشورى", nameUrdu: "الشورى", nameEnglish: "Ash-Shura", englishMeaning: "The Consultation", revelationType: "Makki", ayahCount: 53, para: 25, pdfPath: "/pdfs/surah_042.pdf", descriptionUrdu: "باہمی مشورے کا اصول اور وحی الٰہی کی حقیقت۔" },
  { id: 43, nameArabic: "الزخرف", nameUrdu: "الزخرف", nameEnglish: "Az-Zukhruf", englishMeaning: "The Gold Adornments", revelationType: "Makki", ayahCount: 89, para: 25, pdfPath: "/pdfs/surah_043.pdf", descriptionUrdu: "دنیا کی ظاہری چمک دمک کی بے ثباتی۔" },
  { id: 44, nameArabic: "الدخان", nameUrdu: "الدخان", nameEnglish: "Ad-Dukhan", englishMeaning: "The Smoke", revelationType: "Makki", ayahCount: 59, para: 25, pdfPath: "/pdfs/surah_044.pdf", descriptionUrdu: "شب قدر میں قرآن کا نزول اور قحط کا دھواں۔" },
  { id: 45, nameArabic: "الجاثية", nameUrdu: "الجاثیہ", nameEnglish: "Al-Jathiyah", englishMeaning: "The Crouching", revelationType: "Makki", ayahCount: 37, para: 25, pdfPath: "/pdfs/surah_045.pdf", descriptionUrdu: "قیامت کے دن ہر امت کا گھٹنوں کے بل گرنا۔" },
  { id: 46, nameArabic: "الأحقاف", nameUrdu: "الاحقاف", nameEnglish: "Al-Ahqaf", englishMeaning: "The Wind-curved Sandhills", revelationType: "Makki", ayahCount: 35, para: 26, pdfPath: "/pdfs/surah_046.pdf", descriptionUrdu: "قوم عاد کے مساکن احقاف اور والدین کے ساتھ حسن سلوک کی تاکید۔" },
  { id: 47, nameArabic: "محمد", nameUrdu: "محمد", nameEnglish: "Muhammad", englishMeaning: "Muhammad", revelationType: "Madani", ayahCount: 38, para: 26, pdfPath: "/pdfs/surah_047.pdf", descriptionUrdu: "نبی کریم ﷺ پر ایمان، جہاد اور منافقین کا کمزور رویہ۔" },
  { id: 48, nameArabic: "الفتح", nameUrdu: "الفتح", nameEnglish: "Al-Fath", englishMeaning: "The Victory", revelationType: "Madani", ayahCount: 29, para: 26, pdfPath: "/pdfs/surah_048.pdf", descriptionUrdu: "صلح حدیبیہ کی صورت میں فتح مبین کی خوشخبری۔" },
  { id: 49, nameArabic: "الحجرات", nameUrdu: "الحجرات", nameEnglish: "Al-Hujurat", englishMeaning: "The Rooms", revelationType: "Madani", ayahCount: 18, para: 26, pdfPath: "/pdfs/surah_049.pdf", descriptionUrdu: "اسلامی آداب، باہمی احترام، اور نسلی تفریق کا خاتمہ۔" },
  { id: 50, nameArabic: "ق", nameUrdu: "ق", nameEnglish: "Qaf", englishMeaning: "The Letter Qaf", revelationType: "Makki", ayahCount: 45, para: 26, pdfPath: "/pdfs/surah_050.pdf", descriptionUrdu: "دوبارہ زندہ کیے جانے پر منکرین کے شبہات کا زبردست جواب۔" },
  { id: 51, nameArabic: "الذاريات", nameUrdu: "الذاریات", nameEnglish: "Adh-Dhariyat", englishMeaning: "The Winnowing Winds", revelationType: "Makki", ayahCount: 60, para: 26, pdfPath: "/pdfs/surah_051.pdf", descriptionUrdu: "انسان اور جنات کی تخلیق کا مقصد صرف اللہ کی عبادت ہے۔" },
  { id: 52, nameArabic: "الطور", nameUrdu: "الطور", nameEnglish: "At-Tur", englishMeaning: "The Mount", revelationType: "Makki", ayahCount: 49, para: 27, pdfPath: "/pdfs/surah_052.pdf", descriptionUrdu: "طور سینا کی قسم اور متقین کے جنت کے انعامات۔" },
  { id: 53, nameArabic: "النجم", nameUrdu: "النجم", nameEnglish: "An-Najm", englishMeaning: "The Star", revelationType: "Makki", ayahCount: 62, para: 27, pdfPath: "/pdfs/surah_053.pdf", descriptionUrdu: "نبی کریم ﷺ کا سفر معراج اور سدرۃ المنقہیٰ کا مشاہدہ۔" },
  { id: 54, nameArabic: "القمر", nameUrdu: "القمر", nameEnglish: "Al-Qamar", englishMeaning: "The Moon", revelationType: "Makki", ayahCount: 55, para: 27, pdfPath: "/pdfs/surah_054.pdf", descriptionUrdu: "شق القمر کا معجزہ اور قرآن کا نصحیت کے لیے آسان ہونا۔" },
  { id: 55, nameArabic: "الرحمن", nameUrdu: "الرحمن", nameEnglish: "Ar-Rahman", englishMeaning: "The Beneficent", revelationType: "Madani", ayahCount: 78, para: 27, pdfPath: "/pdfs/surah_055.pdf", descriptionUrdu: "عروس القرآن - فبأي آلاء ربكما تكذبان کا روح پرور ترانہ۔" },
  { id: 56, nameArabic: "الواقعة", nameUrdu: "الواقعہ", nameEnglish: "Al-Waqi'ah", englishMeaning: "The Inevitable", revelationType: "Makki", ayahCount: 96, para: 27, pdfPath: "/pdfs/surah_056.pdf", descriptionUrdu: "قیامت کی برپا ہونے والی حقیقت اور لوگوں کے تین گروہ۔" },
  { id: 57, nameArabic: "الحديد", nameUrdu: "الحديد", nameEnglish: "Al-Hadid", englishMeaning: "The Iron", revelationType: "Madani", ayahCount: 29, para: 27, pdfPath: "/pdfs/surah_057.pdf", descriptionUrdu: "راہ خدا میں انفاق اور لوہے کی منافع و طاقت۔" },
  { id: 58, nameArabic: "المجادلة", nameUrdu: "المجادلہ", nameEnglish: "Al-Mujadila", englishMeaning: "The Pleading Woman", revelationType: "Madani", ayahCount: 22, para: 28, pdfPath: "/pdfs/surah_058.pdf", descriptionUrdu: "ظہار کا مسئلہ اور راز داری کی نجویٰ کے آداب۔" },
  { id: 59, nameArabic: "الحشر", nameUrdu: "الحشر", nameEnglish: "Al-Hashr", englishMeaning: "The Exile", revelationType: "Madani", ayahCount: 24, para: 28, pdfPath: "/pdfs/surah_059.pdf", descriptionUrdu: "بنو نضیر کی جلاوطنی اور اللہ کے اسمائے حسنیٰ۔" },
  { id: 60, nameArabic: "الممتحنة", nameUrdu: "الممتحنہ", nameEnglish: "Al-Mumtahanah", englishMeaning: "She that is to be examined", revelationType: "Madani", ayahCount: 13, para: 28, pdfPath: "/pdfs/surah_060.pdf", descriptionUrdu: "کفار کے ساتھ تعلقات کی حدود اور ہجرت کر کے آنے والی خواتین کی آزمائش۔" },
  { id: 61, nameArabic: "الصف", nameUrdu: "الصف", nameEnglish: "As-Saff", englishMeaning: "The Ranks", revelationType: "Madani", ayahCount: 14, para: 28, pdfPath: "/pdfs/surah_061.pdf", descriptionUrdu: "صف بستہ جدوجہد اور حضرت عیسیٰ علیہ السلام کی احمد مجتبیٰ ﷺ کی خوشخبری۔" },
  { id: 62, nameArabic: "الجمعة", nameUrdu: "الجمعہ", nameEnglish: "Al-Jumu'ah", englishMeaning: "Friday", revelationType: "Madani", ayahCount: 11, para: 28, pdfPath: "/pdfs/surah_062.pdf", descriptionUrdu: "نماز جمعہ کی فرضیت اور بعثتِ محمدی ﷺ کا مقصد۔" },
  { id: 63, nameArabic: "المنافقون", nameUrdu: "المنافقون", nameEnglish: "Al-Munafiqun", englishMeaning: "The Hypocrites", revelationType: "Madani", ayahCount: 11, para: 28, pdfPath: "/pdfs/surah_063.pdf", descriptionUrdu: "منافقوں کی چالیں اور ان کے دلی بغض کا انکشاف۔" },
  { id: 64, nameArabic: "التغابن", nameUrdu: "التغابن", nameEnglish: "At-Taghabun", englishMeaning: "Mutual Disillusion", revelationType: "Madani", ayahCount: 18, para: 28, pdfPath: "/pdfs/surah_064.pdf", descriptionUrdu: "ہار اور جیت کے فیصلے کا واقعی دن (روز محشر)۔" },
  { id: 65, nameArabic: "الطلاق", nameUrdu: "الطلاق", nameEnglish: "At-Talaq", englishMeaning: "The Divorce", revelationType: "Madani", ayahCount: 12, para: 28, pdfPath: "/pdfs/surah_065.pdf", descriptionUrdu: "طلاق کی عدت اور خواتین کی نفقہ کے شرعی قوانین۔" },
  { id: 66, nameArabic: "التحريم", nameUrdu: "التحریم", nameEnglish: "At-Tahrim", englishMeaning: "The Prohibition", revelationType: "Madani", ayahCount: 12, para: 28, pdfPath: "/pdfs/surah_066.pdf", descriptionUrdu: "خانگی معاملات میں حلال و حرام کی حد اور تربیت کا پیغام۔" },
  { id: 67, nameArabic: "الملك", nameUrdu: "الملک", nameEnglish: "Al-Mulk", englishMeaning: "The Sovereignty", revelationType: "Makki", ayahCount: 30, para: 29, pdfPath: "/pdfs/surah_067.pdf", descriptionUrdu: "سورۃ تبارک الذی - عذاب قبر سے نجات کی سورۃ اور کائنات پر اللہ کا تسلط۔" },
  { id: 68, nameArabic: "القلم", nameUrdu: "القلم", nameEnglish: "Al-Qalam", englishMeaning: "The Pen", revelationType: "Makki", ayahCount: 52, para: 29, pdfPath: "/pdfs/surah_068.pdf", descriptionUrdu: "قلم اور لکھی جانے والی چیزوں کی قسم، نبی ﷺ کے اعلیٰ اخلاق کا گواہ۔" },
  { id: 69, nameArabic: "الحاقة", nameUrdu: "الحاقہ", nameEnglish: "Al-Haqqah", englishMeaning: "The Inevitable Reality", revelationType: "Makki", ayahCount: 52, para: 29, pdfPath: "/pdfs/surah_069.pdf", descriptionUrdu: "بالکل سچی اور برپا ہونے والی قیامت۔" },
  { id: 70, nameArabic: "المعارج", nameUrdu: "المعارج", nameEnglish: "Al-Ma'arij", englishMeaning: "The Ascending Stairways", revelationType: "Makki", ayahCount: 44, para: 29, pdfPath: "/pdfs/surah_070.pdf", descriptionUrdu: "بلندیوں کے راستے اور انسان کی بے صبری کی کیفیت۔" },
  { id: 71, nameArabic: "نوح", nameUrdu: "نوح", nameEnglish: "Nuh", englishMeaning: "Noah", revelationType: "Makki", ayahCount: 28, para: 29, pdfPath: "/pdfs/surah_071.pdf", descriptionUrdu: "حضرت نوح علیہ السلام کی 950 سالہ شب و روز کی دعوت۔" },
  { id: 72, nameArabic: "الجن", nameUrdu: "الجن", nameEnglish: "Al-Jinn", englishMeaning: "The Jinn", revelationType: "Makki", ayahCount: 28, para: 29, pdfPath: "/pdfs/surah_072.pdf", descriptionUrdu: "جنات کا قرآنی تلاوت سن کر ایمان لانا اور ان کا اعتراف۔" },
  { id: 73, nameArabic: "المزمل", nameUrdu: "المزمل", nameEnglish: "Al-Muzzammil", englishMeaning: "The Enshrouded One", revelationType: "Makki", ayahCount: 20, para: 29, pdfPath: "/pdfs/surah_073.pdf", descriptionUrdu: "قیام اللیل (نماز تہجد) اور ترتیل کے ساتھ قرآن کی تلاوت۔" },
  { id: 74, nameArabic: "المدثر", nameUrdu: "المدثر", nameEnglish: "Al-Muddaththir", englishMeaning: "The Cloaked One", revelationType: "Makki", ayahCount: 56, para: 29, pdfPath: "/pdfs/surah_074.pdf", descriptionUrdu: "قم فأنذر - اٹھیے اور لوگوں کو ڈرائیے۔ تبلیغ کا ابتدائی حکم۔" },
  { id: 75, nameArabic: "القيامة", nameUrdu: "القیامۃ", nameEnglish: "Al-Qiyamah", englishMeaning: "The Resurrection", revelationType: "Makki", ayahCount: 40, para: 29, pdfPath: "/pdfs/surah_075.pdf", descriptionUrdu: "نفس لوامہ اور قیامت کے دن چہروں کی شادابی و مردنی۔" },
  { id: 76, nameArabic: "الإنسان", nameUrdu: "الانسان / دہر", nameEnglish: "Al-Insan", englishMeaning: "Man", revelationType: "Madani", ayahCount: 31, para: 29, pdfPath: "/pdfs/surah_076.pdf", descriptionUrdu: "انسان کی ابتدا اور ابرار کی جنت میں نعمتیں۔" },
  { id: 77, nameArabic: "المرسلات", nameUrdu: "المرسلات", nameEnglish: "Al-Mursalat", englishMeaning: "The Emissaries", revelationType: "Makki", ayahCount: 50, para: 29, pdfPath: "/pdfs/surah_077.pdf", descriptionUrdu: "ویل يومئذ للمكذبين کا شدید انتباہ۔" },
  { id: 78, nameArabic: "النبأ", nameUrdu: "النبأ", nameEnglish: "An-Naba", englishMeaning: "The Tidings", revelationType: "Makki", ayahCount: 40, para: 30, pdfPath: "/pdfs/surah_078.pdf", descriptionUrdu: "عظیم خبر (قیامت) کے بارے میں کافروں کے سوالات۔" },
  { id: 79, nameArabic: "النازعات", nameUrdu: "النازعات", nameEnglish: "An-Nazi'at", englishMeaning: "Those who drag forth", revelationType: "Makki", ayahCount: 46, para: 30, pdfPath: "/pdfs/surah_079.pdf", descriptionUrdu: "روح قبض کرنے والے فرشتے اور فرعون کا عبرت ناک انجام۔" },
  { id: 80, nameArabic: "عبس", nameUrdu: "عبس", nameEnglish: "'Abasa", englishMeaning: "He Frowned", revelationType: "Makki", ayahCount: 42, para: 30, pdfPath: "/pdfs/surah_080.pdf", descriptionUrdu: "حضرت ابن ام مکتوم رض کے واقعہ سے اسلامی مساوات کا درس۔" },
  { id: 81, nameArabic: "التكوير", nameUrdu: "التکویر", nameEnglish: "At-Takwir", englishMeaning: "The Overthrowing", revelationType: "Makki", ayahCount: 29, para: 30, pdfPath: "/pdfs/surah_081.pdf", descriptionUrdu: "سورج کا لپیٹا جانا اور ستاروں کا بے نور ہونا۔" },
  { id: 82, nameArabic: "الإنفطار", nameUrdu: "الانفطار", nameEnglish: "Al-Infitar", englishMeaning: "The Cleaving", revelationType: "Makki", ayahCount: 19, para: 30, pdfPath: "/pdfs/surah_082.pdf", descriptionUrdu: "آسمان کا پھٹنا اور کراماً کاتبین کا اعمال درج کرنا۔" },
  { id: 83, nameArabic: "المطففين", nameUrdu: "المطففین", nameEnglish: "Al-Mutaffifin", englishMeaning: "The Defrauders", revelationType: "Makki", ayahCount: 36, para: 30, pdfPath: "/pdfs/surah_083.pdf", descriptionUrdu: "ناپ تول میں کمی کرنے والوں کے لیے ہلاکت۔" },
  { id: 84, nameArabic: "الإنشقاق", nameUrdu: "الانشقاق", nameEnglish: "Al-Inshiqaq", englishMeaning: "The Splitting Open", revelationType: "Makki", ayahCount: 25, para: 30, pdfPath: "/pdfs/surah_084.pdf", descriptionUrdu: "اعمال نامہ دائیں اور بائیں ہاتھ میں ملنے کی کیفیت۔" },
  { id: 85, nameArabic: "البروج", nameUrdu: "البروج", nameEnglish: "Al-Buruj", englishMeaning: "The Mansions of the Stars", revelationType: "Makki", ayahCount: 22, para: 30, pdfPath: "/pdfs/surah_085.pdf", descriptionUrdu: "اصحاب الاخدود (خندق والوں) کی مظلومیت اور اللہ کا تحفظ۔" },
  { id: 86, nameArabic: "الطارق", nameUrdu: "الطارق", nameEnglish: "At-Tariq", englishMeaning: "The Nightcomer", revelationType: "Makki", ayahCount: 17, para: 30, pdfPath: "/pdfs/surah_086.pdf", descriptionUrdu: "رات کو نمودار ہونے والا چمکتا ہوا تارا۔" },
  { id: 87, nameArabic: "الأعلى", nameUrdu: "الاعلیٰ", nameEnglish: "Al-A'la", englishMeaning: "The Most High", revelationType: "Makki", ayahCount: 19, para: 30, pdfPath: "/pdfs/surah_087.pdf", descriptionUrdu: "اپنے رب اعلیٰ کی تسبیح، حضرت ابراہیم و موسیٰ کے صحائف۔" },
  { id: 88, nameArabic: "الغاشية", nameUrdu: "الغاشیہ", nameEnglish: "Al-Ghashiyah", englishMeaning: "The Overwhelming", revelationType: "Makki", ayahCount: 26, para: 30, pdfPath: "/pdfs/surah_088.pdf", descriptionUrdu: "چھانے والی بلا (قیامت) اور جنت کا سکون۔" },
  { id: 89, nameArabic: "الفجر", nameUrdu: "الفجر", nameEnglish: "Al-Fajr", englishMeaning: "The Dawn", revelationType: "Makki", ayahCount: 30, para: 30, pdfPath: "/pdfs/surah_089.pdf", descriptionUrdu: "صبح صادق کی قسم، نفس مطمئنہ کی اپنے رب کی طرف واپسی۔" },
  { id: 90, nameArabic: "البلد", nameUrdu: "البلد", nameEnglish: "Al-Balad", englishMeaning: "The City", revelationType: "Makki", ayahCount: 20, para: 30, pdfPath: "/pdfs/surah_090.pdf", descriptionUrdu: "شہر مکہ کی قسم اور دشوار گزار گھاٹی (غریبوں کی مدد)۔" },
  { id: 91, nameArabic: "الشمس", nameUrdu: "الشمس", nameEnglish: "Ash-Shams", englishMeaning: "The Sun", revelationType: "Makki", ayahCount: 15, para: 30, pdfPath: "/pdfs/surah_091.pdf", descriptionUrdu: "سورج اور چاند کی قسم، تزکیہ نفس کرنے والا کامیاب رہا۔" },
  { id: 92, nameArabic: "الليل", nameUrdu: "اللیل", nameEnglish: "Al-Layl", englishMeaning: "The Night", revelationType: "Makki", ayahCount: 21, para: 30, pdfPath: "/pdfs/surah_092.pdf", descriptionUrdu: "رات جب چھا جائے، راہ خدا میں دینے والوں کے لیے آسانی۔" },
  { id: 93, nameArabic: "الضحى", nameUrdu: "الضحى", nameEnglish: "Ad-Duha", englishMeaning: "The Morning Hours", revelationType: "Makki", ayahCount: 11, para: 30, pdfPath: "/pdfs/surah_093.pdf", descriptionUrdu: "چاشت کا وقت، آپ کے رب نے آپ کو کبھی نہیں چھوڑا۔" },
  { id: 94, nameArabic: "الشرح", nameUrdu: "الشرح / الانشراح", nameEnglish: "Ash-Sharh", englishMeaning: "The Relief", revelationType: "Makki", ayahCount: 8, para: 30, pdfPath: "/pdfs/surah_094.pdf", descriptionUrdu: "سینے کا کشادہ کیا جانا، ہر دشواری کے ساتھ آسانی ہے۔" },
  { id: 95, nameArabic: "التين", nameUrdu: "التین", nameEnglish: "At-Tin", englishMeaning: "The Fig", revelationType: "Makki", ayahCount: 8, para: 30, pdfPath: "/pdfs/surah_095.pdf", descriptionUrdu: "انجیر اور زیتون کی قسم، انسان بہترین ساخت پر پیدا کیا گیا۔" },
  { id: 96, nameArabic: "العلق", nameUrdu: "العلق", nameEnglish: "Al-'Alaq", englishMeaning: "The Clot", revelationType: "Makki", ayahCount: 19, para: 30, pdfPath: "/pdfs/surah_096.pdf", descriptionUrdu: "اقرأ باسم ربك - قرآن مجید کی سب سے پہلی نازل ہونے والی آیات۔" },
  { id: 97, nameArabic: "القدر", nameUrdu: "القدر", nameEnglish: "Al-Qadr", englishMeaning: "The Power", revelationType: "Makki", ayahCount: 5, para: 30, pdfPath: "/pdfs/surah_097.pdf", descriptionUrdu: "شب قدر - ہزار مہینوں سے بہتر مبارک رات۔" },
  { id: 98, nameArabic: "البينة", nameUrdu: "البینہ", nameEnglish: "Al-Bayyinah", englishMeaning: "The Clear Proof", revelationType: "Madani", ayahCount: 8, para: 30, pdfPath: "/pdfs/surah_098.pdf", descriptionUrdu: "روشن دلیل اور خیر البریہ (بہترین مخلوق)۔" },
  { id: 99, nameArabic: "الزلزلة", nameUrdu: "الزلزلہ", nameEnglish: "Az-Zalzalah", englishMeaning: "The Earthquake", revelationType: "Madani", ayahCount: 8, para: 30, pdfPath: "/pdfs/surah_099.pdf", descriptionUrdu: "زمین کا شدید زلزلہ اور ذرہ برابر نیکی و بدی کی جزا۔" },
  { id: 100, nameArabic: "العاديات", nameUrdu: "العادیات", nameEnglish: "Al-'Adiyat", englishMeaning: "The Courser", revelationType: "Makki", ayahCount: 11, para: 30, pdfPath: "/pdfs/surah_100.pdf", descriptionUrdu: "ہانپتے ہوئے سوار گھوڑوں کی قسم، انسان کا اپنے رب کا ناشکرا ہونا۔" },
  { id: 101, nameArabic: "القارعة", nameUrdu: "القارعہ", nameEnglish: "Al-Qari'ah", englishMeaning: "The Calamity", revelationType: "Makki", ayahCount: 11, para: 30, pdfPath: "/pdfs/surah_101.pdf", descriptionUrdu: "کھٹکھٹانے والی (قیامت) اور ترازو کے بھاری یا ہلکے ہونے کا نتیجہ۔" },
  { id: 102, nameArabic: "التكاثر", nameUrdu: "التکاثر", nameEnglish: "At-Takathur", englishMeaning: "The Rivalry in world increase", revelationType: "Makki", ayahCount: 8, para: 30, pdfPath: "/pdfs/surah_102.pdf", descriptionUrdu: "مال و دولت کی حرص میں ایک دوسرے سے آگے نکلنے کی غفلت۔" },
  { id: 103, nameArabic: "العصر", nameUrdu: "العصر", nameEnglish: "Al-'Asr", englishMeaning: "The Declining Day", revelationType: "Makki", ayahCount: 3, para: 30, pdfPath: "/pdfs/surah_103.pdf", descriptionUrdu: "زمانہ شاہد ہے کہ انسان خسارے میں ہے سوائے ایمان و عمل صالح والوں کے۔" },
  { id: 104, nameArabic: "الهمزة", nameUrdu: "الہمزہ", nameEnglish: "Al-Humazah", englishMeaning: "The Traducer", revelationType: "Makki", ayahCount: 9, para: 30, pdfPath: "/pdfs/surah_104.pdf", descriptionUrdu: "طعنہ زنی کرنے والے اور مال جمع کر کے گننے والے کی تباہی۔" },
  { id: 105, nameArabic: "الفيل", nameUrdu: "الفیل", nameEnglish: "Al-Fil", englishMeaning: "The Elephant", revelationType: "Makki", ayahCount: 5, para: 30, pdfPath: "/pdfs/surah_105.pdf", descriptionUrdu: "اصحاب الفیل (ابربہ کا لشکر) کی ابابیلوں کے ذریعے تباہی۔" },
  { id: 106, nameArabic: "قريش", nameUrdu: "قریش", nameEnglish: "Quraysh", englishMeaning: "Quraysh", revelationType: "Makki", ayahCount: 4, para: 30, pdfPath: "/pdfs/surah_106.pdf", descriptionUrdu: "قریش کی ملافت اور رب البیت کی عبادت کا شکر۔" },
  { id: 107, nameArabic: "المواعون", nameUrdu: "المقاعون", nameEnglish: "Al-Ma'un", englishMeaning: "The Small Kindnesses", revelationType: "Makki", ayahCount: 7, para: 30, pdfPath: "/pdfs/surah_107.pdf", descriptionUrdu: "دین کو جھٹلانے والا، یتیم کو دھکے دینے والا اور ماعون (عام ضرورت کی چیز) روکنے والا۔" },
  { id: 108, nameArabic: "الكوثر", nameUrdu: "الکوثر", nameEnglish: "Al-Kawthar", englishMeaning: "The Abundance", revelationType: "Makki", ayahCount: 3, para: 30, pdfPath: "/pdfs/surah_108.pdf", descriptionUrdu: "کوثر کی عطا، اپنے رب کے لیے نماز پڑھیں اور قربانی دیں۔" },
  { id: 109, nameArabic: "الكافرون", nameUrdu: "الکافرون", nameEnglish: "Al-Kafirun", englishMeaning: "The Disbelievers", revelationType: "Makki", ayahCount: 6, para: 30, pdfPath: "/pdfs/surah_109.pdf", descriptionUrdu: "لكم دينكم ولي دين - باطل سے قطعی اور کامل بیزاری۔" },
  { id: 110, nameArabic: "النصر", nameUrdu: "النصر", nameEnglish: "An-Nasr", englishMeaning: "The Divine Support", revelationType: "Madani", ayahCount: 3, para: 30, pdfPath: "/pdfs/surah_110.pdf", descriptionUrdu: "خدا کی نصرت اور مکہ کی فتح، افواج در افواج اسلام میں شمولیت۔" },
  { id: 111, nameArabic: "المسد", nameUrdu: "المسد / لہب", nameEnglish: "Al-Masad", englishMeaning: "The Palm Fiber", revelationType: "Makki", ayahCount: 5, para: 30, pdfPath: "/pdfs/surah_111.pdf", descriptionUrdu: "ابو لہب اور اس کی بیوی کا انجام۔" },
  { id: 112, nameArabic: "الإخلاص", nameUrdu: "الاخلاص", nameEnglish: "Al-Ikhlas", englishMeaning: "The Sincerity", revelationType: "Makki", ayahCount: 4, para: 30, pdfPath: "/pdfs/surah_112.pdf", descriptionUrdu: "قل ہو اللہ احد - توحید کا خالص ترین تعارف۔" },
  { id: 113, nameArabic: "الفلق", nameUrdu: "الفلق", nameEnglish: "Al-Falaq", englishMeaning: "The Daybreak", revelationType: "Makki", ayahCount: 5, para: 30, pdfPath: "/pdfs/surah_113.pdf", descriptionUrdu: "مخلوق کے شر، اندھیرے اور حاسدین کے شر سے صبح کے رب کی پناہ۔" },
  { id: 114, nameArabic: "الناس", nameUrdu: "الناس", nameEnglish: "An-Nas", englishMeaning: "Mankind", revelationType: "Makki", ayahCount: 6, para: 30, pdfPath: "/pdfs/surah_114.pdf", descriptionUrdu: "وسوسہ ڈالنے والے خناس کے شر سے انسانوں کے بادشاہ و معبود کی پناہ۔" }
];

export const PARAS_DATA = [
  { id: 1, nameArabic: "آلم", nameUrdu: "الم (پارہ 1)", startSurah: "الفاتحة", endSurah: "البقرة (141)" },
  { id: 2, nameArabic: "سَيَقُولُ", nameUrdu: "سیقول (پارہ 2)", startSurah: "البقرة (142)", endSurah: "البقرة (252)" },
  { id: 3, nameArabic: "تِلْكَ الرُّسُلُ", nameUrdu: "تلک الرسل (پارہ 3)", startSurah: "البقرة (253)", endSurah: "آل عمران (92)" },
  { id: 4, nameArabic: "لَنْ تَنَالُوا", nameUrdu: "لن تنالوا (پارہ 4)", startSurah: "آل عمران (93)", endSurah: "النساء (23)" },
  { id: 5, nameArabic: "وَالْمُحْصَنَاتُ", nameUrdu: "والمحصنت (پارہ 5)", startSurah: "النساء (24)", endSurah: "النساء (147)" },
  { id: 6, nameArabic: "لَا يُحِبُّ اللَّهُ", nameUrdu: "لا یحب اللہ (پارہ 6)", startSurah: "النساء (148)", endSurah: "المائدة (81)" },
  { id: 7, nameArabic: "وَإِذَا سَمِعُوا", nameUrdu: "واذا سمعوا (پارہ 7)", startSurah: "المائدة (82)", endSurah: "الأنعام (110)" },
  { id: 8, nameArabic: "وَلَوْ أَنَّنَا", nameUrdu: "ولو اننا (پارہ 8)", startSurah: "الأنعام (111)", endSurah: "الأعراف (87)" },
  { id: 9, nameArabic: "قَالَ الْمَلَأُ", nameUrdu: "قال الملا (پارہ 9)", startSurah: "الأعراف (88)", endSurah: "الأنفال (40)" },
  { id: 10, nameArabic: "وَاعْلَمُوا", nameUrdu: "واعلموا (پارہ 10)", startSurah: "الأنفال (41)", endSurah: "التوبة (92)" },
  { id: 11, nameArabic: "يَعْتَذِرُونَ", nameUrdu: "یعتذرون (پارہ 11)", startSurah: "التوبة (93)", endSurah: "هود (5)" },
  { id: 12, nameArabic: "وَمَا مِنْ دَابَّةٍ", nameUrdu: "وما من دابۃ (پارہ 12)", startSurah: "هود (6)", endSurah: "يوسف (52)" },
  { id: 13, nameArabic: "وَمَا أُبَرِّئُ", nameUrdu: "وما ابری (پارہ 13)", startSurah: "يوسف (53)", endSurah: "إبراهيم (52)" },
  { id: 14, nameArabic: "رُبَمَا", nameUrdu: "ربما (پارہ 14)", startSurah: "الحجر (1)", endSurah: "النحل (128)" },
  { id: 15, nameArabic: "سُبْحَانَ الَّذِي", nameUrdu: "سبحن الذی (پارہ 15)", startSurah: "الإسراء (1)", endSurah: "الكهف (74)" },
  { id: 16, nameArabic: "قَالَ أَلَمْ", nameUrdu: "قال الم (پارہ 16)", startSurah: "الكهف (75)", endSurah: "طه (135)" },
  { id: 17, nameArabic: "اقْتَرَبَ لِلنَّاسِ", nameUrdu: "اقترب للناس (پارہ 17)", startSurah: "الأنبياء (1)", endSurah: "الحج (78)" },
  { id: 18, nameArabic: "قَدْ أَفْلَحَ", nameUrdu: "قد افلح (پارہ 18)", startSurah: "المؤمنون (1)", endSurah: "الفرقان (20)" },
  { id: 19, nameArabic: "وَقَالَ الَّذِينَ", nameUrdu: "وقال الذین (پارہ 19)", startSurah: "الفرقان (21)", endSurah: "النمل (55)" },
  { id: 20, nameArabic: "أَمَّنْ خَلَقَ", nameUrdu: "امن خلق (پارہ 20)", startSurah: "النمل (56)", endSurah: "العنكبوت (45)" },
  { id: 21, nameArabic: "اتْلُ مَا أُوحِيَ", nameUrdu: "اتل ما اوحی (پارہ 21)", startSurah: "العنكبوت (46)", endSurah: "الأحزاب (30)" },
  { id: 22, nameArabic: "وَمَنْ يَقْنُتْ", nameUrdu: "ومن یقنت (پارہ 22)", startSurah: "الأحزاب (31)", endSurah: "يس (27)" },
  { id: 23, nameArabic: "وَمَا لِيَ", nameUrdu: "وما لی (پارہ 23)", startSurah: "يس (28)", endSurah: "الزمر (31)" },
  { id: 24, nameArabic: "فَمَنْ أَظْلَمُ", nameUrdu: "فمن اظلم (پارہ 24)", startSurah: "الزمر (32)", endSurah: "فصلت (46)" },
  { id: 25, nameArabic: "إِلَيْهِ يُرَدُّ", nameUrdu: "الیہ یرد (پارہ 25)", startSurah: "فصلت (47)", endSurah: "الجاثية (37)" },
  { id: 26, nameArabic: "حم", nameUrdu: "حم (پارہ 26)", startSurah: "الأحقاف (1)", endSurah: "الذاريات (30)" },
  { id: 27, nameArabic: "قَالَ فَمَا خَطْبُكُمْ", nameUrdu: "قال فما خطبکم (پارہ 27)", startSurah: "الذاريات (31)", endSurah: "الحديد (29)" },
  { id: 28, nameArabic: "قَدْ سَمِعَ اللَّهُ", nameUrdu: "قد سمع اللہ (پارہ 28)", startSurah: "المجادلة (1)", endSurah: "التحريم (12)" },
  { id: 29, nameArabic: "تَبَارَكَ الَّذِي", nameUrdu: "تبارک الذی (پارہ 29)", startSurah: "الملك (1)", endSurah: "المرسلات (50)" },
  { id: 30, nameArabic: "عَمَّ يَتَسَاءَلُونَ", nameUrdu: "عم یتساءلون (پارہ 30)", startSurah: "النبأ (1)", endSurah: "الناس (6)" }
];

export const SAMPLE_SURAH_VERSES = {
  1: {
    surahId: 1,
    nameArabic: "الفاتحة",
    nameUrdu: "سورۃ الفاتحہ",
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    verses: [
      {
        number: 1,
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        urduTarjuma: "تعریف اللہ ہی کے لیے ہے جو تمام کائنات کا پروردگار ہے۔",
        maududiNote: "حمد کا لفظ شکر اور تعریف دونوں معنوں کو حاوی ہے۔ رب کا مطلب صرف مالک ہی نہیں بلکہ پرورش کرنے والا، دیکھ بھال کرنے والا اور کفالت کرنے والا بھی ہے۔"
      },
      {
        number: 2,
        arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
        urduTarjuma: "بہت مہربان اور نہایت رحم فرمانے والا ہے۔",
        maududiNote: "الرحمن وہ ذات ہے جس کی رحمت بے اندازہ اور لامحدود ہے اور الرحیم وہ ذات ہے جس کی مہربانی دائم و قائم ہے۔"
      },
      {
        number: 3,
        arabic: "مَالِكِ يَوْمِ الدِّينِ",
        urduTarjuma: "روز جزا کا مالک ہے۔",
        maududiNote: "یوم الدین یعنی بدلے کا دن۔ اس دن انسان کو اپنے اعمال کی جواب دہی کرنی ہوگی اور پورا پورا انصاف ہوگا۔"
      },
      {
        number: 4,
        arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        urduTarjuma: "ہم تیری ہی بندگی کرتے ہیں اور تجھی سے مدد مانگتے ہیں۔",
        maududiNote: "عبادت میں اطاعت، عاجزی اور محبت تینوں شامل ہیں۔ مدد کی طلب صرف اسی ذات سے جائز ہے جو کائنات کے نظام پر کامل اختیار رکھتی ہے۔"
      },
      {
        number: 5,
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        urduTarjuma: "ہمیں سیدھا راستہ دکھا۔",
        maududiNote: "صراط مستقیم وہ سیدھی اور سیدھ پر قائم راہِ زندگی ہے جس پر چل کر انسان اللہ کی رضا اور حقیقی کامیابی حاصل کرتا ہے۔"
      },
      {
        number: 6,
        arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
        urduTarjuma: "ان لوگوں کا راستہ جن پر تو نے انعام فرمایا۔",
        maududiNote: "منعم علیہ سے مراد انبیاء، صدیقین، شہداء اور صالحین کا طبقہ ہے۔"
      },
      {
        number: 7,
        arabic: "غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        urduTarjuma: "نہ ان کا راستہ جن پر غضب ہوا اور نہ گمراہوں کا۔",
        maududiNote: "مغضوب علیہم وہ ہیں جنہوں نے علم کے باوجود سرکشی کی اور ضالین وہ ہیں جو جہالت کی وجہ سے بھٹک گئے۔"
      }
    ]
  },
  112: {
    surahId: 112,
    nameArabic: "الإخلاص",
    nameUrdu: "سورۃ الاخلاص",
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    verses: [
      {
        number: 1,
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        urduTarjuma: "کہو: وہ اللہ ایک ہے،",
        maududiNote: "اللہ احد کا مطلب ہے کہ وہ اپنی ذات، صفات اور اختیارات میں یگانہ اور بے مثل ہے۔ اس میں شرکت کا کوئی امکان نہیں۔"
      },
      {
        number: 2,
        arabic: "اللَّهُ الصَّمَدُ",
        urduTarjuma: "اللہ بے نیاز ہے (اور سب اس کے محتاج ہیں)۔",
        maududiNote: "صمد وہ عالی شان اور بے نیاز ہستی ہے جس پر سب کا انحصار ہو اور جو کسی کا محتاج نہ ہو۔"
      },
      {
        number: 3,
        arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        urduTarjuma: "نہ اس کی کوئی اولاد ہے اور نہ وہ کسی کی اولاد ہے،",
        maududiNote: "شرک کے بنیادی تصورات کی نفی کی گئی ہے۔ نہ اس کا کوئی باپ ہے اور نہ کوئی بیٹا۔"
      },
      {
        number: 4,
        arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        urduTarjuma: "اور کوئی اس کا ہم سر نہیں ہے۔",
        maududiNote: "کائنات کی کوئی مخلوق اللہ تعالی کی برابری یا ہم سری کا دعویٰ نہیں کر سکتی۔"
      }
    ]
  },
  113: {
    surahId: 113,
    nameArabic: "الفلق",
    nameUrdu: "سورۃ الفلق",
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    verses: [
      {
        number: 1,
        arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
        urduTarjuma: "کہو: میں پناہ مانگتا ہوں صبح کے رب کی،",
        maududiNote: "فلق کا مطلب ہے صبح کا پھوٹنا یا تاریکی کو چاک کر کے روشنی کا نمو پذیر ہونا۔"
      },
      {
        number: 2,
        arabic: "مِن شَرِّ مَا خَلَقَ",
        urduTarjuma: "ہر اس چیز کے شر سے جو اس نے پیدا کی ہے،",
        maududiNote: "کائنات کی تمام مخلوقات کے ظاہری و باطنی شر سے تحفظ کی التجا۔"
      },
      {
        number: 3,
        arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        urduTarjuma: "اور رات کی تاریکی کے شر سے جب کہ وہ چھا جائے،",
        maududiNote: "رات کی تاریکی بدروحوں، برے ارادوں اور چھپے ہوئے خطرات کی آماجگاہ بنتی ہے۔"
      },
      {
        number: 4,
        arabic: "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
        urduTarjuma: "اور گرہوں میں پھونکنے والیوں (جادوگروں) کے شر سے،",
        maududiNote: "جادو اور حسدانہ اثرات سے اللہ کی پناہ طلب کرنا۔"
      },
      {
        number: 5,
        arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        urduTarjuma: "اور حسد کرنے والے کے شر سے جب کہ وہ حسد کرے۔",
        maududiNote: "حسد ایک زہریلا جذباتی شر ہے جو حاسد کو بربادی اور شریر کارروائیوں پر اکساتا ہے۔"
      }
    ]
  },
  114: {
    surahId: 114,
    nameArabic: "الناس",
    nameUrdu: "سورۃ الناس",
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    verses: [
      {
        number: 1,
        arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        urduTarjuma: "کہو: میں پناہ مانگتا ہوں انسانوں کے پروردگار کی،",
        maududiNote: "انسان کی حفاظت اور پناہ کے لیے رب الناس کو پکارنا۔"
      },
      {
        number: 2,
        arabic: "مَلِكِ النَّاسِ",
        urduTarjuma: "انسانوں کے بادشاہ کی،",
        maududiNote: "حقیقی حاکم اور بادشاہ صرف اللہ تعالیٰ ہے۔"
      },
      {
        number: 3,
        arabic: "إِلَٰهِ النَّاسِ",
        urduTarjuma: "انسانوں کے حقیقی معبود کی،",
        maududiNote: "عبادت اور بندگی کا واحد مستحق صرف وہی رب ہے۔"
      },
      {
        number: 4,
        arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
        urduTarjuma: "اس وسوسہ ڈالنے والے کے شر سے جو بار بار پلٹ کر آتا ہے،",
        maududiNote: "خناس وہ شیطان ہے جو موقع ملتے ہی وسوسہ ڈالتا ہے اور اللہ کی یاد پر پیچھے ہٹ جاتا ہے۔"
      },
      {
        number: 5,
        arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
        urduTarjuma: "جو لوگوں کے سینوں میں وسوسے ڈالتا ہے،",
        maududiNote: "شکوک و شبہات، برے خیالات اور نیکی سے روکنے والی باطنی تحریک۔"
      },
      {
        number: 6,
        arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
        urduTarjuma: "خواہ وہ جنوں میں سے ہو یا انسانوں میں سے۔",
        maududiNote: "وسوسہ انداز خواہ نادیدہ شیاطینِ جن ہوں یا ناصح مشفق کے روپ میں انسان، سب سے پناہ مانگنا ضروری ہے۔"
      }
    ]
  }
};

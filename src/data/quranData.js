// Fehm-ul-Quran Complete Quran Dataset & Metadata
// Translation: Maulana Abul A'la Maududi (Tafheem-ul-Quran - تفہیم القرآن)

export const SURAHS_DATA = [
  { id: 1, nameArabic: "الفاتحة", nameUrdu: "الفاتحہ", nameEnglish: "Al-Fatihah", englishMeaning: "The Opening", revelationType: "Makki", ayahCount: 7, para: 1, pdfPath: "/surah/001_Surah_Al-Fatiha.pdf", hasParts: false, descriptionUrdu: "قرآن مجید کی پہلی سورۃ جو دعا اور التجا کا خلاصہ ہے۔ مولانا مودودی کے نزدیک یہ قرآن کا دیباچہ ہے۔" },
  { id: 2, nameArabic: "البقرة", nameUrdu: "البقرہ", nameEnglish: "Al-Baqarah", englishMeaning: "The Cow", revelationType: "Madani", ayahCount: 286, para: 1, pdfPath: "/surah/002_Surah_Al-Baqra_Part1.pdf", hasParts: true, parts: [
    { part: 1, pdfPath: "/surah/002_Surah_Al-Baqra_Part1.pdf", labelEnglish: "Part 1", labelUrdu: "پہلا حصہ" },
    { part: 2, pdfPath: "/surah/002_Surah_Al-Baqra_Part2.pdf", labelEnglish: "Part 2", labelUrdu: "دوسرا حصہ" }
  ], descriptionUrdu: "قرآن کی سب سے بڑی سورۃ جس میں اسلامی شریعت، عبادات اور اجتماعی زندگی کے بنیادی احکام بیان کیے گئے ہیں۔" },
  { id: 3, nameArabic: "آل عمران", nameUrdu: "آل عمران", nameEnglish: "Ali 'Imran", englishMeaning: "Family of Imran", revelationType: "Madani", ayahCount: 200, para: 3, pdfPath: "/surah/003_Surah_Al-Imran_Part1.pdf", hasParts: true, parts: [
    { part: 1, pdfPath: "/surah/003_Surah_Al-Imran_Part1.pdf", labelEnglish: "Part 1", labelUrdu: "پہلا حصہ" },
    { part: 2, pdfPath: "/surah/003_Surah_Al-Imran_Part2.pdf", labelEnglish: "Part 2", labelUrdu: "دوسرا حصہ" }
  ], descriptionUrdu: "عقیدہ توحید، غزوہ احد کے دروس اور عیسائیت کے غلط عقائد کے رد پر جامع بحث۔" },
  { id: 4, nameArabic: "النساء", nameUrdu: "النساء", nameEnglish: "An-Nisa", englishMeaning: "The Women", revelationType: "Madani", ayahCount: 176, para: 4, pdfPath: "/surah/004_Surah_An-Nisa_Part1.pdf", hasParts: true, parts: [
    { part: 1, pdfPath: "/surah/004_Surah_An-Nisa_Part1.pdf", labelEnglish: "Part 1", labelUrdu: "پہلا حصہ" },
    { part: 2, pdfPath: "/surah/004_Surah_An-Nisa_Part2.pdf", labelEnglish: "Part 2", labelUrdu: "دوسرا حصہ" }
  ], descriptionUrdu: "خاندانی حقوق، عورتوں، یتیموں، وراثت کے قوانین اور معاشرتی اصلاح کے تفصیلی احکام۔" },
  { id: 5, nameArabic: "المائدة", nameUrdu: "المائدہ", nameEnglish: "Al-Ma'idah", englishMeaning: "The Table Spread", revelationType: "Madani", ayahCount: 120, para: 6, pdfPath: "/surah/005_Surah_Al-Maida_Part1.pdf", hasParts: true, parts: [
    { part: 1, pdfPath: "/surah/005_Surah_Al-Maida_Part1.pdf", labelEnglish: "Part 1", labelUrdu: "پہلا حصہ" },
    { part: 2, pdfPath: "/surah/005_Surah_Al-Maida_Part2.pdf", labelEnglish: "Part 2", labelUrdu: "دوسرا حصہ" }
  ], descriptionUrdu: "حلال و حرام کے احکام، عہد و پیمان کی پاسداری اور تکمیل دین کا عظیم الشان اعلان۔" },
  { id: 6, nameArabic: "الأنعام", nameUrdu: "الأنعام", nameEnglish: "Al-An'am", englishMeaning: "The Cattle", revelationType: "Makki", ayahCount: 165, para: 7, pdfPath: "/surah/006_Surah_Al-Anaam.pdf", hasParts: false, descriptionUrdu: "توحید، رسالت اور آخرت کا زبردست عقلی و استدلالی اثبات۔" },
  { id: 7, nameArabic: "الأعراف", nameUrdu: "الأعراف", nameEnglish: "Al-A'raf", englishMeaning: "The Heights", revelationType: "Makki", ayahCount: 206, para: 8, pdfPath: "/surah/007_Surah_Al-Araf.pdf", hasParts: false, descriptionUrdu: "انبیاء علیہم السلام کی تاریخ، قوموں کا عروج و زوال اور میدان حشر کا منظر۔" },
  { id: 8, nameArabic: "الأنفال", nameUrdu: "الأنفال", nameEnglish: "Al-Anfal", englishMeaning: "The Spoils of War", revelationType: "Madani", ayahCount: 75, para: 9, pdfPath: "/surah/008_Surah_Al-Anfal.pdf", hasParts: false, descriptionUrdu: "غزوہ بدر کی فتح اور اسلامی ریاست کے جنگی و معاشی احکام۔" },
  { id: 9, nameArabic: "التوبة", nameUrdu: "التوبہ", nameEnglish: "At-Tawbah", englishMeaning: "The Repentance", revelationType: "Madani", ayahCount: 129, para: 10, pdfPath: "/surah/009_Surah_At-Tauba.pdf", hasParts: false, descriptionUrdu: "منافقین کا پردہ چاک اور مشرکین سے بیزاری کا باقاعدہ اعلان۔" },
  { id: 10, nameArabic: "يونس", nameUrdu: "یونس", nameEnglish: "Yunus", englishMeaning: "Jonah", revelationType: "Makki", ayahCount: 109, para: 11, pdfPath: "/surah/010_Surah_Yunus.pdf", hasParts: false, descriptionUrdu: "اللہ کی قدرت کے دلائل اور حضرت یونس علیہ السلام کی قوم کا تذکرہ۔" },
  { id: 11, nameArabic: "هود", nameUrdu: "ہود", nameEnglish: "Hud", englishMeaning: "Hud", revelationType: "Makki", ayahCount: 123, para: 11, pdfPath: "/surah/011_Surah_Hud.pdf", hasParts: false, descriptionUrdu: "انبیاء کی دعوت اور سرکش قوموں پر آنے والے عذاب کا احوال۔" },
  { id: 12, nameArabic: "يوسف", nameUrdu: "یوسف", nameEnglish: "Yusuf", englishMeaning: "Joseph", revelationType: "Makki", ayahCount: 111, para: 12, pdfPath: "/surah/012_Surah_Yusuf.pdf", hasParts: false, descriptionUrdu: "احسن القصص - حضرت یوسف علیہ السلام کا سچا اور عبرت انگیز واقعہ۔" },
  { id: 13, nameArabic: "الرعد", nameUrdu: "الرعد", nameEnglish: "Ar-Ra'd", englishMeaning: "The Thunder", revelationType: "Madani", ayahCount: 43, para: 13, pdfPath: "/surah/013_Surah_Al-Raad.pdf", hasParts: false, descriptionUrdu: "کائنات کی تسخیر اور رعد و کڑک کی تسبیح سے توحید کا ثبوت۔" },
  { id: 14, nameArabic: "إبراهيم", nameUrdu: "ابراہیم", nameEnglish: "Ibrahim", englishMeaning: "Abraham", revelationType: "Makki", ayahCount: 52, para: 13, pdfPath: "/surah/014_Surah%20Al%20Ibrahim.pdf", hasParts: false, descriptionUrdu: "حضرت ابراہیم علیہ السلام کی دعا اور شکرگزاری کا درس۔" },
  { id: 15, nameArabic: "الحجر", nameUrdu: "الحجر", nameEnglish: "Al-Hijr", englishMeaning: "The Rocky Tract", revelationType: "Makki", ayahCount: 99, para: 14, pdfPath: "/surah/015_Surah%20Al%20Hijr.pdf", hasParts: false, descriptionUrdu: "قرآن مجید کی حفاظت کا خدائی وعدہ اور حجر کی قوم کا تذکرہ۔" },
  { id: 16, nameArabic: "النحل", nameUrdu: "النحل", nameEnglish: "An-Nahl", englishMeaning: "The Bee", revelationType: "Makki", ayahCount: 128, para: 14, pdfPath: "/surah/016_Surah%20An%20Nahl.pdf", hasParts: false, descriptionUrdu: "نعمتوں کی سورۃ - شہد کی مکھی کی ساخت اور اللہ کے احسانات۔" },
  { id: 17, nameArabic: "الإسراء", nameUrdu: "بنی اسرائیل / الإسراء", nameEnglish: "Al-Isra", englishMeaning: "The Night Journey", revelationType: "Makki", ayahCount: 111, para: 15, pdfPath: "/surah/017_Surah%20Al%20Bani%20Israel.pdf", hasParts: false, descriptionUrdu: "واقعہ معراج اور فرد و معاشرہ کے لیے 14 اخلاقی اصول۔" },
  { id: 18, nameArabic: "الكهف", nameUrdu: "الکہف", nameEnglish: "Al-Kahf", englishMeaning: "The Cave", revelationType: "Makki", ayahCount: 110, para: 15, pdfPath: "/surah/018_Surah_Al-Kahaf.pdf", hasParts: false, descriptionUrdu: "اصحاب کہف، حضرت موسیٰ و خضر، اور ذوالقرنین کے عبرت ناک واقعات۔" },
  { id: 19, nameArabic: "مريم", nameUrdu: "مریم", nameEnglish: "Maryam", englishMeaning: "Mary", revelationType: "Makki", ayahCount: 98, para: 16, pdfPath: "/surah/019_Surah_Al-Maryam.pdf", hasParts: false, descriptionUrdu: "حضرت مریم اور حضرت عیسیٰ علیہ السلام کی ولادت کا معجزہ۔" },
  { id: 20, nameArabic: "طه", nameUrdu: "طٰہٰ", nameEnglish: "Taha", englishMeaning: "Taha", revelationType: "Makki", ayahCount: 135, para: 16, pdfPath: "/surah/020_Surah_Al-Taha.pdf", hasParts: false, descriptionUrdu: "حضرت موسیٰ علیہ السلام اور فرعون کی تفصیلی گفتگو۔" },
  { id: 21, nameArabic: "الأنبياء", nameUrdu: "الانبیاء", nameEnglish: "Al-Anbiya", englishMeaning: "The Prophets", revelationType: "Makki", ayahCount: 112, para: 17, pdfPath: "/surah/021_Surah_Al-Anbia.pdf", hasParts: false, descriptionUrdu: "بیک وقت کئی جلیل القدر انبیاء کی جدوجہد اور دعاؤں کا تذکرہ۔" },
  { id: 22, nameArabic: "الحج", nameUrdu: "الحج", nameEnglish: "Al-Hajj", englishMeaning: "The Pilgrimage", revelationType: "Madani", ayahCount: 78, para: 17, pdfPath: "/surah/022_Surah_Al-Hajj.pdf", hasParts: false, descriptionUrdu: "فریضہ حج کی تاریخ اور دفاع اسلام کے لیے پہلی بار قتال کی اجازت۔" },
  { id: 23, nameArabic: "المؤمنون", nameUrdu: "المؤمنون", nameEnglish: "Al-Mu'minun", englishMeaning: "The Believers", revelationType: "Makki", ayahCount: 118, para: 18, pdfPath: "/surah/023_Surah_Al-Mominoon.pdf", hasParts: false, descriptionUrdu: "سچے مومنوں کی اوصاف حمیدہ اور کامیابی کا معیار۔" },
  { id: 24, nameArabic: "النور", nameUrdu: "النور", nameEnglish: "An-Nur", englishMeaning: "The Light", revelationType: "Madani", ayahCount: 64, para: 18, pdfPath: "/surah/024_Surah_Al-Noor.pdf", hasParts: false, descriptionUrdu: "معاشرتی پاکیزگی، حجاب اور واقعہ افک کا واقعہ۔" },
  { id: 25, nameArabic: "الفرقان", nameUrdu: "الفرقان", nameEnglish: "Al-Furqan", englishMeaning: "The Criterion", revelationType: "Makki", ayahCount: 77, para: 18, pdfPath: "/surah/025_Surah_Al-Furquan.pdf", hasParts: false, descriptionUrdu: "حق اور باطل میں فرق کرنے والی کتاب اور عباد الرحمن کی صفات۔" },
  { id: 26, nameArabic: "الشعراء", nameUrdu: "الشعراء", nameEnglish: "Ash-Shu'ara", englishMeaning: "The Poets", revelationType: "Makki", ayahCount: 227, para: 19, pdfPath: "/surah/026_Surah_Al-Shuara.pdf", hasParts: false, descriptionUrdu: "حق کی دعوت پر شاعرانہ بیانیے کے مقابلے میں ربانی کلام کی برتری۔" },
  { id: 27, nameArabic: "النمل", nameUrdu: "النمل", nameEnglish: "An-Naml", englishMeaning: "The Ant", revelationType: "Makki", ayahCount: 93, para: 19, pdfPath: "/surah/027_Surah_Al-Naml.pdf", hasParts: false, descriptionUrdu: "حضرت سلیمان علیہ السلام، ملکہ سبا اور نمل (چیونٹی) کا تذکرہ۔" },
  { id: 28, nameArabic: "القصص", nameUrdu: "القصص", nameEnglish: "Al-Qasas", englishMeaning: "The Stories", revelationType: "Makki", ayahCount: 88, para: 20, pdfPath: "/surah/028_Surah_Al-Qasas.pdf", hasParts: false, descriptionUrdu: "حضرت موسیٰ علیہ السلام کے بچپن سے لے کر نبوت تک کے عبرت ناک احوال۔" },
  { id: 29, nameArabic: "العنكبوت", nameUrdu: "العنکبوت", nameEnglish: "Al-'Ankabut", englishMeaning: "The Spider", revelationType: "Makki", ayahCount: 69, para: 20, pdfPath: "/surah/029_Surah_Al-Ankabut.pdf", hasParts: false, descriptionUrdu: "باطل کا سہارا مکڑی کے جالے کی طرح کمزور ہے۔ آزمائش میں ثابت قدمی۔" },
  { id: 30, nameArabic: "الروم", nameUrdu: "الروم", nameEnglish: "Ar-Rum", englishMeaning: "The Romans", revelationType: "Makki", ayahCount: 60, para: 21, pdfPath: "/surah/030_Surah_Al-Rum.pdf", hasParts: false, descriptionUrdu: "روم و فارس کی جنگ کی عظیم الشان قرآنی پیشگوئی جو من وعن سچی ہوئی۔" },
  { id: 31, nameArabic: "لقمان", nameUrdu: "لقمان", nameEnglish: "Luqman", englishMeaning: "Luqman", revelationType: "Makki", ayahCount: 34, para: 21, pdfPath: "/surah/031_Surah_Luqman.pdf", hasParts: false, descriptionUrdu: "حکیم لقمان کی اپنے بیٹے کو جامع اور بصیرت افروز نصیحتیں۔" },
  { id: 32, nameArabic: "السجدة", nameUrdu: "السجدہ", nameEnglish: "As-Sajdah", englishMeaning: "The Prostration", revelationType: "Makki", ayahCount: 30, para: 21, pdfPath: "/surah/032_Surah_Al-Sajda.pdf", hasParts: false, descriptionUrdu: "انسان کی تخلیق اور روز محشر خدا کے سامنے عاجزی اور سجدہ ریزی۔" },
  { id: 33, nameArabic: "الأحزاب", nameUrdu: "الاحزاب", nameEnglish: "Al-Ahzab", englishMeaning: "The Combined Forces", revelationType: "Madani", ayahCount: 73, para: 21, pdfPath: "/surah/033_Surah_Al-Ahzab.pdf", hasParts: false, descriptionUrdu: "غزوہ خندق (احزاب)، امہات المؤمنین کے احکام اور ختم نبوت کا مقام۔" },
  { id: 34, nameArabic: "سبأ", nameUrdu: "سبأ", nameEnglish: "Saba", englishMeaning: "Sheba", revelationType: "Makki", ayahCount: 54, para: 22, pdfPath: "/surah/034_Surah_Saba.pdf", hasParts: false, descriptionUrdu: "قوم سبأ کی خوشحالی اور ان کی ناشکری پر ملنے والے عذاب کی داستان۔" },
  { id: 35, nameArabic: "فاطر", nameUrdu: "فاطر", nameEnglish: "Fatir", englishMeaning: "Originator", revelationType: "Makki", ayahCount: 45, para: 22, pdfPath: "/surah/035_Surah_Fatir.pdf", hasParts: false, descriptionUrdu: "کائنات کا پیدا کرنے والا اللہ اور فرشتوں کی تخلیق۔" },
  { id: 36, nameArabic: "يس", nameUrdu: "یسين", nameEnglish: "Ya-Sin", englishMeaning: "Ya Sin", revelationType: "Makki", ayahCount: 83, para: 22, pdfPath: "/surah/036_Surah_Yasin.pdf", hasParts: false, descriptionUrdu: "قلب القرآن (قرآن کا دل) - توحید، رسالت اور قیامت کا مؤثر ترین بیان۔" },
  { id: 37, nameArabic: "الصافات", nameUrdu: "الصافات", nameEnglish: "As-Saffat", englishMeaning: "Those who set the Ranks", revelationType: "Makki", ayahCount: 182, para: 23, pdfPath: "/surah/037_Surah_Al-Saffat.pdf", hasParts: false, descriptionUrdu: "صف بستہ فرشتوں کی قسم اور انبیاء کی قربانیوں کا تذکرہ۔" },
  { id: 38, nameArabic: "ص", nameUrdu: "ص", nameEnglish: "Sad", englishMeaning: "The Letter Sad", revelationType: "Makki", ayahCount: 88, para: 23, pdfPath: "/surah/038_Surah_Al-Sad.pdf", hasParts: false, descriptionUrdu: "حضرت داؤد، سلیمان اور ایوب علیہم السلام کے صابرانہ احوال۔" },
  { id: 39, nameArabic: "الزمر", nameUrdu: "الزمر", nameEnglish: "Az-Zumar", englishMeaning: "The Troops", revelationType: "Makki", ayahCount: 75, para: 23, pdfPath: "/surah/039_Surah_Al-Zumar.pdf", hasParts: false, descriptionUrdu: "خالص بندگی کی دعوت اور قیامت کے دن گروہ در گروہ تقسیم۔" },
  { id: 40, nameArabic: "غافر", nameUrdu: "غافر / المؤمن", nameEnglish: "Ghafir", englishMeaning: "The Forgiver", revelationType: "Makki", ayahCount: 85, para: 24, pdfPath: "/surah/040_Surah_Al-Momin.pdf", hasParts: false, descriptionUrdu: "گناہوں کا بخشنے والا اور آل فرعون کے مومن کی جرأت مندانہ تقریر۔" },
  { id: 41, nameArabic: "فصلت", nameUrdu: "فصلت", nameEnglish: "Fussilat", englishMeaning: "Explained in Detail", revelationType: "Makki", ayahCount: 54, para: 24, pdfPath: "/surah/041_Surah%20Hameem%20Al-Sajda.pdf", hasParts: false, descriptionUrdu: "واضح اور مفصل کلام ہدایت، اور استقامت اختیار کرنے والوں کو خوشخبری۔" },
  { id: 42, nameArabic: "الشورى", nameUrdu: "الشورى", nameEnglish: "Ash-Shura", englishMeaning: "The Consultation", revelationType: "Makki", ayahCount: 53, para: 25, pdfPath: "/surah/042_Surah_Al-Shura.pdf", hasParts: false, descriptionUrdu: "باہمی مشورے کا اصول اور وحی الٰہی کی حقیقت۔" },
  { id: 43, nameArabic: "الزخرف", nameUrdu: "الزخرف", nameEnglish: "Az-Zukhruf", englishMeaning: "The Gold Adornments", revelationType: "Makki", ayahCount: 89, para: 25, pdfPath: "/surah/043_Surah_Al-Zukhruf.pdf", hasParts: false, descriptionUrdu: "دنیا کی ظاہری چمک دمک کی بے ثباتی۔" },
  { id: 44, nameArabic: "الدخان", nameUrdu: "الدخان", nameEnglish: "Ad-Dukhan", englishMeaning: "The Smoke", revelationType: "Makki", ayahCount: 59, para: 25, pdfPath: "/surah/044_Surah_Al-Dokhan.pdf", hasParts: false, descriptionUrdu: "شب قدر میں قرآن کا نزول اور قحط کا دھواں۔" },
  { id: 45, nameArabic: "الجاثية", nameUrdu: "الجاثیہ", nameEnglish: "Al-Jathiyah", englishMeaning: "The Crouching", revelationType: "Makki", ayahCount: 37, para: 25, pdfPath: "/surah/045_Surah_Al-Jathiah.pdf", hasParts: false, descriptionUrdu: "قیامت کے دن ہر امت کا گھٹنوں کے بل گرنا۔" },
  { id: 46, nameArabic: "الأحقاف", nameUrdu: "الاحقاف", nameEnglish: "Al-Ahqaf", englishMeaning: "The Wind-curved Sandhills", revelationType: "Makki", ayahCount: 35, para: 26, pdfPath: "/surah/046_Surah_Al-Ahqaf.pdf", hasParts: false, descriptionUrdu: "قوم عاد کے مساکن احقاف اور والدین کے ساتھ حسن سلوک کی تاکید۔" },
  { id: 47, nameArabic: "محمد", nameUrdu: "محمد", nameEnglish: "Muhammad", englishMeaning: "Muhammad", revelationType: "Madani", ayahCount: 38, para: 26, pdfPath: "/surah/047_Surah_Mohammad.pdf", hasParts: false, descriptionUrdu: "نبی کریم ﷺ پر ایمان، جہاد اور منافقین کا کمزور رویہ۔" },
  { id: 48, nameArabic: "الفتح", nameUrdu: "الفتح", nameEnglish: "Al-Fath", englishMeaning: "The Victory", revelationType: "Madani", ayahCount: 29, para: 26, pdfPath: "/surah/048_Surah_Al-Fath.pdf", hasParts: false, descriptionUrdu: "صلح حدیبیہ کی صورت میں فتح مبین کی خوشخبری۔" },
  { id: 49, nameArabic: "الحجرات", nameUrdu: "الحجرات", nameEnglish: "Al-Hujurat", englishMeaning: "The Rooms", revelationType: "Madani", ayahCount: 18, para: 26, pdfPath: "/surah/049_Surah_Al-Hujurat.pdf", hasParts: false, descriptionUrdu: "اسلامی آداب، باہمی احترام، اور نسلی تفریق کا خاتمہ۔" },
  { id: 50, nameArabic: "ق", nameUrdu: "ق", nameEnglish: "Qaf", englishMeaning: "The Letter Qaf", revelationType: "Makki", ayahCount: 45, para: 26, pdfPath: "/surah/050_Surah_Qaf.pdf", hasParts: false, descriptionUrdu: "دوبارہ زندہ کیے جانے پر منکرین کے شبہات کا زبردست جواب۔" },
  { id: 51, nameArabic: "الذاريات", nameUrdu: "الذاریات", nameEnglish: "Adh-Dhariyat", englishMeaning: "The Winnowing Winds", revelationType: "Makki", ayahCount: 60, para: 26, pdfPath: "/surah/051_Surah_Al-Zariat.pdf", hasParts: false, descriptionUrdu: "انسان اور جنات کی تخلیق کا مقصد صرف اللہ کی عبادت ہے۔" },
  { id: 52, nameArabic: "الطور", nameUrdu: "الطور", nameEnglish: "At-Tur", englishMeaning: "The Mount", revelationType: "Makki", ayahCount: 49, para: 27, pdfPath: "/surah/052_Surah_Al-Tur.pdf", hasParts: false, descriptionUrdu: "طور سینا کی قسم اور متقین کے جنت کے انعامات۔" },
  { id: 53, nameArabic: "النجم", nameUrdu: "النجم", nameEnglish: "An-Najm", englishMeaning: "The Star", revelationType: "Makki", ayahCount: 62, para: 27, pdfPath: "/surah/053_Surah_Al-Najm.pdf", hasParts: false, descriptionUrdu: "نبی کریم ﷺ کا سفر معراج اور سدرۃ المنقہیٰ کا مشاہدہ۔" },
  { id: 54, nameArabic: "القمر", nameUrdu: "القمر", nameEnglish: "Al-Qamar", englishMeaning: "The Moon", revelationType: "Makki", ayahCount: 55, para: 27, pdfPath: "/surah/054_Surah_Al-Qamar.pdf", hasParts: false, descriptionUrdu: "شق القمر کا معجزہ اور قرآن کا نصحیت کے لیے آسان ہونا۔" },
  { id: 55, nameArabic: "الرحمن", nameUrdu: "الرحمن", nameEnglish: "Ar-Rahman", englishMeaning: "The Beneficent", revelationType: "Madani", ayahCount: 78, para: 27, pdfPath: "/surah/055_Surah%20Ar-Rahman.pdf", hasParts: false, descriptionUrdu: "عروس القرآن - فبأي آلاء ربكما تكذبان کا روح پرور ترانہ۔" },
  { id: 56, nameArabic: "الواقعة", nameUrdu: "الواقعہ", nameEnglish: "Al-Waqi'ah", englishMeaning: "The Inevitable", revelationType: "Makki", ayahCount: 96, para: 27, pdfPath: "/surah/056_Surah_Al-Waqiah.pdf", hasParts: false, descriptionUrdu: "قیامت کی برپا ہونے والی حقیقت اور لوگوں کے تین گروہ۔" },
  { id: 57, nameArabic: "الحديد", nameUrdu: "الحديد", nameEnglish: "Al-Hadid", englishMeaning: "The Iron", revelationType: "Madani", ayahCount: 29, para: 27, pdfPath: "/surah/057_Surah_Al-Hadid.pdf", hasParts: false, descriptionUrdu: "راہ خدا میں انفاق اور لوہے کی منافع و طاقت۔" },
  { id: 58, nameArabic: "المجادلة", nameUrdu: "المجادلہ", nameEnglish: "Al-Mujadila", englishMeaning: "The Pleading Woman", revelationType: "Madani", ayahCount: 22, para: 28, pdfPath: "/surah/058_Surah_Al-Mujadilah.pdf", hasParts: false, descriptionUrdu: "ظہار کا مسئلہ اور راز داری کی نجویٰ کے آداب۔" },
  { id: 59, nameArabic: "الحشر", nameUrdu: "الحشر", nameEnglish: "Al-Hashr", englishMeaning: "The Exile", revelationType: "Madani", ayahCount: 24, para: 28, pdfPath: "/surah/059_Surah_Al-Hashr.pdf", hasParts: false, descriptionUrdu: "بنو نضیر کی جلاوطنی اور اللہ کے اسمائے حسنیٰ۔" },
  { id: 60, nameArabic: "الممتحنة", nameUrdu: "الممتحنہ", nameEnglish: "Al-Mumtahanah", englishMeaning: "She that is to be examined", revelationType: "Madani", ayahCount: 13, para: 28, pdfPath: "/surah/060_Surah_Al-Mumtahinah.pdf", hasParts: false, descriptionUrdu: "کفار کے ساتھ تعلقات کی حدود اور ہجرت کر کے آنے والی خواتین کی آزمائش۔" },
  { id: 61, nameArabic: "الصف", nameUrdu: "الصف", nameEnglish: "As-Saff", englishMeaning: "The Ranks", revelationType: "Madani", ayahCount: 14, para: 28, pdfPath: "/surah/061_Surah_As-Saff.pdf", hasParts: false, descriptionUrdu: "صف بستہ جدوجہد اور حضرت عیسیٰ علیہ السلام کی احمد مجتبیٰ ﷺ کی خوشخبری۔" },
  { id: 62, nameArabic: "الجمعة", nameUrdu: "الجمعہ", nameEnglish: "Al-Jumu'ah", englishMeaning: "Friday", revelationType: "Madani", ayahCount: 11, para: 28, pdfPath: "/surah/062_Surah_Al-Jumah.pdf", hasParts: false, descriptionUrdu: "نماز جمعہ کی فرضیت اور بعثتِ محمدی ﷺ کا مقصد۔" },
  { id: 63, nameArabic: "المنافقون", nameUrdu: "المنافقون", nameEnglish: "Al-Munafiqun", englishMeaning: "The Hypocrites", revelationType: "Madani", ayahCount: 11, para: 28, pdfPath: "/surah/063_Surah_Al-Munafiqoon.pdf", hasParts: false, descriptionUrdu: "منافقوں کی چالیں اور ان کے دلی بغض کا انکشاف۔" },
  { id: 64, nameArabic: "التغابن", nameUrdu: "التغابن", nameEnglish: "At-Taghabun", englishMeaning: "Mutual Disillusion", revelationType: "Madani", ayahCount: 18, para: 28, pdfPath: "/surah/064_Surah_Al-Taghabun.pdf", hasParts: false, descriptionUrdu: "ہار اور جیت کے فیصلے کا واقعی دن (روز محشر)۔" },
  { id: 65, nameArabic: "الطلاق", nameUrdu: "الطلاق", nameEnglish: "At-Talaq", englishMeaning: "The Divorce", revelationType: "Madani", ayahCount: 12, para: 28, pdfPath: "/surah/065_Surah_Al-Talaq.pdf", hasParts: false, descriptionUrdu: "طلاق کی عدت اور خواتین کی نفقہ کے شرعی قوانین۔" },
  { id: 66, nameArabic: "التحريم", nameUrdu: "التحریم", nameEnglish: "At-Tahrim", englishMeaning: "The Prohibition", revelationType: "Madani", ayahCount: 12, para: 28, pdfPath: "/surah/066_Surah_At-Tahrim.pdf", hasParts: false, descriptionUrdu: "خانگی معاملات میں حلال و حرام کی حد اور تربیت کا پیغام۔" },
  { id: 67, nameArabic: "الملك", nameUrdu: "الملک", nameEnglish: "Al-Mulk", englishMeaning: "The Sovereignty", revelationType: "Makki", ayahCount: 30, para: 29, pdfPath: "/surah/067_Surah_Al-Mulk.pdf", hasParts: false, descriptionUrdu: "سورۃ تبارک الذی - عذاب قبر سے نجات کی سورۃ اور کائنات پر اللہ کا تسلط۔" },
  { id: 68, nameArabic: "القلم", nameUrdu: "القلم", nameEnglish: "Al-Qalam", englishMeaning: "The Pen", revelationType: "Makki", ayahCount: 52, para: 29, pdfPath: "/surah/068_Surah_Al-Qalam.pdf", hasParts: false, descriptionUrdu: "قلم اور لکھی جانے والی چیزوں کی قسم، نبی ﷺ کے اعلیٰ اخلاق کا گواہ۔" },
  { id: 69, nameArabic: "الحاقة", nameUrdu: "الحاقہ", nameEnglish: "Al-Haqqah", englishMeaning: "The Inevitable Reality", revelationType: "Makki", ayahCount: 52, para: 29, pdfPath: "/surah/069_Surah_Al-Haqqah.pdf", hasParts: false, descriptionUrdu: "بالکل سچی اور برپا ہونے والی قیامت۔" },
  { id: 70, nameArabic: "المعارج", nameUrdu: "المعارج", nameEnglish: "Al-Ma'arij", englishMeaning: "The Ascending Stairways", revelationType: "Makki", ayahCount: 44, para: 29, pdfPath: "/surah/070_Surah_Al-Maarij.pdf", hasParts: false, descriptionUrdu: "بلندیوں کے راستے اور انسان کی بے صبری کی کیفیت۔" },
  { id: 71, nameArabic: "نوح", nameUrdu: "نوح", nameEnglish: "Nuh", englishMeaning: "Noah", revelationType: "Makki", ayahCount: 28, para: 29, pdfPath: "/surah/071_Surah_Nuh.pdf", hasParts: false, descriptionUrdu: "حضرت نوح علیہ السلام کی 950 سالہ شب و روز کی دعوت۔" },
  { id: 72, nameArabic: "الجن", nameUrdu: "الجن", nameEnglish: "Al-Jinn", englishMeaning: "The Jinn", revelationType: "Makki", ayahCount: 28, para: 29, pdfPath: "/surah/072_Surah_Al-Jinn.pdf", hasParts: false, descriptionUrdu: "جنات کا قرآنی تلاوت سن کر ایمان لانا اور ان کا اعتراف۔" },
  { id: 73, nameArabic: "المزمل", nameUrdu: "المزمل", nameEnglish: "Al-Muzzammil", englishMeaning: "The Enshrouded One", revelationType: "Makki", ayahCount: 20, para: 29, pdfPath: "/surah/073_Surah_Al-Mozammil.pdf", hasParts: false, descriptionUrdu: "قیام اللیل (نماز تہجد) اور ترتیل کے ساتھ قرآن کی تلاوت۔" },
  { id: 74, nameArabic: "المدثر", nameUrdu: "المدثر", nameEnglish: "Al-Muddaththir", englishMeaning: "The Cloaked One", revelationType: "Makki", ayahCount: 56, para: 29, pdfPath: "/surah/074_Surah_Al-Mudaththir.pdf", hasParts: false, descriptionUrdu: "قم فأنذر - اٹھیے اور لوگوں کو ڈرائیے۔ تبلیغ کا ابتدائی حکم۔" },
  { id: 75, nameArabic: "القيامة", nameUrdu: "القیامۃ", nameEnglish: "Al-Qiyamah", englishMeaning: "The Resurrection", revelationType: "Makki", ayahCount: 40, para: 29, pdfPath: "/surah/075_Surah_Al-Qiyamah.pdf", hasParts: false, descriptionUrdu: "نفس لوامہ اور قیامت کے دن چہروں کی شادابی و مردنی۔" },
  { id: 76, nameArabic: "الإنسان", nameUrdu: "الانسان / دہر", nameEnglish: "Al-Insan", englishMeaning: "Man", revelationType: "Madani", ayahCount: 31, para: 29, pdfPath: "/surah/076_Surah_Al-Dahr.pdf", hasParts: false, descriptionUrdu: "انسان کی ابتدا اور ابرار کی جنت میں نعمتیں۔" },
  { id: 77, nameArabic: "المرسلات", nameUrdu: "المرسلات", nameEnglish: "Al-Mursalat", englishMeaning: "The Emissaries", revelationType: "Makki", ayahCount: 50, para: 29, pdfPath: "/surah/077_Surah_Al-Mursalat.pdf", hasParts: false, descriptionUrdu: "ویل يومئذ للمكذبين کا شدید انتباہ۔" },
  { id: 78, nameArabic: "النبأ", nameUrdu: "النبأ", nameEnglish: "An-Naba", englishMeaning: "The Tidings", revelationType: "Makki", ayahCount: 40, para: 30, pdfPath: "/surah/078_Surah_Al-Naba.pdf", hasParts: false, descriptionUrdu: "عظیم خبر (قیامت) کے بارے میں کافروں کے سوالات۔" },
  { id: 79, nameArabic: "النازعات", nameUrdu: "النازعات", nameEnglish: "An-Nazi'at", englishMeaning: "Those who drag forth", revelationType: "Makki", ayahCount: 46, para: 30, pdfPath: "/surah/079_Surah_Al-Naziat.pdf", hasParts: false, descriptionUrdu: "روح قبض کرنے والے فرشتے اور فرعون کا عبرت ناک انجام۔" },
  { id: 80, nameArabic: "عبس", nameUrdu: "عبس", nameEnglish: "'Abasa", englishMeaning: "He Frowned", revelationType: "Makki", ayahCount: 42, para: 30, pdfPath: "/surah/080_Surah_Al-Abas.pdf", hasParts: false, descriptionUrdu: "حضرت ابن ام مکتوم رض کے واقعہ سے اسلامی مساوات کا درس۔" },
  { id: 81, nameArabic: "التكوير", nameUrdu: "التکویر", nameEnglish: "At-Takwir", englishMeaning: "The Overthrowing", revelationType: "Makki", ayahCount: 29, para: 30, pdfPath: "/surah/081_Surah_Al-Takwir.pdf", hasParts: false, descriptionUrdu: "سورج کا لپیٹا جانا اور ستاروں کا بے نور ہونا۔" },
  { id: 82, nameArabic: "الإنفطار", nameUrdu: "الانفطار", nameEnglish: "Al-Infitar", englishMeaning: "The Cleaving", revelationType: "Makki", ayahCount: 19, para: 30, pdfPath: "/surah/082_Surah_Al-Infitar.pdf", hasParts: false, descriptionUrdu: "آسمان کا پھٹنا اور کراماً کاتبین کا اعمال درج کرنا۔" },
  { id: 83, nameArabic: "المطففين", nameUrdu: "المطففین", nameEnglish: "Al-Mutaffifin", englishMeaning: "The Defrauders", revelationType: "Makki", ayahCount: 36, para: 30, pdfPath: "/surah/083_Surah_Al-Mutaffifin.pdf", hasParts: false, descriptionUrdu: "ناپ تول میں کمی کرنے والوں کے لیے ہلاکت۔" },
  { id: 84, nameArabic: "الإنشقاق", nameUrdu: "الانشقاق", nameEnglish: "Al-Inshiqaq", englishMeaning: "The Splitting Open", revelationType: "Makki", ayahCount: 25, para: 30, pdfPath: "/surah/084_Surah_Al-Inshiqaq.pdf", hasParts: false, descriptionUrdu: "اعمال نامہ دائیں اور بائیں ہاتھ میں ملنے کی کیفیت۔" },
  { id: 85, nameArabic: "البروج", nameUrdu: "البروج", nameEnglish: "Al-Buruj", englishMeaning: "The Mansions of the Stars", revelationType: "Makki", ayahCount: 22, para: 30, pdfPath: "/surah/085_Surah_Al-Buruj.pdf", hasParts: false, descriptionUrdu: "اصحاب الاخدود (خندق والوں) کی مظلومیت اور اللہ کا تحفظ۔" },
  { id: 86, nameArabic: "الطارق", nameUrdu: "الطارق", nameEnglish: "At-Tariq", englishMeaning: "The Nightcomer", revelationType: "Makki", ayahCount: 17, para: 30, pdfPath: "/surah/086_Surah_Al-Tariq.pdf", hasParts: false, descriptionUrdu: "رات کو نمودار ہونے والا چمکتا ہوا تارا۔" },
  { id: 87, nameArabic: "الأعلى", nameUrdu: "الاعلیٰ", nameEnglish: "Al-A'la", englishMeaning: "The Most High", revelationType: "Makki", ayahCount: 19, para: 30, pdfPath: "/surah/087_Surah_Al-Ala.pdf", hasParts: false, descriptionUrdu: "اپنے رب اعلیٰ کی تسبیح، حضرت ابراہیم و موسیٰ کے صحائف۔" },
  { id: 88, nameArabic: "الغاشية", nameUrdu: "الغاشیہ", nameEnglish: "Al-Ghashiyah", englishMeaning: "The Overwhelming", revelationType: "Makki", ayahCount: 26, para: 30, pdfPath: "/surah/088_Surah_Al-Ghashiyah.pdf", hasParts: false, descriptionUrdu: "چھانے والی بلا (قیامت) اور جنت کا سکون۔" },
  { id: 89, nameArabic: "الفجر", nameUrdu: "الفجر", nameEnglish: "Al-Fajr", englishMeaning: "The Dawn", revelationType: "Makki", ayahCount: 30, para: 30, pdfPath: "/surah/089_Surah_Al-Fajr.pdf", hasParts: false, descriptionUrdu: "صبح صادق کی قسم، نفس مطمئنہ کی اپنے رب کی طرف واپسی۔" },
  { id: 90, nameArabic: "البلد", nameUrdu: "البلد", nameEnglish: "Al-Balad", englishMeaning: "The City", revelationType: "Makki", ayahCount: 20, para: 30, pdfPath: "/surah/090_Surah_Al-Balad.pdf", hasParts: false, descriptionUrdu: "شہر مکہ کی قسم اور دشوار گزار گھاٹی (غریبوں کی مدد)۔" },
  { id: 91, nameArabic: "الشمس", nameUrdu: "الشمس", nameEnglish: "Ash-Shams", englishMeaning: "The Sun", revelationType: "Makki", ayahCount: 15, para: 30, pdfPath: "/surah/091_Surah_Al-Shams.pdf", hasParts: false, descriptionUrdu: "سورج اور چاند کی قسم، تزکیہ نفس کرنے والا کامیاب رہا۔" },
  { id: 92, nameArabic: "الليل", nameUrdu: "اللیل", nameEnglish: "Al-Layl", englishMeaning: "The Night", revelationType: "Makki", ayahCount: 21, para: 30, pdfPath: "/surah/092_Surah_Al-Lail.pdf", hasParts: false, descriptionUrdu: "رات جب چھا جائے، راہ خدا میں دینے والوں کے لیے آسانی۔" },
  { id: 93, nameArabic: "الضحى", nameUrdu: "الضحی", nameEnglish: "Ad-Duha", englishMeaning: "The Morning Hours", revelationType: "Makki", ayahCount: 11, para: 30, pdfPath: "/surah/093_Surah_Al-Duha.pdf", hasParts: false, descriptionUrdu: "چاشت کا وقت، آپ کے رب نے آپ کو کبھی نہیں چھوڑا۔" },
  { id: 94, nameArabic: "الشرح", nameUrdu: "الشرح / الانشراح", nameEnglish: "Ash-Sharh", englishMeaning: "The Relief", revelationType: "Makki", ayahCount: 8, para: 30, pdfPath: "/surah/094_Surah_Al-Inshirah.pdf", hasParts: false, descriptionUrdu: "سینے کا کشادہ کیا جانا، ہر دشواری کے ساتھ آسانی ہے۔" },
  { id: 95, nameArabic: "التين", nameUrdu: "التین", nameEnglish: "At-Tin", englishMeaning: "The Fig", revelationType: "Makki", ayahCount: 8, para: 30, pdfPath: "/surah/095_Surah_Al-Tin.pdf", hasParts: false, descriptionUrdu: "انجیر اور زیتون کی قسم، انسان بہترین ساخت پر پیدا کیا گیا۔" },
  { id: 96, nameArabic: "العلق", nameUrdu: "العلق", nameEnglish: "Al-'Alaq", englishMeaning: "The Clot", revelationType: "Makki", ayahCount: 19, para: 30, pdfPath: "/surah/096_Surah_Al-Alaq.pdf", hasParts: false, descriptionUrdu: "اقرأ باسم ربك - قرآن مجید کی سب سے پہلی نازل ہونے والی آیات۔" },
  { id: 97, nameArabic: "القدر", nameUrdu: "القدر", nameEnglish: "Al-Qadr", englishMeaning: "The Power", revelationType: "Makki", ayahCount: 5, para: 30, pdfPath: "/surah/097_Surah_Al-Qadr.pdf", hasParts: false, descriptionUrdu: "شب قدر - ہزار مہینوں سے بہتر مبارک رات۔" },
  { id: 98, nameArabic: "البينة", nameUrdu: "البینہ", nameEnglish: "Al-Bayyinah", englishMeaning: "The Clear Proof", revelationType: "Madani", ayahCount: 8, para: 30, pdfPath: "/surah/098_Surah_Al-Bayyinah.pdf", hasParts: false, descriptionUrdu: "روشن دلیل اور خیر البریہ (بہترین مخلوق)۔" },
  { id: 99, nameArabic: "الزلزلة", nameUrdu: "الزلزلہ", nameEnglish: "Az-Zalzalah", englishMeaning: "The Earthquake", revelationType: "Madani", ayahCount: 8, para: 30, pdfPath: "/surah/099_Surah_Al-Zilzal.pdf", hasParts: false, descriptionUrdu: "زمین کا شدید زلزلہ اور ذرہ برابر نیکی و بدی کی جزا۔" },
  { id: 100, nameArabic: "العاديات", nameUrdu: "العادیات", nameEnglish: "Al-'Adiyat", englishMeaning: "The Courser", revelationType: "Makki", ayahCount: 11, para: 30, pdfPath: "/surah/100_Surah_Al-Adiyat.pdf", hasParts: false, descriptionUrdu: "ہانپتے ہوئے سوار گھوڑوں کی قسم، انسان کا اپنے رب کا ناشکرا ہونا۔" },
  { id: 101, nameArabic: "القارعة", nameUrdu: "القارعہ", nameEnglish: "Al-Qari'ah", englishMeaning: "The Calamity", revelationType: "Makki", ayahCount: 11, para: 30, pdfPath: "/surah/101_Surah_Al-Qariah.pdf", hasParts: false, descriptionUrdu: "کھٹکھٹانے والی (قیامت) اور ترازو کے بھاری یا ہلکے ہونے کا نتیجہ۔" },
  { id: 102, nameArabic: "التكاثر", nameUrdu: "التکاثر", nameEnglish: "At-Takathur", englishMeaning: "The Rivalry in world increase", revelationType: "Makki", ayahCount: 8, para: 30, pdfPath: "/surah/102_Surah_Al-Takathur.pdf", hasParts: false, descriptionUrdu: "مال و دولت کی حرص میں ایک دوسرے سے آگے نکلنے کی غفلت۔" },
  { id: 103, nameArabic: "العصر", nameUrdu: "العصر", nameEnglish: "Al-'Asr", englishMeaning: "The Declining Day", revelationType: "Makki", ayahCount: 3, para: 30, pdfPath: "/surah/103_Surah_Al-Asr.pdf", hasParts: false, descriptionUrdu: "زمانہ شاہد ہے کہ انسان خسارے میں ہے سوائے ایمان و عمل صالح والوں کے۔" },
  { id: 104, nameArabic: "الهمزة", nameUrdu: "الہمزہ", nameEnglish: "Al-Humazah", englishMeaning: "The Traducer", revelationType: "Makki", ayahCount: 9, para: 30, pdfPath: "/surah/104_Surah_Al-Humazah.pdf", hasParts: false, descriptionUrdu: "طعنہ زنی کرنے والے اور مال جمع کر کے گننے والے کی تباہی۔" },
  { id: 105, nameArabic: "الفيل", nameUrdu: "الفیل", nameEnglish: "Al-Fil", englishMeaning: "The Elephant", revelationType: "Makki", ayahCount: 5, para: 30, pdfPath: "/surah/105_Surah_Al-Fil.pdf", hasParts: false, descriptionUrdu: "اصحاب الفیل (ابربہ کا لشکر) کی ابابیلوں کے ذریعے تباہی۔" },
  { id: 106, nameArabic: "قريش", nameUrdu: "قریش", nameEnglish: "Quraysh", englishMeaning: "Quraysh", revelationType: "Makki", ayahCount: 4, para: 30, pdfPath: "/surah/106_Surah_Al-Quraish.pdf", hasParts: false, descriptionUrdu: "قریش کی ملافت اور رب البیت کی عبادت کا شکر۔" },
  { id: 107, nameArabic: "المواعون", nameUrdu: "المقاعون", nameEnglish: "Al-Ma'un", englishMeaning: "The Small Kindnesses", revelationType: "Makki", ayahCount: 7, para: 30, pdfPath: "/surah/107_Surah_Al-Maun.pdf", hasParts: false, descriptionUrdu: "دین کو جھٹلانے والا، یتیم کو دھکے دینے والا اور ماعون (عام ضرورت کی چیز) روکنے والا۔" },
  { id: 108, nameArabic: "الكوثر", nameUrdu: "الکوثر", nameEnglish: "Al-Kawthar", englishMeaning: "The Abundance", revelationType: "Makki", ayahCount: 3, para: 30, pdfPath: "/surah/108_Surah_Al-Kausar.pdf", hasParts: false, descriptionUrdu: "کوثر کی عطا، اپنے رب کے لیے نماز پڑھیں اور قربانی دیں۔" },
  { id: 109, nameArabic: "الكافرون", nameUrdu: "الکافرون", nameEnglish: "Al-Kafirun", englishMeaning: "The Disbelievers", revelationType: "Makki", ayahCount: 6, para: 30, pdfPath: "/surah/109_Surah_Al-Kafirun.pdf", hasParts: false, descriptionUrdu: "لكم دينكم ولي دين - باطل سے قطعی اور کامل بیزاری۔" },
  { id: 110, nameArabic: "النصر", nameUrdu: "النصر", nameEnglish: "An-Nasr", englishMeaning: "The Divine Support", revelationType: "Madani", ayahCount: 3, para: 30, pdfPath: "/surah/110_Surah_An-Nasar.pdf", hasParts: false, descriptionUrdu: "خدا کی نصرت اور مکہ کی فتح، افواج در افواج اسلام میں شمولیت۔" },
  { id: 111, nameArabic: "المسد", nameUrdu: "المسد / لہب", nameEnglish: "Al-Masad", englishMeaning: "The Palm Fiber", revelationType: "Makki", ayahCount: 5, para: 30, pdfPath: "/surah/111_Surah_Al-Lahab.pdf", hasParts: false, descriptionUrdu: "ابو لہب اور اس کی بیوی کا انجام۔" },
  { id: 112, nameArabic: "الإخلاص", nameUrdu: "الاخلاص", nameEnglish: "Al-Ikhlas", englishMeaning: "The Sincerity", revelationType: "Makki", ayahCount: 4, para: 30, pdfPath: "/surah/112_Surah_Al-Ikhlas.pdf", hasParts: false, descriptionUrdu: "قل ہو اللہ احد - توحید کا خالص ترین تعارف۔" },
  { id: 113, nameArabic: "الفلق", nameUrdu: "الفلق", nameEnglish: "Al-Falaq", englishMeaning: "The Daybreak", revelationType: "Makki", ayahCount: 5, para: 30, pdfPath: "/surah/113_Surah_Al-Falaq.pdf", hasParts: false, descriptionUrdu: "مخلوق کے شر، اندھیرے اور حاسدین کے شر سے صبح کے رب کی پناہ۔" },
  { id: 114, nameArabic: "الناس", nameUrdu: "الناس", nameEnglish: "An-Nas", englishMeaning: "Mankind", revelationType: "Makki", ayahCount: 6, para: 30, pdfPath: "/surah/114_Surah_Al-Nas.pdf", hasParts: false, descriptionUrdu: "وسوسہ ڈالنے والے خناس کے شر سے انسانوں کے بادشاہ و معبود کی پناہ۔" }
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
        maududiNote: "شیطان کا کام ہمارے دل میں منفی خیالات اور وسوسے ڈالنا ہے تاکہ ہم نیکی کرنے سے گریز کریں۔"
      },
      {
        number: 6,
        arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
        urduTarjuma: "چاہے وہ جنوں میں سے ہو یا انسانوں میں سے۔",
        maududiNote: "شر کا ذریعہ دونوں طرح سے ہو سکتا ہے - ناظرین جنات اور لوگوں کی بدگمانی اور برے ارادے۔"
      }
    ]
  }
};

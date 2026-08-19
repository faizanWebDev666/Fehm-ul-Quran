// Curated daily adhkar. Each entry has an in-card primary source link.
// This is a practical morning/evening collection, not a claim to contain every Sunnah du'a.
const shared = [
  {
    key: 'ayat-al-kursi', title: 'Āyat al-Kursī', titleUrdu: 'آیت الکرسی',
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    transliteration: 'Allahu la ilaha illa huwa al-hayyul-qayyum…',
    english: 'Allah—there is no god worthy of worship except Him, the Ever-Living, the Sustainer of all. Neither drowsiness nor sleep overtakes Him. To Him belongs whatever is in the heavens and earth… His Kursi encompasses the heavens and the earth, and preserving them does not tire Him. He is the Most High, the Greatest.',
    urdu: 'اللہ کے سوا کوئی معبود نہیں، وہ زندہ اور قائم رہنے والا ہے۔ اسے نہ اونگھ آتی ہے نہ نیند۔ آسمانوں اور زمین میں جو کچھ ہے اسی کا ہے… اس کی کرسی آسمانوں اور زمین پر وسیع ہے اور ان کی حفاظت اسے نہیں تھکاتی، اور وہی بلند اور عظمت والا ہے۔',
    count: 1, reference: 'Al-Baqarah 2:255 · Hisn al-Muslim 77', sourceUrl: 'https://quran.com/2/255',
  },
  {
    key: 'three-quls', title: 'Al-Ikhlāṣ, Al-Falaq & An-Nās', titleUrdu: 'تین قل',
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ﴾\n\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾\n\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾',
    transliteration: 'Qul huwa Allahu ahad… · Qul a‘udhu bi rabbil-falaq… · Qul a‘udhu bi rabbin-nas…',
    english: 'Recite Surah Al-Ikhlas, Surah Al-Falaq, and Surah An-Nas three times each.', urdu: 'سورۃ الاخلاص، سورۃ الفلق اور سورۃ الناس، ہر ایک تین مرتبہ پڑھیں۔',
    count: 3, reference: 'Sunan Abi Dawud 5082 · Hisn al-Muslim 76', sourceUrl: 'https://sunnah.com/abudawud:5082',
  },
  {
    key: 'bika', title: 'By You we enter the day', titleUrdu: 'تیری مدد سے صبح و شام',
    arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
    eveningArabic: 'اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ',
    transliteration: 'Allahumma bika asbahna wa bika amsayna wa bika nahya wa bika namutu wa ilaykan-nushur.',
    eveningTransliteration: 'Allahumma bika amsayna wa bika asbahna wa bika nahya wa bika namutu wa ilaykal-masir.',
    english: 'O Allah, by You we enter the morning and by You we enter the evening; by You we live and die, and to You is the resurrection.', eveningEnglish: 'O Allah, by You we enter the evening and by You we enter the morning; by You we live and die, and to You is the final return.',
    urdu: 'اے اللہ! تیری مدد سے ہم نے صبح کی اور تیری مدد سے شام کی، تیرے ہی حکم سے جیتے اور مرتے ہیں، اور تیری ہی طرف اٹھ کر جانا ہے۔', eveningUrdu: 'اے اللہ! تیری مدد سے ہم نے شام کی اور تیری مدد سے صبح کی، تیرے ہی حکم سے جیتے اور مرتے ہیں، اور تیری ہی طرف لوٹ کر جانا ہے۔',
    count: 1, reference: 'Jami` at-Tirmidhi · Hisn al-Muslim 78', sourceUrl: 'https://sunnah.com/hisn/79',
  },
  {
    key: 'sayyid-al-istighfar', title: 'Sayyid al-Istighfār', titleUrdu: 'سید الاستغفار',
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
    transliteration: 'Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana ‘abduka… faghfir li fa-innahu la yaghfirudh-dhunuba illa anta.',
    english: 'O Allah, You are my Lord; none is worthy of worship but You. You created me and I am Your servant… I acknowledge Your favour upon me and my sin, so forgive me; none forgives sins except You.', urdu: 'اے اللہ! تو میرا رب ہے، تیرے سوا کوئی معبود نہیں۔ تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں… میں اپنے گناہ کا اقرار کرتا ہوں، پس مجھے بخش دے؛ تیرے سوا کوئی گناہ معاف نہیں کرتا۔',
    count: 1, reference: 'Sahih al-Bukhari 6306', sourceUrl: 'https://sunnah.com/bukhari:6306',
  },
  {
    key: 'raditu', title: 'Contentment with faith', titleUrdu: 'ایمان پر رضامندی',
    arabic: 'رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ ﷺ نَبِيًّا', transliteration: 'Raditu billahi Rabban, wa bil-Islami dinan, wa bi-Muhammadin nabiyyan.',
    english: 'I am pleased with Allah as my Lord, Islam as my religion, and Muhammad ﷺ as my Prophet.', urdu: 'میں اللہ کے رب ہونے، اسلام کے دین ہونے اور محمد ﷺ کے نبی ہونے پر راضی ہوں۔',
    count: 3, reference: 'Jami` at-Tirmidhi · Hisn al-Muslim 87', sourceUrl: 'https://sunnah.com/hisn/88',
  },
  {
    key: 'shahid', title: 'Witness to Allah’s oneness', titleUrdu: 'اللہ کی وحدانیت کی گواہی',
    arabic: 'اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ',
    eveningArabic: 'اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ',
    transliteration: 'Allahumma inni asbahtu ushhiduka, wa ushhidu hamalata ‘arshika… wa anna Muhammadan ‘abduka wa rasuluk.',
    english: 'O Allah, this morning I call You, the bearers of Your Throne, Your angels, and all creation to witness that You are Allah, alone without partner, and Muhammad is Your servant and Messenger.', urdu: 'اے اللہ! میں تجھے، تیرے عرش کے اٹھانے والوں، تیرے فرشتوں اور تیری ساری مخلوق کو گواہ بناتا ہوں کہ تو ہی اللہ ہے، تیرا کوئی شریک نہیں، اور محمد ﷺ تیرے بندے اور رسول ہیں۔',
    count: 4, reference: 'Sunan Abi Dawud · Hisn al-Muslim 80', sourceUrl: 'https://sunnah.com/hisn/81',
  },
  {
    key: 'blessings', title: 'Gratitude for blessings', titleUrdu: 'نعمتوں کا شکر',
    arabic: 'اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ',
    eveningArabic: 'اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ',
    transliteration: 'Allahumma ma asbaha bi min ni‘matin aw bi-ahadin min khalqika, fa minka wahdaka la sharika laka, falakal-hamdu wa lakash-shukr.',
    english: 'O Allah, every blessing received by me or any of Your creation this morning is from You alone, without partner. All praise and thanks are for You.', urdu: 'اے اللہ! آج صبح مجھ پر یا تیری مخلوق میں سے کسی پر جو نعمت ہے، وہ صرف تیری طرف سے ہے؛ تیرا کوئی شریک نہیں، پس تمام تعریف اور شکر تیرے لیے ہے۔',
    count: 1, reference: 'Sunan Abi Dawud · Hisn al-Muslim 81', sourceUrl: 'https://sunnah.com/hisn/82',
  },
  {
    key: 'afiyah', title: 'Well-being and protection', titleUrdu: 'عافیت اور حفاظت',
    arabic: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَٰهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَٰهَ إِلَّا أَنْتَ',
    transliteration: 'Allahumma ‘afini fi badani, Allahumma ‘afini fi sam‘i, Allahumma ‘afini fi basari…',
    english: 'O Allah, grant well-being to my body, hearing, and sight. I seek refuge in You from disbelief, poverty, and the punishment of the grave.', urdu: 'اے اللہ! میرے جسم، سماعت اور بصارت کو عافیت دے۔ میں کفر، فقر اور عذابِ قبر سے تیری پناہ مانگتا ہوں۔',
    count: 3, reference: 'Sunan Abi Dawud · Hisn al-Muslim 82', sourceUrl: 'https://sunnah.com/hisn/83',
  },
  {
    key: 'afw', title: 'Forgiveness and safety', titleUrdu: 'معافی اور سلامتی',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، وَاحْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي',
    transliteration: 'Allahumma inni as’alukal-‘afwa wal-‘afiyata fid-dunya wal-akhirah…',
    english: 'O Allah, I ask You for pardon and well-being in this life and the next; in my religion, worldly affairs, family, and wealth. Conceal my faults, calm my fears, and protect me from every direction.', urdu: 'اے اللہ! میں تجھ سے دنیا و آخرت کی معافی اور عافیت مانگتا ہوں؛ اپنے دین، دنیا، اہل اور مال میں۔ میری پردہ پوشی فرما، میرے خوف دور کر اور ہر طرف سے میری حفاظت فرما۔',
    count: 1, reference: 'Sunan Ibn Majah 3871', sourceUrl: 'https://sunnah.com/ibnmajah:3871',
  },
  {
    key: 'bismillah-protection', title: 'Protection in Allah’s name', titleUrdu: 'اللہ کے نام سے حفاظت',
    arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    transliteration: 'Bismillahil-ladhi la yadurru ma‘a ismihi shay’un fil-ardi wa la fis-sama’i wa huwas-sami‘ul-‘alim.',
    english: 'In the name of Allah, with whose name nothing in the earth or heaven can cause harm; He is the All-Hearing, All-Knowing.', urdu: 'اللہ کے نام سے، جس کے نام کے ساتھ زمین و آسمان میں کوئی چیز نقصان نہیں پہنچا سکتی، اور وہ سننے والا، جاننے والا ہے۔',
    count: 3, reference: 'Sunan Abi Dawud 5088 · Hisn al-Muslim 86', sourceUrl: 'https://sunnah.com/hisn/87',
  },
  {
    key: 'hasbi', title: 'Reliance on Allah', titleUrdu: 'اللہ پر بھروسا',
    arabic: 'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
    transliteration: 'Hasbiyallahu la ilaha illa huwa, ‘alayhi tawakkaltu, wa huwa Rabbul-‘arshil-‘azim.',
    english: 'Allah is sufficient for me. None is worthy of worship except Him. Upon Him I rely, and He is the Lord of the Mighty Throne.', urdu: 'میرے لیے اللہ کافی ہے، اس کے سوا کوئی معبود نہیں۔ میں نے اسی پر بھروسا کیا اور وہ عرشِ عظیم کا رب ہے۔',
    count: 7, reference: 'Sunan Abi Dawud · Hisn al-Muslim 83', sourceUrl: 'https://sunnah.com/hisn/84',
  },
  {
    key: 'subhan', title: 'Glorification and praise', titleUrdu: 'تسبیح اور حمد',
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', transliteration: 'Subhanallahi wa bihamdihi.',
    english: 'Glory is to Allah and all praise is for Him.', urdu: 'اللہ پاک ہے اور اسی کے لیے تمام تعریف ہے۔',
    count: 100, reference: 'Sahih Muslim 2692', sourceUrl: 'https://sunnah.com/muslim:2692',
  },
  {
    key: 'tahlil', title: 'Tahlīl', titleUrdu: 'تہلیل',
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: 'La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa ‘ala kulli shay’in qadir.',
    english: 'None is worthy of worship except Allah alone, without partner. His is all dominion and praise, and He is able to do all things.', urdu: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں۔ بادشاہی اور حمد اسی کی ہے اور وہ ہر چیز پر قادر ہے۔',
    count: 100, reference: 'Sahih al-Bukhari 3293', sourceUrl: 'https://sunnah.com/bukhari:3293',
  },
];

const morningOnly = [
  {
    key: 'morning-good', title: 'Goodness of this day', titleUrdu: 'آج کے دن کی بھلائی',
    arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ، فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ',
    transliteration: 'Asbahna wa asbahal-mulku lillahi Rabbil-‘alamin…', english: 'We have entered the morning and all dominion belongs to Allah, Lord of the worlds. O Allah, I ask You for the goodness, light, blessing, and guidance of this day.', urdu: 'ہم نے صبح کی اور ساری بادشاہی اللہ رب العالمین کے لیے ہے۔ اے اللہ! میں اس دن کی بھلائی، فتح، نور، برکت اور ہدایت مانگتا ہوں۔', count: 1, reference: 'Sunan Abi Dawud · Hisn al-Muslim 89', sourceUrl: 'https://sunnah.com/hisn/90',
  },
  {
    key: 'beneficial-knowledge', title: 'Beneficial knowledge', titleUrdu: 'نفع بخش علم',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا', transliteration: 'Allahumma inni as’aluka ‘ilman nafi‘an, wa rizqan tayyiban, wa ‘amalan mutaqabbalan.', english: 'O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.', urdu: 'اے اللہ! میں تجھ سے نفع بخش علم، پاکیزہ رزق اور قبول ہونے والا عمل مانگتا ہوں۔', count: 1, reference: 'Sunan Ibn Majah 925 · Hisn al-Muslim 95', sourceUrl: 'https://sunnah.com/hisn/95',
  },
];

const eveningOnly = [
  {
    key: 'evening-good', title: 'Goodness of this night', titleUrdu: 'اس رات کی بھلائی',
    arabic: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ، فَتْحَهَا وَنَصْرَهَا وَنُورَهَا وَبَرَكَتَهَا وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا',
    transliteration: 'Amsayna wa amsal-mulku lillahi Rabbil-‘alamin…', english: 'We have entered the evening and all dominion belongs to Allah, Lord of the worlds. O Allah, I ask You for the goodness, light, blessing, and guidance of this night.', urdu: 'ہم نے شام کی اور ساری بادشاہی اللہ رب العالمین کے لیے ہے۔ اے اللہ! میں اس رات کی بھلائی، فتح، نور، برکت اور ہدایت مانگتا ہوں۔', count: 1, reference: 'Sunan Abi Dawud · Hisn al-Muslim 89', sourceUrl: 'https://sunnah.com/hisn/90',
  },
  {
    key: 'perfect-words', title: 'Refuge in Allah’s perfect words', titleUrdu: 'اللہ کے کامل کلمات کی پناہ',
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ', transliteration: 'A‘udhu bi kalimatillahit-tammati min sharri ma khalaq.', english: 'I seek refuge in the perfect words of Allah from the evil of what He has created.', urdu: 'میں اللہ کے کامل کلمات کے ذریعے اس کی مخلوق کے شر سے پناہ مانگتا ہوں۔', count: 3, reference: 'Sahih Muslim 2708 · Hisn al-Muslim 97', sourceUrl: 'https://sunnah.com/hisn/98',
  },
];

const forPeriod = (period, entry) => ({
  ...entry,
  id: `${period}-${entry.key}`,
  arabic: period === 'evening' && entry.eveningArabic ? entry.eveningArabic : entry.arabic,
  transliteration: period === 'evening' && entry.eveningTransliteration ? entry.eveningTransliteration : entry.transliteration,
  english: period === 'evening' && entry.eveningEnglish ? entry.eveningEnglish : entry.english,
  urdu: period === 'evening' && entry.eveningUrdu ? entry.eveningUrdu : entry.urdu,
});

export const AZKAR_DATA = {
  morning: [...shared, ...morningOnly].map((entry) => forPeriod('morning', entry)),
  evening: [...shared, ...eveningOnly].map((entry) => forPeriod('evening', entry)),
};

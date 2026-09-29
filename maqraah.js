/**
 * منصة فضيلة الشيخ أحمد مرتضى حامد الرسمية
 * محرك المقرأة القرآنية والمصحف المعلم واختبارات التحفيظ المستقل
 * مزود بنظام البحث اللحظي بالكتابة عن السور بالأرقام والأسماء
 */

// ==========================================================================
// 1. فهرس سور القرآن الكريم الـ ١١٤ بالكامل
// ==========================================================================
const QURAN_SURAHS = [
    { number: 1, name: "الفاتحة", ayahs: 7, type: "مكية" },
    { number: 2, name: "البقرة", ayahs: 286, type: "مدنية" },
    { number: 3, name: "آل عمران", ayahs: 200, type: "مدنية" },
    { number: 4, name: "النساء", ayahs: 176, type: "مدنية" },
    { number: 5, name: "المائدة", ayahs: 120, type: "مدنية" },
    { number: 6, name: "الأنعام", ayahs: 165, type: "مكية" },
    { number: 7, name: "الأعراف", ayahs: 206, type: "مكية" },
    { number: 8, name: "الأنفال", ayahs: 75, type: "مدنية" },
    { number: 9, name: "التوبة", ayahs: 129, type: "مدنية" },
    { number: 10, name: "يونس", ayahs: 109, type: "مكية" },
    { number: 11, name: "هود", ayahs: 123, type: "مكية" },
    { number: 12, name: "يوسف", ayahs: 111, type: "مكية" },
    { number: 13, name: "الرعد", ayahs: 43, type: "مدنية" },
    { number: 14, name: "إبراهيم", ayahs: 52, type: "مكية" },
    { number: 15, name: "الحجر", ayahs: 99, type: "مكية" },
    { number: 16, name: "النحل", ayahs: 128, type: "مكية" },
    { number: 17, name: "الإسراء", ayahs: 111, type: "مكية" },
    { number: 18, name: "الكهف", ayahs: 110, type: "مكية" },
    { number: 19, name: "مريم", ayahs: 98, type: "مكية" },
    { number: 20, name: "طه", ayahs: 135, type: "مكية" },
    { number: 21, name: "الأنبياء", ayahs: 112, type: "مكية" },
    { number: 22, name: "الحج", ayahs: 78, type: "مدنية" },
    { number: 23, name: "المؤمنون", ayahs: 118, type: "مكية" },
    { number: 24, name: "النور", ayahs: 64, type: "مدنية" },
    { number: 25, name: "الفرقان", ayahs: 77, type: "مكية" },
    { number: 26, name: "الشعراء", ayahs: 227, type: "مكية" },
    { number: 27, name: "النمل", ayahs: 93, type: "مكية" },
    { number: 28, name: "القصص", ayahs: 88, type: "مكية" },
    { number: 29, name: "العنكبوت", ayahs: 69, type: "مكية" },
    { number: 30, name: "الروم", ayahs: 60, type: "مكية" },
    { number: 31, name: "لقمان", ayahs: 34, type: "مكية" },
    { number: 32, name: "السجدة", ayahs: 30, type: "مكية" },
    { number: 33, name: "الأحزاب", ayahs: 73, type: "مدنية" },
    { number: 34, name: "سبأ", ayahs: 54, type: "مكية" },
    { number: 35, name: "فاطر", ayahs: 45, type: "مكية" },
    { number: 36, name: "يس", ayahs: 83, type: "مكية" },
    { number: 37, name: "الصافات", ayahs: 182, type: "مكية" },
    { number: 38, name: "ص", ayahs: 88, type: "مكية" },
    { number: 39, name: "الزمر", ayahs: 75, type: "مكية" },
    { number: 40, name: "غافر", ayahs: 85, type: "مكية" },
    { number: 41, name: "فصلت", ayahs: 54, type: "مكية" },
    { number: 42, name: "الشورى", ayahs: 53, type: "مكية" },
    { number: 43, name: "الزخرف", ayahs: 89, type: "مكية" },
    { number: 44, name: "الدخان", ayahs: 59, type: "مكية" },
    { number: 45, name: "الجاثية", ayahs: 37, type: "مكية" },
    { number: 46, name: "الأحقاف", ayahs: 35, type: "مكية" },
    { number: 47, name: "محمد", ayahs: 38, type: "مدنية" },
    { number: 48, name: "الفتح", ayahs: 29, type: "مدنية" },
    { number: 49, name: "الحجرات", ayahs: 18, type: "مدنية" },
    { number: 50, name: "ق", ayahs: 45, type: "مكية" },
    { number: 51, name: "الذاريات", ayahs: 60, type: "مكية" },
    { number: 52, name: "الطور", ayahs: 49, type: "مكية" },
    { number: 53, name: "النجم", ayahs: 62, type: "مكية" },
    { number: 54, name: "القمر", ayahs: 55, type: "مكية" },
    { number: 55, name: "الرحمن", ayahs: 78, type: "مدنية" },
    { number: 56, name: "الواقعة", ayahs: 96, type: "مكية" },
    { number: 57, name: "الحديد", ayahs: 29, type: "مدنية" },
    { number: 58, name: "المجادلة", ayahs: 22, type: "مدنية" },
    { number: 59, name: "الحشر", ayahs: 24, type: "مدنية" },
    { number: 60, name: "الممتحنة", ayahs: 13, type: "مدنية" },
    { number: 61, name: "الصف", ayahs: 14, type: "مدنية" },
    { number: 62, name: "الجمعة", ayahs: 11, type: "مدنية" },
    { number: 63, name: "المنافقون", ayahs: 11, type: "مدنية" },
    { number: 64, name: "التغابن", ayahs: 18, type: "مدنية" },
    { number: 65, name: "الطلاق", ayahs: 12, type: "مدنية" },
    { number: 66, name: "التحريم", ayahs: 12, type: "مدنية" },
    { number: 67, name: "الملك", ayahs: 30, type: "مكية" },
    { number: 68, name: "القلم", ayahs: 52, type: "مكية" },
    { number: 69, name: "الحاقة", ayahs: 52, type: "مكية" },
    { number: 70, name: "المعارج", ayahs: 44, type: "مكية" },
    { number: 71, name: "نوح", ayahs: 28, type: "مكية" },
    { number: 72, name: "الجن", ayahs: 28, type: "مكية" },
    { number: 73, name: "المزمل", ayahs: 20, type: "مكية" },
    { number: 74, name: "المدثر", ayahs: 56, type: "مكية" },
    { number: 75, name: "القيامة", ayahs: 40, type: "مكية" },
    { number: 76, name: "الإنسان", ayahs: 31, type: "مدنية" },
    { number: 77, name: "المرسلات", ayahs: 50, type: "مكية" },
    { number: 78, name: "النبأ", ayahs: 40, type: "مكية" },
    { number: 79, name: "النازعات", ayahs: 46, type: "مكية" },
    { number: 80, name: "عبس", ayahs: 42, type: "مكية" },
    { number: 81, name: "التكوير", ayahs: 29, type: "مكية" },
    { number: 82, name: "الانفطار", ayahs: 19, type: "مكية" },
    { number: 83, name: "المطففين", ayahs: 36, type: "مكية" },
    { number: 84, name: "الانشقاق", ayahs: 25, type: "مكية" },
    { number: 85, name: "البروج", ayahs: 22, type: "مكية" },
    { number: 86, name: "الطارق", ayahs: 17, type: "مكية" },
    { number: 87, name: "الأعلى", ayahs: 19, type: "مكية" },
    { number: 88, name: "الغاشية", ayahs: 26, type: "مكية" },
    { number: 89, name: "الفجر", ayahs: 30, type: "مكية" },
    { number: 90, name: "البلد", ayahs: 20, type: "مكية" },
    { number: 91, name: "الشمس", ayahs: 15, type: "مكية" },
    { number: 92, name: "الليل", ayahs: 21, type: "مكية" },
    { number: 93, name: "الضحى", ayahs: 11, type: "مكية" },
    { number: 94, name: "الشرح", ayahs: 8, type: "مكية" },
    { number: 95, name: "التين", ayahs: 8, type: "مكية" },
    { number: 96, name: "العلق", ayahs: 19, type: "مكية" },
    { number: 97, name: "القدر", ayahs: 5, type: "مكية" },
    { number: 98, name: "البينة", ayahs: 8, type: "مدنية" },
    { number: 99, name: "الزلزلة", ayahs: 8, type: "مدنية" },
    { number: 100, name: "العاديات", ayahs: 11, type: "مكية" },
    { number: 101, name: "القارعة", ayahs: 11, type: "مكية" },
    { number: 102, name: "التكاثر", ayahs: 8, type: "مكية" },
    { number: 103, name: "العصر", ayahs: 3, type: "مكية" },
    { number: 104, name: "الهمزة", ayahs: 9, type: "مكية" },
    { number: 105, name: "الفيل", ayahs: 5, type: "مكية" },
    { number: 106, name: "قريش", ayahs: 4, type: "مكية" },
    { number: 107, name: "الماعون", ayahs: 7, type: "مكية" },
    { number: 108, name: "الكوثر", ayahs: 3, type: "مكية" },
    { number: 109, name: "الكافرون", ayahs: 6, type: "مكية" },
    { number: 110, name: "النصر", ayahs: 3, type: "مدنية" },
    { number: 111, name: "المسد", ayahs: 5, type: "مكية" },
    { number: 112, name: "الإخلاص", ayahs: 4, type: "مكية" },
    { number: 113, name: "الفلق", ayahs: 5, type: "مكية" },
    { number: 114, name: "الناس", ayahs: 6, type: "مكية" }
];

// ==========================================================================
// 1.1 فهرس أجزاء القرآن الكريم الثلاثين
// ==========================================================================
const QURAN_JUZS = [
    { number: 1, name: "الجزء الأول (الم)", surahNumber: 1, surahName: "الفاتحة", ayahNumber: 1 },
    { number: 2, name: "الجزء الثاني (سَيَقُولُ)", surahNumber: 2, surahName: "البقرة", ayahNumber: 142 },
    { number: 3, name: "الجزء الثالث (تِلْكَ الرُّسُلُ)", surahNumber: 2, surahName: "البقرة", ayahNumber: 253 },
    { number: 4, name: "الجزء الرابع (لَنْ تَنَالُوا)", surahNumber: 3, surahName: "آل عمران", ayahNumber: 93 },
    { number: 5, name: "الجزء الخامس (وَالْمُحْصَنَاتُ)", surahNumber: 4, surahName: "النساء", ayahNumber: 24 },
    { number: 6, name: "الجزء السادس (لَا يُحِبُّ اللَّهُ)", surahNumber: 4, surahName: "النساء", ayahNumber: 148 },
    { number: 7, name: "الجزء السابع (وَإِذَا سَمِعُوا)", surahNumber: 5, surahName: "المائدة", ayahNumber: 82 },
    { number: 8, name: "الجزء الثامن (وَلَوْ أَنَّنَا)", surahNumber: 6, surahName: "الأنعام", ayahNumber: 111 },
    { number: 9, name: "الجزء التاسع (قَالَ الْمَلَأُ)", surahNumber: 7, surahName: "الأعراف", ayahNumber: 88 },
    { number: 10, name: "الجزء العاشر (وَاعْلَمُوا)", surahNumber: 8, surahName: "الأنفال", ayahNumber: 41 },
    { number: 11, name: "الجزء الحادي عشر (يَعْتَذِرُونَ)", surahNumber: 9, surahName: "التوبة", ayahNumber: 93 },
    { number: 12, name: "الجزء الثاني عشر (وَمَا مِنْ دَابَّةٍ)", surahNumber: 11, surahName: "هود", ayahNumber: 6 },
    { number: 13, name: "الجزء الثالث عشر (وَمَا أُبَرِّئُ)", surahNumber: 12, surahName: "يوسف", ayahNumber: 53 },
    { number: 14, name: "الجزء الرابع عشر (رُبَمَا)", surahNumber: 15, surahName: "الحجر", ayahNumber: 1 },
    { number: 15, name: "الجزء الخامس عشر (سُبْحَانَ الَّذِي)", surahNumber: 17, surahName: "الإسراء", ayahNumber: 1 },
    { number: 16, name: "الجزء السادس عشر (قَالَ أَلَمْ)", surahNumber: 18, surahName: "الكهف", ayahNumber: 75 },
    { number: 17, name: "الجزء السابع عشر (اقْتَرَبَ)", surahNumber: 21, surahName: "الأنبياء", ayahNumber: 1 },
    { number: 18, name: "الجزء الثامن عشر (قَدْ أَفْلَحَ)", surahNumber: 23, surahName: "المؤمنون", ayahNumber: 1 },
    { number: 19, name: "الجزء التاسع عشر (وَقَالَ الَّذِينَ)", surahNumber: 25, surahName: "الفرقان", ayahNumber: 21 },
    { number: 20, name: "الجزء العشرون (أَمَّنْ خَلَقَ)", surahNumber: 27, surahName: "النمل", ayahNumber: 60 },
    { number: 21, name: "الجزء الحادي والعشرون (اتْلُ مَا أُوحِيَ)", surahNumber: 29, surahName: "العنكبوت", ayahNumber: 46 },
    { number: 22, name: "الجزء الثاني والعشرون (وَمَنْ يَقْنُتْ)", surahNumber: 33, surahName: "الأحزاب", ayahNumber: 31 },
    { number: 23, name: "الجزء الثالث والعشرون (وَمَا لِيَ)", surahNumber: 36, surahName: "يس", ayahNumber: 28 },
    { number: 24, name: "الجزء الرابع والعشرون (فَمَنْ أَظْلَمُ)", surahNumber: 39, surahName: "الزمر", ayahNumber: 32 },
    { number: 25, name: "الجزء الخامس والعشرون (إِلَيْهِ يُرَدُّ)", surahNumber: 41, surahName: "فصلت", ayahNumber: 47 },
    { number: 26, name: "الجزء السادس والعشرون (حم)", surahNumber: 46, surahName: "الأحقاف", ayahNumber: 1 },
    { number: 27, name: "الجزء السابع والعشرون (قَالَ فَمَا خَطْبُكُمْ)", surahNumber: 51, surahName: "الذاريات", ayahNumber: 31 },
    { number: 28, name: "الجزء الثامن والعشرون (قَدْ سَمِعَ)", surahNumber: 58, surahName: "المجادلة", ayahNumber: 1 },
    { number: 29, name: "الجزء التاسع والعشرون (تَبَارَكَ)", surahNumber: 67, surahName: "الملك", ayahNumber: 1 },
    { number: 30, name: "الجزء الثلاثون (عَمَّ يَتَسَاءَلُونَ)", surahNumber: 78, surahName: "النبأ", ayahNumber: 1 }
];

const OFFLINE_SURAHS_DATA = {
    1: [
        { numberInSurah: 1, text: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ" },
        { numberInSurah: 2, text: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ" },
        { numberInSurah: 3, text: "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ" },
        { numberInSurah: 4, text: "مَٰلِكِ يَوْمِ ٱلدِّينِ" },
        { numberInSurah: 5, text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ" },
        { numberInSurah: 6, text: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ" },
        { numberInSurah: 7, text: "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ" }
    ],
    97: [
        { numberInSurah: 1, text: "إِنَّآ أَنزَلْنَٰهُ فِى لَيْلَةِ ٱلْقَدْرِ" },
        { numberInSurah: 2, text: "وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ" },
        { numberInSurah: 3, text: "لَيْلَةُ ٱلْقَدْرِ خَيْرٌۭ مِّنْ أَلْفِ شَهْرٍۢ" },
        { numberInSurah: 4, text: "تَنَزَّلُ ٱلْمَلَٰٓئِكَةُ وَٱلرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍۢ" },
        { numberInSurah: 5, text: "سَلَٰمٌ هِىَ حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ" }
    ],
    103: [
        { numberInSurah: 1, text: "وَٱلْعَصْرِ" },
        { numberInSurah: 2, text: "إِنَّ ٱلْإِنسَٰنَ لَفِى خُسْرٍ" },
        { numberInSurah: 3, text: "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ وَتَوَاصَوْا۟ بِٱلْحَقِّ وَتَوَاصَوْا۟ بِٱلصَّبْرِ" }
    ],
    108: [
        { numberInSurah: 1, text: "إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ" },
        { numberInSurah: 2, text: "فَصَلِّ لِرَبِّكَ وَٱنْحَرْ" },
        { numberInSurah: 3, text: "إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ" }
    ],
    112: [
        { numberInSurah: 1, text: "قُلْ هُوَ ٱللَّهُ أَحَدٌ" },
        { numberInSurah: 2, text: "ٱللَّهُ ٱلصَّمَدُ" },
        { numberInSurah: 3, text: "لَمْ يَلِدْ وَلَمْ يُولَدْ" },
        { numberInSurah: 4, text: "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ" }
    ],
    113: [
        { numberInSurah: 1, text: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ" },
        { numberInSurah: 2, text: "مِن شَرِّ مَا خَلَقَ" },
        { numberInSurah: 3, text: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ" },
        { numberInSurah: 4, text: "وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ" },
        { numberInSurah: 5, text: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ" }
    ],
    114: [
        { numberInSurah: 1, text: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ" },
        { numberInSurah: 2, text: "مَلِكِ ٱلنَّاسِ" },
        { numberInSurah: 3, text: "إِلَٰهِ ٱلنَّاسِ" },
        { numberInSurah: 4, text: "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ" },
        { numberInSurah: 5, text: "ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ" },
        { numberInSurah: 6, text: "مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ" }
    ]
};

const HIFZ_QUIZ_BANK = [
    {
        scope: "juz_amma",
        type: "next_ayah",
        promptAyah: "عَمَّ يَتَسَآءَلُونَ",
        sourceInfo: "سورة النبأ • الآية ١",
        questionText: "ما هي الآية الكريمة التي تلي هذه الآية مباشرة؟",
        options: [
            "عَنِ ٱلنَّبَإِ ٱلْعَظِيمِ",
            "ٱلَّذِى هُمْ فِيهِ مُخْتَلِفُونَ",
            "كَلَّا سَيَعْلَمُونَ",
            "أَلَمْ نَجْعَلِ ٱلْأَرْضَ مِهَٰدًۭا"
        ],
        correctIndex: 0,
        explanation: "قال تعالى في مطلع سورة النبأ: ﴿عَمَّ يَتَسَآءَلُونَ ۝ عَنِ ٱلنَّبَإِ ٱلْعَظِيمِ﴾."
    },
    {
        scope: "juz_amma",
        type: "next_ayah",
        promptAyah: "وَٱلنَّٰزِعَٰتِ غَرْقًۭا",
        sourceInfo: "سورة النازعات • الآية ١",
        questionText: "ما هي الآية التالية لقوله تعالى: «وَٱلنَّٰزِعَٰتِ غَرْقًۭا»؟",
        options: [
            "وَٱلنَّٰشِطَٰتِ نَشْطًۭا",
            "وَٱلسَّٰبِحَٰتِ سَبْحًۭا",
            "فَٱلسَّٰبِقَٰتِ سَبْقًۭا",
            "فَٱلْمُدَبِّرَٰتِ أَمْرًۭا"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿وَٱلنَّٰزِعَٰتِ غَرْقًۭا ۝ وَٱلنَّٰشِطَٰتِ نَشْطًۭا﴾ في أوائل سورة النازعات."
    },
    {
        scope: "juz_amma",
        type: "surah_name",
        promptAyah: "إِذَا ٱلشَّمْسُ كُوِّرَتْ ۝ وَإِذَا ٱلنُّجُومُ ٱنكَدَرَتْ",
        sourceInfo: "القرآن الكريم",
        questionText: "في أي سورة كريمة وردت هذه الآيات العظيمة؟",
        options: [
            "سورة التكوير",
            "سورة الانفطار",
            "سورة الانشقاق",
            "سورة البروج"
        ],
        correctIndex: 0,
        explanation: "هذا مطلع سورة التكوير المباركة."
    },
    {
        scope: "juz_amma",
        type: "next_ayah",
        promptAyah: "إِذَا ٱلسَّمَآءُ ٱنفَطَرَتْ",
        sourceInfo: "سورة الانفطار • الآية ١",
        questionText: "أكمل الآية المباركة التالية:",
        options: [
            "وَإِذَا ٱلْكَوَاكِبُ ٱنتَثَرَتْ",
            "وَإِذَا ٱلْبِحَارُ فُجِّرَتْ",
            "وَإِذَا ٱلْقُبُورُ بُعْثِرَتْ",
            "عَلِمَتْ نَفْسٌۭ مَّا قَدَّمَتْ وَأَخَّرَتْ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى في سورة الانفطار: ﴿إِذَا ٱلسَّمَآءُ ٱنفَطَرَتْ ۝ وَإِذَا ٱلْكَوَاكِبُ ٱنتَثَرَتْ﴾."
    },
    {
        scope: "juz_amma",
        type: "next_ayah",
        promptAyah: "سَبِّحِ ٱسْمَ رَبِّكَ ٱلْأَعْلَى",
        sourceInfo: "سورة الأعلى • الآية ١",
        questionText: "ما هي الآية الكريمة التي تليها مباشرة؟",
        options: [
            "ٱلَّذِى خَلَقَ فَسَوَّىٰ",
            "وَٱلَّذِى قَدَّرَ فَهَدَىٰ",
            "وَٱلَّذِىٓ أَخْرَجَ ٱلْمَرْعَىٰ",
            "فَجَعَلَهُۥ غُثَآءً أَحْوَىٰ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿سَبِّحِ ٱسْمَ رَبِّكَ ٱلْأَعْلَى ۝ ٱلَّذِى خَلَقَ فَسَوَّىٰ﴾."
    },
    {
        scope: "juz_amma",
        type: "surah_name",
        promptAyah: "هَلْ أَتَىٰكَ حَدِيثُ ٱلْغَاشِيَةِ",
        sourceInfo: "القرآن الكريم",
        questionText: "في أي سورة وردت هذه الآية المباركة؟",
        options: [
            "سورة الغاشية",
            "سورة الفجر",
            "سورة البلد",
            "سورة الطارق"
        ],
        correctIndex: 0,
        explanation: "الآية الأولى من سورة الغاشية."
    },
    {
        scope: "juz_amma",
        type: "next_ayah",
        promptAyah: "وَٱلْفَجْرِ ۝ وَلَيَالٍ عَشْرٍۢ",
        sourceInfo: "سورة الفجر • الآيتان ١-٢",
        questionText: "ما الآية التي تلي هاتين الآيتين مباشرة؟",
        options: [
            "وَٱلشَّفْعِ وَٱلْوَتْرِ",
            "وَٱلَّيْلِ إِذَا يَسْرِ",
            "هَلْ فِى ذَٰلِكَ قَسَمٌۭ لِّذِى حِجْرٍ",
            "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى في سورة الفجر: ﴿وَٱلْفَجْرِ ۝ وَلَيَالٍ عَشْرٍۢ ۝ وَٱلشَّفْعِ وَٱلْوَتْرِ﴾."
    },
    {
        scope: "juz_amma",
        type: "next_ayah",
        promptAyah: "وَٱلشَّمْسِ وَضُحَىٰهَا",
        sourceInfo: "سورة الشمس • الآية ١",
        questionText: "ما هي الآية المباركة التالية؟",
        options: [
            "وَٱلْقَمَرِ إِذَا تَلَىٰهَا",
            "وَٱلنَّهَارِ إِذَا جَلَّىٰهَا",
            "وَٱلَّيْلِ إِذَا يَغْشَىٰهَا",
            "وَٱلسَّمَآءِ وَمَا بَنَىٰهَا"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿وَٱلشَّمْسِ وَضُحَىٰهَا ۝ وَٱلْقَمَرِ إِذَا تَلَىٰهَا﴾."
    },
    {
        scope: "juz_amma",
        type: "next_ayah",
        promptAyah: "إِنَّآ أَنزَلْنَٰهُ فِى لَيْلَةِ ٱلْقَدْرِ",
        sourceInfo: "سورة القدر • الآية ١",
        questionText: "أكمل الآية الكريمة التالية مباشرة:",
        options: [
            "وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ",
            "لَيْلَةُ ٱلْقَدْرِ خَيْرٌۭ مِّنْ أَلْفِ شَهْرٍۢ",
            "تَنَزَّلُ ٱلْمَلَٰٓئِكَةُ وَٱلرُّوحُ فِيهَا",
            "سَلَٰمٌ هِىَ حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿إِنَّآ أَنزَلْنَٰهُ فِى لَيْلَةِ ٱلْقَدْرِ ۝ وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ﴾."
    },
    {
        scope: "surah_kahf",
        type: "next_ayah",
        promptAyah: "ٱلْحَمْدُ لِلَّهِ ٱلَّذِىٓ أَنزَلَ عَلَىٰ عَبْدِهِ ٱلْكِتَٰبَ وَلَمْ يَجْعَل لَّهُۥ عِوَجَاۜ",
        sourceInfo: "سورة الكهف • الآية ١",
        questionText: "ما هي الآية المباركة التي تليها مباشرة؟",
        options: [
            "قَيِّمًۭا لِّيُنذِرَ بَأْسًۭا شَدِيدًۭا مِّن لَّدُنْهُ وَيُبَشِّرَ ٱلْمُؤْمِنِينَ",
            "مَّٰكِثِينَ فِيهِ أَبَدًۭا",
            "وَيُنذِرَ ٱلَّذِينَ قَالُوا۟ ٱتَّخَذَ ٱللَّهُ وَلَدًۭا",
            "فَلَعَلَّكَ بَٰخِعٌۭ نَّفْسَكَ عَلَىٰٓ ءَاثَٰرِهِمْ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى في مطلع الكهف: ﴿وَلَمْ يَجْعَل لَّهُۥ عِوَجَاۜ ۝ قَيِّمًۭا لِّيُنذِرَ بَأْسًۭا شَدِيدًۭا مِّن لَّدُنْهُ﴾."
    },
    {
        scope: "surah_yasin",
        type: "next_ayah",
        promptAyah: "يسٓ ۝ وَٱلْقُرْءَانِ ٱلْحَكِيمِ",
        sourceInfo: "سورة يس • الآيتان ١-٢",
        questionText: "ما هي الآية الكريمة التالية؟",
        options: [
            "إِنَّكَ لَمِنَ ٱلْمُرْسَلِينَ",
            "عَلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ",
            "تَنزِيلَ ٱلْعَزِيزِ ٱلرَّحِيمِ",
            "لِتُنذِرَ قَوْمًۭا مَّآ أُنذِرَ ءَابَآؤُهُمْ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿يسٓ ۝ وَٱلْقُرْءَانِ ٱلْحَكِيمِ ۝ إِنَّكَ لَمِنَ ٱلْمُرْسَلِينَ﴾."
    },
    {
        scope: "surah_mulk",
        type: "next_ayah",
        promptAyah: "تَبَٰرَكَ ٱلَّذِى بِيَدِهِ ٱلْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ",
        sourceInfo: "سورة الملك • الآية ١",
        questionText: "ما هي الآية المباركة التالية مباشرة؟",
        options: [
            "ٱلَّذِى خَلَقَ ٱلْمَوْتَ وَٱلْحَيَوٰةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًۭا ۚ وَهُوَ ٱلْعَزِيزُ ٱلْغَفُورُ",
            "ٱلَّذِى خَلَقَ سَبْعَ سَمَٰوَٰتٍۢ طِبَاقًۭا",
            "مَّا تَرَىٰ فِى خَلْقِ ٱلرَّحْمَٰنِ مِن تَفَٰوُتٍۢ",
            "وَلَقَدْ زَيَّنَّا ٱلسَّمَآءَ ٱلدُّنْيَا بِمَصَٰبِيحَ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى في سورة الملك: ﴿تَبَٰرَكَ ٱلَّذِى بِيَدِهِ ٱلْمُلْكُ... ۝ ٱلَّذِى خَلَقَ ٱلْمَوْتَ وَٱلْحَيَوٰةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًۭا﴾."
    },
    {
        scope: "surah_waqiah",
        type: "next_ayah",
        promptAyah: "إِذَا وَقَعَتِ ٱلْوَاقِعَةُ",
        sourceInfo: "سورة الواقعة • الآية ١",
        questionText: "ما هي الآية المباركة التالية؟",
        options: [
            "لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ",
            "خَافِضَةٌۭ رَّافِعَةٌ",
            "إِذَا رُجَّتِ ٱلْأَرْضُ رَجًّۭا",
            "وَبُسَّتِ ٱلْجِبَالُ بَسًّۭا"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿إِذَا وَقَعَتِ ٱلْوَاقِعَةُ ۝ لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ﴾."
    },
    {
        scope: "surah_rahman",
        type: "next_ayah",
        promptAyah: "ٱلرَّحْمَٰنُ ۝ عَلَّمَ ٱلْقُرْءَانَ",
        sourceInfo: "سورة الرحمن • الآيتان ١-٢",
        questionText: "ما الآية التي تلي هاتين الآيتين مباشرة؟",
        options: [
            "خَلَقَ ٱلْإِنسَٰنَ",
            "عَلَّمَهُ ٱلْبَيَانَ",
            "ٱلشَّمْسُ وَٱلْقَمَرُ بِحُسْبَانٍۢ",
            "وَٱلنَّجْمُ وَٱلشَّجَرُ يَسْجُدَانِ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى في مطلع الرحمن: ﴿ٱلرَّحْمَٰنُ ۝ عَلَّمَ ٱلْقُرْءَانَ ۝ خَلَقَ ٱلْإِنسَٰنَ ۝ عَلَّمَهُ ٱلْبَيَانَ﴾."
    },
    {
        scope: "surah_fatiha_baqarah_intro",
        type: "next_ayah",
        promptAyah: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        sourceInfo: "سورة الفاتحة • الآية ٥",
        questionText: "ما هي الآية الكريمة التي تليها مباشرة؟",
        options: [
            "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
            "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
            "مَٰلِكِ يَوْمِ ٱلدِّينِ",
            "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى في سورة الفاتحة: ﴿إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ﴾."
    },
    {
        scope: "juz_tabarak",
        type: "next_ayah",
        promptAyah: "نٓ ۚ وَٱلْقَلَمِ وَمَا يَسْطُرُونَ",
        sourceInfo: "سورة القلم • الآية ١",
        questionText: "ما هي الآية المباركة التالية مباشرة؟",
        options: [
            "مَآ أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍۢ",
            "وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍۢ",
            "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍۢ",
            "فَسَتُبْصِرُ وَيُبْصِرُونَ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى في مطلع القلم: ﴿نٓ ۚ وَٱلْقَلَمِ وَمَا يَسْطُرُونَ ۝ مَآ أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍۢ﴾."
    },
    {
        scope: "juz_tabarak",
        type: "next_ayah",
        promptAyah: "ٱلْحَآقَّةُ ۝ مَا ٱلْحَآقَّةُ",
        sourceInfo: "سورة الحاقة • الآيتان ١-٢",
        questionText: "أكمل الآية الكريمة التالية مباشرة:",
        options: [
            "وَمَآ أَدْرَىٰكَ مَا ٱلْحَآقَّةُ",
            "كَذَّبَتْ ثَمُودُ وَعَادٌۢ بِٱلْقَارِعَةِ",
            "فَأَمَّا ثَمُودُ فَأُهْلِكُوا۟ بِٱلطَّاغِيَةِ",
            "وَأَمَّا عَادٌۭ فَأُهْلِكُوا۟ بِرِيحٍ صَرْصَرٍ عَاتِيَةٍۢ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى في سورة الحاقة: ﴿ٱلْحَآقَّةُ ۝ مَا ٱلْحَآقَّةُ ۝ وَمَآ أَدْرَىٰكَ مَا ٱلْحَآقَّةُ﴾."
    },
    {
        scope: "juz_tabarak",
        type: "next_ayah",
        promptAyah: "يَٰٓأَيُّهَا ٱلْمُزَّمِّلُ",
        sourceInfo: "سورة المزمل • الآية ١",
        questionText: "ما الآية التي تلي النداء الإلهي في سورة المزمل؟",
        options: [
            "قُمِ ٱلَّيْلَ إِلَّا قَلِيلًۭا",
            "نِّصْفَهُۥٓ أَوِ ٱنقُصْ مِنْهُ قَلِيلًا",
            "أَوْ زِدْ عَلَيْهِ وَرَتِّلِ ٱلْقُرْءَانَ تَرْتِيلًا",
            "إِنَّا سَنُلْقِى عَلَيْكَ قَوْلًۭا ثَقِيلًا"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿يَٰٓأَيُّهَا ٱلْمُزَّمِّلُ ۝ قُمِ ٱلَّيْلَ إِلَّا قَلِيلًۭا﴾."
    },
    {
        scope: "juz_tabarak",
        type: "next_ayah",
        promptAyah: "يَٰٓأَيُّهَا ٱلْمُدَّثِّرُ",
        sourceInfo: "سورة المدثر • الآية ١",
        questionText: "ما هي الآية الكريمة التالية؟",
        options: [
            "قُمْ فَأَنذِرْ",
            "وَرَبَّكَ فَكَبِّرْ",
            "وَثِيَابَكَ فَطَهِّرْ",
            "وَٱلرُّجْزَ فَٱهْجُرْ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى في مطلع المدثر: ﴿يَٰٓأَيُّهَا ٱلْمُدَّثِّرُ ۝ قُمْ فَأَنذِرْ﴾."
    },
    {
        scope: "juz_tabarak",
        type: "next_ayah",
        promptAyah: "لَآ أُقْسِمُ بِيَوْمِ ٱلْقِيَٰمَةِ",
        sourceInfo: "سورة القيامة • الآية ١",
        questionText: "ما هي الآية الكريمة التالية في سورة القيامة؟",
        options: [
            "وَلَآ أُقْسِمُ بِٱلنَّفْسِ ٱللَّوَّامَةِ",
            "أَيَحْسَبُ ٱلْإِنسَٰنُ أَلَّن نَّجْمَعَ عِظَامَهُۥ",
            "بَلَىٰ قَٰدِرِينَ عَلَىٰٓ أَن نُّسَوِّىَ بَنَانَهُۥ",
            "بَلْ يُرِيدُ ٱلْإِنسَٰنُ لِيَفْجُرَ أَمَامَهُۥ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿لَآ أُقْسِمُ بِيَوْمِ ٱلْقِيَٰمَةِ ۝ وَلَآ أُقْسِمُ بِٱلنَّفْسِ ٱللَّوَّامَةِ﴾."
    },
    {
        scope: "juz_tabarak",
        type: "surah_name",
        promptAyah: "هَلْ أَتَىٰ عَلَى ٱلْإِنسَٰنِ حِينٌۭ مِّنَ ٱلدَّهْرِ لَمْ يَكُن شَيْـًۭٔا مَّذْكُورًا",
        sourceInfo: "القرآن الكريم",
        questionText: "في أي سورة وردت هذه الآية المباركة؟",
        options: [
            "سورة الإنسان",
            "سورة القيامة",
            "سورة المرسلات",
            "سورة النبأ"
        ],
        correctIndex: 0,
        explanation: "هذا مطلع سورة الإنسان (الدهر) المباركة."
    },
    {
        scope: "surah_fatiha_baqarah_intro",
        type: "next_ayah",
        promptAyah: "الٓمٓ ۝ ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ",
        sourceInfo: "سورة البقرة • الآيتان ١-٢",
        questionText: "ما الآية التي تلي هاتين الآيتين في مطلع سورة البقرة؟",
        options: [
            "ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ",
            "وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ",
            "أُو۟لَٰٓئِكَ عَلَىٰ هُدًۭى مِّن رَّبِّهِمْ ۖ وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ",
            "إِنَّ ٱلَّذِينَ كَفَرُوا۟ سَوَآءٌ عَلَيْهِمْ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ ۝ ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ﴾."
    },
    {
        scope: "surah_fatiha_baqarah_intro",
        type: "next_ayah",
        promptAyah: "يَٰٓأَيُّهَا ٱلنَّاسُ ٱعْبُدُوا۟ رَبَّكُمُ ٱلَّذِى خَلَقَكُمْ وَٱلَّذِينَ مِن قَبْلِكُمْ",
        sourceInfo: "سورة البقرة • الآية ٢١",
        questionText: "بمَ خُتمت هذه الآية الكريمة؟",
        options: [
            "لَعَلَّكُمْ تَتَّقُونَ",
            "لَعَلَّكُمْ تَشْكُرُونَ",
            "إِنَّ ٱللَّهَ عَلِيمٌۢ بِذَاتِ ٱلصُّدُورِ",
            "وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿يَٰٓأَيُّهَا ٱلنَّاسُ ٱعْبُدُوا۟ رَبَّكُمُ ٱلَّذِى خَلَقَكُمْ وَٱلَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ﴾."
    },
    {
        scope: "surah_kahf",
        type: "next_ayah",
        promptAyah: "أَمْ حَسِبْتَ أَنَّ أَصْحَٰبَ ٱلْكَهْفِ وَٱلرَّقِيمِ كَانُوا۟ مِنْ ءَايَٰتِنَا عَجَبًا",
        sourceInfo: "سورة الكهف • الآية ٩",
        questionText: "ما هي الآية التالية مباشرة؟",
        options: [
            "إِذْ أَوَى ٱلْفِتْيَةُ إِلَى ٱلْكَهْفِ فَقَالُوا۟ رَبَّنَآ ءَاتِنَا مِن لَّدُنكَ رَحْمَةًۭ وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًۭا",
            "فَضَرَبْنَا عَلَىٰٓ ءَاذَانِهِمْ فِى ٱلْكَهْفِ سِنِينَ عَدَدًۭا",
            "ثُمَّ بَعَثْنَٰهُمْ لِنَعْلَمَ أَىُّ ٱلْحِزْبَيْنِ أَحْصَىٰ",
            "نَّحْنُ نَقُصُّ عَلَيْكَ نَبَأَهُم بِٱلْحَقِّ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿أَمْ حَسِبْتَ أَنَّ أَصْحَٰبَ ٱلْكَهْفِ وَٱلرَّقِيمِ كَانُوا۟ مِنْ ءَايَٰتِنَا عَجَبًا ۝ إِذْ أَوَى ٱلْفِتْيَةُ إِلَى ٱلْكَهْفِ...﴾."
    },
    {
        scope: "surah_kahf",
        type: "next_ayah",
        promptAyah: "قُل لَّوْ كَانَ ٱلْبَحْرُ مِدَادًۭا لِّكَلِمَٰتِ رَبِّى",
        sourceInfo: "سورة الكهف • الآية ١٠٩",
        questionText: "أكمل الآية الكريمة التالية:",
        options: [
            "لَنَفِدَ ٱلْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَٰتُ رَبِّى وَلَوْ جِئْنَا بِمِثْلِهِۦ مَدَدًۭا",
            "قُلْ إِنَّمَآ أَنَا۠ بَشَرٌۭ مِّثْلُكُمْ يُوحَىٰٓ إِلَىَّ",
            "فَمَن كَانَ يَرْجُوا۟ لِقَآءَ رَبِّهِۦ فَلْيَعْمَلْ عَمَلًۭا صَٰلِحًۭا",
            "وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِۦٓ أَحَدًۢا"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿قُل لَّوْ كَانَ ٱلْبَحْرُ مِدَادًۭا لِّكَلِمَٰتِ رَبِّى لَنَفِدَ ٱلْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَٰتُ رَبِّى وَلَوْ جِئْنَا بِمِثْلِهِۦ مَدَدًۭا﴾."
    },
    {
        scope: "surah_yasin",
        type: "next_ayah",
        promptAyah: "وَجَآءَ مِنْ أَقْصَا ٱلْمَدِينَةِ رَجُلٌۭ يَسْعَىٰ قَالَ يَٰقَوْمِ ٱتَّبِعُوا۟ ٱلْمُرْسَلِينَ",
        sourceInfo: "سورة يس • الآية ٢٠",
        questionText: "ما هي الآية المباركة التالية؟",
        options: [
            "ٱتَّبِعُوا۟ مَن لَّا يَسْـَٔلُكُمْ أَجْرًۭا وَهُم مُّهْتَدُونَ",
            "وَمَا لِىَ لَآ أَعْبُدُ ٱلَّذِى فَطَرَنِى وَإِلَيْهِ تُرْجَعُونَ",
            "ءَأَتَّخِذُ مِن دُونِهِۦٓ ءَالِهَةً",
            "قِيلَ ٱدْخُلِ ٱلْجَنَّةَ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿وَجَآءَ مِنْ أَقْصَا ٱلْمَدِينَةِ رَجُلٌۭ يَسْعَىٰ قَالَ يَٰقَوْمِ ٱتَّبِعُوا۟ ٱلْمُرْسَلِينَ ۝ ٱتَّبِعُوا۟ مَن لَّا يَسْـَٔلُكُمْ أَجْرًۭا وَهُم مُّهْتَدُونَ﴾."
    },
    {
        scope: "surah_mulk",
        type: "next_ayah",
        promptAyah: "هُوَ ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ ذَلُولًۭا فَٱمْشُوا۟ فِى مَنَاكِبِهَا",
        sourceInfo: "سورة الملك • الآية ١٥",
        questionText: "بمَ تتمة هذه الآية الكريمة المباركة؟",
        options: [
            "وَكُلُوا۟ مِن رِّزْقِهِۦ ۖ وَإِلَيْهِ ٱلنُّشُورُ",
            "ءَأَمِنتُم مَّن فِى ٱلسَّمَآءِ أَن يَخْسِفَ بِكُمُ ٱلْأَرْضَ",
            "أَمْ أَمِنتُم مَّن فِى ٱلسَّمَآءِ أَن يُرْسِلَ عَلَيْكُمْ حَاصِبًۭا",
            "وَلَقَدْ كَذَّبَ ٱلَّذِينَ مِن قَبْلِهِمْ فَكَيْفَ كَانَ نَكِيرِ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿هُوَ ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ ذَلُولًۭا فَٱمْشُوا۟ فِى مَنَاكِبِهَا وَكُلُوا۟ مِن رِّزْقِهِۦ ۖ وَإِلَيْهِ ٱلنُّشُورُ﴾."
    }
];

function normalizeArabic(text) {
    if (!text) return '';
    return text
        .replace(/[\u064B-\u065F\u0670]/g, '')
        .replace(/[أإآٱ]/g, 'ا')
        .replace(/ة/g, 'ه')
        .replace(/ى/g, 'ي')
        .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString())
        .trim()
        .toLowerCase();
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function toArabicDigits(num) {
    const arabicMap = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return String(num).split('').map(d => arabicMap[d] || d).join('');
}

function copyToClipboard(text, successMsg = 'تم النسخ!') {
    navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg, 'success');
    }).catch(() => {
        showToast('تعذر النسخ التلقائي، يمكنك نسخ النص يدوياً.', 'error');
    });
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-triangle-exclamation';

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${escapeHtml(message)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(15px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

let audioCtx = null;
function playCelebrationSound() {
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
        osc.frequency.setValueAtTime(880.00, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.35);
    } catch (e) {}
}

// ==========================================================================
// 2. تشغيل المقرأة والمصحف المعلم عند تحميل الصفحة
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    initBackToTop();
    initMaqraahEngine();

    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

function initTheme() {
    const savedTheme = localStorage.getItem('sheikh_theme') || 'light';
    setTheme(savedTheme);

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(nextTheme);
            localStorage.setItem('sheikh_theme', nextTheme);
            showToast(nextTheme === 'dark' ? 'تم تفعيل الوضع الليلي 🌙' : 'تم تفعيل الوضع النهاري ☀️');
        });
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.className = (theme === 'dark') ? 'fa-solid fa-sun theme-icon' : 'fa-solid fa-moon theme-icon';
    }
}

function initMobileNav() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (mobileBtn && navMenu) {
        const closeMobileMenu = () => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
                mobileBtn.setAttribute('aria-expanded', 'false');
            }
        };

        const toggleMobileMenu = (e) => {
            if (e) e.stopPropagation();
            const isOpen = navMenu.classList.toggle('open');
            mobileBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
            mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        };

        mobileBtn.addEventListener('click', toggleMobileMenu);

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close when clicking outside
        ['click', 'touchstart'].forEach(evt => {
            document.addEventListener(evt, (e) => {
                if (navMenu.classList.contains('open')) {
                    if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
                        closeMobileMenu();
                    }
                }
            }, { passive: true });
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('open')) {
                closeMobileMenu();
            }
        });
    }
}

function initBackToTop() {
    const backBtn = document.getElementById('backToTopBtn');
    if (backBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backBtn.classList.add('visible');
            } else {
                backBtn.classList.remove('visible');
            }
        }, { passive: true });

        backBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// ==========================================================================
// 3. المحرك الرئيسي للمقرأة القرآنية
// ==========================================================================
function initMaqraahEngine() {
    const maqraahSection = document.getElementById('maqraahSection');
    if (!maqraahSection) return;

    const quranState = {
        currentSurah: 1,
        currentReciter: 'ar.husary',
        repeatCountTarget: 1,
        currentAyahPlayRepeat: 0,
        currentPlayingAyahIndex: -1,
        ayahsData: [],
        audioPlayer: null,
        isPlaying: false,
        isBlindMode: false,
        fontSizeLevel: 2,
        viewMode: localStorage.getItem('sheikh_quran_view_mode') || 'pages', // 'pages' | 'focus' | 'continuous'
        pageSize: parseInt(localStorage.getItem('sheikh_quran_page_size'), 10) || 15,
        currentPage: 0,
        currentFocusAyahIndex: 0
    };

    const surahCache = new Map();

    const surahSelect = document.getElementById('quranSurahSelect');
    const reciterSelect = document.getElementById('quranReciterSelect');
    const repeatSelect = document.getElementById('quranRepeatSelect');
    const blindToggleBtn = document.getElementById('blindReciteToggle');
    const blindNotice = document.getElementById('blindModeNotice');
    const playSurahBtn = document.getElementById('quranPlaySurahBtn');
    const stopBtn = document.getElementById('quranStopBtn');
    const zoomInBtn = document.getElementById('quranZoomInBtn');
    const zoomOutBtn = document.getElementById('quranZoomOutBtn');
    const versesContainer = document.getElementById('quranVersesContainer');

    // أدوات أوضاع العرض وتقسيم الصفحات
    const viewModePagesBtn = document.getElementById('viewModePagesBtn');
    const viewModeFocusBtn = document.getElementById('viewModeFocusBtn');
    const viewModeContinuousBtn = document.getElementById('viewModeContinuousBtn');
    const pageSizeSelect = document.getElementById('quranPageSizeSelect');
    const pageSizePickerWrap = document.getElementById('pageSizePickerWrap');

    const paginationTop = document.getElementById('quranPaginationTop');
    const paginationBottom = document.getElementById('quranPaginationBottom');
    const pageIndicatorTop = document.getElementById('quranPageIndicatorTop');
    const pageIndicatorBottom = document.getElementById('quranPageIndicatorBottom');
    const ayahRangeTop = document.getElementById('quranAyahRangeTop');
    const ayahRangeBottom = document.getElementById('quranAyahRangeBottom');
    const prevPageBtnTop = document.getElementById('quranPrevPageBtnTop');
    const nextPageBtnTop = document.getElementById('quranNextPageBtnTop');
    const prevPageBtnBottom = document.getElementById('quranPrevPageBtnBottom');
    const nextPageBtnBottom = document.getElementById('quranNextPageBtnBottom');
    const quickAyahInputTop = document.getElementById('quickAyahInputTop');
    const quickAyahJumpBtnTop = document.getElementById('quickAyahJumpBtnTop');
    const readingProgressBar = document.getElementById('quranReadingProgressBar');

    const surahSearchInput = document.getElementById('surahSearchInput');
    const surahSearchClearBtn = document.getElementById('surahSearchClearBtn');
    const surahSearchDropdown = document.getElementById('surahSearchDropdown');

    const surahTitleDisplay = document.getElementById('surahTitleDisplay');
    const surahMetaType = document.getElementById('surahMetaType');
    const surahSubtitleInfo = document.getElementById('surahSubtitleInfo');
    const surahBasmalaBanner = document.getElementById('surahBasmalaBanner');

    const floatingAudioBar = document.getElementById('quranFloatingAudioBar');
    const audioCurrentAyahBadge = document.getElementById('audioCurrentAyahBadge');
    const audioCurrentReciter = document.getElementById('audioCurrentReciter');
    const audioRepeatBadge = document.getElementById('audioRepeatBadge');
    const audioPrevBtn = document.getElementById('audioPrevAyahBtn');
    const audioPlayPauseBtn = document.getElementById('audioTogglePlayBtn');
    const audioNextBtn = document.getElementById('audioNextAyahBtn');
    const audioCloseBtn = document.getElementById('audioCloseBtn');

    const reciterDisplayNames = {
        'ar.husary': 'محمود خليل الحصري (المصحف المعلم)',
        'ar.minshawi': 'محمد صديق المنشاوي (مرتل)',
        'ar.abdulbasitmurattal': 'عبد الباسط عبد الصمد (مرتل)',
        'ar.hudhaify': 'علي بن عبد الرحمن الحذيفي',
        'ar.mahermuaiqly': 'ماهر المعيقلي',
        'ar.alafasy': 'مشاري بن راشد العفاسي',
        'ar.saadalghamdi': 'سعد الغامدي',
        'ar.abdullahbasfar': 'عبد الله بصفر (تعليمي)',
        'ar.shaatree': 'أبو بكر الشاطري'
    };

    const reciterAudioFolders = {
        'ar.husary': 'Husary_128kbps',
        'ar.minshawi': 'Minshawy_Murattal_128kbps',
        'ar.abdulbasitmurattal': 'Abdul_Basit_Murattal_192kbps',
        'ar.hudhaify': 'Hudhaify_128kbps',
        'ar.mahermuaiqly': 'Maher_AlMuaiqly_64kbps',
        'ar.alafasy': 'Alafasy_128kbps',
        'ar.saadalghamdi': 'Ghamadi_40kbps',
        'ar.abdullahbasfar': 'Abdullah_Basfar_192kbps',
        'ar.shaatree': 'Abu_Bakr_Ash-Shaatree_128kbps'
    };

    const audioSpeedSelect = document.getElementById('audioSpeedSelect');
    if (audioSpeedSelect) {
        audioSpeedSelect.addEventListener('change', (e) => {
            const speed = parseFloat(e.target.value) || 1.0;
            if (quranState.audioPlayer) {
                quranState.audioPlayer.playbackRate = speed;
            }
        });
    }

    // إدارة مظهر ورق المصحف الشريف
    const mushafCard = document.getElementById('mushafCard');
    const mushafThemeBtns = document.querySelectorAll('.theme-pill-btn');
    function setMushafTheme(themeKey) {
        if (!mushafCard) return;
        ['cream', 'white', 'emerald', 'dark'].forEach(t => {
            mushafCard.classList.remove(`mushaf-theme-${t}`);
        });
        mushafCard.classList.add(`mushaf-theme-${themeKey}`);
        mushafThemeBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-mushaf-theme') === themeKey);
        });
        localStorage.setItem('sheikh_mushaf_theme', themeKey);
    }
    const savedMushafTheme = localStorage.getItem('sheikh_mushaf_theme') || 'cream';
    setMushafTheme(savedMushafTheme);
    mushafThemeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const t = btn.getAttribute('data-mushaf-theme');
            if (t) setMushafTheme(t);
        });
    });

    // إدارة فاصلة القراءة المحفوظة (Bookmark)
    const bookmarkBanner = document.getElementById('quranBookmarkBanner');
    const bookmarkText = document.getElementById('quranBookmarkText');
    const resumeBookmarkBtn = document.getElementById('resumeBookmarkBtn');
    const removeBookmarkBtn = document.getElementById('removeBookmarkBtn');

    function updateBookmarkBanner() {
        const raw = localStorage.getItem('sheikh_quran_bookmark');
        if (!raw) {
            if (bookmarkBanner) bookmarkBanner.style.display = 'none';
            return;
        }
        try {
            const data = JSON.parse(raw);
            if (bookmarkBanner && bookmarkText) {
                bookmarkText.textContent = `آخر موضع قراءة محفوظ: سورة ${data.surahName} • الآية ${toArabicDigits(data.ayahNumber)}`;
                bookmarkBanner.style.display = 'flex';
            }
        } catch (e) {
            if (bookmarkBanner) bookmarkBanner.style.display = 'none';
        }
    }

    function saveBookmark(surahNumber, ayahNumber) {
        const sMeta = QURAN_SURAHS.find(s => s.number === surahNumber) || { name: 'الفاتحة' };
        const data = {
            surahNumber,
            surahName: sMeta.name,
            ayahNumber,
            timestamp: Date.now()
        };
        localStorage.setItem('sheikh_quran_bookmark', JSON.stringify(data));
        updateBookmarkBanner();
        showToast(`تم حفظ الآية ${toArabicDigits(ayahNumber)} من سورة ${sMeta.name} كفاصلة قراءة 🔖`, 'success');
    }

    if (resumeBookmarkBtn) {
        resumeBookmarkBtn.addEventListener('click', () => {
            const raw = localStorage.getItem('sheikh_quran_bookmark');
            if (!raw) return;
            try {
                const data = JSON.parse(raw);
                if (surahSelect) surahSelect.value = String(data.surahNumber);
                loadSurah(data.surahNumber).then(() => {
                    setTimeout(() => {
                        const ayahIndex = data.ayahNumber - 1;
                        if (quranState.viewMode === 'pages') {
                            goToPage(Math.floor(ayahIndex / quranState.pageSize));
                        } else if (quranState.viewMode === 'focus') {
                            goToFocusAyah(ayahIndex);
                        }
                        setTimeout(() => {
                            const el = document.querySelector(`.quran-ayah[data-index="${ayahIndex}"]`);
                            if (el) {
                                el.classList.add('playing-ayah');
                                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                setTimeout(() => el.classList.remove('playing-ayah'), 2500);
                            }
                        }, 250);
                    }, 300);
                });
                showToast(`تم الانتقال لفاصلة القراءة: سورة ${data.surahName} (الآية ${toArabicDigits(data.ayahNumber)}) 📖`);
            } catch (e) {}
        });
    }

    if (removeBookmarkBtn) {
        removeBookmarkBtn.addEventListener('click', () => {
            localStorage.removeItem('sheikh_quran_bookmark');
            updateBookmarkBanner();
            showToast('تم إزالة فاصلة القراءة.');
        });
    }
    updateBookmarkBanner();

    // إدارة نافذة التفسير الميسر المعتمد
    const tafsirModal = document.getElementById('tafsirModal');
    const tafsirModalTitle = document.getElementById('tafsirModalTitle');
    const tafsirAyahBadge = document.getElementById('tafsirAyahBadge');
    const tafsirAyahText = document.getElementById('tafsirAyahText');
    const tafsirBodyText = document.getElementById('tafsirBodyText');
    const closeTafsirModalBtn = document.getElementById('closeTafsirModalBtn');
    const tafsirPlayAyahBtn = document.getElementById('tafsirPlayAyahBtn');
    const tafsirCopyBtn = document.getElementById('tafsirCopyBtn');
    const tafsirSetBookmarkBtn = document.getElementById('tafsirSetBookmarkBtn');

    const tafsirCache = new Map();
    let currentTafsirSurah = 1;
    let currentTafsirAyah = 1;
    let currentTafsirRawText = '';

    async function openTafsirModal(surahNum, ayahNum) {
        currentTafsirSurah = surahNum;
        currentTafsirAyah = ayahNum;
        const sMeta = QURAN_SURAHS.find(s => s.number === surahNum) || { name: 'الفاتحة' };

        if (tafsirModalTitle) tafsirModalTitle.textContent = `التفسير الميسر • سورة ${sMeta.name}`;
        if (tafsirAyahBadge) tafsirAyahBadge.textContent = `الآية ${toArabicDigits(ayahNum)}`;

        const curAyahData = quranState.ayahsData ? quranState.ayahsData[ayahNum - 1] : null;
        if (tafsirAyahText) {
            tafsirAyahText.textContent = curAyahData ? curAyahData.text : '...';
        }

        if (tafsirBodyText) {
            tafsirBodyText.innerHTML = '<div class="tafsir-loading"><i class="fa-solid fa-circle-notch fa-spin gold-icon"></i> جاري جلب التفسير الميسر المبارك...</div>';
        }

        if (tafsirModal) {
            tafsirModal.style.display = 'flex';
        }

        // البحث في كاش تفسير السورة
        if (tafsirCache.has(surahNum)) {
            const surahTafsir = tafsirCache.get(surahNum);
            const ayahTafsir = surahTafsir.find(a => a.numberInSurah === ayahNum);
            if (ayahTafsir && tafsirBodyText) {
                currentTafsirRawText = ayahTafsir.text;
                tafsirBodyText.textContent = ayahTafsir.text;
                return;
            }
        }

        try {
            const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNum}/ar.muyassar`);
            if (res.ok) {
                const data = await res.json();
                if (data.data && Array.isArray(data.data.ayahs)) {
                    tafsirCache.set(surahNum, data.data.ayahs);
                    const ayahTafsir = data.data.ayahs.find(a => a.numberInSurah === ayahNum);
                    if (ayahTafsir && tafsirBodyText) {
                        currentTafsirRawText = ayahTafsir.text;
                        tafsirBodyText.textContent = ayahTafsir.text;
                        return;
                    }
                }
            }
            throw new Error('Fallback to single ayah');
        } catch (e) {
            try {
                const singleRes = await fetch(`https://api.alquran.cloud/v1/ayah/${surahNum}:${ayahNum}/ar.muyassar`);
                if (singleRes.ok) {
                    const singleData = await singleRes.json();
                    if (singleData.data && singleData.data.text && tafsirBodyText) {
                        currentTafsirRawText = singleData.data.text;
                        tafsirBodyText.textContent = singleData.data.text;
                        return;
                    }
                }
            } catch (err2) {}
            if (tafsirBodyText) {
                tafsirBodyText.textContent = 'تعذر الاتصال بخادم التفسير حالياً، يرجى التحقق من اتصال الإنترنت.';
            }
        }
    }

    if (closeTafsirModalBtn) {
        closeTafsirModalBtn.addEventListener('click', () => {
            if (tafsirModal) tafsirModal.style.display = 'none';
        });
    }

    if (tafsirModal) {
        tafsirModal.addEventListener('click', (e) => {
            if (e.target === tafsirModal) {
                tafsirModal.style.display = 'none';
            }
        });
    }

    if (tafsirPlayAyahBtn) {
        tafsirPlayAyahBtn.addEventListener('click', () => {
            playAyahByIndex(currentTafsirAyah - 1);
            showToast(`جاري الاستماع للآية ${toArabicDigits(currentTafsirAyah)} 🔊`);
        });
    }

    if (tafsirCopyBtn) {
        tafsirCopyBtn.addEventListener('click', () => {
            const sMeta = QURAN_SURAHS.find(s => s.number === currentTafsirSurah) || { name: 'الفاتحة' };
            const curAyahData = quranState.ayahsData ? quranState.ayahsData[currentTafsirAyah - 1] : null;
            const verseText = curAyahData ? curAyahData.text : '';
            const copyContent = `﴿${verseText}﴾ [سورة ${sMeta.name}: الآية ${currentTafsirAyah}]\n\nالتفسير الميسر:\n${currentTafsirRawText}\n\n— مقرأة فضيلة الشيخ أحمد مرتضى حامد المباركة`;
            copyToClipboard(copyContent, 'تم نسخ الآية الكريمة وتفسيرها الميسر بنجاح! 📋');
        });
    }

    if (tafsirSetBookmarkBtn) {
        tafsirSetBookmarkBtn.addEventListener('click', () => {
            saveBookmark(currentTafsirSurah, currentTafsirAyah);
        });
    }

    // إدارة نافذة الفهرس الشامل للسور والأجزاء الثلاثين
    const quranIndexModal = document.getElementById('quranIndexModal');
    const openQuranIndexBtn = document.getElementById('openQuranIndexBtn');
    const closeQuranIndexModalBtn = document.getElementById('closeQuranIndexModalBtn');
    const indexTabSurahsBtn = document.getElementById('indexTabSurahsBtn');
    const indexTabJuzsBtn = document.getElementById('indexTabJuzsBtn');
    const indexSurahsContent = document.getElementById('indexSurahsContent');
    const indexJuzsContent = document.getElementById('indexJuzsContent');
    const surahsIndexGrid = document.getElementById('surahsIndexGrid');
    const juzsIndexGrid = document.getElementById('juzsIndexGrid');
    const indexModalSearchInput = document.getElementById('indexModalSearchInput');

    function populateQuranIndex() {
        if (surahsIndexGrid) {
            surahsIndexGrid.innerHTML = QURAN_SURAHS.map(s => `
                <div class="index-surah-card" data-surah="${s.number}">
                    <span class="index-surah-num">${toArabicDigits(s.number)}</span>
                    <div class="index-surah-info">
                        <span class="index-surah-name">سورة ${s.name}</span>
                        <span class="index-surah-meta">${s.type} • ${toArabicDigits(s.ayahs)} آيات</span>
                    </div>
                </div>
            `).join('');

            surahsIndexGrid.querySelectorAll('.index-surah-card').forEach(card => {
                card.addEventListener('click', () => {
                    const surahNum = parseInt(card.getAttribute('data-surah'), 10);
                    if (surahSelect) surahSelect.value = String(surahNum);
                    loadSurah(surahNum);
                    if (quranIndexModal) quranIndexModal.style.display = 'none';
                    showToast(`تم فتح سورة ${QURAN_SURAHS[surahNum-1].name} المباركة 📖`, 'success');
                });
            });
        }

        if (juzsIndexGrid) {
            juzsIndexGrid.innerHTML = QURAN_JUZS.map(j => `
                <div class="index-juz-card" data-surah="${j.surahNumber}" data-ayah="${j.ayahNumber}">
                    <div class="index-juz-header">
                        <span class="index-juz-num">الجزء ${toArabicDigits(j.number)}</span>
                        <span class="index-juz-name">${j.name}</span>
                    </div>
                    <div class="index-juz-meta">
                        <i class="fa-solid fa-book-quran gold-icon"></i>
                        <span>يبدأ من: سورة ${j.surahName} (الآية ${toArabicDigits(j.ayahNumber)})</span>
                    </div>
                </div>
            `).join('');

            juzsIndexGrid.querySelectorAll('.index-juz-card').forEach(card => {
                card.addEventListener('click', () => {
                    const surahNum = parseInt(card.getAttribute('data-surah'), 10);
                    const ayahNum = parseInt(card.getAttribute('data-ayah'), 10);
                    if (surahSelect) surahSelect.value = String(surahNum);
                    loadSurah(surahNum).then(() => {
                        setTimeout(() => {
                            const ayahIndex = ayahNum - 1;
                            if (quranState.viewMode === 'pages') {
                                goToPage(Math.floor(ayahIndex / quranState.pageSize));
                            } else if (quranState.viewMode === 'focus') {
                                goToFocusAyah(ayahIndex);
                            }
                        }, 250);
                    });
                    if (quranIndexModal) quranIndexModal.style.display = 'none';
                    showToast(`تم الانتقال لـ ${card.querySelector('.index-juz-num').textContent} 📖`, 'success');
                });
            });
        }
    }

    if (openQuranIndexBtn) {
        openQuranIndexBtn.addEventListener('click', () => {
            if (quranIndexModal) quranIndexModal.style.display = 'flex';
            if (indexModalSearchInput) {
                indexModalSearchInput.value = '';
                filterSurahsInIndex('');
            }
        });
    }

    if (closeQuranIndexModalBtn) {
        closeQuranIndexModalBtn.addEventListener('click', () => {
            if (quranIndexModal) quranIndexModal.style.display = 'none';
        });
    }

    if (quranIndexModal) {
        quranIndexModal.addEventListener('click', (e) => {
            if (e.target === quranIndexModal) {
                quranIndexModal.style.display = 'none';
            }
        });
    }

    if (indexTabSurahsBtn && indexTabJuzsBtn) {
        indexTabSurahsBtn.addEventListener('click', () => {
            indexTabSurahsBtn.classList.add('active');
            indexTabJuzsBtn.classList.remove('active');
            if (indexSurahsContent) indexSurahsContent.style.display = 'block';
            if (indexJuzsContent) indexJuzsContent.style.display = 'none';
            const wrap = document.getElementById('indexSearchWrap');
            if (wrap) wrap.style.display = 'block';
        });

        indexTabJuzsBtn.addEventListener('click', () => {
            indexTabJuzsBtn.classList.add('active');
            indexTabSurahsBtn.classList.remove('active');
            if (indexSurahsContent) indexSurahsContent.style.display = 'none';
            if (indexJuzsContent) indexJuzsContent.style.display = 'block';
            const wrap = document.getElementById('indexSearchWrap');
            if (wrap) wrap.style.display = 'none';
        });
    }

    function filterSurahsInIndex(query) {
        const clean = normalizeArabic(query);
        const cards = surahsIndexGrid ? surahsIndexGrid.querySelectorAll('.index-surah-card') : [];
        cards.forEach(card => {
            const surahNum = card.getAttribute('data-surah');
            const sMeta = QURAN_SURAHS[parseInt(surahNum, 10) - 1];
            if (!query) {
                card.style.display = 'flex';
                return;
            }
            const cleanName = normalizeArabic(sMeta.name);
            const matches = cleanName.includes(clean) || sMeta.name.includes(query) || String(sMeta.number).startsWith(clean);
            card.style.display = matches ? 'flex' : 'none';
        });
    }

    if (indexModalSearchInput) {
        indexModalSearchInput.addEventListener('input', (e) => {
            filterSurahsInIndex(e.target.value.trim());
        });
    }
    populateQuranIndex();

    const fontSizes = ['1.25rem', '1.45rem', '1.65rem', '1.9rem', '2.2rem'];

    // أ. إدارة التبويبات
    const tabButtons = document.querySelectorAll('.maqraah-tab-btn');
    const tabPanes = {
        reader: document.getElementById('maqraahTabReader'),
        quiz: document.getElementById('maqraahTabQuiz'),
        circles: document.getElementById('maqraahTabCircles')
    };

    function switchMaqraahTab(targetTab) {
        tabButtons.forEach(btn => {
            const isMatch = btn.getAttribute('data-tab') === targetTab;
            btn.classList.toggle('active', isMatch);
            btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
        });

        Object.keys(tabPanes).forEach(tabKey => {
            const pane = tabPanes[tabKey];
            if (pane) {
                if (tabKey === targetTab) {
                    pane.style.display = 'block';
                    pane.classList.add('active');
                } else {
                    pane.style.display = 'none';
                    pane.classList.remove('active');
                }
            }
        });
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');
            if (target) switchMaqraahTab(target);
        });
    });

    const backToReaderBtn = document.getElementById('backToQuranReaderBtn');
    if (backToReaderBtn) {
        backToReaderBtn.addEventListener('click', () => {
            switchMaqraahTab('reader');
            maqraahSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ب. ملء قائمة السور والتحكم فيها
    if (surahSelect) {
        surahSelect.innerHTML = QURAN_SURAHS.map(s => {
            return `<option value="${s.number}">${s.number}. سورة ${s.name} (${s.ayahs} آية - ${s.type})</option>`;
        }).join('');

        surahSelect.addEventListener('change', (e) => {
            const num = parseInt(e.target.value, 10) || 1;
            loadSurah(num);
        });
    }

    if (reciterSelect) {
        reciterSelect.addEventListener('change', (e) => {
            quranState.currentReciter = e.target.value;
            if (audioCurrentReciter) {
                audioCurrentReciter.textContent = reciterDisplayNames[quranState.currentReciter] || 'القارئ';
            }
            if (quranState.isPlaying && quranState.currentPlayingAyahIndex >= 0) {
                playAyahByIndex(quranState.currentPlayingAyahIndex);
            }
        });
    }

    if (repeatSelect) {
        repeatSelect.addEventListener('change', (e) => {
            quranState.repeatCountTarget = parseInt(e.target.value, 10) || 1;
            quranState.currentAyahPlayRepeat = 0;
            updateRepeatBadgeUI();
        });
    }

    // ت. إدارة أوضاع العرض وتقسيم الصفحات
    function updateViewModeButtonsUI() {
        if (viewModePagesBtn) viewModePagesBtn.classList.toggle('active', quranState.viewMode === 'pages');
        if (viewModeFocusBtn) viewModeFocusBtn.classList.toggle('active', quranState.viewMode === 'focus');
        if (viewModeContinuousBtn) viewModeContinuousBtn.classList.toggle('active', quranState.viewMode === 'continuous');

        if (pageSizePickerWrap) {
            pageSizePickerWrap.style.display = quranState.viewMode === 'pages' ? 'inline-flex' : 'none';
        }
        if (pageSizeSelect) {
            pageSizeSelect.value = String(quranState.pageSize);
        }
    }

    if (viewModePagesBtn) {
        viewModePagesBtn.addEventListener('click', () => {
            quranState.viewMode = 'pages';
            localStorage.setItem('sheikh_quran_view_mode', 'pages');
            updateViewModeButtonsUI();
            renderVersesView();
            showToast('تم تفعيل عرض الصفحات والمقاطع 📖');
        });
    }

    if (viewModeFocusBtn) {
        viewModeFocusBtn.addEventListener('click', () => {
            quranState.viewMode = 'focus';
            localStorage.setItem('sheikh_quran_view_mode', 'focus');
            updateViewModeButtonsUI();
            renderVersesView();
            showToast('تم تفعيل وضع التركيز (آية آية) للتحفيظ المتقن 🎯');
        });
    }

    if (viewModeContinuousBtn) {
        viewModeContinuousBtn.addEventListener('click', () => {
            quranState.viewMode = 'continuous';
            localStorage.setItem('sheikh_quran_view_mode', 'continuous');
            updateViewModeButtonsUI();
            renderVersesView();
            showToast('تم تفعيل عرض السورة كاملة 📜');
        });
    }

    if (pageSizeSelect) {
        pageSizeSelect.addEventListener('change', (e) => {
            quranState.pageSize = parseInt(e.target.value, 10) || 15;
            quranState.currentPage = 0;
            localStorage.setItem('sheikh_quran_page_size', String(quranState.pageSize));
            renderVersesView();
        });
    }

    function goToPage(pageIndex) {
        if (!quranState.ayahsData || quranState.ayahsData.length === 0) return;
        const totalPages = Math.ceil(quranState.ayahsData.length / quranState.pageSize);
        if (pageIndex < 0 || pageIndex >= totalPages) return;
        quranState.currentPage = pageIndex;
        renderVersesView();
        if (versesContainer) {
            versesContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    [prevPageBtnTop, prevPageBtnBottom].forEach(btn => {
        if (btn) btn.addEventListener('click', () => goToPage(quranState.currentPage - 1));
    });

    [nextPageBtnTop, nextPageBtnBottom].forEach(btn => {
        if (btn) btn.addEventListener('click', () => goToPage(quranState.currentPage + 1));
    });

    function goToFocusAyah(index) {
        if (!quranState.ayahsData || quranState.ayahsData.length === 0) return;
        if (index < 0 || index >= quranState.ayahsData.length) return;
        quranState.currentFocusAyahIndex = index;
        renderVersesView();
    }

    function handleQuickJump() {
        if (!quickAyahInputTop || !quranState.ayahsData || quranState.ayahsData.length === 0) return;
        const targetAyah = parseInt(quickAyahInputTop.value.trim(), 10);
        if (!targetAyah || targetAyah < 1 || targetAyah > quranState.ayahsData.length) {
            showToast(`يرجى كتابة رقم آية صحيح بين ١ و ${quranState.ayahsData.length}`, 'error');
            return;
        }

        const ayahIndex = targetAyah - 1;
        if (quranState.viewMode === 'focus') {
            quranState.currentFocusAyahIndex = ayahIndex;
            renderVersesView();
        } else if (quranState.viewMode === 'pages') {
            quranState.currentPage = Math.floor(ayahIndex / quranState.pageSize);
            renderVersesView();
            setTimeout(() => {
                const targetEl = document.querySelector(`.quran-ayah[data-index="${ayahIndex}"]`);
                if (targetEl) {
                    targetEl.classList.add('playing-ayah');
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setTimeout(() => targetEl.classList.remove('playing-ayah'), 2500);
                }
            }, 100);
        } else {
            const targetEl = document.querySelector(`.quran-ayah[data-index="${ayahIndex}"]`);
            if (targetEl) {
                targetEl.classList.add('playing-ayah');
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => targetEl.classList.remove('playing-ayah'), 2500);
            }
        }
        quickAyahInputTop.value = '';
    }

    if (quickAyahJumpBtnTop) quickAyahJumpBtnTop.addEventListener('click', handleQuickJump);
    if (quickAyahInputTop) {
        quickAyahInputTop.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleQuickJump();
            }
        });
    }

    // Keyboard navigation (ArrowLeft: التالي, ArrowRight: السابق)
    document.addEventListener('keydown', (e) => {
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') return;

        if (e.key === 'ArrowLeft') {
            if (quranState.viewMode === 'pages') {
                goToPage(quranState.currentPage + 1);
            } else if (quranState.viewMode === 'focus') {
                goToFocusAyah(quranState.currentFocusAyahIndex + 1);
            }
        } else if (e.key === 'ArrowRight') {
            if (quranState.viewMode === 'pages') {
                goToPage(quranState.currentPage - 1);
            } else if (quranState.viewMode === 'focus') {
                goToFocusAyah(quranState.currentFocusAyahIndex - 1);
            }
        }
    });

    // ج. نظام البحث اللحظي بالكتابة عن السورة (Live Surah Search Engine)
    function initSurahSearch() {
        if (!surahSearchInput || !surahSearchDropdown) return;

        function renderSuggestions(matches) {
            if (matches.length === 0) {
                surahSearchDropdown.innerHTML = `
                    <div class="surah-no-results">
                        <i class="fa-solid fa-magnifying-glass" style="margin-left: 6px; color: var(--gold);"></i>
                        لم يتم العثور على سورة بهذا الاسم أو الرقم
                    </div>
                `;
                surahSearchDropdown.style.display = 'block';
                return;
            }

            surahSearchDropdown.innerHTML = matches.map(s => `
                <div class="surah-suggestion-item" data-surah="${s.number}" tabindex="0">
                    <div class="surah-suggestion-right">
                        <span class="surah-sug-num">${s.number}</span>
                        <span class="surah-sug-name">سورة ${s.name}</span>
                    </div>
                    <div class="surah-suggestion-left">
                        <span class="surah-sug-type">${s.type}</span>
                        <span>${s.ayahs} آيات</span>
                    </div>
                </div>
            `).join('');

            surahSearchDropdown.style.display = 'block';

            surahSearchDropdown.querySelectorAll('.surah-suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    const surahNum = parseInt(item.getAttribute('data-surah'), 10);
                    selectSurahFromSearch(surahNum);
                });

                item.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        const surahNum = parseInt(item.getAttribute('data-surah'), 10);
                        selectSurahFromSearch(surahNum);
                    }
                });
            });
        }

        function selectSurahFromSearch(surahNum) {
            const s = QURAN_SURAHS.find(item => item.number === surahNum);
            if (!s) return;

            if (surahSelect) {
                surahSelect.value = s.number;
            }
            surahSearchInput.value = `سورة ${s.name}`;
            if (surahSearchClearBtn) surahSearchClearBtn.style.display = 'block';
            surahSearchDropdown.style.display = 'none';

            loadSurah(s.number);
            showToast(`تم فتح سورة ${s.name} المباركة 📖`, 'success');

            if (versesContainer) {
                versesContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }

        surahSearchInput.addEventListener('input', (e) => {
            const rawVal = e.target.value.trim();
            if (!rawVal) {
                surahSearchDropdown.style.display = 'none';
                if (surahSearchClearBtn) surahSearchClearBtn.style.display = 'none';
                return;
            }

            if (surahSearchClearBtn) surahSearchClearBtn.style.display = 'block';

            const cleanQuery = normalizeArabic(rawVal);
            const numQuery = parseInt(cleanQuery, 10);

            const matches = QURAN_SURAHS.filter(s => {
                const cleanName = normalizeArabic(s.name);
                const isNameMatch = cleanName.includes(cleanQuery) || s.name.includes(rawVal);
                const isNumMatch = !isNaN(numQuery) && (s.number === numQuery || String(s.number).startsWith(cleanQuery));
                return isNameMatch || isNumMatch;
            });

            renderSuggestions(matches);
        });

        surahSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const firstItem = surahSearchDropdown.querySelector('.surah-suggestion-item');
                if (firstItem) {
                    const surahNum = parseInt(firstItem.getAttribute('data-surah'), 10);
                    selectSurahFromSearch(surahNum);
                }
            } else if (e.key === 'Escape') {
                surahSearchDropdown.style.display = 'none';
            }
        });

        if (surahSearchClearBtn) {
            surahSearchClearBtn.addEventListener('click', () => {
                surahSearchInput.value = '';
                surahSearchDropdown.style.display = 'none';
                surahSearchClearBtn.style.display = 'none';
                surahSearchInput.focus();
            });
        }

        document.addEventListener('click', (e) => {
            if (!surahSearchInput.contains(e.target) && !surahSearchDropdown.contains(e.target)) {
                surahSearchDropdown.style.display = 'none';
            }
        });
    }

    initSurahSearch();

    // د. وضع التسميع الذاتي (Blind Mode)
    function toggleBlindMode() {
        quranState.isBlindMode = !quranState.isBlindMode;
        if (versesContainer) {
            versesContainer.classList.toggle('blind-mode-active', quranState.isBlindMode);
        }
        if (blindNotice) {
            blindNotice.style.display = quranState.isBlindMode ? 'flex' : 'none';
        }
        if (blindToggleBtn) {
            blindToggleBtn.classList.toggle('active', quranState.isBlindMode);
            blindToggleBtn.setAttribute('aria-pressed', quranState.isBlindMode ? 'true' : 'false');
        }

        if (quranState.isBlindMode) {
            document.querySelectorAll('.quran-ayah.revealed').forEach(el => el.classList.remove('revealed'));
            showToast('تم تفعيل وضع التسميع الذاتي 🌿 اقرأ غيباً والمس الآية لكشفها عند الحاجة.', 'info');
        } else {
            showToast('تم إيقاف وضع التسميع والعودة للقراءة العادية 📖');
        }
    }

    if (blindToggleBtn) {
        blindToggleBtn.addEventListener('click', toggleBlindMode);
    }

    // هـ. التحكم في حجم خط المصحف
    function applyFontSize() {
        if (versesContainer) {
            versesContainer.style.setProperty('--quran-font-size', fontSizes[quranState.fontSizeLevel]);
        }
    }

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
            if (quranState.fontSizeLevel < fontSizes.length - 1) {
                quranState.fontSizeLevel++;
                applyFontSize();
            }
        });
    }

    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
            if (quranState.fontSizeLevel > 0) {
                quranState.fontSizeLevel--;
                applyFontSize();
            }
        });
    }

    // و. جلب وعرض آيات السورة الكريمة
    async function loadSurah(surahNumber) {
        stopAudioPlayback();
        quranState.currentSurah = surahNumber;
        quranState.currentPlayingAyahIndex = -1;
        quranState.currentAyahPlayRepeat = 0;
        quranState.currentPage = 0;
        quranState.currentFocusAyahIndex = 0;

        const surahMeta = QURAN_SURAHS.find(s => s.number === surahNumber) || QURAN_SURAHS[0];

        if (surahTitleDisplay) surahTitleDisplay.textContent = `سُورَةُ ${surahMeta.name}`;
        if (surahMetaType) surahMetaType.textContent = `${surahMeta.type} • ${surahMeta.ayahs} آيات`;
        if (surahSubtitleInfo) {
            surahSubtitleInfo.textContent = `ترتيبها بالمصحف الشريف: ${surahMeta.number} • التلاوة برواية حفص عن عاصم`;
        }

        if (quickAyahInputTop) {
            quickAyahInputTop.max = surahMeta.ayahs;
            quickAyahInputTop.placeholder = `١ - ${surahMeta.ayahs}`;
        }

        if (surahBasmalaBanner) {
            if (surahNumber === 9 || surahNumber === 1) {
                surahBasmalaBanner.style.display = 'none';
            } else {
                surahBasmalaBanner.style.display = 'block';
            }
        }

        if (surahCache.has(surahNumber)) {
            renderVerses(surahCache.get(surahNumber));
            return;
        }

        if (OFFLINE_SURAHS_DATA[surahNumber]) {
            const data = OFFLINE_SURAHS_DATA[surahNumber];
            surahCache.set(surahNumber, data);
            renderVerses(data);
            return;
        }

        if (versesContainer) {
            versesContainer.innerHTML = `
                <div class="quran-loading-state">
                    <i class="fa-solid fa-circle-notch fa-spin gold-icon"></i>
                    <span>جاري تحميل آيات سورة ${surahMeta.name} المباركة...</span>
                </div>
            `;
        }

        try {
            const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani`);
            if (res.ok) {
                const json = await res.json();
                if (json.data && json.data[0] && Array.isArray(json.data[0].ayahs)) {
                    let ayahs = json.data[0].ayahs.map(a => ({
                        numberInSurah: a.numberInSurah,
                        text: a.text
                    }));

                    if (surahNumber !== 1 && surahNumber !== 9 && ayahs.length > 0) {
                        const bismillahUthmani = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ";
                        if (ayahs[0].text.startsWith(bismillahUthmani)) {
                            ayahs[0].text = ayahs[0].text.substring(bismillahUthmani.length).trim();
                        }
                    }

                    surahCache.set(surahNumber, ayahs);
                    renderVerses(ayahs);
                    return;
                }
            }
            throw new Error('API request failed');
        } catch (err) {
            console.warn('Quran API fetch error, fallback to offline generator:', err);
            const fallbackAyahs = generateOfflineFallback(surahMeta);
            surahCache.set(surahNumber, fallbackAyahs);
            renderVerses(fallbackAyahs);
        }
    }

    function generateOfflineFallback(surahMeta) {
        const list = [];
        for (let i = 1; i <= surahMeta.ayahs; i++) {
            list.push({
                numberInSurah: i,
                text: `«آية مباركة ${i} من سورة ${surahMeta.name}»`
            });
        }
        return list;
    }

    function renderVerses(ayahs) {
        quranState.ayahsData = ayahs;
        renderVersesView();
    }

    function renderVersesView() {
        if (!versesContainer || !quranState.ayahsData || quranState.ayahsData.length === 0) return;
        const ayahs = quranState.ayahsData;
        const surahMeta = QURAN_SURAHS.find(s => s.number === quranState.currentSurah) || QURAN_SURAHS[0];

        updateViewModeButtonsUI();

        // 1) وضع التركيز (آية آية - Focus Mode)
        if (quranState.viewMode === 'focus') {
            if (paginationTop) paginationTop.style.display = 'none';
            if (paginationBottom) paginationBottom.style.display = 'none';

            if (quranState.currentFocusAyahIndex < 0) quranState.currentFocusAyahIndex = 0;
            if (quranState.currentFocusAyahIndex >= ayahs.length) quranState.currentFocusAyahIndex = ayahs.length - 1;

            const curIndex = quranState.currentFocusAyahIndex;
            const curAyah = ayahs[curIndex] || ayahs[0];
            const isPlayingThis = (quranState.isPlaying && quranState.currentPlayingAyahIndex === curIndex);

            if (readingProgressBar) {
                const pct = Math.round(((curIndex + 1) / ayahs.length) * 100);
                readingProgressBar.style.width = `${pct}%`;
            }

            versesContainer.innerHTML = '';
            versesContainer.style.textAlign = 'center';

            const card = document.createElement('div');
            card.className = 'quran-focus-card';

            card.innerHTML = `
                <div class="focus-header-meta">
                    <span class="focus-surah-tag"><i class="fa-solid fa-book-quran gold-icon"></i> سورة ${escapeHtml(surahMeta.name)}</span>
                    <span class="focus-ayah-badge">الآية ${toArabicDigits(curAyah.numberInSurah)} من ${toArabicDigits(ayahs.length)}</span>
                    <button type="button" class="focus-blind-toggle ${quranState.isBlindMode ? 'active' : ''}" id="focusBlindToggleBtn" title="${quranState.isBlindMode ? 'كشف كلمات الآية' : 'إخفاء كلمات الآية للتسميع'}">
                        <i class="fa-solid ${quranState.isBlindMode ? 'fa-eye' : 'fa-eye-slash'}"></i>
                    </button>
                </div>
                <div class="focus-ayah-content" id="focusAyahContent" title="اضغط لكشف أو إخفاء الآية للتسميع">
                    <div class="focus-ayah-text ${quranState.isBlindMode ? 'masked' : ''}" id="focusAyahText">${escapeHtml(curAyah.text)}</div>
                    <div class="focus-ayah-number">﴿${toArabicDigits(curAyah.numberInSurah)}﴾</div>
                </div>
                <div class="focus-navigation-controls">
                    <button type="button" class="btn btn-outline btn-sm focus-nav-btn" id="focusPrevAyahBtn" ${curIndex === 0 ? 'disabled' : ''}>
                        <i class="fa-solid fa-chevron-right"></i>
                        <span>الآية السابقة</span>
                    </button>
                    <button type="button" class="btn btn-primary btn-sm focus-play-btn" id="focusPlayCurrentBtn">
                        <i class="fa-solid ${isPlayingThis ? 'fa-pause' : 'fa-play'}"></i>
                        <span>${isPlayingThis ? 'إيقاف مؤقت' : 'استماع وتكرار'}</span>
                    </button>
                    <button type="button" class="btn btn-outline btn-sm focus-nav-btn" id="focusNextAyahBtn" ${curIndex === ayahs.length - 1 ? 'disabled' : ''}>
                        <span>الآية التالية</span>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                </div>
                <div class="focus-extra-actions">
                    <button type="button" class="btn btn-outline-gold btn-xs focus-extra-btn" id="focusTafsirBtn" title="عرض التفسير الميسر المعتمد لهذه الآية">
                        <i class="fa-solid fa-book-open-reader"></i>
                        <span>التفسير الميسر</span>
                    </button>
                    <button type="button" class="btn btn-outline btn-xs focus-extra-btn" id="focusCopyBtn" title="نسخ الآية الكريمة">
                        <i class="fa-solid fa-copy"></i>
                        <span>نسخ الآية</span>
                    </button>
                    <button type="button" class="btn btn-outline btn-xs focus-extra-btn" id="focusBookmarkBtn" title="حفظ كفاصلة قراءة">
                        <i class="fa-solid fa-bookmark"></i>
                        <span>حفظ كفاصلة</span>
                    </button>
                </div>
            `;

            versesContainer.appendChild(card);

            const prevBtn = card.querySelector('#focusPrevAyahBtn');
            const nextBtn = card.querySelector('#focusNextAyahBtn');
            const playBtn = card.querySelector('#focusPlayCurrentBtn');
            const blindBtn = card.querySelector('#focusBlindToggleBtn');
            const contentBox = card.querySelector('#focusAyahContent');
            const textEl = card.querySelector('#focusAyahText');

            if (prevBtn) prevBtn.addEventListener('click', () => goToFocusAyah(curIndex - 1));
            if (nextBtn) nextBtn.addEventListener('click', () => goToFocusAyah(curIndex + 1));
            const focusTafsirBtn = card.querySelector('#focusTafsirBtn');
            const focusCopyBtn = card.querySelector('#focusCopyBtn');
            const focusBookmarkBtn = card.querySelector('#focusBookmarkBtn');

            if (focusTafsirBtn) {
                focusTafsirBtn.addEventListener('click', () => {
                    openTafsirModal(quranState.currentSurah, curAyah.numberInSurah);
                });
            }
            if (focusCopyBtn) {
                focusCopyBtn.addEventListener('click', () => {
                    const text = `﴿${curAyah.text}﴾ [سورة ${surahMeta.name}: الآية ${curAyah.numberInSurah}]`;
                    copyToClipboard(text, 'تم نسخ الآية الكريمة المباركة بنجاح! 📋');
                });
            }
            if (focusBookmarkBtn) {
                focusBookmarkBtn.addEventListener('click', () => {
                    saveBookmark(quranState.currentSurah, curAyah.numberInSurah);
                });
            }
            if (playBtn) {
                playBtn.addEventListener('click', () => {
                    if (quranState.isPlaying && quranState.currentPlayingAyahIndex === curIndex) {
                        togglePlaySurah();
                    } else {
                        playAyahByIndex(curIndex);
                    }
                });
            }
            if (blindBtn) {
                blindBtn.addEventListener('click', () => {
                    if (textEl) textEl.classList.toggle('masked');
                });
            }
            if (contentBox) {
                contentBox.addEventListener('click', () => {
                    if (textEl && textEl.classList.contains('masked')) {
                        textEl.classList.remove('masked');
                    }
                });
            }

            applyFontSize();
            return;
        }

        // 2) وضع الصفحات والمقاطع أو العرض المتصل
        versesContainer.style.textAlign = 'justify';

        let displayAyahs = ayahs;
        let startIndex = 0;
        let endIndex = ayahs.length;

        if (quranState.viewMode === 'pages') {
            const totalPages = Math.ceil(ayahs.length / quranState.pageSize) || 1;
            if (quranState.currentPage >= totalPages) quranState.currentPage = totalPages - 1;
            if (quranState.currentPage < 0) quranState.currentPage = 0;

            startIndex = quranState.currentPage * quranState.pageSize;
            endIndex = Math.min(startIndex + quranState.pageSize, ayahs.length);
            displayAyahs = ayahs.slice(startIndex, endIndex);

            if (paginationTop) paginationTop.style.display = 'flex';
            if (paginationBottom) paginationBottom.style.display = 'flex';

            const curPageStr = `صفحة ${toArabicDigits(quranState.currentPage + 1)} من ${toArabicDigits(totalPages)}`;
            const rangeStr = `(الآيات ${toArabicDigits(startIndex + 1)} - ${toArabicDigits(endIndex)})`;

            if (pageIndicatorTop) pageIndicatorTop.textContent = curPageStr;
            if (pageIndicatorBottom) pageIndicatorBottom.textContent = curPageStr;
            if (ayahRangeTop) ayahRangeTop.textContent = rangeStr;
            if (ayahRangeBottom) ayahRangeBottom.textContent = rangeStr;

            const isFirst = quranState.currentPage === 0;
            const isLast = quranState.currentPage === totalPages - 1;

            if (prevPageBtnTop) prevPageBtnTop.disabled = isFirst;
            if (prevPageBtnBottom) prevPageBtnBottom.disabled = isFirst;
            if (nextPageBtnTop) nextPageBtnTop.disabled = isLast;
            if (nextPageBtnBottom) nextPageBtnBottom.disabled = isLast;

            if (readingProgressBar) {
                const pct = Math.round((endIndex / ayahs.length) * 100);
                readingProgressBar.style.width = `${pct}%`;
            }
        } else {
            // continuous
            if (paginationTop) paginationTop.style.display = 'none';
            if (paginationBottom) paginationBottom.style.display = 'none';
            if (readingProgressBar) readingProgressBar.style.width = '100%';
        }

        versesContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();

        displayAyahs.forEach((ayah, relIndex) => {
            const absIndex = startIndex + relIndex;
            const span = document.createElement('span');
            span.className = 'quran-ayah';
            span.setAttribute('data-index', absIndex);
            span.setAttribute('data-ayah-num', ayah.numberInSurah);

            if (absIndex === quranState.currentPlayingAyahIndex) {
                span.classList.add('playing-ayah');
            }

            const textSpan = document.createElement('span');
            textSpan.className = 'ayah-text';
            textSpan.textContent = ayah.text + ' ';

            const numSymbol = document.createElement('span');
            numSymbol.className = 'ayah-num-symbol';
            numSymbol.title = `اضغط لعرض التفسير الميسر للآية ${ayah.numberInSurah}`;
            numSymbol.addEventListener('click', (e) => {
                e.stopPropagation();
                openTafsirModal(quranState.currentSurah, ayah.numberInSurah);
            });
            numSymbol.innerHTML = `﴿${toArabicDigits(ayah.numberInSurah)}﴾`;

            span.appendChild(textSpan);
            span.appendChild(numSymbol);

            span.addEventListener('click', (e) => {
                if (quranState.isBlindMode) {
                    span.classList.toggle('revealed');
                    if (e.target.closest('.ayah-num-symbol')) {
                        playAyahByIndex(absIndex);
                    }
                } else {
                    playAyahByIndex(absIndex);
                }
            });

            fragment.appendChild(span);
        });

        versesContainer.appendChild(fragment);
        applyFontSize();
    }

    // ز. نظام الصوتيات والتلاوة والتكرار
    function getAyahAudioUrl(reciterKey, surahNum, ayahNum) {
        const folder = reciterAudioFolders[reciterKey] || 'Husary_128kbps';
        const sStr = String(surahNum).padStart(3, '0');
        const aStr = String(ayahNum).padStart(3, '0');
        return `https://everyayah.com/data/${folder}/${sStr}${aStr}.mp3`;
    }

    function updateRepeatBadgeUI() {
        if (!audioRepeatBadge) return;
        if (quranState.repeatCountTarget > 1) {
            audioRepeatBadge.style.display = 'inline-flex';
            audioRepeatBadge.textContent = `تكرار: ${quranState.currentAyahPlayRepeat + 1}/${quranState.repeatCountTarget}`;
        } else {
            audioRepeatBadge.style.display = 'none';
        }
    }

    function playAyahByIndex(index) {
        if (!quranState.ayahsData || index < 0 || index >= quranState.ayahsData.length) {
            stopAudioPlayback();
            return;
        }

        quranState.currentPlayingAyahIndex = index;

        // انتقال تلقائي للصفحة أثناء التلاوة
        if (quranState.viewMode === 'pages') {
            const targetPage = Math.floor(index / quranState.pageSize);
            if (targetPage !== quranState.currentPage) {
                quranState.currentPage = targetPage;
                renderVersesView();
            }
        } else if (quranState.viewMode === 'focus') {
            if (quranState.currentFocusAyahIndex !== index) {
                quranState.currentFocusAyahIndex = index;
                renderVersesView();
            }
        }

        const ayah = quranState.ayahsData[index];
        const audioUrl = getAyahAudioUrl(quranState.currentReciter, quranState.currentSurah, ayah.numberInSurah);

        if (!quranState.audioPlayer) {
            quranState.audioPlayer = new Audio();
        }

        quranState.audioPlayer.pause();
        quranState.audioPlayer.src = audioUrl;

        document.querySelectorAll('.quran-ayah.playing-ayah').forEach(el => el.classList.remove('playing-ayah'));
        const currentAyahEl = document.querySelector(`.quran-ayah[data-index="${index}"]`);
        if (currentAyahEl) {
            currentAyahEl.classList.add('playing-ayah');
            if (quranState.isBlindMode) {
                currentAyahEl.classList.add('revealed');
            }
            currentAyahEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // تحديث زر الاستماع في بطاقة التركيز
        const focusPlayBtn = document.getElementById('focusPlayCurrentBtn');
        if (focusPlayBtn) {
            focusPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i> <span>إيقاف مؤقت</span>';
        }

        if (floatingAudioBar) floatingAudioBar.style.display = 'block';
        if (audioCurrentAyahBadge) audioCurrentAyahBadge.textContent = `الآية ${ayah.numberInSurah}`;
        if (audioCurrentReciter) {
            audioCurrentReciter.textContent = reciterDisplayNames[quranState.currentReciter] || 'القارئ المعلم';
        }
        updateRepeatBadgeUI();

        if (playSurahBtn) {
            playSurahBtn.innerHTML = '<i class="fa-solid fa-pause"></i> <span>إيقاف مؤقت</span>';
        }
        if (stopBtn) stopBtn.style.display = 'inline-flex';
        if (audioPlayPauseBtn) {
            audioPlayPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            audioPlayPauseBtn.title = 'إيقاف مؤقت';
        }

        quranState.audioPlayer.play().then(() => {
            quranState.isPlaying = true;
        }).catch(err => {
            console.warn('Audio playback error:', err);
            showToast('تعذر تشغيل الصوت للآية، تحقق من اتصال الإنترنت.', 'error');
            quranState.isPlaying = false;
        });

        quranState.audioPlayer.onended = () => {
            quranState.currentAyahPlayRepeat++;
            if (quranState.currentAyahPlayRepeat < quranState.repeatCountTarget) {
                updateRepeatBadgeUI();
                quranState.audioPlayer.currentTime = 0;
                quranState.audioPlayer.play().catch(() => {});
            } else {
                quranState.currentAyahPlayRepeat = 0;
                updateRepeatBadgeUI();
                if (index + 1 < quranState.ayahsData.length) {
                    playAyahByIndex(index + 1);
                } else {
                    showToast('تم بحمد الله الاستماع للسورة كاملة 🌿 تقبل الله منكم.');
                    stopAudioPlayback();
                }
            }
        };

        quranState.audioPlayer.onerror = () => {
            console.warn('Failed to load ayah audio');
            showToast('تعذر جلب ملف الصوت للآية، يمكنك المتابعة بالقراءة.', 'error');
        };
    }

    function togglePlaySurah() {
        if (!quranState.audioPlayer || !quranState.audioPlayer.src || quranState.currentPlayingAyahIndex === -1) {
            const startIdx = quranState.viewMode === 'focus' ? quranState.currentFocusAyahIndex : (quranState.currentPage * quranState.pageSize);
            playAyahByIndex(startIdx);
            return;
        }

        if (quranState.isPlaying) {
            quranState.audioPlayer.pause();
            quranState.isPlaying = false;
            if (playSurahBtn) {
                playSurahBtn.innerHTML = '<i class="fa-solid fa-play"></i> <span>متابعة التلاوة</span>';
            }
            if (audioPlayPauseBtn) {
                audioPlayPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                audioPlayPauseBtn.title = 'تشغيل';
            }
            const focusPlayBtn = document.getElementById('focusPlayCurrentBtn');
            if (focusPlayBtn) {
                focusPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i> <span>متابعة</span>';
            }
        } else {
            quranState.audioPlayer.play().then(() => {
                quranState.isPlaying = true;
                if (playSurahBtn) {
                    playSurahBtn.innerHTML = '<i class="fa-solid fa-pause"></i> <span>إيقاف مؤقت</span>';
                }
                if (audioPlayPauseBtn) {
                    audioPlayPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                    audioPlayPauseBtn.title = 'إيقاف مؤقت';
                }
                const focusPlayBtn = document.getElementById('focusPlayCurrentBtn');
                if (focusPlayBtn) {
                    focusPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i> <span>إيقاف مؤقت</span>';
                }
            }).catch(() => {});
        }
    }

    function stopAudioPlayback() {
        if (quranState.audioPlayer) {
            quranState.audioPlayer.pause();
            quranState.audioPlayer.currentTime = 0;
        }
        quranState.isPlaying = false;
        quranState.currentPlayingAyahIndex = -1;
        quranState.currentAyahPlayRepeat = 0;

        document.querySelectorAll('.quran-ayah.playing-ayah').forEach(el => el.classList.remove('playing-ayah'));

        const focusPlayBtn = document.getElementById('focusPlayCurrentBtn');
        if (focusPlayBtn) {
            focusPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i> <span>استماع وتكرار</span>';
        }

        if (floatingAudioBar) floatingAudioBar.style.display = 'none';
        if (stopBtn) stopBtn.style.display = 'none';
        if (playSurahBtn) {
            playSurahBtn.innerHTML = '<i class="fa-solid fa-play"></i> <span>تشغيل تلاوة السورة</span>';
        }
    }

    if (playSurahBtn) playSurahBtn.addEventListener('click', togglePlaySurah);
    if (stopBtn) stopBtn.addEventListener('click', stopAudioPlayback);
    if (audioPlayPauseBtn) audioPlayPauseBtn.addEventListener('click', togglePlaySurah);
    if (audioCloseBtn) audioCloseBtn.addEventListener('click', stopAudioPlayback);

    if (audioNextBtn) {
        audioNextBtn.addEventListener('click', () => {
            if (quranState.currentPlayingAyahIndex + 1 < quranState.ayahsData.length) {
                quranState.currentAyahPlayRepeat = 0;
                playAyahByIndex(quranState.currentPlayingAyahIndex + 1);
            }
        });
    }

    if (audioPrevBtn) {
        audioPrevBtn.addEventListener('click', () => {
            if (quranState.currentPlayingAyahIndex > 0) {
                quranState.currentAyahPlayRepeat = 0;
                playAyahByIndex(quranState.currentPlayingAyahIndex - 1);
            }
        });
    }

    // ح. محرك اختبارات التحفيظ والتسميع الذكية
    const quizSetupScreen = document.getElementById('quizSetupScreen');
    const quizActiveScreen = document.getElementById('quizActiveScreen');
    const quizResultScreen = document.getElementById('quizResultScreen');
    const startQuizBtn = document.getElementById('startQuizBtn');
    const retryQuizBtn = document.getElementById('retryQuizBtn');
    const shareQuizBtn = document.getElementById('shareQuizResultBtn');

    // أدوات إلغاء الاختبار والمراجعة التفصيلية
    const quizCancelBtn = document.getElementById('quizCancelBtn');
    const quizCancelModal = document.getElementById('quizCancelModal');
    const closeQuizCancelModalBtn = document.getElementById('closeQuizCancelModalBtn');
    const confirmCancelQuizBtn = document.getElementById('confirmCancelQuizBtn');
    const finishAndShowScoreBtn = document.getElementById('finishAndShowScoreBtn');
    const continueQuizBtn = document.getElementById('continueQuizBtn');
    const toggleQuizReviewBtn = document.getElementById('toggleQuizReviewBtn');
    const quizReviewSection = document.getElementById('quizReviewSection');
    const quizReviewList = document.getElementById('quizReviewList');

    let quizUserAnswers = [];

    const quizScopeSelect = document.getElementById('quizScopeSelect');
    const quizLengthSelect = document.getElementById('quizLengthSelect');

    const quizStepText = document.getElementById('quizStepText');
    const quizLiveScore = document.getElementById('quizLiveScore');
    const quizProgressBarFill = document.getElementById('quizProgressBarFill');
    const quizTypePill = document.getElementById('quizTypePill');
    const quizPromptText = document.getElementById('quizPromptText');
    const quizAyahPrompt = document.getElementById('quizAyahPrompt');
    const quizAyahSourceInfo = document.getElementById('quizAyahSourceInfo');
    const quizAnswersList = document.getElementById('quizAnswersList');
    const quizFeedbackBox = document.getElementById('quizFeedbackBox');
    const quizNextActionWrap = document.getElementById('quizNextActionWrap');
    const quizNextQuestionBtn = document.getElementById('quizNextQuestionBtn');

    const resultBadgeIcon = document.getElementById('resultBadgeIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultScoreDisplay = document.getElementById('resultScoreDisplay');
    const resultMessage = document.getElementById('resultMessage');

    let currentQuizQuestions = [];
    let currentQuizQuestionIndex = 0;
    let quizScore = 0;
    let quizTotalCount = 5;
    let isQuestionAnswered = false;

    function startHifzQuiz() {
        const scope = quizScopeSelect ? quizScopeSelect.value : 'juz_amma';
        quizTotalCount = parseInt(quizLengthSelect ? quizLengthSelect.value : '5', 10) || 5;

        let eligible = HIFZ_QUIZ_BANK.filter(q => q.scope === scope);

        if (eligible.length < quizTotalCount) {
            eligible = [...eligible, ...HIFZ_QUIZ_BANK.filter(q => !eligible.includes(q))];
        }

        // خلط الأسئلة عشوائياً
        const shuffled = [...eligible].sort(() => 0.5 - Math.random());
        
        // خلط الخيارات (أ، ب، ج، د) عشوائياً وتحديث مؤشر الإجابة الصحيحة لكل سؤال
        currentQuizQuestions = shuffled.slice(0, quizTotalCount).map(originalQ => {
            const correctText = originalQ.options[originalQ.correctIndex !== undefined ? originalQ.correctIndex : 0];
            const optionsCopy = [...originalQ.options];

            // خوارزمية Fisher-Yates لخلط الخيارات بنزاهة تامة وتوزيع عادل بين أ و ب و ج و د
            for (let i = optionsCopy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
            }

            return {
                ...originalQ,
                options: optionsCopy,
                correctIndex: optionsCopy.indexOf(correctText)
            };
        });

        currentQuizQuestionIndex = 0;
        quizScore = 0;
        isQuestionAnswered = false;
        quizUserAnswers = [];
        if (quizReviewSection) quizReviewSection.style.display = 'none';
        if (toggleQuizReviewBtn) {
            toggleQuizReviewBtn.innerHTML = '<i class="fa-solid fa-list-check"></i> <span>مراجعة الأسئلة وتفسيرها</span>';
        }

        if (quizSetupScreen) quizSetupScreen.style.display = 'none';
        if (quizResultScreen) quizResultScreen.style.display = 'none';
        if (quizActiveScreen) quizActiveScreen.style.display = 'block';

        renderQuizQuestion();
    }

    function renderQuizQuestion() {
        if (currentQuizQuestionIndex >= currentQuizQuestions.length) {
            showQuizResults();
            return;
        }

        isQuestionAnswered = false;
        const q = currentQuizQuestions[currentQuizQuestionIndex];

        if (quizStepText) {
            quizStepText.textContent = `السؤال ${toArabicDigits(currentQuizQuestionIndex + 1)} من ${toArabicDigits(quizTotalCount)}`;
        }
        if (quizLiveScore) {
            quizLiveScore.textContent = `النقاط: ${toArabicDigits(quizScore)}`;
        }
        if (quizProgressBarFill) {
            const pct = Math.round(((currentQuizQuestionIndex) / quizTotalCount) * 100);
            quizProgressBarFill.style.width = `${pct}%`;
        }

        if (quizTypePill) {
            if (q.type === 'next_ayah') {
                quizTypePill.innerHTML = '<i class="fa-solid fa-arrow-down-short-wide"></i> أكمل الآية المباركة التالية';
            } else if (q.type === 'surah_name') {
                quizTypePill.innerHTML = '<i class="fa-solid fa-book-open"></i> معرفة اسم السورة المباركة';
            } else {
                quizTypePill.innerHTML = '<i class="fa-solid fa-star-and-crescent"></i> إتقان المتشابهات والتسميع';
            }
        }

        if (quizPromptText) quizPromptText.textContent = q.questionText;
        if (quizAyahPrompt) quizAyahPrompt.textContent = `«${q.promptAyah}»`;
        if (quizAyahSourceInfo) quizAyahSourceInfo.textContent = `[${q.sourceInfo}]`;

        if (quizFeedbackBox) {
            quizFeedbackBox.style.display = 'none';
            quizFeedbackBox.className = 'quiz-feedback-box';
            quizFeedbackBox.innerHTML = '';
        }
        if (quizNextActionWrap) quizNextActionWrap.style.display = 'none';

        if (quizAnswersList) {
            quizAnswersList.innerHTML = '';
            q.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'quiz-choice-btn';
                btn.setAttribute('data-choice-idx', idx);

                const letter = ['أ', 'ب', 'ج', 'د'][idx] || (idx + 1);
                btn.innerHTML = `
                    <span class="choice-letter">${letter}</span>
                    <span class="choice-text">${escapeHtml(opt)}</span>
                `;

                btn.addEventListener('click', () => handleChoiceSelect(idx));
                quizAnswersList.appendChild(btn);
            });
        }
    }

    function handleChoiceSelect(selectedIndex) {
        if (isQuestionAnswered) return;
        isQuestionAnswered = true;

        const q = currentQuizQuestions[currentQuizQuestionIndex];
        const isCorrect = selectedIndex === q.correctIndex;

        if (isCorrect) {
            quizScore++;
            playCelebrationSound();
        }

        quizUserAnswers.push({
            question: q,
            selectedIndex: selectedIndex,
            isCorrect: isCorrect
        });

        const buttons = quizAnswersList ? quizAnswersList.querySelectorAll('.quiz-choice-btn') : [];
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === q.correctIndex) {
                btn.classList.add('correct');
            } else if (idx === selectedIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        if (quizFeedbackBox) {
            quizFeedbackBox.style.display = 'block';
            if (isCorrect) {
                quizFeedbackBox.className = 'quiz-feedback-box correct-feedback';
                quizFeedbackBox.innerHTML = `
                    <div class="feedback-title"><i class="fa-solid fa-circle-check"></i> إجابة صحيحة ومباركة! ما شاء الله</div>
                    <div class="feedback-desc">${escapeHtml(q.explanation)}</div>
                `;
            } else {
                quizFeedbackBox.className = 'quiz-feedback-box incorrect-feedback';
                quizFeedbackBox.innerHTML = `
                    <div class="feedback-title"><i class="fa-solid fa-circle-xmark"></i> إجابة غير دقيقة، والإجابة الصحيحة موضحة بالأخضر</div>
                    <div class="feedback-desc">${escapeHtml(q.explanation)}</div>
                `;
            }
        }

        if (quizNextActionWrap) quizNextActionWrap.style.display = 'block';
        if (quizLiveScore) quizLiveScore.textContent = `النقاط: ${toArabicDigits(quizScore)}`;
    }

    function showQuizResults() {
        if (quizActiveScreen) quizActiveScreen.style.display = 'none';
        if (quizResultScreen) quizResultScreen.style.display = 'block';

        const percentage = Math.round((quizScore / quizTotalCount) * 100);

        if (resultScoreDisplay) {
            resultScoreDisplay.textContent = `${toArabicDigits(quizScore)} / ${toArabicDigits(quizTotalCount)}`;
        renderQuizReview();
        }

        if (percentage === 100) {
            if (resultBadgeIcon) resultBadgeIcon.innerHTML = '<i class="fa-solid fa-crown" style="color:var(--gold);"></i>';
            if (resultTitle) resultTitle.textContent = 'ما شاء الله! حفظ متقن ودرجة كاملة ١٠٠٪';
            if (resultMessage) {
                resultMessage.textContent = 'مبارك لك هذا الإتقان الراسخ لكتاب الله المبارك! حفظك راسخ ونيّر، جعلك الله من أهل القرآن الذين هم أهل الله وخاصته.';
            }
        } else if (percentage >= 70) {
            if (resultBadgeIcon) resultBadgeIcon.innerHTML = '<i class="fa-solid fa-award" style="color:var(--gold);"></i>';
            if (resultTitle) resultTitle.textContent = 'أحسنت! نتيجة طيبة ومستوى متقدم';
            if (resultMessage) {
                resultMessage.textContent = `حققت ${percentage}% من الإجابات الصحيحة. واصل المراجعة والتكرار مع المصحف المعلم لتثبيت بقية الآيات والارتقاء إلى الإتقان التام.`;
            }
        } else {
            if (resultBadgeIcon) resultBadgeIcon.innerHTML = '<i class="fa-solid fa-book-open-reader" style="color:var(--gold);"></i>';
            if (resultTitle) resultTitle.textContent = 'بداية موفقة وخطوة نحو التثبيت';
            if (resultMessage) {
                resultMessage.textContent = 'القرآن الكريم يثبت بكثرة المراجعة والتكرار؛ استعن بخاصية "تكرار الآية للحفظ" في المصحف المعلم وكرر المحاولة لتصل للدرجة الكاملة إن شاء الله.';
            }
        }
    }

    if (startQuizBtn) startQuizBtn.addEventListener('click', startHifzQuiz);

    if (quizNextQuestionBtn) {
        quizNextQuestionBtn.addEventListener('click', () => {
            currentQuizQuestionIndex++;
            renderQuizQuestion();
        });
    }

    if (retryQuizBtn) {
        retryQuizBtn.addEventListener('click', () => {
            if (quizResultScreen) quizResultScreen.style.display = 'none';
            if (quizSetupScreen) quizSetupScreen.style.display = 'block';
            maqraahSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // إدارة إلغاء الاختبار والتأكيد الذكي
    if (quizCancelBtn) {
        quizCancelBtn.addEventListener('click', () => {
            if (quizCancelModal) quizCancelModal.style.display = 'flex';
        });
    }

    function closeQuizCancelModal() {
        if (quizCancelModal) quizCancelModal.style.display = 'none';
    }

    if (closeQuizCancelModalBtn) closeQuizCancelModalBtn.addEventListener('click', closeQuizCancelModal);
    if (continueQuizBtn) continueQuizBtn.addEventListener('click', closeQuizCancelModal);
    if (quizCancelModal) {
        quizCancelModal.addEventListener('click', (e) => {
            if (e.target === quizCancelModal) closeQuizCancelModal();
        });
    }

    if (confirmCancelQuizBtn) {
        confirmCancelQuizBtn.addEventListener('click', () => {
            closeQuizCancelModal();
            if (quizActiveScreen) quizActiveScreen.style.display = 'none';
            if (quizResultScreen) quizResultScreen.style.display = 'none';
            if (quizSetupScreen) quizSetupScreen.style.display = 'block';
            currentQuizQuestions = [];
            currentQuizQuestionIndex = 0;
            quizScore = 0;
            quizUserAnswers = [];
            showToast('تم إلغاء الاختبار والعودة لشاشة البدء ↩');
        });
    }

    if (finishAndShowScoreBtn) {
        finishAndShowScoreBtn.addEventListener('click', () => {
            closeQuizCancelModal();
            if (quizUserAnswers.length === 0) {
                if (quizActiveScreen) quizActiveScreen.style.display = 'none';
                if (quizSetupScreen) quizSetupScreen.style.display = 'block';
                showToast('لم يتم حل أي سؤال بعد، تم العودة لشاشة البدء.');
            } else {
                showQuizResults();
                showToast('تم إنهاء الاختبار واحتساب نتيجتك الحالية 📊');
            }
        });
    }

    // مراجعة تفاصيل أسئلة الاختبار وتفسيرها
    function renderQuizReview() {
        if (!quizReviewList) return;
        if (quizUserAnswers.length === 0) {
            quizReviewList.innerHTML = '<p class="text-muted" style="text-align:center; padding:1rem;">لم يتم حل أي أسئلة للمراجعة.</p>';
            return;
        }

        quizReviewList.innerHTML = quizUserAnswers.map((item, idx) => {
            const q = item.question;
            const chosenText = (item.selectedIndex !== null && item.selectedIndex !== undefined) ? q.options[item.selectedIndex] : 'لم تتم الإجابة';
            const correctText = q.options[q.correctIndex];
            const statusClass = item.isCorrect ? 'review-correct' : 'review-incorrect';
            const statusIcon = item.isCorrect ? 
                '<span class="review-status-correct"><i class="fa-solid fa-circle-check"></i> إجابة صحيحة ومتقنة</span>' : 
                '<span class="review-status-incorrect"><i class="fa-solid fa-circle-xmark"></i> إجابة غير دقيقة</span>';

            return `
                <div class="review-item ${statusClass}">
                    <div class="review-item-header">
                        <span class="review-q-num">السؤال ${toArabicDigits(idx + 1)} من ${toArabicDigits(quizUserAnswers.length)}</span>
                        ${statusIcon}
                    </div>
                    <div class="review-prompt-wrap">
                        <div class="review-q-title">${escapeHtml(q.questionText)}</div>
                        <div class="review-prompt-ayah">«${escapeHtml(q.promptAyah)}»</div>
                        <div class="review-source-meta">[${escapeHtml(q.sourceInfo)}]</div>
                    </div>
                    
                    <div class="review-answers-grid">
                        <div class="review-ans-box ${item.isCorrect ? 'user-correct' : 'user-wrong'}">
                            <span class="ans-label">إجابتك:</span>
                            <span class="ans-text">${escapeHtml(chosenText)}</span>
                        </div>
                        ${!item.isCorrect ? `
                        <div class="review-ans-box correct-ans">
                            <span class="ans-label">الإجابة الصحيحة:</span>
                            <span class="ans-text">${escapeHtml(correctText)}</span>
                        </div>
                        ` : ''}
                    </div>

                    <div class="review-explanation-box">
                        <i class="fa-solid fa-lightbulb gold-icon"></i>
                        <span>${escapeHtml(q.explanation)}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    if (toggleQuizReviewBtn) {
        toggleQuizReviewBtn.addEventListener('click', () => {
            if (!quizReviewSection) return;
            const isVisible = quizReviewSection.style.display === 'block';
            quizReviewSection.style.display = isVisible ? 'none' : 'block';
            toggleQuizReviewBtn.innerHTML = isVisible ?
                '<i class="fa-solid fa-list-check"></i> <span>مراجعة الأسئلة وتفسيرها</span>' :
                '<i class="fa-solid fa-chevron-up"></i> <span>إخفاء تفاصيل المراجعة</span>';
            if (!isVisible) {
                quizReviewSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }

    if (shareQuizBtn) {
        shareQuizBtn.addEventListener('click', () => {
            const shareText = `حققت نتيجة ${toArabicDigits(quizScore)} من أصل ${toArabicDigits(quizTotalCount)} في اختبار حفظ القرآن الكريم بمقرأة فضيلة الشيخ أحمد مرتضى حامد المباركة بالأقصر 🌟📖\nاختبر حفظك لكتاب الله: ${window.location.href}`;
            copyToClipboard(shareText, 'تم نسخ نتيجة الاختبار لمشاركتها مع إخوانك! 📋');
        });
    }

    // ط. التحميل الأولي
    loadSurah(1);
}

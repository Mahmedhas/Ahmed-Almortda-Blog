/**
 * مدونة ومكتبة فضيلة الشيخ أحمد مرتضى حامد الرسمية
 * كود جافاسكريبت نقي (Vanilla JS) - محرك الفيديوهات الحقيقية وخاصية عرض المزيد حتى أقدم فيديو
 */

// ==========================================================================
// 1. الأرشيف الكامل لفيديوهات ودروس الشيخ الحقيقية من الأحدث حتى أقدم تسجيل
// ==========================================================================
const INITIAL_VIDEOS = [
    {
        "id": "hdvZ3sX_bB0",
        "title": "لقاء الأحد بساحة فضيلة الشيخ أحمد مرتضى حامد حفظه الله ��حضور الشيخ سلطان الجيلاني الأحد ٢٧-٩-٢٠٢٦",
        "category": "ساحة_الأقصر",
        "date": "2026-09-27",
        "duration": "درس مرئي حديث",
        "views": 11,
        "desc": "لقاء الأحد بساحة فضيلة الشيخ أحمد مرتضى حامد حفظه الله بحضور الشيخ سلطان الجيلاني الساحة الجيلانية  يوم الأحد الموافق ٢٧-٩-٢٠٢٦"
    },
    {
        "id": "pgsfKPLwo3M",
        "title": "لقاء الأربعاء بساحة فضيلة الشيخ أحمد مرتضى حامد حفظه الله اليوم الأربعاء الموافق ٢٣-٩-٢٠٢٦",
        "category": "السيرة_النبوية",
        "date": "2026-09-23",
        "duration": "درس مرئي حديث",
        "views": 55,
        "desc": "لقاء الأربعاء بساحة فضيلة الشيخ أحمد مرتضى حامد حفظه الله  اليوم الأربعاء الموافق ٢٣-٩-٢٠٢٦"
    },
    {
        "id": "7kpOUDiZLwg",
        "title": "مديح السيد صالح المرتضى بالساحة الرضوانية بحضور العارف بالله الشيخ زين العابدين أحمد رضوان",
        "category": "ساحة_الأقصر",
        "date": "2026-09-23",
        "duration": "درس مرئي حديث",
        "views": 123,
        "desc": "مديح السيد صالح المرتضى بالساحة الرضوانية بحضور العارف بالله الشيخ زين العابدين أحمد رضوان  اليوم الأربعاء الموافق ٢٣-٩-٢٠٢٦"
    },
    {
        "id": "Uq69n1NXHRA",
        "title": "مديح السيد صالح المرتضى بالساحة الرضوانية بحضور العارف بالله الشيخ زين العابدين أحمد رضوان",
        "category": "ساحة_الأقصر",
        "date": "2026-09-23",
        "duration": "درس مرئي حديث",
        "views": 104,
        "desc": "مديح السيد صالح المرتضى بالساحة الرضوانية بحضور العارف بالله الشيخ زين العابدين أحمد رضوان  ال��وم الأربعاء الموافق ٢٣-٩-٢٠٢٦"
    },
    {
        "id": "vVrbqT1sSWg",
        "title": "مديح السيد صالح المرتضى في الإحتفال بمولد العارف بالله الحاج أحمد رضوان  الاثنين الموافق ٢١-٩-٢٠٢٦",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-21",
        "duration": "درس مرئي حديث",
        "views": 64,
        "desc": "مديح السيد صالح المرتضى في الإحتفال بمولد العارف بالله الحاج أحمد رضوان بحضور العارف بالله الشيخ زين العابدين أحمد رضوان بالساحة الرضوانية يوم الاثنين الموافق ٢١-٩-٢٠٢٦"
    },
    {
        "id": "3pHYS40ipPc",
        "title": "لقاء الأحد بساحة فضيلة الشيخ أحمد مرتضى حامد حفظه الله اليوم الأحد الموافق ٢٠-٩-٢٠٢٦",
        "category": "ساحة_الأقصر",
        "date": "2026-09-20",
        "duration": "درس مرئي حديث",
        "views": 57,
        "desc": "لقاء الأحد بساحة فضيلة الشيخ أحمد مرتضى حامد حفظه الله  اليوم الأحد الموافق ٢٠-٩-٢٠٢٦"
    },
    {
        "id": "Sgb9Bci_S-I",
        "title": "الاحتفال بالمولد النبوي الشريف عند الحاج رجب عبد الحميد بحضور فضيلة الشيخ أحمد مرتضى السبت ١٩-٩-٢٠٢٦",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-19",
        "duration": "درس مرئي حديث",
        "views": 126,
        "desc": "الاحتفال بالمولد النبوي الشريف عند الحاج رجب عبد الحميد شحاته بحضور فضيلة الشيخ أحمد مرتضى حامد حفظه الله ونخبة من علماء الأزهر الشريف  اليوم السبت الموافق ١٩-٩-٢٠٢٦"
    },
    {
        "id": "L2RPyWFTzeI",
        "title": "لقاء لفضيلة الشيخ أحمد مرتضى حامد حفظه الله اليوم السبت الموافق ١٩-٩-٢٠٢٦",
        "category": "ساحة_الأقصر",
        "date": "2026-09-19",
        "duration": "درس مرئي حديث",
        "views": 35,
        "desc": "لقاء لفضيلة الشيخ أحمد مرتضى حامد حفظه الله اليوم السبت الموافق ١٩-٩-٢٠٢٦"
    },
    {
        "id": "fnIlRMeda9o",
        "title": "الاحتفال بالمولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى حامد الجمعة الموافق ١٨-٩-٢٠٢٦",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-18",
        "duration": "درس مرئي حديث",
        "views": 139,
        "desc": "الاحتفال بالمولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى حامد حفظه الله ونخبة من علماء الأزهر الشريف  اليوم الجمعة الموافق ١٨-٩-٢٠٢٦"
    },
    {
        "id": "pZJZm74ytfQ",
        "title": "الاحتفال بالمولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى حامد الخميس الموافق ١٧-٩-٢٠٢٦",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-17",
        "duration": "درس مرئي حديث",
        "views": 82,
        "desc": "الاحتفال بالمولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى حامد حفظه الله ونخبة من علماء الأزهر الشريف  اليوم الخميس الموافق ١٧-٩-٢٠٢٦"
    },
    {
        "id": "XwuhuWjWHNk",
        "title": "جزء من لقاء لفضيلة الشيخ أحمد مرتضى حامد يوم الثلاثاء الموافق ١٦-٩-٢٠٢٦",
        "category": "ساحة_الأقصر",
        "date": "2026-09-16",
        "duration": "درس مرئي حديث",
        "views": 61,
        "desc": "جزء من لقاء لفضيلة الشيخ أحمد مرتضى حامد يوم الثلاثاء الموافق ١٦-٩-٢٠٢٦"
    },
    {
        "id": "oG0ZNK2wj50",
        "title": "الاحتفال بالمولد النبوي الشريف وحفل زفاف الأستاذ محمود سمير بحضور بفضيلة الشيخ أحمد مرتضى",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-16",
        "duration": "درس مرئي حديث",
        "views": 46,
        "desc": "الاحتفال بالمولد النبوي الشريف وحفل زفاف الأستاذ محمود سمير  بحضور بفضيلة الشيخ أحمد مرتضى حامد حفظه الله ونخبة من علماء الأزهر الشريف  اليوم ال��ربعاء الموافق ١٦-٩-٢٠٢٦"
    },
    {
        "id": "gvfMTvKWIsU",
        "title": "الاحتفال بالمولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى حامد الثلاثاء الموافق ١٥-٩-٢٠٢٦",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-16",
        "duration": "درس مرئي حديث",
        "views": 44,
        "desc": "الاحتفال بالمولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى حامد حفظه الله ونخبة من علماء الأزهر الشريف  يوم الثلاثاء الموافق ١٥-٩-٢٠٢٦"
    },
    {
        "id": "7qglPyw8IhE",
        "title": "كلمة السيد محمد أحمد مرتضى فى الاحتفال بالمولد النبوي الشريف",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-16",
        "duration": "درس مرئي حديث",
        "views": 15,
        "desc": "كلمة السيد محمد أحمد مرتضى فى الاحتفال بالمولد النبوي الشريف وتكريم حفظه القرآن الكريم بساحة الروضة بحاجر خزام اليوم الثلاثاء الموافق ١٥-٩-٢٠٢٦"
    },
    {
        "id": "3BJWnq-1cxY",
        "title": "الاحتفال بالمولد النبوي الشريف وحفل زفاف أ. أحمد حامد هاشم بالعتامين بحضور فضيلة الشيخ أحمد مرتضى",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-14",
        "duration": "درس مرئي حديث",
        "views": 116,
        "desc": "الاحتفال بالمولد النبوي الشريف وحفل زفاف الاستاذ احمد حامد هاشم بالعتامين  بحضور فضيلة الشيخ أحمد مرتضى حامد حفظه الله ونخبة من علماء الأزهر الشريف  اليوم الاثنين الموافق ١٤-٩-٢٠٢٦"
    },
    {
        "id": "pZmsXZAEC_0",
        "title": "الاحتفال بالمولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى حامد الاثنين الموافق ١٤-٩-٢٠٢٦",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-14",
        "duration": "درس مرئي حديث",
        "views": 48,
        "desc": "الاحتفال بالمولد النبوي الشريف وحفل زفاف الاستاذ احمد حامد هاشم بالعتامين  بحضور فضيلة الشيخ أحمد مرتضى حامد حفظه الله ونخبة من علماء الأزهر الشريف  اليوم الاثنين الموافق ١٤-٩-٢٠٢٦"
    },
    {
        "id": "k-Alu9lbJiI",
        "title": "الاحتفال بالمولد النبوي الشريف بحضور فضيلة ��لشيخ أحمد مرتضى السبت الموافق ١٢-٩-٢٠٢٦",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-12",
        "duration": "درس مرئي حديث",
        "views": 121,
        "desc": "الاحتفال بالمولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى حامد حفظه الله ونخبة من علماء الأزهر الشريف  السبت الموافق ١٢-٩-٢٠٢٦"
    },
    {
        "id": "g6IH1JagAaI",
        "title": "الاحتفال بالمولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى حامد الجمعة الموافق ١١-٩-٢٠٢٦",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-11",
        "duration": "درس مرئي حديث",
        "views": 64,
        "desc": "الاحتفال بالمولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى حامد حفظه الله ونخبة من علماء الأزهر الشريف  اليوم الجمعة الموافق ١١-٩-٢٠٢٦"
    },
    {
        "id": "u5gB4T2KCj4",
        "title": "أهالي وشباب نجع السوالم يحتفلون بالمولد النبوي الشريف ويرحبون بفضيلة الشيخ أحمد مرتضى حامد",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-10",
        "duration": "1:05:40",
        "views": 104,
        "desc": "أمسية بهيجة في استقبال فضيلة الشيخ أحمد مرتضى حامد بنجع السوالم احتفالاً بذكرى المولد النبوي الشريف، وتناول جوانب الرحمة والمودة في السيرة المحمدية."
    },
    {
        "id": "3lErlXiSfZs",
        "title": "الاحتفال بالمولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى حامد بساحة الأقصر",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-09",
        "duration": "1:22:45",
        "views": 184,
        "desc": "احتفالية كبرى بالمولد النبوي الشريف بساحة الشيخ بالأقصر بحضور علماء الأزهر الشريف، متضمنة درساً جامعاً ومدائح وابتهالات نبوية."
    },
    {
        "id": "n2NS4n1BKMA",
        "title": "مجلس المولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى حامد - في رحاب المحبة النبوية",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-08",
        "duration": "58:15",
        "views": 96,
        "desc": "أمسية روحانية مباركة في حب النبي المصطفى ﷺ، وبيان أثر الصلاة عليه وتطبيق سنته في السلوك والمعاملات اليومية."
    },
    {
        "id": "NG1DTB7Pdrg",
        "title": "الاحتفال بالمولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى حامد ومحبي الساحة",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-07",
        "duration": "1:14:10",
        "views": 71,
        "desc": "مجلس إيماني جامع يستعرض أخلاق المصطفى ﷺ وشمائله العطرة مع تلاوات قرآنية خاشعة وإنشاد ديني."
    },
    {
        "id": "_jAQbwoP_Tc",
        "title": "أمسية المولد النبوي الشريف العطرة بحضور فضيلة الشيخ أحمد مرتضى حامد",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-07",
        "duration": "1:02:30",
        "views": 79,
        "desc": "توثيق احتفالات المولد النبوي الشريف المبارك بكلمة جامعة لفضيلة الشيخ في أهمية التآلف والتراحم بين المسلمين."
    },
    {
        "id": "srQQSoLdgJ0",
        "title": "مجلس ذكر ومديح بمناسبة المولد النبوي الشريف بضيافة فضيلة الشيخ أحمد مرتضى",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-06",
        "duration": "54:20",
        "views": 110,
        "desc": "حلقات مديح وصلاة على النبي المختار ﷺ وكلمات وعظية مؤثرة في ترقيق القلوب وتجديد العهد مع الله ورسوله."
    },
    {
        "id": "39ds0xMTiE0",
        "title": "أمسية المولد النبوي الشريف - الحاج أحمد سعدى وأبنائه يرحبون بفضيلة الشيخ أحمد مرتضى",
        "category": "ساحة_الأقصر",
        "date": "2026-09-05",
        "duration": "48:50",
        "views": 883,
        "desc": "لقاء ودي وإيماني جامع في حب النبي المصطفى ﷺ، والحديث عن فضيلة صلة الرحم والتزاور في الله وإطعام الطعام."
    },
    {
        "id": "sz9G7eqt3MQ",
        "title": "أهالي نجع السوالم يحتفلون بذكرى المولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-04",
        "duration": "56:15",
        "views": 73,
        "desc": "احتفالية بهيجة بالصلاة على رسول الله وسماع قصائد البردة والمدائح المحمدية في صعيد مصر الطيب."
    },
    {
        "id": "9kA4GDj64dc",
        "title": "لقاء المولد النبوي الشريف مع فضيلة الشيخ أحمد مرتضى حامد في صعيد مصر",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-03",
        "duration": "51:30",
        "views": 98,
        "desc": "موعظة بليغة حول وجوب شكر نعمة بعثة النبي الخاتم رحمة للعالمين، والتخلق بأخلاقه في البيوت والشوارع والأسواق."
    },
    {
        "id": "osNxcRn6DGY",
        "title": "أمسية دينية وموعظة جامعة بحضور فضيلة الشيخ أحمد مرتضى حامد",
        "category": "تزكية_النفوس",
        "date": "2026-09-02",
        "duration": "42:10",
        "views": 44,
        "desc": "نصائح جامعة في بناء الأسرة المسلمة، وحسن العشرة، وطهارة القلب، وبركة مجالس العلم والمحبة."
    },
    {
        "id": "kq43jIt9FiQ",
        "title": "أهالي نجع محمد موسى يرحبون بفضيلة الشيخ أحمد مرتضى حامد في ذكرى المولد النبوي",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-01",
        "duration": "49:40",
        "views": 113,
        "desc": "لقاء عامر بالذكر والتذكير ونفحات المولد الشريف في محافظة الأقصر بصعيد مصر."
    },
    {
        "id": "IN_Ac_xt1rY",
        "title": "الاحتفال بالمولد النبوي الشريف بحضور فضيلة الشيخ أحمد مرتضى حامد",
        "category": "مناسبات_وأمسيات",
        "date": "2026-09-01",
        "duration": "46:15",
        "views": 105,
        "desc": "مقتطفات من كلمة الشيخ عن حب النبي ﷺ وكيف يكون الحب الحقيقي بالاتباع والصدق ونقاء السريرة."
    },
    {
        "id": "VXMIZ2bobTM",
        "title": "دار المرتضى لتحفيظ القرآن الكريم وعلومه - شمولية معرفية ودراسة أكاديمية عصرية",
        "category": "علوم_القرآن",
        "date": "2026-08-31",
        "duration": "38:20",
        "views": 83,
        "desc": "تقرير وتعريف بجهود دار المرتضى في تعليم كتاب الله وتدبر علومه للناشئة والكبار تحت إشراف ورعاية ساحة الشيخ بالأقصر."
    },
    {
        "id": "b4Idc6Dc430",
        "title": "أهالي آل عتمان يرحبون بفضيلة الشيخ أحمد مرتضى حامد في ذكرى المولد النبوي الشريف",
        "category": "ساحة_الأقصر",
        "date": "2026-08-31",
        "duration": "44:30",
        "views": 98,
        "desc": "أجواء من المحبة والمودة وتجمع أبناء العائلات حول موائد الذكر والعلم ومحبة آل بيت رسول الله."
    },
    {
        "id": "TyVFgu6pmTc",
        "title": "أهالي نجع الزناقطة يحتفلون بالمولد النبوي ويرحبون بفضيلة الشيخ أحمد مرتضى حامد",
        "category": "ساحة_الأقصر",
        "date": "2026-08-30",
        "duration": "47:00",
        "views": 93,
        "desc": "تغطية احتفالية المولد النبوي بنجع الزناقطة بالأقصر بحضور فضيلة الشيخ وجمع غفير من الأهالي."
    },
    {
        "id": "bMkQiAA0tds",
        "title": "لقاء فضيلة الشيخ أحمد مرتضى حامد بمدينة إسنا - موعظة جامعة في السلوك والأخلاق",
        "category": "تزكية_النفوس",
        "date": "2026-08-16",
        "duration": "47:50",
        "views": 58,
        "desc": "محاضرة إيمانية هادفة في ضيافة أهالي إسنا تتناول صفاء القلوب وطهارة الباطن وأهمية صلة الأرحام والتآخي."
    },
    {
        "id": "IHy9m8AAKSY",
        "title": "أمسية دينية كبرى لفضيلة الشيخ أحمد مرتضى حامد بمناسبة المولد النبوي الشريف",
        "category": "مناسبات_وأمسيات",
        "date": "2026-08-15",
        "duration": "58:30",
        "views": 149,
        "desc": "مجلس إيماني مهيب بحضور وفود المحبين من صعيد مصر، وتناول فضائل الصلاة على النبي المختار ﷺ."
    },
    {
        "id": "NVc_-QaM3ok",
        "title": "لقاء الأربعاء المبارك بساحة الشيخ أحمد مرتضى - في رحاب السيرة النبوية",
        "category": "السيرة_النبوية",
        "date": "2026-08-12",
        "duration": "44:15",
        "views": 68,
        "desc": "مجلس الأربعاء الدوري الخاص بمدارسة السيرة العطرة واستلهام أخلاق النبي ﷺ في المعاملة والرحمة."
    },
    {
        "id": "p_qo0ivfcTY",
        "title": "لقاء الأربعاء بساحة فضيلة الشيخ أحمد مرتضى حامد - قبسات من نور النبوة",
        "category": "تزكية_النفوس",
        "date": "2026-07-29",
        "duration": "49:30",
        "views": 84,
        "desc": "موعظة روحانية مؤثرة عن تزكية النفس ومراقبة الله في السر والعلن، والتحذير من أمراض القلوب."
    },
    {
        "id": "R0XX08S1T_k",
        "title": "درس لقاء الأحد الأسبوعي بساحة فضيلة الشيخ أحمد مرتضى حامد بالأقصر",
        "category": "تزكية_النفوس",
        "date": "2026-07-19",
        "duration": "52:40",
        "views": 112,
        "desc": "درس تربوي متعمق في مراتب اليقين والتوكل على الله، وكيف يجد المسلم طمأنينة القلب وانشراح الصدر."
    },
    {
        "id": "BITQFwkeCnQ",
        "title": "لقاء الأحد بساحة فضيلة الشيخ أحمد مرتضى حامد بالأقصر بحضور علماء الأزهر",
        "category": "ساحة_الأقصر",
        "date": "2026-05-24",
        "duration": "1:05:15",
        "views": 48,
        "desc": "لقاء الأحد الأسبوعي المشهور بساحة الشيخ، يتضمن موعظة بليغة في التسامح والمحبة وتزكية النفوس."
    },
    {
        "id": "h4rw_aX74sw",
        "title": "الاحتفال بليلة الإسراء والمعراج من ساحة فضيلة الشيخ أحمد مرتضى حامد بالأقصر",
        "category": "مناسبات_وأمسيات",
        "date": "2026-01-15",
        "duration": "1:15:00",
        "views": 87,
        "desc": "احتفالية عطرة بالمعجزة الخالدة لسيدنا رسول الله ﷺ، والدروس العظيمة المستفادة من رحلة الإسراء والمعراج."
    },
    {
        "id": "dzruzL2BIk8",
        "title": "يا هنا مصر يوم جاء حسينا - احتفالات محبة آل البيت بساحة الشيخ أحمد مرتضى",
        "category": "رقائق_وقصائر",
        "date": "2025-10-22",
        "duration": "26:40",
        "views": 60,
        "desc": "أجواء من المديح النبوي الصادق ومحبة آل بيت المصطفى ﷺ والصحابة الأجلاء، وإنشاد ديني عذب بساحة الأقصر."
    },
    {
        "id": "3ZWl2ghSm2Y",
        "title": "الإفطار السنوي بساحة فضيلة الشيخ أحمد مرتضى حامد بالأقصر - إطعام الطعام والمحبة",
        "category": "ساحة_الأقصر",
        "date": "2025-03-09",
        "duration": "32:15",
        "views": 1054,
        "desc": "توثيق مشاهد الإفطار السنوي الجامع الذي تنظمه ساحة الشيخ لإطعام الطعام واستقبال آلاف الصائمين والضيوف."
    },
    {
        "id": "XIzzmGjZDO4",
        "title": "أمسية رمضانية عطرة مع الشيخ أحمد مرتضى ونخبة من كبار علماء الأزهر الشريف",
        "category": "مناسبات_وأمسيات",
        "date": "2025-03-20",
        "duration": "1:18:00",
        "views": 135,
        "desc": "أجواء إيمانية خاشعة في ليالي شهر رمضان المبارك بساحة الأقصر، ومدارسة لأسرار الصيام وتدبر آيات القرآن."
    },
    {
        "id": "vItWpj_Mm9I",
        "title": "لقاء الأربعاء بساحة الشيخ أحمد مرتضى بحضور كبار علماء الأزهر والأوقاف",
        "category": "السيرة_النبوية",
        "date": "2025-02-12",
        "duration": "1:08:20",
        "views": 231,
        "desc": "مجلس حافل بحضور كبار قيادات وعلماء وزارة الأوقاف والأزهر الشريف، وتدارس لآيات الذكر الحكيم وفضائل الصلاة على النبي ﷺ."
    },
    {
        "id": "EWZbUsDkmkU",
        "title": "لقاء الأحد الروحاني بساحة الشيخ أحمد مرتضى حامد بحضور السادة الجيلانية",
        "category": "ساحة_الأقصر",
        "date": "2025-02-09",
        "duration": "1:12:30",
        "views": 34,
        "desc": "لقاء أخوي مبارك يجمع علماء ومشايخ السادة الجيلانية بساحة الشيخ بالأقصر، وتناول معاني التصوف السني المعتدل."
    },
    {
        "id": "Ep7nZ4v_v90",
        "title": "الاحتفال بليلة القدر المباركة من ساحة فضيلة الشيخ أحمد مرتضى حامد",
        "category": "مناسبات_وأمسيات",
        "date": "2024-04-05",
        "duration": "1:35:10",
        "views": 227,
        "desc": "ليلة مباركة خاشعة عامرة بالدعاء والتضرع وتلاوة القرآن الكريم وصلاة القيام بساحة الشيخ بالأقصر."
    },
    {
        "id": "Bx2o-QO2H1U",
        "title": "نبذة تعريفية مباركة عن فضيلة الشيخ أحمد مرتضى حامد حفظه الله ونشأته بساحة الأقصر",
        "category": "ساحة_الأقصر",
        "date": "2024-01-15",
        "duration": "14:20",
        "views": 903,
        "desc": "أقدم تسجيل تعريفي وثائقي يستعرض نشأة فضيلة الشيخ أحمد مرتضى حامد في بيت علم وصلاح، وبدايات دعوته وتأسيس ساحته المباركة بالأقصر."
    }
];

// ==========================================================================
// 2. درر وحكم إيمانية من كلام الشيخ
// ==========================================================================
const SPIRITUAL_QUOTES = [
    {
        id: 1,
        category: "تزكية النفس",
        quote: "إذا أردت أن يُصلح الله لك دنياك وآخرتك، فاجعل همّك الأول رضا الله ورسوله، وطهّر سريرتك من كل غلٍّ وحسد.",
        source: "من درس لقاء الأحد بساحة الأقصر"
    },
    {
        id: 2,
        category: "محبة النبي ﷺ",
        quote: "الصلاة على سيدنا رسول الله ﷺ هي مفتاح كل خير، وبها تُكفى الهموم وتُغفر الذنوب ويُفتح باب المعرفة والسكينة.",
        source: "من مجلس الصلاة على الحبيب"
    },
    {
        id: 3,
        category: "أخلاق المسلم",
        quote: "ليس الشأن أن يُحبك الناس بالكلام، بل الشأن أن تعامل خلق الله بالرحمة واللين كما كان يفعل سيد الخلق ﷺ.",
        source: "من دروس الشمائل المحمدية"
    },
    {
        id: 4,
        category: "الرضا واليقين",
        quote: "اطمئن، فما من بلاء ينزل إلا وفيه لطف خفي من رب العالمين، فسلّم أمرك لله تجد قلباً مطمئناً راضياً.",
        source: "من موعظة السكينة واليقين"
    },
    {
        id: 5,
        category: "بر الوالدين وصلة الرحم",
        quote: "أعظم أبواب الفتوح والبركة في الرزق والعمر بر الوالدين والإحسان إلى ذوي القربى ولين الجانب للمحتاجين.",
        source: "من لقاءات الساحة"
    },
    {
        id: 6,
        category: "الذكر وحياة القلب",
        quote: "القلب كالأرض العطشى، وغيثها الذكر المستمر؛ فمن رطّب لسانه بالذكر أزهر قلبه بالطمأنينة والنور والهدوء.",
        source: "من لطائف الذكر"
    }
];

// ==========================================================================
// 3. مدير الحالة (State Manager) مع إدارة عدد الفيديوهات المعروضة
// ==========================================================================
function getVideosPerPage() {
    return 4;
}

let VIDEOS_PER_PAGE = getVideosPerPage();

const isFileProtocol = typeof window !== 'undefined' && window.location && window.location.protocol === 'file:';

const state = {
    videos: [],
    favorites: new Set(),
    activeCategory: 'all',
    searchQuery: '',
    sortOrder: 'date-desc',
    onlyFavorites: false,
    visibleCount: getVideosPerPage(),
    tasbihCount: 0,
    tasbihTotal: 0
};

// أسماء التصنيفات
const CATEGORY_NAMES = {
    'all': 'جميع الدروس',
    'ساحة_الأقصر': 'لقاءات الساحة بالأقصر',
    'السيرة_النبوية': 'السيرة والشمائل المحمدية',
    'تزكية_النفوس': 'تزكية القلوب والأخلاق',
    'علوم_القرآن': 'تدبر القرآن الكريم',
    'مناسبات_وأمسيات': 'مناسبات وأمسيات دينية',
    'رقائق_وقصائر': 'رقائق ومواعظ قصيرة'
};

// ==========================================================================
// 4. دالة التهيئة والتشغيل عند تحميل الصفحة
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadStoredData();
    initEventListeners();
    renderQuotes();
    applyFiltersAndRender();
    initTasbih();
    initMaqraahEngine();

    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ==========================================================================
// 5. إدارة الثيم (الوضع الليلي والنهاري)
// ==========================================================================
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

// ==========================================================================
// 6. تحميل البيانات من LocalStorage والخادم الخلفي والمزامنة التلقائية
// ==========================================================================
async function loadStoredData() {
    const legacyInvalidIds = ["Y9E9QpT8Gwl", "ExVo5zXgnlJ", "HbEqZiS_Mht", "EG-az2ECAhP", "F7P6xyLp1Ya", "E4JZUosk4Ur", "GsMLFp2yu79", "FLQumfbTzok", "FM08-dr9Roa", "HDMQe2sp5N2", "HcwHIeuxORb", "E1y6KNysJcI"];
    try {
        let storedFavs = JSON.parse(localStorage.getItem('sheikh_favorites') || '[]');
        storedFavs = storedFavs.filter(id => !legacyInvalidIds.includes(id));
        state.favorites = new Set(storedFavs);
        localStorage.setItem('sheikh_favorites', JSON.stringify(storedFavs));
    } catch (e) {
        state.favorites = new Set();
    }
    updateFavBadge();

    let customVideos = [];
    try {
        customVideos = JSON.parse(localStorage.getItem('sheikh_custom_videos') || '[]');
        customVideos = customVideos.filter(v => v && v.id && v.id.length === 11 && !legacyInvalidIds.includes(v.id));
        localStorage.setItem('sheikh_custom_videos', JSON.stringify(customVideos));
    } catch (e) {
        customVideos = [];
    }

    const combined = [...customVideos, ...INITIAL_VIDEOS];
    
    const map = new Map();
    combined.forEach(item => {
        if (!map.has(item.id)) {
            map.set(item.id, item);
        }
    });

    state.videos = Array.from(map.values());

    const totalStat = document.getElementById('totalVideosStat');
    if (totalStat) totalStat.textContent = state.videos.length.toLocaleString('ar-EG');

    // تحميل وتطبيق الإعدادات المحفوظة محلياً فوراً لسرعة العرض
    try {
        const localSettings = JSON.parse(localStorage.getItem('sheikh_settings') || 'null');
        if (localSettings) {
            applyServerSettings(localSettings);
        }
    } catch (e) {}

    // إذا تم فتح الموقع كملف محلي مباشر (file://)، نكتفي بالأرشيف المدمج الفوري ونلغي طلبات الشبكة لتفادي أخطاء CORS
    if (isFileProtocol) {
        showLocalFileBanner();
        return;
    }

    // جلب أحدث الإعدادات من الخادم فوراً وبدون كاش لتحديث أي صورة مخصصة أو وسائط مباشرة
    fetch('/api/settings', { cache: 'no-cache' })
        .then(r => r.json())
        .then(d => {
            if (d && d.success && d.settings) {
                try { localStorage.setItem('sheikh_settings', JSON.stringify(d.settings)); } catch(e){}
                applyServerSettings(d.settings);
            }
        })
        .catch(() => {});

    // محاولة الاتصال بالخادم الخلفي لجلب أحدث أرشيف والمزامنة الفورية من يوتيوب
    fetchServerDataAndSync();
}

async function fetchServerDataAndSync() {
    if (isFileProtocol) return;

    try {
        const res = await fetch('/api/videos', { cache: 'no-cache' });
        if (res.ok) {
            const data = await res.json();
            if (data.success && Array.isArray(data.videos) && data.videos.length > 0) {
                state.videos = data.videos;
                const totalStat = document.getElementById('totalVideosStat');
                if (totalStat) totalStat.textContent = state.videos.length.toLocaleString('ar-EG');
                applyFiltersAndRender();
            }
        }
    } catch (e) {
        // الخادم غير متصل، يستمر الموقع بالاعتماد السلس على التخزين المحلي
    }

    // جلب الإعدادات والدرر والمواعظ المحدثة من الخادم
    try {
        const setRes = await fetch('/api/settings', { cache: 'no-cache' });
        if (setRes.ok) {
            const setData = await setRes.json();
            if (setData.success && setData.settings) {
                try { localStorage.setItem('sheikh_settings', JSON.stringify(setData.settings)); } catch (e) {}
                applyServerSettings(setData.settings);
            }
        }
    } catch (e) {}

    // إجراء مزامنة تلقائية هادئة في الخلفية بعد تحميل الصفحة بـ 1.5 ثانية
    setTimeout(triggerBackgroundSync, 1500);

    // جدولة فحص دوري تلقائي كل دقيقتين لجلب أي فيديو جديد ينشره الشيخ فوراً
    if (!window._sheikhSyncInterval) {
        window._sheikhSyncInterval = setInterval(triggerBackgroundSync, 2 * 60 * 1000);
    }
}

async function triggerBackgroundSync() {
    if (isFileProtocol) return;

    try {
        const token = localStorage.getItem('sheikh_admin_token') || localStorage.getItem('admin_token');
        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
        const syncRes = await fetch('/api/sync', { method: 'POST', headers });
        if (syncRes.ok) {
            const syncData = await syncRes.json();
            if (syncData.success && syncData.addedCount > 0) {
                showToast(`تم تلقائياً جلب (${syncData.addedCount}) درس جديد من قناة الشيخ على يوتيوب! 🌿`, 'success');
                const vRes = await fetch('/api/videos');
                const vData = await vRes.json();
                if (vData.success && Array.isArray(vData.videos)) {
                    state.videos = vData.videos;
                    const totalStat = document.getElementById('totalVideosStat');
                    if (totalStat) totalStat.textContent = state.videos.length.toLocaleString('ar-EG');
                    applyFiltersAndRender();
                }
            }
        }
    } catch (err) {
        // إذا كان هناك خطأ في الخادم
    }
}

/**
 * محرك مزامنة احتياطي يعمل داخل المتصفح مباشرة إذا كان الموقع يعمل بدون خادم محلي
 */
async function syncYouTubeFeedClientSide() {
    if (isFileProtocol) return; // منع طلب CORS عند فتح ملف محلي لأن origin يكون null

    try {
        const channelId = 'UCB_Glq0cZ2TQtGiWfqUotJw';
        const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`;
        const res = await fetch(proxyUrl);
        if (!res.ok) return;
        const xml = await res.text();
        const entryMatches = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
        if (!entryMatches || entryMatches.length === 0) return;

        let addedCount = 0;
        const existingIds = new Set(state.videos.map(v => v.id));
        const newVids = [];

        for (const match of entryMatches) {
            const block = match[1];
            const idMatch = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
            const titleMatch = block.match(/<title>([^<]+)<\/title>/);
            const publishedMatch = block.match(/<published>([^<]+)<\/published>/);
            const descMatch = block.match(/<media:description>([\s\S]*?)<\/media:description>/);

            if (!idMatch || !titleMatch) continue;
            const vidId = idMatch[1].trim();
            if (existingIds.has(vidId)) continue;

            let title = titleMatch[1].trim()
                .replace(/&quot;/g, '"')
                .replace(/&amp;/g, '&')
                .replace(/&#39;/g, "'")
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>');
            const published = publishedMatch ? publishedMatch[1].trim().split('T')[0] : new Date().toISOString().split('T')[0];
            let descText = descMatch ? descMatch[1].trim().replace(/\n+/g, ' ').substring(0, 180) : 'درس ومجلس علمي منشور حديثاً على القناة الرسمية لفضيلة الشيخ أحمد مرتضى حامد.';

            let category = 'ساحة_الأقصر';
            if (title.includes('مولد') || title.includes('المولد') || title.includes('رمضان')) category = 'مناسبات_وأمسيات';
            else if (title.includes('السيرة') || title.includes('الشمائل')) category = 'السيرة_النبوية';
            else if (title.includes('تزكية') || title.includes('أخلاق')) category = 'تزكية_النفوس';
            else if (title.includes('قرآن') || title.includes('سورة')) category = 'علوم_القرآن';

            const newVid = {
                id: vidId,
                title,
                category,
                date: published,
                duration: 'درس مرئي حديث',
                views: 10000,
                desc: descText
            };

            newVids.push(newVid);
            existingIds.add(vidId);
            addedCount++;
        }

        if (addedCount > 0) {
            state.videos = [...newVids, ...state.videos];
            try {
                const storedCustom = JSON.parse(localStorage.getItem('sheikh_custom_videos') || '[]');
                localStorage.setItem('sheikh_custom_videos', JSON.stringify([...newVids, ...storedCustom]));
            } catch (e) {}
            const totalStat = document.getElementById('totalVideosStat');
            if (totalStat) totalStat.textContent = state.videos.length.toLocaleString('ar-EG');
            updateHeroFeaturedVideo();
            applyFiltersAndRender();
            showToast(`تم تلقائياً تحديث (${addedCount}) درس جديد من قناة الشيخ على يوتيوب! 🌿`, 'success');
        }
    } catch (e) {}
}

function applyServerSettings(settings) {
    if (!settings) return;

    // 1. تحديث نص الشريط الإخباري العلوي
    const announcementEl = document.getElementById('topAnnouncementText') || document.querySelector('.basmala-text') || document.querySelector('.ticker-text');
    if (announcementEl && settings.announcement) {
        announcementEl.textContent = settings.announcement;
    }

    // 2. تحديث منصات التواصل الاجتماعي ديناميكياً بأيقوناتها وبطاقاتها
    renderDynamicSocialLinks(settings.socialLinks || []);

    // 3. تحديث صورة الهيرو الرسمية لفضيلة الشيخ
    const heroMedia = settings.heroMedia || {};
    const imgUrl = heroMedia.customImageUrl || heroMedia.imageUrl || 'uploads/hero_1790644266215_39536263.jpg';

    const customImg = document.getElementById('heroCustomImage');
    const customTitle = document.getElementById('heroCustomTitle');
    const customDesc = document.getElementById('heroCustomDesc');

    if (customImg && imgUrl) {
        if (customImg.getAttribute('src') !== imgUrl) {
            customImg.src = imgUrl;
        }
        customImg.alt = heroMedia.title || heroMedia.imageTitle || 'فضيلة الشيخ أحمد مرتضى حامد';

        const updateOrientation = () => {
            const card = document.getElementById('heroFeaturedImageCard');
            const container = document.querySelector('.hero-container');
            if (!card || !customImg.naturalWidth || !customImg.naturalHeight) return;
            if (customImg.naturalHeight > customImg.naturalWidth) {
                card.classList.add('is-portrait');
                card.classList.remove('is-landscape');
                if (container) container.classList.add('has-portrait-hero');
                try { localStorage.setItem('hero_orientation', 'portrait'); } catch(e){}
            } else {
                card.classList.add('is-landscape');
                card.classList.remove('is-portrait');
                if (container) container.classList.remove('has-portrait-hero');
                try { localStorage.setItem('hero_orientation', 'landscape'); } catch(e){}
            }
        };
        if (customImg.complete && customImg.naturalWidth) {
            updateOrientation();
        } else {
            customImg.addEventListener('load', updateOrientation, { once: true });
        }
    }
    if (customTitle) {
        customTitle.textContent = heroMedia.title || heroMedia.imageTitle || 'فضيلة الشيخ أحمد مرتضى حامد';
    }
    if (customDesc) {
        customDesc.textContent = heroMedia.desc || heroMedia.imageSubtitle || 'من رحاب ساحة فضيلة الشيخ بالأقصر - منبر المحبة وتزكية النفوس وبث العلم النافع.';
    }

    // 4. تحديث مواعيد الساحة إذا كانت موجودة
    if (settings.schedule) {
        const sunTimeEl = document.querySelector('.schedule-card.featured .schedule-time');
        const sunDescEl = document.querySelector('.schedule-card.featured .schedule-desc');
        if (sunTimeEl && settings.schedule.sundayTime) {
            sunTimeEl.innerHTML = `<i class="fa-regular fa-clock"></i> ${escapeHtml(settings.schedule.sundayTime)}`;
        }
        if (sunDescEl && settings.schedule.sundayDesc) {
            sunDescEl.textContent = settings.schedule.sundayDesc;
        }

        const cards = document.querySelectorAll('.schedule-grid .schedule-card');
        if (cards[1] && settings.schedule.wedTime) {
            const t = cards[1].querySelector('.schedule-time');
            const d = cards[1].querySelector('.schedule-desc');
            if (t) t.innerHTML = `<i class="fa-regular fa-clock"></i> ${escapeHtml(settings.schedule.wedTime)}`;
            if (d) d.textContent = settings.schedule.wedDesc;
        }
        if (cards[2]) {
            const h = cards[2].querySelector('.schedule-day');
            const t = cards[2].querySelector('.schedule-time');
            const d = cards[2].querySelector('.schedule-desc');
            if (h && settings.schedule.fridayTitle) h.textContent = settings.schedule.fridayTitle;
            if (t && settings.schedule.fridayTime) t.innerHTML = `<i class="fa-regular fa-clock"></i> ${escapeHtml(settings.schedule.fridayTime)}`;
            if (d && settings.schedule.fridayDesc) d.textContent = settings.schedule.fridayDesc;
        }
    }

    // 5. تحديث المواعظ
    if (Array.isArray(settings.quotes) && settings.quotes.length > 0) {
        SPIRITUAL_QUOTES.length = 0;
        settings.quotes.forEach(q => SPIRITUAL_QUOTES.push(q));
        renderQuotes();
    }
}

// ==========================================================================
// محرك كشف منصات التواصل الاجتماعي والأيقونات الذكية بالواجهة الرئيسية
// ==========================================================================
function detectPlatform(url) {
    if (!url || typeof url !== 'string') {
        return {
            key: 'web',
            name: 'رابط خارجي',
            icon: 'fa-solid fa-globe',
            cssClass: 'web',
            color: '#C59B27',
            desc: 'الموقع والمنصة الرسمية المعتمدة لفضيلة الشيخ أحمد مرتضى حامد'
        };
    }

    const clean = url.toLowerCase().trim();

    if (clean.includes('youtube.com') || clean.includes('youtu.be')) {
        return {
            key: 'youtube',
            name: 'يوتيوب',
            icon: 'fa-brands fa-youtube',
            cssClass: 'yt',
            color: '#FF0000',
            desc: 'البث المباشر وأرشيف الدروس والمحاضرات الكاملة بجودة عالية'
        };
    }
    if (clean.includes('facebook.com') || clean.includes('fb.com') || clean.includes('fb.me') || clean.includes('fb.watch')) {
        return {
            key: 'facebook',
            name: 'فيسبوك',
            icon: 'fa-brands fa-facebook-f',
            cssClass: 'fb',
            color: '#1877F2',
            desc: 'التحديثات اليومية والمواعيد والمقتطفات المرئية لمجالس الساحة'
        };
    }
    if (clean.includes('t.me') || clean.includes('telegram.me') || clean.includes('telegram.org')) {
        return {
            key: 'telegram',
            name: 'تيليجرام',
            icon: 'fa-brands fa-telegram',
            cssClass: 'tg',
            color: '#229ED9',
            desc: 'الدروس الصوتية، المقاطع القصيرة، والمواعظ المكتوبة والمنشورات'
        };
    }
    if (clean.includes('wa.me') || clean.includes('whatsapp.com')) {
        return {
            key: 'whatsapp',
            name: 'واتساب',
            icon: 'fa-brands fa-whatsapp',
            cssClass: 'wa',
            color: '#25D366',
            desc: 'الاستفسارات والتواصل المباشر مع إدارة ساحة الشيخ بالأقصر'
        };
    }
    if (clean.includes('tiktok.com')) {
        return {
            key: 'tiktok',
            name: 'تيك توك',
            icon: 'fa-brands fa-tiktok',
            cssClass: 'tt',
            color: '#000000',
            desc: 'مقاطع دعوية قصيرة، رقائق إيمانية، وخلاصات مجالس العلم'
        };
    }
    if (clean.includes('instagram.com') || clean.includes('instagr.am')) {
        return {
            key: 'instagram',
            name: 'إنستغرام',
            icon: 'fa-brands fa-instagram',
            cssClass: 'ig',
            color: '#E1306C',
            desc: 'صور مجالس وفعاليات الساحة، الاقتباسات المصممة، والقصص اليومية'
        };
    }
    if (clean.includes('twitter.com') || clean.includes('x.com')) {
        return {
            key: 'twitter',
            name: 'منصة X',
            icon: 'fa-brands fa-x-twitter',
            cssClass: 'x',
            color: '#000000',
            desc: 'التغريدات الوعظية المباشرة، إعلانات الدروس، ودرر الكلمات'
        };
    }
    if (clean.includes('maps.google.') || clean.includes('goo.gl/maps') || clean.includes('maps.app.goo.gl') || clean.includes('google.com/maps')) {
        return {
            key: 'maps',
            name: 'موقع الساحة بالأقصر',
            icon: 'fa-solid fa-location-dot',
            cssClass: 'map',
            color: '#34A853',
            desc: 'العنوان الجغرافي الدقيق لساحة الشيخ بالأقصر للزوار والضيوف الكرام'
        };
    }
    if (clean.includes('soundcloud.com')) {
        return {
            key: 'soundcloud',
            name: 'ساوند كلاود',
            icon: 'fa-brands fa-soundcloud',
            cssClass: 'sc',
            color: '#FF5500',
            desc: 'تسجيلات الدروس الصوتية الكاملة والابتهالات النبوية العذبة'
        };
    }
    if (clean.includes('threads.net')) {
        return {
            key: 'threads',
            name: 'ثريدز',
            icon: 'fa-brands fa-threads',
            cssClass: 'th',
            color: '#000000',
            desc: 'الدرر الإيمانية والخواطر التربوية في رحاب الساحة'
        };
    }
    if (clean.includes('snapchat.com')) {
        return {
            key: 'snapchat',
            name: 'سناب شات',
            icon: 'fa-brands fa-snapchat',
            cssClass: 'snap',
            color: '#FFFC00',
            desc: 'يوميات وبث فعاليات الساحة المباركة بالأقصر'
        };
    }
    if (clean.includes('linkedin.com')) {
        return {
            key: 'linkedin',
            name: 'لينكد إن',
            icon: 'fa-brands fa-linkedin-in',
            cssClass: 'in',
            color: '#0A66C2',
            desc: 'الصفحة الرسمية المعتمدة في شبكة الأعمال'
        };
    }
    if (clean.includes('pinterest.com')) {
        return {
            key: 'pinterest',
            name: 'بينتريست',
            icon: 'fa-brands fa-pinterest',
            cssClass: 'pin',
            color: '#BD081C',
            desc: 'لوحات تصاميم الأحاديث الشريفة والحكم النبوية'
        };
    }

    return {
        key: 'web',
        name: 'رابط رسمي',
        icon: 'fa-solid fa-globe',
        cssClass: 'web',
        color: '#C59B27',
        desc: 'المنصة الرقمية المعتمدة لفضيلة الشيخ أحمد مرتضى حامد'
    };
}

// المنصات الأساسية الثابتة والمعتمدة للموقع
const DEFAULT_CORE_SOCIAL_PLATFORMS = [
    {
        id: 'core_facebook',
        key: 'facebook',
        name: 'فيسبوك',
        url: 'https://facebook.com/sheikh.ahmed.mortada',
        icon: 'fa-brands fa-facebook-f',
        cssClass: 'fb',
        color: '#1877F2',
        desc: 'الصفحة الرسمية لمتابعة المواعظ والدروس والتحديثات اليومية ومجالس الساحة'
    },
    {
        id: 'core_instagram',
        key: 'instagram',
        name: 'إنستغرام',
        url: 'https://instagram.com/sheikh.ahmed.mortada',
        icon: 'fa-brands fa-instagram',
        cssClass: 'ig',
        color: '#E1306C',
        desc: 'الصور الرسمية ومجالس الساحة والدرر والمقتطفات المصممة عبر إنستغرام'
    },
    {
        id: 'core_youtube',
        key: 'youtube',
        name: 'يوتيوب',
        url: 'https://www.youtube.com/@%D9%81%D8%B6%D9%8A%D9%84%D8%A9%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%D8%A7%D8%AD%D9%85%D8%AF%D9%85%D8%B1%D8%AA%D8%B6%D9%89',
        icon: 'fa-brands fa-youtube',
        cssClass: 'yt',
        color: '#FF0000',
        desc: 'البث المباشر وأرشيف الدروس والمحاضرات الكاملة بجودة عالية'
    },
    {
        id: 'core_twitter',
        key: 'twitter',
        name: 'منصة X',
        url: 'https://x.com/ahmed_mortada',
        icon: 'fa-brands fa-x-twitter',
        cssClass: 'x',
        color: '#000000',
        desc: 'التغريدات الوعظية المباشرة، إعلانات الدروس، ودرر الكلمات'
    },
    {
        id: 'core_whatsapp',
        key: 'whatsapp',
        name: 'واتساب',
        url: 'https://wa.me/201000000000',
        icon: 'fa-brands fa-whatsapp',
        cssClass: 'wa',
        color: '#25D366',
        desc: 'الاستفسارات والتواصل المباشر مع إدارة ساحة الشيخ بالأقصر'
    }
];

/**
 * توليد وتحديث قسم بطاقات منصات التواصل وأزرار الفوتر ديناميكياً
 * تظهر المنصات الأساسية (الفيسبوك، اليوتيوب، إكس، الواتساب) وأي منصة جديدة تضاف من لوحة التحكم بجانبهم مباشرة
 */
function renderDynamicSocialLinks(socialLinks) {
    const navSocialLink = document.getElementById('navSocialLink');
    const footerHubStrip = document.getElementById('footerSocialHubStrip');
    const footerPills = document.getElementById('footerSocialPills');
    const footerLinks = document.getElementById('footerSocialLinks');

    // 1. معالجة وتجهيز المنصات النشطة
    let items = [];

    // إذا كانت المنصات ممررة كمصفوفة (سواء من الإعدادات أو لوحة التحكم)
    if (Array.isArray(socialLinks)) {
        items = socialLinks.map(item => {
            if (!item || !item.url || !item.url.trim()) return null;
            const detected = detectPlatform(item.url.trim());
            return {
                id: item.id || ('social_' + Math.random().toString(36).substr(2, 9)),
                key: item.key || detected.key,
                url: item.url.trim(),
                name: item.name || item.title || detected.name,
                icon: item.icon || detected.icon,
                cssClass: item.cssClass || detected.cssClass,
                color: item.color || detected.color,
                desc: item.desc || detected.desc || 'المنصة الرسمية المعتمدة لفضيلة الشيخ أحمد مرتضى حامد'
            };
        }).filter(Boolean);
    } else if (socialLinks && typeof socialLinks === 'object') {
        const extraItems = [];
        Object.keys(socialLinks).forEach(k => {
            const val = socialLinks[k];
            if (typeof val === 'string' && val.trim()) {
                const d = detectPlatform(val);
                extraItems.push({
                    id: 'social_' + k,
                    key: k,
                    url: val.trim(),
                    name: d.name,
                    icon: d.icon,
                    cssClass: d.cssClass,
                    color: d.color,
                    desc: d.desc
                });
            }
        });
        items = extraItems;
    } else {
        items = [];
    }

    if (navSocialLink) {
        navSocialLink.setAttribute('href', '#footerSocialLinks');
        navSocialLink.style.display = items.length > 0 ? 'inline-flex' : 'none';
    }
    if (footerHubStrip) footerHubStrip.style.display = 'none';

    // 2. تحديث شريط المنصات المصغر في الفوتر (Pills)
    if (footerPills) {
        let pillsHtml = '';
        items.forEach(item => {
            pillsHtml += `
                <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener" class="f-pill ${escapeHtml(item.cssClass)}" title="${escapeHtml(item.name)}">
                    <i class="${item.icon}"></i> <span>${escapeHtml(item.name)}</span>
                </a>
            `;
        });
        footerPills.innerHTML = pillsHtml;
    }

    // 3. تحديث أزرار المنصات الدائرية في الفوتر
    if (footerLinks) {
        let linksHtml = '';
        items.forEach(item => {
            linksHtml += `
                <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener" class="social-icon ${escapeHtml(item.cssClass)}" title="${escapeHtml(item.name)}">
                    <i class="${item.icon}"></i>
                </a>
            `;
        });
        footerLinks.innerHTML = linksHtml;
    }
}

// الاستماع المباشر لأي تعديل في إعدادات وروابط المنصات من لوحة التحكم لتحديث الموقع فورياً بدون إعادة تحميل
window.addEventListener('storage', (event) => {
    if (event.key === 'sheikh_settings' && event.newValue) {
        try {
            const updated = JSON.parse(event.newValue);
            if (updated) {
                applyServerSettings(updated);
            }
        } catch (err) {
            console.error('Error applying settings update from storage event:', err);
        }
    }
});

// ==========================================================================
// 7. استخراج معرف يوتيوب بدقة
// ==========================================================================
function extractYouTubeId(input) {
    if (!input) return null;
    input = input.trim();

    if (/^[a-zA-Z0-9_-]{11}$/.test(input)) {
        return input;
    }

    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = input.match(regExp);
    if (match && match[2] && match[2].length === 11) {
        return match[2];
    }

    const shortsMatch = input.match(/shorts\/([a-zA-Z0-9_-]{11})/);
    if (shortsMatch && shortsMatch[1]) {
        return shortsMatch[1];
    }

    return null;
}

// ==========================================================================
// 8. محرك البحث والفلترة والفرز مع خاصية "عرض المزيد"
// ==========================================================================
function applyFiltersAndRender() {
    let result = [...state.videos];

    // 1. المفضلة فقط
    if (state.onlyFavorites) {
        result = result.filter(v => state.favorites.has(v.id));
    }

    // 2. التصنيف
    if (state.activeCategory !== 'all') {
        result = result.filter(v => v.category === state.activeCategory);
    }

    // 3. البحث
    if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase().trim();
        result = result.filter(v => {
            const titleMatch = v.title.toLowerCase().includes(q);
            const descMatch = v.desc && v.desc.toLowerCase().includes(q);
            const dateMatch = v.date && v.date.includes(q);
            const catName = CATEGORY_NAMES[v.category] || '';
            const catMatch = catName.toLowerCase().includes(q);
            return titleMatch || descMatch || dateMatch || catMatch;
        });
    }

    // 4. الترتيب (الافتراضي: من الأحدث للأقدم نزولاً لأقدم درس)
    result.sort((a, b) => {
        if (state.sortOrder === 'date-desc') {
            return new Date(b.date || 0) - new Date(a.date || 0);
        } else if (state.sortOrder === 'date-asc') {
            return new Date(a.date || 0) - new Date(b.date || 0);
        } else if (state.sortOrder === 'title-asc') {
            return a.title.localeCompare(b.title, 'ar');
        } else if (state.sortOrder === 'views-desc') {
            return (b.views || 0) - (a.views || 0);
        }
        return 0;
    });

    const totalFiltered = result.length;
    const paginatedList = result.slice(0, state.visibleCount);

    renderVideoGrid(paginatedList, totalFiltered);
    updateLoadMoreControls(paginatedList.length, totalFiltered);
}

// ==========================================================================
// 9. توليد بطاقات الفيديوهات في الصفحة
// ==========================================================================
function renderVideoGrid(videosList, totalFiltered) {
    const grid = document.getElementById('videosGrid');
    const emptyBox = document.getElementById('emptyStateBox');
    const countBadge = document.getElementById('resultsCountText');

    if (!grid) return;

    if (countBadge) {
        countBadge.textContent = `معروض ${videosList.length.toLocaleString('ar-EG')} من إجمالي ${totalFiltered.toLocaleString('ar-EG')} درس`;
    }

    if (totalFiltered === 0) {
        grid.innerHTML = '';
        if (emptyBox) emptyBox.style.display = 'block';
        return;
    }

    if (emptyBox) emptyBox.style.display = 'none';

    grid.innerHTML = videosList.map((video, index) => {
        const isFav = state.favorites.has(video.id);
        const categoryLabel = CATEGORY_NAMES[video.category] || video.category;
        const formattedDate = formatDateArabic(video.date);
        
        const primaryThumb = isFileProtocol ? `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg` : `/api/thumb/${video.id}`;
        const fallbackThumb = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;

        return `
            <article class="video-card" data-id="${video.id}">
                <div class="thumbnail-wrapper" onclick="openVideoModal('${video.id}')" title="انقر لتشغيل الدرس">
                    <img src="${primaryThumb}" 
                         alt="${escapeHtml(video.title)}" 
                         class="video-thumb-img" 
                         width="480" 
                         height="360" 
                         decoding="async" 
                         crossorigin="anonymous"
                         referrerpolicy="no-referrer"
                         ${index < 8 ? 'fetchpriority="high"' : 'loading="lazy"'}
                         onerror="this.onerror=null; this.src='${fallbackThumb}';">
                    <div class="thumb-overlay">
                        <div class="play-circle">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                    <span class="duration-pill"><i class="fa-regular fa-clock"></i> ${video.duration || 'درس مرئي'}</span>
                </div>

                <div class="video-card-body">
                    <div class="video-meta-top">
                        <span class="video-date"><i class="fa-regular fa-calendar"></i> ${formattedDate}</span>
                        <span class="video-views"><i class="fa-solid fa-eye"></i> ${(video.views || 0).toLocaleString('ar-EG')} مشاهدة</span>
                    </div>

                    <h3 class="video-card-title" onclick="openVideoModal('${video.id}')" title="${escapeHtml(video.title)}">
                        ${escapeHtml(video.title)}
                    </h3>

                    <p class="video-card-desc">
                        ${escapeHtml(video.desc || 'درس وموعظة مباركة لفضيلة الشيخ أحمد مرتضى حامد.')}
                    </p>

                    <div class="video-card-footer">
                        <button class="btn btn-primary btn-sm" onclick="openVideoModal('${video.id}')">
                            <i class="fa-solid fa-play"></i> تشغيل الآن
                        </button>

                        <div class="card-action-btns">
                            <button class="card-btn-icon ${isFav ? 'favorited' : ''}" onclick="toggleFavorite('${video.id}', event)" title="${isFav ? 'إزالة من المفضلة' : 'حفظ في المفضلة'}">
                                <i class="fa-${isFav ? 'solid' : 'regular'} fa-bookmark"></i>
                            </button>
                            <button class="card-btn-icon" onclick="shareVideo('${video.id}', event)" title="مشاركة الدرس">
                                <i class="fa-solid fa-share-nodes"></i>
                            </button>
                            <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener" class="card-btn-icon" title="مشاهدة على يوتيوب" onclick="event.stopPropagation()">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

// ==========================================================================
// 10. التحكم في زر وشريط تقدم "عرض المزيد"
// ==========================================================================
function updateLoadMoreControls(currentShown, totalCount) {
    const wrapper = document.getElementById('loadMoreWrapper');
    const loadBtn = document.getElementById('loadMoreBtn');
    const allLoadedMsg = document.getElementById('allLoadedMessage');
    const progressText = document.getElementById('loadProgressText');
    const progressPct = document.getElementById('loadProgressPct');
    const progressFill = document.getElementById('loadProgressFill');

    if (!wrapper || !loadBtn) return;

    if (totalCount === 0) {
        wrapper.style.display = 'none';
        return;
    }

    wrapper.style.display = 'block';

    const pct = Math.round((currentShown / totalCount) * 100);
    if (progressText) progressText.textContent = `معروض ${currentShown.toLocaleString('ar-EG')} من أصل ${totalCount.toLocaleString('ar-EG')} درساً`;
    if (progressPct) progressPct.textContent = `${pct.toLocaleString('ar-EG')}%`;
    if (progressFill) progressFill.style.width = `${pct}%`;

    if (currentShown >= totalCount) {
        loadBtn.style.display = 'none';
        if (allLoadedMsg) allLoadedMsg.style.display = 'flex';
    } else {
        loadBtn.style.display = 'inline-flex';
        const remaining = totalCount - currentShown;
        const textSpan = loadBtn.querySelector('.btn-modern-text') || loadBtn.querySelector('span:not(.btn-modern-icon)') || loadBtn.querySelector('span');
        if (textSpan) {
            textSpan.innerHTML = `عرض المزيد <span class="remaining-count-pill">${remaining.toLocaleString('ar-EG')} متبقي</span>`;
        }
        if (allLoadedMsg) allLoadedMsg.style.display = 'none';
    }
}

function handleLoadMore() {
    state.visibleCount += getVideosPerPage();
    applyFiltersAndRender();
    showToast(`تم عرض دفعة إضافية من دروس فضيلة الشيخ ✨`);
}

// ==========================================================================
// 11. تشغيل الدرس في المشغل المدمج (Video Modal Player)
// ==========================================================================
function openVideoModal(videoId) {
    const video = state.videos.find(v => v.id === videoId);
    if (!video) return;

    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalIframe');
    const title = document.getElementById('modalVideoTitle');
    const badge = document.getElementById('modalCategoryBadge');
    const date = document.getElementById('modalVideoDate');
    const duration = document.getElementById('modalVideoDuration');
    const viewsEl = document.getElementById('modalVideoViews');
    const desc = document.getElementById('modalVideoDesc');
    const directBtn = document.getElementById('modalDirectYtBtn');
    const favBtn = document.getElementById('modalFavBtn');

    if (!modal || !iframe) return;

    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1`;
    
    title.textContent = video.title;
    badge.textContent = CATEGORY_NAMES[video.category] || video.category;
    date.textContent = formatDateArabic(video.date);
    duration.textContent = video.duration || 'غير محدد';
    if (viewsEl) viewsEl.textContent = (video.views || 0).toLocaleString('ar-EG') + ' مشاهدة';
    desc.textContent = video.desc || 'درس من رحاب ساحة فضيلة الشيخ أحمد مرتضى حامد بالأقصر.';
    
    if (directBtn) directBtn.href = `https://www.youtube.com/watch?v=${videoId}`;

    updateModalFavButton(videoId);
    if (favBtn) {
        favBtn.onclick = () => {
            toggleFavorite(videoId);
            updateModalFavButton(videoId);
        };
    }

    const shareBtn = document.getElementById('modalShareBtn');
    if (shareBtn) {
        shareBtn.onclick = () => shareVideo(videoId);
    }

    // تسجيل المشاهدة الحقيقية في قاعدة بيانات المنصة
    trackRealVideoView(videoId);

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

/**
 * إرسال طلب احتساب مشاهدة حقيقية للدرس بالخادم وتحديث العدادات
 */
async function trackRealVideoView(videoId) {
    if (!videoId) return;
    const sessionKey = 'viewed_vid_' + videoId;
    if (sessionStorage.getItem(sessionKey)) return; // مسجل بالفعل في هذه الجلسة

    sessionStorage.setItem(sessionKey, '1');

    // إذا كان الموقع يعمل كملف محلي (file://)، نزيد العداد محلياً فقط دون إرسال طلب شبكة
    if (isFileProtocol) {
        const vid = state.videos.find(v => v.id === videoId);
        if (vid) {
            vid.views = (vid.views || 0) + 1;
            const viewsEl = document.getElementById('modalVideoViews');
            if (viewsEl) viewsEl.textContent = vid.views.toLocaleString('ar-EG') + ' مشاهدة';
            const cardViews = document.querySelector(`.video-card[data-id="${videoId}"] .video-views`);
            if (cardViews) {
                cardViews.innerHTML = `<i class="fa-solid fa-eye"></i> ${vid.views.toLocaleString('ar-EG')} مشاهدة`;
            }
        }
        return;
    }

    try {
        const res = await fetch(`/api/videos/${encodeURIComponent(videoId)}/view`, {
            method: 'POST'
        });
        if (res.ok) {
            const data = await res.json();
            if (data.success && typeof data.views === 'number') {
                const vid = state.videos.find(v => v.id === videoId);
                if (vid) vid.views = data.views;
                
                // تحديث العداد في النافذة المنبثقة
                const viewsEl = document.getElementById('modalVideoViews');
                if (viewsEl) viewsEl.textContent = data.views.toLocaleString('ar-EG') + ' مشاهدة';
                
                // تحديث العداد في بطاقة الدرس داخل شبكة الدروس
                const cardViews = document.querySelector(`.video-card[data-id="${videoId}"] .video-views`);
                if (cardViews) {
                    cardViews.innerHTML = `<i class="fa-solid fa-eye"></i> ${data.views.toLocaleString('ar-EG')} مشاهدة`;
                }
            }
        }
    } catch (e) {
        // تجاهل أي خطأ في الاتصال بسلاسة
    }
}

function updateModalFavButton(videoId) {
    const favBtn = document.getElementById('modalFavBtn');
    if (!favBtn) return;
    const isFav = state.favorites.has(videoId);
    favBtn.innerHTML = `
        <i class="fa-${isFav ? 'solid' : 'regular'} fa-bookmark"></i>
        ${isFav ? 'محفوظ بالمفضلة' : 'حفظ بالمفضلة'}
    `;
    if (isFav) {
        favBtn.classList.add('active');
    } else {
        favBtn.classList.remove('active');
    }
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalIframe');
    if (modal) modal.classList.remove('open');
    if (iframe) iframe.src = '';
    document.body.style.overflow = '';
}

// ==========================================================================
// 12. إضافة فيديو جديد ديناميكياً
// ==========================================================================
function handleAddVideoSubmit(e) {
    e.preventDefault();

    const urlInput = document.getElementById('newVideoUrl');
    const titleInput = document.getElementById('newVideoTitle');
    const catInput = document.getElementById('newVideoCategory');
    const dateInput = document.getElementById('newVideoDate');
    const durInput = document.getElementById('newVideoDuration');
    const viewsInput = document.getElementById('newVideoViews');
    const descInput = document.getElementById('newVideoDesc');

    const ytId = extractYouTubeId(urlInput.value);
    if (!ytId) {
        showToast('يرجى إدخال رابط يوتيوب صحيح أو معرف فيديو صحيح!', 'error');
        urlInput.focus();
        return;
    }

    if (state.videos.some(v => v.id === ytId)) {
        showToast('هذا الفيديو موجود بالفعل في المكتبة!', 'error');
        return;
    }

    const newVideo = {
        id: ytId,
        title: titleInput.value.trim(),
        category: catInput.value,
        date: dateInput.value || new Date().toISOString().split('T')[0],
        duration: durInput.value.trim() || 'درس مرئي',
        views: parseInt(viewsInput.value, 10) || 5000,
        desc: descInput.value.trim() || 'درس مسجل لفضيلة الشيخ أحمد مرتضى حامد.'
    };

    state.videos.unshift(newVideo);

    try {
        let storedCustom = JSON.parse(localStorage.getItem('sheikh_custom_videos') || '[]');
        storedCustom.unshift(newVideo);
        localStorage.setItem('sheikh_custom_videos', JSON.stringify(storedCustom));
    } catch (err) {
        console.error('Failed to save to local storage', err);
    }

    applyFiltersAndRender();

    const totalStat = document.getElementById('totalVideosStat');
    if (totalStat) totalStat.textContent = state.videos.length.toLocaleString('ar-EG');

    e.target.reset();
    closeAddVideoModal();
    showToast('تمت إضافة الدرس بنجاح إلى المكتبة! 🎉', 'success');

    const vSection = document.getElementById('videosSection');
    if (vSection) vSection.scrollIntoView({ behavior: 'smooth' });
}

function openAddVideoModal() {
    const modal = document.getElementById('addVideoModal');
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';

        const dateInput = document.getElementById('newVideoDate');
        if (dateInput && !dateInput.value) {
            dateInput.value = new Date().toISOString().split('T')[0];
        }
    }
}

function closeAddVideoModal() {
    const modal = document.getElementById('addVideoModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
}

// ==========================================================================
// 13. إدارة المفضلة
// ==========================================================================
function toggleFavorite(videoId, e) {
    if (e) e.stopPropagation();

    if (state.favorites.has(videoId)) {
        state.favorites.delete(videoId);
        showToast('تمت إزالة الدرس من المفضلة');
    } else {
        state.favorites.add(videoId);
        showToast('تم حفظ الدرس في المفضلة بنجاح ❤️', 'success');
    }

    try {
        localStorage.setItem('sheikh_favorites', JSON.stringify(Array.from(state.favorites)));
    } catch (err) {
        console.error(err);
    }

    updateFavBadge();
    applyFiltersAndRender();
}

function updateFavBadge() {
    const badge = document.getElementById('navFavBadge');
    if (badge) {
        badge.textContent = state.favorites.size;
    }
}

// ==========================================================================
// 14. مشاركة الفيديو ونسخ الرابط
// ==========================================================================
function shareVideo(videoId, e) {
    if (e) e.stopPropagation();

    const video = state.videos.find(v => v.id === videoId);
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const shareText = `شاهد درس: "${video ? video.title : 'درس لفضيلة الشيخ أحمد مرتضى حامد'}" عبر الرابط: ${videoUrl}`;

    if (navigator.share) {
        navigator.share({
            title: video ? video.title : 'درس ديني لفضيلة الشيخ أحمد مرتضى حامد',
            text: shareText,
            url: videoUrl
        }).catch(() => copyToClipboard(videoUrl, 'تم نسخ رابط الدرس إلى الحافظة! 📋'));
    } else {
        copyToClipboard(videoUrl, 'تم نسخ رابط الدرس إلى الحافظة! 📋');
    }
}

function copyToClipboard(text, successMsg = 'تم النسخ!') {
    navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg, 'success');
    }).catch(() => {
        showToast('تعذر النسخ التلقائي، يمكنك نسخ الرابط يدوياً.', 'error');
    });
}

// ==========================================================================
// 15. رسم بطاقات الدرر والمواعظ الإيمانية مع ميزة عرض المزيد وتكييف الشاشات
// ==========================================================================
let quotesVisibleLimit = null;

function getQuotesInitialLimit() {
    return 4;
}

function renderQuotes() {
    const quotesGrid = document.getElementById('quotesGrid');
    if (!quotesGrid) return;

    const total = SPIRITUAL_QUOTES.length;
    if (total === 0) {
        quotesGrid.innerHTML = '<p class="text-center text-muted" style="grid-column: 1/-1; padding: 2.5rem 0;">لا توجد درر مضافة حالياً.</p>';
        const lmSection = document.getElementById('quotesLoadMoreSection');
        if (lmSection) lmSection.style.display = 'none';
        return;
    }

    if (quotesVisibleLimit === null) {
        quotesVisibleLimit = getQuotesInitialLimit();
    }

    const visibleCount = Math.min(quotesVisibleLimit, total);
    const visibleQuotes = SPIRITUAL_QUOTES.slice(0, visibleCount);

    quotesGrid.innerHTML = visibleQuotes.map((q, idx) => {
        return `
            <div class="quote-card animate-fade-in" style="animation-delay: ${(idx % 4) * 0.06}s;" onclick="openQuoteModal(${idx})" title="انقر لتكبير وقراءة الحكمة المباركة">
                <span class="quote-category-tag"><i class="fa-solid fa-feather"></i> ${escapeHtml(q.category || 'موعظة إيمانية')}</span>
                <p class="quote-text">«${escapeHtml(q.quote)}»</p>
                <div class="quote-footer">
                    <span class="quote-expand-hint"><i class="fa-solid fa-expand"></i> تكبير</span>
                    <div class="quote-actions" onclick="event.stopPropagation()">
                        <button class="card-btn-icon" onclick="copyQuoteByIndex(${idx})" title="نسخ المقولة">
                            <i class="fa-regular fa-copy"></i>
                        </button>
                        <a href="https://api.whatsapp.com/send?text=${encodeURIComponent('«' + q.quote + '» - فضيلة الشيخ أحمد مرتضى حامد')}" target="_blank" rel="noopener" class="card-btn-icon" title="مشاركة عبر واتساب">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    updateQuotesPaginationUI(visibleCount, total);
}

function updateQuotesPaginationUI(visibleCount, total) {
    const lmSection = document.getElementById('quotesLoadMoreSection');
    const lmBtn = document.getElementById('loadMoreQuotesBtn');
    const allLoadedMsg = document.getElementById('allQuotesLoadedMessage');
    const progressText = document.getElementById('quotesProgressText');
    const progressPct = document.getElementById('quotesProgressPct');
    const progressFill = document.getElementById('quotesProgressFill');

    if (!lmSection) return;

    const initialThreshold = 4;

    if (total > initialThreshold) {
        lmSection.style.display = 'block';
        const pct = Math.min(100, Math.round((visibleCount / total) * 100));

        if (progressText) progressText.textContent = `معروض ${visibleCount.toLocaleString('ar-EG')} من أصل ${total.toLocaleString('ar-EG')} درة وموعظة`;
        if (progressPct) progressPct.textContent = `${pct.toLocaleString('ar-EG')}%`;
        if (progressFill) progressFill.style.width = `${pct}%`;

        if (visibleCount < total) {
            if (lmBtn) {
                lmBtn.style.display = 'inline-flex';
                const remaining = total - visibleCount;
                const textSpan = lmBtn.querySelector('.btn-modern-text') || lmBtn.querySelector('span:not(.btn-modern-icon)') || lmBtn.querySelector('span');
                if (textSpan) {
                    textSpan.innerHTML = `عرض المزيد <span class="remaining-count-pill">${remaining.toLocaleString('ar-EG')} متبقي</span>`;
                }
            }
            if (allLoadedMsg) allLoadedMsg.style.display = 'none';
        } else {
            if (lmBtn) lmBtn.style.display = 'none';
            if (allLoadedMsg) allLoadedMsg.style.display = 'inline-flex';
        }
    } else {
        lmSection.style.display = 'none';
    }
}

function handleLoadMoreQuotes() {
    const step = 4;
    const total = SPIRITUAL_QUOTES.length;

    if (quotesVisibleLimit === null) {
        quotesVisibleLimit = getQuotesInitialLimit();
    }

    quotesVisibleLimit = Math.min(quotesVisibleLimit + step, total);
    renderQuotes();
    showToast('تم عرض دفعة إضافية من درر وحكم الشيخ ✨');
}

function copyQuoteByIndex(idx) {
    const q = SPIRITUAL_QUOTES[idx];
    if (q && q.quote) {
        copyQuote(q.quote);
    }
}

function copyQuote(text) {
    const fullText = `«${text}»\n— فضيلة الشيخ أحمد مرتضى حامد (ساحة الأقصر)`;
    copyToClipboard(fullText, 'تم نسخ الحكمة المباركة لمشاركتها! ✨');
}

// ==========================================================================
// 15.ب. نافذة تكبير الحكمة والموعظة الإيمانية (Spiritual Quote Modal)
// ==========================================================================
let currentModalQuoteIdx = null;

function openQuoteModal(idx) {
    const q = SPIRITUAL_QUOTES[idx];
    if (!q) return;

    currentModalQuoteIdx = idx;
    const modal = document.getElementById('quoteModal');
    const catEl = document.getElementById('quoteModalCategory');
    const textEl = document.getElementById('quoteModalText');
    const sourceEl = document.getElementById('quoteModalSource');
    const copyBtn = document.getElementById('quoteModalCopyBtn');
    const waBtn = document.getElementById('quoteModalWhatsappBtn');

    if (!modal) return;

    if (catEl) {
        catEl.innerHTML = `<i class="fa-solid fa-feather"></i> ${escapeHtml(q.category || 'درر إيمانية')}`;
    }
    if (textEl) {
        textEl.textContent = `«${q.quote}»`;
    }
    if (sourceEl) {
        sourceEl.innerHTML = `<i class="fa-solid fa-book-open"></i> ${escapeHtml(q.source || 'من مجالس ساحة الأقصر المباركة')}`;
    }
    if (copyBtn) {
        copyBtn.onclick = () => copyQuote(q.quote);
    }
    if (waBtn) {
        waBtn.href = `https://api.whatsapp.com/send?text=${encodeURIComponent('«' + q.quote + '»\n— فضيلة الشيخ أحمد مرتضى حامد (ساحة الأقصر)')}`;
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeQuoteModal() {
    const modal = document.getElementById('quoteModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// ==========================================================================
// 16. المسبحة الإلكترونية الرقمية الذكية بنظام الجلسات الشخصية (Smart Session Tasbih)
// ==========================================================================
let tasbihAudioCtx = null;

function initTasbih() {
    // عناصر العرض
    const countDisplay = document.getElementById('tasbihCountNumber');
    const percentDisplay = document.getElementById('tasbihPercentNumber');
    const targetBadge = document.getElementById('tasbihTargetBadge');
    const ringProgress = document.getElementById('tasbihRingProgress');
    const incrementBtn = document.getElementById('tasbihIncrementBtn');
    const beadRipple = document.getElementById('beadRipple');
    const select = document.getElementById('dhikrSelect');
    const customDhikrWrap = document.getElementById('customDhikrWrap');
    const customDhikrInput = document.getElementById('customDhikrInput');
    const currentText = document.getElementById('currentDhikrText');
    const celebrationEl = document.getElementById('milestoneCelebration');

    // عناصر الجلسة
    const sessionNumEl = document.getElementById('tasbihSessionNumber');
    const sessionTimerEl = document.getElementById('tasbihSessionTimer');
    const sessionCountEl = document.getElementById('tasbihSessionCount');
    const totalDisplay = document.getElementById('tasbihTotalAll');
    const historyCountEl = document.getElementById('tasbihHistoryCount');
    const newSessionBtn = document.getElementById('tasbihNewSessionBtn');
    const resetBtn = document.getElementById('tasbihResetBtn');
    const resetTotalBtn = document.getElementById('tasbihResetTotalBtn');
    const historyBtn = document.getElementById('tasbihHistoryBtn');
    const historyBox = document.getElementById('tasbihHistoryBox');
    const historyList = document.getElementById('tasbihHistoryList');
    const closeHistoryBtn = document.getElementById('closeHistoryBtn');

    // أزرار التحكم
    const soundToggle = document.getElementById('tasbihSoundToggle');
    const vibrateToggle = document.getElementById('tasbihVibrateToggle');
    const targetChips = document.querySelectorAll('.target-chip');

    // استرجاع حالة الجلسة من التخزين المحلي (LocalStorage)
    let sessionNumber = parseInt(localStorage.getItem('sheikh_tasbih_session_num') || '1', 10);
    let sessionCount = parseInt(localStorage.getItem('sheikh_tasbih_session_count') || '0', 10);
    let sessionSeconds = parseInt(localStorage.getItem('sheikh_tasbih_session_seconds') || '0', 10);
    let roundCount = parseInt(localStorage.getItem('sheikh_tasbih_round_count') || '0', 10);
    let targetGoal = parseInt(localStorage.getItem('sheikh_tasbih_target') || '33', 10);
    let totalAll = parseInt(localStorage.getItem('sheikh_tasbih_total') || '0', 10);
    let soundActive = localStorage.getItem('sheikh_tasbih_sound') !== 'false';
    let vibrateActive = localStorage.getItem('sheikh_tasbih_vibrate') !== 'false';
    let sessionTimerInterval = null;
    let isSessionTimerRunning = false;

    // محيط دائرة التقدم (r = 108 -> C = 2 * PI * 108 ≈ 678.58)
    const RING_CIRCUMFERENCE = 678.58;
    if (ringProgress) {
        ringProgress.style.strokeDasharray = `${RING_CIRCUMFERENCE}`;
        ringProgress.style.strokeDashoffset = `${RING_CIRCUMFERENCE}`;
    }

    // صوت نقر المسبحة الطبيعي باستخدام Web Audio API بدون ملفات خارجية
    function playBeadClick() {
        if (!soundActive) return;
        try {
            if (!tasbihAudioCtx) {
                tasbihAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (tasbihAudioCtx.state === 'suspended') {
                tasbihAudioCtx.resume();
            }
            const now = tasbihAudioCtx.currentTime;
            const osc = tasbihAudioCtx.createOscillator();
            const gain = tasbihAudioCtx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(520, now);
            osc.frequency.exponentialRampToValueAtTime(140, now + 0.035);

            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

            osc.connect(gain);
            gain.connect(tasbihAudioCtx.destination);

            osc.start(now);
            osc.stop(now + 0.035);
        } catch (e) {
            // تجاهل أي منع تلقائي للصوت قبل تفاعل المستخدم
        }
    }

    // صوت إتمام الورد الاحتفالي
    function playCelebrationSound() {
        if (!soundActive) return;
        try {
            if (!tasbihAudioCtx) {
                tasbihAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (tasbihAudioCtx.state === 'suspended') {
                tasbihAudioCtx.resume();
            }
            const now = tasbihAudioCtx.currentTime;
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            notes.forEach((freq, idx) => {
                const osc = tasbihAudioCtx.createOscillator();
                const gain = tasbihAudioCtx.createGain();
                const startTime = now + (idx * 0.08);

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, startTime);

                gain.gain.setValueAtTime(0.18, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

                osc.connect(gain);
                gain.connect(tasbihAudioCtx.destination);

                osc.start(startTime);
                osc.stop(startTime + 0.35);
            });
        } catch (e) {}
    }

    // تنسيق العداد الزمني (00:00)
    function formatTimer(sec) {
        const m = Math.floor(sec / 60).toString().padStart(2, '0');
        const s = (sec % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    // بدء مؤقت الجلسة النشط
    function startSessionTimer() {
        if (isSessionTimerRunning) return;
        isSessionTimerRunning = true;
        sessionTimerInterval = setInterval(() => {
            sessionSeconds++;
            localStorage.setItem('sheikh_tasbih_session_seconds', sessionSeconds.toString());
            if (sessionTimerEl) sessionTimerEl.textContent = formatTimer(sessionSeconds);
        }, 1000);
    }

    // تحديث الواجهة الرسومية للمسبحة
    function updateTasbihUI() {
        if (countDisplay) countDisplay.textContent = Number(roundCount || 0).toLocaleString();
        if (sessionNumEl) sessionNumEl.textContent = `جلسة #${sessionNumber}`;
        if (sessionCountEl) sessionCountEl.textContent = Number(sessionCount || 0).toLocaleString();
        if (totalDisplay) totalDisplay.textContent = Number(totalAll || 0).toLocaleString();
        if (sessionTimerEl) sessionTimerEl.textContent = formatTimer(sessionSeconds);

        // حساب وتحديث حلقة التقدم الدائرية
        if (targetGoal > 0) {
            const percent = Math.min(100, Math.round((roundCount / targetGoal) * 100));
            if (percentDisplay) percentDisplay.textContent = `${percent}%`;
            if (targetBadge) targetBadge.textContent = `الهدف: ${targetGoal}`;
            if (ringProgress) {
                const offset = RING_CIRCUMFERENCE - (percent / 100) * RING_CIRCUMFERENCE;
                ringProgress.style.strokeDashoffset = `${offset}`;
            }
        } else {
            // عداد حر مفتوح
            if (percentDisplay) percentDisplay.textContent = `ورد حر`;
            if (targetBadge) targetBadge.textContent = `عداد مفتوح`;
            if (ringProgress) {
                const mod100 = (roundCount % 100);
                const offset = RING_CIRCUMFERENCE - (mod100 / 100) * RING_CIRCUMFERENCE;
                ringProgress.style.strokeDashoffset = `${offset}`;
            }
        }

        // تحديث حالة مفاتيح الصوت والاهتزاز
        if (soundToggle) {
            soundToggle.classList.toggle('active', soundActive);
            soundToggle.querySelector('i').className = soundActive ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
        }
        if (vibrateToggle) {
            vibrateToggle.classList.toggle('active', vibrateActive);
        }

        // تحديث عدد الجلسات المؤرشفة
        const history = JSON.parse(localStorage.getItem('sheikh_tasbih_history') || '[]');
        if (historyCountEl) historyCountEl.textContent = history.length.toString();
    }

    // النقر والتسبيح
    function handleTasbihStep(e) {
        startSessionTimer();

        roundCount++;
        sessionCount++;
        totalAll++;

        localStorage.setItem('sheikh_tasbih_round_count', roundCount.toString());
        localStorage.setItem('sheikh_tasbih_session_count', sessionCount.toString());
        localStorage.setItem('sheikh_tasbih_total', totalAll.toString());

        playBeadClick();

        // الاهتزاز الخفيف عند النقر للهواتف
        if (vibrateActive && navigator.vibrate) {
            navigator.vibrate(20);
        }

        // تأثير التموج البصري (Ripple)
        if (beadRipple && incrementBtn) {
            beadRipple.classList.remove('animate');
            void beadRipple.offsetWidth;
            beadRipple.classList.add('animate');
        }

        // التحقق من بلوغ الهدف
        if (targetGoal > 0 && roundCount >= targetGoal) {
            // احتفال بالوصول للهدف
            if (vibrateActive && navigator.vibrate) {
                navigator.vibrate([40, 60, 80]);
            }
            playCelebrationSound();

            if (celebrationEl) {
                celebrationEl.style.display = 'block';
                setTimeout(() => {
                    celebrationEl.style.display = 'none';
                }, 4000);
            }

            showToast(`ما شاء الله! أتممت ورد ${targetGoal} تسبيحة بنجاح 🌿`, 'success');
            roundCount = 0; // بدء دورة جديدة تلقائياً مع بقاء رصيد الجلسة
            localStorage.setItem('sheikh_tasbih_round_count', '0');
        }

        updateTasbihUI();
    }

    // زر التسبيح الرئيسي
    if (incrementBtn) {
        incrementBtn.addEventListener('click', handleTasbihStep);
    }

    // دعم لوحة المفاتيح (مسطرة المسافة) عند وجود المستخدم في الصفحة
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
            const tasbihSection = document.getElementById('tasbihSection');
            if (tasbihSection) {
                const rect = tasbihSection.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    e.preventDefault();
                    handleTasbihStep();
                }
            }
        }
    });

    // تبديل الأهداف (33، 100، 1000، حر)
    targetChips.forEach(chip => {
        const val = parseInt(chip.getAttribute('data-target') || '33', 10);
        if (val === targetGoal) {
            targetChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
        }

        chip.addEventListener('click', () => {
            targetChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            targetGoal = val;
            roundCount = 0;
            localStorage.setItem('sheikh_tasbih_target', targetGoal.toString());
            localStorage.setItem('sheikh_tasbih_round_count', '0');
            updateTasbihUI();
            showToast(targetGoal > 0 ? `تم ضبط الهدف على ${targetGoal} تسبيحة` : 'تم تفعيل الورد الحر (بدون حد أقصى)');
        });
    });

    // تبديل الصوت
    if (soundToggle) {
        soundToggle.addEventListener('click', () => {
            soundActive = !soundActive;
            localStorage.setItem('sheikh_tasbih_sound', soundActive ? 'true' : 'false');
            updateTasbihUI();
            showToast(soundActive ? 'تم تفعيل صوت نقر المسبحة 🔔' : 'تم كتم الصوت 🔕');
        });
    }

    // تبديل الاهتزاز
    if (vibrateToggle) {
        vibrateToggle.addEventListener('click', () => {
            vibrateActive = !vibrateActive;
            localStorage.setItem('sheikh_tasbih_vibrate', vibrateActive ? 'true' : 'false');
            updateTasbihUI();
            showToast(vibrateActive ? 'تم تفعيل الاهتزاز الحسي 📳' : 'تم إيقاف الاهتزاز');
        });
    }

    // قائمة الأذكار
    if (select && currentText) {
        select.addEventListener('change', (e) => {
            if (e.target.value === 'custom') {
                if (customDhikrWrap) customDhikrWrap.style.display = 'block';
                if (customDhikrInput) customDhikrInput.focus();
            } else {
                if (customDhikrWrap) customDhikrWrap.style.display = 'none';
                currentText.textContent = e.target.value;
                roundCount = 0;
                localStorage.setItem('sheikh_tasbih_round_count', '0');
                updateTasbihUI();
            }
        });
    }

    if (customDhikrInput && currentText) {
        customDhikrInput.addEventListener('input', (e) => {
            const val = e.target.value.trim();
            currentText.textContent = val || '«اكتب ذكرك المخصص»';
        });
    }

    // تصفير الدورة الحالية فقط
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            roundCount = 0;
            localStorage.setItem('sheikh_tasbih_round_count', '0');
            updateTasbihUI();
            showToast('تم تصفير عداد الدورة الحالية مع الحفاظ على رصيد جلستك والمجموع العام.');
        });
    }

    // عناصر مودال تأكيد التصفير الشامل
    const resetModal = document.getElementById('tasbihResetModal');
    const closeResetModalBtn = document.getElementById('closeResetModalBtn');
    const cancelResetTotalBtn = document.getElementById('cancelResetTotalBtn');
    const confirmResetTotalBtn = document.getElementById('confirmResetTotalBtn');

    function openResetModal() {
        if (resetModal) {
            resetModal.classList.add('open');
            resetModal.setAttribute('aria-hidden', 'false');
        }
    }

    function closeResetModal() {
        if (resetModal) {
            resetModal.classList.remove('open');
            resetModal.setAttribute('aria-hidden', 'true');
        }
    }

    if (closeResetModalBtn) closeResetModalBtn.addEventListener('click', closeResetModal);
    if (cancelResetTotalBtn) cancelResetTotalBtn.addEventListener('click', closeResetModal);

    // تنفيذ التصفير الشامل لجميع الجلسات وإجمالي التسبيحات
    function executeFullTasbihReset() {
        totalAll = 0;
        sessionNumber = 1;
        sessionCount = 0;
        sessionSeconds = 0;
        roundCount = 0;

        if (sessionTimerInterval) {
            clearInterval(sessionTimerInterval);
            sessionTimerInterval = null;
            isSessionTimerRunning = false;
        }

        localStorage.setItem('sheikh_tasbih_total', '0');
        localStorage.setItem('sheikh_tasbih_session_num', '1');
        localStorage.setItem('sheikh_tasbih_session_count', '0');
        localStorage.setItem('sheikh_tasbih_session_seconds', '0');
        localStorage.setItem('sheikh_tasbih_round_count', '0');
        localStorage.setItem('sheikh_tasbih_history', '[]');

        updateTasbihUI();
        renderHistoryList();
        closeResetModal();
        showToast('تم تصفير كافة الجلسات وإجمالي التسبيحات بنجاح، والبدء من الجلسة #1 🌿', 'success');
    }

    if (confirmResetTotalBtn) {
        confirmResetTotalBtn.addEventListener('click', executeFullTasbihReset);
    }

    // زر تصفير إجمالي كل الجلسات بالكامل
    if (resetTotalBtn) {
        resetTotalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (resetModal) {
                openResetModal();
            } else {
                executeFullTasbihReset();
            }
        });
    }

    // إنهاء الجلسة وبدء جلسة جديدة
    if (newSessionBtn) {
        newSessionBtn.addEventListener('click', () => {
            if (sessionCount === 0) {
                showToast('جلستك الحالية ما زالت في بدايتها ولم تسجل تسبيحات بعد.', 'info');
                return;
            }

            // أرشفة الجلسة الحالية
            const history = JSON.parse(localStorage.getItem('sheikh_tasbih_history') || '[]');
            const currentDhikr = currentText ? currentText.textContent.trim().substring(0, 45) : 'الصلاة على النبي ﷺ';
            const now = new Date();
            const dateStr = now.toLocaleDateString('ar-EG', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

            history.unshift({
                sessionNum: sessionNumber,
                count: sessionCount,
                duration: formatTimer(sessionSeconds),
                dhikr: currentDhikr,
                date: dateStr
            });

            // الاحتفاظ بآخر 25 جلسة
            if (history.length > 25) history.pop();
            localStorage.setItem('sheikh_tasbih_history', JSON.stringify(history));

            // تجهيز الجلسة الجديدة
            sessionNumber++;
            sessionCount = 0;
            sessionSeconds = 0;
            roundCount = 0;

            if (sessionTimerInterval) {
                clearInterval(sessionTimerInterval);
                isSessionTimerRunning = false;
            }

            localStorage.setItem('sheikh_tasbih_session_num', sessionNumber.toString());
            localStorage.setItem('sheikh_tasbih_session_count', '0');
            localStorage.setItem('sheikh_tasbih_session_seconds', '0');
            localStorage.setItem('sheikh_tasbih_round_count', '0');

            updateTasbihUI();
            renderHistoryList();
            showToast(`تمت أرشفة الجلسة بنجاح وبدء الجلسة المباركة #${sessionNumber} 🌿`, 'success');
        });
    }

    // سجل الجلسات
    function renderHistoryList() {
        if (!historyList) return;
        const history = JSON.parse(localStorage.getItem('sheikh_tasbih_history') || '[]');
        if (history.length === 0) {
            historyList.innerHTML = `
                <div class="empty-history-text">
                    <i class="fa-regular fa-clock" style="font-size: 1.5rem; margin-bottom: 0.5rem; display: block; color: var(--gold);"></i>
                    لم تكتمل أي جلسة بعد. عند الضغط على "إنهاء وبدء جلسة جديدة" سيتم حفظ إحصائياتك هنا.
                </div>
            `;
            return;
        }

        let html = '';
        history.forEach(item => {
            html += `
                <div class="history-item">
                    <div class="history-item-left">
                        <span class="history-badge">جلسة #${item.sessionNum}</span>
                        <div>
                            <div style="font-weight: 700; color: var(--text-primary); font-size: 0.88rem;">${escapeHtml(item.dhikr)}</div>
                            <small style="color: var(--text-muted); font-size: 0.74rem;">${escapeHtml(item.date)} • مدة: ${escapeHtml(item.duration)}</small>
                        </div>
                    </div>
                    <div class="history-item-count">
                        ${Number(item.count || 0).toLocaleString()} <small style="font-weight: 500; font-size: 0.75rem;">تسبيحة</small>
                    </div>
                </div>
            `;
        });
        historyList.innerHTML = html;
    }

    if (historyBtn && historyBox) {
        historyBtn.addEventListener('click', () => {
            const isHidden = historyBox.style.display === 'none';
            historyBox.style.display = isHidden ? 'block' : 'none';
            if (isHidden) renderHistoryList();
        });
    }

    if (closeHistoryBtn && historyBox) {
        closeHistoryBtn.addEventListener('click', () => {
            historyBox.style.display = 'none';
        });
    }

    // التشغيل المبدئي
    updateTasbihUI();
    renderHistoryList();
}

// ==========================================================================
// 17. إعداد مستمعي الأحداث (Event Listeners)
// ==========================================================================
function initEventListeners() {
    // زر عرض المزيد للدروس
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', handleLoadMore);
    }

    // زر عرض المزيد للحكم والمواعظ
    const loadMoreQuotesBtn = document.getElementById('loadMoreQuotesBtn');
    if (loadMoreQuotesBtn) {
        loadMoreQuotesBtn.addEventListener('click', handleLoadMoreQuotes);
    }

    // التكيف مع حجم الشاشة للحكم والمواعظ
    let lastIsMobileMode = window.innerWidth <= 768;
    window.addEventListener('resize', () => {
        const isMobileNow = window.innerWidth <= 768;
        if (isMobileNow !== lastIsMobileMode) {
            lastIsMobileMode = isMobileNow;
            VIDEOS_PER_PAGE = getVideosPerPage();
            if (state.visibleCount <= 4) {
                state.visibleCount = getVideosPerPage();
                applyFiltersAndRender();
            }
            quotesVisibleLimit = getQuotesInitialLimit();
            renderQuotes();
        }
    });

    // البحث
    const searchInput = document.getElementById('videoSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value;
            state.visibleCount = getVideosPerPage(); // إعادة تعيين الصفحة عند البحث
            if (clearBtn) {
                clearBtn.style.display = state.searchQuery ? 'block' : 'none';
            }
            applyFiltersAndRender();
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }
            state.searchQuery = '';
            state.visibleCount = getVideosPerPage();
            clearBtn.style.display = 'none';
            applyFiltersAndRender();
        });
    }

    // الفرز
    const sortSelect = document.getElementById('sortOrderSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            state.sortOrder = e.target.value;
            state.visibleCount = getVideosPerPage();
            applyFiltersAndRender();
        });
    }

    // زر المفضلة في الهيدر
    const navFavBtn = document.getElementById('navFavoritesBtn');
    if (navFavBtn) {
        navFavBtn.addEventListener('click', () => {
            state.onlyFavorites = !state.onlyFavorites;
            state.visibleCount = getVideosPerPage();
            navFavBtn.classList.toggle('active', state.onlyFavorites);
            applyFiltersAndRender();
            const vSection = document.getElementById('videosSection');
            if (vSection) vSection.scrollIntoView({ behavior: 'smooth' });
            showToast(state.onlyFavorites ? 'عرض الدروس المحفوظة بالمفضلة' : 'عرض جميع الدروس بالأرشيف');
        });
    }

    // إعادة الضبط
    const resetBtn = document.getElementById('resetFiltersBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetAllFilters);
    }

    // زر تسجيل الدخول / لوحة التحكم بالهيدر
    const navLoginBtn = document.getElementById('navLoginBtn');
    const closeLoginBtn = document.getElementById('closeLoginModalBtn');
    const loginForm = document.getElementById('frontendLoginForm');

    // التحقق المبدئي من جلسة المسؤول وتحديث مظهر زر الهيدر
    updateNavLoginButton();

    if (navLoginBtn) {
        navLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const token = localStorage.getItem('sheikh_admin_token') || localStorage.getItem('admin_token');
            if (token) {
                window.location.href = 'admin.html';
            } else {
                openLoginModal();
            }
        });
    }

    if (closeLoginBtn) {
        closeLoginBtn.addEventListener('click', closeLoginModal);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', handleFrontendLoginSubmit);
    }

    // النوافذ المنبثقة
    const openAddBtn = document.getElementById('openAddVideoModalBtn');
    const openAddBtnInline = document.getElementById('openAddModalBtnInline');
    const closeAddBtn = document.getElementById('closeAddVideoModalBtn');
    const addForm = document.getElementById('addVideoForm');

    if (openAddBtn) openAddBtn.addEventListener('click', openAddVideoModal);
    if (openAddBtnInline) openAddBtnInline.addEventListener('click', openAddVideoModal);
    if (closeAddBtn) closeAddBtn.addEventListener('click', closeAddVideoModal);
    if (addForm) addForm.addEventListener('submit', handleAddVideoSubmit);

    const closeVidBtn = document.getElementById('closeVideoModalBtn');
    if (closeVidBtn) closeVidBtn.addEventListener('click', closeVideoModal);

    const closeQuoteBtn = document.getElementById('closeQuoteModalBtn');
    if (closeQuoteBtn) closeQuoteBtn.addEventListener('click', closeQuoteModal);

    const closeQuoteDoneBtn = document.getElementById('quoteModalCloseBtn');
    if (closeQuoteDoneBtn) closeQuoteDoneBtn.addEventListener('click', closeQuoteModal);

    window.addEventListener('click', (e) => {
        const vidModal = document.getElementById('videoModal');
        const addModal = document.getElementById('addVideoModal');
        const rModal = document.getElementById('tasbihResetModal');
        const lModal = document.getElementById('loginModal');
        const qModal = document.getElementById('quoteModal');
        if (e.target === vidModal) closeVideoModal();
        if (e.target === addModal) closeAddVideoModal();
        if (e.target === lModal) closeLoginModal();
        if (e.target === qModal) closeQuoteModal();
        if (e.target === rModal && rModal.classList.contains('open')) {
            rModal.classList.remove('open');
            rModal.setAttribute('aria-hidden', 'true');
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVideoModal();
            closeAddVideoModal();
            closeLoginModal();
            closeQuoteModal();
            const rModal = document.getElementById('tasbihResetModal');
            if (rModal && rModal.classList.contains('open')) {
                rModal.classList.remove('open');
                rModal.setAttribute('aria-hidden', 'true');
            }
        }
    });

    // القائمة المتنقلة للموبايل
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

        // إغلاق القائمة تلقائياً عند النقر في أي مكان خارجها (Outside-Click)
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('open')) {
                if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
                    closeMobileMenu();
                }
            }
        });

        // إغلاق القائمة عند لمس الشاشة خارجها في شاشات الموبايل
        document.addEventListener('touchstart', (e) => {
            if (navMenu.classList.contains('open')) {
                if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
                    closeMobileMenu();
                }
            }
        }, { passive: true });

        // إغلاق القائمة عند الضغط على زر Esc في لوحة المفاتيح
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('open')) {
                closeMobileMenu();
            }
        });

        // إغلاق القائمة تلقائياً عند الانتقال إلى شاشة الكمبيوتر
        window.addEventListener('resize', () => {
            if (window.innerWidth > 860 && navMenu.classList.contains('open')) {
                closeMobileMenu();
            }
        });
    }

    // العودة للأعلى
    const backBtn = document.getElementById('backToTopBtn');
    if (backBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backBtn.classList.add('visible');
            } else {
                backBtn.classList.remove('visible');
            }
        });
        backBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // روابط التذييل
    document.querySelectorAll('.footer-cat-link').forEach(link => {
        link.addEventListener('click', () => {
            const cat = link.getAttribute('data-cat');
            if (cat) {
                window.filterByCategory(cat);
            }
        });
    });
}

window.filterByCategory = function(category) {
    const friendlyName = CATEGORY_NAMES[category] || category;
    state.searchQuery = friendlyName === 'جميع الدروس' ? '' : friendlyName;
    state.activeCategory = 'all';
    state.onlyFavorites = false;
    state.visibleCount = getVideosPerPage();

    const searchInput = document.getElementById('videoSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    if (searchInput) {
        searchInput.value = state.searchQuery;
    }
    if (clearBtn) {
        clearBtn.style.display = state.searchQuery ? 'block' : 'none';
    }

    applyFiltersAndRender();
    const vSection = document.getElementById('videosSection');
    if (vSection) vSection.scrollIntoView({ behavior: 'smooth' });
};

function resetAllFilters() {
    state.activeCategory = 'all';
    state.searchQuery = '';
    state.onlyFavorites = false;
    state.sortOrder = 'date-desc';
    state.visibleCount = getVideosPerPage();

    const searchInput = document.getElementById('videoSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    const sortSelect = document.getElementById('sortOrderSelect');

    if (searchInput) searchInput.value = '';
    if (clearBtn) clearBtn.style.display = 'none';
    if (sortSelect) sortSelect.value = 'date-desc';

    applyFiltersAndRender();
    showToast('تمت إعادة ضبط خيارات البحث والترتيب');
}

// ==========================================================================
// 18. إشعارات Toast
// ==========================================================================
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

// ==========================================================================
// 19. دوال مساعدة (Helpers)
// ==========================================================================
function formatDateArabic(dateString) {
    if (!dateString) return 'تاريخ غير محدد';
    try {
        const d = new Date(dateString);
        if (isNaN(d.getTime())) return dateString;
        return d.toLocaleDateString('ar-EG', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (e) {
        return dateString;
    }
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

// ==========================================================================
// 20. إدارة زر الهيدر وبوابة تسجيل الدخول إلى لوحة التحكم
// ==========================================================================
async function updateNavLoginButton() {
    const navLoginBtn = document.getElementById('navLoginBtn');
    const navLoginIcon = document.getElementById('navLoginIcon');
    const navLoginText = document.getElementById('navLoginText');
    if (!navLoginBtn || !navLoginText) return;

    if (isFileProtocol) {
        navLoginText.textContent = 'لوحة التحكم';
        if (navLoginIcon) navLoginIcon.className = 'fa-solid fa-gauge-high';
        navLoginBtn.setAttribute('title', 'لوحة التحكم (يرجى تشغيل الخادم على http://localhost:3000)');
        return;
    }

    const token = localStorage.getItem('sheikh_admin_token') || localStorage.getItem('admin_token');
    if (!token) {
        navLoginText.textContent = 'تسجيل الدخول';
        if (navLoginIcon) navLoginIcon.className = 'fa-solid fa-arrow-right-to-bracket';
        navLoginBtn.setAttribute('title', 'تسجيل الدخول للوحة التحكم');
        return;
    }

    try {
        const res = await fetch('/api/auth/verify', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
            const data = await res.json();
            if (data.authenticated) {
                navLoginText.textContent = 'لوحة التحكم';
                if (navLoginIcon) navLoginIcon.className = 'fa-solid fa-gauge-high';
                navLoginBtn.setAttribute('title', `لوحة التحكم (متصل: ${data.username || 'المسؤول'})`);
                return;
            }
        }
    } catch (e) {}

    // في حال عدم صلاحية الرمز
    localStorage.removeItem('sheikh_admin_token');
    localStorage.removeItem('admin_token');
    navLoginText.textContent = 'تسجيل الدخول';
    if (navLoginIcon) navLoginIcon.className = 'fa-solid fa-arrow-right-to-bracket';
    navLoginBtn.setAttribute('title', 'تسجيل الدخول للوحة التحكم');
}

function openLoginModal() {
    const modal = document.getElementById('loginModal');
    const err = document.getElementById('modalLoginError');
    if (err) err.style.display = 'none';
    if (modal) {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const userInp = document.getElementById('modalUsername');
        if (userInp) setTimeout(() => userInp.focus(), 150);
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal && modal.classList.contains('open')) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

async function handleFrontendLoginSubmit(e) {
    e.preventDefault();
    const userInp = document.getElementById('modalUsername');
    const passInp = document.getElementById('modalPassword');
    const errBox = document.getElementById('modalLoginError');
    const submitBtn = document.getElementById('modalLoginSubmitBtn');

    if (!userInp || !passInp) return;

    const username = userInp.value.trim();
    const password = passInp.value;

    if (isFileProtocol) {
        if (errBox) {
            errBox.innerHTML = `
                <div style="line-height:1.7; text-align:center;">
                    <i class="fa-solid fa-circle-exclamation" style="color:var(--gold);margin-left:5px;"></i>
                    الموقع يعمل حالياً كملف محلي (file://).<br>
                    لتسجيل الدخول وإدارة المحتوى، يرجى تشغيل الخادم والدخول عبر:<br>
                    <a href="http://localhost:3000/admin.html" target="_blank" style="color:var(--gold);font-weight:bold;text-decoration:underline;display:inline-block;margin-top:6px;">
                        http://localhost:3000/admin.html
                    </a>
                </div>
            `;
            errBox.style.display = 'block';
        }
        return;
    }

    if (!username || !password) {
        if (errBox) {
            errBox.textContent = 'يرجى إدخال اسم المستخدم وكلمة المرور';
            errBox.style.display = 'block';
        }
        return;
    }

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>جاري التحقق...</span>';
    }
    if (errBox) errBox.style.display = 'none';

    try {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (res.ok && data.success && data.token) {
            localStorage.setItem('sheikh_admin_token', data.token);
            localStorage.setItem('admin_token', data.token);
            showToast('تم تسجيل الدخول بنجاح! جاري التوجيه إلى لوحة التحكم...', 'success');
            closeLoginModal();
            setTimeout(() => {
                window.location.href = 'admin.html';
            }, 600);
        } else {
            if (errBox) {
                errBox.textContent = data.message || 'اسم المستخدم أو كلمة المرور غير صحيحة';
                errBox.style.display = 'block';
            }
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> <span>دخول إلى لوحة التحكم</span>';
            }
        }
    } catch (err) {
        if (errBox) {
            errBox.textContent = 'تعذر الاتصال بالخادم، يرجى المحاولة لاحقاً';
            errBox.style.display = 'block';
        }
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> <span>دخول إلى لوحة التحكم</span>';
        }
    }
}

/**
 * شريط إرشادي خفيف يظهر فقط عند فتح الموقع كملف محلي (file://)
 */
function showLocalFileBanner() {
    if (document.getElementById('localFileNoticeBanner')) return;
    const banner = document.createElement('aside');
    banner.id = 'localFileNoticeBanner';
    banner.className = 'local-file-notice-banner';
    banner.setAttribute('role', 'status');
    banner.innerHTML = `
        <div class="container local-file-notice-content">
            <div class="lfn-badge">
                <i class="fa-solid fa-laptop-file"></i>
                <span>تصفح محلي (Offline)</span>
            </div>
            <p class="lfn-msg">
                أنت تتصفح الموقع والمكتبة محلياً بكامل الدروس (31 فيديو) والأذكار والحكم. لتشغيل لوحة التحكم والمزامنة الكاملة، افتح عبر الخادم:
                <a href="http://localhost:3000" target="_blank" rel="noopener">http://localhost:3000</a>
            </p>
            <button type="button" class="lfn-close" onclick="document.getElementById('localFileNoticeBanner').remove()" title="إغلاق التنبيه" aria-label="إغلاق">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    `;
    const topBar = document.querySelector('.top-bar');
    if (topBar) {
        topBar.insertAdjacentElement('afterend', banner);
    } else {
        document.body.prepend(banner);
    }
}

// ==========================================================================
// 21. المقرأة القرآنية التفاعلية والمصحف المعلم واختبارات التحفيظ والتسميع
// ==========================================================================

/**
 * فهرس سور القرآن الكريم الـ ١١٤ بالكامل
 */
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

/**
 * قاعدة نصوص مسبقة التضمين لسرعة التحميل اللحظي حتى دون إنترنت
 */
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

/**
 * بنك أسئلة اختبارات التحفيظ والتسميع الذكية
 */
const HIFZ_QUIZ_BANK = [
    // --- جزء عم ---
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
        promptAyah: "وَٱلضُّحَىٰ ۝ وَٱلَّيْلِ إِذَا سَجَىٰ",
        sourceInfo: "سورة الضحى • الآيتان ١-٢",
        questionText: "أكمل الآية التالية:",
        options: [
            "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
            "وَلَلْءَاخِرَةُ خَيْرٌۭ لَّكَ مِنَ ٱلْأُولَىٰ",
            "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
            "أَلَمْ يَجِدْكَ يَتِيمًۭا فَـَٔاوَىٰ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ﴾ في سورة الضحى."
    },
    {
        scope: "juz_amma",
        type: "surah_name",
        promptAyah: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
        sourceInfo: "القرآن الكريم",
        questionText: "في أي سورة وردت هذه الآية المباركة؟",
        options: [
            "سورة الشرح (الانشراح)",
            "سورة الضحى",
            "سورة العلق",
            "سورة التين"
        ],
        correctIndex: 0,
        explanation: "الآية الأولى من سورة الشرح."
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
        scope: "juz_amma",
        type: "next_ayah",
        promptAyah: "إِذَا زُلْزِلَتِ ٱلْأَرْضُ زِلْزَالَهَا",
        sourceInfo: "سورة الزلزلة • الآية ١",
        questionText: "ما هي الآية المباركة التالية؟",
        options: [
            "وَأَخْرَجَتِ ٱلْأَرْضُ أَثْقَالَهَا",
            "وَقَالَ ٱلْإِنسَٰنُ مَا لَهَا",
            "يَوْمَئِذٍۢ تُحَدِّثُ أَخْبَارَهَا",
            "بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿إِذَا زُلْزِلَتِ ٱلْأَرْضُ زِلْزَالَهَا ۝ وَأَخْرَجَتِ ٱلْأَرْضُ أَثْقَالَهَا﴾."
    },
    {
        scope: "juz_amma",
        type: "next_ayah",
        promptAyah: "أَلْهَىٰكُمُ ٱلتَّكَاثُرُ",
        sourceInfo: "سورة التكاثر • الآية ١",
        questionText: "ما هي الآية الكريمة التي تليها مباشرة؟",
        options: [
            "حَتَّىٰ زُرْتُمُ ٱلْمَقَابِرَ",
            "كَلَّا سَوْفَ تَعْلَمُونَ",
            "ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ",
            "كَلَّا لَوْ تَعْلَمُونَ عِلْمَ ٱلْيَقِينِ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى في سورة التكاثر: ﴿أَلْهَىٰكُمُ ٱلتَّكَاثُرُ ۝ حَتَّىٰ زُرْتُمُ ٱلْمَقَابِرَ﴾."
    },
    {
        scope: "juz_amma",
        type: "next_ayah",
        promptAyah: "إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ",
        sourceInfo: "سورة الكوثر • الآية ١",
        questionText: "أكمل الآية المباركة التالية:",
        options: [
            "فَصَلِّ لِرَبِّكَ وَٱنْحَرْ",
            "إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ",
            "قُلْ يَٰٓأَيُّهَا ٱلْكَٰفِرُونَ",
            "إِذَا جَآءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى في سورة الكوثر: ﴿إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ ۝ فَصَلِّ لِرَبِّكَ وَٱنْحَرْ﴾."
    },

    // --- سورة الكهف ---
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
        scope: "surah_kahf",
        type: "next_ayah",
        promptAyah: "إِذْ أَوَى ٱلْفِتْيَةُ إِلَى ٱلْكَهْفِ فَقَالُوا۟ رَبَّنَآ ءَاتِنَا مِن لَّدُنكَ رَحْمَةًۭ",
        sourceInfo: "سورة الكهف • الآية ١٠",
        questionText: "أكمل قوله تعالى: «... فَقَالُوا۟ رَبَّنَآ ءَاتِنَا مِن لَّدُنكَ رَحْمَةًۭ وَهَيِّئْ لَنَا مِنْ أَمْرِنَا...»",
        options: [
            "رَشَدًۭا",
            "يُسْرًۭا",
            "عِوَجًۭا",
            "فَرَجًۭا"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿فَقَالُوا۟ رَبَّنَآ ءَاتِنَا مِن لَّدُنكَ رَحْمَةًۭ وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًۭا﴾."
    },
    {
        scope: "surah_kahf",
        type: "next_ayah",
        promptAyah: "وَٱضْرِبْ لَهُم مَّثَلَ ٱلْحَيَوٰةِ ٱلدُّنْيَا كَمَآءٍ أَنزَلْنَٰهُ مِنَ ٱلسَّمَآءِ فَٱخْتَلَطَ بِهِۦ نَبَاتُ ٱلْأَرْضِ فَأَصْبَحَ هَشِيمًۭا تَذْرُوهُ ٱلرِّيَٰحُ ۗ",
        sourceInfo: "سورة الكهف • الآية ٤٥",
        questionText: "ما الآية الجليلة التي تليها مباشرة؟",
        options: [
            "ٱلْمَالُ وَٱلْبَنُونَ زِينَةُ ٱلْحَيَوٰةِ ٱلدُّنْيَا ۖ وَٱلْبَٰقِيَٰتُ ٱلصَّٰلِحَٰتُ خَيْرٌ عِندَ رَبِّكَ ثَوَابًۭا وَخَيْرٌ أَمَلًۭا",
            "وَيَوْمَ نُسَيِّرُ ٱلْجِبَالَ وَتَرَى ٱلْأَرْضَ بَارِزَةً",
            "وَوُضِعَ ٱلْكِتَٰبُ فَتَرَى ٱلْمُجْرِمِينَ مُشْفِقِينَ",
            "وَإِذْ قُلْنَا لِلْمَلَٰٓئِكَةِ ٱسْجُدُوا۟ لِءَادَمَ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿ٱلْمَالُ وَٱلْبَنُونَ زِينَةُ ٱلْحَيَوٰةِ ٱلدُّنْيَا...﴾ الآية ٤٦ من سورة الكهف."
    },
    {
        scope: "surah_kahf",
        type: "surah_name",
        promptAyah: "قُلْ هَلْ نُنَبِّئُكُم بِٱلْأَخْسَرِينَ أَعْمَٰلًا ۝ ٱلَّذِينَ ضَلَّ سَعْيُهُمْ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا",
        sourceInfo: "القرآن الكريم",
        questionText: "في أي سورة وردت هاتان الآيتان المباركتان؟",
        options: [
            "سورة الكهف (أواخر السورة)",
            "سورة الإسراء",
            "سورة مريم",
            "سورة الأنبياء"
        ],
        correctIndex: 0,
        explanation: "وردتا في أواخر سورة الكهف المباركة (الآيتان ١٠٣-١٠٤)."
    },

    // --- سورة يس ---
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
        scope: "surah_yasin",
        type: "next_ayah",
        promptAyah: "وَجَآءَ مِنْ أَقْصَا ٱلْمَدِينَةِ رَجُلٌۭ يَسْعَىٰ قَالَ يَٰقَوْمِ ٱتَّبِعُوا۟ ٱلْمُرْسَلِينَ",
        sourceInfo: "سورة يس • الآية ٢٠",
        questionText: "ما هي الآية التي تليها مباشرة؟",
        options: [
            "ٱتَّبِعُوا۟ مَن لَّا يَسْـَٔلُكُمْ أَجْرًۭا وَهُم مُّهْتَدُونَ",
            "وَمَا لِىَ لَآ أَعْبُدُ ٱلَّذِى فَطَرَنِى",
            "ءَأَتَّخِذُ مِن دُونِهِۦٓ ءَالِهَةً",
            "إِنِّىٓ إِذًۭا لَّفِى ضَلَٰلٍۢ مُّبِينٍ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى في سورة يس: ﴿ٱتَّبِعُوا۟ مَن لَّا يَسْـَٔلُكُمْ أَجْرًۭا وَهُم مُّهْتَدُونَ﴾."
    },
    {
        scope: "surah_yasin",
        type: "next_ayah",
        promptAyah: "إِنَّمَآ أَمْرُهُۥٓ إِذَآ أَرَادَ شَيْـًٔا أَن يَقُولَ لَهُۥ كُن فَيَكُونُ",
        sourceInfo: "سورة يس • الآية ٨٢",
        questionText: "ما ختام سورة يس بعد هذه الآية مباشرة؟",
        options: [
            "فَسُبْحَٰنَ ٱلَّذِى بِيَدِهِۦ مَلَكُوتُ كُلِّ شَىْءٍۢ وَإِلَيْهِ تُرْجَعُونَ",
            "وَسَلَٰمٌ عَلَى ٱلْمُرْسَلِينَ",
            "وَٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
            "إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى ختاماً لسورة يس: ﴿فَسُبْحَٰنَ ٱلَّذِى بِيَدِهِۦ مَلَكُوتُ كُلِّ شَىْءٍۢ وَإِلَيْهِ تُرْجَعُونَ﴾."
    },

    // --- سورة الملك ---
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
        scope: "surah_mulk",
        type: "next_ayah",
        promptAyah: "إِنَّ ٱلَّذِينَ يَخْشَوْنَ رَبَّهُم بِٱلْغَيْبِ لَهُم مَّغْفِرَةٌۭ وَأَجْرٌۭ كَبِيرٌۭ",
        sourceInfo: "سورة الملك • الآية ١٢",
        questionText: "ما الآية الكريمة التي تليها مباشرة؟",
        options: [
            "وَأَسِرُّوا۟ قَوْلَكُمْ أَوِ ٱجْهَرُوا۟ بِهِۦٓ ۖ إِنَّهُۥ عَلِيمٌۢ بِذَاتِ ٱلصُّدُورِ",
            "أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ ٱللَّطِيفُ ٱلْخَبِيرُ",
            "هُوَ ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ ذَلُولًۭا",
            "ءَأَمِنتُم مَّن فِى ٱلسَّمَآءِ أَن يَخْسِفَ بِكُمُ ٱلْأَرْضَ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿وَأَسِرُّوا۟ قَوْلَكُمْ أَوِ ٱجْهَرُوا۟ بِهِۦٓ ۖ إِنَّهُۥ عَلِيمٌۢ بِذَاتِ ٱلصُّدُورِ﴾ في سورة الملك."
    },
    {
        scope: "surah_mulk",
        type: "next_ayah",
        promptAyah: "قُلْ أَرَءَيْتُمْ إِنْ أَصْبَحَ مَآؤُكُمْ غَوْرًۭا",
        sourceInfo: "سورة الملك • الآية ٣٠ (خاتمة السورة)",
        questionText: "أكمل ختام الآية الكريمة: «... فَمَن يَأْتِيكُم بِمَآءٍۢ...»",
        options: [
            "مَّعِينٍۢ",
            "فُرَاتٍ",
            "طَهُورٍ",
            "ثَجَّاجٍ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى ختاماً لسورة الملك: ﴿قُلْ أَرَءَيْتُمْ إِنْ أَصْبَحَ مَآؤُكُمْ غَوْرًۭا فَمَن يَأْتِيكُم بِمَآءٍۢ مَّعِينٍۭ﴾."
    },

    // --- سورة الواقعة ---
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
        scope: "surah_waqiah",
        type: "next_ayah",
        promptAyah: "وَٱلسَّٰبِقُونَ ٱلسَّٰبِقُونَ",
        sourceInfo: "سورة الواقعة • الآية ١٠",
        questionText: "ما الآية الكريمة التي تليها مباشرة؟",
        options: [
            "أُو۟لَٰٓئِكَ ٱلْمُقَرَّبُونَ",
            "فِى جَنَّٰتِ ٱلنَّعِيمِ",
            "ثُلَّةٌۭ مِّنَ ٱلْأَوَّلِينَ",
            "وَقَلِيلٌۭ مِّنَ ٱلْءَاخِرِينَ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿وَٱلسَّٰبِقُونَ ٱلسَّٰبِقُونَ ۝ أُو۟لَٰٓئِكَ ٱلْمُقَرَّبُونَ﴾."
    },

    // --- سورة الرحمن ---
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
        scope: "surah_rahman",
        type: "next_ayah",
        promptAyah: "كُلُّ مَنْ عَلَيْهَا فَانٍۢ",
        sourceInfo: "سورة الرحمن • الآية ٢٦",
        questionText: "ما الآية العظيمة التي تليها مباشرة؟",
        options: [
            "وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو ٱلْجَلَٰلِ وَٱلْإِكْرَامِ",
            "فَبِأَىِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ",
            "يَسْـَٔلُهُۥ مَن فِى ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ",
            "سَنَفْرُغُ لَكُمْ أَيُّهَ ٱلثَّقَلَانِ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿كُلُّ مَنْ عَلَيْهَا فَانٍۢ ۝ وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو ٱلْجَلَٰلِ وَٱلْإِكْرَامِ﴾ في سورة الرحمن."
    },

    // --- جزء تبارك ---
    {
        scope: "juz_tabarak",
        type: "next_ayah",
        promptAyah: "نٓ ۚ وَٱلْقَلَمِ وَمَا يَسْطُرُونَ",
        sourceInfo: "سورة القلم • الآية ١",
        questionText: "ما هي الآية المباركة التالية؟",
        options: [
            "مَآ أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍۢ",
            "وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍۢ",
            "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍۢ",
            "فَسَتُبْصِرُ وَيُبْصِرُونَ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿نٓ ۚ وَٱلْقَلَمِ وَمَا يَسْطُرُونَ ۝ مَآ أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍۢ﴾."
    },
    {
        scope: "juz_tabarak",
        type: "surah_name",
        promptAyah: "ٱلْحَآقَّةُ ۝ مَا ٱلْحَآقَّةُ ۝ وَمَآ أَدْرَىٰكَ مَا ٱلْحَآقَّةُ",
        sourceInfo: "القرآن الكريم",
        questionText: "في أي سورة وردت هذه الآيات الكريمة؟",
        options: [
            "سورة الحاقة",
            "سورة المعارج",
            "سورة القيامة",
            "سورة القارعة"
        ],
        correctIndex: 0,
        explanation: "مطلع سورة الحاقة المباركة في جزء تبارك."
    },
    {
        scope: "juz_tabarak",
        type: "next_ayah",
        promptAyah: "يَٰٓأَيُّهَا ٱلْمُزَّمِّلُ",
        sourceInfo: "سورة المزمل • الآية ١",
        questionText: "أكمل الآية الكريمة التالية مباشرة:",
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
        questionText: "ما الآية الكريمة التالية مباشرة؟",
        options: [
            "قُمْ فَأَنذِرْ",
            "وَرَبَّكَ فَكَبِّرْ",
            "وَثِيَابَكَ فَطَهِّرْ",
            "وَٱلرُّجْزَ فَٱهْجُرْ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿يَٰٓأَيُّهَا ٱلْمُدَّثِّرُ ۝ قُمْ فَأَنذِرْ﴾."
    },

    // --- فاتحة الكتاب وأوائل البقرة ---
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
        scope: "surah_fatiha_baqarah_intro",
        type: "next_ayah",
        promptAyah: "الٓمٓ ۝ ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ",
        sourceInfo: "سورة البقرة • الآيتان ١-٢",
        questionText: "ما هي الآية المباركة التي تصف المتقين بعدها مباشرة؟",
        options: [
            "ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ",
            "وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ",
            "أُو۟لَٰٓئِكَ عَلَىٰ هُدًۭى مِّن رَّبِّهِمْ ۖ وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ",
            "إِنَّ ٱلَّذِينَ كَفَرُوا۟ سَوَآءٌ عَلَيْهِمْ"
        ],
        correctIndex: 0,
        explanation: "قال تعالى: ﴿ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ﴾ (البقرة: ٣)."
    }
];

/**
 * محرك المقرأة القرآنية الكامل (المصحف المعلم + الاختبارات + التكرار + التسميع الذاتي)
 */
function initMaqraahEngine() {
    const maqraahSection = document.getElementById('maqraahSection');
    if (!maqraahSection || !document.getElementById('quranVersesContainer')) return; // المقرأة أصبحت في صفحة مستقلة maqraah.html

    // --- حالة مشغل القرآن ---
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
        fontSizeLevel: 2 // 0: صغير, 1: متوسط, 2: قياسي, 3: كبير, 4: كبير جداً
    };

    // خريطة كاش الذاكرة للسور المحملة لتقليل طلبات الشبكة
    const surahCache = new Map();

    // عناصر واجهة المصحف
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

    // عناصر شريط الهيدر الزخرفي للسورة
    const surahTitleDisplay = document.getElementById('surahTitleDisplay');
    const surahMetaType = document.getElementById('surahMetaType');
    const surahSubtitleInfo = document.getElementById('surahSubtitleInfo');
    const surahBasmalaBanner = document.getElementById('surahBasmalaBanner');

    // عناصر شريط الصوت العائم
    const floatingAudioBar = document.getElementById('quranFloatingAudioBar');
    const audioCurrentAyahBadge = document.getElementById('audioCurrentAyahBadge');
    const audioCurrentReciter = document.getElementById('audioCurrentReciter');
    const audioRepeatBadge = document.getElementById('audioRepeatBadge');
    const audioPrevBtn = document.getElementById('audioPrevAyahBtn');
    const audioPlayPauseBtn = document.getElementById('audioTogglePlayBtn');
    const audioNextBtn = document.getElementById('audioNextAyahBtn');
    const audioCloseBtn = document.getElementById('audioCloseBtn');

    // أسماء القراء بالعربية
    const reciterDisplayNames = {
        'ar.husary': 'الشيخ الحصري (المعلم)',
        'ar.minshawi': 'الشيخ المنشاوي (مرتل)',
        'ar.abdulbasitmurattal': 'الشيخ عبد الباسط (مرتل)',
        'ar.alafasy': 'الشيخ مشاري العفاسي'
    };

    // مجلدات الصوت المباشر من EveryAyah
    const reciterAudioFolders = {
        'ar.husary': 'Husary_128kbps',
        'ar.minshawi': 'Minshawy_Murattal_128kbps',
        'ar.abdulbasitmurattal': 'Abdul_Basit_Murattal_192kbps',
        'ar.alafasy': 'Alafasy_128kbps'
    };

    // أحجام الخط
    const fontSizes = ['1.25rem', '1.45rem', '1.65rem', '1.9rem', '2.2rem'];

    // -------------------------------------------------------------
    // أ. إدارة التبويبات الثلاثة (المصحف - الاختبارات - الحلقات)
    // -------------------------------------------------------------
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

    // -------------------------------------------------------------
    // ب. ملء قائمة السور الـ ١١٤
    // -------------------------------------------------------------
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

    // -------------------------------------------------------------
    // ج. التحكم في وضع التسميع الذاتي (Blind Mode)
    // -------------------------------------------------------------
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

        // إزالة حالة الكشف عن الآيات عند تفعيل الوضع من جديد
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

    // -------------------------------------------------------------
    // د. التحكم في حجم خط المصحف
    // -------------------------------------------------------------
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

    // -------------------------------------------------------------
    // هـ. جلب وعرض آيات السورة الكريمة
    // -------------------------------------------------------------
    async function loadSurah(surahNumber) {
        stopAudioPlayback();
        quranState.currentSurah = surahNumber;
        quranState.currentPlayingAyahIndex = -1;
        quranState.currentAyahPlayRepeat = 0;

        const surahMeta = QURAN_SURAHS.find(s => s.number === surahNumber) || QURAN_SURAHS[0];

        // تحديث الهيدر
        if (surahTitleDisplay) surahTitleDisplay.textContent = `سُورَةُ ${surahMeta.name}`;
        if (surahMetaType) surahMetaType.textContent = `${surahMeta.type} • ${surahMeta.ayahs} آيات`;
        if (surahSubtitleInfo) {
            surahSubtitleInfo.textContent = `ترتيبها بالمصحف الشريف: ${surahMeta.number} • التلاوة برواية حفص عن عاصم`;
        }

        // إظهار/إخفاء البسملة (سورة التوبة رقم 9 لا تبدأ بالبسملة، وسورة الفاتحة رقم 1 البسملة هي الآية 1)
        if (surahBasmalaBanner) {
            if (surahNumber === 9 || surahNumber === 1) {
                surahBasmalaBanner.style.display = 'none';
            } else {
                surahBasmalaBanner.style.display = 'block';
            }
        }

        // فحص الذاكرة المخبأة أولاً
        if (surahCache.has(surahNumber)) {
            renderVerses(surahCache.get(surahNumber));
            return;
        }

        // فحص البيانات المضمنة محلياً للطوارئ أو الأوفلاين
        if (OFFLINE_SURAHS_DATA[surahNumber]) {
            const data = OFFLINE_SURAHS_DATA[surahNumber];
            surahCache.set(surahNumber, data);
            renderVerses(data);
            return;
        }

        // عرض مؤشر التحميل
        if (versesContainer) {
            versesContainer.innerHTML = `
                <div class="quran-loading-state">
                    <i class="fa-solid fa-circle-notch fa-spin gold-icon"></i>
                    <span>جاري تحميل آيات سورة ${surahMeta.name} المباركة...</span>
                </div>
            `;
        }

        try {
            // جلب النص العثماني المعتمد من Quran Cloud API
            const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani`);
            if (res.ok) {
                const json = await res.json();
                if (json.data && json.data[0] && Array.isArray(json.data[0].ayahs)) {
                    let ayahs = json.data[0].ayahs.map(a => ({
                        numberInSurah: a.numberInSurah,
                        text: a.text
                    }));

                    // في كل السور ما عدا الفاتحة والتوبة، السطر الأول من الـ API قد يتضمن البسملة مدموجة في أول آية
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
            // في حال عدم توفر اتصال بالإنترنت، إنشاء عرض بديل محلي
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

    // أرقام عربية مشرقية لأقواس الآيات ﴿١﴾
    function toArabicDigits(num) {
        const arabicMap = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return String(num).split('').map(d => arabicMap[d] || d).join('');
    }

    function renderVerses(ayahs) {
        quranState.ayahsData = ayahs;
        if (!versesContainer) return;

        versesContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();

        ayahs.forEach((ayah, index) => {
            const span = document.createElement('span');
            span.className = 'quran-ayah';
            span.setAttribute('data-index', index);
            span.setAttribute('data-ayah-num', ayah.numberInSurah);

            const textSpan = document.createElement('span');
            textSpan.className = 'ayah-text';
            textSpan.textContent = ayah.text + ' ';

            const numSymbol = document.createElement('span');
            numSymbol.className = 'ayah-num-symbol';
            numSymbol.title = `استمع للآية ${ayah.numberInSurah}`;
            numSymbol.innerHTML = `﴿${toArabicDigits(ayah.numberInSurah)}﴾`;

            span.appendChild(textSpan);
            span.appendChild(numSymbol);

            // عند النقر على الآية:
            // في وضع التسميع: لمسة واحدة تكشف الآية
            // في الوضع العادي أو عند النقر على رمز الآية: تشغيل التلاوة الصوتية
            span.addEventListener('click', (e) => {
                if (quranState.isBlindMode) {
                    span.classList.toggle('revealed');
                    // إذا نقر مباشرة على رمز الرقم، نشغل الصوت أيضاً
                    if (e.target.closest('.ayah-num-symbol')) {
                        playAyahByIndex(index);
                    }
                } else {
                    playAyahByIndex(index);
                }
            });

            fragment.appendChild(span);
        });

        versesContainer.appendChild(fragment);
        applyFontSize();
    }

    // -------------------------------------------------------------
    // و. نظام الصوتيات والتلاوة والتكرار
    // -------------------------------------------------------------
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
        const ayah = quranState.ayahsData[index];
        const audioUrl = getAyahAudioUrl(quranState.currentReciter, quranState.currentSurah, ayah.numberInSurah);

        // إنشاء أو إعادة استخدام مشغل الصوت
        if (!quranState.audioPlayer) {
            quranState.audioPlayer = new Audio();
        }

        quranState.audioPlayer.pause();
        quranState.audioPlayer.src = audioUrl;

        // إبراز الآية الحالية في النص
        document.querySelectorAll('.quran-ayah.playing-ayah').forEach(el => el.classList.remove('playing-ayah'));
        const currentAyahEl = document.querySelector(`.quran-ayah[data-index="${index}"]`);
        if (currentAyahEl) {
            currentAyahEl.classList.add('playing-ayah');
            if (quranState.isBlindMode) {
                currentAyahEl.classList.add('revealed'); // كشف الآية تلقائياً عند سماعها
            }
            currentAyahEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // تحديث عناصر الشريط العائم
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

        // حدث انتهاء قراءة الآية (التحكم في التكرار والانتقال للتالية)
        quranState.audioPlayer.onended = () => {
            quranState.currentAyahPlayRepeat++;
            if (quranState.currentAyahPlayRepeat < quranState.repeatCountTarget) {
                // تكرار نفس الآية
                updateRepeatBadgeUI();
                quranState.audioPlayer.currentTime = 0;
                quranState.audioPlayer.play().catch(() => {});
            } else {
                // الانتقال للآية التالية
                quranState.currentAyahPlayRepeat = 0;
                updateRepeatBadgeUI();
                if (index + 1 < quranState.ayahsData.length) {
                    playAyahByIndex(index + 1);
                } else {
                    // ختام السورة المباركة
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
            // بدء التشغيل من أول آية
            playAyahByIndex(0);
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

    // -------------------------------------------------------------
    // ز. محرك اختبارات التحفيظ والتسميع الذكية (Smart Hifz Quiz)
    // -------------------------------------------------------------
    const quizSetupScreen = document.getElementById('quizSetupScreen');
    const quizActiveScreen = document.getElementById('quizActiveScreen');
    const quizResultScreen = document.getElementById('quizResultScreen');
    const startQuizBtn = document.getElementById('startQuizBtn');
    const retryQuizBtn = document.getElementById('retryQuizBtn');
    const shareQuizBtn = document.getElementById('shareQuizResultBtn');

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

        // تصفية بنك الأسئلة حسب النطاق المختار
        let eligible = HIFZ_QUIZ_BANK.filter(q => q.scope === scope);

        // إذا كان عدد الأسئلة بالنطاق أقل من المطلوب ندمج أسئلة جزء عم وجزء تبارك
        if (eligible.length < quizTotalCount) {
            eligible = [...eligible, ...HIFZ_QUIZ_BANK.filter(q => q.scope === 'juz_amma' && !eligible.includes(q))];
        }

        // خلط الأسئلة عشوائياً واختيار العدد المطلوب
        const shuffled = [...eligible].sort(() => 0.5 - Math.random());
        currentQuizQuestions = shuffled.slice(0, quizTotalCount);

        currentQuizQuestionIndex = 0;
        quizScore = 0;
        isQuestionAnswered = false;

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

        // تحديث المؤشرات
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

        // نص السؤال والآية
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

        // إخفاء التغذية وزر التالي
        if (quizFeedbackBox) {
            quizFeedbackBox.style.display = 'none';
            quizFeedbackBox.className = 'quiz-feedback-box';
            quizFeedbackBox.innerHTML = '';
        }
        if (quizNextActionWrap) quizNextActionWrap.style.display = 'none';

        // رسم أزرار الخيارات
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

        // تحديث ستايل الأزرار
        const buttons = quizAnswersList ? quizAnswersList.querySelectorAll('.quiz-choice-btn') : [];
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === q.correctIndex) {
                btn.classList.add('correct');
            } else if (idx === selectedIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        // عرض التغذية الراجعة
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

        // إظهار زر الانتقال للتالي
        if (quizNextActionWrap) quizNextActionWrap.style.display = 'block';
        if (quizLiveScore) quizLiveScore.textContent = `النقاط: ${toArabicDigits(quizScore)}`;
    }

    function showQuizResults() {
        if (quizActiveScreen) quizActiveScreen.style.display = 'none';
        if (quizResultScreen) quizResultScreen.style.display = 'block';

        const percentage = Math.round((quizScore / quizTotalCount) * 100);

        if (resultScoreDisplay) {
            resultScoreDisplay.textContent = `${toArabicDigits(quizScore)} / ${toArabicDigits(quizTotalCount)}`;
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

    if (shareQuizBtn) {
        shareQuizBtn.addEventListener('click', () => {
            const shareText = `حققت نتيجة ${toArabicDigits(quizScore)} من أصل ${toArabicDigits(quizTotalCount)} في اختبار حفظ القرآن الكريم بمقرأة فضيلة الشيخ أحمد مرتضى حامد المباركة بالأقصر 🌟📖\nجرّب اختبار حفظك لكتاب الله: ${window.location.origin}${window.location.pathname}#maqraahSection`;
            copyToClipboard(shareText, 'تم نسخ نتيجة الاختبار لمشاركتها مع إخوانك! 📋');
        });
    }

    // -------------------------------------------------------------
    // ح. التهيئة الأولية: تحميل سورة الفاتحة افتراضياً
    // -------------------------------------------------------------
    loadSurah(1);
}



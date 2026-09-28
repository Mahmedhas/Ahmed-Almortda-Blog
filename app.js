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
    const imgUrl = heroMedia.customImageUrl || heroMedia.imageUrl || 'uploads/hero_1789291588780_01d38d97.png';

    const customImg = document.getElementById('heroCustomImage');
    const customTitle = document.getElementById('heroCustomTitle');
    const customDesc = document.getElementById('heroCustomDesc');

    if (customImg && imgUrl) {
        customImg.src = imgUrl;
        customImg.alt = heroMedia.title || heroMedia.imageTitle || 'فضيلة الشيخ أحمد مرتضى حامد';
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
            desc: 'التدوينات الإيمانية والخواطر التربوية في رحاب الساحة'
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
        if (countDisplay) countDisplay.textContent = roundCount.toLocaleString('ar-EG');
        if (sessionNumEl) sessionNumEl.textContent = `جلسة #${sessionNumber}`;
        if (sessionCountEl) sessionCountEl.textContent = sessionCount.toLocaleString('ar-EG');
        if (totalDisplay) totalDisplay.textContent = totalAll.toLocaleString('ar-EG');
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
                        ${item.count.toLocaleString('ar-EG')} <small style="font-weight: 500; font-size: 0.75rem;">تسبيحة</small>
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
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const isOpen = navMenu.classList.contains('open');
            mobileBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
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
                أنت تتصفح المدونة محلياً بكامل الدروس (31 فيديو) والأذكار والحكم. لتشغيل لوحة التحكم والمزامنة الكاملة، افتح عبر الخادم:
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


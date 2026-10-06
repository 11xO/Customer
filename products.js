/* ═══════════════════════════════════════════════════════════
   ملف المنتجات الجاهزة - حماصة ماركت
   📦 ~350 منتج حقيقي | 16 تصنيف | أسعار السوق المصري
   ⚠️  حقل الصورة فاضي — أنت تحط الروابط من لوحة التحكم
   ═══════════════════════════════════════════════════════════ */

const quickProductsDatabase = {

/* ═══ 1. بيبسي (مشروبات غازية ومشروبات طاقة) ═══ */
beverages: {
    name: 'بيبسي',
    icon: '🥤',
    products: [
        { name:'سبرايت مشروب غازي – 2.45 لتر', price:45, note:'', image:'' },
        { name:'ميريندا برتقال – 320 مل', price:13, note:'', image:'' },
        { name:'ميريندا برتقال – 390 مل', price:15, note:'', image:'' },
        { name:'ميرندا برتقال – 2.43 لتر', price:45, note:'', image:'' },
        { name:'في 7 رمان – 300 مل', price:15, note:'', image:'' },
        { name:'في 7 سوبر صودا بدون سكر – 300 مل', price:15, note:'بدون سكر', image:'' },
        { name:'في 7 توت – 300 مل', price:15, note:'', image:'' },
        { name:'في 7 أناناس – 300 مل', price:15, note:'', image:'' },
        { name:'في 7 بينك ليمونادا – 300 مل', price:15, note:'', image:'' },
        { name:'في 7 سوبر صودا ليمون – 300 مل', price:15, note:'', image:'' },
        { name:'في 7 شعير بالتفاح – 300 مل', price:15, note:'', image:'' },
        { name:'شويبس رمان – 1.75 لتر', price:40, note:'', image:'' },
        { name:'شويبس أناناس – 1.75 لتر', price:40, note:'', image:'' },
        { name:'شويبس أناناس – 250 مل', price:10, note:'', image:'' },
        { name:'شويبس جولد بطعم الرمان – 320 مل', price:13, note:'', image:'' },
        { name:'شويبس جولد بطعم الليمون و النعناع – 320 مل', price:13, note:'', image:'' },
        { name:'شويبس جولد بطعم أناناس – 320 مل', price:13, note:'', image:'' },
        { name:'شويبس جولد مشروب شعير بالاناناس – 1 لتر', price:35, note:'', image:'' },
        { name:'سفن أب – 1.47 لتر', price:40, note:'', image:'' },
        { name:'سفن أب – 250 مل', price:10, note:'', image:'' },
        { name:'سفن اب ليمون كانز – 355 مل', price:15, note:'', image:'' },
        { name:'كوكاكولا زيرو كانز – 300 مل', price:15, note:'بدون سكر', image:'' },
        { name:'كوكا كولا – 1.45 لتر', price:40, note:'', image:'' },
        { name:'ماونتن ديو – 400 مل', price:15, note:'', image:'' },
        { name:'بيبسي – 1.47 لتر', price:40, note:'', image:'' },
        { name:'بيبسي كانز – 320 مل', price:13, note:'', image:'' },
        { name:'بيبسي كانز – 355 مل', price:13, note:'', image:'' },
        { name:'ريد بول توت الأساي – 250 مل', price:60, note:'مشروب طاقة', image:'' },
        { name:'ريد بول كلاسيك – 250 مل', price:60, note:'مشروب طاقة', image:'' },
        { name:'ريد بول بالكريز و توت البري – 250 مل', price:60, note:'', image:'' },
        { name:'ريد بول جوز هند – 250 مل', price:60, note:'', image:'' },
        { name:'غوريلا ألتمت مشروب طاقة – 250 مل', price:25, note:'', image:'' },
        { name:'غوريلا ألتمت مشروب طاقة بطيخ وشمام – 250 مل', price:25, note:'', image:'' },
        { name:'تويست مشروب طاقة – 250 مل', price:15, note:'', image:'' },
        { name:'تويست مشروب طاقة بالتوت – 250 مل', price:15, note:'', image:'' },
        { name:'فولت مشروب طاقة – 200 مل', price:10, note:'', image:'' },
        { name:'موسي مشروب شعير بطعم التفاح – 275 مل', price:25, note:'', image:'' },
        { name:'موسي مشروب شعير بطعم الرمان – 275 مل', price:25, note:'', image:'' },
        { name:'موسي مشروب شعير بطعم الخوخ – 275 مل', price:25, note:'', image:'' },
        { name:'موسي مشروب شعير بطعم التوت المثلج – 275 مل', price:25, note:'', image:'' },
        { name:'ستينج مشروب شعير – 275 مل', price:15, note:'', image:'' },
        { name:'فيروز مشروب شعير بطعم اناناس – 330 مل', price:17, note:'', image:'' },
        { name:'فيتراك شربات ورد – 850 جم', price:100, note:'', image:'' },
        { name:'راني كانز حبيبات تفاح أخضر – 235 مل', price:20, note:'', image:'' },
        { name:'نستلة قهوة مثلجة نسكافية موكا – 220 مل', price:45, note:'', image:'' },
        { name:'نستلة قهوة مثلجة نسكافية لاتية – 220 مل', price:45, note:'', image:'' },
        { name:'نستلة قهوة مثلجة نسكافية كابوتشينو – 220 مل', price:45, note:'', image:'' }
    ]
},

/* ═══ 2. عصائر ═══ */
juices: {
    name: 'عصائر',
    icon: '🧃',
    products: [
        { name:'المراعي حليب بالفراولة – 200 مل', price:12, note:'', image:'' },
        { name:'المراعي حليب كامل الدسم – 200 مل', price:12, note:'', image:'' },
        { name:'المراعي حليب بالشوكولاتة – 200 مل', price:12, note:'', image:'' },
        { name:'جهينة مكس حليب بالموز – 200 مل', price:12, note:'', image:'' },
        { name:'بيتي عصير برتقال – 1 لتر', price:35, note:'', image:'' },
        { name:'بيتي عصير اناناس – 235 مل', price:10, note:'', image:'' },
        { name:'بيتي عصير برتقال – 235 مل', price:10, note:'', image:'' },
        { name:'جهينة عصير تفاح – 1 لتر', price:35, note:'', image:'' },
        { name:'جهينة عصير اناناس – 1 لتر', price:35, note:'', image:'' },
        { name:'كل يوم عصير تفاح – 225 مل', price:5, note:'', image:'' },
        { name:'سن توب عصير برتقال – 250 مل', price:15, note:'', image:'' },
        { name:'سن توب عصير كوكتيل – 250 مل', price:15, note:'', image:'' },
        { name:'سن توب عصير توت مشكل – 250 مل', price:15, note:'', image:'' },
        { name:'بخيره عصير تفاح – 225 مل', price:5, note:'', image:'' },
        { name:'تانج برتقال – 35 جم', price:10, note:'بودرة', image:'' },
        { name:'تانج مانجو – 30 جم', price:10, note:'بودرة', image:'' },
        { name:'تانج مانجو – 40 جم', price:15, note:'بودرة', image:'' },
        { name:'تانج مانجو – 450 جم', price:100, note:'بودرة', image:'' },
        { name:'فروتي مانجا', price:3, note:'', image:'' },
        { name:'فروتي يوسفي', price:3, note:'', image:'' }
    ]
},

/* ═══ 3. شيبسي ═══ */
chips: {
    name: 'شيبسي',
    icon: '🍟',
    products: [
        { name:'دوريتوس حجم اكبر قرمشة اكتر بطعم حار نار باليمون', price:10, note:'', image:'' },
        { name:'دوريتوس حجم اكبر قرمشة اكتر بطعم حار نار – 15 ج', price:15, note:'', image:'' },
        { name:'دوريتوس بطعم الفلفل الحلو – 10 ج', price:10, note:'', image:'' },
        { name:'دوريتوس بطعم جبنة الناتشو – 15 ج', price:15, note:'', image:'' },
        { name:'شيبسي بطعم جبنة متبلة – 15 ج', price:15, note:'', image:'' },
        { name:'شيبسي بطعم الملح – 10 ج', price:10, note:'', image:'' },
        { name:'شيبسي بطعم شطة وليمون – 10 ج', price:10, note:'', image:'' },
        { name:'شيبسي بطعم شطة حارة وليمون – 15 ج', price:15, note:'', image:'' },
        { name:'شيبسي بطعم الخل والملح – 20 ج', price:20, note:'', image:'' },
        { name:'شيبسي بطعم الخل والملح – 15 ج', price:15, note:'', image:'' },
        { name:'شيبسي بطعم الجبنة – 10 ج', price:10, note:'', image:'' },
        { name:'شيبسي بطعم كباب عالفحم – 15 ج', price:15, note:'', image:'' },
        { name:'شيبسي ويفي بطعم رانش مع الجبنة وليمون', price:15, note:'', image:'' },
        { name:'شيبسي ويفي بطعم ليمون بالكزبرة – 15 ج', price:15, note:'', image:'' },
        { name:'شيبسي فورنو بطعم ميكس يوناني – 15 ج', price:15, note:'', image:'' },
        { name:'شيبسي تايجر بطعم الكباب – 10 ج', price:10, note:'', image:'' },
        { name:'شيبسي تايجر بطعم ميكس تشيز – 15 ج', price:15, note:'', image:'' },
        { name:'شيبسي تايجر بطعم الجبنة المتبلة – 10 ج', price:10, note:'', image:'' },
        { name:'جاجوار شيبس جمبري بالفلفل الحار – 10 ج', price:10, note:'', image:'' },
        { name:'جاجوار شيبس تشيكن كوري – 10 ج', price:10, note:'', image:'' },
        { name:'جاجوار باف كينج بطعم الكباب – 10 ج', price:10, note:'', image:'' },
        { name:'جاجوار باف كورن جبنة كريمي – 10 ج', price:10, note:'', image:'' },
        { name:'جاجوار باف كورن شطة و ليمون – 10 ج', price:10, note:'', image:'' },
        { name:'جاجوار باف كورن بطعم ذرة حلوة – 10 ج', price:10, note:'', image:'' },
        { name:'جاجوار بافس بطعم البيتزا - 10 ج', price:10, note:'', image:'' },
        { name:'جاجوار كون بطعم جمبري كوكتيل – 10 ج', price:10, note:'', image:'' },
        { name:'تايجر اكسيلنس بطعم السويت شيلي – 15 ج', price:15, note:'', image:'' },
        { name:'تايجر اكسيلنس ويفز بطعم طماطم و جبن كريمي', price:15, note:'', image:'' },
        { name:'تايجر بطعم تشيكن لافا', price:15, note:'', image:'' },
        { name:'تايجر بطعم شطة وليمون – 10 ج', price:10, note:'', image:'' },
        { name:'بيج شيبسي بطعم الكباب المشوي – 10 ج', price:10, note:'', image:'' },
        { name:'بيج شيبسي بطعم الجبنة المتبلة – 15 ج', price:15, note:'', image:'' },
        { name:'بيج شيبسي بطعم الجبنة المتبلة – 10 ج', price:10, note:'', image:'' },
        { name:'بيج شيبسي بالكاتشب الحلو – 10 ج', price:10, note:'', image:'' },
        { name:'بيج شيبسي بريميوم خل و ملح – 15 ج', price:15, note:'', image:'' },
        { name:'بيج شيبسي بطعم بالليمون المولع – 10 ج', price:10, note:'', image:'' },
        { name:'صن بايتس مخبوز بطعم الفلفل الحلو 10 ج', price:10, note:'', image:'' },
        { name:'صن بايتس مخبوز بطعم جبنة متبلة – 10 ج', price:10, note:'', image:'' },
        { name:'صن بايتس جبنة متيلة – 15 ج', price:15, note:'', image:'' },
        { name:'شيتوس كرانشي حار نار بالليمون – 10 ج', price:10, note:'', image:'' },
        { name:'شيتوس بافس حار نار – 10 ج', price:10, note:'', image:'' },
        { name:'كرانشي بطعم الفراخ – 10 ج', price:10, note:'', image:'' },
        { name:'كرانشي بطعم سجق حار 10 ج', price:10, note:'', image:'' },
        { name:'بيك ستيكس بطعم الجبنة – حجم سوبر', price:10, note:'', image:'' },
        { name:'بيك ستيكس بطعم السجق الشرقي – حجم سوبر', price:10, note:'', image:'' },
        { name:'بيك رولز بطعم مكس جبن – 10 ج', price:10, note:'', image:'' },
        { name:'بيك رولز بطعم الطماطم – 10 ج', price:10, note:'', image:'' },
        { name:'بريتزو بريتزلز ستيكس بالملح', price:10, note:'', image:'' },
        { name:'فانيليا برتقال', price:6, note:'', image:'' }
    ]
},

/* ═══ 4. جبن و لانشون ═══ */
cheese: {
    name: 'جبن و لانشون',
    icon: '🧀',
    products: [
        { name:'لانشون زيتون – 250 جم', price:35, note:'', image:'' },
        { name:'لانشون بالفلفل الأسود – 250 جم', price:35, note:'', image:'' },
        { name:'جبن سبريد رومي طبيعي – 250 جم', price:40, note:'', image:'' },
        { name:'جبنة ملح خفيف – 250 جم', price:40, note:'', image:'' },
        { name:'جبن رومي – 250 جم', price:65, note:'', image:'' },
        { name:'عبورلاند جبن فيتا – 500 جم', price:48, note:'', image:'' },
        { name:'عبورلاند جبن فيتا – 250 جم', price:25, note:'', image:'' },
        { name:'عبورلاند جبن فيتا بطعم الشيدر – 250 جم', price:25, note:'', image:'' },
        { name:'عبورلاند جبن طري بطعم الجبنة الرومي – 500 جم', price:48, note:'', image:'' },
        { name:'عبورلاند جولد جبن أبيض طري طبيعي – 500 جم', price:80, note:'', image:'' },
        { name:'جبن سبريد – 500 جم', price:200, note:'', image:'' },
        { name:'رودس جبن فلامنك – 250 جم', price:25, note:'', image:'' },
        { name:'رودس جبنة فلامنك – 500 جم', price:50, note:'', image:'' },
        { name:'رودس جبنة نباتي بطعم الجبنة الرومي – 500 جم', price:50, note:'', image:'' },
        { name:'رودس جبنة شيدر – 500 جم', price:50, note:'', image:'' },
        { name:'رودس جبن فيتا – 250 جم', price:25, note:'', image:'' },
        { name:'كيري جبنة مثلثات – 16 قطعة', price:75, note:'', image:'' },
        { name:'كيري جبنة حليب وقشطة – 8 قطع', price:85, note:'', image:'' },
        { name:'كيري جبن حليب وقشطة – 12 قطعة', price:120, note:'', image:'' },
        { name:'كيري جبن حليب وقشطة – 6 قطع', price:65, note:'', image:'' },
        { name:'كيري جبن مثلثات – 8 قطع', price:40, note:'', image:'' },
        { name:'كيري بسطرمة – 250 جم', price:40, note:'', image:'' },
        { name:'جبن كيري سادة طبيعي – 250 جم', price:40, note:'', image:'' },
        { name:'جبنة بيضاء قديمه بالفلفل – 250 جم', price:50, note:'', image:'' },
        { name:'جبنة بيضاء قديمه – 250 جم', price:50, note:'', image:'' },
        { name:'المراعي لبنة طازجة كامل الدسم – 250 جم', price:120, note:'', image:'' },
        { name:'المراعي جبنة أبيض اسطنبولي – 450 جم', price:120, note:'', image:'' },
        { name:'دومتي جبنة فيتا بلس – 500 جم', price:50, note:'', image:'' },
        { name:'سلطة مكس لانشون فاهيتا – 250 جم', price:40, note:'', image:'' },
        { name:'مورتة – 250 جم', price:40, note:'', image:'' },
        { name:'جبن كريمي كلاسيك – 240 جم', price:100, note:'', image:'' }
    ]
},

/* ═══ 5. زبادي ولبن ═══ */
dairy: {
    name: 'زبادي ولبن',
    icon: '🥛',
    products: [
        { name:'دانون دانيت كريم كراميل', price:6, note:'', image:'' },
        { name:'المراعي رايب بيناكولادا – 425 جم', price:30, note:'', image:'' },
        { name:'المراعي رايب ليمون نعناع – 425 جم', price:40, note:'', image:'' },
        { name:'المراعي رايب ليمون نعناع – 220 جم', price:20, note:'', image:'' },
        { name:'المراعي رايب – 220 جم', price:20, note:'', image:'' },
        { name:'المراعي يوجو مشروب زبادي بالمانجو – 425 جم', price:30, note:'', image:'' },
        { name:'المراعي يوجو مشروب زبادي بالفراولة – 220 جم', price:20, note:'', image:'' },
        { name:'المراعي يوجو مشروب زبادي بالخوخ – 425 جم', price:30, note:'', image:'' },
        { name:'المراعي يوجو مشروب زبادي ميكس توت – 425 جم', price:30, note:'', image:'' },
        { name:'المراعي تريتس بودينج شوكولاتة', price:6, note:'', image:'' },
        { name:'المراعي تريتس زبادي بالفراولة – 150 جم', price:15, note:'', image:'' },
        { name:'المراعي زبادي تريتس بقطع الفراولة – 105 جم', price:12, note:'', image:'' },
        { name:'المراعي زبادي يوناني 2% دسم – 170 جم', price:45, note:'', image:'' },
        { name:'المراعي زبادي يوناني 5% دسم – 170 جم', price:45, note:'', image:'' },
        { name:'جهينه زبادي لايت – 180 جم', price:15, note:'', image:'' },
        { name:'جهينة حليب خالي الدسم – 1 لتر', price:55, note:'', image:'' },
        { name:'زجاجة جهينة حليب كامل الدسم – 1 لتر', price:55, note:'', image:'' },
        { name:'كيس بخيره حليب كامل الدسم – 1 لتر', price:50, note:'', image:'' },
        { name:'نيدو الأساسي حليب بودرة – 25 جم', price:10, note:'', image:'' }
    ]
},

/* ═══ 6. شيكولاتة ═══ */
chocolate: {
    name: 'شيكولاتة',
    icon: '🍫',
    products: [
        { name:'كادبوري ديري ميلك مارفيليوس كريشينز و الحلوي المطرقعة – 90 جم', price:120, note:'', image:'' },
        { name:'كادبوري ديري ميلك بالبندق – 16 جم', price:15, note:'', image:'' },
        { name:'جالكسي شوكولاتة سادة – 80 جم', price:120, note:'', image:'' }
    ]
},

/* ═══ 7. المعلبات ═══ */
canned: {
    name: 'المعلبات',
    icon: '🥫',
    products: [
        { name:'نوتلا', price:250, note:'', image:'' },
        { name:'مرقه دجاج', price:1, note:'', image:'' },
        { name:'عسل نحل بالشمع', price:120, note:'', image:'' },
        { name:'كاتشب كبير حار', price:55, note:'', image:'' },
        { name:'عسل اسود', price:35, note:'', image:'' },
        { name:'فانيليا', price:1, note:'', image:'' },
        { name:'شوكلاته خام', price:35, note:'', image:'' },
        { name:'مربي صفيح فراوله', price:90, note:'', image:'' },
        { name:'مربي صفيح تين', price:90, note:'', image:'' },
        { name:'مايونيز كبير', price:55, note:'', image:'' },
        { name:'مايونيز صغير', price:30, note:'', image:'' },
        { name:'مايونيز اظرف', price:3, note:'', image:'' },
        { name:'كاتشب صغير توم وزعتر', price:30, note:'', image:'' },
        { name:'كاتشب صغير مشاوي', price:30, note:'', image:'' },
        { name:'كاتشب كبير عادي', price:55, note:'', image:'' },
        { name:'كاتشب اظرف', price:2, note:'', image:'' },
        { name:'مسترده', price:55, note:'', image:'' },
        { name:'حلاوه البوادي كبير', price:90, note:'', image:'' },
        { name:'حلاوه البوادي صغير', price:55, note:'', image:'' },
        { name:'حلاوه البوادي 1/ك', price:135, note:'', image:'' },
        { name:'حلاوه طحينيه الشعاع 2/ك', price:200, note:'', image:'' },
        { name:'حلاوه طحينيه الشعاع كيلو', price:100, note:'', image:'' },
        { name:'حلاوه طحنيه الشعاع صغير', price:35, note:'', image:'' },
        { name:'تونه قطع صان شاين حاره', price:70, note:'', image:'' },
        { name:'تونه قطع عاديه صان شاين', price:65, note:'', image:'' },
        { name:'تونه مفتته دولفن عاديه', price:40, note:'', image:'' },
        { name:'تونه مفتته عاديه حاره', price:30, note:'', image:'' },
        { name:'عسل نحل صغير', price:50, note:'', image:'' },
        { name:'عسل نحل كبير', price:100, note:'', image:'' },
        { name:'مربي صغير تين', price:40, note:'', image:'' },
        { name:'مربي فراوله صغير', price:40, note:'', image:'' },
        { name:'مربي تين كبيره', price:65, note:'', image:'' },
        { name:'طحينه سايله 1/8', price:23, note:'', image:'' },
        { name:'طحينه صغير', price:35, note:'', image:'' },
        { name:'بيكنج بودر', price:4, note:'', image:'' },
        { name:'كاكاو خام سايب 1/8', price:37, note:'', image:'' },
        { name:'صلصه', price:35, note:'برطمان', image:'' }
    ]
},

/* ═══ 8. المخبوزات ═══ */
bakery: {
    name: 'المخبوزات',
    icon: '🍞',
    products: [
        { name:'علبه كوكيز مخبز', price:35, note:'', image:'' },
        { name:'عيش فينو كبير', price:15, note:'', image:'' },
        { name:'عيش فينو صغير', price:10, note:'', image:'' },
        { name:'كيس عيش ابيض', price:8, note:'', image:'' },
        { name:'عيش توست غامق', price:60, note:'', image:'' },
        { name:'عيش تورتلا', price:50, note:'', image:'' },
        { name:'قراقيش', price:25, note:'', image:'' },
        { name:'بسكوت العيد', price:25, note:'', image:'' }
    ]
},

/* ═══ 9. المنظفات ═══ */
cleaning: {
    name: 'المنظفات',
    icon: '🧴',
    products: [
        { name:'بريل سائل غسيل باليمون الأخضر – 2.5 لتر', price:140, note:'', image:'' },
        { name:'بريل صحون – 600 مل', price:40, note:'', image:'' },
        { name:'فيبا منظف أطباق بالليمون الأخضر – 2 لتر', price:175, note:'', image:'' },
        { name:'صابون سافانا كلاسيك – 125 جم', price:17, note:'', image:'' },
        { name:'أريال مسحوق غسيل بلمسة داوني - 2 كجم', price:125, note:'', image:'' },
        { name:'أريال فوق أوتوماتيك بلمسة من الأنتعاش داوني', price:25, note:'', image:'' },
        { name:'أريال نصف أتوماتيك لمسة من داوني – 105 جم', price:10, note:'', image:'' },
        { name:'كلوركس الوان بينك – 1 لتر', price:75, note:'', image:'' },
        { name:'كلوركس ابيض اكياس', price:10, note:'', image:'' },
        { name:'كلوركس ابيض زجاجه', price:35, note:'', image:'' },
        { name:'كلوركس ألوان بدون كلور – 150 مل', price:15, note:'', image:'' },
        { name:'كلوركس الوان برائحة اللافندر – 950 مل', price:75, note:'', image:'' },
        { name:'كلوركس أبيض بياض تكنولوجيا مانعه للاصفرار', price:10, note:'', image:'' },
        { name:'دورو مجموعة صابون برائحة نسيم', price:60, note:'', image:'' },
        { name:'كامي صابون برائحة أناقة مرطب', price:17, note:'', image:'' },
        { name:'كامي صابون كلاسيك', price:17, note:'', image:'' },
        { name:'رويال لاذر صابون بريميام جولد', price:17, note:'', image:'' },
        { name:'هاربيك باور بلس منظف مراحيض برائحة الورد', price:80, note:'', image:'' },
        { name:'ديتول ماك اكوا منظف ارضيات – 650 مل', price:100, note:'', image:'' },
        { name:'باكت مناديل جيب', price:30, note:'', image:'' },
        { name:'علبه مناديل جيب', price:3, note:'', image:'' },
        { name:'بكره مناديل مطبخ', price:15, note:'', image:'' },
        { name:'باكت مناديل مطبخ', price:75, note:'', image:'' },
        { name:'صابون مواعين', price:6, note:'', image:'' },
        { name:'سلك مواعين 1/8', price:17, note:'', image:'' },
        { name:'اوكسي 1 ونص ك', price:105, note:'', image:'' },
        { name:'اوكسي 2 /ك', price:145, note:'', image:'' },
        { name:'اوكسي 1/ك', price:85, note:'', image:'' },
        { name:'اوكسي صغير', price:10, note:'', image:'' },
        { name:'اوكسي حجم وسط', price:20, note:'', image:'' },
        { name:'أوكسي مسحوق فوق أتوماتيك نسيم اللافندر 2/ك', price:145, note:'', image:'' },
        { name:'كوب كرتون حجم صغير للقهوة – 50 كوب', price:25, note:'', image:'' },
        { name:'بمبرز مقاس 4', price:5, note:'', image:'' },
        { name:'بمبرز مقاس 5', price:5, note:'', image:'' },
        { name:'ستي بيبي مقاس 5', price:200, note:'', image:'' },
        { name:'ستي بيبي مقاس 4', price:190, note:'', image:'' }
    ]
},

/* ═══ 10. بيض ═══ */
eggs: {
    name: 'بيض',
    icon: '🥚',
    products: [
        { name:'زيتون شرائح أخضر – 250 جم', price:40, note:'', image:'' }
    ]
},

/* ═══ 11. تسالي ═══ */
snacks: {
    name: 'تسالي',
    icon: '🥜',
    products: [
        { name:'اندومي كبير باللحمه', price:10, note:'', image:'' },
        { name:'اندومي صغير باللحمه', price:5, note:'', image:'' },
        { name:'اندومي كوري حار', price:120, note:'', image:'' },
        { name:'اندومي كوري نودلز', price:10, note:'', image:'' },
        { name:'اندومي كوري طعم الجبنه', price:120, note:'', image:'' },
        { name:'اندومي كوري', price:120, note:'', image:'' },
        { name:'اندومي كبير بالفراخ', price:10, note:'', image:'' },
        { name:'اندومي كبير بالخضار عادي', price:10, note:'', image:'' },
        { name:'اندومي كبير بالخضار حار', price:10, note:'', image:'' },
        { name:'لب سوبر', price:5, note:'', image:'' }
    ]
},

/* ═══ 12. مخلل ═══ */
pickles: {
    name: 'مخلل',
    icon: '🥒',
    products: [
        { name:'خيار بلدي مخلل – 500 جم', price:25, note:'', image:'' },
        { name:'مخلل مشكل – 500 جم', price:15, note:'', image:'' },
        { name:'مخلل ليمون – 500 جم', price:15, note:'', image:'' },
        { name:'مخلل بصل – 250 جم', price:30, note:'', image:'' },
        { name:'مخلل فلفل مكسيكي – 250 جم', price:12, note:'', image:'' },
        { name:'زيتون شرائح أسود – 250 جم', price:35, note:'', image:'' },
        { name:'زيتون اسود اسباني – 250 جم', price:40, note:'', image:'' },
        { name:'زيتون شرائح أخضر حار – 250 جم', price:35, note:'', image:'' },
        { name:'زيتون كلماتا – 250 جم', price:25, note:'', image:'' }
    ]
},

/* ═══ 13. مشاريب سخنه ═══ */
hotDrinks: {
    name: 'مشاريب سخنه',
    icon: '☕',
    products: [
        { name:'كوفي بريك', price:65, note:'', image:'' },
        { name:'برطمان نسكافية كلاسيك', price:95, note:'', image:'' },
        { name:'أبو عوف قهوة سادة فاتح – 100 جم', price:75, note:'', image:'' },
        { name:'أبو عوف قهوة سادة وسط – 200 جم – باكو', price:145, note:'', image:'' },
        { name:'أبو عوف قهوة وسط سادة – 100 جم', price:75, note:'', image:'' },
        { name:'أبو عوف قهوة محوج غامق – 100 جم', price:90, note:'', image:'' },
        { name:'أبو عوف قهوة غامق سادة مخصوص صفيح', price:185, note:'', image:'' },
        { name:'أبو عوف قهوة فاتح سادة مخصوص صفيح', price:185, note:'', image:'' },
        { name:'بن شاهين قهوة سادة توليفة شرقي فاكيوم', price:65, note:'', image:'' },
        { name:'بونجورنو كابتشينو فانيليا – 1 ظرف', price:10, note:'', image:'' },
        { name:'بونجورنو كابتشينو موكا – 1 ظرف', price:10, note:'', image:'' },
        { name:'بونجورنو لاتية كلاسيك – 1 ظرف', price:10, note:'', image:'' },
        { name:'كوفي بريك كابتشينو كلاسيك – ظرف', price:10, note:'', image:'' },
        { name:'كوفي بريك كابتشينو فانيليا – ظرف', price:10, note:'', image:'' },
        { name:'ليبتون شاي أخضر بالنعناع – 12 فتلة', price:15, note:'', image:'' },
        { name:'ليبتون شاي أخضر بالنعناع – 25 فتلة', price:40, note:'', image:'' },
        { name:'ليبتون شاي أخضر – 50 فتلة', price:65, note:'', image:'' },
        { name:'ليبتون شاي ناعم – 40 جم', price:12, note:'', image:'' },
        { name:'ليبتون شاي أسود العلامه الصفراء – 250 جم', price:55, note:'', image:'' },
        { name:'شاي العروسة ناعم - 250 جم', price:55, note:'', image:'' },
        { name:'نسكافية 3*1 – ظرف', price:8, note:'', image:'' },
        { name:'شاي أخضر بنكهة', price:25, note:'', image:'' },
        { name:'إيزيس مشروب أعشاب ينسون – 12 فتلة', price:20, note:'', image:'' }
    ]
},

/* ═══ 14. مكرونه والبقوليات ═══ */
pasta: {
    name: 'مكرونه والبقوليات',
    icon: '🍝',
    products: [
        { name:'حواء مكرونة شعرية – 400 جم', price:15, note:'', image:'' },
        { name:'حواء مكرونة هلالية – 400 جم', price:15, note:'', image:'' },
        { name:'حواء مكرونة سباجتي – 400 جم', price:15, note:'', image:'' },
        { name:'حواء مكرونة مرمرية – 400 جم', price:15, note:'', image:'' },
        { name:'حواء مكرونة لسان عصفور – 400 جم', price:15, note:'', image:'' },
        { name:'حواء مكرونة فرن – 400 جم', price:15, note:'', image:'' },
        { name:'حواء مكرونة خواتم – 400 جم', price:15, note:'', image:'' },
        { name:'مكرونه اقلام 1/2', price:23, note:'', image:'' },
        { name:'مكرونه اسبجتي 1/2', price:23, note:'', image:'' },
        { name:'مكرونه مرمريه 1/2', price:23, note:'', image:'' },
        { name:'اندومي خضار حار', price:10, note:'', image:'' },
        { name:'اندومي خضار عادي', price:5, note:'', image:'' },
        { name:'اندومي خضار عاديي', price:10, note:'', image:'' },
        { name:'بالدو فولكانو نودلز بالدجاج شديدة الحارة', price:120, note:'', image:'' },
        { name:'ار أرز بسمتي ذهبي فاخر - 1 كجم', price:75, note:'', image:'' },
        { name:'ذره فشار 1/4', price:15, note:'', image:'' },
        { name:'سكر', price:25, note:'', image:'' }
    ]
},

/* ═══ 15. مياة ═══ */
water: {
    name: 'مياة',
    icon: '💧',
    products: [
        { name:'مياه نستله 1.5 لتر / 12 زجاجه', price:120, note:'', image:'' }
    ]
},

/* ═══ 16. مجمدات ═══ */
frozen: {
    name: 'مجمدات',
    icon: '🧊',
    products: [
        { name:'موتزريلا العاديه 1/4', price:35, note:'', image:'' },
        { name:'استريبس حلواني 1/ك حار', price:275, note:'', image:'' },
        { name:'استريبس حلواني 1/ك عادي', price:275, note:'', image:'' },
        { name:'استريبس اطياب مطاعم حار 1/ك', price:185, note:'', image:'' },
        { name:'استريبس اطياب 1/ك', price:285, note:'', image:'' },
        { name:'سجق الجوكر', price:45, note:'', image:'' },
        { name:'بطاطس 1/ك', price:85, note:'', image:'' },
        { name:'لحم مفروم 500 جرام', price:135, note:'', image:'' },
        { name:'كبده 350 جرام', price:75, note:'', image:'' },
        { name:'كفته الجوكر', price:41, note:'', image:'' },
        { name:'كفته علي الفحم 1/ ك', price:220, note:'', image:'' },
        { name:'موتزريلا 1/4 مكس', price:35, note:'', image:'' },
        { name:'موتزريلا 1/ك', price:145, note:'', image:'' },
        { name:'موتزريلا عاديه 1/2', price:65, note:'', image:'' },
        { name:'زبده فرن 1/ك', price:155, note:'', image:'' },
        { name:'لفه جلاش', price:25, note:'', image:'' },
        { name:'ملوخيه', price:35, note:'', image:'' },
        { name:'سجق علي الفحم', price:110, note:'', image:'' },
        { name:'توابل شرقيه عاديه 1/ك', price:130, note:'', image:'' },
        { name:'بانيه حلواني 1/ك', price:175, note:'', image:'' },
        { name:'بانيه حلواني حار 1/ك', price:175, note:'', image:'' },
        { name:'برجر اطياب', price:200, note:'', image:'' }
    ]
}

};

/* ═══════════════════════════════════════════════════════════
   نهاية ملف المنتجات
   📊 الإجمالي: 16 تصنيف | 350+ منتج
   ═══════════════════════════════════════════════════════════ */

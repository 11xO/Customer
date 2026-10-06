/* ═══════════════════════════════════════════════════════════
   ملف المنتجات الجاهزة - مشوارك
   📦 المرحلة التجريبية
   ═══════════════════════════════════════════════════════════ */

const quickProductsDatabase = {

    /* ═══ 1. مشروبات غازية ═══ */
    beverages: {
        name: 'مشروبات غازية',
        icon: '🥤',
        products: [
            { name:'كوكاكولا 1 لتر', price:25, note:'الزجاجة الأصلية', image:'' },
            { name:'كوكاكولا 1.5 لتر', price:35, note:'', image:'' },
            { name:'كوكاكولا 2.25 لتر', price:45, note:'', image:'' },
            { name:'بيبسي 1 لتر', price:25, note:'', image:'' },
            { name:'بيبسي 1.5 لتر', price:35, note:'', image:'' },
            { name:'سفن أب 1 لتر', price:25, note:'ليمون', image:'' },
            { name:'سفن أب 1.5 لتر', price:35, note:'', image:'' },
            { name:'فانتا برتقال 1 لتر', price:25, note:'', image:'' },
            { name:'سبرايت 1 لتر', price:25, note:'ليمون', image:'' },
            { name:'ريد بُل 250 مل', price:45, note:'مشروب طاقة', image:'' }
        ]
    },

    /* ═══ 2. عصائر ═══ */
    juices: {
        name: 'عصائر',
        icon: '🧃',
        products: [
            { name:'عصير جهينة مانجو 1 لتر', price:35, note:'', image:'' },
            { name:'عصير جهينة برتقال 1 لتر', price:35, note:'', image:'' },
            { name:'عصير جهينة جوافة 1 لتر', price:35, note:'', image:'' },
            { name:'عصير جهينة فراولة 1 لتر', price:35, note:'', image:'' },
            { name:'عصير جهينة تفاح 1 لتر', price:35, note:'', image:'' },
            { name:'عصير بيتي مانجو 1 لتر', price:32, note:'', image:'' },
            { name:'عصير بيتي برتقال 1 لتر', price:32, note:'', image:'' },
            { name:'عصير نستله مانجو 1 لتر', price:40, note:'', image:'' },
            { name:'عصير مانجو فريش 500 مل', price:30, note:'طبيعي 100%', image:'' },
            { name:'عصير برتقال فريش 500 مل', price:28, note:'طبيعي 100%', image:'' },
            { name:'عصير قصب فريش 500 مل', price:15, note:'طبيعي', image:'' },
            { name:'عصير ليمون بالنعناع 500 مل', price:25, note:'طبيعي', image:'' }
        ]
    },

    /* ═══ 3. مياه معدنية ═══ */
    water: {
        name: 'مياه معدنية',
        icon: '💧',
        products: [
            { name:'مياه نستله 600 مل', price:6, note:'', image:'' },
            { name:'مياه نستله 1.5 لتر', price:10, note:'', image:'' },
            { name:'مياه بركة 600 مل', price:5, note:'', image:'' },
            { name:'مياه بركة 1.5 لتر', price:8, note:'', image:'' },
            { name:'مياه حياة 600 مل', price:5, note:'', image:'' },
            { name:'مياه حياة 1.5 لتر', price:8, note:'', image:'' },
            { name:'مياه أكوا 600 مل', price:5, note:'', image:'' }
        ]
    },

    /* ═══ 4. ألبان ═══ */
    dairy: {
        name: 'ألبان',
        icon: '🥛',
        products: [
            { name:'لبن جهينة 1 لتر', price:35, note:'كامل الدسم', image:'' },
            { name:'لبن جهينة 500 مل', price:20, note:'', image:'' },
            { name:'لبن المراعي 1 لتر', price:38, note:'', image:'' },
            { name:'لبن لبنية 1 لتر', price:35, note:'', image:'' },
            { name:'لبن بودرة نيدو 400 جم', price:120, note:'', image:'' },
            { name:'لبن مكثف نستله 397 جم', price:45, note:'محلى', image:'' },
            { name:'لبن رايب 500 جم', price:25, note:'', image:'' }
        ]
    },

    /* ═══ 5. أجبان ═══ */
    cheese: {
        name: 'أجبان',
        icon: '🧀',
        products: [
            { name:'جبنة بيضاء جهينة 500 جم', price:75, note:'', image:'' },
            { name:'جبنة بيضاء المراعي 500 جم', price:80, note:'', image:'' },
            { name:'جبنة رومي قديمة 250 جم', price:95, note:'', image:'' },
            { name:'جبنة رومي قديمة 500 جم', price:180, note:'', image:'' },
            { name:'جبنة شيدر كرافت 200 جم', price:65, note:'', image:'' },
            { name:'جبنة موزاريلا 250 جم', price:70, note:'', image:'' },
            { name:'جبنة كيري 8 قطع', price:45, note:'', image:'' },
            { name:'جبنة بوك مثلثات 8 قطع', price:40, note:'', image:'' },
            { name:'جبنة قريش 500 جم', price:35, note:'', image:'' }
        ]
    },

    /* ═══ 6. شوكولاتة وبسكويت ═══ */
    chocolate: {
        name: 'شوكولاتة وبسكويت',
        icon: '🍫',
        products: [
            { name:'شوكولاتة كيت كات', price:25, note:'', image:'' },
            { name:'شوكولاتة جالاكسي', price:30, note:'', image:'' },
            { name:'شوكولاتة كادبوري', price:45, note:'', image:'' },
            { name:'شوكولاتة كندر بوينو', price:35, note:'', image:'' },
            { name:'بسكويت أوريو', price:20, note:'', image:'' },
            { name:'بسكويت شاي', price:15, note:'', image:'' },
            { name:'ويفر شوكولاتة', price:12, note:'', image:'' }
        ]
    },

    /* ═══ 7. شيبسي ومقرمشات ═══ */
    chips: {
        name: 'شيبسي ومقرمشات',
        icon: '🍟',
        products: [
            { name:'شيبسي بالملح', price:8, note:'', image:'' },
            { name:'شيبسي بالجبنة', price:8, note:'', image:'' },
            { name:'دوريتوس', price:10, note:'', image:'' },
            { name:'شيبسي تويستر', price:10, note:'', image:'' },
            { name:'فول سوداني مملح', price:25, note:'', image:'' },
            { name:'بسلة مملحة', price:20, note:'', image:'' },
            { name:'فشار ميكروويف', price:15, note:'', image:'' }
        ]
    },

    /* ═══ 8. منظفات ═══ */
    cleaning: {
        name: 'منظفات',
        icon: '🧴',
        products: [
            { name:'كلور 1 لتر', price:18, note:'', image:'' },
            { name:'ديتول 500 مل', price:75, note:'', image:'' },
            { name:'صابون سائل 1 لتر', price:50, note:'', image:'' },
            { name:'سائل غسيل أطباق 1 لتر', price:45, note:'', image:'' },
            { name:'مسحوق غسيل 3 كيلو', price:180, note:'', image:'' },
            { name:'معطر أرضيات 1 لتر', price:35, note:'', image:'' },
            { name:'منظف زجاج 500 مل', price:40, note:'', image:'' }
        ]
    }

};

/* ═══════════════════════════════════════════════════════════
   نهاية الملف
   ═══════════════════════════════════════════════════════════ */
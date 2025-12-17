// src/data/servicesData.js

/**
 * Comprehensive services data with packages, pricing, and features
 * Following professional photography business standards
 */

export const servicesData = [
  {
    id: 'weddings',
    name: {
      en: 'Wedding Photography',
      ar: 'تصوير حفلات الزفاف',
    },
    description: {
      en: 'Capture every precious moment of your special day with our professional wedding photography services',
      ar: 'التقط كل لحظة ثمينة من يومك الخاص مع خدمات تصوير حفلات الزفاف الاحترافية لدينا',
    },
    packages: [
      {
        id: 'wedding-basic',
        name: { en: 'Essential Package', ar: 'الباقة الأساسية' },
        price: { amount: 2500, currency: 'USD' },
        duration: '6 hours',
        photographers: 1,
        featured: false,
        features: {
          en: [
            'Pre-wedding consultation',
            '6 hours of coverage',
            '1 professional photographer',
            '300+ edited high-resolution photos',
            'Online gallery for 1 year',
            'Personal photo selection session',
            '30-day delivery',
          ],
          ar: [
            'استشارة ما قبل الزفاف',
            '6 ساعات من التغطية',
            'مصور محترف واحد',
            '300+ صورة عالية الدقة محررة',
            'معرض إلكتروني لمدة سنة واحدة',
            'جلسة اختيار صور شخصية',
            'التسليم خلال 30 يومًا',
          ],
        },
        addOns: {
          en: [
            'Second photographer: +$500',
            'Extended hours: +$300/hour',
            'Engagement session: +$600',
          ],
          ar: [
            'مصور ثان: +500 دولار',
            'ساعات ممتدة: +300 دولار/ساعة',
            'جلسة الخطوبة: +600 دولار',
          ],
        },
      },
      {
        id: 'wedding-premium',
        name: { en: 'Premium Package', ar: 'الباقةالمميزة' },
        price: { amount: 4000, currency: 'USD' },
        duration: '10 hours',
        photographers: 2,
        featured: true,
        features: {
          en: [
            'Engagement session included',
            'Pre-wedding consultation & venue visit',
            '10 hours of coverage',
            '2 professional photographers',
            '600+ edited high-resolution photos',
            'Online gallery for 2 years',
            'Personal photo selection session',
            '20 premium prints (8x10)',
            'USB drive with all photos',
            '21-day delivery',
            'Dedicated customer support',
          ],
          ar: [
            'جلسة الخطوبة مشمولة',
            'استشارة ما قبل الزفاف وزيارة المكان',
            '10 ساعات من التغطية',
            '2 مصور محترف',
            '600+ صورة عالية الدقة محررة',
            'معرض إلكتروني لمدة عامين',
            'جلسة اختيار صور شخصية',
            '20 طباعة مميزة (8×10)',
            'محرك USB مع جميع الصور',
            'التسليم خلال 21 يومًا',
            'دعم عملاء مخصص',
          ],
        },
        addOns: {
          en: [
            'Highlight video (3-5 min): +$800',
            'Premium album (30 pages): +$1200',
            'Extended hours: +$250/hour',
          ],
          ar: [
            'فيديو أبرز اللحظات (3-5 دقائق): +800 دولار',
            'ألبوم مميز (30 صفحة): +1200 دولار',
            'ساعات ممتدة: +250 دولار/ساعة',
          ],
        },
      },
      {
        id: 'wedding-platinum',
        name: { en: 'Platinum Package', ar: 'الباقة البلاتينية' },
        price: { amount: 6500, currency: 'USD' },
        duration: 'Full day',
        photographers: 3,
        featured: false,
        features: {
          en: [
            'Engagement session included',
            'Pre-wedding consultation & multiple venue visits',
            'Full day coverage (12+ hours)',
            '3 professional photographers',
            '1000+ edited high-resolution photos',
            'Cinematic highlight video (5-8 min)',
            'Online gallery - lifetime access',
            'Personal photo selection session',
            'Premium custom album (50 pages)',
            '50 premium prints (various sizes)',
            'Luxury USB presentation box',
            'Parent albums (2x)',
            '14-day express delivery',
            'Dedicated project coordinator',
            'Same-day sneak peek',
          ],
          ar: [
            'جلسة الخطوبة مشمولة',
            'استشارة ما قبل الزفاف وعدة زيارات للمكان',
            'تغطية اليوم الكامل (12+ ساعة)',
            '3 مصورين محترفين',
            '1000+ صورة عالية الدقة محررة',
            'فيديو سينمائي لأبرز اللحظات (5-8 دقائق)',
            'معرض إلكتروني - وصول مدى الحياة',
            'جلسة اختيار صور شخصية',
            'ألبوم مخصص مميز (50 صفحة)',
            '50 طباعة مميزة (أحجام متنوعة)',
            'صندوق عرض USB فاخر',
            'ألبومات الوالدين (2×)',
            'تسليم سريع خلال 14 يومًا',
            'منسق مشروع مخصص',
            'معاينة سريعة في نفس اليوم',
          ],
        },
        addOns: {
          en: [
            'Full ceremony & reception video: +$2000',
            'Drone photography: +$600',
            'Photo booth rental: +$800',
          ],
          ar: [
            'فيديو كامل للحفل والاستقبال: +2000 دولار',
            'تصوير بطائرة درون: +600 دولار',
            'استئجار كشك صور: +800 دولار',
          ],
        },
      },
    ],
  },
  {
    id: 'portraits',
    name: {
      en: 'Portrait Photography',
      ar: 'التصوير الشخصي',
    },
    description: {
      en: 'Professional portrait sessions for individuals, families, and corporate headshots',
      ar: 'جلسات تصوير شخصية احترافية للأفراد والعائلات والصور المؤسسية',
    },
    packages: [
      {
        id: 'portrait-individual',
        name: { en: 'Individual Portrait', ar: 'صورة شخصية فردية' },
        price: { amount: 350, currency: 'USD' },
        duration: '1 hour',
        photographers: 1,
        featured: false,
        features: {
          en: [
            '1-hour session',
            '1-2 outfit changes',
            'Indoor or outdoor location',
            '30+ edited high-resolution photos',
            'Online gallery for 6 months',
            '5 professional retouched images',
            '7-day delivery',
          ],
          ar: [
            'جلسة مدتها ساعة واحدة',
            '1-2 تغيير ملابس',
            'موقع داخلي أو خارجي',
            '30+ صورة عالية الدقة محررة',
            'معرض إلكتروني لمدة 6 أشهر',
            '5 صور محترفة معدلة',
            'التسليم خلال 7 أيام',
          ],
        },
        addOns: {
          en: [
            'Additional hour: +$200',
            'Hair & makeup: +$150',
            'Extra outfit changes: +$50 each',
          ],
          ar: [
            'ساعة إضافية: +200 دولار',
            'تصفيف الشعر والمكياج: +150 دولار',
            'تغيير ملابس إضافي: +50 دولار لكل',
          ],
        },
      },
      {
        id: 'portrait-family',
        name: { en: 'Family Portrait', ar: 'صورة عائلية' },
        price: { amount: 500, currency: 'USD' },
        duration: '1.5 hours',
        photographers: 1,
        featured: true,
        features: {
          en: [
            '1.5-hour session',
            'Up to 6 family members',
            'Indoor or outdoor location',
            '50+ edited high-resolution photos',
            'Online gallery for 1 year',
            '10 professional retouched images',
            'Multiple grouping combinations',
            '10 premium prints (5x7)',
            '10-day delivery',
          ],
          ar: [
            'جلسة مدتها 1.5 ساعة',
            'حتى 6 أفراد من العائلة',
            'موقع داخلي أو خارجي',
            '50+ صورة عالية الدقة محررة',
            'معرض إلكتروني لمدة عام واحد',
            '10 صور محترفة معدلة',
            'مجموعات متعددة',
            '10 طباعات مميزة (5×7)',
            'التسليم خلال 10 أيام',
          ],
        },
        addOns: {
          en: [
            'Additional family members: +$50 each',
            'Canvas print (16x20): +$300',
            'Second location: +$150',
          ],
          ar: [
            'أفراد عائلة إضافيون: +50 دولار لكل',
            'طباعة على القماش (16×20): +300 دولار',
            'موقع ثان: +150 دولار',
          ],
        },
      },
      {
        id: 'portrait-corporate',
        name: { en: 'Corporate Headshots', ar: 'صور مؤسسية' },
        price: { amount: 800, currency: 'USD' },
        duration: '2-3 hours',
        photographers: 1,
        featured: false,
        features: {
          en: [
            'On-location at your office',
            'Professional lighting setup',
            'Up to 15 employees',
            'Multiple background options',
            '2-3 poses per person',
            'Same-day retouching',
            'Web-optimized versions',
            'Commercial usage rights',
            '48-hour delivery',
          ],
          ar: [
            'في موقع مكتبك',
            'إعداد إضاءة احترافية',
            'حتى 15 موظفًا',
            'خيارات خلفية متعددة',
            '2-3 وضعيات لكل شخص',
            'تحرير في نفس اليوم',
            'إصدارات محسنة للويب',
            'حقوق الاستخدام التجاري',
            'التسليم خلال 48 ساعة',
          ],
        },
        addOns: {
          en: [
            'Additional employees: +$40 per person',
            'Video introductions: +$500',
            'Branded backgrounds: +$200',
          ],
          ar: [
            'موظفون إضافيون: +40 دولار للشخص',
            'تعريفات فيديو: +500 دولار',
            'خلفيات ذات علامة تجارية: +200 دولار',
          ],
        },
      },
    ],
  },
  {
    id: 'events',
    name: {
      en: 'Event Photography',
      ar: 'تصوير الفعاليات',
    },
    description: {
      en: 'Professional coverage for corporate events, parties, and special celebrations',
      ar: 'تغطية احترافية للفعاليات المؤسسية والحفلات والاحتفالات الخاصة',
    },
    packages: [
      {
        id: 'event-standard',
        name: { en: 'Standard Coverage', ar: 'التغطية القياسية' },
        price: { amount: 600, currency: 'USD' },
        duration: '3 hours',
        photographers: 1,
        featured: false,
        features: {
          en: [
            '3 hours of coverage',
            '200+ edited photos',
            'Candid and posed shots',
            'Online gallery',
            'Event highlights video (1-2 min)',
            '7-day delivery',
          ],
          ar: [
            '3 ساعات من التغطية',
            '200+ صورة محررة',
            'لقطات عفوية ومنظمة',
            'معرض إلكتروني',
            'فيديو لأبرز اللحظات (1-2 دقيقة)',
            'التسليم خلال 7 أيام',
          ],
        },
        addOns: {
          en: [
            'Additional hours: +$200/hour',
            'Photo booth: +$500',
            'Instant sharing station: +$300',
          ],
          ar: [
            'ساعات إضافية: +200 دولار/ساعة',
            'كشك صور: +500 دولار',
            'محطة مشاركة فورية: +300 دولار',
          ],
        },
      },
      {
        id: 'event-premium',
        name: { en: 'Premium Coverage', ar: 'التغطية المميزة' },
        price: { amount: 1200, currency: 'USD' },
        duration: '6 hours',
        photographers: 2,
        featured: true,
        features: {
          en: [
            '6 hours of coverage',
            '2 professional photographers',
            '400+ edited photos',
            'Full event documentation',
            'Highlight video (3-5 min)',
            'Online gallery - 1 year access',
            'Next-day preview',
            '5-day delivery',
            'Commercial usage rights',
          ],
          ar: [
            '6 ساعات من التغطية',
            '2 مصور محترف',
            '400+ صورة محررة',
            'توثيق كامل للحدث',
            'فيديو لأبرز اللحظات (3-5 دقائق)',
            'معرض إلكتروني - وصول لمدة عام',
            'معاينة في اليوم التالي',
            'التسليم خلال 5 أيام',
            'حقوق الاستخدام التجاري',
          ],
        },
        addOns: {
          en: [
            'Live photo streaming: +$600',
            'Professional videographer: +$1500',
            'Same-day edit slideshow: +$400',
          ],
          ar: [
            'بث الصور المباشر: +600 دولار',
            'مصور فيديو محترف: +1500 دولار',
            'عرض شرائح معدل في نفس اليوم: +400 دولار',
          ],
        },
      },
    ],
  },
  {
    id: 'commercial',
    name: {
      en: 'Commercial Photography',
      ar: 'التصوير التجاري',
    },
    description: {
      en: 'Professional photography for products, real estate, and marketing campaigns',
      ar: 'تصوير احترافي للمنتجات والعقارات والحملات التسويقية',
    },
    packages: [
      {
        id: 'commercial-product',
        name: { en: 'Product Photography', ar: 'تصوير المنتجات' },
        price: { amount: 500, currency: 'USD' },
        duration: '2-3 hours',
        photographers: 1,
        featured: false,
        features: {
          en: [
            'Up to 10 products',
            'Studio or on-location',
            'Multiple angles per product',
            'White background & lifestyle shots',
            'Professional retouching',
            'Web-optimized files',
            'Commercial usage rights',
            '3-day delivery',
          ],
          ar: [
            'حتى 10 منتجات',
            'في الاستديو أو في الموقع',
            'زوايا متعددة لكل منتج',
            'خلفية بيضاء ولقطات نمط حياة',
            'تحرير احترافي',
            'ملفات محسنة للويب',
            'حقوق الاستخدام التجاري',
            'التسليم خلال 3 أيام',
          ],
        },
        addOns: {
          en: [
            'Additional products: +$40 each',
            '360-degree product views: +$100 per product',
            'Video demonstrations: +$300',
          ],
          ar: [
            'منتجات إضافية: +40 دولار لكل',
            'عروض 360 درجة للمنتج: +100 دولار للمنتج',
            'عروض فيديو توضيحية: +300 دولار',
          ],
        },
      },
      {
        id: 'commercial-realestate',
        name: { en: 'Real Estate Photography', ar: 'تصوير العقارات' },
        price: { amount: 400, currency: 'USD' },
        duration: '2-3 hours',
        photographers: 1,
        featured: true,
        features: {
          en: [
            'Interior & exterior shots',
            '25-30 edited photos',
            'HDR processing',
            'Twilight shots included',
            'Virtual staging (1 room)',
            'Floor plan integration',
            'MLS-ready images',
            'Next-day delivery',
          ],
          ar: [
            'لقطات داخلية وخارجية',
            '25-30 صورة محررة',
            'معالجة HDR',
            'لقطات الشفق مشمولة',
            'تدريج افتراضي (غرفة واحدة)',
            'دمج مخطط الطابق',
            'صور جاهزة لـ MLS',
            'التسليم في اليوم التالي',
          ],
        },
        addOns: {
          en: [
            'Drone aerial photos: +$300',
            'Video walkthrough: +$600',
            'Additional virtual staging: +$100 per room',
          ],
          ar: [
            'صور جوية بالدرون: +300 دولار',
            'جولة فيديو: +600 دولار',
            'تدريج افتراضي إضافي: +100 دولار للغرفة',
          ],
        },
      },
    ],
  },
];

// Helper function to get service by ID
export const getServiceById = (id) => {
  return servicesData.find((service) => service.id === id);
};

// Helper function to get package by service ID and package ID
export const getPackageById = (serviceId, packageId) => {
  const service = getServiceById(serviceId);
  if (!service) return null;
  return service.packages.find((pkg) => pkg.id === packageId);
};

// Helper function to get featured packages
export const getFeaturedPackages = () => {
  const featured = [];
  servicesData.forEach((service) => {
    const featuredPackage = service.packages.find((pkg) => pkg.featured);
    if (featuredPackage) {
      featured.push({
        service,
        package: featuredPackage,
      });
    }
  });
  return featured;
};

export default servicesData;

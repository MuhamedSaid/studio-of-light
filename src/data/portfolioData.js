// src/data/portfolioData.js - Extended version
export const portfolioCategories = [
  { id: 'weddings', name: { en: 'Weddings', ar: 'حفلات الزفاف' } },
  { id: 'parties', name: { en: 'Parties', ar: 'الحفلات' } },
  { id: 'sessions', name: { en: 'Sessions', ar: 'جلسات التصوير' } },
];

export const portfolioData = {
  weddings: [
    {
      id: 'wedding-001',
      title: { en: 'Sarah & Michael Wedding', ar: 'زفاف سارة ومايكل' },
      date: '2024-08-15',
      location: { en: 'Central Park, NYC', ar: 'سنترال بارك، نيويورك' },
      description: {
        en: 'A romantic outdoor wedding ceremony in the heart of Manhattan.',
        ar: 'حفل زفاف رومانسي في الهواء الطلق في قلب مانهاتن.',
      },
      coverImage: '/images/portfolio/weddings/wedding-001/cover',
      images: [
        {
          src: '/images/portfolio/weddings/wedding-001/img-1',
          alt: { en: 'Wedding ceremony moment', ar: 'لحظة من حفل الزفاف' },
          width: 1920,
          height: 1280,
        },
      ],
      featured: true,
      tags: ['outdoor', 'romantic', 'vintage'],
      price: { start: 2500, currency: 'USD' },
    },
  ],
};

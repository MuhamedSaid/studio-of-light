import { siteConfig } from '@/data/siteConfig';

export const generateSEOData = (page, customData = {}) => {
  const baseData = {
    home: {
      title: siteConfig.seo.defaultTitle,
      description: siteConfig.seo.defaultDescription,
      keywords: siteConfig.seo.defaultKeywords,
    },
    about: {
      title: 'About Studio of Light - Professional Photographer',
      description:
        'Learn about Studio of Light, an experienced wedding and portrait photographer with 10+ years capturing special moments.',
      keywords:
        'photographer biography, wedding photographer experience, portrait photographer',
    },
    portfolio: {
      title: 'Photography Portfolio - Wedding & Portrait Gallery',
      description:
        "Browse Studio of Light's portfolio featuring stunning wedding photography, party events, and portrait sessions.",
      keywords:
        'wedding photography portfolio, party photography gallery, portrait photography examples',
    },
    contact: {
      title: 'Contact Studio of Light - Book Your Session',
      description:
        'Get in touch to book your wedding, party, or portrait photography session. Professional photography services.',
      keywords:
        'book photographer, wedding photography booking, contact photographer',
    },
  };

  return {
    ...baseData[page],
    ...customData,
    url: `${siteConfig.url}${page === 'home' ? '' : `/${page}`}`,
    image: customData.image || `${siteConfig.url}/images/og-default.jpg`,
  };
};

export const generateStructuredData = (type, data) => {
  const schemas = {
    photographer: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      serviceType: 'Photography Services',
    },
    portfolio: {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: data.title,
      description: data.description,
      image: data.images,
    },
  };

  return schemas[type];
};

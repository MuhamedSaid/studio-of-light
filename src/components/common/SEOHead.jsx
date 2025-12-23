import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
}) => {
  const siteTitle = 'Studio of Light';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      {image && <meta property="twitter:image" content={image} />}

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Studio of Light" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEOHead;

// src/utils/imageOptimization.js

/**
 * Generate srcSet for responsive images
 */
export const generateImageSrcSet = (
  baseSrc,
  sizes = [400, 800, 1200, 1600]
) => {
  return sizes.map((size) => `${baseSrc}?w=${size}&q=75 ${size}w`).join(', ');
};

/**
 * Generate sizes attribute for responsive images
 */
export const generateImageSizes = (
  breakpoints = {
    sm: '400px',
    md: '800px',
    lg: '1200px',
    xl: '1600px',
  }
) => {
  return `(max-width: 640px) ${breakpoints.sm}, (max-width: 768px) ${breakpoints.md}, (max-width: 1024px) ${breakpoints.lg}, ${breakpoints.xl}`;
};

/**
 * Create low quality image placeholder (LQIP) URL
 */
export const createLowQualityPlaceholder = (src) => {
  // For Unsplash images, use blur parameter
  if (src.includes('unsplash.com')) {
    return `${src}?w=40&blur=50&q=10`;
  }
  // For local images
  return `${src}-lqip.jpg`;
};

/**
 * Preload images for faster navigation
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload multiple images in parallel
 */
export const preloadImages = async (imageUrls) => {
  const promises = imageUrls.map((url) => preloadImage(url));
  return Promise.allSettled(promises);
};

/**
 * Get optimized image URL based on viewport size
 */
export const getOptimizedImageUrl = (src, width = 800, quality = 80) => {
  if (src.includes('unsplash.com')) {
    return `${src}?w=${width}&q=${quality}&auto=format&fit=crop`;
  }
  return src;
};

/**
 * Cache images in browser cache
 */
export const cacheImages = (imageArray) => {
  const promises = imageArray.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });
  return Promise.all(promises);
};

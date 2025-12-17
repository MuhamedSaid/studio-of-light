// src/pages/Portfolio.jsx
import { useEffect, useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Loader } from 'lucide-react';
import ScrollToTop from '../components/common/ScrollToTop';
import OptimizedImage from '../components/gallery/OptimizedImage';
import { preloadImages } from '@/utils/imageOptimization';
import { portfolio as portfolioImages } from '../assets/images';


export default function Portfolio() {
  const { t } = useTranslation('portfolio');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxImageLoading, setIsLightboxImageLoading] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState(new Set());

  // Categories
  const categories = [
    { id: 'all', label: t('categories.all') },
    { id: 'weddings', label: t('categories.weddings') },
    { id: 'portraits', label: t('categories.portraits') },
    { id: 'events', label: t('categories.events') },
  ];

  // Portfolio images - using local assets
  const images = useMemo(
    () => [
      // Weddings (7 images)
      {
        id: 1,
        category: 'weddings',
        title: t('images.wedding1'),
        thumbnail: portfolioImages.weddings[0],
        large: portfolioImages.weddings[0],
      },
      {
        id: 2,
        category: 'weddings',
        title: t('images.wedding2'),
        thumbnail: portfolioImages.weddings[1],
        large: portfolioImages.weddings[1],
      },
      {
        id: 3,
        category: 'weddings',
        title: t('images.wedding3'),
        thumbnail: portfolioImages.weddings[2],
        large: portfolioImages.weddings[2],
      },
      {
        id: 4,
        category: 'weddings',
        title: t('images.wedding4'),
        thumbnail: portfolioImages.weddings[3],
        large: portfolioImages.weddings[3],
      },
      {
        id: 5,
        category: 'weddings',
        title: t('images.wedding5'),
        thumbnail: portfolioImages.weddings[4],
        large: portfolioImages.weddings[4],
      },
      {
        id: 6,
        category: 'weddings',
        title: t('images.wedding6'),
        thumbnail: portfolioImages.weddings[5],
        large: portfolioImages.weddings[5],
      },
      {
        id: 7,
        category: 'weddings',
        title: t('images.wedding7'),
        thumbnail: portfolioImages.weddings[6],
        large: portfolioImages.weddings[6],
      },
      // Portraits (7 images)
      {
        id: 8,
        category: 'portraits',
        title: t('images.portrait1'),
        thumbnail: portfolioImages.portraits[0],
        large: portfolioImages.portraits[0],
      },
      {
        id: 9,
        category: 'portraits',
        title: t('images.portrait2'),
        thumbnail: portfolioImages.portraits[1],
        large: portfolioImages.portraits[1],
      },
      {
        id: 10,
        category: 'portraits',
        title: t('images.portrait3'),
        thumbnail: portfolioImages.portraits[2],
        large: portfolioImages.portraits[2],
      },
      {
        id: 11,
        category: 'portraits',
        title: t('images.portrait4'),
        thumbnail: portfolioImages.portraits[3],
        large: portfolioImages.portraits[3],
      },
      {
        id: 12,
        category: 'portraits',
        title: t('images.portrait5'),
        thumbnail: portfolioImages.portraits[4],
        large: portfolioImages.portraits[4],
      },
      {
        id: 13,
        category: 'portraits',
        title: t('images.portrait6'),
        thumbnail: portfolioImages.portraits[5],
        large: portfolioImages.portraits[5],
      },
      {
        id: 14,
        category: 'portraits',
        title: t('images.portrait7'),
        thumbnail: portfolioImages.portraits[6],
        large: portfolioImages.portraits[6],
      },
      // Events (6 images)
      {
        id: 15,
        category: 'events',
        title: t('images.event1'),
        thumbnail: portfolioImages.events[0],
        large: portfolioImages.events[0],
      },
      {
        id: 16,
        category: 'events',
        title: t('images.event2'),
        thumbnail: portfolioImages.events[1],
        large: portfolioImages.events[1],
      },
      {
        id: 17,
        category: 'events',
        title: t('images.event3'),
        thumbnail: portfolioImages.events[2],
        large: portfolioImages.events[2],
      },
      {
        id: 18,
        category: 'events',
        title: t('images.event4'),
        thumbnail: portfolioImages.events[3],
        large: portfolioImages.events[3],
      },
      {
        id: 19,
        category: 'events',
        title: t('images.event5'),
        thumbnail: portfolioImages.events[4],
        large: portfolioImages.events[4],
      },
      {
        id: 20,
        category: 'events',
        title: t('images.event6'),
        thumbnail: portfolioImages.events[5],
        large: portfolioImages.events[5],
      },
    ],
    [t]
  );

  // Filter images with useMemo to prevent recalculation
  const filteredImages = useMemo(
    () =>
      selectedCategory === 'all'
        ? images
        : images.filter((img) => img.category === selectedCategory),
    [selectedCategory, images]
  );

  // Preload adjacent images when lightbox opens
  const preloadAdjacentImages = useCallback(
    (index) => {
      const imagesToPreload = [];
      const prevIndex =
        (index - 1 + filteredImages.length) % filteredImages.length;
      const nextIndex = (index + 1) % filteredImages.length;

      // Preload previous and next images
      [prevIndex, nextIndex].forEach((idx) => {
        const img = filteredImages[idx];
        if (img && !preloadedImages.has(img.id)) {
          const largeUrl = img.large;
          imagesToPreload.push(largeUrl);
        }
      });

      if (imagesToPreload.length > 0) {
        preloadImages(imagesToPreload).then(() => {
          setPreloadedImages((prev) => {
            const newSet = new Set(prev);
            [filteredImages[prevIndex], filteredImages[nextIndex]].forEach(
              (img) => {
                if (img) newSet.add(img.id);
              }
            );
            return newSet;
          });
        });
      }
    },
    [filteredImages, preloadedImages]
  );

  // Open lightbox
  const openLightbox = useCallback(
    (image, index) => {
      setIsLightboxImageLoading(true);
      setSelectedImage(image);
      setCurrentImageIndex(index);
      document.body.style.overflow = 'hidden';

      // Preload the main image and adjacent images
      const largeUrl = image.large;
      const img = new Image();
      img.onload = () => {
        setIsLightboxImageLoading(false);
        preloadAdjacentImages(index);
      };
      img.src = largeUrl;
    },
    [preloadAdjacentImages]
  );

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    setIsLightboxImageLoading(false);
    document.body.style.overflow = 'unset';
  }, []);

  // Navigate lightbox
  const navigateLightbox = useCallback(
    (direction) => {
      setIsLightboxImageLoading(true);
      const newIndex =
        direction === 'next'
          ? (currentImageIndex + 1) % filteredImages.length
          : (currentImageIndex - 1 + filteredImages.length) %
            filteredImages.length;

      const newImage = filteredImages[newIndex];
      setCurrentImageIndex(newIndex);
      setSelectedImage(newImage);

      // Load the new image
      const largeUrl = newImage.large;
      const img = new Image();
      img.onload = () => {
        setIsLightboxImageLoading(false);
        preloadAdjacentImages(newIndex);
      };
      img.src = largeUrl;
    },
    [currentImageIndex, filteredImages, preloadAdjacentImages]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateLightbox('prev');
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateLightbox('next');
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, closeLightbox, navigateLightbox]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              {t('hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gold-600 dark:bg-gold-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('showing')}{' '}
              <span className="font-semibold text-gold-600 dark:text-gold-400">
                {filteredImages.length}
              </span>{' '}
              {t('images')}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={imageVariants}
                  layout
                  className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
                  onClick={() => openLightbox(image, index)}
                >
                  {/* Optimized Image with blur placeholder */}
                  <OptimizedImage
                    src={image.thumbnail}
                    alt={image.title}
                    width={600}
                    quality={75}
                    lazy={index > 8} // First 8 images load immediately
                    className="w-full h-auto"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {image.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {
                          categories.find((cat) => cat.id === image.category)
                            ?.label
                        }
                      </p>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {t('noImages')}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors group"
            >
              <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              disabled={isLightboxImageLoading}
              className="absolute left-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors group disabled:opacity-50"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              disabled={isLightboxImageLoading}
              className="absolute right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors group disabled:opacity-50"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Loading Spinner */}
              {isLightboxImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader className="w-12 h-12 text-white animate-spin" />
                </div>
              )}

              <img
                src={selectedImage.large}
                alt={selectedImage.title}
                className={`max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${
                  isLightboxImageLoading ? 'opacity-0' : 'opacity-100'
                }`}
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-1">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">
                  {
                    categories.find((cat) => cat.id === selectedImage.category)
                      ?.label
                  }
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {currentImageIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </motion.div>

            {/* Keyboard Hints */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
              {t('keyboardHints')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// src/components/gallery/OptimizedImage.jsx
import { useState, useRef, useEffect } from 'react';
import {
  createLowQualityPlaceholder,
  getOptimizedImageUrl,
} from '@/utils/imageOptimization';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  lazy = true,
  width = 800,
  quality = 80,
  onClick,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const [currentSrc, setCurrentSrc] = useState(
    priority
      ? getOptimizedImageUrl(src, width, quality)
      : createLowQualityPlaceholder(src)
  );
  const imgRef = useRef();

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority]);

  // Load full quality image when in view
  useEffect(() => {
    if (isInView && !isLoaded) {
      const optimizedSrc = getOptimizedImageUrl(src, width, quality);
      const img = new Image();

      img.onload = () => {
        setCurrentSrc(optimizedSrc);
        setIsLoaded(true);
      };

      img.src = optimizedSrc;
    }
  }, [isInView, src, width, quality, isLoaded]);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        onClick={onClick}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isLoaded ? 'blur-0 scale-100' : 'blur-md scale-105'
        }`}
        loading={lazy ? 'lazy' : 'eager'}
      />

      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;

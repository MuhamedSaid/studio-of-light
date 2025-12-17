import { useState, useEffect } from 'react';
import { getPortfolioByCategory } from '@/data/portfolioData';
import ImageCard from './ImageCard';

const GalleryGrid = ({ category = 'weddings' }) => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const items = getPortfolioByCategory(category);
    setPortfolioItems(items);
  }, [category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item) => (
        <ImageCard
          key={item.id}
          src={item.coverImage}
          alt={item.title}
          title={item.title}
          location={item.location}
          onClick={() => {
            /* Handle click */
          }}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;

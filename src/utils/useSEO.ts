import { useEffect } from 'react';
import { updateSEO } from './seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

/**
 * A hook to easily update SEO metadata from any component
 */
export const useSEO = (options: SEOProps): void => {
  const { title, description, keywords, image, url } = options;
  
  useEffect(() => {
    updateSEO({
      title,
      description,
      keywords,
      image,
      url: url || window.location.href,
    });
  }, [title, description, keywords, image, url]);
};

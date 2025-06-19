interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

/**
 * Updates the document metadata for SEO
 * @param options SEO options to update
 */
export const updateSEO = ({
  title,
  description,
  keywords,
  image,
  url,
}: SEOProps): void => {
  // Update document title if provided
  if (title) {
    document.title = `${title} | ConversAI Labs`;
  }

  // Update meta tags if provided
  const updateMetaTag = (name: string, content: string | undefined): void => {
    if (!content) return;
    
    // Try to find existing meta tag by name or property
    let meta = document.querySelector(`meta[name="${name}"]`) || 
               document.querySelector(`meta[property="${name}"]`);
    
    // If meta tag doesn't exist, create it
    if (!meta) {
      meta = document.createElement('meta');
      if (name.startsWith('og:') || name.startsWith('twitter:')) {
        meta.setAttribute('property', name);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    
    // Update content
    meta.setAttribute('content', content);
  };

  // Update various meta tags
  if (description) {
    updateMetaTag('description', description);
    updateMetaTag('og:description', description);
    updateMetaTag('twitter:description', description);
  }

  if (keywords) {
    updateMetaTag('keywords', keywords);
  }

  if (title) {
    updateMetaTag('og:title', `${title} | ConversAI Labs`);
    updateMetaTag('twitter:title', `${title} | ConversAI Labs`);
  }

  if (image) {
    updateMetaTag('og:image', image);
    updateMetaTag('twitter:image', image);
  }

  if (url) {
    updateMetaTag('og:url', url);
  }
};

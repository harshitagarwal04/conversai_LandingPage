/**
 * Adds structured data to the document to improve SEO
 * @param data The JSON-LD structured data
 */
export const addStructuredData = (data: object): void => {
  // Remove existing structured data with the same @type if it exists
  const existingScript = document.querySelector(`script[type="application/ld+json"]`);
  if (existingScript) {
    existingScript.remove();
  }
  
  // Create new script element with JSON-LD
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(data);
  
  // Append to document head
  document.head.appendChild(script);
};

/**
 * Creates organization structured data
 */
export const createOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ConversAI Labs",
    "url": "https://conversai-labs.com",
    "logo": "https://conversai-labs.com/logo.png",
    "description": "ConversAI Labs helps businesses automate conversations with AI across voice, WhatsApp, email and more.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9953053281",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://twitter.com/conversai_labs",
      "https://linkedin.com/company/conversai-labs",
      "https://facebook.com/conversailabs"
    ]
  };
};

/**
 * Creates website structured data
 */
export const createWebsiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://conversai-labs.com",
    "name": "ConversAI Labs",
    "description": "AI-powered conversation automation across multiple channels",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://conversai-labs.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
};

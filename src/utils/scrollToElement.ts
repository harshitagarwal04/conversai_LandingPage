export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  
  if (element) {
    // Get header height to adjust scroll position (assuming header is 64px tall)
    const headerHeight = 64;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

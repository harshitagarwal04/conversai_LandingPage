const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  try {
    // Navigate to loan servicing page
    console.log('Navigating to loan servicing page...');
    await page.goto('http://localhost:3000/loan-servicing', { waitUntil: 'networkidle' });
    
    // Wait for page to load
    await page.waitForTimeout(2000);
    
    // Take a screenshot
    await page.screenshot({ 
      path: 'loan-servicing-desktop.png', 
      fullPage: true 
    });
    console.log('Desktop screenshot saved as loan-servicing-desktop.png');
    
    // Check mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: 'loan-servicing-mobile.png', 
      fullPage: true 
    });
    console.log('Mobile screenshot saved as loan-servicing-mobile.png');
    
    // Check for key elements
    console.log('\nChecking page elements:');
    
    // Check header
    const header = await page.locator('header').isVisible();
    console.log('✓ Header present:', header);
    
    // Check hero section
    const heroTitle = await page.locator('h1:has-text("End-to-End Loan Servicing")').isVisible();
    console.log('✓ End-to-End Hero title present:', heroTitle);
    
    // Check workflow steps
    const workflowSteps = await page.locator('text=Loan Origination').isVisible();
    console.log('✓ Workflow steps present:', workflowSteps);
    
    // Check lifecycle section
    const lifecycleSection = await page.locator('text=Complete Loan Lifecycle Management').isVisible();
    console.log('✓ Loan Lifecycle section present:', lifecycleSection);
    
    // Check Voice AI Demo section
    const demoSection = await page.locator('text=Experience Voice AI in Action').isVisible();
    console.log('✓ Voice AI Demo section present:', demoSection);
    
    // Check Platform Capabilities
    const capabilities = await page.locator('text=Platform Capabilities').isVisible();
    console.log('✓ Platform Capabilities section present:', capabilities);
    
    // Check footer
    const footer = await page.locator('footer').isVisible();
    console.log('✓ Footer present:', footer);
    
    // Get all main sections
    const sections = await page.locator('h2').allTextContents();
    console.log('\nMain sections found:');
    sections.forEach(section => {
      console.log('  -', section);
    });
    
    // Check for balanced features
    const features = await page.locator('h3').allTextContents();
    console.log('\nKey features found:');
    const keyFeatures = features.filter(f => 
      f.includes('Workflow') || 
      f.includes('Voice') || 
      f.includes('AI') || 
      f.includes('Document') ||
      f.includes('Compliance')
    );
    keyFeatures.forEach(feature => {
      console.log('  -', feature);
    });
    
    console.log('\n✅ Page check completed successfully!');
    
  } catch (error) {
    console.error('Error checking page:', error);
  } finally {
    await browser.close();
  }
})();
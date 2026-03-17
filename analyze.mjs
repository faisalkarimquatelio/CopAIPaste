import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log("Navigating to https://xerpredict.xsone.de/ ...");
  await page.goto('https://xerpredict.xsone.de/', { waitUntil: 'networkidle' });
  
  const loginHtml = await page.content();
  fs.writeFileSync('login_page.html', loginHtml);
  console.log("Saved login page HTML.");

  // Fill in login details
  console.log("Logging in...");
  // Need to find selectors. Let's look for common ones or just generic input types.
  // Using generic locators for username/email and password
  const emailInputs = await page.locator('input[type="email"], input[name*="user"], input[name*="mail"]').count();
  if (emailInputs > 0) {
    await page.locator('input[type="email"], input[name*="user"], input[name*="mail"]').first().fill('quatelio@xerpredict.com');
  } else {
    // try text input
    await page.locator('input[type="text"]').first().fill('quatelio@xerpredict.com');
  }
  
  const pwdInputs = await page.locator('input[type="password"]').count();
  if (pwdInputs > 0) {
    await page.locator('input[type="password"]').first().fill('sw921292#119!');
  }

  // Find and click the submit button
  const submitBtn = page.locator('button[type="submit"], button:has-text("Login"), button:has-text("Anmelden")').first();
  await submitBtn.click();

  console.log("Waiting for navigation or network idle...");
  try {
    await page.waitForLoadState('networkidle', { timeout: 15000 });
  } catch(e) {
    console.log("Network idle timeout, proceeding anyway...");
  }
  
  // Wait a bit to ensure rendering
  await page.waitForTimeout(5000);
  
  const dashboardHtml = await page.content();
  fs.writeFileSync('dashboard.html', dashboardHtml);
  await page.screenshot({ path: 'dashboard.png', fullPage: true });
  console.log("Saved dashboard HTML and screenshot.");

  await browser.close();
})();

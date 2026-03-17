import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log("Navigating to https://xerpredict.xsone.de/ ...");
  await page.goto('https://xerpredict.xsone.de/', { waitUntil: 'networkidle' });

  // Fill in login details
  console.log("Logging in...");
  const emailInputs = await page.locator('input[type="email"], input[name*="user"], input[name*="mail"]').count();
  if (emailInputs > 0) {
    await page.locator('input[type="email"], input[name*="user"], input[name*="mail"]').first().fill('quatelio@xerpredict.com');
  } else {
    await page.locator('input[type="text"]').first().fill('quatelio@xerpredict.com');
  }
  
  const pwdInputs = await page.locator('input[type="password"]').count();
  if (pwdInputs > 0) {
    await page.locator('input[type="password"]').first().fill('sw921292#119!');
  }

  // Find and click the submit button
  const submitBtn = page.locator('button[type="submit"], button:has-text("Login"), button:has-text("Anmelden"), button:has-text("Jetzt starten")').first();
  await submitBtn.click();

  console.log("Waiting for navigation or network idle...");
  try {
    await page.waitForLoadState('networkidle', { timeout: 15000 });
  } catch(e) {
    console.log("Network idle timeout on dashboard, proceeding anyway...");
  }
  await page.waitForTimeout(5000); // Give the dashboard time to render

  // 1. AI Discovery
  console.log("Navigating to AI Discovery...");
  const aiDiscoveryBtn = page.locator('button[title="AI Discovery"]');
  if (await aiDiscoveryBtn.count() > 0) {
    await aiDiscoveryBtn.click();
    await page.waitForTimeout(4000);
    fs.writeFileSync('ai_discovery.html', await page.content());
    await page.screenshot({ path: 'ai_discovery.png', fullPage: true });
    console.log("Saved AI Discovery HTML and screenshot.");
  } else {
    console.log("Could not find AI Discovery button.");
  }

  // 2. BI Analytics Engine
  console.log("Navigating to BI Analytics Engine...");
  const biAnalyticsBtn = page.locator('button[title="BI Analytics Engine"]');
  if (await biAnalyticsBtn.count() > 0) {
    await biAnalyticsBtn.click();
    await page.waitForTimeout(4000);
    fs.writeFileSync('bi_analytics.html', await page.content());
    await page.screenshot({ path: 'bi_analytics.png', fullPage: true });
    console.log("Saved BI Analytics HTML and screenshot.");
  } else {
    console.log("Could not find BI Analytics button.");
  }

  // 3. Einstellungen
  console.log("Navigating to Einstellungen...");
  const settingsBtn = page.locator('button[title="Einstellungen"]');
  if (await settingsBtn.count() > 0) {
    await settingsBtn.click();
    await page.waitForTimeout(4000);
    fs.writeFileSync('settings.html', await page.content());
    await page.screenshot({ path: 'settings.png', fullPage: true });
    console.log("Saved Settings HTML and screenshot.");
  } else {
    console.log("Could not find Einstellungen button.");
  }

  await browser.close();
})();

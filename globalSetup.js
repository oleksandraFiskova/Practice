const { test, expect, chromium } = require ('@playwright/test')

async function globalSetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.waitForTimeout(2000);
    await page.locator('button[type="submit"]').click();
    await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();

    await page.context().storageState({path: './authGlobalSetup.json'});

    await browser.close();
}
module.exports = globalSetup;
const { test, expect } = require('@playwright/test');

test('Check the User successfull login', async({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // await page.locator('input[name="username"]').fill('Admin');
  // await page.locator('input[name="password"]').fill('admin123');
  // await page.waitForTimeout(2000);
  // await page.locator('button[type="submit"]').click();
  await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
})
test('Check the User navigation to the "Admin" tab', async({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
  await page.locator('.oxd-main-menu-item--name:has-text("Admin")').click();
  await expect(page.locator('.oxd-topbar-header-breadcrumb-module:has-text("Admin")')).toBeVisible();
})
test('Check the User logout from the account', async({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
})



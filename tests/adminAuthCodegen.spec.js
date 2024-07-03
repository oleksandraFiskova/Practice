const { test, expect } = require('@playwright/test');
const { LandingPage } = require('../pages/landingPage');

let landingPage;
let context;
let page;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  landingPage = new LandingPage(page);
});

test('Navigate to the Landing Page', async () => {
  await landingPage.navigateToLandingPage();
});

test('Admin User successfully logged in to the account', async () => {
  await landingPage.fillUsername('Admin');
  await landingPage.fillPassword('admin123');
  await landingPage.clickLoginButton();
  await landingPage.isVisibleDashboardTopbarHeader();
});

test('Admin User successfully logged out from the account', async () => {
  await landingPage.userLogout();
});

test.afterAll(async () => {
  await page.close();
  await context.close();
});


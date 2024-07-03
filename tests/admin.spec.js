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

// const { test, expect } = require('@playwright/test');
// const { LandingPage } = require('../pages/landingPage');

// // let landingPage = new LandingPage();
// // let context;
// // let page;

// // test.beforeAll(async ({ browser }) => {
// //   context = await browser.newContext();
// //   page = await context.newPage();
// //   landingPage = new LandingPage(page);
// // });


// test('Check the User is navigated to the Landing Page', async ({page}) => {
//     const landingPage = new LandingPage(page);
//     await landingPage.navigateToLandingPage();
// });

// test('Check the Admin User successfully navigated to the site, logged in to the account, logged out from the account', async ({page}) => {
//   // Assuming the user is already on the landing page after the previous test
//   const landingPage = new LandingPage(page);
//   await landingPage.navigateToLandingPage();
//   await landingPage.fillUsername('Admin');
//   await landingPage.fillPassword('admin123');
//   await landingPage.clickLoginButton();
//   await landingPage.isVisibleDashboardTopbarHeader();
//   await landingPage.userLogout();
// });

// // test('Check the Admin User successfully logged out', async ({page}) => {
// //     // Assuming the user is already on the landing page after the previous test
// //     const landingPage = new LandingPage(page);
// //     await landingPage.userLogout();
// //   });
// // test.afterAll(async ({ browser }) => {
// //     context = await browser.newContext();
// //     page = await context.newPage();
// //     const landingPage = new LandingPage(page);
    
// //     await landingPage.navigateToLandingPage(); // Ensure you're on the landing page
    
    
// //     await page.close();
// //     await context.close();
// //   });

// // test.afterAll(async () => {
//     //const landingPage = new LandingPage(page);
// //   await landingPage.userLogout();
// //   await page.close();
// //   await context.close();
// // });
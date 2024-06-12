
const { test, expect } = require ('@playwright/test');

const { LandingPage } = require ('../pages/landingPage');

test('The User is redirected to the "Landing page"', async ({page}) => {
   
    const landingPage = new LandingPage(page);

    await landingPage.redirectToOrangehrmLiveLandingPage();

})

test('The Admin User successfully logged in to the account', async ({ page }) => {

    const landingPage = new LandingPage(page);
    await landingPage.redirectionToLandingPage();

    await landingPage.fillUsername('Admin');

    await landingPage.fillPassword('admin123')

    await landingPage.clickLoginButton();
    await page.waitForTimeout(2000);

    await landingPage.checkIsVisibleDashboardTopbarHeader();

})





// Includ plawright model
const { test, expect } = require ('@playwright/test');

// Include LandingPage model
const { LandingPage } = require ('../pages/landing_page');


// Create test
test('The User is redirected to the "Landing page"', async ({page}) => {
    
    // Create variable for LandingPage class
    const landingPage = new LandingPage(page);

    // Redirection to the Landing Page.
    await landingPage.redirectToOrangehrmLiveLandingPage();

})

test('The Admin User successfully logged in to the account', async ({ page }) => {
    
    // Redirection to the Landing Page.
    const landingPage = new LandingPage(page);
    await landingPage.redirectToOrangehrmLiveLandingPage();

    // Fill in the “Username“ input with valid Admin User username.
    await landingPage.fillInUsernameFildWithAdminUsername('Admin');

    // Fill in the “Password“ input with valid Admin User password.
    await landingPage.fillInPasswordFildWithAdminPassword('admin123')

    // Click the “Login“ button.
    await landingPage.clickLoginButton();
    await page.waitForTimeout(2000);

    // Check that “Dashboard“ topbar-header is displayed.
    await landingPage.checkDashboardTopbarHeader();

})



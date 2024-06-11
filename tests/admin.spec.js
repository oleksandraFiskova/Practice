

// Includ plawright model
const { test, expect } = require ('@playwright/test');

// Include LandingPage model
const { LandingPage } = require ('../pages/landing_page');

// Create test
test('The User is redirected to the "Landing page"', async ({page}) => {
    
    // Create variable for LandingPage class
    const landingPage = new LandingPage(page);

    // Add step "goto google Home Page"
    await landingPage.redirectToOrangehrmLiveLandingPage();

})




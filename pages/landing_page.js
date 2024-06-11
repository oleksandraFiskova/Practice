

// Include a playwright model
const {test, expect} = require ('@playwright/test');

// Create an export Page (that is under the testing) class
exports.LandingPage = class LandingPage {
    // Add JSDoc file to be able to use functions & methods of the page object

 /**
    *
    * @param {import ('@playwright/test').Page} page
    */

// Add Constructor
constructor (page) {

    // Initialise the page object
    this.page = page;

    // Store all Page elements that will be used during the testing
    this.titleLogin = page.getByRole('heading', { name: 'Login' });

}

// Add async functions with detailed steps that will be used in the test spec file
async redirectToOrangehrmLiveLandingPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await this.page.waitForTimeout(2000);
    await expect(this.titleLogin).toBeVisible();
}

}








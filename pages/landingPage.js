

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

    this.userNamePlaceholder = page.getByPlaceholder('Username');    
    this.passwordPlaceholder = page.getByPlaceholder('Password');   
    this.loginButton = page.getByRole('button', {name: 'Login'});   
    this.dashboardTopbarHeader = page.getByRole('heading', {name: 'Dashboard'})    

}

// Add async functions with detailed steps that will be used in the test spec file

    async redirectionToLandingPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await this.page.waitForTimeout(2000);
        await expect(this.titleLogin).toBeVisible();
    }

    async fillUsername(usernameValue) {
        await this.userNamePlaceholder.fill(usernameValue);
    }

    async fillPassword(passwordValue) {
        await this.passwordPlaceholder.fill(passwordValue);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async checkIsVisibleDashboardTopbarHeader() {
        await expect(this.dashboardTopbarHeader).toBeVisible();
    }


}








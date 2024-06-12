

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

    this.userNamePlaceholder = page.getByPlaceholder('Username');    // the placeholder of the “Username“ field
    this.passwordPlaceholder = page.getByPlaceholder('Password');   // the placeholder of the “Password“ field
    this.loginButton = page.getByRole('button', {name: 'Login'});    // the [Login] button
    this.dashboardTopbarHeader = page.getByRole('heading', {name: 'Dashboard'})    // the “Dashboard“ topbar-header

}

// Add async functions with detailed steps that will be used in the test spec file

    // the User redirection to the OrangehrmLive "Landing" page
    async redirectToOrangehrmLiveLandingPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await this.page.waitForTimeout(2000);
        await expect(this.titleLogin).toBeVisible();
    }

    // Fill in the “Username“ input with valid Admin User username.
    async fillInUsernameFildWithAdminUsername(adminUsername) {
        await this.userNamePlaceholder.fill(adminUsername);
    }

    // Fill in the “Password“ input with valid Admin User password.
    async fillInPasswordFildWithAdminPassword(adminPassword) {
        await this.passwordPlaceholder.fill(adminPassword);
    }

    // Click the “Login“ button.
    async clickLoginButton() {
        await this.loginButton.click();
    }

    // Check that “Dashboard“ topbar-header is displayed.
    async checkDashboardTopbarHeader() {
        await expect(this.dashboardTopbarHeader).toBeVisible();
    }


}








const {test, expect} = require ('@playwright/test');

exports.LandingPage = class LandingPage {
 /**
    *
    * @param {import ('@playwright/test').Page} page
    */
constructor (page) {
    this.page = page;
    this.titleLogin = page.getByRole('heading', { name: 'Login' });
    this.userNamePlaceholder = page.getByPlaceholder('Username');    
    this.passwordPlaceholder = page.getByPlaceholder('Password');   
    this.loginButton = page.getByRole('button', {name: 'Login'});   
    this.dashboardTopbarHeader = page.getByRole('heading', {name: 'Dashboard'})    
}
async navigateToLandingPage() {
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
async isVisibleDashboardTopbarHeader() {
        await expect(this.dashboardTopbarHeader).toBeVisible();
    }
}
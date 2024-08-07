const {test, expect} = require ('@playwright/test');

exports.LandingPage = class LandingPage {
 /**
    *
    * @param {import ('@playwright/test').Page} page
    */
constructor (page) {
    if(!page){
        return;
    }
    this.page = page;
    this.titleLogin = page.getByRole('heading', { name: 'Login' });
    this.usernameField = page.locator('input[name="username"]');    
    this.passwordField = page.locator('input[name="password"]');   
    this.loginButton = locator('button[type="submit"]');   
    this.dashboardTopbarHeader = page.getByRole('heading', {name: 'Dashboard'});
    this.profilePicture = page.getByRole('banner').getByRole('img', { name: 'profile picture' });
    this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });    
}
async navigateToLandingPage() {    
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await this.page.waitForTimeout(2000);
    await expect(this.titleLogin).toBeVisible();
    }
async fillUsername(usernameValue) {
        await this.usernameField.fill(usernameValue);
    }
async fillPassword(passwordValue) {
        await this.passwordField.fill(passwordValue);
    }
async clickLoginButton() {
        await this.loginButton.click();
    }
async isVisibleDashboardTopbarHeader() {
        await expect(this.dashboardTopbarHeader).toBeVisible();
    }
async userLogout() {
    await this.profilePicture.click();
    await this.logoutButton.click();
    await this.page.waitForTimeout(2000);
    await expect(this.titleLogin).toBeVisible();
}
}
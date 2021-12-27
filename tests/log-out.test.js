import LogoutPage from '../pageobjects/logout.page'
import LoginPage from '../pageobjects/login.page'


describe('Banking', () => {
    it('Should logout', async () => {
        await LoginPage.openWeb();

        await LoginPage.logIn('jsmith@demo.io', 'Demo123!');

        await LogoutPage.logOut();

        await expect(await browser.getUrl()).to.contain('login?logout');
    });

    it('Should show the login screen when going back to the previous page after loging out', async () => {
        await LoginPage.openWeb();

        await LoginPage.logIn('jsmith@demo.io', 'Demo123!');

        await LogoutPage.logOut();

        await expect(await browser.getUrl()).to.contain('login?logout');

        await browser.back();

        await expect(await browser.getUrl()).to.contain('bank/login');
    });
});
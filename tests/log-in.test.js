import LoginPage from '../pageobjects/login.page'

describe('Banking', () => {

    it(' Should access to homepage with correct username and password ', async () => {
        await LoginPage.openWeb();

        await LoginPage.logIn('jsmith@demo.io', 'Demo123!');

        await expect(await browser.getUrl()).to.equal('http://localhost:8080/bank/home');
    });
    
    it(' Should redirect to homepage when accessing login page with a "remember me" option ', async () => {
        await LoginPage.openWeb();

        await (await $('#remember-me')).click();

        await LoginPage.logIn('jsmith@demo.io', 'Demo123!');

        await browser.newWindow('http://localhost:8080/bank/');

        await expect(await browser.getUrl()).to.contain('bank/home');

    });

    it(' Shouldnt access with incorrect username and password ', async () => {
        await LoginPage.openWeb();
        await LoginPage.logIn('jsmith@demo.io', 'QWERTY123!');
        await expect(await browser.getUrl()).to.contain('login?error');

    });

    it('Should show an error message', async () => {
        await browser.url('login');

        let enviar = await $('#submit');
        await enviar.click();
        
        await expect(await browser.getUrl()).to.contain('login?error');
    });

});
   
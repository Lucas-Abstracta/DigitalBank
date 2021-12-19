//const { default: $ } = require("webdriverio/build/commands/browser/$");
describe('Banking', () => {

    it('Debería ingresar a la pagina con las credenciales', async () => {
        await browser.url('login');

        let userName = await $('#username');
        await userName.setValue('jsmith@demo.io');

        let pssWord = await $('#password');
        await pssWord.setValue('Demo123!');

        let submit = await $('#submit');
        await submit.click();

        let url = await browser.getUrl(); 
        //await console.log(url);
        //await console.log("salida");

        await expect(url).to.equal('http://localhost:8080/bank/home');

        //await browser.pause(5000);
    });
    
    it('Debería recordar credenciales', async () => {
        await browser.url('login');

        let userName = await $('#username');
        await userName.setValue('jsmith@demo.io');

        let pssWord = await $('#password');
        await pssWord.setValue('Demo123!');

        let rememberMe = await $('#remember-me');
        await rememberMe.click();

        let submit = await $('#submit');
        await submit.click();

        await browser.newWindow('http://localhost:8080/bank/');
        await expect(await browser.getUrl()).to.equal('http://localhost:8080/bank/home');

        //await browser.pause(5000);
    });

    it('No deberia ingresar con credenciales erroneas', async () => {
        await browser.url('login');

        let userName = await $('#username');
        await userName.setValue('jsmith@demo.io');

        let pssWord = await $('#password');
        await pssWord.setValue('QWERTY123');

        let enviar = await $('#submit');
        await enviar.click();

        await expect(await browser.getUrl()).to.equal('http://localhost:8080/bank/login?error');
        
        //await browser.pause(5000);
    });

    it('Debería pedir credenciales', async () => {
        await browser.url('login');

        let enviar = await $('#submit');
        await enviar.click();
        
        await expect(await browser.getUrl()).to.equal('http://localhost:8080/bank/login?error');

        //await browser.pause(5000);
    });
    
});
   
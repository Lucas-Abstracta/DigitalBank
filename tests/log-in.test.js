describe('Banking', () => {

    it('Debería ingresar a la pagina con las credenciales', async () => {
        await browser.url('login');

        let userName = await $('#username');
        await userName.setValue('jsmith@demo.io');

        let pssWord = await $('#password');
        await pssWord.setValue('Demo123!');

        let enviar = await $('#submit');
        await enviar.click();
        
        await browser.pause(5000);
    });

    it('No deberia ingresar con credenciales erroneas', async () => {
        await browser.url('login');

        let userName = await $('#username');
        await userName.setValue('jsmith@demo.io');

        let pssWord = await $('#password');
        await pssWord.setValue('Noeslacontraseña');

        let enviar = await $('#submit');
        await enviar.click();
        
        await browser.pause(5000);
    });

    it('No ingreso formato correo', async () => {
        await browser.url('login');

        let userName = await $('#username');
        await userName.setValue('jsmith');

        let pssWord = await $('#password');
        await pssWord.setValue('Demo123!');

        let enviar = await $('#submit');
        await enviar.click();
        
        await browser.pause(5000);
    });

    it('Debería pedir credenciales', async () => {
        await browser.url('login');

        let enviar = await $('#submit');
        await enviar.click();
        
        await browser.pause(5000);
    });

    it('Debería hacer log-out', async () => {
        await browser.url('home');

        let perfil = await $('img=user-menu dropdown-menu')

        
        await perfil.click();

        
        await browser.pause(5000);
    });


});
   
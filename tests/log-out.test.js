describe('Banking', () => {
   
    it('Debería hacer log-out', async () => {
        await browser.url('login');

        let userName = await $('#username');
        await userName.setValue('jsmith@demo.io');

        let pssWord = await $('#password');
        await pssWord.setValue('Demo123!');

        let submit = await $('#submit');
        await submit.click();

        //------------------------------------------
        let menu = await $('[class="user-avatar rounded-circle"]')
        await menu.click();

        let logout = await $('=Logout')
        await logout.click();

        await expect( await browser.getUrl() ).to.equal('http://localhost:8080/bank/login?logout');
        
        await browser.pause(5000);
    });
    
});
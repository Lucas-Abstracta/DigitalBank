// login.page.js

class LoginPage {

    get usernameInput () { return $('#username') }
    get passwordInput () { return $('#password') }
    get submitBtn () { return $('#submit') }
    
    //Enter "login" page
    async openWeb() {
        await browser.url('login');
        //await browser.url('login');
    }

    //Press submit button
    async logIn (username, password) {

        await this.usernameInput.waitForClickable();
        await this.usernameInput.setValue(username);

        await this.passwordInput.waitForClickable();
        await this.passwordInput.setValue(password);

        await this.submitBtn.click();

    }

}

export default new LoginPage()
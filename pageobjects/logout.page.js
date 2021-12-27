
class LogoutPage {
    get dropMenu () { return $('[class="user-avatar rounded-circle"]')}
    get logoutOption () { return $('=Logout')}
    async logOut () {
        await this.dropMenu.click();
        await this.logoutOption.click();
    }
}

export default new LogoutPage()
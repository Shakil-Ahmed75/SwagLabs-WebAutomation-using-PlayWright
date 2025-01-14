exports.LoginPage = class LoginPage{
    constructor(page){
        this.page =page
        this.loginlink="#login2";
        this.userNameInput="#loginusername";
        this.passwordInput ="#loginpassword";
        this.loginButton= "//button[normalize-space()='Log in']";
    }

    async goTologinPage(){
        await this.page.goto("https://www.demoblaze.com/index.html")
    }
    
    async goToHomePage(username, password){
    await this.page.locator(this.loginlink).click();
    await this.page.locator(this.userNameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
    }


}
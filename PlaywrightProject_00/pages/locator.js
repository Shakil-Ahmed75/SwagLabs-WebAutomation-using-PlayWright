

exports.LocatorPage = class LocatorPage{
    constructor(page){
        this.page = page
        //id="login2
        //this.loginButton = page.locator('id="login2')
        this.loginButton ="#login2";
        

    }

    async gotoLoginPage(){
        await this.page.goto('https://www.demoblaze.com/index.html')
    }
   async login(){
    await this.page.locator(this.loginButton).click();
    }
}
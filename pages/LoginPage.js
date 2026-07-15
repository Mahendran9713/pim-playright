const { expect } = require("@playwright/test");
const { error } = require("node:console");

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async login() {
        //login
        await this.page.goto("https://qa.e-genie.ai/login");
        // await this.page.waitForTimeout(2000);

        await this.page.getByPlaceholder("Username").type("roshan.dhaker@adglobal360.com",{delay:200});

        await this.page.getByPlaceholder("Password").type("Tester!1", {delay:200});

        await this.page.locator(".login_rightSubmitBtn").click();
        // await this.page.waitForTimeout(3000);

        await this.page.locator("//button[@class='header__rightMenu--image']").click();
        //logout 
        await this.page.locator("//li[@class='signout_content']").click();

        const errorMessage = await this.page.locator("div.Toastify__toast").textContent();
        console.log("The Error message is:", errorMessage);  

        const url = "https://qa.e-genie.ai/login";
        await expect(this.page).toHaveURL(url);
        console.log("URL verification passed : " + url);
        expect(errorMessage.includes("Logging")).toBeTruthy();
        expect(errorMessage==="Logging out...").toBeTruthy();


        //again login
        await this.page.getByPlaceholder("Username").type("roshan.dhaker@adglobal360.com",{delay:200});

        await this.page.getByPlaceholder("Password").type("Tester!1", {delay:200});

        await this.page.locator(".login_rightSubmitBtn").click();

        
        // await this.page.waitForTimeout(3000);

        // await this.page.locator("//button[@class='header__rightMenu--image']").click();
       
    }
}

module.exports = { LoginPage };
const { expect } = require("@playwright/test");
const { error } = require("node:console");

class dropdown {

    constructor(page) {
        this.page = page;

}

async Dropdowntest(){
    //Method -1
    // await this.page.locator("//div[@class='icp-button']").click();
    // await this.page.getByText("தமிழ்").click();

    //Method -2
    await this.page.locator("#icp-touch-link-language").click();
    await this.page.getByText("தமிழ்").click();

    //if the select tag is there we can use following methods
    //await this.page.locator("#icp-touch-link-language").selectOption({label: "Tamil"});
    // await this.page.locator("#icp-touch-link-language").selectOption('Tamil');
    // await this.page.locator("#icp-touch-link-language").selectOption({value: 'tam'});
    // await this.page.locator("#icp-touch-link-language").selectOption({index: 1});
    // await this.page.selectOption("#icp-touch-link-language", 'Tamil');


}

}

module.exports = {dropdown};
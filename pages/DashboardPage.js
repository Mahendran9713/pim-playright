const { hasUncaughtExceptionCaptureCallback } = require("node:process");


class DashboardPage {
    constructor(page) {
        this.page = page;
    }

    async selectAccount() {

// open dropdown
    await this.page.locator("//button[@class='header__rightMenu--image']").click();

// select option
    await this.page.getByText('Nestle India').click();

// open pim project
    await this.page.locator('div.relative.group', {hasText: 'Product Information Management'}).click();


// clicks on the Get Started button
    await this.page.locator('button.greetings-button').click();

        await this.page.locator("//div[@class='flex items-center justify-between border rounded-md px-3 py-2 cursor-pointer select-none min-w-0 overflow-hidden hover:border-blue-400 border-gray-300']").click();
        await this.page.locator("//label[@title='PCTest1']").click(); 
        await this.page.getByText("Regression Testing").click();
        await this.page.getByText("Test Nestle").click();
        await this.page.getByText("Test Bajaj").click();

        await this.page.pause();

//Click on the Settings button to expand
        await this.page.locator("//div[@class='flex items-center justify-between border rounded-md px-3 py-2 cursor-pointer select-none min-w-0 overflow-hidden hover:border-blue-400 border-gray-300']").click(); 
        await this.page.getByRole('button').nth(0).click();

// Click on the Manage Account
         await this.page.locator('a[href="/app/settings/manage-account"]').click();


    }
}

module.exports = { DashboardPage };
class ManageAccountsPage {
    constructor(page) {
        this.page = page;
        this.accountInput = page.getByPlaceholder('Type and press Enter...');
    }

    async createAccount() {
        await this.accountInput.fill(`${Math.floor(Math.random() * 1000)}`);
        await this.page.keyboard.press("Enter");

        await this.page.locator('//button[text()="Cancel"]').click();

        await this.accountInput.fill(`${Math.floor(Math.random() * 1000)}`);
        await this.page.keyboard.press("Enter");

        await this.page.getByText('Save Changes').click();

        await this.page.locator("//button[@Class='swal2-cancel swal2-styled']").click();

        await this.page.getByText('Save Changes').click();

        await this.page.locator("//button[contains(text(), 'Confirm')]").click();

        await this.page.locator("//button[contains(text(), 'Update Master')]").click();

    }

}

module.exports = { ManageAccountsPage };
class NPIManager{
    constructor(page){
        this.page = page;
    }

async NPIManagerpage(){
        await this.page.locator("//a[@href='/app/npi-manager']").click();
        await this.page.locator("//img[@alt='instamart']").click();

        //Add NPI
        await this.page.getByText("Add NPI").click();
        await this.page.locator("//div[@class='css-13cymwt-control']").click();
        await this.page.getByText("swiggy instamart rule / Swiggy NPI.xlsx").click();
        await this.page.getByText("Add a rule").click();



}
}
module.exports = {NPIManager};
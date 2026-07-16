const path = require("path");

class MasterManager {
    constructor(page){
        this.page = page;
    }
async Master(){
        // New Category
        // await this.page.locator(".react-select__control").nth(0).click();
        // await this.page.getByRole("combobox").first().fill("Kitchen things");
        // await this.page.keyboard.press("Enter");



        // Exsiting Category
        await this.page.locator(".react-select__control").nth(0).click();
        await this.page.getByRole("option", { name: "All" }).click();
        
                // Path of the file to upload
        const filePath = path.join(__dirname,"../sample-file/NPI Template - Swiggy(New) Dec 2025.xlsx");

        // Open Template dropdown
        await this.page.locator(".react-select__control").nth(1).click();

        // Wait for the file chooser before selecting the option
        const fileChooserPromise = this.page.waitForEvent("filechooser");

        // Selecting this option opens the native file picker
        await this.page.getByRole("option", { name: "Upload via CSV" }).click();

        // Upload the file
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(filePath);

        //Replace the file
        const replaceChooserPromise = this.page.waitForEvent("filechooser");
        await this.page.getByText("Replace").click();
        const replaceChooser = await replaceChooserPromise;
        await replaceChooser.setFiles(filePath);

        //Remove and add the file in the upload via CSV
        const removechooserpromise = this.page.waitForEvent("filechooser");
        await this.page.getByText("Remove").click();
        await this.page.locator(".react-select__control").nth(1).click();
        await this.page.getByRole("option", { name: "Upload via CSV" }).click();
        const removechooser = await removechooserpromise;
        await removechooser.setFiles(filePath);

        //click the confirm buton
        await this.page.locator(('//button[@title="Create Master"]')).click();

        //filling the order no in the master manager
        //wait for table visiblity
        await this.page.waitForSelector("table", {state: "visible",timeout: 3000});

        //how to find the table and count
        // const table = this.page.locator("table");
        // console.log(await table.count());
        // console.log(await this.page.locator("tr").count());


        const orderInputs = this.page.locator("//input[starts-with(@id,'field order')]");
        const count = await orderInputs.count();
        for (let i = 0; i < count; i++) {await orderInputs.nth(i).fill(String(i + 1));}

        





    }
}
 module.exports = {MasterManager};

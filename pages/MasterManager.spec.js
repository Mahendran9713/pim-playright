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
        // const replaceChooserPromise = this.page.waitForEvent("filechooser");
        await this.page.getByText("Replace").click();
        const replaceChooserPromise = this.page.waitForEvent("filechooser");
        const replaceChooser = await replaceChooserPromise;
        await replaceChooser.setFiles(filePath);






    }
}
 module.exports = {MasterManager};

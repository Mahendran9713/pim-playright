const { test, expect } = require("@playwright/test");

test("Valid Login", async ({ page }) => {
    await page.goto("https://qa.e-genie.ai/login");

    // await page.pause();

    //Login 
    await page.getByPlaceholder("Username").fill("roshan.dhaker@adglobal360.com");
    await page.getByPlaceholder("Password").fill("Tester!1");
    // await page.locator(".login_rightSubmitBtn.cursor-pointer").click();
    await page.locator("div[class='login_rightSubmitBtn cursor-pointer']").click()

    //Client changing 
    await page.locator("div[class='text-black flex items-center gap-2 relative']").click();
    await page.getByText("Nestle India").click();

    //Open Digital Shelf Management management
    await page
  .locator("div.sidebar-nav div.relative.group")
  .filter({
    hasText: "Digital Shelf Management"
  })
  .first()
  .click();

//Open product information management
   await page.locator("div.sidebar-nav div.relative.group").filter({hasText: "Product Information Management"}).first().click();
await page.locator("button[class='greetings-button']").click();

//Settings
await page.locator("div.ds-local-nav-link > ul > div").nth(3).locator("button").click();
//Manage Accounts
await page.locator("div.mx-\\[8px\\].my-2 div.bg-\\[\\#3A3C3E\\].rounded-\\[4px\\] a").nth(0).click();




// await page.locator("div[class='flex items-center h-[46px] text-[14px] leading-[20px] hover:bg-[#39393A] text-[#BFBFBF]']").click();
    //await page.pause();
    
});
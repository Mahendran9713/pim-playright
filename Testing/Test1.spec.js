const{test,expect} =require('@playwright/test')

test("Verify Application Title", async function ({page}) {
    
    await page.goto("https://qa.e-genie.ai/login")
    
    const url=await page.url()

    console.log("The Title is"+"="+ url )

})
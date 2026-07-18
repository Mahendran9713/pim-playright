const { expect } = require("@playwright/test");
const { error } = require("node:console");

class Scrolldown {

    constructor(page) {
        this.page = page;
    }

    //Scroll Top to Bottom
    async scrollToBottom() {
        await this.page.goto("https://www.amazon.in/");
        await this.page.locator("body").hover();

        let previousHeight = 0;

        while (true) {
            await this.page.mouse.wheel(0, 1000);
            await this.page.waitForTimeout(1000);

            const currentHeight = await this.page.evaluate(() => {
                return document.documentElement.scrollHeight;
            });

            if (currentHeight === previousHeight) {
                break;
            }

            previousHeight = currentHeight;
        }

        console.log("Reached Bottom");
    }

    //Scroll Bottom to Top
    async scrollToTop() {

        await this.page.evaluate(() => {
            window.scrollTo(0, document.documentElement.scrollHeight);
        });

        await this.page.waitForTimeout(1000);

        while (true) {
            await this.page.mouse.wheel(0, -1000);
            // await this.page.waitForTimeout(500);

            const scrollY = await this.page.evaluate(() => {
                return window.scrollY;
            });

            if (scrollY === 0) {
                break;
            }
        }

        console.log("Reached Top");

    
    }

    //Method - 2 = scroll till Specific area
    async SpecificPlacescroll(){ 
      const scrollexample = this.page.locator("//div[@id='desktop-2']");
      await scrollexample.scrollIntoViewIfNeeded();

      console.log("Reached specific Area");
 }
}

module.exports = { Scrolldown };




















//Method - 1 = Up to Bottom scroll 
//   await this.page.locator("//div[@id='gw-layout']").hover();

// while (true) {
//   await this.page.mouse.wheel(0, 500);
//   await this.page.waitForTimeout(50);

//   const isBottom = await this.page.evaluate(() => {
//     return window.innerHeight + window.scrollY >= document.body.scrollHeight;
//   });

//   if (isBottom) {
//     break;
//   }
// }
 
// //Method - 2 = scroll till Specific area
// // const scrollexample = this.page.locator("//div[@data-card-metrics-id='ameyal-product-shoveler_desktop-gateway-btf_0']");
// // await scrollexample.scrollIntoViewIfNeeded();

// // Method 2 = Bottom to Top scroll
// await this.page.locator("//div[@id='gw-layout']").hover();

// // Move to bottom
// // await this.page.evaluate(() => {
// //   window.scrollTo(0, document.body.scrollHeight);
// // });

// for (let i = 0; i < 50; i++) {
//   await this.page.mouse.wheel(0, -500); // Scroll up
//   await this.page.waitForTimeout(50);




//  await this.page.waitForTimeout(1000);

// const values = await this.page.evaluate(() => ({
//     scrollY: window.scrollY,
//     innerHeight: window.innerHeight,
//     bodyHeight: document.body.scrollHeight,
//     htmlHeight: document.documentElement.scrollHeight
// }));

// console.log(values);

//  }
// }
// // }
// module.exports = { Scrolldown };
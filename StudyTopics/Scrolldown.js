const { expect } = require("@playwright/test");
const { error } = require("node:console");

class Scrolldown {
    constructor(page) {
    this.page = page;
}

 async testscrolldown() {
  await this.page.goto("https://www.amazon.in/");
  await this.page.waitForTimeout(2000);

//Method - 1 = Up to Bottom scroll 
  await this.page.locator("//div[@id='gw-layout']").hover();

while (true) {
  await this.page.mouse.wheel(0, 200);
  await this.page.waitForTimeout(100);

  const isBottom = await this.page.evaluate(() => {
    return window.innerHeight + window.scrollY >= document.body.scrollHeight;
  });

  if (isBottom) {
    break;
  }
}
 
//Method - 2 = scroll till Specific area
// const scrollexample = this.page.locator("//div[@data-card-metrics-id='ameyal-product-shoveler_desktop-gateway-btf_0']");
// await scrollexample.scrollIntoViewIfNeeded();

// Method 2 = Bottom to Top scroll
await this.page.locator("//div[@id='gw-layout']").hover();

// Move to bottom
await this.page.evaluate(() => {
  window.scrollTo(0, document.body.scrollHeight);
});

for (let i = 0; i < 50; i++) {
  await this.page.mouse.wheel(0, -200); // Scroll up
  await this.page.waitForTimeout(100);




 await this.page.waitForTimeout(2000);
 }
}
}
module.exports = { Scrolldown };
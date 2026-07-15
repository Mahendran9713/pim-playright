const { test, expect } = require("@playwright/test");

test("Manage Accounts", async ({ page }) => {

await page.getByRole("text").fill("Testing123");
await page.keyboard.press("Enter");

await page.pause();

})
const { test } = require("@playwright/test");
const { Scrolldown } = require("../StudyTopics/scrolldown");

test("Complete Test", async ({ page }) => {

    const testscrolldown = new Scrolldown(page);

    await testscrolldown.testscrolldown();

    
});
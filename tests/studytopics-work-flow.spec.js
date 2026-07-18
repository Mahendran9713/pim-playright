const { test } = require("@playwright/test");
const { Scrolldown } = require("../StudyTopics/scrolldown");

test("Complete Test", async ({ page }) => {

    const testscrolldown = new Scrolldown(page);
    // const testdropdown = new dropdown(page);

    await testscrolldown.scrollToBottom();
    await testscrolldown.scrollToTop();
    await testscrolldown.SpecificPlacescroll();
    await testdropdown.Dropdowntest();
    
});
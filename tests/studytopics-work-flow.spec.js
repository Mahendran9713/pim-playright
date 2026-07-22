const { test } = require("@playwright/test");
const { Scrolldown } = require("../StudyTopics/scrolldown");
const { Dropdown } = require("../StudyTopics/dropdown");
const { multiselecting } = require("../StudyTopics/Multiselect");

test("Complete Test", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const testscrolldown = new Scrolldown(page);
    const testdropdown = new Dropdown(page);
    const testmultiselect = new multiselecting(page);

    await testscrolldown.scrollToBottom();
    await testscrolldown.scrollToTop();
    await testscrolldown.SpecificPlacescroll();
    await testdropdown.Selectcountry();
    await testmultiselect.testmselect();
    
    await page.pause();
});
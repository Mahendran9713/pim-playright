const { test } = require("@playwright/test");

const { LoginPage } = require("../pages/LoginPage");
const { DashboardPage } = require("../pages/DashboardPage");
const { ManageAccountsPage } = require("../pages/ManageAccountsPage");
const { MasterManager } = require("../pages/MasterManager.spec");
// test.setTimeout(2000);

test("Complete PIM Workflow", async ({ page }) => {

    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const manage = new ManageAccountsPage(page);
    const mastermanager = new MasterManager(page);
     test.setTimeout(120000);

    await login.login();

    await dashboard.selectAccount();

    await manage.createAccount();
    
    await mastermanager.Master();

    // await page.pause();
});
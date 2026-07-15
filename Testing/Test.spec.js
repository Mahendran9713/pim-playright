const {test , expect} =require('@playwright/test')

test("My First Test", async function({page}) {
    expect (12).toBe(12)
})

test("My Second Test", async function ({page}) {
    expect (100).toBe(100)
})

test("My Third Test", async function ({page}) {
    expect (20).toBe(20)
})

test("My fourth Test", async function ({page}) {
    expect ("Mahendran").toContain("Mahe")
    expect(true).toBeTruthy()
})

    test("My fifth Test", async function ({page}) {
    expect(false).toBeFalsy()    
    
    
})
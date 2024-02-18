import{test, expect} from '@playwright/test';

test('Basic Locator Testing', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/angularpractice/')
    await page.getByLabel('Check me out if you Love').check()
    await page.getByLabel('Employed').check()
    await page.getByLabel('Gender').selectOption("Female")

})

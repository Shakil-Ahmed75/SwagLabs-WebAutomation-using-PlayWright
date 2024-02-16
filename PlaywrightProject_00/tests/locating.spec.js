import {test, expect} from '@playwright/test';
import {LocatorPage} from '../pages/locator';



//test case
test('Locating Test Case', async({page})=>{
    const Locator = new LocatorPage(page)
    await Locator.gotoLoginPage()
    await Locator.login()
})
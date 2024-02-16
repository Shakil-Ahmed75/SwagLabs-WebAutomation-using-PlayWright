import {test , expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { Carts } from '../pages/Cart';

test('Test Case 001', async({page})=>{

//login step
 const login= new LoginPage (page)
 await login.goTologinPage();
 await login.goToHomePage('pavanol', 'test@123')
 await page.waitForTimeout(5000);

 //homepage
  const homepage =new HomePage(page)
  await homepage.addproductToCart('Iphone 6 32gb');
  await page.waitForTimeout(5000)
  await homepage.goToCart();

//Cart
  const cartin = new Carts(page)
  await cartin.checkProductsInCart();

});
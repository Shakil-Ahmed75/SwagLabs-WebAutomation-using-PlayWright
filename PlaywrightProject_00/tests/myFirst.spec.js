import { test, expect } from '@playwright/test';
import { LoginPage} from '../pages/login';

test('Login test', async ({ page }) => {

  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('tomsmith', 'SuperSecretPassword!')

});
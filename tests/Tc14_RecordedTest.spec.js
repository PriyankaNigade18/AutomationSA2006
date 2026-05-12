import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationplayground.com/crm/');
  await expect(page.getByRole('link', { name: 'Customer Service' })).toBeVisible();

  await page.locator('div').nth(2).click();
  await page.getByRole('link', { name: 'Sign In' }).click();
  await expect(page.getByRole('link', { name: 'Customer Service' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test123');
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('row', { name: 'Mark Tompson the_mark7  ' })).toBeVisible();

  await page.getByRole('link', { name: 'New Customer' }).click();
  await expect(page.getByRole('link', { name: 'Customer Service' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByLabel('State').selectOption('FL');
  
  
});
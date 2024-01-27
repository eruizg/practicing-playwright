import { test, expect } from '@playwright/test';
test('validate webpage title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});
test('automate form submission', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.fill('//input[contains(@id,"userName")]', 'John Doe');
  await page.fill('//input[contains(@id,"userEmail")]', 'test@test.com');
  await page.fill(
    '//textarea[contains(@id,"currentAddress")]',
    '123 Main Street'
  );
  await page.fill(
    '//textarea[contains(@id,"permanentAddress")]',
    '123 Main Street'
  );
  await page.click('//button[contains(@id,"submit")]');
});
test('handle alerts', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');
  await page.on('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });
  await page.click(
    '//span[contains(text(),"On button click, confirm")]/following::button[1]'
  );
});

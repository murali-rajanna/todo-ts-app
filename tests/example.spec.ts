import { test, expect, devices } from '@playwright/test';


test.describe('Page elements', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct title', async ({ page }) => {
    await expect(page.getByRole('heading')).toHaveText('My Todos');
  });
  
  test('has correct description', async ({ page }) => {
    await expect(page.getByRole('paragraph')).toHaveText('Stay organised, one task at a time');
  });

  test('has free text box', async ({ page }) => {
    await expect(page.getByRole('textbox')).toBeVisible();
    await expect(page.getByPlaceholder('What needs to be done?')).toBeVisible();
  });

  test('has add button', async ({ page }) => {
    await expect(page.getByRole('button')).toHaveText('Add');
  });
});

test.describe('Page interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('can add list item', async ({ page }) => {
    await page.getByRole('textbox').fill('Hello');
    await page.locator('#add-btn').click();
    await expect(page.getByText('Hello')).toBeVisible();
  });
  
  test('can add multiple list items', async ({ page }) => {
    await page.getByRole('textbox').fill('Hello');
    await page.locator('#add-btn').click();
    await page.getByRole('textbox').fill('There');
    await page.locator('#add-btn').click();
    await page.getByRole('textbox').fill('General');
    await page.locator('#add-btn').click();
    await expect(page.getByText('Hello')).toBeVisible();
    await expect(page.getByText('There')).toBeVisible();
    await expect(page.getByText('General')).toBeVisible();
  });

  test('can remove list item', async ({ page }) => {
    await page.getByRole('textbox').fill('Hello');
    await page.locator('#add-btn').click();
    await page.getByRole('textbox').fill('There');
    await page.locator('#add-btn').click();
    await page.getByRole('textbox').fill('General');
    await page.locator('#add-btn').click();
    await expect(page.getByText('Hello')).toBeVisible();
    await expect(page.getByText('There')).toBeVisible();
    await expect(page.getByText('General')).toBeVisible();
    
    await page.locator('#delete-btn-2').click();
    await expect(page.getByText('Hello')).toBeVisible();
    await expect(page.getByText('There')).not.toBeVisible();
    await expect(page.getByText('General')).toBeVisible();
  });
});

test.describe('Routing', () => {
  test('can route to About', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('nav-link-about').click();
    
    await expect(page).toHaveURL(/about/);
  });
  
  test('can route back again', async ({ page }) => {
    await page.goto('/about/');
    
    await page.getByTestId('nav-link-todos').click();
    await expect(page).toHaveURL(/\//);
  });
});

import { test, expect } from '@playwright/test';

test.describe('Page interactions', () => {
  test('has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading')).toHaveText('My Todos');
  });
  
  // Has correct description

  // beforeEach?

  // Has free text box

  // Has add button
  
  // Can add list item
  
  // Can add multiple list items

  // Can remove list item


  // Routing -- split into describe blocks?

  //  Can route to About
  //  Can route back to Home from About
  //  Can route to Author
  //  Can route to Test
});

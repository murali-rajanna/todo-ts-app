import { test, expect } from '@playwright/test';

test('has correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading')).toHaveText('My Todos');
});

/** 
 * Task 1:
 * Write a test to check that the correct description appears above the text box.
 * You'll want to select by a different role for this.
**/

/** 
 * Task 2:
 * We now have a couple tests routing to the homepage, and we can expect that the rest will as well.
 * It would be helpful to define the routing once for all tests.
 * Try using a beforeEach before your two tests to do the routing, and remove routing from the tests.
**/

/** 
 * Task 3:
 * Write a test to check that the text box appears, with the correct placeholder.
 * 
**/

/** 
 * Task 4:
 * Has add button
**/

/** 
 * Task 5:
 * Can add list item
**/

/** 
 * Task 6:
 * Can add multiple list items
**/

/** 
 * Task 7:
 * Can remove list item
**/

/** 
 * Task 8:
 * Now we want to check the tabs route to the different pages.
 * This is testing differently to the tests above, routing rather than the page showing and working.
 * Try using a describe block to wrap the tests you have already with an accurate title, and make a new one for the routing tests you're about to write.
 * You'll notice that this divides up the tests in the Playwright UI.
**/

/** 
 * Task 9:
 * Can route to About
**/

/** 
 * Task 10:
 * Can route back again
**/

/** 
 * Task 11:
 * Can route to Author
**/

/** 
 * Task 11:
 * Can route to Test
**/

/* You did it! Have a cookie 🍪 */

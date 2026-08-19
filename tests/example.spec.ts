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
 * Write a test to check that the add button is showing, with the correct text.
**/

/** 
 * Routing buttons visible?
**/

/** 
 * Snapshot test?
**/

/** 
 * 3 describes?
**/

/** 
 * Task 5:
 * Write a test to add a list item.
 * You'll need to find the text box, add some text with .fill(), click the button with .click(), then check that the new item is visible.
**/

/** 
 * Task 6:
 * Write a test to add multiple list items.
 * You might have trouble selecting the add button, if you're selecting by role "button" - there's more than one now!
 * You can select an element by ID by using page.locator('#exampleid')
**/

/** 
 * Task 7:
 * Write a test to remove a list item.
 * You'll need to select the delete button on the list item you want (they have unique IDs), then check that the item isn't there any more.
 * You can invert any assertion by putting .not. in front, so for not visible it would be - .not.isVisible()
**/

/** 
 * Task 8:
 * Now we want to check that the tabs route to the different pages.
 * This is testing something different to the tests above, routing rather than the page showing and working.
 * Try using a describe block to wrap the tests you have already with an accurate title, and make a new one for the routing tests you're about to write.
 * You'll notice that this divides up the tests in the Playwright UI.
**/

/** 
 * Task 9:
 * Write a test to route to the About page, by clicking the tab at the top.
 * You'll need to check the url is correct afterwards, using .toHaveURL()
 * This uses regex - ahhhh - /(.)+\/about/
**/

/** 
 * Task 10:
 * Write tests for navigating to the Author and Test pages.
**/

/** 
 * Task 11:
 * Write a test for navigating to the Todos page from another page.
 * You'll need to start on another page for this, and it doesn't make sense to go to home and then to that page
**/

/* You did it! Have a cookie 🍪 */

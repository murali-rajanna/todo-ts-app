import { test, expect } from '@playwright/test';

/** 
 * Task 0:
 * Follow along with the example test
*/

/** 
 * Task 1:
 * Write a test to check that the correct description appears above the text box.
 * You'll want to select by the paragraph different role for this.
**/

/** 
 * Task 2:
 * We now have a couple tests routing to the homepage, and we can expect that the rest will as well.
 * It would be helpful to define the routing once for all tests.
 * Try using a beforeEach before your two tests to do the routing, and remove routing from the tests:
 * 
**/
test.beforeEach(async ({ page }) => {
   // Code to run before each test in the block
});

/** 
 * Task 3:
 * Write a test to check that the text box appears, with the correct placeholder.
 * You can use the textbox role, and .toBeVisible() to check if something exists
 * You can use getByPlaceholder('text to check') to find the placeholder text
**/

/** 
 * Task 4:
 * Write a test to check that the add button is showing, with the correct text.
**/

/** 
 * We're about to write some tests for functionality, rather than checking page elements are present.
 * You might want to add a new describe block for these?
 * It will help divide up the tests in the playwright UI!
 * Make sure the beforeEach is outside the describe blocks, or it will only apply to the one it's inside.
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
 * You can select an element by ID by using page.locator('#exampleid'), IDs should be unique.
**/

/** 
 * Task 7:
 * Write a test to remove a list item.
 * First you need to build a list, as before.
 * Then, you'll need to select the delete button on the list item you want.
 * Then, check that the item isn't there any more.
 * You can invert any assertion by putting .not in front, so for not visible it would be - .not.toBeVisible()
**/

/** 
 * Now we want to check that the links at the top route to the different pages.
 * Another describe block would be helpful here.
**/

/** 
 * Task 9:
 * Write a test to route to the About page, by clicking the tab at the top.
 * You'll need to check the url is correct afterwards, using .toHaveURL()
 * The parameter here isn't a string, it's a new language called Regex, so you can write .toHaveURL(/about/)
 * Regex is for checking if strings match a formula, it's weird and you don't need to understand it, we only need a simple match here.
**/

/** 
 * Task 10:
 * Write a test for navigating to the Todos page from another page.
 * You'll need to start on another page for this, and it doesn't make sense to go to home and then to that page.
 * So here, you'll need to move the beforeEach again. The two previous describes each get a copy, this block gets none.
 * This means the first routing test needs a page.goto('/'), and this test will need page.goto('/about/')
 * To check that we navigate back to home we need do this check: .toHaveURL(/(.)+\//)
 * 
 * This is an example of Regex being weird, you don't need to worry about it, but if you care here's the explaination:
 * The slashes either end mark it as Regex. 
 * (.)+ means any character (the dot), any number of times (the plus), the brackets contain a charcter sequence, so you could do abc any number of times - (abc)+
 * \/ 
**/

/* You did it! Have a cookie 🍪 */

const shopForBeans = require('./4.1-helper.js');

/* Intro:
 * 
 * Take a look at the provided code. We required in the 
 * shopForBeans() function from 4.1-helper.js which 
 * returns a promise with a resolved value of a string 
 * representing a type of bean, eg. ‘kidney’.
 * 
 * Next, we declared the getBeans() function. Let’s 
 * summarize its intended functionality:
 * 
 * Log '1. Heading to the store to buy beans...' to the 
 * console.
 * 
 * Capture the resolved value of the promise returned 
 * when we invoke shopForBeans().
 * 
 * The promise returned from shopForBeans() prints a 
 * string in the format '2. I bought [the resolved type 
 * of beans] beans because they were on sale.'
 * 
 * Finally, the function prints a string in the format 
 * '3. Great! I'm making [the bean type] beans for dinner 
 * tonight!' to the console.
 * 
 * RUN the 4-async-Functions.js to see if getBeans() is 
 * working as intended.
 */

/* 1:
 * Take a moment to understand why logging in wrong order
 * and then refactor getBeans() so it works as intended. 
 */

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
	let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
};

getBeans();


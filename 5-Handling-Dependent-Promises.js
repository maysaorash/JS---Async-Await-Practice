const {shopForBeans, soakTheBeans, cookTheBeans} = require('./5.1-helper.js');

/* Intro:
 * 
 * Take a look at the provided code. We require in three 
 * functions: shopForBeans(), soakTheBeans(), and 
 * cookTheBeans(). These functions each return a promise.
 * 
 * shopForBeans() expects no arguments and returns a 
 * promise which will resolve to a string of a bean type.
 * 
 * soakTheBeans() expects a bean type string as an 
 * argument and returns a promise which resolves to a 
 * boolean indicating whether or not the beans are 
 * softened.
 * 
 * cookTheBeans() expects a boolean as an argument and, 
 * if that value is true, returns a promise which will 
 * resolve to a string announcing that dinner is ready.
 * 
 * If you’d like, look at the 5.1-helper.js file to see 
 * how these functions work.
 * 
 * In the following steps, you’ll create an async 
 * function that handles the three dependent promises we 
 * just walked through. It will simulate shopping for, 
 * soaking, and then cooking the beans. 
 */

/* 1: Declare an async function, makeBeans(). 
 * 
 * 2: Inside your function, declare a variable, type, 
 * assigned to the resolved value of shopForBeans().
 * 
 * 3: Next inside your function, declare a variable, 
 * isSoft, assigned to the resolved value of 
 * soakTheBeans(). Don’t forget: the soakTheBeans() 
 * function expects an argument. Make sure to pass the 
 * expected value into soakTheBeans().
 * 
 * 4: Next inside your function, declare a variable, 
 * dinner, assigned to the resolved of cookTheBeans(). 
 * Don’t forget: the cookTheBeans() function also expects 
 * an argument. Make sure to pass the expected value into 
 * cookTheBeans().
 * 
 * 5: Next inside your function, log your dinner variable 
 * to the console.
 * 
 * 6: Beneath your function declaration, invoke the 
 * makeBeans() function.
 */ 

// Write your code below:
async function makeBeans () {
  try {
    const firstResolvedVal = await shopForBeans();
    const secondResolvedVal = await soakTheBeans(firstResolvedVal);
    const thirdResolvedVal = await cookTheBeans(secondResolvedVal);
		console.log(thirdResolvedVal)
  } catch (err) {
    console.log(err);
  }
}

makeBeans()
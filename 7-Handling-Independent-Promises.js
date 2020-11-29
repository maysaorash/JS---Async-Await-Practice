let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./7.1-helper.js')

/* Intro:
 * Take a look at the provided code. We require 
 * in four functions: cookBeans(), steamBroccoli()
 * , cookRice(), and bakeChicken(). These 
 * functions each return a promise which will 
 * resolve to a string representing a part of a 
 * meal.
 * 
 * If you’d like, look at the 7.1-helper.js file 
 * to see how these functions work.
 */

/* 1:
 * Declare an async function, serveDinner(). 
 * Create four variables:
 * 
 * vegetablePromise which should be assigned the 
 * return value of steamBroccoli()
 * 
 * starchPromise which should be assigned the 
 * return value of cookRice()
 * 
 * proteinPromise which should be assigned the 
 * return value of bakeChicken()
 * 
 * and sidePromise which should be assigned the 
 * return value of cookBeans()
 * 
 * These variables should be assigned the promise
 * objects themselves not their resolved values.
 */

/* 2: 
 * Inside serveDinner(), console.log() a string 
 * in the following format: Dinner is served. 
 * We’re having [resolved value of the 
 * vegetablePromise], [resolved value of the 
 * starchPromise], [resolved value of the 
 * proteinPromise], and [resolved value of the 
 * sidePromise]. ie. ‘Dinner is served. We’re 
 * having broccoli, rice, chicken, and beans.’
 * 
 * You’ll need to await each promise, but there 
 * are a few different ways you can accomplish 
 * the desired functionality.
 */ 

// Write your code below:



/* 3:
 * Finally invoke serveDinner()
 */ 

// Write your code below:
async function serveDinner () {
  try {
    const firstResolvedValue = await steamBroccoli();
    const secondResolvedValue = await cookRice();
    const thirdResolvedValue = await bakeChicken();
    const foursResolvedValue = await cookBeans();
    console.log(` Dinner is served. We’re having ${firstResolvedValue}, ${secondResolvedValue}, ${thirdResolvedValue}, ${foursResolvedValue}`)
  } catch (err) {
    console.log(err);
  }
}

serveDinner()
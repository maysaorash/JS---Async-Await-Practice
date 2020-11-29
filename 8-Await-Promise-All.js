let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./7.1-helper')

/* Intro:
 * In this exercise, we require in the same four 
 * functions as in the last exercise: cookBeans(),
 * steamBroccoli(), cookRice(), and bakeChicken().
 * 
 * These functions each return a promise which 
 * will resolve to a string representing a part 
 * of a meal. You can check them out in the 
 * 7.1-helper.js file.
 */

/* 1:
 * You’re going to create a very similar function 
 * to the serveDinner() function you created in 
 * the last exercise. This time, you’ll use 
 * Promise.all()!
 * 
 * Create an async function serveDinnerAgain(). 
 * Inside your function, declare a variable 
 * foodArray and assign it the resolved value of 
 * the promise returned from Promise.all().
 * 
 * Remember that Promise.all() takes in an array 
 * of promises. Pass in an array containing the 
 * steamBroccoli(), cookRice(), bakeChicken(), 
 * and cookBeans() functions in that order.
 */

// Write your code below:


async function serveDinner() {
  try {
    const myPromises = await Promise.all([cookBeans(), steamBroccoli(), cookRice(), bakeChicken()]);
    console.log(myPromises);
  } catch (err) {
    console.log(err)
  }
}

serveDinner()

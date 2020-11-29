const brainstormDinner = require('./3.1-helper.js');

/* Intro:
 * In the provided code, we’ve required in the function 
 * brainstormDinner(). This function expects no arguments 
 * and returns a new promise with a resolved value of a 
 * string representing a meal. (You can look at the code 
 * for this function by navigating to the 3.1-helper.js 
 * file.)
 * 
 * Look at the nativePromiseDinner() function in app.js.
 * Take a moment to understand this function and predict 
 * its expected outcome. In the next step, you’ll be 
 * recreating its functionality using async...await 
 * rather than native promises. 
 */

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  })
}

// nativePromiseDinner()
/* 1:
 * It’s not necessary to execute the nativePromiseDinner()
 * function, but, if you’d like to, uncomment the line 
 * below to check out the hint for some guidance. 
 */ 

// nativePromiseDinner();

// async/await version:
async function announceDinner() {
  /* 2:
   * Fill in the body of the announceDinner() function so 
   * that it has the same functionality as 
   * nativePromiseDinner(). It should wait for the 
   * promise returned from brainstormDinner() to resolve, 
   * and then log a string to the console in the same 
   * format as did nativePromiseDinner(). You’ll need to 
   * use the await operator inside your function.
   * 
   * When you’re ready, RUN the program to move on to the 
   * next step. 
   */
  // Write your code below:
   try {
    const resolvedValue = await brainstormDinner();
    console.log(resolvedValue)
  } catch (err) {
    console.log(err);
  }
}



// 2: invoke the announceDinner() function below:
announceDinner()

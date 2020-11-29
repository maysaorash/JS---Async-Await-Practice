function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  })
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
})

/* Intro:
 * We provided a function withConstructor() which takes 
 * in a number. If the number is 0, it returns a promise 
 * that resolves to the string 'zero'. If the number is 
 * not 0, it returns a promise that resolves to the 
 * string 'not zero'. Take a moment to understand this 
 * function and the code that follows. 
 * 
 * When you are ready RUN the program to see the output
 */ 


/* 1:
 * Write an async function, withAsync() which reproduces 
 * the functionality of withConstructor(). Though your 
 * function will return a promise, it should not 
 * construct the promise using the new keyword. Instead, 
 * it should rely on the fact that an async function 
 * automatically returns a promise.
 * 
 * When you’re ready, write your code below and check 
 * your work to move on to the next step.
 */

// Write your code below:


// 2: Uncomment the test code below:
/*
withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})
*/
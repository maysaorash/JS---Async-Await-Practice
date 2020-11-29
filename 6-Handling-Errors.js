const cookBeanSouffle = require('./6.1-helper.js');

/* Intro
 * 
 * For convenience, we’ve been working with a lot of 
 * promises that never reject, but this isn’t very 
 * realistic! 
 * 
 * This time we’ve required in a function, 
 * cookBeanSouffle() which returns a promise that 
 * resolves or rejects randomly. When it resolves, the 
 * promise resolves with a value of 'Bean Souffle' and, 
 * when it rejects, it rejects with a value of 'Dinner is 
 * ruined!'. 
 * 
 * If you’re interested, you can see how the function works by looking in the 6.1-helper.js file.
 */

/* 1:
 * Declare an async function, hostDinnerParty(). Inside 
 * your function, create a try...catch statement. The 
 * catch statement should specify an identifier, error. 
 * You can leave both the try and catch blocks empty.
 * 
 * 2:
 * Inside your try block, log a string in the following 
 * format: '[resolved value of cookBeanSouffle() promise] 
 * is served!' ie. 'Bean Souffle is served!'. Make sure 
 * to await the cookBeanSouffle() promise. For more 
 * guidance, ask for your Instructor, Cemil :).
 * 
 * 3:
 * Now let’s fill in the catch block! First log the error 
 * to the console, and then log the string: 'Ordering a 
 * pizza!' to the console.
 * 
 * 4:
 * Beneath your function declaration, invoke 
 * hostDinnerParty() and you are done.
 * 
 */ 

// Write your code below:


async function hostDinnerParty () {
  try {
    const serve = await cookBeanSouffle()
      //  const value = 'Bean Souffle'
   console.log(`${serve} is served!`)
  } catch (err) {
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty()


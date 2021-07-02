/***************************************************************************************************************************************\
 * Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50    *
 * 300, and if the value is different, the tip is 20%.                                                                                 *
 *                                                                                                                                     *
 *   Your tasks:                                                                                                                       *
 *          1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on *
 * the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the *
 * most. Test the function using a bill value of 100                                                                                   *
 *          2. And now let's use arrays! So create an array 'bills' containing the test data below                                     *
 *          3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before          *
 *          4. Bonus: Create an array 'total' containing the total values, so the bill + tip                                           *
\***************************************************************************************************************************************/

/*
    Data 1: Test for bill values 275, 40 and 430
*/

"use strict";

const bills = [275, 40, 430];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(total);

/***************************************************************************************************************************************\
 * 1. Function name :- calcTip                                                                                                         *
 *                                                                                                                                     *
 * 2. Activity that the function performs :- This calculates and returns the tip corresponding to the bill given to it.                *
\***************************************************************************************************************************************/
function calcTip(bill) {
  if (bill >= 50) {
    if (bill <= 300) {
      return bill * (15 / 100);
    } else {
      return bill * (20 / 100);
    }
  } else {
    return 0;
  }
}

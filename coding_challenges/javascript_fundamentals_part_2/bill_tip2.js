/***************************************************************************************************************************************\
 * Let's improve Steven's tip calculator even more, this time using loops!                                                             *
 *     Your tasks:                                                                                                                     *
 *       1. Create an array 'bills' containing all 10 test bill values                                                                 *
 *       2. Create empty arrays for the tips and the totals ('tips' and 'totals')                                                      *
 *       3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every   *
 *          bill value in the bills array. Use a for loop to perform the 10 calculations!                                              *
\***************************************************************************************************************************************/

/*
    Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
*/

"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [],
  totals = [];

for (let index = 0; index < bills.length; index++) {
  tips.push(calcTip(bills[index]));
  totals.push(bills[index] + tips[index]);
}

console.log(tips);
console.log(totals);

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

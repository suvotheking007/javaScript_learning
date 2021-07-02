/***************************************************************************************************************************************\
 * Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.       *
 * Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).                     *
 * A team only wins if it has at least double the average score of the other team.                                                     *
 * Otherwise, no team wins!                                                                                                            *
 *                                                                                                                                     *
 *                          1. Create an arrow function 'calcAverage' to calculate the average of 3 scores                             *
 *                          2. Use the function to calculate the average for both teams                                                *
 *                          3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins'   *
 *                             and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according  *
 *                             to the rule above.                                                                                      *
 *                             Example: "Koalas win (30 vs. 13)"                                                                       *
 *                          4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2                       *
 *                          5. Ignore draws this time                                                                                  *
\***************************************************************************************************************************************/

/*
    Test data:
    § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
    § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

const round1Dolphins = 85;
const round2Dolphins = 54;
const round3Dolphins = 41;

const round1Koalas = 23;
const round2Koalas = 34;
const round3Koalas = 27;

const calcAverage = (round1, round2, round3) => (round1 + round2 + round3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins === avgKoalas) {
    console.log(`Match draw is ignored`);
  } else {
    console.log(`Nobody is the winner`);
  }
}

const avgDolphins = calcAverage(round1Dolphins, round2Dolphins, round3Dolphins);
const avgKoalas = calcAverage(round1Koalas, round2Koalas, round3Koalas);

checkWinner(avgDolphins, avgKoalas);

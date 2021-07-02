/***************************************************************************************************************************************\
 * There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average   *
 * score wins a trophy! Include a requirement of minimum score of 100 to be the winner                                                 *
\***************************************************************************************************************************************/

/*    Test data:
    § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
    § Data 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
    § Data 3: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const round1Dolphin = 97;
const round1Koalas = 109;

const round2Dolphin = 112;
const round2Koalas = 95;

const round3Dolphin = 101;
const round3Koalas = 106;

const totalDolphin = round1Dolphin + round2Dolphin + round3Dolphin;
const totalKoalas = round1Koalas + round2Koalas + round3Koalas;

const avgDolphin = totalDolphin / 3;
const avgKoalas = totalKoalas / 3;

console.log(`
Team average scores :- 
Dolphin :- ${avgDolphin}
Koalas :- ${avgKoalas}`);

if (avgDolphin >= 100 || avgKoalas >= 100) {
  if (avgDolphin > avgKoalas) console.log("Team dolphin is the winner! ");
  else if (avgDolphin === avgKoalas) console.log("The match is a draw");
  else console.log("Koalas is the winner");
} else console.log("No one has won! ");

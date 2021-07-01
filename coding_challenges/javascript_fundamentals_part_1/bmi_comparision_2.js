/***************************************************************************************************************************************\
 * Mark and john are trying to compare their BMI, write a program that display who has higher BMI                                      *
\***************************************************************************************************************************************/

/*                                                 VARIOUS PROGRAM RELATED INFORMATION :-

  +-------------------------------------------------------------------------------------------------------------------------------------+
  |BMI calculation formula :- mass / height ** 2                                                                                        |
  |   Height unit -> meters                                                                                                             |
  |   Mass unit -> kg                                                                                                                   |
  +-------------------------------------------------------------------------------------------------------------------------------------+

*/

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.76;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
}

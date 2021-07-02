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

const markWeight = 78,
  markHeight = 1.69;

const johnWeight = 92,
  johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);

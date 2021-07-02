/***************************************************************************************************************************************\
 * Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations!                    *
 *       Your tasks:                                                                                                                   *
 *         1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)    *
 *         2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to  *
 *            a property, and also return it from the method.                                                                          *
 *         3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI      *
 *            (28.3) is higher than Mark's (23.9)!"
\***************************************************************************************************************************************/

/*                                                 VARIOUS PROGRAM RELATED INFORMATION :-               
  
  +-------------------------------------------------------------------------------------------------------------------------------------+
  |BMI = mass / height ** 2                                                                                                             |
  |   (mass in kg and height in meter)                                                                                                  |
  +-------------------------------------------------------------------------------------------------------------------------------------+
  
*/

/*
    Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

"use strict";

const persons = [
  {
    fullName: "Mark Miller",
    massInKg: 78,
    heightInMet: 1.69,

    calcBMI: function () {
      this.BMI = this.massInKg / this.heightInMet ** 2;
      return this.BMI;
    },
  },
  {
    fullName: "John Smith",
    massInKg: 92,
    heightInMet: 1.95,

    calcBMI: function () {
      this.BMI = this.massInKg / this.heightInMet ** 2;
      return this.BMI;
    },
  },
];

let higher, lower;

if (persons[0].calcBMI() > persons[1].calcBMI()) {
  higher = 0;
  lower = 1;
} else {
  higher = 1;
  lower = 0;
}

console.log(
  `${persons[higher].fullName}'s BMI (${persons[higher].BMI}) is higher than ${persons[lower].fullName}'s (${persons[lower].BMI})!`
);

// 'use strict';

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `You are ${age} years old, born in ${birthYear}.`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Katarina';
//       const str = `Oh, you are millenial, ${firstName}`;
//       console.log(str);
//       output = 'NEW OUTPUT!'; // Reassining outer's scope variable

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str); // out of scope
//     console.log(millenial);
//     // add(2, 3); // out of scope
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Dejan';
// calcAge(1989);

// HOISTING PRACTICE:

// Variables:
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Dejan';
let job = 'Salesman';
const year = 1989;

// Functions
// console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // Error - cannot access
// console.log(addArr(2, 3)); // Error - cannot access

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArr = (a, b) => a + b;

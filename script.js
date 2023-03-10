'use strict';

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
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Dejan';
// let job = 'Salesman';
// const year = 1989;

// Functions
// console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // Error - cannot access
// console.log(addArr(2, 3)); // Error - cannot access

// function addDecl(a, b) {
//   return a + b;
// }

// // can not work
// const addExpr = function (a, b) {
//   return a + b;
// };

// // can not work
// var addArr = (a, b) => a + b;

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// This Keyword

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAge(1989);

// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1989);

// const dejan = {
//   year: 1989,
//   calcAge: function () {
//     console.log(2025 - this.year);
//   },
// };

// dejan.calcAge();

// const katarina = {
//   year: 1996,
// };

// katarina.calcAge = dejan.calcAge;

// katarina.calcAge();

// const f = dejan.calcAge;
// // f(); // error, dont have a object

// Regular functions vs Arrow functions

// const dejan = {
//   firstname: 'Dejan',
//   year: 1989,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },

//   const isMillenial =  function () {
//     console.log(this.year >= 1981 && this.year <= 1996);
//   }

//   greet: function () {
//     console.log(`Hey ${this.firstname}`);
//   },
// };

// dejan.greet();
// dejan.calcAge();

// let age = 33;
// let oldAge = age;
// age = 34;
// console.log(age);
// console.log(oldAge);

// const me = {
//   age: 34,
//   name: 'Dejan',
// };

// const friend = me;
// friend.age = 26;
// console.log('Friend:', friend);
// console.log('Me:', me);

// Primitive types in Stack
let lastName = 'Perc';
let oldlastName = lastName;
lastName = 'Kurcubic';
console.log(lastName, oldlastName);

// Object in Heap - refferce types
const katarina = {
  firstName: 'Katarina',
  lastName: 'Perc',
  age: 26,
};

const marriedKatarina = katarina;
marriedKatarina.lastName = 'Kurcubic';
console.log('Before marriage:', katarina);
console.log('After marriage:', marriedKatarina);

// Copying objects
const katarina2 = {
  firstName: 'Katarina',
  lastName: 'Perc',
  age: 26,
  family: ['Bora', 'Branka'],
};
// Copy objecy in heap
const katarinaCopy = Object.assign({}, katarina2);
katarinaCopy.lastName = 'Kurcubic';
console.log('Before marriage:', katarina2);
console.log('After marriage:', katarinaCopy);

katarinaCopy.family.push('Dejan');
katarinaCopy.family.push('Ivana');

console.log('Before marriage:', katarina2);
console.log('After marriage:', katarinaCopy);

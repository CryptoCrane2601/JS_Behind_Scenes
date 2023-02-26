'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `You are ${age} years old, born in ${birthYear}.`;
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Dejan';
calcAge(1989);

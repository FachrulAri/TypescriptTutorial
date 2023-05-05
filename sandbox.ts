// To compile "TS (Typescript)" file, use command "tsc [filename]" on terminal
// we can add -w to auto compile every save
// you can change the value but not the type
let character = "mario";
let age = 30;
let isBlackBelt = true;

// character = 30
character = "luigi";

// age = 'bowser'
age = 20;

// isBlackBelt = 'yes'
isBlackBelt = false;

//you can declare parameter type on function
const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7.5));

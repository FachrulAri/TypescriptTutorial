// To compile "TS (Typescript)" file, use command "tsc [filename]" on terminal
// we can add -w to auto compile every save
// to initiate tsc config type "tsc --init" on terminal, use "tsc" to compile all ts files

// let greet: Function

// example 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
  console.log(`${name} ${greeting}`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action == "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

// example 3
let logDetails: (obj: { name: string; age: number }) => void;
type person = { name: string; age: number };

logDetails = (fahrul: person) => {
  console.log(`${fahrul.name} ${fahrul.age}`);
};

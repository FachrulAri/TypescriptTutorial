// To compile "TS (Typescript)" file, use command "tsc [filename]" on terminal
// we can add -w to auto compile every save

// Explicit Types
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;
isLoggedIn = true;

// Arrays
// Need to be declacred as empty array to use function (push)
let ninja: string[] = [];
ninja.push("mario");

// Union Type
let mixed: (string | number)[] = [];
mixed.push("hello");
mixed.push(20);
// mixed.push(true)

let uid: string | number;
uid = "mario";
uid = 30;

// Objects
let ninjaOne: object;
ninjaOne = { name: "mario", age: 20 };

// let ninjaTwo: object;
let ninjaTwo: {
  name: string;
  age: number;
};

ninjaTwo = { name: "mario", age: 20 };

// To compile "TS (Typescript)" file, use command "tsc [filename]" on terminal
// we can add -w to auto compile every save
// Dynamic any types. a type that can change
var age = 20;
age = true;
console.log(age);
age = "mario";
console.log(age);
age = { name: "luigi", age: 20 };
var mixed = [];
mixed.push(5);
mixed.push("Mario");
mixed.push(false);
console.log(mixed);
var ninja;
ninja = { name: "yoshi", age: 25 };
console.log(ninja);
ninja = { name: 30, age: false };
console.log(ninja);

"use strict";
// To compile "TS (Typescript)" file, use command "tsc [filename]" on terminal
// we can add -w to auto compile every save
// to initiate tsc config type "tsc --init" on terminal, use "tsc" to compile all ts files
// let greet: Function
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action == "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (fahrul) => {
    console.log(`${fahrul.name} ${fahrul.age}`);
};

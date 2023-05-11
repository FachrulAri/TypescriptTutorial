"use strict";
// To compile "TS (Typescript)" file, use command "tsc [filename]" on terminal
// we can add -w to auto compile every save
// to initiate tsc config type "tsc --init" on terminal, use "tsc" to compile all ts files
const logDetails = (uid, item) => {
    console.log(`${item} has uid ${uid}`);
};
const greet = (user) => {
    console.log(`Hello ${user.name}, your uid ${user.uid}`);
};
// Below are example of type aliases
const greetB = (user) => {
    console.log(`Hello ${user.name}, your uid ${user.uid}`);
};
const greetWithAlias = (user) => {
    console.log(`Hello ${user.name}, your uid ${user.uid}`);
};

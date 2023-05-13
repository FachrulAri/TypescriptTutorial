"use strict";
// To compile "TS (Typescript)" file, use command "tsc [filename]" on terminal
// we can add -w to auto compile every save
// to initiate tsc config type "tsc --init" on terminal, use "tsc" to compile all ts files
// you can use "!"" after the queryselector if u knew there is a value
// const anchor = document.querySelector("a")!;
// // if (anchor) {
// //   console.log(anchor.href);
// // }
// console.log(anchor.href);
// const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
// has select id "type"
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});

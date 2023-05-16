// To compile "TS (Typescript)" file, use command "tsc [filename]" on terminal
// we can add -w to auto compile every save
// to initiate tsc config type "tsc --init" on terminal, use "tsc" to compile all ts files
// Creating attb with isPerson specification
const me = {
    name: "Fahrul",
    age: 25,
    speak(text) {
        console.log("Hello ", text);
    },
    spend(amount) {
        console.log("I spend ", amount);
        return amount;
    },
};
// Creating function with parameter isPerson
const greetPerson = (person) => {
    console.log("Hi ", person.name);
};
// Using greetPerson function with attb that we created "me"
greetPerson(me);
import { Invoice } from "./classes/Invoice.js";
// Creating new class
const invOne = new Invoice("Mario", "Makan", 400);
const invTwo = new Invoice("Luigi", "Minum", 500);
// Using type defining so only from class "Invoice" can be pushed into array
let testInvoice = [];
testInvoice.push(invOne);
testInvoice.push(invTwo);
// Removing detail since its private and can only accessed in same class
// it can only accessed via class Invoice prop format()
testInvoice.forEach((inv) => {
    console.log(inv.client, 
    // inv.details,
    inv.amount, inv.format());
});
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
// we select id of element based on their names "type, tofrom, details, amount"
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});

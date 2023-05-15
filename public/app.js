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
// Classes
class Invoice {
    // Constructor initiated when creating new class
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // You can use below constructor for simpler code but only if there access modifier
    // constructor(
    //   readonly client: string,
    //   private details: string,
    //   public amount: number
    // ) {}
    format() {
        return `${this.client} with ${this.amount} for ${this.details}`;
    }
}
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

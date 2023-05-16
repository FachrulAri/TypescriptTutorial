// To compile "TS (Typescript)" file, use command "tsc [filename]" on terminal
// we can add -w to auto compile every save
// to initiate tsc config type "tsc --init" on terminal, use "tsc" to compile all ts files

// Interfaces
// Creating interface isPerson who needs name, age, speak(), spend() to be used
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
// Creating attb with isPerson specification
const me: isPerson = {
  name: "Fahrul",
  age: 25,
  speak(text: string): void {
    console.log("Hello ", text);
  },
  spend(amount: number): number {
    console.log("I spend ", amount);
    return amount;
  },
};
// Creating function with parameter isPerson
const greetPerson = (person: isPerson) => {
  console.log("Hi ", person.name);
};
// Using greetPerson function with attb that we created "me"
greetPerson(me);

import { Invoice } from "./classes/Invoice.js";

// Creating new class
const invOne = new Invoice("Mario", "Makan", 400);
const invTwo = new Invoice("Luigi", "Minum", 500);
// Using type defining so only from class "Invoice" can be pushed into array
let testInvoice: Invoice[] = [];
testInvoice.push(invOne);
testInvoice.push(invTwo);

// Removing detail since its private and can only accessed in same class
// it can only accessed via class Invoice prop format()
testInvoice.forEach((inv) => {
  console.log(
    inv.client,
    // inv.details,
    inv.amount,
    inv.format()
  );
});

// you can use "!"" after the queryselector if u knew there is a value
// const anchor = document.querySelector("a")!;
// // if (anchor) {
// //   console.log(anchor.href);
// // }
// console.log(anchor.href);

// const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs
// we select id of element based on their names "type, tofrom, details, amount"
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});

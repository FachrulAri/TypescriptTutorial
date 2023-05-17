// To compile "TS (Typescript)" file, use command "tsc [filename]" on terminal
// we can add -w to auto compile every save
// to initiate tsc config type "tsc --init" on terminal, use "tsc" to compile all ts files
import { Invoice } from "./classes/Invoice.js";
import { listTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
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
// List template instance
// since there is only 1 "ul" we dont have to use class name
const ul = document.querySelector("ul");
const list = new listTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "start");
});

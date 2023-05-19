// To compile "TS (Typescript)" file, use command "tsc [filename]" on terminal
// we can add -w to auto compile every save
// to initiate tsc config type "tsc --init" on terminal, use "tsc" to compile all ts files

import { Invoice } from "./classes/Invoice.js";
import { listTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { hasFormatter } from "./interfaces/HasFormatter.js";

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

// List template instance
// since there is only 1 "ul" we dont have to use class name
const ul = document.querySelector("ul")!;
const list = new listTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: hasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, "start");
});

// GENERICS
// start with <attbName> and u can specify the type more using extend
// usually programmer using T as generic name. generic are used for flexible type
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
let docOne = addUID({ name: "Maroi", age: 24 });
// let docTwo = addUID('hello')
console.log(docOne.age);

// ENUMS
// enums are used for changing the string into number so we dont have to remember number is which value
// example of enum is on interface
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

// GENERIC with interfaces
// we can use it on interfaces
interface Resource<T> {
  uid: number;
  // Changing into enum
  resourceName: ResourceType;
  data: T;
}
// specifying the type as object of any type
const docThree: Resource<object> = {
  uid: 15,
  // if we console log doc3/4 we will get number based on enum order
  resourceName: ResourceType.AUTHOR,
  data: { name: "Shaun" },
};
// example generic as array of string
const docFour: Resource<string[]> = {
  uid: 15,
  resourceName: ResourceType.PERSON,
  data: ["Nua", "Milk", "Bread"],
};
console.log(docThree, docFour);

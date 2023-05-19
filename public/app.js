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
// GENERICS
// start with <attbName> and u can specify the type more using extend
// usually programmer using T as generic name. generic are used for flexible type
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "Maroi", age: 24 });
// let docTwo = addUID('hello')
console.log(docOne.age);
// ENUMS
// enums are used for changing the string into number so we dont have to remember number is which value
// example of enum is on interface
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
// specifying the type as object of any type
const docThree = {
    uid: 15,
    // if we console log doc3/4 we will get number based on enum order
    resourceName: ResourceType.AUTHOR,
    data: { name: "Shaun" },
};
// example generic as array of string
const docFour = {
    uid: 15,
    resourceName: ResourceType.PERSON,
    data: ["Nua", "Milk", "Bread"],
};
console.log(docThree, docFour);

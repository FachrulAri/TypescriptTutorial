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

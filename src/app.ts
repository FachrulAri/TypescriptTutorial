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
  // Remove below this if you want to use 2nd constructor
  readonly client: string;
  private details: string;
  public amount: number;

  // Constructor initiated when creating new class
  constructor(c: string, d: string, a: number) {
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

// Classes
// We implements hasFormatter from interfaces so object property inside class "Invoice" must
//  have format() function that return string
export class Invoice {
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
    // Since we already have format() on class. we can proceed use hasFormatter
    format() {
        return `${this.client} with ${this.amount} for ${this.details}`;
    }
}
// Example Below
// // Creating new class
// const invOne = new Invoice("Mario", "Makan", 400);
// const invTwo = new Invoice("Luigi", "Minum", 500);
// // Using type defining so only from class "Invoice" can be pushed into array
// let testInvoice: Invoice[] = [];
// testInvoice.push(invOne);
// testInvoice.push(invTwo);
// // Removing detail since its private and can only accessed in same class
// // it can only accessed via class Invoice prop format()
// testInvoice.forEach((inv) => {
//   console.log(
//     inv.client,
//     // inv.details,
//     inv.amount,
//     inv.format()
//   );
// });

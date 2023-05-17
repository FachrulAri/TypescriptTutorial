// Classes
// We implements hasFormatter from interfaces so object property inside class "Payment" must
//  have format() function that return string
export class Payment {
    // Constructor initiated when creating new class
    constructor(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    // You can use below constructor for simpler code but only if there access modifier
    // constructor(
    //   readonly recipient: string,
    //   private details: string,
    //   public amount: number
    // ) {}
    // Since we already have format() on class. we can proceed use hasFormatter
    format() {
        return `${this.recipient} owed ${this.amount} for ${this.details}`;
    }
}

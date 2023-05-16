// Classes
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
    format() {
        return `${this.client} with ${this.amount} for ${this.details}`;
    }
}

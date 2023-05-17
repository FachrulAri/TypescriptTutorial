import { hasFormatter } from "../interfaces/HasFormatter.js";
// Classes
// We implements hasFormatter from interfaces so object property inside class "Payment" must
//  have format() function that return string
export class Payment implements hasFormatter {
  // Remove below this if you want to use 2nd constructor
  readonly recipient: string;
  private details: string;
  public amount: number;

  // Constructor initiated when creating new class
  constructor(c: string, d: string, a: number) {
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

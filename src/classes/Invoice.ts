// Classes
export class Invoice {
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

// Creating interface hasFormatter who needs format() that return string to be used
export interface hasFormatter {
  format(): string;
}

// // only specify attb docOne or docTwo must have format() basedd on "hasFormatter"
// let docOne: hasFormatter;
// let docTwo: hasFormatter;
// // since "Invoice" & "Payment" already generating format() it passed
// docOne = new Invoice("yoshi", "details", 250);
// docTwo = new Payment("peach", "detailed", 350);
// // same as Invoice & Payment, to push into array docs. pushed attb must have format()
// let docs: hasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);

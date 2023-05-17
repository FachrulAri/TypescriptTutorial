// Interfaces
// Creating interface isPerson who needs name, age, speak(), spend() to be used
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
// Creating attb with isPerson specification
const me: isPerson = {
  name: "Fahrul",
  age: 25,
  speak(text: string): void {
    console.log("Hello ", text);
  },
  spend(amount: number): number {
    console.log("I spend ", amount);
    return amount;
  },
};
// Creating function with parameter isPerson
const greetPerson = (person: isPerson) => {
  console.log("Hi ", person.name);
};
// Using greetPerson function with attb that we created "me"
greetPerson(me);

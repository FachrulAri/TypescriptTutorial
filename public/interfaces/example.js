"use strict";
// Creating attb with isPerson specification
const me = {
    name: "Fahrul",
    age: 25,
    speak(text) {
        console.log("Hello ", text);
    },
    spend(amount) {
        console.log("I spend ", amount);
        return amount;
    },
};
// Creating function with parameter isPerson
const greetPerson = (person) => {
    console.log("Hi ", person.name);
};
// Using greetPerson function with attb that we created "me"
greetPerson(me);

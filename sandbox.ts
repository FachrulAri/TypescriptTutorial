// To compile "TS (Typescript)" file, use command "tsc [filename]" on terminal
// we can add -w to auto compile every save

//arrays
let names = ["mario", "luigi", "peach"];

names.push("toad");
// names.push(3)

let number = [20, 30, 40];
// number.push('bowser')

// Declaration array type is necessary if not the same type
let mixed = ["ken", 4, "chill", 9, 10, true];

mixed.push("rey");
mixed.push(20);

//objects
let ninja = {
  name: "mario",
  age: 20,
};

ninja.age = 30;
ninja.name = "luigi";
// We cant add new prop or manipulate structure
// ninja.skills = 'str'

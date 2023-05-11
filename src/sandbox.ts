// To compile "TS (Typescript)" file, use command "tsc [filename]" on terminal
// we can add -w to auto compile every save
// to initiate tsc config type "tsc --init" on terminal, use "tsc" to compile all ts files

// In typescript we can use type aliases, example in below
type StringorNum = string | number;
type usernameObjUid = { name: string; uid: string | number };

const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has uid ${uid}`);
};
const greet = (user: { name: string; uid: string | number }) => {
  console.log(`Hello ${user.name}, your uid ${user.uid}`);
};

// Below are example of type aliases
const greetB = (user: { name: string; uid: StringorNum }) => {
  console.log(`Hello ${user.name}, your uid ${user.uid}`);
};
const greetWithAlias = (user: usernameObjUid) => {
  console.log(`Hello ${user.name}, your uid ${user.uid}`);
};

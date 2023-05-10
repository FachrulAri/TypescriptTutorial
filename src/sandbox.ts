// To compile "TS (Typescript)" file, use command "tsc [filename]" on terminal
// we can add -w to auto compile every save
// to initiate tsc config type "tsc --init" on terminal, use "tsc" to compile all ts files

let greet: Function;
greet = () => {
  console.log("hello world");
};

// if u want to add optional parameter, add "?" after parameter name
// example "c?: number"
const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(5, 10);

const minus = (a: number, b: number) => {
  return a - b;
};

let result = minus(10, 7);

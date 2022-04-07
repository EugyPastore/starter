// // mutate age variable = reassign
// // GOOD PRACTICE : to have as little mutations as possible, so less bugs appear!
// // By default always use CONST as much as possible
// // var similar to let; var was used prior ES6;
// // var is function scoped.
// // ALWAYS DECLARE variables! surname = "Pastore" --> not good!
// // var job = "programmer";
// // job = "full-stack developer";
// // let is block scoped
// // let age = 31;
// // age = 32;
// // const not supposed to change in the future
// // const birthYear = 1990;
// // const variables cannot be empty! error: missing initializer

// // variable conventions
// // let js = "amazing";
// // console.log("Using console.log - builds bridge between script and developer console in the browser ");
// // console.log(2);
// // console.log("Eugenia");
let myAge = 31;
let firstName = "Bob";
// // console.log(firstName);
// // console.log("camelCase, variable name cannot start with number!, but can have underscore and dollar sign. have to be descriptive.")

// // // boolean
// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof true);

// // // dynamic typing. changing values
// // javaScriptIsFun = "Yes!";
// // console.log(typeof javaScriptIsFun);

// // // undefined variable
// // let year;
// // console.log(year);
// // console.log(typeof year);
// // // reassign

// // year = 1990;
// // console.log(typeof year);

// // // null- type of undefined
// // console.log(typeof null)

// // Operators - + * / **
// const now = 2022;
// const ageEugenia = now - 1990;
// const ageRima = now - 1964;
// console.log(ageEugenia, ageRima);

// console.log(ageEugenia + ageRima);
// console.log(ageEugenia * ageRima);

// //concatination
// const firstName = "Eugenia";
// const lastName = "Pastore";
// console.log(firstName + " " + lastName);

// //assignment operator =
// let x = 5 + 7;
// console.log(x);
// // reassigning value x = x + 10
// x += 10
// x *= 2
// // x = x + 1
// x++;
// // x= x-1;
// x--;
// console.log(x);

// //comparison operators to produce boolean >, <, >=, <=
// console.log(ageEugenia > ageRima)
// const isFullAge = ageEugenia >= 18;
// console.log(isFullAge);

// // operators precedence https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//Template literals
// const eugenia = `I am ${firstName}, ${myAge}`
// console.log(`Amsterdam`);
// console.log(typeof `Amsterdam`);

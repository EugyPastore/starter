// mutate age variable = reassign
// GOOD PRACTICE : to have as little mutations as possible, so less bugs appear!
// By default always use CONST as much as possible
// var similar to let; var was used prior ES6;
// var is function scoped.
// ALWAYS DECLARE variables! surname = "Pastore" --> not good!
var job = "programmer";
job = "full-stack developer";
// let is block scoped
let age = 31;
age = 32;
// const not supposed to change in the future
const birthYear = 1990;
// const variables cannot be empty! error: missing initializer

// variable conventions
// let js = "amazing";
// console.log("Using console.log - builds bridge between script and developer console in the browser ");
// console.log(2);
// console.log("Eugenia");
// let myAge = 31;
// let firstName = "Bob";
// console.log(firstName);
// console.log("camelCase, variable name cannot start with number!, but can have underscore and dollar sign. have to be descriptive.")

// // boolean
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof true);

// // dynamic typing. changing values
// javaScriptIsFun = "Yes!";
// console.log(typeof javaScriptIsFun);

// // undefined variable
// let year;
// console.log(year);
// console.log(typeof year);
// // reassign

// year = 1990;
// console.log(typeof year);

// // null- type of undefined
// console.log(typeof null)

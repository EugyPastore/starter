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
// let myAge = 31;
// let firstName = "Bob";
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

// if, else statements (condition ) {if true, then this will be executed}
// Value type conversion(manual conversion) and coercion(automatic conversion)
// const inputYear = 1889;
// console.log(typeof String(inputYear));
// console.log(typeof inputYear)
// console.log(String(31), 31)

// //type coersion
// // + converts into string
// console.log('5' + '7');
// // - converts into integer
// console.log('5' + '5' - '7');

// Booleans
// FALSY VALUES: 0 , NULL, NuN, undefined, ''. Will become false when trying to convert to Booleans
// Truthy values(any number or a string that is not empty) will return true when converted into boolean

// console.log(Boolean(0));
// console.log(Boolean(5));

// 0 will be converted to false because 0 is a falsy value
// const money = 0;

// if (money) {
// 	console.log(`don't spend it all`)
// } else {
// 	console.log(`get a job`)
// }
// // undefined value is also falsy
// let height;
// if (height) {
// 	console.log(`Yay!`)
// } else {
// 	console.log(`not defined`)
// }

// === comparison! returns true or false
// == converts "18" to number 18. Don't use it, it generates bugs.
// prompt is likle gets.chomp in ruby
// prompt("What's your favourite number ?")
//logical operators AND &&, || OR, !=opposite

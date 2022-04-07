// 1 assignment
// let country = "Latvia";
// let continent = "Europe";
// let population = 1902000;

// console.log(country);
// console.log(continent);
// console.log(population);
// 1 challenge
// 2nd challange
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let bmiMark = (massMark / (heightMark ** 2));
let bmiJohn = (massJohn / (heightJohn * heightJohn));

const markHigherBMI = bmiMark > bmiJohn;
if (bmiMark > bmiJohn) {
	console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`)
} else {
	console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMark}!`)
}

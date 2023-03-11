// * Review of data types

// * String
let myName = "Raymond";

// * Number
let myAge = 30;

// * Still a number in JS
let pi = 3.14;

// * Boolean
let isHuman = true;

// * Null
let nothing = null;

// * Undefined
let nothing2;

// * Array
// *            0 1 2 3 4
let evenNums = [2,4,6,8,10];

let arrOfNames = ['Raymond', 'Anthony', 'Karina', 'Adrian'];

// console.log(evenNums[1]);

// * Object
let studentMacy = {
    name:"Macy",
    role:"Student",
    age:25
}
// console.log(studentMacy.name);

let employeeAshton = {
    name: "Ashton",
    role:"Instructor",
    age:42,
    isHuman:true,
    favHobbies:['Learning new technologies', 'Playing with the dogs', 'Playing volleyball'],
    lectureSchedule:{
        week1:{
            day1:"HTML",
            day2:"CSS",
            day3:"Flex-box",
        },
        week2:{
            day1:"JS intro",
            day2:"JS on the browser",
            day3:"belt prep demo",
        },
        week3:{
            day1:"Terminal, JS arrays and objects",
            day2:"Github",
            day3:"API's",
        },
    }
}
// console.log(employeeAshton.lectureSchedule.week1.day1);
// console.log(employeeAshton.favHobbies[1]);

// * if, else if and else syntax 
if(myAge >= 18){
    console.log('You are old enough welcome in to the club');
}
else{
    console.log('Sorry you must be 18 or older to enter the club');
}

//////////////////////////////////////////////////////////////////////

const highSchoolGrad = true;

if (highSchoolGrad){
    console.log('You can enroll in this bootcamp');
}
else{
    console.log('Sorry you must graduate high school or receive your GED first');
}

//////////////////////////////////////////////////////////////////////

let weekday = "Friday"

if (weekday == "friday"){
    console.log("Woohoo its the weekend!");
}else if(weekday == "Saturday"){
    console.log("One more day to relax!");
}else{
    console.log("Time to work!");
}

// * function syntax
function sayHi() {  
    console.log("Hello World!");
}


function multiply(num1, num2){
    return num1 * num2
}

let multiplyResult = multiply(2,4);
console.log(multiplyResult);

// * arrow functions
const sayHiArrow = () => {
    console.log('hi');
}

const multiplyArrow = (num1, num2) => {
    return num1 * num2
}
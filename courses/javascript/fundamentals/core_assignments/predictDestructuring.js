// PROBLEM 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//OUTPUT

// I think randomCar will print 'Tesla'.
// I think otherRandomCar will print 'Mercedes'.


// PROBLEM 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

//OUTPUT

// I think name will create an error stating: "name is not defined."
// I think otherName will not run because of the previous error. The code will stop at first error.


// PROBLEM 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//OUTPUT

// I think password will create an error stating: "password is not defined."
// hashedPassword will not run because of the previous error.


// PROBLEM 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//OUTPUT

// I think 'first==second' will print: FALSE.
// I thnik 'first==third' will print: TRUE.


// PROBLEM 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//OUTPUT 

// I think key will print "value".
// I think secondKey will print "[1, 5, 1, 8, 3, 3]".
// I think "secondKey[0]" will print "1".
// I think willThisWork will print "5".
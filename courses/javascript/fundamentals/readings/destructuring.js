// const person = { 
//         firstName: 'Bob', 
//         lastName: 'Marley', 
//         email: 'bob@marley.com', 
//         password: 'sekureP@ssw0rd9', 
//         username: 'barley', 
//         createdAt: 1543945177623
//     };
//     const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];    

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

    const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// BEFORE ES6
// var email = person.email;
// var firstAnimal = animals[0];

// AFTER ES6
// const { email } = person;
// const [firstAnimal] = animals;
// console.log(email);
// console.log(firstAnimal);

// BEFORE ES6
// var email = person.email;
// var password = person.password;
// var firstAnimal = animals[0];
// var secondAnimal = animals[1];
// var thirdAnimal = animals[2];

// AFTER ES6
// const { email, password } = person;
// const [firstAnimal, secondAnimal, thirdAnimal] = animals;
// console.log(email, password);
// console.log(firstAnimal, secondAnimal, thirdAnimal);

// const password = '12345';
// const { password: hashedPassword } = person;
// console.log(hashedPassword);

// const { addresses: [whiteHouse, sherlock] } = person;
// console.log(whiteHouse, sherlock);

const { addresses: [ , { city: london }] } = person;
console.log(london);
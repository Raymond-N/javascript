const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

// CREATE USER HERE *need to figure out hoe to generate ids*
// password
// email
// phoneNumber
// lastName
// firstName
// _id

const createUser = () => {
    return {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
}

app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser)
})

// CREATE COMPANY HERE
// _id *need to figure out hoe to generate ids*
// name
// address
// street
// city
// state
// zipCode
// country

const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany)
})

app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();

    const newUserCompany = {
        user: newUser,
        company: newCompany
    }
    res.json(newUserCompany)
})





app.listen( port, () => console.log(`Listening on port: ${port}`) );
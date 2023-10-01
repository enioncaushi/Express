const express = require('express');
const faker = require('faker');
const app = express();
const PORT = 8000;

const createUser = () => {
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumberFormat(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
};

const createCompany = () => {
    const address = {
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    };
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: address
    };
};

app.get('/api/users/new', (req, res) => {
    res.json(createUser());
});

app.get('/api/companies/new', (req, res) => {
    res.json(createCompany());
});

app.get('/api/user/company', (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

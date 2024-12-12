import express from "express";
import { faker } from "@faker-js/faker";

const app = express();
const PORT = 5000;
const createProduct = () => {
  const newFake = {
    name: faker.commerce.productName(),
    price: "$" + faker.commerce.price(),
    department: faker.commerce.department(),
  };
  return newFake;
};

const newFakeProduct = createProduct();

const createCompany = () => {
  const newCompany = {
    name: faker.company.name(),
    phoneNumber: faker.phone.number(),
    website: faker.internet.url(),
    buzzPhrase: faker.company.buzzPhrase(),
  };
  return newCompany;
};

const newCompany = createCompany();

const createUser = () => {
  const newUser = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    gender: faker.person.gender(),
    job: faker.person.jobType(),
  };
  return newUser;
};
const newUser = createUser();

app.get("/api/users/new", (req, res) => {
  res.json([newUser]);
});

app.get("/api/company/new", (req, res) => {
  res.json([newCompany]);
});
app.get("/api/user/company", (req, res) => {
    res.json([newCompany , newUser]);
  });

app.listen(PORT, () => console.log(`server is running at port ${PORT}`));

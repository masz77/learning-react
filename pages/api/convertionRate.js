// import data from "./../../fakeAPICurrencyConverter.json" assert { type: "json" };
const data = require("./../../fakeAPICurrencyConverter.json");

// Fake users data
const { users } = data;

console.log(users);

export default function handler(_req, res) {
  // Get data from your database
  res.status(200).json(users);
}

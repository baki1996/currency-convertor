#! /usr/bin/env node
import inquirer from "inquirer";
const Currency = {
    USD: 1, //Base currency
    EUR: 0.91,
    OMR: 2.59,
    INR: 74.57,
    PKR: 289,
    DIRHAM: 3.67,
    IND: 83.31,
    GBP: 0.76
};
let user_answer = await inquirer.prompt([
    {
        name: "From",
        message: "Hello, kinda Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "OMR", "INR", "PKR", "DIRHAM", "IND", "GBP"]
    },
    {
        name: "To",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "OMR", "INR", "PKR", "DIRHAM", "IND", "GBP"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let fromAmount = Currency[user_answer.From];
let toAmount = Currency[user_answer.To];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);

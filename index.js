#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = "true";
while (condition) {
    let todoQuestions = await inquirer.prompt([{ name: "firstQuestion",
            type: "input",
            message: "What do you want to add in your todo list?"
        },
        { name: "secondQuestion",
            type: "confirm",
            message: "Do you want to add more in todos list?",
            default: "true"
        }]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    condition = todoQuestions.secondQuestion;
}

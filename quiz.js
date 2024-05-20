#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let loop = true;
while (loop) {
    console.log(chalk.bgWhiteBright(" 'WELLCOME TO TYPESCRIPT QUIZ '"));
    let a = await inquirer.prompt([{
            type: "list",
            name: "q1",
            message: chalk.green.bold("WHAT IS TYPESCRIPT?"),
            choices: ["A. A front-end framework",
                "B. A JavaScript superset",
                "C. A database management system",
                "D. A CSS preprocessor"]
        },
        {
            type: "list",
            name: "q2",
            message: chalk.blue.bold("How do you define a variable in TypeScript?"),
            choices: ["A. var name: string;",
                "B. let name: string;",
                "C. name: string = '' ; ",
                " D. All of the above"]
        },
        {
            type: "list",
            name: "q3",
            message: chalk.yellow.bold("Which of the following is a TypeScript type?"),
            choices: ["A. string",
                "B. number",
                "C. boolean",
                "D. All of the above"]
        },
        {
            type: "list",
            name: "q4",
            message: chalk.magenta.bold("What is the TypeScript type for an array of numbers?"),
            choices: ["A. number[]",
                "B. Array<number>",
                "C. numberArray",
                "D. Both A and B"]
        },
        {
            type: "list",
            name: "q5",
            message: chalk.gray.bold("How do you define a tuple type in TypeScript?"),
            choices: ["A. let tuple: [string, number];",
                "B. let tuple: {string, number};",
                "C. let tuple: [string | number];",
                "D. let tuple: Array<string, number>;"]
        },
        {
            type: "list",
            name: "q6",
            message: chalk.red.bold("What is the difference between interface and type in TypeScript?"),
            choices: ["A. interface can be used for classes, type cannot",
                "B. type can create union types, interface cannot",
                "C. Both A and B",
                "D. There is no difference"]
        },
        {
            type: "list",
            name: "q7",
            message: chalk.dim.bold("What is Type Alias in TypeScript?"),
            choices: ["A. primitive datatype",
                "B. non-primitive datatype",
                "C. non of them",
                " strong type "]
        },
        {
            type: "list",
            name: "q8",
            message: chalk.cyan.bold("how can we make Type Alias in TypeScript?"),
            choices: ["A. let newtype=[string, number]",
                "B. let newtype={boolean | null}",
                "C. type newtype=[string | boolean]",
                "D. type newtype=(number | string)"]
        },
        {
            type: "list",
            name: "q9",
            message: chalk.greenBright.bold("What is the use of the enum keyword in TypeScript?"),
            choices: ["A. To define a set of named constants",
                "B. To create a new class",
                "C. To extend another class",
                "D. To create a function"]
        },
        {
            type: "list",
            name: "q10",
            message: chalk.magentaBright.bold("Which command is used to install TypeScript globally?"),
            choices: ["A. npm install typescript",
                "B. npm install -g typescript",
                "C. npm typescript install",
                "D. npm typescript -g install"]
        }
    ]);
    if (a.q1 == "B. A JavaScript superset") {
        console.log(chalk.bgBlue("correct anwer!"));
    }
    else {
        console.log(chalk.bgCyanBright("wrong answer"));
    }
    ;
    if (a.q2 == " D. All of the above") {
        console.log(chalk.bgBlue("correct anwer!"));
    }
    else {
        console.log(chalk.bgCyanBright("wrong answer"));
    }
    ;
    if (a.q3 == "D. All of the above") {
        console.log(chalk.bgBlue("correct anwer!"));
    }
    else {
        console.log(chalk.bgCyanBright("wrong answer"));
    }
    ;
    if (a.q4 == "D. Both A and B") {
        console.log(chalk.bgBlue("correct anwer!"));
    }
    else {
        console.log(chalk.bgCyanBright("wrong answer"));
    }
    ;
    if (a.q5 == "A. let tuple: [string, number];") {
        console.log(chalk.bgBlue("correct anwer!"));
    }
    else {
        console.log(chalk.bgCyanBright("wrong answer"));
    }
    ;
    if (a.q6 == "C. Both A and B") {
        console.log(chalk.bgBlue("correct anwer!"));
    }
    else {
        console.log(chalk.bgCyanBright("wrong answer"));
    }
    ;
    if (a.q7 == "B. non-primitive datatype") {
        console.log(chalk.bgBlue("correct anwer!"));
    }
    else {
        console.log(chalk.bgCyanBright("wrong answer"));
    }
    ;
    if (a.q8 == "C. type newtype=[string | boolean]") {
        console.log(chalk.bgBlue("correct anwer!"));
    }
    else {
        console.log(chalk.bgCyanBright("wrong answer"));
    }
    ;
    if (a.q9 == "A. To define a set of named constants") {
        console.log(chalk.bgBlue("correct anwer!"));
    }
    else {
        console.log(chalk.bgCyanBright("wrong answer"));
    }
    ;
    if (a.q10 == "B. npm install -g typescript") {
        console.log(chalk.bgBlue("correct anwer!"));
    }
    else {
        console.log(chalk.bgCyanBright("wrong answer"));
    }
    ;
    let again = await inquirer.prompt([{
            type: "confirm",
            name: "more",
            message: "do you want to try again?",
            default: false,
        }]);
    if (!again.more) {
        loop = false;
        console.log("!!! THANK YOU FOR ATTEMPTING QUIZ !!");
    }
    ;
}

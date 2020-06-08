var inquirer = require("inquirer");
var axios = require("axios");
var fs = require("fs");

// array of questions for user
const questions = [
  inquirer.prompt([
    {
      type: "input",
      message: "Enter your github name",
      name: "UserName",
    },
    {
      type: "input",
      message: "Enter title of your project",
      name: "Title",
    },
    {
      type: "input",
      message: "Provide a description of your project",
      name: "Description",
    },
    // {
    //   type: "input",
    //   message: "List a Table of Contents for you project",
    //   name: "Table of Contents",
    // },
    {
      type: "input",
      message: "Provide installation method",
      name: "Installation",
    },
    {
      type: "input",
      message: "How will this project be utilized?",
      name: "Usage",
    },
    {
      type: "list",
      message: "Which licenses does this project use?",
      name: "License",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
      ],
    },
    // {
    //   type: "confirm",
    //   message: "Were there others who have contributed to this project?",
    //   name: "Contribute",
    // },
    {
      type: "input",
      message:
        "If there are any additional contributors on this project, provide their names",
      name: "Contributors",
    },
    {
      type: "input",
      message: "Description of tests performed on this project",
      name: "Tests",
    },
    // {
    //   type: "input",
    //   message: "FAQ",
    //   name: "Questions",
    // },
  ]),
];

// function to write README file
  fs.writeFile(
    "README.md",
    `
  `,
    function (error) {
      if (error) {
        return console.log(error);
      }
      console.log("file saved");
    }
  );
}

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();

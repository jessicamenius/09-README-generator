var inquirer = require("inquirer");
var axios = require("axios");
var fs = require("fs");

// array of questions for user
inquirer.prompt([
  {
    type: "input",
    message: "Enter your github name",
    name: "UserName",
  },
  {
    type: "input",
    message: "Enter your email address",
    name: "Email",
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
      "None",
    ],
  },
  {
    type: "input",
    message:
      "If there are any additional contributors on this project, provide their names. If none, enter N/A",
    name: "Contributors",
  },
  {
    type: "input",
    message: "Description of tests performed on this project",
    name: "Tests",
  },
  {
    type: "input",
    message: "For more information, please contact, ${Email}",
    name: "Questions",
  },
]).then(function(res){
console.log(
  res.Title,
  res.Description,
  res.Installation,
  res.Usage,
  res.Contributors,
  res.License,
  res.Tests,
  res.Questions,
);
});

// function to write README file
fs.writeFile(
"README.md",
` README project ${Title}

## Table of Contents:

- Description
- Installation
- Usage
- License
- Contributions
- Tests
- Questions

## Project Description

${Description}

## Installation

```${Installation}```
  
  ## Usage
  
  To run the program, in command line, enter
  
  ```
  node index.js
  ```
  
  and complete the questions as prompted.
  `,
  function (error) {
    if (error) {
      return console.log(error);
    }
    console.log("file saved");
  }
);

// // function to initialize program
// function init() {
// }

// // function call to initialize program
// init();

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
inquirer.prompt
const questions = [
  {
    type: 'input',
    message: 'Please provide a title for your project!',
    name: 'Title',
  },
  {
    type: 'input',
    message: 'Description',
    name: 'Description',
  },
 // {
 //   type: 'list',
 //   message: 'Table of Contents: ',
 //   name: 'Table of Contents',
 //   choices: ['Installation','Usage','License','Contributing','Tests', 'Questions'],
 // },
  {
    type: 'input',
    message: 'Installation: ',
    name: 'Installation',
  },
  {
    type: 'input',
    message: 'Usage',
    name: 'Usage',
  },
  {
    type: 'list',
    message: 'Please select a license',
    name: 'License',
    choices: ['None', 'Apache 2.0', 'MIT', 'Boost Software License 1.0'],
    validate: licenseInput = function () {
      if (licenseInput) {
        return true;
      } else {
        console.log('Please make a selection')
        return false;
      }
    }
  },
  {
    type: 'Input',
    message: 'Contribution',
    name: 'Contribution',
  },
  {
    type: 'Input',
    message: 'Tests',
    name: 'Tests',
  },
  {
    type: 'Input',
    message: 'Questions',
    name: 'Questions',
  },
]
// TODO: Create a function to write README file
const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true
      });
    });
  });
};
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (answer) {
      console.log(answer);
      let fileContent = generateMarkdown(questions,answer);
      writeToFile(fileContent)
    });
}

// Function call to initialize app
init();

module.exports = questions;
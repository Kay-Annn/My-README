// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
//const questions = [];
inquirer
.prompt([
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
      {
        type: 'Input',
        message: 'Table of Contents: ',
        name: 'Table of Contents',
      },
      {
        type: 'Input',
        message: 'Installation: ',
        name: 'Installation',
      },
      {
        type: 'Input',
        message: 'Usage',
        name: 'Usage',
      },
      {
        type: 'Input',
        message: 'License',
        name: 'License',
      },
      {
        type: 'Input',
        message: 'Contributing',
        name: 'Contributing',
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
    ])



// TODO: Create a function to write README file
function writeToFile(README.md, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

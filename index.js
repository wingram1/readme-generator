// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project: ',
        validate: input => {
            if (input) {
            return true;
            } else {
            console.log("Please enter a title (Required!): ");
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project (Required!): ',
        validate: input => {
        if (input) {
            return true;
        } else {
            console.log("Please enter a title!");
            return false;
        }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions for examples of use: '
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter any contributions (collaborators, use of third-party software, followed any tutorials, etc.): '
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to add?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err)
                // if error, reject
                if (err) {
                    reject(err);
                    return;
                }

                // if no error, resolve and send data to generateMarkdown
                resolve({
                    ok: true,
                    message: 'File created!'
                })
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(data => {
        console.log(data);
        generateMarkdown(data);
    })
    .then(writeToFile('./dist/README.md', data))
    .catch(err => {
        console.log(err)
    });

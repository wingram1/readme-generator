// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown} = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project (Required!): ',
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
        message: 'Enter installation instructions: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter text for an examples of use section: ',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter text for a  contributions section (collaborators, use of third-party software, tutorials used, etc.): ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license type best fits your project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    //github username for a contact section
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter a title!");
                return false;
            }
        }
    },
    // email for a contact section
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter a title!");
                return false;
            }
        }
    }
];

const licenseQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your full name to be displayed in the license section'
    },
    {
        type: 'input',
        name: 'year',
        message: 'Enter the year to be displayed in the license section'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            // if error, reject
            if (err) {
                reject(err);
                return "Oops! No File created.";
            }

            // if no error, resolve and send data to generateMarkdown
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// Function to prompt additional information for license
const licensePrompt = existingData => {
    existingData.licenseData = [];

    if (existingData.license != 'None') {
        return inquirer.prompt(licenseQuestions)
            .then(licenseData => {
                console.log(existingData +"=============="+ licenseData)
                existingData.licenseData.push(licenseData);
                return existingData;
            })
    } else {
        return existingData;
    }
}

// Function call to initialize app
init()
    .then(licensePrompt)
    .then(data => {
        console.log(data);
        return generateMarkdown(data);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return writeToFile('./dist/README.md', writeFileResponse);
    })
    .catch(err => {
        console.log(err)
    });

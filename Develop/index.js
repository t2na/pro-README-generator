// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const  generateMarkdown  = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your document?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your document',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the title of your document?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the title of your document?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is the title of your document?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What is the title of your document?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What is the title of your document?',
    },
    {
        type: 'input',
        name: 'contactMe',
        message: 'What is the title of your document?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the title of your document?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the title of your document?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync('./output/' + fileName + '.md', data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        const markdown = generateMarkdown(answers);
        console.log(markdown);
        writeToFile('README', markdown);
    })
}

// Function call to initialize app
init();

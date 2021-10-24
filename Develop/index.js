// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
function questions(){
    return inquirer
    .prompt([
      {
        name: 'name',
        message: 'What is your name?',
        type: 'input',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to provide your name!');
            return false;
          }
        }
      },
      {
        name: 'username',
        message: 'What is your Github username?',
        type: 'input',
        validate: userNameInput => {
          if (userNameInput) {
            return true;
          } else {
            console.log('You need to provide your Github username!');
            return false;
          }
        }
      },
      {
        name: 'email',
        message: 'What is your email?',
        type: 'input',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('You need to provide your email!');
            return false;
          }
        }
      },
      {
        name: 'repo',
        message: 'What is the link to the repository?',
        type: 'input',
        validate: repoInput => {
          if (repoInput) {
            return true;
          } else {
            console.log('You need to provide a link to the repository!');
            return false;
          }
        }
      },
      {
        name: 'deployed',
        message: 'What is the URL of the deployed application?',
        type: 'input',
        validate: deployedInput => {
          if (deployedInput) {
            return true;
          } else {
            console.log('You need to provide a link to the deployed application!');
            return false;
          }
        }
      },
      {
        name: 'title',
        message: 'What is the title of this application?',
        type: 'input',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('You need to enter a title for the project!');
            return false;
          }
        }
      },
      {
        name: 'description',
        message: 'Please write a short description of the application?',
        type: 'input',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a description of the application!');
            return false;
          }
        }
      },
      {
        name: 'license',
        message: 'Select a license for this application:',
        type: 'list',
        choices: ["Academic Free License", "Apache License", "Artistic License", "BSD 2-Clause License", "BSD 3-Clause License", "Eclipse Public License", "ISC License", "MIT License", "Mozilla Public License", "Open Software License", "None"],
        validate: deployedInput => {
         if (deployedInput) {
           return true;
         } else {
           console.log('If no license was used please select None. Otherwise please select a license');
           return false;
         }
       }
      },
      {
        name: 'version',
        message: 'What version is this application?',
        type: 'input',
        validate: versionInput => {
          if (versionInput) {
            return true;
          } else {
            console.log('You need to provide the version of the application!');
            return false;
          }
        }
      },
      {
        name: 'install',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
        type: 'input',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('You need to provide information on how to install the application!');
            return false;
          }
        }
      },
      {
        name: 'test',
        message: 'How can other developers test this application?',
        default: 'npm test',
        type: 'input',
        validate: testingInput => {
          if (testingInput) {
            return true;
          } else {
            console.log('You need to provide information on how the application can be tested!');
            return false;
          }
        }
      },
      {
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
        type: 'input',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You need to provide information on how to use the repo!');
            return false;
          }
        }
      },
      {
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
        type: 'input',
        validate: contributingInput => {
          if (contributingInput) {
            return true;
          } else {
            console.log('You need to provide information on how other users can contribute to this repo!');
            return false;
          }
        }
      },
      {
        name: 'fileName',
        message: 'What do you want to call this readme?',
        type: 'input',
        validate: fileNameInput => {
          if (fileNameInput) {
            return true;
          } else {
            console.log('You need to enter a file name!');
            return false;
          }
        }
      },
])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, err => {
      if (err) {
          return console.error(err);
      } else {
       console.log(`${fileName}.md has been generated.`)
      };
    });
}

// TODO: Create a function to initialize app
async function init() {
    let userInput = await questions();
    writeToFile((userInput.fileName),(generateMarkdown(userInput)));
}

// Function call to initialize app
init();

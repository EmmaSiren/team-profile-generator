const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const askAllEmployees = require('./questions');


function createTeam() {
  function managerCard() {
    console.log('Please enter Manager information.');
    inquirer.prompt(askAllEmployees).then((answers) => {
      inquirer.prompt([
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is their office number?',
        },
      ]).then((managerOfficeNumber) => {
        const manager = new Manager(
          answers.name,
          answers.employeeId,
          answers.email,
          managerOfficeNumber.officeNumber,
        );
        console.log(manager);
        continueTeam();
      });
    });
  };

  function continueTeam() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'addEmployees',
        message: "Would you like to add another employee?",
        choices: ['Add Engineer', 'Add Intern', 'No'],
      },
    ]).then((selection) => {
      if (selection.addEmployees === 'Add Engineer') {
        engineerCard();
      } else if (selection.addEmployees === 'Add Intern') {
        internCard();
      } else {
        createHTML();
      };
    });

    function engineerCard() {
      console.log('Please enter Engineer information.');
      inquirer.prompt(askAllEmployees).then((answers) => {
        inquirer.prompt([
          {
            type: 'input',
            name: 'username',
            message: 'What is their Github username?',
          },
        ]).then((engineerGithub) => {
          const engineer = new Engineer(
            answers.name,
            answers.employeeId,
            answers.email,
            engineerGithub.username,
          );

          console.log(engineer);
            // continueTeam();
          
        });
      });
    };
  };


// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'internSchool',
//     message: `What school does ${Intern} go to?`,
//   },
// ]);
managerCard();
};

createTeam();

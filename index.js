const inquirer = require('inquierer');
const fs = required('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Questions = require('./questions');


function createTeam() {
  function managerCard() {
    console.log('Please enter Manager information.');
    inquirer.prompt(askAllEmployees).then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.officeNumber
      );
      continueTeam();
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

      async () => {
        const inq1 = await inquirer.prompt([askAllEmployees]);
        const inq2 = await inquirer.prompt([
          {
          type: 'input',
          name: 'engineerGithub',
          message: 'What is their Github username?',
          },
        ]);

        const engineer = new Engineer(
          inq1.name,
          inq1.employeeId,
          inq1.email,
          inq1.officeNumber,
          inq2.github,
        );
        
      };
      // inquirer.prompt(askAllEmployees).then((answers) => {
      //   const engineer = new Engineer(
      //     answers.name,
      //     answers.employeeId,
      //     answers.email,
      //     answers.officeNumber
      //   );
      //   continueTeam();
      // });
    };

};

// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'engineerName',
//     message: `What is the Engineer's name?`,
//   },
//   {
//     type: 'input',
//     name: 'engineerGithub',
//     message: 'What is their Github username?',
//   },
// ]);

// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'internSchool',
//     message: `What school does ${Intern} go to?`,
//   },
// ]);

};
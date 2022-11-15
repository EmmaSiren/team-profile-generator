const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const team = [];

const askAllEmployees = require('./questions');
const html = require('./src/generateHTML');
const path = require('path');
const outputPath = path.join(__dirname, 'dist');
const newFile = path.join(outputPath, 'team-profile.html');



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
        team.push(manager);
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
          
          team.push(engineer);
            console.log(engineer);
          continueTeam();
        });
      });
    };
  };

  function internCard() {
    console.log('Please enter Intern information.');
    inquirer.prompt(askAllEmployees).then((answers) => {
      inquirer.prompt([
        {
          type: 'input',
          name: 'school',
          message: 'What school do they go to?',
        },
      ]).then((internSchool) => {
        const intern = new Intern(
          answers.name,
          answers.employeeId,
          answers.email,
          internSchool.school,
        );
        team.push(intern);
          console.log(intern);
        continueTeam();
      });
    });
  };

  function createHTML() {
    fs.writeFile(newFile, html(team), 'utf-8', (err) => {
      err ? console.log(err) : console.log('Done!');
    });
    // console.log(html(team));
  };

managerCard();
};

createTeam();

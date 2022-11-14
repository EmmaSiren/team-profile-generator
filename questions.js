const askAllEmployees = [
    {
      type: 'input',
      name: 'name',
      message: `What is the employee's name?`,
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'What is their employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email address?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is their office number?',
    }
];

module.exports = Questions;
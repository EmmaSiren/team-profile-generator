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
    }
];

module.exports = askAllEmployees;
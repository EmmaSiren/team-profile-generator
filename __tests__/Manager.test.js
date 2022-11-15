const Manager = require('../lib/manager');

describe('officeNumber', () => {
  it('should return a new "Manager" object office number.', () => {
    const officeNumber = 1;
    const obj = new Manager('', '', '', officeNumber);

    expect(obj.officeNumber).toEqual(officeNumber);
  });
});

describe('getRole', () => {
  it('should return "Manager".', () => {
    const role = 'Manager';
    const obj = new Manager();

    expect(obj.getRole()).toEqual(role);
  })
});

describe('getOfficeNumber', () => {
  it('should return a new "Manager" object office number through getOfficeNumber method.', () => {
    const officeNumber = 1;
    const obj = new Manager('', '', '', officeNumber);

    expect(obj.getOfficeNumber()).toEqual(officeNumber);
  })
});
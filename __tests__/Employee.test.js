const Employee = require('../lib/employee');

describe('name', () => {
  it('should return a new "Employee" object name.', () => {
    const name = 'Joe';
    const obj = new Employee(name);

    expect(obj.name).toEqual(name);
  });
});

describe('id', () => {
  it('should return a new "Employee" object id.', () => {
    const id = 1;
    const obj = new Employee('', id);

    expect(obj.id).toEqual(id);
  })
});

describe('email', () => {
  it('should return a new "Employee" object email.', () => {
    const email = 'employee@email.com';
    const obj = new Employee('', '', email);

    expect(obj.email).toEqual(email);
  })
});

describe('getName', () => {
  it('should return a new "Employee" object name through getName method.', () => {
    const name = 'Bob';
    const obj = new Employee(name);

    expect(obj.getName()).toEqual(name);
  })
});

describe('getId', () => {
  it('should return a new "Employee" object id through getId method.', () => {
    const id = 1;
    const obj = new Employee('', id);

    expect(obj.getId()).toEqual(id);
  })
});

describe('getEmail', () => {
  it('should return a new "Employee" object email through getEmail method.', () => {
    const email = 'employee@email.com';
    const obj = new Employee('', '', email);

    expect(obj.getEmail()).toEqual(email);
  })
});


describe('getRole', () => {
  it('should return "Employee".', () => {
    const role = 'Employee';
    const obj = new Employee();
    expect(obj.getRole()).toEqual(role);
  })
});
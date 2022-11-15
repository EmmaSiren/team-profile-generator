const Intern = require('../lib/intern');

describe('school', () => {
  it('should return a new "Intern" object school.', () => {
    const school = 'College';
    const obj = new Intern('', '', '', school);

    expect(obj.school).toEqual(school);
  });
});

describe('getRole', () => {
  it('should return "Intern".', () => {
    const role = 'Intern';
    const obj = new Intern();

    expect(obj.getRole()).toEqual(role);
  })
});

describe('getSchool', () => {
  it('should return a new "Intern" object school through getSchool method.', () => {
    const school = 'College';
    const obj = new Intern('', '', '', school);
    
    expect(obj.getSchool()).toEqual(school);
  })
});
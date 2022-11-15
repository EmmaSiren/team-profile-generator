const Engineer = require('../lib/engineer');

describe('github', () => {
  it('should return a new "Engineer" object github.', () => {
    const github = 'username';
    const obj = new Engineer('', '', '', github);

    expect(obj.github).toEqual(github);
  });
});

describe('getRole', () => {
  it('should return "Engineer".', () => {
    const role = 'Engineer';
    const obj = new Engineer();

    expect(obj.getRole()).toEqual(role);
  })
});

describe('getGithub', () => {
  it('should return a new "Engineer" object github through getGithub method.', () => {
    const github = 'username';
    const obj = new Engineer('', '', '', github);
    
    expect(obj.getGithub()).toEqual(github);
  })
});
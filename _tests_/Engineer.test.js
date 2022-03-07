const Engineer = require('../lib/Engineer');
 
test("Engineer should be created.", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
});

test("Engineer should get name.", () => {
    const name = "Joshua";
    const engineer = new Engineer(name);
    expect(engineer.name).toBe(name);
});

test("Engineer should get ID value.", () => {
    const id = 1;
    const engineer = new Engineer("Joshua", id);
    expect(engineer.id).toBe(id);
});

test("Engineer should get Email.", () => {
    const email = "jjellisDev@gmail.com";
    const engineer = new Engineer("Joshua", 1, email);
    expect(engineer.email).toBe(email);
});

test("Engineer should get name from getName().", () => {
    const name = "Joshua";
    const engineer = new Engineer(name);
    expect(engineer.getName()).toBe(name);
});

test("Engineer should get ID from getID().", () => {
    const id = 1;
    const engineer = new Engineer("Joshua", id);
    expect(engineer.getId()).toBe(id);
});

test("Engineer should get Email from getEmail().", () => {
    const email = "jjellisDev@gmail";
    const engineer = new Engineer("Joshua", 1, email);
    expect(engineer.getEmail()).toBe(email);
});

test("Engineer should get Role from getRole().", () => {
    const role = "Engineer";
    const engineer = new Engineer("Joshua", 1);
    expect(engineer.getRole()).toBe(role);
});

//ENGINEER SPECIAL TESTS//

//little github joke below :)
test("Engineer should git github from gitGithub()", () => {
    const github = "Jaaarsh";
    const engineer = new Engineer("Joshua", 1, "jjellisDev@gmail.com", "Jaaarsh");
    expect(engineer.getGithub()).toBe(github);
});
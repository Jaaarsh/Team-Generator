const Intern = require('../lib/Intern');
 
test("Intern should be created.", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});

test("Intern should get name.", () => {
    const name = "Joshua";
    const intern = new Intern(name);
    expect(intern.name).toBe(name);
});

test("Intern should get ID value.", () => {
    const id = 1;
    const intern = new Intern("Joshua", id);
    expect(intern.id).toBe(id);
});

test("Intern should get Email.", () => {
    const email = "jjellisDev@gmail.com";
    const intern = new Intern("Joshua", 1, email);
    expect(intern.email).toBe(email);
});

test("Intern should get name from getName().", () => {
    const name = "Joshua";
    const intern = new Intern(name);
    expect(intern.getName()).toBe(name);
});

test("Intern should get ID from getID().", () => {
    const id = 1;
    const intern = new Intern("Joshua", id);
    expect(intern.getId()).toBe(id);
});

test("Intern should get Email from getEmail().", () => {
    const email = "jjellisDev@gmail";
    const intern = new Intern("Joshua", 1, email);
    expect(intern.getEmail()).toBe(email);
});

test("Intern should get Role from getRole().", () => {
    const role = "Intern";
    const intern = new Intern("Joshua", 1);
    expect(intern.getRole()).toBe(role);
});

//SPECIAL INTERN TESTS//

test("Intern should get school from getSchool().", () => {
    const school = "UNH Coding Bootcamp";
    const intern = new Intern("Joshua", 1 , "jjellisDev@gmail.com", "UNH Coding Bootcamp");
    expect(intern.getSchool()).toBe(school);
})
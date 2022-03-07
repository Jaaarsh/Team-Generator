const Manager = require('../lib/Manager');
 
test("Manager should be created.", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});

test("Manager should get name.", () => {
    const name = "Joshua";
    const manager = new Manager(name);
    expect(manager.name).toBe(name);
});

test("Manager should get ID value.", () => {
    const id = 1;
    const manager = new Manager("Joshua", id);
    expect(manager.id).toBe(id);
});

test("Manager should get Email.", () => {
    const email = "jjellisDev@gmail.com";
    const manager = new Manager("Joshua", 1, email);
    expect(manager.email).toBe(email);
});

test("Manager should get name from getName().", () => {
    const name = "Joshua";
    const manager = new Manager(name);
    expect(manager.getName()).toBe(name);
});

test("Manager should get ID from getID().", () => {
    const id = 1;
    const manager = new Manager("Joshua", id);
    expect(manager.getId()).toBe(id);
});

test("Manager should get Email from getEmail().", () => {
    const email = "jjellisDev@gmail";
    const manager = new Manager("Joshua", 1, email);
    expect(manager.getEmail()).toBe(email);
});

test("Manager should get Role from getRole().", () => {
    const role = "Manager";
    const manager = new Manager("Joshua", 1);
    expect(manager.getRole()).toBe(role);
});

//SPECIAL MANAGER TESTS//

test("Manager should get Office Number from officeNumber().", () => {
    const officeNumber = 555-555-5555;
    const manager = new Manager("Joshua", 1, "jjellisDev@gmail.com", 555-555-5555);
    expect(manager.getOfficeNumber()).toBe(officeNumber)
});
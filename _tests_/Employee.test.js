const Employee = require('../lib/Employee');
 
test("Employee should be created.", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Employee should get name.", () => {
    const name = "Joshua";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Employee should get ID value.", () => {
    const id = 1;
    const employee = new Employee("Joshua", id);
    expect(employee.id).toBe(id);
});

test("Employee should get Email.", () => {
    const email = "jjellisDev@gmail.com";
    const employee = new Employee("Joshua", 1, email);
    expect(employee.email).toBe(email);
});

test("Employee should get name from getName().", () => {
    const name = "Joshua";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("Employee should get ID from getID().", () => {
    const id = 1;
    const employee = new Employee("Joshua", id);
    expect(employee.getId()).toBe(id);
});

test("Employee should get Email from getEmail().", () => {
    const email = "jjellisDev@gmail";
    const employee = new Employee("Joshua", 1, email);
    expect(employee.getEmail()).toBe(email);
});

test("Employee should get Role from getRole().", () => {
    const role = "Employee";
    const employee = new Employee("Joshua", 1);
    expect(employee.getRole()).toBe(role);
});
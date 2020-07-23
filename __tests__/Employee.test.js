const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    // [new] keyword creates new objects (Employee)
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
});

test('set a name via the constructor function', () => {
    const name = 'Jason Ahmed';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('test for id via the constructor', () => {
    const id = 1;
    const employee = new Employee(id);
    expect(employee.id).toBe(id);
});

test('test for the email constructor function', () => {
    const email = 'jason_ahmed@yahoo.com';
    const employee = new Employee(email);
    expect(employee.email).toBe(email);
});


// Test for the functions:
test('Test getName function', () => {
    const name = 'Jason Ahmed';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test('Test getId function', () => {
    const id = 1;
    const employee = new Employee(id);
    expect(employee.getId()).toBe(id);
});

test('Test getEmail function', () => {
    const email = 'jason_ahmed@yahoo.com';
    const employee = new Employee(email);
    expect(employee.getEmail()).toBe(email);
});


// Test for the getRole function:
test('Test the getRole function', () => {
    const testValue = 'Employee';
    const employee = new Employee('Jason Ahmed', 1, 'jason_ahmed@yahoo.com');
    expect(employee.getRole()).toBe(testValue);
});
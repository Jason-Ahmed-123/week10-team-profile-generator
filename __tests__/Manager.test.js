const Manager = require("../lib/Manager.js");
const Employee = require("../lib/Employee.js");

test("set office number using the constructor argument", () => {
    const testValue = 101;
    const e = new Manager("Jason", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return Manager", () => {
    const testValue = "Manager";
    const e = new Manager("Jason", 1, "test@test.com", 101);
    expect(e.getRole()).toBe(testValue);
});

test("get office number using getOffice()", () => {
    const testValue = 101;
    const e = new Manager("Jason", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});
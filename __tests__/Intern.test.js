const Intern = require("../lib/Intern.js");

test("Can set school using constructor function", () => {
    const testValue = "UKC";
    const e = new Intern("Jason", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return Intern", () => {
    const testValue = "Intern";
    const e = new Intern("Jason", 1, "test@test.com", "UCLA");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "UKC";
    const e = new Intern("Jason", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});
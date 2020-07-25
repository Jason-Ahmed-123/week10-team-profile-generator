const Engineer = require("../lib/Engineer.js");

test("Set GitHub account using the constructor function", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Jason", 1, "test@test.com", testValue);
    expect(e.github.toBe(testValue);
});

test("getRole() should return Engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("Jason", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Jason", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});
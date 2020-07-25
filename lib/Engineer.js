// Am I correct in requiring ./Employee.js?
const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call parent constructor here:
        super(name, id, email);
        this.github = github;
    }

    // Create functions here for getRole and getOfficeNumber (in Employee.js)
    getGithub() {
        return this.github;
    };
    getRole() {
        return 'Engineer';
    };

};

module.exports = Engineer;
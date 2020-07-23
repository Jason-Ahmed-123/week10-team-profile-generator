// Am I correct in requiring ./Employee.js?
const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // call parent constructor here:
        super(name, id, email);
        this.school = school;
    }

    // Create functions here for getRole and getOfficeNumber (in Employee.js)
    school() {
        return this.school;
    };
    getRole() {
        return 'Intern';
    };

};
// Am I correct in requiring ./Employee.js?
const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // call parent constructor here:
        super(name, id, email);
        this.school = school;
    }

    // Create functions here for getRole and getSchool (in Employee.js)
    getSchool() {
        return this.school;
    };
    getRole() {
        return 'Intern';
    };

};

module.exports = Intern;




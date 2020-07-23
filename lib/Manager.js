const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // call parent constructor here:
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // Create functions here for getRole and getOfficeNumber (like I did in Employee.js)
};
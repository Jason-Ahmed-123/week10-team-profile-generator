// A check to make sure that this file works:
console.log('Hello Node!');



// Define inquirer:
const inquirer = require('inquirer');

const fs = require('fs');

const path = require('path');


////

const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");


function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "What is your name?",
        name: "name"
    }, {
        type: "input",
        message: "What is your ID?",
        name: "id"
    }, {
        type: "input",
        message: "What is your email?",
        name: "email"
    }, {
        type: "list",
        message: "What is your title?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
    }];

    return inquirer
        .prompt(promptArray);
}

function runInquirerManager() {
    const promptArray = [{
        type: "input",
        message: "What is your office number?",
        name: "office number"
    }];

    return inquirer
        .prompt(promptArray);
}

function runInquirerEngineer() {
    const promptArray = [{
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    }];

    return inquirer
        .prompt(promptArray);
}

function runInquirerIntern() {
    const promptArray = [{
        type: "input",
        message: "What school did you attend?",
        name: "school"
    }];

    return inquirer
        .prompt(promptArray);
}



async function run() {
    let employeeArray = [];
    const maxTimes = 4;
    for (i = 0; i < maxTimes; i++) {
        const promise = new Promise((resolve, reject) => {
            runInquirer()
                .then(function({ name, id, email, title }) {

                    if (title === "Manager") {
                        runInquirerManager().then(function(officeNumber) {
                            this.employee = new Manager(name, id, email, officeNumber);
                            console.log(officeNumber);
                            employeeArray.push(employee);
                            resolve("done");
                        });

                    } else if (title === "Engineer") {
                        runInquirerEngineer().then(function({ github }) {
                            this.employee = new Engineer(name, id, email, github);
                            console.log(github);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    } else if (title === "Intern") {
                        runInquirerIntern().then(function({ school }) {
                            this.employee = new Intern(name, id, email, school);
                            console.log(school);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    }

                }).catch(function(err) {
                    console.log("There was an error.");
                    console.log(err);
                });
        });

        const result = await promise;
        console.log(result);
    }


// How do I write the script that generates the final webpage, with all the fields populated???

    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Team Profile</title>
    <style>
        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        
        .card {
            padding: 20px;
            border-radius: 6px;
            background-color: white;
            color: powderblue;
            margin: 20px;
        }
        
        .text {
            padding: 20px;
            border-radius: 6px;
            background-color: white;
            color: black;
            margin: 20px;
        }
        
        .col {
            flex: 1;
            text-align: center;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
        <span class="navbar-brand mb-0 h1"><h1>My Team</h1></span>
    </nav>
    <div class="row">
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Jason Ahmed</h4>
            </div>
            <div class="col card-header">
                <h4>Intern</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 2</li>
                <li class="list-group-item">Email: jason_ahmed@yahoo.com</li>
                <li class="list-group-item">School: UKC</li>
            </ul>
        </div>
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Lee Adama</h4>
            </div>
            <div class="col card-header">
                <h4>Manager</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 4</li>
                <li class="list-group-item">Email: ladama@test.com</li>
                <li class="list-group-item">Office Number: 101</li>
            </ul>
        </div>
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Kara Thrace</h4>
            </div>
            <div class="col card-header">
                <h4>Intern</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 6</li>
                <li class="list-group-item">Email: kthrace@test.com</li>
                <li class="list-group-item">School: Caprica U</li>
            </ul>
        </div>
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Gaius Baltar</h4>
            </div>
            <div class="col card-header">
                <h4>Engineer</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 8</li>
                <li class="list-group-item">Email: gbaltar@test.com</li>
                <li class="list-group-item">School: Caprica U</li>
            </ul>
        </div>
    </div>
</body>
</html>`

    for (let i in employeeArray) {
        employee = employeeArray[i];
        let cardInfo = {
            name: employee.getName(),
            role: employee.getRole(),
            id: employee.getId(),
            email: employee.getEmail()
        }

        if (employee.getRole() == "Engineer") {
            cardInfo.github = employee.getGithub();
        } else if (employee.getRole() == "Manager") {
            cardInfo.officeNumber = employee.getOfficeNumber();
        } else if (employee.getRole() == "Intern") {
            cardInfo.school = employee.getSchool();
        }

        html += getCardHtml(cardInfo);
    }
    
    const fs = require("fs");
    fs.writeFile('newfile.html', html, function(err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}
run()

function getCardHtml(cardInfo) {
    let html = "<div>";
    
    return html;
}

const inquirer = require("inquirer");
const fs = require("fs");

    managerPrompt()
    function managerPrompt() {
        inquirer.prompt([
                {   
                    type: 'input',
                    message: 'What is the Team Managers Name?',
                    name: 'managerName',
                },
                {
                    type: 'input',
                    message: 'What is the Manager id?',
                    name: 'managerId',
                },
                {
                    type: 'input',
                    message: 'What is the Managers Email Address?',
                    name: 'managerEmail',
                },
                {
                    type: 'input',
                    message: 'What is the Managers Office Number?',
                    name: 'managerOffice',
                },
            ])
            .then((answers) => {
                fs.writeFile('./dist/index.html', generateHTML(answers), (err)=>{
                    if(err){
                        console.log(err)
                    }
                })
                console.log(answers)
                engineerPrompt()
            })
    }


    function engineerPrompt() {
        inquirer.prompt(
            {
                type: 'list',
                message: 'Would like to add an Engineer?',
                choices: ['Yes', 'No'],
                name: 'addEngineer',
            },
        ).then(data => {
            if (data.addEngineer == 'Yes') {
                addEngineer()
            } if (data.addEngineer == 'No') {
                internPrompt();
            }
        })
    };

    function internPrompt() {
        inquirer.prompt(
            {
                type: 'list',
                message: 'Would like to add an Intern?',
                choices: ['Yes', 'No'],
                name: 'addIntern',
            },
        ).then(data => {
            if (data.addIntern =='Yes'){
                addIntern()
            }
            if (data.addIntern == 'No')
            { fs.appendFile('./dist/index.html', finishGenerate(), (err)=>{
                if (err){
                    console.log(err)
                } else {
                    console.log('Your Team Profile has been generated!')     
                }
            })
            }
        })
    }

    function addEngineer() {
        inquirer.prompt([
    {
    type: 'input',
    message: 'What is the Engineers Name?',
    name:'name'
    },
    {
    type: 'input',
    message:'What is the Engineers Id?',
    name: 'id'
    },
    {
    type: 'input',
    message: 'What is the Engineers Email?',
    name: 'email',
    },
    {
    type: 'input',
    message: 'What is the Engineers GitHub Username?',
    name:'username'
    }

        ])
        .then((answers) => {
            fs.appendFile('./dist/index.html', generateEngineer(answers), (err) =>{
                if (err){
                    console.log(err)
                }
                engineerPrompt()
            })
        })
    }

    
    function addIntern(){
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the Interns Name?',
                name:'name'
                },
                {
                type: 'input',
                message:'What is the Interns Id?',
                name: 'id'
                },
                {
                type: 'input',
                message: 'What is the Interns Email?',
                name: 'email',
                },
                {
                type: 'input',    
                message: 'What is the School that the Intern attends?',    
                name: 'school'    
                },
        ])
        .then((answers) => {
            fs.appendFile('./dist/index.html', generateIntern(answers), (err) => {
                if(err){
                    console.log(err)
                }
            })
            engineerPrompt()
        })  
    }

    function generateHTML({managerName,managerId,managerEmail,managerOffice}){
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <title>Team Profile Generator</title>
        </head>

        <body>
        <div class="container.fluid">
        <div class="p-3 mb-2 bg-secondary text-white text-center">
        <h1> My Team <h1>
        </div>
        </div>

        <div class="container">
        <div class="row justify-content-around">
        <div class="col-4">
        <div class="card border-dark" style="width: 256.6;">
        <div class="card-body bg-secondary text-white">
        <h5 class="card-title">Manager</h5>
        <h3 class="card-text"> ${managerName}</h3>
        <p class="card-text">ID: ${managerId}</p>
        <p class="card-text">Email: <a href='mailto:${managerEmail}' target='_blank' rel='noopener noreferrer'> ${managerEmail}</a></p>
        <p class="card-text">Office Number: ${managerOffice}</p>
        </div>
        </div> 
        </div>
        `
        }

        function generateEngineer ({name, id, email, username}) {
        return `
        <div class="col-4">
        <div class="card border-dark" style="width: 256.6;">
        <div class="card-body bg-secondary text-white">
        <h5 class="card-title">Engineer</h5>
        <h3 class="card-text"> ${name}</h3>
        <p class="card-text">ID: ${id}</p>
        <p class="card-text">Email: <a href='mailto:${email}' target='_blank' rel='noopener noreferrer'> ${email}</a></p>
        <p class="card-text">GitHub Username: <a href="https://github.com/${username}" target='_blank'> ${username}</a></p>
        </div>
        </div>  
        </div>
        `   
        }

        function generateIntern ({name, id, email, school}){
            return `

            <div class="col-4">
            <div class="card border-dark" style="width: 256.64;">
            <div class="card-body bg-secondary text-white">
            <h5 class="card-title">Intern</h5>
            <h3 class="card-text"> ${name}</h3>
            <p class="card-text">ID: ${id}</p>
            <p class="card-text">Email: <a href='mailto:${email}' target='_blank' rel='noopener noreferrer'> ${email}</a></p>
            <p class="card-text">Attends: ${school}</p>
            </div>
            </div>
            </div>
            </div>
            `
        }

        function finishGenerate(){
            return`
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </body>  
        </html>  
        `
        };
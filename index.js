const inquirer = require('inquirer');
const fs = require('fs');


function init() {
    const questions = [
        {
            type: 'input',
            name: 'acronym',
            message: "Enter your company's acronym (3letters or less)",
            validate(ans) {
                if (ans.length < 4) {
                    return true;
                }

                throw Error('Must be less than 3 chars.')
            },
        },
        // {
        //     type: '',
        //     name: '',
        //     message: '',
        // },
        // {
        //     type: '',
        //     name: '',
        //     message: '',
        // },
        // {
        //     type: '',
        //     name: '',
        //     message: '',
        // },
        // {
        //     type: '',
        //     name: '',
        //     message: '',
        // },
    ]
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data)
        })
}

init();
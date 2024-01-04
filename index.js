const inquirer = require('inquirer');
const fs = require('fs');





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
    {
        type: 'input',
        name: 'textColor',
        message: "What hex color would you like the acronym's text? (6 chars, and without the #)",
        validate(ans) {
            function symbolCheckR(a) {
                var pattern = /[!@#$%^&*(),.?":{}|<>]/;
                if (pattern.test(a)) {
                    return false;
                } else {
                    return true
                }
            }
            if (ans.length == 6 && symbolCheckR(ans)) {
                return true;
            } else {
            throw Error('Must have 6 characters and no symbols including the #');
            }
        },
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like the logo to have?',
        choices: [
            'Square',
            'Circle',
            'Triangle',
        ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "What hex color would you like the acronym's text? (6 chars, and without the #)",
        validate(ans) {
            function symbolCheckR(a) {
                var pattern = /[!@#$%^&*(),.?":{}|<>]/;
                if (pattern.test(a)) {
                    return false;
                } else {
                    return true
                }
            }
            if (ans.length == 6 && symbolCheckR(ans)) {
                return true;
            } else {
            throw Error('Must have 6 characters and no symbols including the #');
            }
        },
    }
]

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            // TODO: make proper svg file and write it
            console.log(data)
        })
}

// console.log(questions[1].validate);
init();

module.exports = questions
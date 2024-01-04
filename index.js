const inquirer = require('inquirer');
const fs = require('fs');
const { log } = require('console');





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
            // credit for the regex tests goes to the xpert learning assistant cause regex hard
            function symbolCheckR(a) {
                var pattern = /[!@#$%^&*(),.?":{}|<>]/;
                if (pattern.test(a)) {
                    return false;
                } else {
                    return true
                }
            }
            function hexcodeCheckR(h) {
                const pattern = /^[a-fA-F0-9]{6}$/;
                return pattern.test(h);
            }
            if (ans.length == 6 && symbolCheckR(ans)) {
                if (hexcodeCheckR(ans)) {
                    return true;
                } else {
                    throw Error('must be a valid hexcode');
                }
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
            function hexcodeCheckR(h) {
                const pattern = /^[a-fA-F0-9]{6}$/;
                return pattern.test(h);
            }
            if (ans.length == 6 && symbolCheckR(ans)) {
                if (hexcodeCheckR(ans)) {
                    return true;
                } else {
                    throw Error('must be a valid hexcode');
                }
            } else {
                throw Error('Must have 6 characters and no symbols including the #');
            }
        },
    }
]
class Circle {
    constructor(acro, aC, shapeC) {
        this.acro = acro;
        this.aC = aC;
        this.shapeC = shapeC;
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="#${shapeC}" />
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="#${aC}">${acro.toUpperCase()}</text>
</svg>`;
    }
}
class Square {
    constructor(acro, aC, shapeC) {
        this.acro = acro;
        this.aC = aC;
        this.shapeC = shapeC;
    }
    render() {
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="200" fill="#${shapeC}" />
    <text x="125" y="140" font-size="50" text-anchor="middle" fill="#${aC}">${acro.toUpperCase()}</text>
</svg>`;
    }
}
class Triangle {
    constructor(acro, aC, shapeC) {
        this.acro = acro;
        this.aC = aC;
        this.shapeC = shapeC;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${shapeC}" />
    <text x="150" y="140" font-size="40" text-anchor="middle" fill="#${aC}">${acro.toUpperCase()}</text>
</svg>`
    }
}




function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data)
            console.log(data.shape)
            var sType = data.shape;
            let logo = new [sType](data.acronym, data.textColor, data.shapeColor);
            // DO IT THE HARD WAY I GUESS WITH A BILLION IF STATEMENTS
            console.log(logo.render());
            // TODO: make proper svg file and write it


        })
}

// console.log(Circle('cum', 'ff0666', '000000'));
init();

module.exports = questions
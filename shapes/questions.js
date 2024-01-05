// list of questions for inquierer to use
const questions = [
    {
        type: 'input',
        name: 'acronym',
        message: "Enter your company's acronym (3 letters or less)",
        // checks if chars entered are 3 or less
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
        // checks if entered input has any symbols or is an invalid hex code
        validate(ans) {
            function symbolCheckR(a) {
                var pattern = /[!@#$%^&*(),.?":{}|<>]/;
                if (pattern.test(a)) {
                    return false;
                } else {
                    return true;
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
        // checks if entered input has any symbols or is an invalid hex code
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


// exports the questions for jest testing
module.exports = questions
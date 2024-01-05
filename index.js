const inquirer = require('inquirer');
const fs = require('fs');

// modular classes to render different shapes, could've been far easier and more effecient to just make them short functions but making them separate classes is what was asked
const Circle = require('./shapes/circle');
const Square = require('./shapes/square');
const Triangle = require('./shapes/triangle')

const questions = require('./shapes/questions')




// initializes inquirer
function init() {
    inquirer
    // takes questions and prompts the user for input
        .prompt(questions)
        .then((data) => {
            // takes the data, obtains the shape, discerns what class should be called (probably coulda done a switch case but too late now)
            var sType = data.shape;
            let logo;
            if (sType == "Circle"){
                logo = new Circle(data.acronym, data.textColor, data.shapeColor)
            }else if (sType == "Square"){
                logo = new Square(data.acronym, data.textColor, data.shapeColor)
            } else if (sType == "Triangle"){
                logo = new Triangle(data.acronym, data.textColor, data.shapeColor)
            } else {
                return "error";
            }
            // takes the string from the shape render function and writes it to a svg file with the acronym's name
            fs.writeFile(`./output/${data.acronym.toUpperCase()}.svg`, logo.render(), (err) => 
                err ? console.log(err) : console.log('Hey it actually worked! created file will be in the "output" folder')
            );
        });
};

// initiates the function
init();
const questions = require('../shapes/questions');
const inquirer = require('inquirer');




describe('LogoMakR', () => {
    describe("acronym", () => {
        it('should return false when answer is wrong', () => {
            let input = "oreo";
            expect(questions[0].validate(input)).toBe(Error);
        });
    });
    describe("textColor", () => {
        it('should return true when answer meets requirements', () => {
            let input = "ff0666";
            expect(questions[1].validate(input)).toBe(true);
        });
    });

    describe("shapeColor", () => {
        it('should return true when answer meets requirement', () => {
            let input = "ff0666";
            expect(questions[3].validate(input)).toBe(true);
        });
    });
});
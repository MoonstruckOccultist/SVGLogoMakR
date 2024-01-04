const questions = require('../index');
// const inquirer = require('inquirer');




describe('LogoMakR', () => {
    describe("acronym", () => {
        it('should return true when answer meets requirements', () => {
            let input = "69c000";
            expect(questions[1].validate(input)).toBe(true);
        });
    });
});
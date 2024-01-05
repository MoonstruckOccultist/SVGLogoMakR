const questions = require('../shapes/questions');
const Circle = require('../shapes/circle');
const Square = require('../shapes/square');
const Triangle = require('../shapes/triangle');




describe('Questions', () => {
    describe("acronym", () => {
        it('should return false when answer is wrong', () => {
            let input = "oreo";
            expect(() => questions[0].validate(input)).toThrow('Must be less than 3 chars.');
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

describe("Shapes", () => {
    describe("Circle", () => {
        it('when it runs the render function should be given the expected result', () => {
            let input = new Circle('ooo', '000000', 'ffffff');
            expect(input.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="#ffffff" />
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="#000000">OOO</text>
</svg>`);
        });
    });
    describe("Square", () => {
        it('when it runs the render function should be given the expected result', () => {
            let input = new Square('ooo', '000000', 'ffffff');
            expect(input.render()).toEqual(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="200" fill="#ffffff" />
    <text x="125" y="140" font-size="50" text-anchor="middle" fill="#000000">OOO</text>
</svg>`);
        });
    });
    describe("Triangle", () => {
        it('when it runs the render function should be given the expected result', () => {
            let input = new Triangle('ooo', '000000', 'ffffff');
            expect(input.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="#ffffff" />
    <text x="150" y="140" font-size="40" text-anchor="middle" fill="#000000">OOO</text>
</svg>`);
        });
    });

});
class Circle {
    constructor(acro, aC, shapeC) {
        this.acro = acro;
        this.aC = aC;
        this.shapeC = shapeC;
    }
    // will return a string that when writen to a svg file will produce the chosen shape with the prefered colors
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="#${this.shapeC}" />
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="#${this.aC}">${this.acro.toUpperCase()}</text>
</svg>`;
    }
}

module.exports = Circle
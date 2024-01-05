class Square {
    constructor(acro, aC, shapeC) {
        this.acro = acro;
        this.aC = aC;
        this.shapeC = shapeC;
    }
    // will return a string that when writen to a svg file will produce the chosen shape with the prefered colors
    render() {
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="200" fill="#${this.shapeC}" />
    <text x="125" y="140" font-size="50" text-anchor="middle" fill="#${this.aC}">${this.acro.toUpperCase()}</text>
</svg>`;
    }
};

module.exports = Square;

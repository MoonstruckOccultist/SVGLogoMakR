class Triangle {
    constructor(acro, aC, shapeC) {
        this.acro = acro;
        this.aC = aC;
        this.shapeC = shapeC;
    }
    // will return a string that when writen to a svg file will produce the chosen shape with the prefered colors
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="#${this.shapeC}" />
    <text x="150" y="140" font-size="40" text-anchor="middle" fill="#${this.aC}">${this.acro.toUpperCase()}</text>
</svg>`
    };
};


module.exports = Triangle;
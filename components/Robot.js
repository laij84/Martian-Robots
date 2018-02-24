class Robot {
    constructor(x, y, orientation, grid) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
        this.lost = false;
        this.grid = grid;

    }
}

module.exports = Robot;
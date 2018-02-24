const Grid = require('./Grid');

class Robot {
    constructor(x, y, orientation, grid) {
        // validate constructor params
        switch(true) {
            case !(Number.isInteger(x)) || !(Number.isInteger(y)):
                throw new Error('The coordinates provided must both be numbers');
                break;
            case ['N','S','E','W'].indexOf(orientation.toUpperCase()) === -1:
                throw new Error('Invalid orientation. Valid orientations are N S E or W');
                break;
            case !(grid instanceof Grid):
                throw new Error('Invalid grid.');
                break;
            case x < 0 || x > grid.x || y < 0 || y > grid.y:
                throw new Error('The coordinates provided are not on the grid.');
                break;
            default:
                this.x = x;
                this.y = y;
                this.orientation = orientation.toUpperCase();
                this.lost = false;
                this.grid = grid;
        }
    }
}

module.exports = Robot;
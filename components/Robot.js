const Grid = require('./Grid');
const Command = require('./Command');

/**
 * Represents a Robot.
 * @constructor
 * @param {integer} robot x coordinate
 * @param {integer} robot y coordinate
 * @param {string} direction robot is facing
 * @param {object} instance of grid robot is placed on
 */
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

    /**
     * check if robot is lost
     * @return {Boolean}
     */
    isLost() {
        return (this.x < 0 || this.x > this.grid.x || this.y < 0 || this.y > this.grid.y);
    }

    /**
     * Process commands given
     * @return {String} X Y position or if LOST
     */
    processCommands(commands) {
        //spread into array
        const commandsArray = [...commands.toUpperCase()];
        console.log(commandsArray);
        //Loop over arrays
        for (var i = 0; i < commandsArray.length; i++) {
            Command[commandsArray[i]](this);
        }

        return `${this.x} ${this.y} ${this.orientation}`
    }

}

module.exports = Robot;
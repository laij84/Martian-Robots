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
                this.prevLocation = [];
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

        /**
         * function to check each item in the array
         * @param  {array item}
         * @return {boolean}
         */
        function validateArray(item) {
            return item === 'R' || item === "L" || item === "F";
        }
        
        switch(true) {
            case !(commandsArray.every(validateArray)):
                throw new Error("Invalid commands. Please enter a string containing 'R', 'L', or 'F'.");
                break;
            case commandsArray.length > 100:
                throw new Error("Command string exceeds the limit of 100.");
                break;
        }

        //Loop over array of commands
        for (var i = 0; i < commandsArray.length; i++) {

            if (!this.lost) {
                // store the last known position
                this.prevLocation = [this.x, this.y, this.orientation];

                // Check grid for scents before executing command
                this.grid.scents.forEach((scent)=> {
                    if(this.x === scent.x && this.y === scent.y && this.orientation === scent.orientation && commandsArray[i] === scent.command) {
                        throw new Error('There is a scent telling the robot not to go there.');
                    }
                })

                // Execute command
                Command[commandsArray[i]](this);
            }

            // after moving, check if robot is lost, and update state, report last known position
            if(this.isLost()) {
                this.lost = true;

                // Push last known position and command which caused robot to get lost into scents array.§  
                this.grid.scents.push(
                    {
                        x: this.prevLocation[0], 
                        y: this.prevLocation[1], 
                        orientation: this.prevLocation[2],
                        command: commandsArray[i]
                    });
                return `${this.prevLocation[0]} ${this.prevLocation[1]} ${this.prevLocation[2]} LOST`
            } 

            
        }

        return `${this.x} ${this.y} ${this.orientation}`
    }

}

module.exports = Robot;
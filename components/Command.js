/**
 * Class stores all commands for the robot
 * Use static methods as the class can control multiple robots. Multiple instances of class not required. 
 */
class Command {
    constructor() {
    }

    /**
     * @param {object} Instance of robot
     */
    static R(robot) {
        // Check orientation of robot and change its orientation accordingly.
        switch(robot.orientation) {
            case 'N':
                robot.orientation = 'E';
                break
            case 'E':
                robot.orientation = 'S';
                break
            case 'S':
                robot.orientation = 'W';
                break
            case 'W':
                robot.orientation = 'N';
                break
        }
    }

    /**
     * @param {object} Instance of robot
     */
    static L(robot) {
        // Check orientation of robot and change its orientation accordingly.
        switch(robot.orientation) {
            case 'N':
                robot.orientation = 'W';
            break;
            case 'E':
                robot.orientation = 'N';
            break;
            case 'S':
                robot.orientation = 'E';
            break;
            case 'W':
                robot.orientation = 'S';
            break;
        }
    }

    /**
     * @param {object} Instance of robot
     */
    static F(robot) {
        switch(true) {
            case robot.orientation === 'N':
                robot.y++;
            break;
            case robot.orientation === 'E':
                robot.x++;
            break;
            case robot.orientation === 'S':
                robot.y--;
            break;
            case robot.orientation === 'W':
                robot.x--;
            break;
        }
    }

    /**
     * @param {function} function to be added
     * @param {string} name of command to be used as object key
     */
    static addCommand(command, commandName) {
        // validate command
        switch(true) {
            case typeof command !== 'function':
                throw new Error('Command must be a function.');
                break
            case typeof commandName !== 'string':
                throw new Error('Command name must be a string.');
                break
        }
        // assign new static method
        this[commandName] = command;
    }
}

module.exports = Command;


const Grid = require('./components/Grid');
const Robot = require('./components/Robot');
const Command = require('./components/Command');
const readline = require('readline');

let grid;
let robot;
let commands;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompts = {
    getGrid: "Enter the width and height (e.g. '5 3') of the grid: \n",
    getRobot: "Enter the position(x y coords) and orientation (N S E W) of the robot (e.g. 1 1 E): \n",
    getCommands: "Enter a string of commands ('R' right, 'L' left, 'F' forward) to move the robot (e.g. 'RFRFRFRF'): \n",
    addRobot: 'Do you want to move another robot? (y/n): \n'
}

// Activate starting question
rl.setPrompt(prompts.getGrid);
rl.prompt();

rl.on('line', (input) => {
    switch(true) {
        case !grid:
            // parse string and remove whitespaces        
            let sizes = input.split(' ');

            try {
                //Create grid with input
                grid = new Grid(parseInt(sizes[0]), parseInt(sizes[1]));
                // set next question
                rl.setPrompt(prompts.getRobot);
                rl.prompt();
            }
            catch(error) {
                console.log(error.message);
                //Prompt again if error
                rl.prompt();
            }
            break;
        case !robot:
            let robotInfo = input.split(' ');

            try {
                //Create grid with input
                robot = new Robot(parseInt(robotInfo[0]), parseInt(robotInfo[1]), robotInfo[2], grid);

                //Set next question
                rl.setPrompt(prompts.getCommands);
                rl.prompt();
            }
            catch(error) {
                console.log(error.message);
                // prompt again if error
                rl.prompt();
            }
            break;
        case !commands:
            try {
                let result = robot.processCommands(input);
                console.log(result);
                commands = input;
                rl.setPrompt(prompts.addRobot);
                rl.prompt();
            }
            catch(error) {
                console.log(error.message);
                rl.prompt();
            }
            break;
        default:
            if(input === 'y') {
                // reset robot and commands, use same grid
                robot = null;
                commands = null;
                rl.setPrompt(prompts.getRobot);
                rl.prompt();
            }
            else if (input === 'n') {
                // exit
                rl.close();
            }
            else {
                console.log("Invalid input.");
                rl.prompt();
            }
    }
});



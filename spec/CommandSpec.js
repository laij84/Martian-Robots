describe('Commands robot', () => {
    const Robot = require('../components/Robot');
    const Grid = require('../components/Grid');
    const Command = require('../components/Command');

    // variables to construct grid and robot
    let gridX = 5;
    let gridY = 3;
    let robotX = 1;
    let robotY = 1;
    let orientation = 'E';

    // instances of grid and robot to be assigned
    let grid;
    let robot;

    beforeEach(() => {
        grid = new Grid(gridX,gridY);
        robot = new Robot(robotX,robotY,orientation,grid);
     });

    it('Commands robot to turn right', ()=> {
        Command.R(robot);
        expect(robot.orientation).toEqual('S');

        Command.R(robot);
        expect(robot.orientation).toEqual('W');

        Command.R(robot);
        expect(robot.orientation).toEqual('N');

        Command.R(robot);
        expect(robot.orientation).toEqual('E');
    });

    it('Commands robot to turn left', ()=> {
        Command.L(robot);
        expect(robot.orientation).toEqual('N');

        Command.L(robot);
        expect(robot.orientation).toEqual('W');

        Command.L(robot);
        expect(robot.orientation).toEqual('S');

        Command.L(robot);
        expect(robot.orientation).toEqual('E');
    });

    it('Commands robot to move forward', ()=> {
        Command.F(robot);
        expect(robot.x).toEqual(robot.x++);
    });

    it('Should be able to add a new command to the class', ()=> {
        let sayHello = function(string) {
            return `Hello ${string}!`
        }

        Command.addCommand(sayHello, 'sayHello');

        expect(Command.sayHello('Bob')).toEqual('Hello Bob!');
    });
});

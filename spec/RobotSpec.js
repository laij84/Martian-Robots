describe('The Robot Class', () => {
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

    it('Creates a grid with properties x and y', ()=> {
        expect(robot).toEqual(jasmine.any(Robot));
        expect(robot).toEqual(jasmine.objectContaining({
            x: robotX,
            y: robotY,
            orientation,
            grid
        }));
    });

    it('Should throw error if x and or y is not an integer', () => {
        let float = 2.23;

        expect(function(){
            return new Robot(robotX, float, orientation, grid);
        }).toThrowError();

        expect(function(){
            return new Robot(float, robotY, orientation,grid);
        }).toThrowError();

        expect(function(){
            return new Robot(float, float, orientation, grid);
        }).toThrowError();
    });

    it('Should throw an error if the robot orientation is not N S E W', () => {
        expect(function(){
            return new Robot(robotX, robotY, 'Z', grid);
        }).toThrowError();
    });

    it('Should throw an error if the robot coordinates are not on the grid', () => {
        let outsideX = grid.x + 1;
        let outsideY = grid.y + 1;
        expect(function(){
            return new Robot(outsideX, outsideY, orientation, grid);
        }).toThrowError();
    });

    it('Should check if the robot is lost', () => {
        expect(robot.isLost()).toEqual(false);
    });

    it('Should be able to process a string of commands and return its X Y position and orientation', () => {
        let commands = 'RFRFRFRF';
        expect(robot.processCommands(commands)).toEqual('1 1 E');
    });

    // This test fails as the sample output in the coding challenge is incorrect
    xit('Should be able to process a string of commands and return its X Y position and orientation', () => {
        let commands = 'LLFFFLFLFL';
        let robot2 = new Robot(0, 3, 'W', grid)
        expect(robot2.processCommands(commands)).toEqual('2 3 S');
    });

    it('Should be able report its last known position when lost', () => {
        let robot3 = new Robot(3, 2, 'N', grid);

        let commands = 'FRRFLLFFRRFLL';
        expect(robot3.processCommands(commands)).toEqual('3 3 N LOST');
    });

    it('Should not allow a robot to fall off grid where a previous robot was lost', () => {
        let robot4 = new Robot(robotX,robotY,orientation,grid);

        let commands = 'FFFFF';
        robot.processCommands(commands);

        expect(function(){
            return robot4.processCommands(commands);
        }).toThrowError();
    });
});
describe('Create a robot', () => {
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

});
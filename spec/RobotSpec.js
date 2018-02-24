describe('Create a robot', () => {
    const Robot = require('../components/Robot');
    const Grid = require('../components/Grid');
    let grid;
    let robot;

    beforeEach(() => {
        let x = 5;
        let y = 3;
        grid = new Grid(x,y);
     });

    it('Creates a grid with properties x and y', ()=> {
        let x = 1;
        let y = 1;
        let orientation = 'E',

        robot = new Robot(x,y,orientation,grid);

        expect(robot).toEqual(jasmine.any(Robot));
        expect(robot).toEqual(jasmine.objectContaining({
            x,
            y,
            orientation,
            grid
        }));
    });
});
describe('Create grid', () => {
    const Grid = require('../components/Grid');
    let grid;

    it('Creates a grid with properties x and y', ()=> {
        let x = 3;
        let y = 5;
        let grid = new Grid(x,y);

        expect(grid).toEqual(jasmine.any(Grid));
        expect(grid).toEqual(jasmine.objectContaining({
            x: x,
            y: y
        }));
    });
});
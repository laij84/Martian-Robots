describe('The Grid Class', () => {
    const Grid = require('../components/Grid');
    let grid;

    it('Should creates a grid with properties x and y', ()=> {
        let x = 5;
        let y = 3;
        let grid = new Grid(x,y);

        expect(grid).toEqual(jasmine.any(Grid));
        expect(grid).toEqual(jasmine.objectContaining({
            x,
            y
        }));
    });

    it('Should throw error if x and or y is greater than 50', ()=> {
        let x = 51;
        let y = 24;

        expect(function(){
            return new Grid(x,y);
        }).toThrowError();
    });

    it('Should throw error if x and or y is not an integer', ()=> {
        let x = 5.23;
        let y = 'bob';

        expect(function(){
            return new Grid(x,y);
        }).toThrowError();
    });
});
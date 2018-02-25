/**
 * Represents a Grid.
 * @constructor
 * @param {integer} x coordinate
 * @param {integer} y coordinate
 */
 class Grid {
     constructor(x, y) {
         // validate grid coords
         switch(true) {
             case !(Number.isInteger(x)) || !(Number.isInteger(y)):
                 throw new Error('The coordinates provided must both be integers');
                 break;
             case x > 50 || y > 50:
                 throw new Error('The coordinates provided exceed the maximum');
                 break;
             default:
                 this.x = x;
                 this.y = y;
                 this.scents = [];
         }
     }
 }

 module.exports = Grid;
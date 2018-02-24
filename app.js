const Grid = require('./components/Grid');

window.Grid = Grid;
// Requirements

//  1. user can create Grid
//  2. max grid size is 50 by 50
//  3. user provides x (width) and y(height) values
//  4. robots that fall off grid leave scent to prevent other robots from falling off
//  5. robot can turn Right or Left which changes orientation (NESW)
//  6. robot can move Forward which changes its X Y position, 1 space at a time.
//  7. users can provide a string of commands, max 100.
//  8. after robot processes commands, it reports its new X / Y position
//  9. if robot falls of grid, it returns its last known position + LOST
// 10. User interface allows user to enter:
//      - Grid Size (e.g. 5, 3)
//      - Place robot on grid (e.g. 1 1 E)
//      - String of commands(e.g. RFRFRFRF)



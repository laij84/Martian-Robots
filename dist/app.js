/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a Grid.
 * @constructor
 * @param {integer} x coordinate
 * @param {integer} y coordinate
 */
var Grid = function Grid(x, y) {
    _classCallCheck(this, Grid);

    // validate grid coords
    switch (true) {
        case !Number.isInteger(x) || !Number.isInteger(y):
            throw new Error('The coordinates provided must both be integers');
            break;
        case x > 50 || y > 50:
            throw new Error('The coordinates provided exceed the maximum');
            break;
        default:
            this.x = x;
            this.y = y;
    }
};

module.exports = Grid;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Grid = __webpack_require__(0);
var Robot = __webpack_require__(3);
var Command = __webpack_require__(4);

window.Grid = Grid;
window.Robot = Robot;
window.Command = Command;
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = __webpack_require__(0);

/**
 * Represents a Robot.
 * @constructor
 * @param {integer} robot x coordinate
 * @param {integer} robot y coordinate
 * @param {string} direction robot is facing
 * @param {object} instance of grid robot is placed on
 */

var Robot = function Robot(x, y, orientation, grid) {
    _classCallCheck(this, Robot);

    // validate constructor params
    switch (true) {
        case !Number.isInteger(x) || !Number.isInteger(y):
            throw new Error('The coordinates provided must both be numbers');
            break;
        case ['N', 'S', 'E', 'W'].indexOf(orientation.toUpperCase()) === -1:
            throw new Error('Invalid orientation. Valid orientations are N S E or W');
            break;
        case !(grid instanceof Grid):
            throw new Error('Invalid grid.');
            break;
        case x < 0 || x > grid.x || y < 0 || y > grid.y:
            throw new Error('The coordinates provided are not on the grid.');
            break;
        default:
            this.x = x;
            this.y = y;
            this.orientation = orientation.toUpperCase();
            this.lost = false;
            this.grid = grid;
    }
};

module.exports = Robot;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class stores all commands for the robot
 * Use static methods as the class can control multiple robots. Multiple instances of class not required. 
 */
var Command = function () {
    function Command() {
        _classCallCheck(this, Command);
    }

    /**
     * @param {object} Instance of robot
     */


    _createClass(Command, null, [{
        key: 'R',
        value: function R(robot) {
            // Check orientation of robot and change its orientation accordingly.
            switch (robot.orientation) {
                case 'N':
                    robot.orientation = 'E';
                    break;
                case 'E':
                    robot.orientation = 'S';
                    break;
                case 'S':
                    robot.orientation = 'W';
                    break;
                case 'W':
                    robot.orientation = 'N';
                    break;
            }
        }

        /**
         * @param {object} Instance of robot
         */

    }, {
        key: 'L',
        value: function L(robot) {
            // Check orientation of robot and change its orientation accordingly.
            switch (robot.orientation) {
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

    }, {
        key: 'F',
        value: function F(robot) {
            switch (true) {
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

    }, {
        key: 'addCommand',
        value: function addCommand(command, commandName) {
            // validate command
            switch (true) {
                case typeof command !== 'function':
                    throw new Error('Command must be a function.');
                    break;
                case typeof commandName !== 'string':
                    throw new Error('Command name must be a string.');
                    break;
            }
            // assign new static method
            this[commandName] = command;
        }
    }]);

    return Command;
}();

module.exports = Command;

/***/ })
/******/ ]);
# Martian-Robots

## Installation
To setup this application, clone the repository and run:

```
npm install
```

To run the application, cd into the root directory run:

```
node app.js
```
You will then go through a series of prompts to create the grid and command the robot.

To execute tests, you can run from the root directory:

```
jasmine
```
or to run a specific test file:

```
jasmine spec/[filename]
```

## The Solution
### About
I used an object oriented programming approach to solve this challenge, using ES6 JavaScript Classes to construct instances of the grid and robots. 

I also used a class to store the command logic, I felt this should be separate from the Robot class to allow new commands to be added which could then be used on all instances of Robot. 

The command class also only contains static methods - I did not think it was necessary to construct multiple instances of Command to control the robots. 

### Improvements / Next Steps
Overall I think I reached most of the criteria outlined by the challenge. The only thing I would add is better validation for the processing commands logic on the Robot. 

Currently when instructing a robot to move the method only checks for the valid commands (R L F), but if new commands were added then this would not work. 

I would approach this solution by iterating over the properties of the class to get an array of the commands, and then when validating check against this to see if the command is exists. 



## Problem: Martian Robots 
### The Problem 
The surface of Mars can be modelled by a rectangular grid around which robots are able to move according to instructions provided from Earth. You are to write a program that determines each sequence of robot positions and reports the final position of the robot.

A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed by y-coordinate) and an orientation (N, S, E, W for north, south, east, and west). A robot instruction is a string of the letters “L”, “R”, and “F” which represent, respectively, the instructions:

- Left : the robot turns left 90 degrees and remains on the current grid point.
- Right : the robot turns right 90 degrees and remains on the current grid point.
- Forward : the robot moves forward one grid point in the direction of the current orientation and maintains the same orientation.

The direction North corresponds to the direction from grid point (x, y) to grid point (x, y+1). There is also a possibility that additional command types may be required in the future and provision should be made for this.

Since the grid is rectangular and bounded (…yes Mars is a strange planet), a robot that moves “off” an edge of the grid is lost forever. However, lost robots leave a robot “scent” that prohibits future robots from dropping off the world at the same grid point. The scent is left at the last grid position the robot occupied before disappearing over the edge. An instruction to
move “off” the world from a grid point from which a robot has been previously lost is simply ignored by the current robot.

### The Input 
The first line of input is the upper-right coordinates of the rectangular world, the lower-left coordinates are assumed to be 0, 0.

The remaining input consists of a sequence of robot positions and instructions (two lines per robot). A position consists of two integers specifying the initial coordinates of the robot and an orientation (N, S, E, W), all separated by whitespace on one line. A robot instruction is a
string of the letters “L”, “R”, and “F” on one line.

Each robot is processed sequentially, i.e., finishes executing the robot instructions before the next robot begins execution.

The maximum value for any coordinate is 50.

All instruction strings will be less than 100 characters in length.

### The Output 
For each robot position/instruction in the input, the output should indicate the final grid position and orientation of the robot. If a robot falls off the edge of the grid the word “LOST” should be printed after the position and orientation.

#### Sample Input
5 3<br>
1 1 E<br>
RFRFRFRF


3 2 N<br>
FRRFLLFFRRFLL

0 3 W<br>
LLFFFLFLFL

#### Sample Output
1 1 E<br>
3 3 N LOST<br>
2 3 S<br>
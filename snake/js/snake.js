const Coord = require('./coord.js');

class Snake {
  constructor() {
    this.direction = "N";
    this.segments = [[10, 10]];
    this.diff = {
      N: [0, -1],
      S: [0, 1],
      E: [1, 0],
      W: [-1, 0]
    };
  }
  
  directionDiff() {
    return this.diff[this.direction];
  }
  
  move() {
    this.segments.pop();
    const newHead = Coord.plus(this.segments[0], this.directionDiff());
    this.segments.unshift(newHead);
  }
  
  turn(dir) {
    this.direction = dir;
  }
}

module.exports = Snake;
function Coord() {
  function plus(pos1, pos2) {
    return [pos1[0] + pos2[0], pos1[1] + pos1[1]];
  }
  
  function equals(pos1, pos2) {
    return (pos1[0] === pos2[0] && pos1[1] === pos2[1]);
  }
  
  function isOpposite(direction1, direction2) {
    if (direction1 === 'N') {
      return direction2 === 'S';
    } else if (direction1 === 'S') {
      return direction2 === 'N';
    } else if (direction1 === 'E') {
      return direction2 === 'W';
    } else if (direction1 === 'W') {
      return direction2 === 'E';
    }
  }
  
}

module.exports = Coord;
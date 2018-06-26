const View = require('./ttt-view.js');// require appropriate file
const Game = require('../../tic_tac_toe_node_solution/game.js');// require appropriate file

$( () => {
  const $figure = $('figure.ttt');
  g = new Game();
  g.swapTurn();
  const v = new View(g, $figure);
  $('ul').on('click', 'li', v.bindEvents.bind(v));
  
  
  
  // v.setupBoard();
});

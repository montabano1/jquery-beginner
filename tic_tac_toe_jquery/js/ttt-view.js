class View {
  constructor(game, $el) {
    $el.append(this.setupBoard());
    this.game = game;
  }

  bindEvents(e) {
    const liClass = $(e.target).context.className;
    const row = parseInt(liClass[0]);
    const col = parseInt(liClass[2]);
    // debugger
    try {
      this.game.playMove([row, col]);
      this.makeMove($(e.target));
      if (this.game.isOver()) {
        
        if (this.game.winner()){
          const winner = (this.game.winner() === 'x' ? 'O' : 'X');
          alert(`${winner} WINS`);
        } else {
          alert('NOBODY WINS');
        } 
      }
    }
    catch(error) {
      alert('Invalid Move!!');
    }
  }

  makeMove($square) {
    $square.text(`${this.game.currentPlayer}`);
    $square.addClass('marked');
  }

  setupBoard() {
    const $ul = $('<ul></ul>');
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++) {
      // const a = document.createElement('li');
      const a = $(`<li class=${i}-${j}></li>`);
      $ul.append(a);
      }
    }
    return $ul;
    // const $figure = $('figure.ttt');
    // $figure.append($ul);
  }
}

module.exports = View;

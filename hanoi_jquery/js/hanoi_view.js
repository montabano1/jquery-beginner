class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    // this.setupTowers($el);
    this.render($el);
    $el.on('click', 'ul', this.clickTower.bind(this));
  }
  
  clickTower(e) {
    const className = $(e.currentTarget).context.className;
    const lastCharacter = className[13];
    if (this.start != undefined) {
      this.end = parseInt(lastCharacter);
      if (!this.game.move(this.start, this.end)) {
        alert('INVALID MOVE');
      }
      this.start = undefined;
      this.end = undefined;
    } else {
      this.start = parseInt(lastCharacter);
    }
    this.render(this.$el);
    if (this.start != undefined) {
      $(`ul.number-${this.start}`).toggleClass('selected');
    } 
    if (this.game.isWon()) {
      // alert('YOU\'RE AWESOME');
      window.setTimeout(() => alert("YOU'RE AWESOME"), 1); 
    }
  }
  
  setupTowers($el) {
    // const $figure = $("<figure></figure>");
    for (let i=0; i < 3; i++) {
      const $ul = $("<ul></ul>");
      $ul.addClass(`tower number-${i}`);
      $el.append($ul);
    }
    for (let i=1; i < 4; i++) {
      $('ul').eq(0).append($(`<li class=width-${i}></li>`));
    }
  }
  
  render($el) {
    // const el = $('figure');
    // $figure.empty();
    $el.empty();
    const towers = this.game.towers;
    for (let i = 0; i < 3; i++) {
      const $ul = $("<ul></ul>");
      for (let j = towers[i].length -1; j >= 0; j--) {
        $ul.append($(`<li class=width-${towers[i][j]}></li>`));
      }
      $ul.addClass(`tower number-${i}`);
      $el.append($ul);  
    }
  }
}
module.exports = HanoiView;
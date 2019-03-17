var Preview1 = function() {};

Preview1.prototype = {

  create: function() {
    var background = game.add.sprite(0, 0, 'bg');
    this.titleText = game.add.text(game.world.centerX, 480, 'Level 1: Sabarmati River,\n Ahmedabad', {
      font: '60pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });
    this.titleText.anchor.set(0.5);

    var text = "\nThe Sabarmati river\nof Ahmedabad soon will have the\ndistinction of being the third\nmost polluted river of the country. \n\nOn an average the river\nreceives 15% of the\n960 million litres per day\nof untreated sewage which\nthe city generates every day."
    var score_text = game.add.text(game.world.centerX, game.world.centerY, text, {
      font: '48pt Karla',
      fill: '#404040',
      align: 'center'
    });
    score_text.anchor.set(0.5);

    var prompt = game.add.text(game.world.centerX, 1920-150, 'press space to continue', {
      font: '48pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });
    prompt.anchor.set(0.5);
  },
  
  update: function() {
    if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
      drops_collected=0;
      blue_collected=0;
      green_collected=0;
      brown_collected=0;
      game.state.start('game1');
    }
  }
};

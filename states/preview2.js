var Preview2 = function() {};

Preview2.prototype = {

  create: function() {
    var background = game.add.sprite(0, 0, 'bg');
    this.titleText = game.add.text(game.world.centerX, 480, 'Level 2: Ganga River,\nAllahbad\n\n', {
      font: '60pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });
    this.titleText.anchor.set(0.5);

    var text = "\n\nOften referred to as ‘Holy Ganga’,\nthis river is no longer holy\nwhen it comes to pollution.\nGanga is amongst the top in the\nlist of most polluted river\nin India; and also tops\nthe same in the World.\n\nHuman waste and industrial\npollutants are making the river\nwater useless for bathing and\nagricultural needs; let alone\nfor drinking.";
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
      game.state.start('game2');
    }
  }
};

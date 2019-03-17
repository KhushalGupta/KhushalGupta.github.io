var Preview3 = function() {};

Preview3.prototype = {

	create: function() {
		var background = game.add.sprite(0, 0, 'bg');
		this.titleText = game.add.text(game.world.centerX, 480, 'Level 3: Yamuna River,\nNew Delhi\n\n', {
			font: '60pt Karla-Bold',
			fill: '#404040',
			align: 'center'
		});
		this.titleText.anchor.set(0.5);

    var text = "\n\n\nYamuna also comes in the top\n10 list of World’s most\npolluted rivers!. Delhi is the\nmajor reason behind\nYamuna’s woeful condition;\nas Delhi itself dumps 58% waste in\n Yamuna!.\n\nThe river, however, has become one\nof the most-polluted in India,\nbecause so much of its\ncourse is through extremely densely\npopulated areas where vast\nquantities of sewage have been\ndischarged directly into it.";
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
      game.state.start('game3');
    }
  }
};

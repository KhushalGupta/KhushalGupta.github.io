var About = function() {};

About.prototype = {

  preload: function() {
    game.load.image('bl_drop', 'assets/img/drops_blue.png');
    game.load.image('br_drop', 'assets/img/drops_brown.png');
    game.load.image('gr_drop', 'assets/img/drops_green.png');
  },

  init: function() {
    this.aboutText = "\n\nSave The Drops is developed to\nraise awareness about Water\n Hygiene. It is important to ensure\nthat the water we use is clean, safe,\n and pure. This game hoist\ndisparities in access to clean\nwater within India.\n\n\n"
    this.instructions = "Use your left and right arrow\nkeys to move the bucket\nto catch clean water\ndrops and avoid dirty ones.\nCollect 15 drops to end the level."
  },

  create: function () {
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'bg');

    var x = game.world.centerX;
    var y = 600;

    var title = game.add.text(game.world.centerX, 200, 'Save The Drops', {
      font: '80pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    var txt = game.add.text(x, y, this.aboutText, {
      font: '48pt Karla',
      fill: '#404040',
      align: 'center'
    });

    var title2 = game.add.text(game.world.centerX, y+360, 'Instructions', {
      font: '80pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    var inst = game.add.text(x, y+360+300, this.instructions, {
      font: '48pt Karla',
      fill: '#404040',
      align: 'center'
    });

    var drop1 = game.add.image(x-150, y+360+300+300, 'bl_drop');
    var drop2 = game.add.image(x-50, y+360+300+300, 'gr_drop');
    var drop3 = game.add.image(x+150, y+360+300+300, 'br_drop');

    var prompt = game.add.text(x, 1920-150, 'press space to continue', {
      font: '48pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    utils.centerGameObjects([title, title2, txt, prompt, inst, drop1, drop2, drop3]);
  },

  update: function() {
    if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
      game.state.start('preview1');
    }
  }
};

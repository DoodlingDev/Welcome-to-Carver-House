BasicGame.Game = function(game) {
  this.collision = false;
};

BasicGame.Game.prototype =
{
  preload: function () {
    game.time.advancedTiming = true;
    game.world.setBounds(0, 0, 5000, 6000);
    game.iso.anchor.setTo(0.5, 0.2);

    // game.world.scale.setTo(0.5, 0.5);
  },

  create: function () {
    game.physics.isoArcade.gravity.setTo(0, 0, -500);
    emptyGroup = game.add.group();
    floorGroup = game.add.group();
    wallGroup = game.add.group();
    furnishGroup = game.add.group();
    activeGroup = game.add.group();
    menuGroup = game.add.group();
    enemyGroup = game.add.group();
    itemGroup = game.add.group();

    playerCreate();
    generateTiles();
    generateWalls();
    itemCreate();
    itemInputs();
    tableCreate();
    configPathFinding();
    createGhosts();
    setGhostPaths();
    hudDisplay();
    hudClick();


    cursorPos = new Phaser.Plugin.Isometric.Point3();
    game.camera.follow(player);
  },

  update: function () {

    if (!isPaused){
      game.iso.unproject(game.input.activePointer.position, cursorPos);
      playerUpdate();
      illuminate();
      itemInteract();
      moveGhosts();
      checkGhostCollision();
      this.game.physics.isoArcade.collide(player, emptyGroup);
      wallCheck();
    }

  },

  quitGame: function(pointer) {
      this.state.start('MainMenu');
  },

  render: function () {
    // emptyGroup.forEach(function (tile) {
    //     game.debug.body(tile, 'rgba(189, 221, 235, 0.6)', false);
    // })
    // activeGroup.forEach(function (tile) {
    // game.debug.body(tile, 'rgba(189, 221, 235, 0.6)', false);
  // });
  }

};

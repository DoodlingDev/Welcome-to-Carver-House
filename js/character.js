
// pre-load
    game.load.spritesheet('player','images/someguy.png', 95.16, 158.75);


// create

    game.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.collideWorldBounds = true;

    player.animations.add('left', [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 10, true);
    player.animations.add('right', [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], 10, true);
    player.animations.add('up', [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47], 10, true);
    player.animations.add('down', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10, true);



// update

    var cursors = game.input.keyboard.createCursorKeys();
    player.body.velocity.x = 0;

   if(cursors.left.isDown){

     player.body.velocity.x = -150;

     player.animations.play('left');
   }
   else if (cursors.right.isDown){
     player.body.velocity.x = 150;

     player.animations.play('right');
    }
   else if (cursors.down.isDown){

     player.body.velocity.x = 150;

     player.animations.play('down');
    }
   else if (cursors.up.isDown){

     player.body.velocity.x = 150;

     player.animations.play('up');
    } else {
   player.animations.stop();
   player.frame = 4;
    }
  {
   player.body.velocity.y = -350;
  }
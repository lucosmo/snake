var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
			var platforms;
			var cursors;
			var player;
			var last;
			var bot;
			var items;
			var snakePath=new Array();
			var snakeSection=new Array();//snake body
			var score;
			function preload () {

				game.load.image('background', '/assets/pics/backg.png');
				game.load.image('aub', '/assets/pics/aubergine.png');
				game.load.image('broc', '/assets/pics/broccoli.png');
				game.load.image('platform', '/assets/pics/platform.png');
				game.load.image('square', '/assets/pics/square.png');
				game.load.spritesheet('head', '/assets/pics/head.png');

			}

			function create(){
				
			}
			/*function create () {
				console.log("in create");
				this.input.addDownCallback(function() {

				if (game.sound.context.state === 'suspended') {
					game.sound.context.resume();
				}

			});
				//  We're going to be using physics, so enable the Arcade Physics system
				game.physics.startSystem(Phaser.Physics.ARCADE);
				game.world.setBounds(0,0,800,600);
				//  A simple background for our game
				game.add.sprite(0, 0, 'background');

				//  The platforms group contains the ground and the 2 ledges we can jump on
				platforms = game.add.group();

				//  We will enable physics for any object that is created in this group
				platforms.enableBody = true;
				var ledge=platforms.create(300, 290, 'platform');
				ledge.body.immovable=true;
				this.input.addDownCallback(function() {

				if (game.sound.context.state === 'suspended') {
					game.sound.context.resume();
				}

			});
				items=game.add.group();
				items.enableBody=true;

				for(var i=0; i<5;i++)
				{
					var aub=items.create(giveX(),giveY(),'aub');
					var str = "aubx="+aub.x+" auby="+aub.y;
					console.log(str); // Write the string to a file
					var broc=items.create(giveX(),giveY(),'broc');
					var str = "aubx="+broc.x+" auby="+broc.y;
					console.log(str); // Write the string to a file
				}

				// The player and its settings
				player = game.add.sprite(32, game.world.height - 150, 'head');
				//snakePath.push(Phaser.Point,player.x,player.y);
				//  We need to enable physics on the player
				game.physics.arcade.enable(player);
				game.physics.arcade.allowGravity=false;
				//  Player physics properties. Give the little guy a slight bounce.
				player.body.bounce.y = 0;
				//player.body.gravity.y = 0;
				player.body.bounce.x = 0;
				//player.body.gravity.x = 0;
				player.body.collideWorldBounds = false;
				player.body.damping=0;

				//  Our two animations, walking left and right.
				//player.animations.add('head', [0, 1, 2, 3], 10, true);
				//player.animations.add('head', [5, 6, 7, 8], 10, true);
				player.animations.add('run');
				//control
				cursors=game.input.keyboard.createCursorKeys();
				player.body.acceleration=0;
				game.camera.follow(player);
				var style = { font: "25px Arial", fill: "#ff0044", align: "left" };
				score=game.add.text(10, 10, "score: ", style);


			}
			var speed=0;*/
			function update() {

			}


/*

			function update() {
				//  Collide the player and the stars with the platforms
				//game.physics.arcade.collide(player, platforms);

				//  Reset the players velocity (movement)
				player.body.velocity.x = 0;
				player.body.velocity.y=0;
				game.physics.arcade.collide(items, platforms);
				game.physics.arcade.collide(player, platforms, collisionHandler, null, this);
				game.physics.arcade.overlap(player, items, collectItem, null, this);


				if (cursors.left.isDown&&last!="right")
				{
					//  Move to the left

					player.body.velocity.x -= (150+speed*15);
					player.body.velocity.y=0;
					//player.animations.play('head');
					last="left";

				}
				else if (cursors.right.isDown&&last!="left")
				{
					//  Move to the right
					player.body.velocity.x += (150+speed*15);
					player.body.velocity.y=0;
					//player.animations.play('right');
					last="right";

				}
				else if (cursors.up.isDown&&last!="down"){
				//  Move to the up
					player.body.velocity.x = 0;
					player.body.velocity.y -= (150+speed*15);
					//player.animations.play('up');
					last="up";
				}
				else if (cursors.down.isDown&&last!="up"){
				//  Move to the down
					player.body.velocity.x = 0;
					player.body.velocity.y += (150+speed*15);
					//player.animations.play('down');
					last="down";
				}
				else if(last=="left"){
					player.body.velocity.x -= (150+speed*15);
					player.body.velocity.y=0;
					player.animations.play('left');
				}
				else if(last=="right"){
					player.body.velocity.x += (150+speed*15);
					player.body.velocity.y=0;
					player.animations.play('right');
				}
				else if(last=="up"){
					player.body.velocity.y -= (150+speed*15);
					player.body.velocity.x=0;
					player.animations.play('up');
				}
				else if(last=="down"){
					player.body.velocity.y += (150+speed*15);
					player.body.velocity.x=0;
					player.animations.play('down');
				}
				else{
					player.animations.stop();

					player.frame = 4;
					}

				moveSnake(player);


				if(speed>0&&snakePath.length>0&&snakeSection.length>0){
					var part = snakePath.pop();

					part.setTo(player.x, player.y);

					snakePath.unshift(part);
					var j=speed;
					console.log("snake length="+j+" speed="+speed);

					for (var i = 0; i < j; i++)
					{
						console.log(i);
						snakeSection[i].x = snakePath[((i+1)*6)].x;
						snakeSection[i].y = snakePath[((i+1)*6)].y;
					}
				}
				game.world.wrap(player,0,true);
			}

			function moveSnake(player){
				var x=player.x;
				var y=player.y;
				if(snakePath.length<70){
					snakePath.push(new Phaser.Point(x,y));
				}


			}

			function snakeBody(player){
				var x=(player.x);
				var y=(player.y);

				snakePath.push(new Phaser.Point(x,y));
				snakeSection[speed]=game.add.sprite(x, y, 'square');
				snakePath.pop();
				console.log("new snakeSection created");
				game.physics.arcade.enable(snakeSection[speed]);
				snakeSection[speed].body.collideWorldBounds = true;

			}
			function collectItem(player, items){
				items.kill();
				//snakeSection[speed]=game.add.sprite(player.

				snakeBody(player);
				speed++;
				score.setText("score: "+speed);

			}
			function giveX(){
				var x=Math.floor(Math.random()*800);
				if (x<=30) x=30;
				if (x>=770) x=770;
				return x;
			}
			function giveY(){
				var y=Math.floor(Math.random()*600);
				if (y<=30) y=30;
				if (y>=570) y=570;
				return y;
			}
			function collisionHandler(player,platforms){
				player.kill();
				for(var i=0;i<speed;i++)
					snakeSection[i].kill();
				score.setText("GAME OVER");
			}
*/

EPT.MainMenu = function(game) {};
EPT.MainMenu.prototype = {
	create: function() {
		// this.add.sprite(0, 0, 'background');
		var title = this.add.sprite(this.world.width*0.5, (this.world.height-100)*0.5, 'title');
		title.anchor.set(0.5);
		storageAPI.initUnset('EPT-highscore', 0);
		var highscore = storageAPI.get('EPT-highscore') || 0;

		var buttonEnclave = this.add.button(20, 20, 'logo-enclave', this.clickEnclave, this);
		var buttonStart = this.add.button(this.world.width-20, this.world.height-20, 'button-start', this.clickStart, this, 1, 0, 2);
		buttonStart.anchor.set(1);

		this.buttonAudio = this.add.button(this.world.width-20, 20, 'button-audio', this.clickAudio, this, 1, 0, 2);
		this.buttonAudio.anchor.set(1,0);

		var buttonAchievements = this.add.button(20, this.world.height-20, 'button-achievements', this.clickAchievements, this, 1, 0, 2);
		buttonAchievements.anchor.set(0,1);

		var fontHighscore = { font: "32px Arial", fill: "#000" };
		var textHighscore = this.add.text(this.world.width*0.5, this.world.height-50, 'Highscore: '+highscore, fontHighscore);
		textHighscore.anchor.set(0.5,1);

		EPT._manageAudio('init',this);
		// Turn the music off at the start:
		EPT._manageAudio('off',this);

		buttonStart.x = this.world.width+buttonStart.width+20;
		this.add.tween(buttonStart).to({x: this.world.width-20}, 500, Phaser.Easing.Exponential.Out, true);
		this.buttonAudio.y = -this.buttonAudio.height-20;
		this.add.tween(this.buttonAudio).to({y: 20}, 500, Phaser.Easing.Exponential.Out, true);
		buttonEnclave.x = -buttonEnclave.width-20;
		this.add.tween(buttonEnclave).to({x: 20}, 500, Phaser.Easing.Exponential.Out, true);
		buttonAchievements.y = this.world.height+buttonAchievements.height+20;
		this.add.tween(buttonAchievements).to({y: this.world.height-20}, 500, Phaser.Easing.Exponential.Out, true);
	},
	clickAudio: function() {
		if(!EPT._audioStatus) {
			EPT._soundClick.play();
		}
		EPT._manageAudio('switch',this);
	},
	clickEnclave: function() {
		if(!EPT._audioStatus) {
			EPT._soundClick.play();
		}
		window.top.location.href = 'http://enclavegames.com/';
	},
	clickStart: function() {
		if(EPT._audioStatus) {
			EPT._soundClick.play();
		}
		this.game.state.start('Story');
	},
	clickAchievements: function() {
		if(EPT._audioStatus) {
			EPT._soundClick.play();
		}
		this.game.state.start('Achievements');
	}
};
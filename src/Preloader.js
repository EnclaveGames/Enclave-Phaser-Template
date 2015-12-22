EPT.Preloader = function(game) {};
EPT.Preloader.prototype = {
	preload: function() {
		var preloadBG = this.add.sprite((this.world.width-580)*0.5, (this.world.height+150)*0.5, 'loading-background');
		var preloadProgress = this.add.sprite((this.world.width-540)*0.5, (this.world.height+170)*0.5, 'loading-progress');
		this.load.setPreloadSprite(preloadProgress);

		this.load.image('background', 'img/background.png');
		this.load.image('title', 'img/title.png');
		this.load.image('logo-enclave', 'img/logo-enclave.png');
		this.load.image('clickme', 'img/clickme.png');
		this.load.image('overlay', 'img/overlay.png');

		this.load.spritesheet('button-start', 'img/button-start.png', 180, 180);
		this.load.spritesheet('button-continue', 'img/button-continue.png', 180, 180);
		this.load.spritesheet('button-mainmenu', 'img/button-mainmenu.png', 180, 180);
		this.load.spritesheet('button-restart', 'img/button-tryagain.png', 180, 180);
		this.load.spritesheet('button-achievements', 'img/button-achievements.png', 110, 110);
		this.load.spritesheet('button-pause', 'img/button-pause.png', 80, 80);
		this.load.spritesheet('button-audio', 'img/button-sound.png', 80, 80);
		this.load.spritesheet('button-back', 'img/button-back.png', 70, 70);

		this.load.audio('audio-click', ['sfx/audio-button.m4a','sfx/audio-button.mp3','sfx/audio-button.ogg']);
	},
	create: function() {
		this.state.start('MainMenu');
	}
};
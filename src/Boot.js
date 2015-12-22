var EPT = {
	_manageAudio: function(mode, game) {
		if(mode == 'init') {
			storageAPI.initUnset('EPT-audio', true);
			EPT._audioStatus = storageAPI.get('EPT-audio');
			EPT._soundClick = game.add.audio('audio-click');
			// EPT._soundMusic = game.add.audio('audio-theme',1,true);
		}
		else if(mode == 'switch') {
			EPT._audioStatus =! EPT._audioStatus;
			storageAPI.set('EPT-audio',EPT._audioStatus);
		}
		// EPT._audioOffset = (EPT._audioStatus) ? 0 : 4;
		if(EPT._audioStatus) {
			EPT._audioOffset = 0;
			// EPT._soundMusic.play('',0,1,true);
		}
		else {
			EPT._audioOffset = 4;
			// EPT._soundMusic.stop();
		}
		game.buttonAudio.setFrames(EPT._audioOffset+1, EPT._audioOffset+0, EPT._audioOffset+2);
	}
};
EPT.Boot = function(game){};
EPT.Boot.prototype = {
	preload: function(){
		this.stage.backgroundColor = '#DECCCC';
		this.load.image('loading-background', 'img/loading-background.png');
		this.load.image('loading-progress', 'img/loading-progress.png');
	},
	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.state.start('Preloader');
	}
};
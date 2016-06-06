var EPT = {
	_manageAudio: function(mode, game) {
		switch(mode) {
			case 'init': {
				EPT.Storage.initUnset('EPT-audio', true);
				EPT._audioStatus = EPT.Storage.get('EPT-audio');
				// EPT._soundClick = game.add.audio('audio-click');
				EPT._sound = [];
				EPT._sound['click'] = game.add.audio('audio-click');
				if(!EPT._soundMusic) {
					EPT._soundMusic = game.add.audio('audio-theme',1,true);
					EPT._soundMusic.volume = 0.5;
				}
				break;
			}
			case 'on': {
				EPT._audioStatus = true;
				break;
			}
			case 'off': {
				EPT._audioStatus = false;
				break;
			}
			case 'switch': {
				EPT._audioStatus =! EPT._audioStatus;
				break;
			}
			default: {}
		}
		if(EPT._audioStatus) {
			EPT._audioOffset = 0;
			if(EPT._soundMusic) {
				if(!EPT._soundMusic.isPlaying) {
					EPT._soundMusic.play('',0,1,true);
				}
			}
		}
		else {
			EPT._audioOffset = 4;
			if(EPT._soundMusic) {
				EPT._soundMusic.stop();
			}
		}
		EPT.Storage.set('EPT-audio',EPT._audioStatus);
		game.buttonAudio.setFrames(EPT._audioOffset+1, EPT._audioOffset+0, EPT._audioOffset+2);
	},
	_playAudio: function(sound) {
		if(EPT._audioStatus) {
			if(EPT._sound && EPT._sound[sound]) {
				EPT._sound[sound].play();
			}
		}
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
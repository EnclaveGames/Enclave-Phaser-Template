// (function(){
	var game = new Phaser.Game(960, 640, Phaser.AUTO);
	game.state.add('Boot', EPT.Boot);
	game.state.add('Preloader', EPT.Preloader);
	game.state.add('MainMenu', EPT.MainMenu);
	game.state.add('Achievements', EPT.Achievements);
	game.state.add('Story', EPT.Story);
	game.state.add('Game', EPT.Game);
	game.state.start('Boot');
// })();
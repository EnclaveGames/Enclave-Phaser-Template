class Story extends Phaser.Scene {
    constructor() {
        super('Story');
    }
    create() {
		this.add.sprite(0, 0, 'background').setOrigin(0,0);

		var fontStory = { font: '48px '+EPT.text['FONT'], fill: '#ffde00', stroke: '#000', strokeThickness: 7, align: 'center' };
		var textStory = this.add.text(EPT.world.centerX, 200, EPT.text['screen-story-howto'], fontStory);
		textStory.setOrigin(0.5,0);

		var buttonContinue = new Button(EPT.world.width-20, EPT.world.height-20, 'button-continue', this.clickContinue, this);
		buttonContinue.setOrigin(1,1);

		buttonContinue.x = EPT.world.width+buttonContinue.width+20;
		this.tweens.add({targets: buttonContinue, x: EPT.world.width-20, duration: 500, ease: 'Back'});

		this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		this.keyEnter.on('down', function(key, event) { this.clickContinue(); }, this);

		this.cameras.main.fadeIn(250, 0, 0, 0);
	}
	clickContinue() {
		EPT.Sfx.play('click');
		EPT.fadeOutScene('Game', this);
	}
};
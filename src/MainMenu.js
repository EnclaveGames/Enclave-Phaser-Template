class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }
    create() {
        this.add.sprite(0, 0, 'background').setOrigin(0,0);

		EPT.Storage.initUnset('EPT-highscore', 0);
		var highscore = EPT.Storage.get('EPT-highscore');

        var title = this.add.sprite(EPT.world.centerX, EPT.world.centerY-50, 'title');
        title.setOrigin(0.5);

        this.input.keyboard.on('keydown', this.handleKey, this);

        this.tweens.add({targets: title, angle: title.angle-2, duration: 1000, ease: 'Sine.easeInOut' });
        this.tweens.add({targets: title, angle: title.angle+4, duration: 2000, ease: 'Sine.easeInOut', yoyo: 1, loop: -1, delay: 1000 });

        var buttonSettings = new Button(20, 20, 'button-settings', this.clickSettings, this);
        buttonSettings.setOrigin(0, 0);

        var buttonEnclave = new Button(20, EPT.world.height-40, 'logo-enclave', this.clickEnclave, this, 'static');
        buttonEnclave.setOrigin(0, 1);

        var buttonStart = new Button(EPT.world.width-20, EPT.world.height-20, 'button-start', this.clickStart, this);
        buttonStart.setOrigin(1, 1);

		var fontHighscore = { font: '38px '+EPT.text['FONT'], fill: '#ffde00', stroke: '#000', strokeThickness: 5 };
		var textHighscore = this.add.text(EPT.world.width-30, 60, EPT.text['menu-highscore']+highscore, fontHighscore);
		textHighscore.setOrigin(1, 0);

		buttonStart.x = EPT.world.width+buttonStart.width+20;
        this.tweens.add({targets: buttonStart, x: EPT.world.width-20, duration: 500, ease: 'Back'});

		buttonEnclave.x = -buttonEnclave.width-20;
        this.tweens.add({targets: buttonEnclave, x: 20, duration: 500, ease: 'Back'});

        buttonSettings.y = -buttonSettings.height-20;
        this.tweens.add({targets: buttonSettings, y: 20, duration: 500, ease: 'Back'});

        textHighscore.y = -textHighscore.height-30;
        this.tweens.add({targets: textHighscore, y: 40, duration: 500, delay: 100, ease: 'Back'});

        this.cameras.main.fadeIn(250);
    }
    handleKey(e) {
        switch(e.code) {
            case 'KeyS': {
                this.clickSettings();
                break;
            }
            case 'Enter': {
                this.clickStart();
                break;
            }
            default: {}
        }
    }
    clickEnclave() {
        console.log('Enclave clicked!');
        EPT.Sfx.play('click');
        window.top.location.href = 'https://enclavegames.com/';
    }
    clickSettings() {
        EPT.Sfx.play('click');
        EPT.fadeOutScene('Settings', this);
    }
    clickStart() {
        EPT.Sfx.play('click');
        EPT.fadeOutScene('Story', this);
    }
}
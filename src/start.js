var enablePWA = false;
if(enablePWA) {
	// SERVICE WORKER
	if('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./js/sw.js');
	};
	// NOTIFICATIONS TEMPLATE
	Notification.requestPermission().then(function(result) {
		if(result === 'granted') {
			exampleNotification();
		}
	});
	function exampleNotification() {
		var notifTitle = 'Enclave Phaser Template';
		var notifBody = 'Created by the Enclave Games team.';
		var notifImg = 'img/icons/icon-512.png';
		var options = {
			body: notifBody,
			icon: notifImg
		}
		var notif = new Notification(notifTitle, options);
		setTimeout(exampleNotification, 30000);
	}
}

var gameConfig = {
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 640,
		height: 960
	},
	scene: [Boot, Preloader, MainMenu, Settings, Story, Game]
}
game = new Phaser.Game(gameConfig);
window.focus();
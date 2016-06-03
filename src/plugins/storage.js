'use strict';
Phaser.Plugin.Storage = function(game) {
	Phaser.Plugin.call(this, game);
};
Phaser.Plugin.Storage.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.Storage.prototype.constructor = Phaser.Plugin.Storage;

Phaser.Plugin.Storage.prototype.availability = function() {
	if(!(!(typeof(window.localStorage) === 'undefined'))) {
		console.log('localStorage not available');
		return null;
	}
};
Phaser.Plugin.Storage.prototype.get = function(key) {
	this.availability();
	try {
		return JSON.parse(localStorage.getItem(key));
	}
	catch(e) {
		return window.localStorage.getItem(key);
	}
};
Phaser.Plugin.Storage.prototype.set = function(key, value) {
	this.availability();
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	}
	catch(e) {
		if(e == QUOTA_EXCEEDED_ERR) {
			console.log('localStorage quota exceeded');
		}
	}
};
Phaser.Plugin.Storage.prototype.initUnset = function(key, value) {
	if(this.get(key) === null) {
		this.set(key, value);
	}
};
Phaser.Plugin.Storage.prototype.getFloat = function(key) {
	return parseFloat(this.get(key));
};
Phaser.Plugin.Storage.prototype.setHighscore = function(key, value) {
	if(value > this.getFloat(key)) {
		this.set(key, value);
	}
};
Phaser.Plugin.Storage.prototype.remove = function(key) {
	this.availability();
	window.localStorage.removeItem(key);
};

Phaser.Plugin.Storage.prototype.clear = function() {
	this.availability();
	window.localStorage.clear();
};
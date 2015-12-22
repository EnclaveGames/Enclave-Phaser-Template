var storageAPI = {
	isCapable: function() {
		return !(typeof(window.localStorage) === 'undefined');
	},
	get: function(key) {
		if(!this.isCapable())
			return null;
		try {
			return JSON.parse(localStorage.getItem(key));
		} catch(e) {
			return window.localStorage.getItem(key);
		}
	},
	getFloat: function(key) {
		return parseFloat(this.get(key));
	},
	set: function(key, value) {
		if(!this.isCapable())
			return null;
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch(e) {
			if(e == QUOTA_EXCEEDED_ERR)
				console.log('localStorage quota exceeded');
		}
	},
	initUnset: function(key, value) {
		if(this.get(key) === null)
			this.set(key, value);
	},
	setHighscore: function(key, value) {
		if(value > this.getFloat(key))
			this.set(key, value);
	},
	remove: function(key) {
		if(!this.isCapable())
			return null;
		window.localStorage.removeItem(key);
	},
	clear: function() {
		if(!this.isCapable())
			return null;
		window.localStorage.clear();
	}
};
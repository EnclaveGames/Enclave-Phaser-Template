# Enclave Phaser Template

Fully mobile responsive, portrait and landscape compatible template for **HTML5 games** written using the [Phaser](https://phaser.io/) 3 game engine. See it online at: [enclavegames.github.io/Enclave-Phaser-Template/](https://enclavegames.github.io/Enclave-Phaser-Template/)

![Enclave Phaser Template](https://enclavegames.github.io/Enclave-Phaser-Template/screens/EPT-MainMenu.png)

It is my own point of view on building a structure for an HTML5 game. If you think something can be improved feel free to send the pull request.

### Features:

- mobile-first, fully responsive (portrait and landscape)
- boot, preloader, main menu, settings, story, and gameplay states
- paused and game over screens
- sound and music management
- multilanguage support
- keyboard shortcuts support
- WebFont plugin using custom fonts
- custom Button class
- highscore via localStorage
- tweens and animations
- particle emitter
- shake, flash, and fade camera effects
- Progressive Web App support
- Web Monetization enabled
- Progressive Loading

### Progressive Web App:

Template have [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps#Core_PWA_guides) (PWA) support, turned off by default (see `enablePWA` variable in `start.js` file): manifest file for Add to Home Screen feature, Service Worker for offline use, and notifications template.

### Web Monetization:

[Web Monetization](https://webmonetization.org/) support is turned on in the template. If you want to implement it you can replace the `monetization` meta tag in `index.html` with your own and determine if `document.monetization` is available in the browser to make changes in the source code.

### Progressive Loading:

It's a Phaser-specific Progressive Loading approach, which impoves the initial load time by deferring "anything that's not main menu items" to load in the background as soon as main menu actually appears.

### License:

The license in use is **CC BY-SA 3.0** - see `License.txt` for details.

### Kudos:

If you like what I'm doing and gonna use the template in your project, or just appreciate sharing the code in the open, you can say _"thank you"_ by [buying me a beer](https://www.paypal.me/end3r). Coffee works fine too. Cheers!
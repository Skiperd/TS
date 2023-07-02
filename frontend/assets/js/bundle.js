/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A0035-interface-classes/A0035-interface-classes.ts":
/*!****************************************************************!*\
  !*** ./src/A0035-interface-classes/A0035-interface-classes.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    constructor(videoPlayerElements) {
        this.videoPlay = videoPlayerElements.videoPlay;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
    playToggle() {
        if (this.videoPlay.paused) {
            this.videoPlay.play();
            this.playButton.innerText = 'Pausar';
        }
        else {
            this.videoPlay.pause();
            this.playButton.innerText = 'Iniciar';
        }
    }
    stop() {
    }
    iniciarEventos() {
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        });
        this.stopButton.addEventListener('click', () => {
            this.videoPlay.pause();
            this.videoPlay.currentTime = 0;
            this.playButton.innerText = 'Iniciar';
        });
    }
}
exports["default"] = VideoPlayer;
const videoplayer = new VideoPlayer({
    videoPlay: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop'),
});
videoplayer.iniciarEventos();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!************************************************!*\
  !*** ./src/A0019-exercicio/A0019-exercicio.ts ***!
  \************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../A0035-interface-classes/A0035-interface-classes */ "./src/A0035-interface-classes/A0035-interface-classes.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
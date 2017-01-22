/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Import components
	
	var _nexus_keyboard = __webpack_require__(1);
	
	var _nexus_keyboard2 = _interopRequireDefault(_nexus_keyboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Set up jQuery
	$(document).ready(function () {
	  // Initialize material select
	  $('select').material_select();
	  // Create instruments:
	  // createKeyboard();
	  $('select').change(function () {
	    $('select option:selected').each(function () {
	      (0, _nexus_keyboard2.default)();
	    });
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	exports.default = createKeyboard;
	function createKeyboard() {
			// Create Nexus keyboard widget
			var keyboard = window.nx.add('keyboard');
	
			// Create div
			var newDiv = document.createElement('div');
			newDiv.setAttribute('id', 'instrument-container');
	
			$('#instrument').append(newDiv);
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
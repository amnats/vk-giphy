/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: TypeError: Map#toJSON isn't generic (While processing preset: \"C:\\\\Users\\\\Artem\\\\vk-giphy\\\\node_modules\\\\json-loader\\\\index.js\")\n    at String.toJSON (C:\\Users\\Artem\\vk-giphy\\node_modules\\core-js\\library\\modules\\_collection-to-json.js:6:36)\n    at Function.toJSON (C:\\Users\\Artem\\vk-giphy\\node_modules\\core-js\\library\\modules\\_ctx.js:18:15)\n    at JSON.stringify (<anonymous>)\n    at module.exports (C:\\Users\\Artem\\vk-giphy\\node_modules\\json-loader\\index.js:9:36)\n    at C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:317:46\n    at Array.map (native)\n    at OptionManager.resolvePresets (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:275:20)\n    at OptionManager.mergePresets (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:264:10)\n    at OptionManager.mergeOptions (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:249:14)\n    at OptionManager.init (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:368:12)\n    at File.initOptions (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-loader\\lib\\index.js:49:20)\n    at Object.module.exports (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-loader\\lib\\index.js:174:20)");

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: TypeError: Map#toJSON isn't generic (While processing preset: \"C:\\\\Users\\\\Artem\\\\vk-giphy\\\\node_modules\\\\json-loader\\\\index.js\")\n    at String.toJSON (C:\\Users\\Artem\\vk-giphy\\node_modules\\core-js\\library\\modules\\_collection-to-json.js:6:36)\n    at Function.toJSON (C:\\Users\\Artem\\vk-giphy\\node_modules\\core-js\\library\\modules\\_ctx.js:18:15)\n    at JSON.stringify (<anonymous>)\n    at module.exports (C:\\Users\\Artem\\vk-giphy\\node_modules\\json-loader\\index.js:9:36)\n    at C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:317:46\n    at Array.map (native)\n    at OptionManager.resolvePresets (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:275:20)\n    at OptionManager.mergePresets (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:264:10)\n    at OptionManager.mergeOptions (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:249:14)\n    at OptionManager.init (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:368:12)\n    at File.initOptions (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-loader\\lib\\index.js:49:20)\n    at Object.module.exports (C:\\Users\\Artem\\vk-giphy\\node_modules\\babel-loader\\lib\\index.js:174:20)");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
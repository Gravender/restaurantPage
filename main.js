/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/footer */ \"./src/modules/footer.js\");\n\r\n\r\n\r\n\r\n\r\nconst header =  () => {\r\n    const content = document.getElementById('content');\r\n    const head = document.createElement(\"header\");\r\n    head.innerHTML =`\r\n    <nav>\r\n        <h2>Good Burger</h2>\r\n        <ul class =\"tabs\">\r\n            <li data-target = '#home' class = 'tab active'>Home</li>\r\n            <li data-target = '#menu' class = 'tab'>Menu</li>\r\n            <li data-target = '#contact' class = 'tab'>Contact</li>\r\n        </ul>\r\n    </nav>\r\n    `;\r\n    content.appendChild(head);\r\n};\r\nheader();\r\n(0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\n(0,_modules_footer__WEBPACK_IMPORTED_MODULE_3__.loadFooter)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\n\r\nfunction loadContact(){\r\n    const content = document.getElementById('content');\r\n\r\n    const img = document.createElement('img');\r\n    const headline = document.createElement('h1');\r\n    const description = document.createElement('p');\r\n\r\n    img.setAttribute('src', \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg\");\r\n    img.setAttribute('alt', \"Cheese Burger\");\r\n\r\n    headline.innerText = 'Made with love';\r\n    description.innerText = 'This is the most amazing burger place ever made.';\r\n\r\n    content.appendChild(img);\r\n    content.appendChild(headline);\r\n    content.appendChild(description);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFooter\": () => (/* binding */ loadFooter)\n/* harmony export */ });\n\r\nfunction loadFooter(){\r\n    const content = document.getElementById('content');\r\n\r\n    const footer = document.createElement('footer');\r\n    const link = document.createElement('a');\r\n\r\n    footer.innerText = \"Made by:\";\r\n\r\n    link.setAttribute('href', \"https://github.com/Gravender\");\r\n    link.innerText = 'Gravender';\r\n\r\n    footer.appendChild(link);\r\n    content.appendChild(footer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\n\r\n\r\nfunction loadHome(){\r\n    const content = document.getElementById('content');\r\n\r\n    const home = document.createElement('div');\r\n    const headline = document.createElement('p');\r\n    const description = document.createElement('h1');\r\n    \r\n    home.id = 'home';\r\n\r\n    headline.innerText = 'Burgers made with love';\r\n    description.innerText = 'Create your own amazing Burger from scratch!';\r\n\r\n    home.appendChild(description);\r\n    home.appendChild(headline);\r\n    content.appendChild(home);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n\r\nfunction loadMenu(){\r\n    const content = document.getElementById('content');\r\n\r\n    const img = document.createElement('img');\r\n    const headline = document.createElement('h1');\r\n    const description = document.createElement('p');\r\n\r\n    img.setAttribute('src', \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg\");\r\n    img.setAttribute('alt', \"Cheese Burger\");\r\n\r\n    headline.innerText = 'Made with love';\r\n    description.innerText = 'This is the most amazing burger place ever made.';\r\n\r\n    content.appendChild(img);\r\n    content.appendChild(headline);\r\n    content.appendChild(description);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
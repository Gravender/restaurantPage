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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/footer */ \"./src/modules/footer.js\");\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst tabSelector = () =>{\r\n    const tabs = document.querySelectorAll(\".tab\");\r\n    tabs.forEach((tab) =>{\r\n        tab.addEventListener('click', () =>{\r\n            const target = tab.dataset.target;\r\n            tabs.forEach((tab) =>{\r\n                tab.classList.remove(\"active\");\r\n            });\r\n            tab.classList.add(\"active\");\r\n            if(target == 'Home')(0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\n            if(target == 'Menu')(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\r\n            if(target == 'Contact')(0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__.loadContact)();\r\n        });\r\n    });\r\n};\r\n(0,_modules_header__WEBPACK_IMPORTED_MODULE_4__.loadHeader)();\r\n(0,_modules_footer__WEBPACK_IMPORTED_MODULE_3__.loadFooter)();\r\ntabSelector();\r\n(0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\n\r\nfunction loadContact(){\r\n    const content = document.getElementById('content');\r\n\r\n    const contact = document.createElement('div');\r\n    const headline = document.createElement('h1');\r\n    const address = document.createElement('p');\r\n    const hours = document.createElement('p');\r\n\r\n    while (content.firstChild) {\r\n        content.removeChild(content.lastChild);\r\n    }\r\n\r\n    contact.id = 'contact';\r\n\r\n    headline.innerText = 'Contact us';\r\n    address.innerText = '2262 Blackwell Street Anchorage, AK 99504 ';\r\n    hours.innerText = 'Mon-Sun 1am-2am';\r\n\r\n    contact.appendChild(headline);\r\n    contact.appendChild(address);\r\n    contact.appendChild(hours);\r\n    content.appendChild(contact);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFooter\": () => (/* binding */ loadFooter)\n/* harmony export */ });\n\r\nfunction loadFooter(){\r\n    const body = document.querySelector('body');\r\n\r\n    const footer = document.createElement('footer');\r\n    const link = document.createElement('a');\r\n\r\n    footer.innerText = \"Made by:\";\r\n\r\n    link.setAttribute('href', \"https://github.com/Gravender\");\r\n    link.innerText = 'Gravender';\r\n\r\n    footer.appendChild(link);\r\n    body.appendChild(footer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHeader\": () => (/* binding */ loadHeader)\n/* harmony export */ });\nfunction loadHeader(){\r\n    const body = document.querySelector('body');\r\n    const head = document.createElement(\"header\");\r\n    const content = document.getElementById('content');\r\n    head.innerHTML =`\r\n    <nav>\r\n        <h2>Good Burger</h2>\r\n        <ul class =\"tabs\">\r\n            <li data-target = 'Home' class = 'tab active'>Home</li>\r\n            <li data-target = 'Menu' class = 'tab'>Menu</li>\r\n            <li data-target = 'Contact' class = 'tab'>Contact</li>\r\n        </ul>\r\n    </nav>\r\n    `;\r\n    body.insertBefore(head, content);\r\n};\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\n\r\n\r\nfunction loadHome(){\r\n    const content = document.getElementById('content');\r\n\r\n    const home = document.createElement('div');\r\n    const headline = document.createElement('p');\r\n    const description = document.createElement('h1');\r\n    \r\n    while (content.firstChild) {\r\n        content.removeChild(content.lastChild);\r\n    }\r\n\r\n    home.id = 'home';\r\n\r\n    headline.innerText = 'Burgers made with love';\r\n    description.innerText = 'Create your own amazing Burger from scratch!';\r\n\r\n    home.appendChild(description);\r\n    home.appendChild(headline);\r\n    content.appendChild(home);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n\r\nconst menuItem = (src, alt, title, price, description) =>{\r\n    const item = document.createElement('div');\r\n\r\n    const itemImg = document.createElement('img');\r\n    const itemTitle = document.createElement('h1');\r\n    const itemPrice = document.createElement('h2');\r\n    const itemDescription = document.createElement('p');\r\n\r\n    item.classList.add('menuItem');\r\n\r\n    itemImg.setAttribute('src', src);\r\n    itemImg.setAttribute('alt', alt);\r\n\r\n    itemTitle.innerText = title;\r\n    itemPrice.innerText = `$${price}`;\r\n    itemDescription.innerText = description;\r\n\r\n    item.appendChild(itemImg);\r\n    item.appendChild(itemTitle);\r\n    item.appendChild(itemPrice);\r\n    item.appendChild(itemDescription);\r\n\r\n    return item;\r\n};\r\n\r\n\r\nfunction loadMenu(){\r\n    const content = document.getElementById('content');\r\n    while (content.firstChild) {\r\n        content.removeChild(content.lastChild);\r\n    }\r\n\r\n    const menuDiv = document.createElement('div');\r\n    menuDiv.id = 'menu';\r\n\r\n    const menu = [\r\n        menuItem(\r\n            './img/cheeseBurger.jpg',\r\n            'Cheese Burger',\r\n            'Cheese Burger',\r\n            '5.00',\r\n            'Burger with cheese'\r\n        ),\r\n        menuItem(\r\n            './img/veggieBurger.jpg',\r\n            'Veggie Burger',\r\n            'Veggie Burger',\r\n            '4.00',\r\n            'Burger made entirely out of veggies'\r\n        ),\r\n        menuItem(\r\n            './img/californiaBurger.jpg',\r\n            'California Burger',\r\n            'California Burger',\r\n            '7.00',\r\n            'Burger with Avocado'\r\n        ),\r\n        menuItem(\r\n            './img/tacoBurger.jpg',\r\n            'Taco Burger',\r\n            'Taco Burger',\r\n            '8.00',\r\n            'Burger with Pico de Gailo'\r\n        )\r\n    ]\r\n    menu.forEach((item) =>{\r\n        menuDiv.appendChild(item);\r\n    });\r\n    content.appendChild(menuDiv);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

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
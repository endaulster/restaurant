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

/***/ "./src/contactpage.js":
/*!****************************!*\
  !*** ./src/contactpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst createContactPage = () => {\n    const content = document.querySelector(\"body > div\");\n    const contactContent = document.createElement(\"div\");\n    contactContent.classList.add(\"page-content\");\n    \n    // We add a temporal test text\n    const fakeText = document.createElement(\"p\");\n    fakeText.textContent = \"This is a contact page\";\n    contactContent.appendChild(fakeText);\n\n    // We add it\n    content.appendChild(contactContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack://restaurant-pack/./src/contactpage.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestaurantHomepage = () => {\n    const content = document.querySelector(\"body > div\");\n    const pageContent = document.createElement(\"div\");\n    pageContent.classList.add(\"page-content\");\n\n    // Create image\n    const image = document.createElement(\"img\");\n    image.src = \"https://miro.medium.com/v2/resize:fit:1400/0*VqMkTYoYGOj5hQYU.jpg\"\n    image.height = \"300\";\n    pageContent.appendChild(image);\n\n    // Create title\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Il Quotidiano\";\n    pageContent.appendChild(title);\n\n    // Create welcoming text\n    const homewelcome = document.createElement(\"p\");\n    homewelcome.textContent = \"Fatto in casa — feel like home with the best cucina italiana in the city!\";\n    pageContent.appendChild(homewelcome);\n\n    // Load\n    content.appendChild(pageContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomepage);\n\n//# sourceURL=webpack://restaurant-pack/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n//Load page\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-pack/./src/index.js?");

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst createMenuPage = () => {\n    const content = document.querySelector(\"body > div\");\n    const menuContent = document.createElement(\"div\");\n    menuContent.classList.add(\"page-content\");\n\n    // We add a temporal test text\n    const fakeText = document.createElement(\"p\");\n    fakeText.textContent = \"This is a menu page\";\n    menuContent.appendChild(fakeText);\n\n    // We add it\n    content.appendChild(menuContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\n//# sourceURL=webpack://restaurant-pack/./src/menupage.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\n\n\nfunction pageLoad()\n{\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurant-pack/./src/pageLoad.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contactpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactpage */ \"./src/contactpage.js\");\n/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage */ \"./src/menupage.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\n\n\n\nconst createPageChanger = () => {\n    const content = document.querySelector(\"body > div\");\n    // Buttons\n    const home = document.createElement(\"div\");\n    const menu = document.createElement(\"div\");\n    const contact = document.createElement(\"div\");\n\n    // We give them classes\n    home.classList.add(\"tab\");\n    menu.classList.add(\"tab\");\n    contact.classList.add(\"tab\");\n\n    //We set the text\n    home.textContent = \"Home\";\n    menu.textContent = \"Menu\";\n    contact.textContent = \"Contact\";\n\n    //We add them\n    content.appendChild(home);\n    content.appendChild(menu);\n    content.appendChild(contact);\n\n    //We make them clickable\n    home.addEventListener(\"click\", () => {\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        clearPage();\n    })\n    \n    menu.addEventListener(\"click\", () => {\n        ;(0,_menupage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        clearPage();\n    })\n    \n    contact.addEventListener(\"click\", () => {\n        ;(0,_contactpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        clearPage();\n    })\n}\n\nfunction clearPage(){\n    const content = document.querySelector(\"body > div\");\n    const pageContent = document.querySelector(\"body > div > div.page-content\")\n    if (pageContent){\n        content.removeChild(pageContent);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPageChanger);\n\n//# sourceURL=webpack://restaurant-pack/./src/tabs.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
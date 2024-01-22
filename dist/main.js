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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst createContactPage = () => {\n    const content = document.querySelector(\"body > div\");\n    const contactContent = document.createElement(\"div\");\n    contactContent.classList.add(\"page-content\");\n    \n    // We add a pretty picture\n    const contactPicture = document.createElement(\"img\");\n    contactPicture.classList.add(\"contactPicture\");\n    contactPicture.src = \"contact.jpg\";\n    contactPicture.width = \"400\";\n    contactPicture.height = \"250\";\n\n    contactContent.appendChild(contactPicture);\n    \n    // We create the introduction to the contact page\n   \n    const contactIntro = document.createElement(\"p\");\n    contactIntro.setAttribute(\"class\", \"contactP\");\n    contactIntro.setAttribute(\"id\", \"contactI\");\n    contactIntro.innerHTML = \"Buon giorno! We'd love to hear from you! Whether you have questions about our delectable dishes, want to make a reservation for a cozy dinner, or simply wish to say ciao, our doors are always open. <br><br>Feel free to reach out via email. Grazie for considering Il Quotidiano - where authentic Italian flavors meet warm hospitality!\"\n    contactContent.appendChild(contactIntro);\n\n    // We make the contact part\n    const contactText = document.createElement(\"p\");\n    contactText.textContent = \"You've got questions? \"; \n    contactText.setAttribute(\"class\", \"contactP\");\n    contactText.setAttribute(\"id\", \"contactUS\");\n        // We want to create a custom mail subject and stuff\n    const contactLink = document.createElement(\"a\");\n\n    let theMail = \"g.antorrealba@gmail.com\";\n    let theSubject = \"I%20am%20very%20excited%20to%20contact%20you\";\n    let mailContent = \"Hello,%0A%0AI want to know everything about how you have made this website!\";    \n    let mailtoLink = `mailto:${theMail}?subject=${theSubject}&body=${mailContent}`;\n\n    contactLink.href = mailtoLink;\n    contactLink.textContent = \"Contact us\"; \n    contactLink.setAttribute(\"class\", \"contactP\");\n\n    // We join all of this together\n    contactText.appendChild(contactLink);\n\n    // We create a div to contain it all(Address)\n    const contactDirection = document.createElement(\"div\");\n    contactDirection.setAttribute(\"class\", \"restAddress\");\n\n        //We create a SVG\n    let contactSv = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n    contactSv.setAttribute(\"width\", \"100\");\n    contactSv.setAttribute(\"height\", \"100\");\n        //We create an image with that SVG\n    let contactIcon = document.createElementNS(\"http://www.w3.org/2000/svg\", \"image\");\n    contactIcon.setAttribute(\"width\", \"100%\");\n    contactIcon.setAttribute(\"height\", \"100%\");\n    contactIcon.setAttribute(\"href\", \"map.svg\");    \n    contactSv.appendChild(contactIcon); \n    // We join all of this together\n    contactDirection.appendChild(contactSv);    \n    \n    const contactAddress = document.createElement(\"p\");\n    contactAddress.setAttribute(\"class\", \"contactP\");\n    contactAddress.innerHTML = \"Av. Callao 1299, C.A.B.A. <br>Buenos Aires, Argentina.\";\n    \n    contactDirection.appendChild(contactAddress);\n   \n    // Wrapper for address and contact us\n    const randomWrapper = document.createElement(\"div\");\n    randomWrapper.setAttribute(\"class\", \"randomWrapper\");\n    contactContent.appendChild(randomWrapper);\n\n    // We join the address div with the whole thing\n    randomWrapper.appendChild(contactDirection);\n    randomWrapper.appendChild(contactText); \n\n    content.appendChild(contactContent);    \n    //We clean the background\n    Object.assign(content.style, {\n        backgroundColor: \"rgb(25 23 22)\",\n        backgroundImage: \"\",\n        backgroundSize: \"\",\n        backgroundRepeat: \"\",\n        backgroundPosition: \"\",\n        backgroundAttachment: \"\"\n      });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack://restaurant-pack/./src/contactpage.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestaurantHomepage = () => {\n    const content = document.querySelector(\"body > div\");\n    const pageContent = document.createElement(\"div\");\n    pageContent.classList.add(\"page-content\");\n\n    // Create image\n    const image = document.createElement(\"img\");\n    image.src = \"https://miro.medium.com/v2/resize:fit:1400/0*VqMkTYoYGOj5hQYU.jpg\"\n    // image.height = \"300\";\n    // pageContent.appendChild(image);\n\n    // Create title\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Il Quotidiano\";\n    title.setAttribute(\"id\", \"hometitle\");\n    pageContent.appendChild(title);\n\n    // Create welcoming text\n    const homewelcome = document.createElement(\"p\");\n    homewelcome.textContent = \"Fatto in casa — feel like home with the best cucina italiana in the city!\";\n    homewelcome.setAttribute(\"id\", \"homewelcome\");\n    pageContent.appendChild(homewelcome);\n\n    // Load\n    content.appendChild(pageContent);\n    \n    //We add a background image to main page\n    Object.assign(content.style, {\n        backgroundImage: \"url(restaurant.jpg)\",\n        backgroundSize: \"cover\",\n        backgroundRepeat: \"no-repeat\",\n        backgroundPosition: \"center center\",\n        backgroundAttachment: \"fixed\"\n      });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomepage);\n\n//# sourceURL=webpack://restaurant-pack/./src/homepage.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst createMenuPage = () => {\n    const content = document.querySelector(\"body > div\");\n    const menuContent = document.createElement(\"div\");\n    menuContent.classList.add(\"page-content\");\n\n    // We add a temporal test text\n    const fakeText = document.createElement(\"p\");\n    fakeText.textContent = \"This is a menu page\";\n    menuContent.appendChild(fakeText);\n\n    // We add it\n    content.appendChild(menuContent);\n\n    //We clean the background\n    Object.assign(content.style, {\n        backgroundColor: \"rgb(130 115 97)\",\n        backgroundImage: \"\",\n        backgroundSize: \"\",\n        backgroundRepeat: \"\",\n        backgroundPosition: \"\",\n        backgroundAttachment: \"\"\n      });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\n//# sourceURL=webpack://restaurant-pack/./src/menupage.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contactpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactpage */ \"./src/contactpage.js\");\n/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage */ \"./src/menupage.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\n\n\n\nconst createPageChanger = () => {\n    const content = document.querySelector(\"body > div\");\n    // Buttons\n    const home = document.createElement(\"div\");\n    const menu = document.createElement(\"div\");\n    const contact = document.createElement(\"div\");\n\n    // We give them classes\n    home.classList.add(\"tab\");\n    home.setAttribute(\"id\", \"homeb\")\n    \n    menu.classList.add(\"tab\");\n    menu.setAttribute(\"id\", \"menub\")\n    \n    contact.classList.add(\"tab\");\n    contact.setAttribute(\"id\", \"contactb\")\n\n    //We set the text\n    home.textContent = \"HOME\";\n    menu.textContent = \"MENU\";\n    contact.textContent = \"CONTACT\";\n\n    //We add them\n    const menubar = document.createElement(\"div\");\n    menubar.classList.add(\"navbar\");\n\n    menubar.appendChild(home);\n    menubar.appendChild(menu);\n    menubar.appendChild(contact);\n\n    content.appendChild(menubar);\n\n    //We make them clickable\n    home.addEventListener(\"click\", () => {\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        clearPage();\n        home.setAttribute(\"class\", \"used\");\n        menu.setAttribute(\"class\", \"tab\");\n        contact.setAttribute(\"class\", \"tab\");\n    })\n    \n    menu.addEventListener(\"click\", () => {\n        ;(0,_menupage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        clearPage();\n        home.setAttribute(\"class\", \"tab\");\n        menu.setAttribute(\"class\", \"used\");\n        contact.setAttribute(\"class\", \"tab\");\n    })\n    \n    contact.addEventListener(\"click\", () => {\n        ;(0,_contactpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        clearPage();\n        home.setAttribute(\"class\", \"tab\");\n        menu.setAttribute(\"class\", \"tab\");\n        contact.setAttribute(\"class\", \"used\");\n    })\n}\n\nfunction clearPage(){\n    const content = document.querySelector(\"body > div\");\n    const pageContent = document.querySelector(\"body > div > div.page-content\")\n    if (pageContent){\n        content.removeChild(pageContent);\n    }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPageChanger);\n\n//# sourceURL=webpack://restaurant-pack/./src/tabs.js?");

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
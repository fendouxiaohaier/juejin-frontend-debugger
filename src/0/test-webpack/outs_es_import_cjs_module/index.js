/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/user_es_import_cjs_module/age.js":
/*!**********************************************!*\
  !*** ./src/user_es_import_cjs_module/age.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showAge": () => (/* binding */ showAge),
/* harmony export */   "showAge2": () => (/* binding */ showAge2)
/* harmony export */ });
const age = 18;

const showAge = () => {
  console.log(age);
};

const showAge2 = () => {
  console.log(age);
};



/***/ }),

/***/ "./src/user_es_import_cjs_module/name.js":
/*!***********************************************!*\
  !*** ./src/user_es_import_cjs_module/name.js ***!
  \***********************************************/
/***/ ((module) => {

const name = "lee";

const showName = () => {
  console.log(name);
};

const showNameAgain = () => {
  console.log(name);
};

module.exports = { showName, showNameAgain };


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************************!*\
  !*** ./src/user_es_import_cjs_module/user.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showUser": () => (/* binding */ showUser)
/* harmony export */ });
/* harmony import */ var _age__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./age */ "./src/user_es_import_cjs_module/age.js");
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./name */ "./src/user_es_import_cjs_module/name.js");
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_name__WEBPACK_IMPORTED_MODULE_1__);




const showUser = () => {
  _name__WEBPACK_IMPORTED_MODULE_1___default().showName()
  ;(0,_age__WEBPACK_IMPORTED_MODULE_0__.showAge)();
  (0,_name__WEBPACK_IMPORTED_MODULE_1__.showName)();
  _age__WEBPACK_IMPORTED_MODULE_0__["default"].showAge2();
};

showUser();


})();

/******/ })()
;
//# sourceMappingURL=index.js.map
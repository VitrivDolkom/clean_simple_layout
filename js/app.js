/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/acc.js":
/*!***********************!*\
  !*** ./src/js/acc.js ***!
  \***********************/
/***/ (() => {

var accardeonTitle = document.querySelectorAll(".acc__title");
var accardeonElement = document.querySelectorAll(".acc__el");
accardeonTitle.forEach(function (el) {
  el.addEventListener("click", function (e) {
    if (el.parentElement.classList.contains("open")) {
      el.parentElement.classList.toggle("open");
    } else {
      var i = 0;

      while (i < accardeonTitle.length) {
        if (accardeonTitle[i].parentElement.classList.contains("open") && accardeonTitle[i] != e) {
          accardeonTitle[i].parentElement.classList.toggle("open");
          break;
        }

        i += 1;
      }

      el.parentElement.classList.toggle("open");
    }
  });
});

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ "./src/js/slider.js");
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger.js */ "./src/js/burger.js");
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_burger_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _linearScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linearScroll.js */ "./src/js/linearScroll.js");
/* harmony import */ var _linearScroll_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_linearScroll_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _saveScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saveScroll.js */ "./src/js/saveScroll.js");
/* harmony import */ var _saveScroll_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_saveScroll_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fixMenuLinks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fixMenuLinks.js */ "./src/js/fixMenuLinks.js");
/* harmony import */ var _fixMenuLinks_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fixMenuLinks_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _acc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./acc.js */ "./src/js/acc.js");
/* harmony import */ var _acc_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_acc_js__WEBPACK_IMPORTED_MODULE_5__);





 // import "./linearAppear.js";

/***/ }),

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/***/ (() => {

var subMenuBtn = document.querySelector(".header__submenu");
var subMenu = document.querySelector(".header__social");
var burger = document.querySelector(".menu__burger");
var nav = document.querySelector(".menu__nav");
var body = document.querySelector("body");
var menuLinks = document.querySelectorAll(".menu__link");
var socialLinks = document.querySelectorAll(".header__link");
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle("lock");
});
var black = "#000";
var grey = "#697CA6";

if (screen.width < 992) {
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      link.style.color = black;
      setTimeout(function () {
        link.style.color = grey;
      }, 900);

      if (burger.classList.contains("active")) {
        burger.classList.remove("active");
        nav.classList.remove("active");
        body.classList.remove("lock");
      }
    });
  });
}

if (screen.width < 561) {
  subMenuBtn.addEventListener("click", function () {
    subMenuBtn.classList.toggle("active");
    subMenu.classList.toggle("active");
  });
  socialLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      if (subMenuBtn.classList.contains("active")) {
        subMenuBtn.classList.toggle("active");
        subMenu.classList.toggle("active");
      }
    });
  });
}

/***/ }),

/***/ "./src/js/fixMenuLinks.js":
/*!********************************!*\
  !*** ./src/js/fixMenuLinks.js ***!
  \********************************/
/***/ (() => {

var memuLinks = document.querySelectorAll(".menu__el");
memuLinks.forEach(function (element) {
  var width = element.clientWidth + 2;
  element.style.width = "".concat(width) + "px";
});

/***/ }),

/***/ "./src/js/linearScroll.js":
/*!********************************!*\
  !*** ./src/js/linearScroll.js ***!
  \********************************/
/***/ (() => {

$(document).ready(function () {
  $('a.menu__link').on('click', function () {
    var $archor = $(this).attr('href');
    var cont_top = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
    $('html, body').stop().animate({
      scrollTop: $($archor).offset().top - $('.header').height()
    }, {
      duration: 1000,
      specialEasing: {
        width: 'linear',
        height: 'easyInOutCubic'
      }
    });
    return false;
  });
});

/***/ }),

/***/ "./src/js/saveScroll.js":
/*!******************************!*\
  !*** ./src/js/saveScroll.js ***!
  \******************************/
/***/ (() => {

var body = document.querySelector("body");
var html = document.querySelector('html');
document.addEventListener("DOMContentLoaded", function () {
  var newPositionY = localStorage.getItem("positionBeforeReload");
  html.scrollTo(0, newPositionY); // window.scrollTo(0, newPositionY);
});
body.addEventListener("scroll", function () {
  var currentPosition = body.scrollTop;
  localStorage.setItem("positionBeforeReload", currentPosition);
});

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

$(function () {
  $('.sliderHeader').slick({
    dots: true,
    infinite: false,
    arrows: false
  });
  $('.blog__slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    responsive: [{
      breakpoint: 992,
      speed: 600
    }]
  });
  $('.cust__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    leftMode: true,
    variableWidth: true,
    speed: 800,
    responsive: [{
      breakpoint: 1300,
      slidesToShow: 1
    }]
  });
});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdef"] = self["webpackChunkdef"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
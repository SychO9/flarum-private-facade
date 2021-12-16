module.exports =
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.tsx");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/components/DefaultLoginIllustration.tsx":
/*!***********************************************************!*\
  !*** ./src/forum/components/DefaultLoginIllustration.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultLoginIllustration; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);



var DefaultLoginIllustration = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DefaultLoginIllustration, _Component);

  function DefaultLoginIllustration() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = DefaultLoginIllustration.prototype;

  _proto.view = function view() {
    return m("svg", {
      width: "900",
      height: "600",
      viewBox: "0 0 900 600",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, m("path", {
      fill: "transparent",
      d: "M0 0h900v600H0z"
    }), m("rect", {
      x: "342.141",
      y: "162",
      width: "42.461",
      height: "112.141",
      rx: "21.231",
      transform: "rotate(90 342.141 162)",
      fill: "#E1E4E5"
    }), m("rect", {
      x: "337.265",
      y: "166.331",
      width: "33.751",
      height: "33.751",
      rx: "16.876",
      transform: "rotate(90 337.265 166.331)",
      fill: "#fff"
    }), m("rect", {
      x: "516.369",
      y: "401",
      width: "42.461",
      height: "112.141",
      rx: "21.231",
      transform: "rotate(90 516.369 401)",
      fill: "#E1E4E5"
    }), m("rect", {
      x: "511.493",
      y: "405.331",
      width: "33.751",
      height: "33.751",
      rx: "16.876",
      transform: "rotate(90 511.493 405.331)",
      fill: "#fff"
    }), m("rect", {
      x: "141.84",
      y: "291.334",
      width: "161.335",
      height: "161.335",
      rx: "80.668",
      fill: "#666AF6"
    }), m("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M259.171 405.842v5.394c0 2.977-2.385 5.394-5.323 5.394h-63.876c-2.939 0-5.323-2.417-5.323-5.394v-5.481c0-16.322 18.407-26.926 37.261-26.926 18.854 0 37.261 10.61 37.261 26.926m-23.901-74.313c7.381 7.381 7.381 19.348 0 26.729-7.381 7.382-19.349 7.382-26.73 0-7.381-7.381-7.381-19.348 0-26.729s19.349-7.381 26.73 0z",
      fill: "#fff"
    }), m("rect", {
      x: "584.96",
      y: "317.464",
      width: "161.335",
      height: "161.335",
      rx: "80.668",
      fill: "#666AF6"
    }), m("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M702.292 431.972v5.394c0 2.977-2.385 5.394-5.323 5.394h-63.877c-2.938 0-5.323-2.417-5.323-5.394v-5.481c0-16.322 18.407-26.927 37.261-26.927 18.855 0 37.262 10.61 37.262 26.927m-23.902-74.313c7.381 7.381 7.381 19.348 0 26.729-7.381 7.382-19.348 7.382-26.729 0-7.382-7.381-7.382-19.348 0-26.729 7.381-7.381 19.348-7.381 26.729 0z",
      fill: "#fff"
    }), m("rect", {
      x: "370",
      y: "181",
      width: "161.335",
      height: "161.335",
      rx: "80.668",
      fill: "#666AF6"
    }), m("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M487.331 295.507v5.394c0 2.978-2.385 5.394-5.323 5.394h-63.876c-2.938 0-5.323-2.416-5.323-5.394v-5.48c0-16.322 18.407-26.927 37.261-26.927 18.854 0 37.261 10.61 37.261 26.927m-23.901-74.313c7.381 7.381 7.381 19.348 0 26.729-7.382 7.381-19.349 7.381-26.73 0s-7.381-19.348 0-26.729c7.381-7.382 19.348-7.382 26.73 0z",
      fill: "#fff"
    }), m("path", {
      d: "M259.701 232.542h.147c.874 12.56 10.079 12.753 10.079 12.753s-10.15.201-10.15 14.714c0-14.513-10.151-14.714-10.151-14.714s9.201-.193 10.075-12.753zm303.761 89.277h.147c.874 12.56 10.079 12.753 10.079 12.753s-10.151.202-10.151 14.714c0-14.512-10.15-14.714-10.15-14.714s9.201-.193 10.075-12.753zm-218.839 29.397h.148c.873 12.559 10.079 12.753 10.079 12.753s-10.151.201-10.151 14.713c0-14.512-10.151-14.713-10.151-14.713s9.202-.194 10.075-12.753zm27.452-212.791h.148c.873 12.559 10.079 12.753 10.079 12.753s-10.151.201-10.151 14.713c0-14.512-10.151-14.713-10.151-14.713s9.202-.194 10.075-12.753zm222.918 53.989h.071c.422 6.062 4.865 6.155 4.865 6.155s-4.9.097-4.9 7.102c0-7.005-4.899-7.102-4.899-7.102s4.441-.093 4.863-6.155zm-468.977 116.34h.072c.421 6.063 4.864 6.156 4.864 6.156s-4.899.097-4.899 7.102c0-7.005-4.899-7.102-4.899-7.102s4.441-.093 4.862-6.156zm-9.798 121.94h.071c.422 6.062 4.865 6.156 4.865 6.156s-4.9.097-4.9 7.101c0-7.004-4.899-7.101-4.899-7.101s4.441-.094 4.863-6.156zm657.604-71.857h.071c.422 6.062 4.865 6.155 4.865 6.155s-4.9.097-4.9 7.102c0-7.005-4.899-7.102-4.899-7.102s4.441-.093 4.863-6.155z",
      fill: "#E1E4E5"
    }), m("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M735.689 297.235h3.597c.87 0 1.57.708 1.57 1.57v3.598c0 .869-.707 1.57-1.57 1.57h-3.597c-.863 0-1.57-.708-1.57-1.57v-3.598c-.008-.862.7-1.57 1.57-1.57zm12.472 0h3.597c.863 0 1.571.708 1.571 1.57v3.598c0 .869-.708 1.57-1.571 1.57h-3.597c-.862 0-1.57-.708-1.57-1.57v-3.598c0-.862.708-1.57 1.57-1.57zm12.481 0h3.597c.862 0 1.57.708 1.57 1.57v3.598c0 .869-.708 1.57-1.57 1.57h-3.597a1.577 1.577 0 0 1-1.571-1.57v-3.598a1.568 1.568 0 0 1 1.571-1.57zm12.472 0h3.597c.863 0 1.57.708 1.57 1.57v3.598c0 .869-.707 1.57-1.57 1.57h-3.597c-.87 0-1.578-.708-1.578-1.57v-3.598a1.588 1.588 0 0 1 1.578-1.57zm12.473 0h3.597c.87 0 1.578.708 1.578 1.57v3.598c0 .869-.708 1.57-1.578 1.57h-3.597c-.863 0-1.57-.708-1.57-1.57v-3.598c0-.862.707-1.57 1.57-1.57zm-36.969 13.601h3.598c.862 0 1.57.707 1.57 1.57v3.604c0 .863-.708 1.571-1.57 1.571h-3.598c-.869 0-1.57-.708-1.57-1.571v-3.597a1.568 1.568 0 0 1 1.57-1.577zm12.473 0h3.597c.863 0 1.57.707 1.57 1.57v3.604c0 .863-.707 1.571-1.57 1.571h-3.597c-.863 0-1.57-.708-1.57-1.571v-3.597c-.008-.87.7-1.577 1.57-1.577zm12.473 0h3.597c.87 0 1.578.707 1.578 1.57v3.604c0 .863-.708 1.571-1.578 1.571h-3.597c-.863 0-1.57-.708-1.57-1.571v-3.597c0-.87.707-1.577 1.57-1.577zm-12.922-28.212h3.597c.862 0 1.57.708 1.57 1.571v3.597c0 .87-.708 1.57-1.57 1.57h-3.597a1.577 1.577 0 0 1-1.571-1.57v-3.597a1.568 1.568 0 0 1 1.571-1.571zm12.472 0h3.597c.863 0 1.57.708 1.57 1.571v3.597c0 .87-.707 1.57-1.57 1.57h-3.597c-.87 0-1.578-.708-1.578-1.57v-3.597a1.588 1.588 0 0 1 1.578-1.571zM318.698 439.861h3.598c.87 0 1.57.708 1.57 1.57v3.598c0 .869-.708 1.57-1.57 1.57h-3.598c-.862 0-1.57-.708-1.57-1.57v-3.598a1.568 1.568 0 0 1 1.57-1.57zm12.473 0h3.597c.862 0 1.57.708 1.57 1.57v3.598c0 .869-.708 1.57-1.57 1.57h-3.597c-.863 0-1.57-.708-1.57-1.57v-3.598c0-.862.707-1.57 1.57-1.57zm12.48 0h3.597c.863 0 1.571.708 1.571 1.57v3.598c0 .869-.708 1.57-1.571 1.57h-3.597c-.862 0-1.57-.708-1.57-1.57v-3.598c-.007-.862.7-1.57 1.57-1.57zm12.472 0h3.598c.862 0 1.57.708 1.57 1.57v3.598c0 .869-.708 1.57-1.57 1.57h-3.598c-.87 0-1.577-.708-1.577-1.57v-3.598a1.587 1.587 0 0 1 1.577-1.57zm12.473 0h3.598c.87 0 1.577.708 1.577 1.57v3.598c0 .869-.707 1.57-1.577 1.57h-3.598c-.862 0-1.57-.708-1.57-1.57v-3.598c0-.862.708-1.57 1.57-1.57zm-36.968 13.601h3.597c.863 0 1.57.707 1.57 1.57v3.604c0 .863-.707 1.571-1.57 1.571h-3.597c-.87 0-1.57-.708-1.57-1.571v-3.597c-.008-.87.7-1.577 1.57-1.577zm12.472 0h3.597c.863 0 1.571.707 1.571 1.57v3.604c0 .863-.708 1.571-1.571 1.571H344.1c-.862 0-1.57-.708-1.57-1.571v-3.597c-.007-.87.7-1.577 1.57-1.577zm12.473 0h3.598c.869 0 1.577.707 1.577 1.57v3.604c0 .863-.708 1.571-1.577 1.571h-3.598c-.862 0-1.57-.708-1.57-1.571v-3.597c0-.87.708-1.577 1.57-1.577zm-12.922-28.212h3.597c.863 0 1.571.708 1.571 1.571v3.597c0 .87-.708 1.57-1.571 1.57h-3.597c-.862 0-1.57-.708-1.57-1.57v-3.597a1.567 1.567 0 0 1 1.57-1.571zm12.472 0h3.598c.862 0 1.57.708 1.57 1.571v3.597c0 .87-.708 1.57-1.57 1.57h-3.598c-.87 0-1.577-.708-1.577-1.57v-3.597a1.587 1.587 0 0 1 1.577-1.571zm185.495-284.639h3.597c.87 0 1.57.707 1.57 1.57v3.597c0 .87-.708 1.57-1.57 1.57h-3.597c-.863 0-1.57-.707-1.57-1.57v-3.597c-.008-.863.7-1.57 1.57-1.57zm12.472 0h3.597c.862 0 1.57.707 1.57 1.57v3.597c0 .87-.708 1.57-1.57 1.57h-3.597a1.576 1.576 0 0 1-1.571-1.57v-3.597c0-.863.708-1.57 1.571-1.57zm12.48 0h3.597c.863 0 1.571.707 1.571 1.57v3.597c0 .87-.708 1.57-1.571 1.57h-3.597c-.862 0-1.57-.707-1.57-1.57v-3.597c-.007-.863.7-1.57 1.57-1.57zm12.472 0h3.598c.862 0 1.57.707 1.57 1.57v3.597c0 .87-.708 1.57-1.57 1.57h-3.598c-.87 0-1.577-.707-1.577-1.57v-3.597a1.587 1.587 0 0 1 1.577-1.57zm12.473 0h3.598c.87 0 1.577.707 1.577 1.57v3.597c0 .87-.707 1.57-1.577 1.57h-3.598c-.862 0-1.57-.707-1.57-1.57v-3.597c0-.863.708-1.57 1.57-1.57zm-36.968 13.6h3.597c.863 0 1.571.708 1.571 1.57v3.605c0 .862-.708 1.57-1.571 1.57h-3.597c-.87 0-1.57-.708-1.57-1.57v-3.597c-.007-.87.7-1.578 1.57-1.578zm12.472 0h3.598c.862 0 1.57.708 1.57 1.57v3.605c0 .862-.708 1.57-1.57 1.57h-3.598c-.862 0-1.57-.708-1.57-1.57v-3.597c-.007-.87.7-1.578 1.57-1.578zm12.473 0h3.598c.87 0 1.577.708 1.577 1.57v3.605c0 .862-.707 1.57-1.577 1.57h-3.598c-.862 0-1.57-.708-1.57-1.57v-3.597c0-.87.708-1.578 1.57-1.578zM566.57 126h3.597c.863 0 1.571.708 1.571 1.57v3.597c0 .87-.708 1.571-1.571 1.571h-3.597c-.862 0-1.57-.708-1.57-1.571v-3.597c-.007-.862.7-1.57 1.57-1.57zm12.472 0h3.598c.862 0 1.57.708 1.57 1.57v3.597c0 .87-.708 1.571-1.57 1.571h-3.598c-.87 0-1.577-.708-1.577-1.571v-3.597a1.587 1.587 0 0 1 1.577-1.57z",
      fill: "#E1E4E5"
    }), m("path", {
      d: "M107 247.088c14.587-17.039 40.212-44.843 26.019-19.749-17.74 31.367 14.784 10.455 26.02 0 11.235-10.456 37.846-18.007 18.923 9.294-18.923 27.3 35.481 11.036 45.534-9.294",
      stroke: "#E1E4E5",
      "stroke-width": "4.355"
    }), m("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M625.244 189.227c0-32.6 26.428-59.027 59.028-59.027h50.701c32.6 0 59.027 26.427 59.027 59.027s-26.427 59.028-59.027 59.028h-16.962l-26.588 21.366c-1.968 1.582-4.892.181-4.892-2.345v-19.021h-2.259c-32.6 0-59.028-26.428-59.028-59.028z",
      fill: "#666AF6"
    }), m("rect", {
      width: "43.623",
      height: "7.036",
      rx: "3.518",
      transform: "matrix(-1 0 0 1 750.256 167.808)",
      fill: "#fff"
    }), m("rect", {
      width: "66.842",
      height: "7.036",
      rx: "3.518",
      transform: "matrix(-1 0 0 1 750.256 186.102)",
      fill: "#fff"
    }), m("rect", {
      width: "91.468",
      height: "7.036",
      rx: "3.518",
      transform: "matrix(-1 0 0 1 750.256 204.396)",
      fill: "#fff"
    }), m("circle", {
      r: "10.343",
      transform: "matrix(-1 0 0 1 654.343 99.343)",
      fill: "#E1E4E5"
    }), m("circle", {
      r: "4",
      transform: "matrix(-1 0 0 1 491 144)",
      fill: "#E1E4E5"
    }), m("circle", {
      r: "10.343",
      transform: "matrix(-1 0 0 1 155.449 290.79)",
      fill: "#E1E4E5"
    }), m("circle", {
      r: "10.343",
      transform: "matrix(-1 0 0 1 552.842 433.416)",
      fill: "#E1E4E5"
    }), m("circle", {
      r: "5.444",
      transform: "matrix(-1 0 0 1 623.067 286.979)",
      fill: "#E1E4E5"
    }), m("circle", {
      r: "5.444",
      transform: "matrix(-1 0 0 1 197.366 485.132)",
      fill: "#E1E4E5"
    }));
  };

  return DefaultLoginIllustration;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/LogInView.tsx":
/*!********************************************!*\
  !*** ./src/forum/components/LogInView.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogInView; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/LogInModal */ "flarum/forum/components/LogInModal");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_mapChildren__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/mapChildren */ "./src/forum/utils/mapChildren.ts");






var LogInView = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LogInView, _Component);

  function LogInView() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = LogInView.prototype;

  _proto.view = function view() {
    return m(CustomLogInModal, {
      routeSwitcher: this.attrs.routeSwitcher,
      animateShow: function animateShow() {
        return null;
      }
    });
  };

  return LogInView;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



var CustomLogInModal = /*#__PURE__*/function (_LogInModal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CustomLogInModal, _LogInModal);

  function CustomLogInModal() {
    return _LogInModal.apply(this, arguments) || this;
  }

  var _proto2 = CustomLogInModal.prototype;

  // @ts-ignore
  _proto2.title = function title() {
    return [flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('fas fa-sign-in-alt'), _LogInModal.prototype.title.call(this)];
  };

  _proto2.view = function view() {
    var _this = this;

    var view = _LogInModal.prototype.view.call(this);

    Object(_utils_mapChildren__WEBPACK_IMPORTED_MODULE_4__["default"])(view, function (item) {
      var _item$attrs, _item$attrs$className;

      if (item != null && (_item$attrs = item.attrs) != null && (_item$attrs$className = _item$attrs.className) != null && _item$attrs$className.includes('Modal-header')) {
        item.children.push(_LogInModal.prototype.footer.call(_this)[0]);
      }

      return item;
    });
    return view;
  };

  _proto2.footer = function footer() {
    var view = _LogInModal.prototype.footer.call(this);

    delete view[0];
    view[1] = this.attrs.routeSwitcher();
    return view;
  };

  return CustomLogInModal;
}(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2___default.a);

CustomLogInModal.isDismissible = false;

/***/ }),

/***/ "./src/forum/components/PrivateFacade.tsx":
/*!************************************************!*\
  !*** ./src/forum/components/PrivateFacade.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateFacade; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LogInView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogInView */ "./src/forum/components/LogInView.tsx");
/* harmony import */ var _DefaultLoginIllustration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultLoginIllustration */ "./src/forum/components/DefaultLoginIllustration.tsx");
/* harmony import */ var _SignUpView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignUpView */ "./src/forum/components/SignUpView.tsx");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_8__);










var routes = function routes() {
  return {
    login: {
      label: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('sycho-private-facade.forum.log_in_label')),
      component: _LogInView__WEBPACK_IMPORTED_MODULE_2__["default"],
      next: "signup"
    },
    signup: {
      label: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('sycho-private-facade.forum.sign_up_label')),
      component: _SignUpView__WEBPACK_IMPORTED_MODULE_4__["default"],
      next: "login"
    }
  };
};

var PrivateFacade = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivateFacade, _Page);

  function PrivateFacade() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Page.call.apply(_Page, [this].concat(args)) || this;
    _this.currentRoute = void 0;
    _this.routes = void 0;
    return _this;
  }

  var _proto = PrivateFacade.prototype;

  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);

    this.routes = routes(); // @ts-ignore

    this.currentRoute = this.routes[flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.current.data.routeName];
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.setTitle(this.currentRoute.label);
    this.bodyClass = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_8___default()({
      'App--privateFacade': true,
      'App--privateFacade--logoOnly': ['show_only_logo', 'hide_secondary_items'].includes(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('sycho-private-facade.header_layout')),
      'App--privateFacade--primaryBg': flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('sycho-private-facade.primary_color_bg')
    });
  };

  _proto.view = function view() {
    var _this2 = this;

    return m("div", {
      className: "PrivateFacade"
    }, m("div", {
      className: "PrivateFacade-container container"
    }, m("div", {
      className: "PrivateFacade-AuthView"
    }, m("div", {
      className: "PrivateFacade-AuthView-interface",
      "data-primary-background": flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('sycho-private-facade.primary_color_bg')
    }, m("h2", {
      className: "PrivateFacade-AuthView-interface-title"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('welcomeTitle')), m("p", {
      className: "PrivateFacade-AuthView-interface-message"
    }, m.trust(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('welcomeMessage'))), m(_DefaultLoginIllustration__WEBPACK_IMPORTED_MODULE_3__["default"], null)), m("div", {
      className: "PrivateFacade-AuthView-form"
    }, m(this.currentRoute.component, {
      routeSwitcher: function routeSwitcher() {
        return m('[', null, m("div", {
          className: "PrivateFacade-AuthView-separator"
        }, m("span", {
          "class": "PrivateFacade-AuthView-separator-label"
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('sycho-private-facade.forum.or_label'))), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: "Button Button--block PrivateFacade-Button--outline PrivateFacade-Button",
          onclick: function onclick() {
            var _app$history$getPrevi, _app$history$getPrevi2;

            if (['login', 'signup'].includes((_app$history$getPrevi = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.history.getPrevious()) == null ? void 0 : _app$history$getPrevi.name) && ((_app$history$getPrevi2 = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.history.getPrevious()) == null ? void 0 : _app$history$getPrevi2.name) === _this2.currentRoute.next) {
              flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.history.back();
            } else {
              flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.history.push(_this2.currentRoute.next, _this2.routes[_this2.currentRoute.next].label, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route(_this2.currentRoute.next));
              m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route(_this2.currentRoute.next));
            }
          }
        }, _this2.routes[_this2.currentRoute.next].label));
      }
    })))));
  };

  return PrivateFacade;
}(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_7___default.a);



/***/ }),

/***/ "./src/forum/components/SignUpView.tsx":
/*!*********************************************!*\
  !*** ./src/forum/components/SignUpView.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUpView; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);





var SignUpView = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SignUpView, _Component);

  function SignUpView() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = SignUpView.prototype;

  _proto.view = function view() {
    return m(CustomSignUpModal, {
      routeSwitcher: this.attrs.routeSwitcher,
      animateShow: function animateShow() {
        return null;
      }
    });
  };

  return SignUpView;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



var CustomSignUpModal = /*#__PURE__*/function (_SignUpModal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CustomSignUpModal, _SignUpModal);

  function CustomSignUpModal() {
    return _SignUpModal.apply(this, arguments) || this;
  }

  var _proto2 = CustomSignUpModal.prototype;

  // @ts-ignore
  _proto2.title = function title() {
    return [flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('fas fa-user-plus'), _SignUpModal.prototype.title.call(this)];
  };

  _proto2.footer = function footer() {
    var view = _SignUpModal.prototype.footer.call(this);

    view[0] = this.attrs.routeSwitcher();
    return view;
  };

  return CustomSignUpModal;
}(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2___default.a);

CustomSignUpModal.isDismissible = false;

/***/ }),

/***/ "./src/forum/index.tsx":
/*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PrivateFacade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PrivateFacade */ "./src/forum/components/PrivateFacade.tsx");
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/HeaderPrimary */ "flarum/forum/components/HeaderPrimary");
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/HeaderSecondary */ "flarum/forum/components/HeaderSecondary");
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Navigation */ "flarum/common/components/Navigation");
/* harmony import */ var flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_5__);






flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('sycho/flarum-private-facade', function () {
  flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes.login = {
    path: '/login',
    component: _components_PrivateFacade__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
  flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes.signup = {
    path: '/signup',
    component: _components_PrivateFacade__WEBPACK_IMPORTED_MODULE_1__["default"]
  }; // @ts-ignore

  var isPrivateFacadePage = function isPrivateFacadePage() {
    return ['login', 'signup'].includes(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.current.data.routeName);
  };

  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__["override"])(flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, "view", function (orig) {
    if (isPrivateFacadePage() && ['show_only_logo', 'hide_secondary_items'].includes(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('sycho-private-facade.header_layout'))) {
      return null;
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return orig.apply(void 0, args);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__["override"])(flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, "view", function (orig) {
    if (isPrivateFacadePage() && flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('sycho-private-facade.header_layout') === 'show_only_logo') {
      return null;
    }

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var original = orig.apply(void 0, args);

    if (isPrivateFacadePage() && original && flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('sycho-private-facade.primary_color_bg')) {
      original.attrs['data-primary-background'] = true;
    }

    return original;
  }); // @ts-ignore

  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__["override"])(flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, "getBackButton", function (orig) {
    if (isPrivateFacadePage()) {
      return null;
    } // @ts-ignore


    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return orig.apply(void 0, args);
  });
});

/***/ }),

/***/ "./src/forum/utils/mapChildren.ts":
/*!****************************************!*\
  !*** ./src/forum/utils/mapChildren.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapChildren; });
function mapChildren(item, callback) {
  var children = item == null ? void 0 : item.children;

  if (children instanceof Array && "map" in children) {
    item.children = children == null ? void 0 : children.map(callback).map(function (item) {
      var _ref;

      return ((_ref = (item == null ? void 0 : item.children) || null) == null ? void 0 : _ref.length) && mapChildren(item, callback) || item;
    });
  }

  return item;
}
;

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Navigation":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/Navigation']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Navigation'];

/***/ }),

/***/ "flarum/common/components/Page":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Page']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Page'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/HeaderPrimary":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/HeaderPrimary']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/HeaderPrimary'];

/***/ }),

/***/ "flarum/forum/components/HeaderSecondary":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/HeaderSecondary']" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/HeaderSecondary'];

/***/ }),

/***/ "flarum/forum/components/LogInModal":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInModal']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/LogInModal'];

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SignUpModal']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/SignUpModal'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map
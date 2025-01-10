/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/components/DefaultLoginIllustration.tsx":
/*!***********************************************************!*\
  !*** ./src/forum/components/DefaultLoginIllustration.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultLoginIllustration)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);


class DefaultLoginIllustration extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  view() {
    const illustrationUrl = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('sycho-private-facade.illustration_url');
    if (illustrationUrl) {
      return m("img", {
        src: illustrationUrl,
        alt: ""
      });
    }
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
  }
}
flarum.reg.add('sycho-private-facade', 'forum/components/DefaultLoginIllustration', DefaultLoginIllustration);

/***/ }),

/***/ "./src/forum/components/LogInView.tsx":
/*!********************************************!*\
  !*** ./src/forum/components/LogInView.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogInView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../../framework/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__);



class LogInView extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  constructor() {
    super(...arguments);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", true);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "LogInSection", void 0);
  }
  oninit(vnode) {
    super.oninit(vnode);
    flarum.reg.asyncModuleImport('flarum/forum/components/LogInModal').then(() => __webpack_require__.e(/*! import() | forum/components/LogInSection */ "forum/components/LogInSection").then(__webpack_require__.bind(__webpack_require__, /*! ./LogInSection */ "./src/forum/components/LogInSection.tsx")).then(LogInSection => {
      this.LogInSection = LogInSection.default;
      this.loading = false;
      m.redraw();
    }));
  }
  view() {
    if (this.loading) {
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default()), null);
    }
    const LogInSection = this.LogInSection;
    return m(LogInSection, {
      routeSwitcher: this.attrs.routeSwitcher,
      animateShow: () => null
    });
  }
}
flarum.reg.add('sycho-private-facade', 'forum/components/LogInView', LogInView);flarum.reg.addChunkModule('forum/components/LogInSection', './src/forum/components/LogInSection.tsx', 'sycho-private-facade', 'forum/components/LogInSection');
flarum.reg.addChunkModule('forum/components/LogInSection', './src/forum/components/LogInSection.tsx', 'sycho-private-facade', 'forum/utils/mapChildren');

/***/ }),

/***/ "./src/forum/components/PrivateFacade.tsx":
/*!************************************************!*\
  !*** ./src/forum/components/PrivateFacade.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PrivateFacade)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../../framework/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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









const routes = () => ({
  'sycho-private-facade.login': {
    label: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-private-facade.forum.log_in_label')),
    component: _LogInView__WEBPACK_IMPORTED_MODULE_2__["default"],
    next: 'sycho-private-facade.signup'
  },
  'sycho-private-facade.signup': {
    label: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-private-facade.forum.sign_up_label')),
    component: _SignUpView__WEBPACK_IMPORTED_MODULE_4__["default"],
    next: 'sycho-private-facade.login'
  }
});
class PrivateFacade extends (flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_7___default()) {
  constructor() {
    super(...arguments);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentRoute", void 0);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "routes", void 0);
  }
  oninit(vnode) {
    super.oninit(vnode);
    this.routes = routes();
    // @ts-ignore
    this.currentRoute = this.routes[(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().current).data.routeName];
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().setTitle(this.currentRoute.label);
    if (!document.body.classList.contains('body--privateFacade')) {
      document.body.classList.add('body--privateFacade');
    }
    const showHeader = !['show_only_logo', 'hide_secondary_items'].includes(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('sycho-private-facade.header_layout'));
    this.bodyClass = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_8___default()({
      'App--privateFacade': true,
      'App--privateFacade--showHeader': showHeader,
      'App--privateFacade--logoOnly': !showHeader,
      'App--privateFacade--primaryBg': flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('sycho-private-facade.primary_color_bg')
    });
  }
  view() {
    return m("div", {
      className: "PrivateFacade"
    }, m("div", {
      className: "PrivateFacade-container container"
    }, m("div", {
      className: "PrivateFacade-AuthView"
    }, m("div", {
      className: "PrivateFacade-AuthView-interface",
      "data-primary-background": flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('sycho-private-facade.primary_color_bg')
    }, m("h2", {
      className: "PrivateFacade-AuthView-interface-title"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('sycho-private-facade.screen_banner_title')), m("p", {
      className: "PrivateFacade-AuthView-interface-message"
    }, m.trust(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('sycho-private-facade.screen_banner_message'))), m(_DefaultLoginIllustration__WEBPACK_IMPORTED_MODULE_3__["default"], null)), m("div", {
      className: "PrivateFacade-AuthView-form"
    }, m(this.currentRoute.component, {
      routeSwitcher: () => flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('allowSignUp') ? m('[', null, m("div", {
        className: "PrivateFacade-AuthView-separator"
      }, m("span", {
        class: "PrivateFacade-AuthView-separator-label"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('sycho-private-facade.forum.or_label'))), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: "Button Button--block PrivateFacade-Button--outline PrivateFacade-Button",
        onclick: () => {
          if (['sycho-private-facade.login', 'sycho-private-facade.signup'].includes(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().history.getPrevious()?.name) && flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().history.getPrevious()?.name === this.currentRoute.next) {
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().history.back();
          } else {
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().history.push(this.currentRoute.next, this.routes[this.currentRoute.next].label, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route(this.currentRoute.next));
            m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route(this.currentRoute.next));
          }
        }
      }, this.routes[this.currentRoute.next].label)) : null
    })))));
  }
}
flarum.reg.add('sycho-private-facade', 'forum/components/PrivateFacade', PrivateFacade);

/***/ }),

/***/ "./src/forum/components/SignUpView.tsx":
/*!*********************************************!*\
  !*** ./src/forum/components/SignUpView.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../../framework/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__);



class SignUpView extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  constructor() {
    super(...arguments);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", true);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "SignUpSection", void 0);
  }
  oninit(vnode) {
    super.oninit(vnode);
    flarum.reg.asyncModuleImport('flarum/forum/components/SignUpModal').then(() => __webpack_require__.e(/*! import() | forum/components/SignUpSection */ "forum/components/SignUpSection").then(__webpack_require__.bind(__webpack_require__, /*! ./SignUpSection */ "./src/forum/components/SignUpSection.tsx")).then(SignUpSection => {
      this.SignUpSection = SignUpSection.default;
      this.loading = false;
      m.redraw();
    }));
  }
  view() {
    if (this.loading) {
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default()), null);
    }
    const SignUpSection = this.SignUpSection;
    return m(SignUpSection, {
      routeSwitcher: this.attrs.routeSwitcher,
      animateShow: () => null
    });
  }
}
flarum.reg.add('sycho-private-facade', 'forum/components/SignUpView', SignUpView);flarum.reg.addChunkModule('forum/components/SignUpSection', './src/forum/components/SignUpSection.tsx', 'sycho-private-facade', 'forum/components/SignUpSection');

/***/ }),

/***/ "./src/forum/extend.tsx":
/*!******************************!*\
  !*** ./src/forum/extend.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PrivateFacade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PrivateFacade */ "./src/forum/components/PrivateFacade.tsx");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Routes)() //
.add('sycho-private-facade.login', '/login', _components_PrivateFacade__WEBPACK_IMPORTED_MODULE_1__["default"]).add('sycho-private-facade.signup', '/signup', _components_PrivateFacade__WEBPACK_IMPORTED_MODULE_1__["default"])]);

/***/ }),

/***/ "./src/forum/index.tsx":
/*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _extend__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/HeaderPrimary */ "flarum/forum/components/HeaderPrimary");
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/HeaderSecondary */ "flarum/forum/components/HeaderSecondary");
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Navigation */ "flarum/common/components/Navigation");
/* harmony import */ var flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_resolvers_DefaultResolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/resolvers/DefaultResolver */ "flarum/common/resolvers/DefaultResolver");
/* harmony import */ var flarum_common_resolvers_DefaultResolver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_resolvers_DefaultResolver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extend */ "./src/forum/extend.tsx");








flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('sycho/flarum-private-facade', () => {
  // @ts-ignore
  const isPrivateFacadePage = () => ['sycho-private-facade.login', 'sycho-private-facade.signup'].includes((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current).data.routeName);
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.override)((flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'view', function (orig) {
    if (isPrivateFacadePage() && ['show_only_logo', 'hide_secondary_items'].includes(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('sycho-private-facade.header_layout'))) {
      return null;
    }
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return orig(...args);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.override)((flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'view', function (orig) {
    if (isPrivateFacadePage() && flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('sycho-private-facade.header_layout') === 'show_only_logo') {
      return null;
    }
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    const original = orig(...args);
    if (isPrivateFacadePage() && original && flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('sycho-private-facade.primary_color_bg') && flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('sycho-private-facade.header_layout') !== 'show_header') {
      original.attrs['data-primary-background'] = true;
    }
    return original;
  });

  // @ts-ignore
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.override)((flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'getBackButton', function (orig) {
    if (isPrivateFacadePage()) {
      return null;
    }

    // @ts-ignore
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return orig(...args);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'items', items => {
    if (items.has('logIn')) {
      items.setContent('logIn', m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: "Button Button--link",
        href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('sycho-private-facade.login')
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.forum.header.log_in_link')));
    }
    if (items.has('signUp')) {
      items.setContent('signUp', m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: "Button Button--link",
        href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('sycho-private-facade.signup')
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.forum.header.sign_up_link')));
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.override)((flarum_common_resolvers_DefaultResolver__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'onmatch', function (orig, args, requestedPath, route) {
    const urlExclusions = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('sycho-private-facade.url_exclusions');
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user && flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('sycho-private-facade.force_redirect') && !flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('sycho-private-facade.route_exclusions').includes(this.routeName) && !urlExclusions.some(url => url.includes('*') ? new RegExp(url.replace(/\*/g, '.*').replace(/\//g, '\\/')).test(requestedPath) : url === requestedPath)) {
      return m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('sycho-private-facade.login'));
    }
    return orig(args, requestedPath, route);
  });
});

/***/ }),

/***/ "flarum/common/Component":
/*!*************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/Component')" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/Component');

/***/ }),

/***/ "flarum/common/components/Button":
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Button')" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Button');

/***/ }),

/***/ "flarum/common/components/Icon":
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Icon')" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Icon');

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/LinkButton')" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/LinkButton');

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!*******************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/LoadingIndicator')" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/LoadingIndicator');

/***/ }),

/***/ "flarum/common/components/Navigation":
/*!*************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Navigation')" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Navigation');

/***/ }),

/***/ "flarum/common/components/Page":
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Page')" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Page');

/***/ }),

/***/ "flarum/common/extend":
/*!**********************************************************!*\
  !*** external "flarum.reg.get('core', 'common/extend')" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/extend');

/***/ }),

/***/ "flarum/common/extenders":
/*!*************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/extenders')" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/extenders');

/***/ }),

/***/ "flarum/common/resolvers/DefaultResolver":
/*!*****************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/resolvers/DefaultResolver')" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/resolvers/DefaultResolver');

/***/ }),

/***/ "flarum/common/utils/classList":
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/classList')" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/classList');

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/extractText')" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/extractText');

/***/ }),

/***/ "flarum/forum/app":
/*!******************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/app')" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'forum/app');

/***/ }),

/***/ "flarum/forum/components/HeaderPrimary":
/*!***************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/HeaderPrimary')" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/HeaderPrimary');

/***/ }),

/***/ "flarum/forum/components/HeaderSecondary":
/*!*****************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/HeaderSecondary')" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/HeaderSecondary');

/***/ }),

/***/ "flarum/forum/components/LogInModal":
/*!************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/LogInModal')" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/LogInModal');

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/SignUpModal')" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/SignUpModal');

/***/ }),

/***/ "../../../framework/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!************************************************************************************!*\
  !*** ../../../framework/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "../../../framework/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "../../../framework/node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!*********************************************************************************!*\
  !*** ../../../framework/node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "../../../framework/node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "../../../framework/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!***********************************************************************************!*\
  !*** ../../../framework/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "../../../framework/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "../../../framework/node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "../../../framework/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!****************************************************************************!*\
  !*** ../../../framework/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		flarum.reg._webpack_runtimes["sycho-private-facade"] ||= __webpack_require__;// Check if module is in cache
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "module.exports:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	__webpack_require__.f.compat = (chunkId, promises) => {
/******/ 	
/******/ 		const originalLoadChunk = __webpack_require__.l;
/******/ 		__webpack_require__.l = flarum.reg.loadChunk.bind(flarum.reg, originalLoadChunk);
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"forum": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
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
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.extend)
/* harmony export */ });
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.tsx");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map
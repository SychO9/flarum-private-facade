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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.tsx");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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

/***/ "./src/admin/components/UploadImageButton.tsx":
/*!****************************************************!*\
  !*** ./src/admin/components/UploadImageButton.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadImageButton; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);





var UploadImageButton = /*#__PURE__*/function (_Button) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(UploadImageButton, _Button);

  function UploadImageButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Button.call.apply(_Button, [this].concat(args)) || this;
    _this.loading = false;
    return _this;
  }

  var _proto = UploadImageButton.prototype;

  _proto.view = function view(vnode) {
    this.attrs.loading = this.loading;
    this.attrs.className = (this.attrs.className || '') + ' Button';

    if (flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.settings[this.attrs.setting]) {
      this.attrs.onclick = this.remove.bind(this);
      return m("div", {
        className: "UploadImageButton-container"
      }, m("div", {
        className: "UploadImageButton-image-container"
      }, m("img", {
        className: "UploadImageButton-image",
        src: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute(this.attrs.serializedName),
        alt: ""
      })), _Button.prototype.view.call(this, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, vnode, {
        children: m('[', null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.admin.upload_image.remove_button'))
      })));
    } else {
      this.attrs.onclick = this.upload.bind(this);
    } // @ts-ignore


    return _Button.prototype.view.call(this, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, vnode, {
      children: m('[', null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.admin.upload_image.upload_button'))
    }));
  }
  /**
   * Prompt the user to upload an image.
   */
  ;

  _proto.upload = function upload() {
    var _this2 = this;

    if (this.loading) return;
    var $input = $('<input type="file">');
    $input.appendTo('body').hide().click().on('change', function (e) {
      var body = new FormData(); // @ts-ignore

      body.append(_this2.attrs.name, $(e.target)[0].files[0]);
      _this2.loading = true;
      m.redraw();
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.request({
        method: 'POST',
        url: _this2.resourceUrl(),
        serialize: function serialize(raw) {
          return raw;
        },
        body: body
      }).then(_this2.success.bind(_this2), _this2.failure.bind(_this2));
    });
  }
  /**
   * Remove the logo.
   */
  ;

  _proto.remove = function remove() {
    this.loading = true;
    m.redraw();
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.request({
      method: 'DELETE',
      url: this.resourceUrl()
    }).then(this.success.bind(this), this.failure.bind(this));
  };

  _proto.resourceUrl = function resourceUrl() {
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('apiUrl') + '/' + this.attrs.routeName;
  }
  /**
   * After a successful upload/removal, reload the page.
   */
  ;

  _proto.success = function success() {
    window.location.reload();
  }
  /**
   * If upload/removal fails, stop loading.
   */
  ;

  _proto.failure = function failure() {
    this.loading = false;
    m.redraw();
  };

  return UploadImageButton;
}(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/admin/index.tsx":
/*!*****************************!*\
  !*** ./src/admin/index.tsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UploadImageButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/UploadImageButton */ "./src/admin/components/UploadImageButton.tsx");


flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('sycho/flarum-private-facade', function (app) {
  app.extensionData["for"]('sycho-private-facade').registerSetting({
    setting: 'sycho-private-facade.header_layout',
    label: app.translator.trans('sycho-private-facade.admin.settings.header_layout.title'),
    "default": 'show_only_logo',
    options: {
      'show_header': app.translator.trans('sycho-private-facade.admin.settings.header_layout.options.show_header'),
      'show_only_logo': app.translator.trans('sycho-private-facade.admin.settings.header_layout.options.show_only_logo'),
      'hide_secondary_items': app.translator.trans('sycho-private-facade.admin.settings.header_layout.options.hide_secondary_items')
    },
    type: "select"
  }).registerSetting({
    setting: 'sycho-private-facade.primary_color_bg',
    label: app.translator.trans('sycho-private-facade.admin.settings.primary_color_bg'),
    "default": true,
    type: "boolean"
  }).registerSetting({
    setting: 'sycho-private-facade.force_redirect',
    label: app.translator.trans('sycho-private-facade.admin.settings.force_redirect'),
    "default": true,
    type: "boolean"
  }).registerSetting(function () {
    return m("div", {
      className: "Form-group HeroImageForm"
    }, m("label", {
      "for": "sycho-private-facade.illustration_path"
    }, app.translator.trans('sycho-private-facade.admin.settings.illustration_path')), m("p", {
      className: "helpText"
    }, app.translator.trans('sycho-private-facade.admin.settings.illustration_path_help', {
      link: m("a", {
        href: "https://themeisle.com/illustrations/",
        target: "_blank",
        rel: "nofollow noopener"
      }, "ThemeIsle")
    })), m(_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      setting: "sycho-private-facade.illustration_path",
      serializedName: "sycho-private-facade.illustration_url",
      routeName: "private_facade_illustration",
      name: "private_facade_illustration"
    }));
  });
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map
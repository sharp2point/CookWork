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
/******/ 	return __webpack_require__(__webpack_require__.s = "./projects/cookie/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/cookie/cookie.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/cookie/cookie.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  #app input {\r\n    border-radius: 5px;\r\n    border: 1px solid #ccc;\r\n    padding: 5px;\r\n    margin: 5px 0;\r\n  }\r\n  #app input.empty-error {\r\n    border: 2px solid red;\r\n  }\r\n  #app input.not-found-error {\r\n    border: 2px solid rgb(186, 109, 8);\r\n  }\r\n\r\n  #app table {\r\n    width: 100%;\r\n  }\r\n\r\n  #app table td,\r\n  #app table th {\r\n    padding: 5px;\r\n    text-align: left;\r\n  }\r\n\r\n  #app table td.value {\r\n    word-break: break-word;\r\n  }\r\n\r\n  #app tbody tr:nth-child(odd) {\r\n    background: #ddd;\r\n  }\r\n</style>\r\n\r\n<div id=\"app\">\r\n  <div id=\"filter-block\">\r\n    Поиск cookie: <input id=\"filter-name-input\" placeholder=\"имя cookie\" type=\"text\" />\r\n  </div>\r\n  <hr />\r\n  <div id=\"add-block\">\r\n    Добавить cookie:<br />\r\n    <input id=\"add-name-input\" placeholder=\"имя cookie\" type=\"text\" /><br />\r\n    <input id=\"add-value-input\" placeholder=\"значение cookie\" type=\"text\" /><br />\r\n    <button id=\"add-button\">добавить cookie</button>\r\n  </div>\r\n  <hr />\r\n  <div id=\"list-block\">\r\n    Доступные cookie:\r\n    <table id=\"list-table\">\r\n      <thead>\r\n        <tr>\r\n          <th>имя</th>\r\n          <th>значение</th>\r\n          <th>удалить</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <!-- tr добавлять сюда -->\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./projects/cookie/cookie.html":
/*!*************************************!*\
  !*** ./projects/cookie/cookie.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


  const html = __webpack_require__(/*! -!./node_modules/raw-loader/dist/cjs.js!./projects/cookie/cookie.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/cookie/cookie.html").default;
  document.write(html);
  

/***/ }),

/***/ "./projects/cookie/cookwork/index.js":
/*!*******************************************!*\
  !*** ./projects/cookie/cookwork/index.js ***!
  \*******************************************/
/*! exports provided: createCookie, readCookie, updateCookie, deleteCookie, filterCookie, inputValidator, elmentValidateById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/render.js */ "./projects/cookie/cookwork/src/render.js");
/* harmony import */ var _src_crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/crud.js */ "./projects/cookie/cookwork/src/crud.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCookie", function() { return _src_crud_js__WEBPACK_IMPORTED_MODULE_1__["createCookie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readCookie", function() { return _src_crud_js__WEBPACK_IMPORTED_MODULE_1__["readCookie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateCookie", function() { return _src_crud_js__WEBPACK_IMPORTED_MODULE_1__["updateCookie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCookie", function() { return _src_crud_js__WEBPACK_IMPORTED_MODULE_1__["deleteCookie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterCookie", function() { return _src_crud_js__WEBPACK_IMPORTED_MODULE_1__["filterCookie"]; });

/* harmony import */ var _src_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/utility */ "./projects/cookie/cookwork/src/utility.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputValidator", function() { return _src_utility__WEBPACK_IMPORTED_MODULE_2__["inputValidator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elmentValidateById", function() { return _src_utility__WEBPACK_IMPORTED_MODULE_2__["elmentValidateById"]; });





/***/ }),

/***/ "./projects/cookie/cookwork/src/crud.js":
/*!**********************************************!*\
  !*** ./projects/cookie/cookwork/src/crud.js ***!
  \**********************************************/
/*! exports provided: createCookie, readCookie, updateCookie, deleteCookie, filterCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCookie", function() { return createCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readCookie", function() { return readCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCookie", function() { return updateCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCookie", function() { return deleteCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCookie", function() { return filterCookie; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./projects/cookie/cookwork/src/models.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility */ "./projects/cookie/cookwork/src/utility.js");



function createCookie(key, value) {
  var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (Object(_utility__WEBPACK_IMPORTED_MODULE_2__["inputValidator"])(key) && Object(_utility__WEBPACK_IMPORTED_MODULE_2__["inputValidator"])(value)) {
    key = key.trim();
    value = value.trim();

    if (_models__WEBPACK_IMPORTED_MODULE_1__["default"].getCookieByKey(key)) {
      updateCookie(key, value);
    } else {
      var newCookie = new _models__WEBPACK_IMPORTED_MODULE_1__["SimpleCookie"](key, value);
      _models__WEBPACK_IMPORTED_MODULE_1__["default"].addCookie(newCookie, state);
      _models__WEBPACK_IMPORTED_MODULE_1__["default"].clearState();
      document.cookie = "".concat(key, "=").concat(value);
    }
  }
}
function readCookie() {
  document.cookie.split('; ').map(function (cookie) {
    return cookie.split('=');
  }).forEach(function (item) {
    var _item = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(item, 2),
        key = _item[0],
        value = _item[1];

    var cookie = new _models__WEBPACK_IMPORTED_MODULE_1__["SimpleCookie"](key.trim(), value.trim());
    _models__WEBPACK_IMPORTED_MODULE_1__["default"].addCookie(cookie);
    _models__WEBPACK_IMPORTED_MODULE_1__["default"].clearState();
  });
  return _models__WEBPACK_IMPORTED_MODULE_1__["default"];
}
function updateCookie(key, value) {
  var cookie = _models__WEBPACK_IMPORTED_MODULE_1__["default"].getCookieByKey(key);
  deleteCookie(key);
  setTimeout(function () {
    createCookie(cookie.key, value);
  }, 100);
}
function deleteCookie(key) {
  _models__WEBPACK_IMPORTED_MODULE_1__["default"].deleteCookieByKey(key);
  _models__WEBPACK_IMPORTED_MODULE_1__["default"].clearState();
  document.cookie = "".concat(key, "=; Max-Age=0");
}
function filterCookie(value) {
  if (Object(_utility__WEBPACK_IMPORTED_MODULE_2__["inputValidator"])(value)) {
    value = value.trim();
    _models__WEBPACK_IMPORTED_MODULE_1__["default"].clearCookieStateAll();
    _models__WEBPACK_IMPORTED_MODULE_1__["default"].setCookieStateByKey(value);
    _models__WEBPACK_IMPORTED_MODULE_1__["default"].setCookieStateByValue(value);
    _models__WEBPACK_IMPORTED_MODULE_1__["default"].clearState();
  } else {
    _models__WEBPACK_IMPORTED_MODULE_1__["default"].setCookieStateAll();
    _models__WEBPACK_IMPORTED_MODULE_1__["default"].clearState();
  }

  return null;
}

/***/ }),

/***/ "./projects/cookie/cookwork/src/models.js":
/*!************************************************!*\
  !*** ./projects/cookie/cookwork/src/models.js ***!
  \************************************************/
/*! exports provided: SimpleCookie, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleCookie", function() { return SimpleCookie; });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);


var SimpleCookie =
/* Класс описывает cookie и её представление в шаблоне template */
function SimpleCookie(key, value) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SimpleCookie);

  this.key = key;
  this.value = value;
  this.template = "<tr data-keyrow='".concat(this.key, "'><td>").concat(this.key, "</td><td>").concat(this.value, "</td><td><button data-key='").concat(this.key, "'>\u0443\u0434\u0430\u043B\u0438\u0442\u044C</button></td></tr>");
  this.state = true; // видимость
};

var SimpleCookieDB = /*#__PURE__*/function () {
  function SimpleCookieDB() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SimpleCookieDB);

    this.state = false; // перерисовка

    this.cookieMap = new Map();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(SimpleCookieDB, [{
    key: "getTemplate",
    value: function getTemplate() {
      return Array.from(this.cookieMap.values()).reduce(function (tmpl, cookie) {
        if (cookie.state) tmpl += cookie.template;
        return tmpl;
      }, "");
    }
  }, {
    key: "setState",
    value: function setState() {
      this.state = true;
    }
  }, {
    key: "clearState",
    value: function clearState() {
      this.state = false;
    }
  }, {
    key: "addCookie",
    value: function addCookie(cookie) {
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      cookie.state = state;
      this.cookieMap.set(cookie.key, cookie);
    }
  }, {
    key: "setCookieStateAll",
    value: function setCookieStateAll() {
      this.cookieMap.forEach(function (item) {
        item.state = true;
      });
    }
  }, {
    key: "clearCookieStateAll",
    value: function clearCookieStateAll() {
      this.cookieMap.forEach(function (item) {
        item.state = false;
      });
    }
  }, {
    key: "setCookieStateByKey",
    value: function setCookieStateByKey(key) {
      this.cookieMap.forEach(function (cookie) {
        if (cookie.key.includes(key)) {
          cookie.state = true;
        }
      });
    }
  }, {
    key: "setCookieStateByValue",
    value: function setCookieStateByValue(value) {
      Array.from(this.cookieMap.values()).filter(function (cookie) {
        return cookie.value.includes(value);
      }).forEach(function (cookie) {
        return cookie.state = true;
      });
    }
  }, {
    key: "clearCookieStateByKey",
    value: function clearCookieStateByKey(key) {
      this.cookieMap.has(key) ? this.cookieMap.get(key).state = false : null;
    }
  }, {
    key: "getCookieByKey",
    value: function getCookieByKey(key) {
      return this.cookieMap.has(key) ? this.cookieMap.get(key) : null;
    }
  }, {
    key: "getCookieByValue",
    value: function getCookieByValue(value) {
      return Array.from(this.cookieMap.values()).filter(function (cookie) {
        return cookie.value.includes(value);
      });
    }
  }, {
    key: "deleteCookieByKey",
    value: function deleteCookieByKey(key) {
      this.cookieMap.delete(key);
    }
  }]);

  return SimpleCookieDB;
}();

/* harmony default export */ __webpack_exports__["default"] = (new SimpleCookieDB());

/***/ }),

/***/ "./projects/cookie/cookwork/src/render.js":
/*!************************************************!*\
  !*** ./projects/cookie/cookwork/src/render.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./projects/cookie/cookwork/src/models.js");


function updateDOM(target, template) {
  target.innerHTML = template;
}

var renderDOM = function renderDOM() {
  if (!_models__WEBPACK_IMPORTED_MODULE_0__["default"].state) {
    updateDOM(document.querySelector('#list-table tbody'), _models__WEBPACK_IMPORTED_MODULE_0__["default"].getTemplate());
    _models__WEBPACK_IMPORTED_MODULE_0__["default"].setState();
  }

  window.requestAnimationFrame(renderDOM);
};

window.requestAnimationFrame(renderDOM);

/***/ }),

/***/ "./projects/cookie/cookwork/src/utility.js":
/*!*************************************************!*\
  !*** ./projects/cookie/cookwork/src/utility.js ***!
  \*************************************************/
/*! exports provided: inputValidator, elmentValidateById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputValidator", function() { return inputValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elmentValidateById", function() { return elmentValidateById; });
function inputValidator(textValue) {
  return textValue.trim().length !== 0 ? true : false;
}
function elmentValidateById(e, id) {
  return e.target.getAttribute('id') === id;
}

/***/ }),

/***/ "./projects/cookie/index.js":
/*!**********************************!*\
  !*** ./projects/cookie/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cookie_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie.html */ "./projects/cookie/cookie.html");
/* harmony import */ var _cookie_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cookie_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cookwork__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookwork */ "./projects/cookie/cookwork/index.js");
/*
 ДЗ 7 - Создать редактор cookie с возможностью фильтрации

 7.1: На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы:
   - имя
   - значение
   - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)

 7.2: На странице должна быть форма для добавления новой cookie. Форма должна содержать следующие поля:
   - имя
   - значение
   - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)

 Если добавляется cookie с именем уже существующей cookie, то ее значение в браузере и таблице должно быть обновлено

 7.3: На странице должно быть текстовое поле для фильтрации cookie
 В таблице должны быть только те cookie, в имени или значении которых, хотя бы частично, есть введенное значение
 Если в поле фильтра пусто, то должны выводиться все доступные cookie
 Если добавляемая cookie не соответствует фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 Если добавляется cookie, с именем уже существующей cookie и ее новое значение не соответствует фильтру,
 то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */


/*
 app - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */

var homeworkContainer = document.querySelector('#app'); // текстовое поле для фильтрации cookie

var filterNameInput = homeworkContainer.querySelector('#filter-name-input'); // текстовое поле с именем cookie

var addNameInput = homeworkContainer.querySelector('#add-name-input'); // текстовое поле со значением cookie

var addValueInput = homeworkContainer.querySelector('#add-value-input'); // кнопка "добавить cookie"

var addButton = homeworkContainer.querySelector('#add-button'); // таблица со списком cookie

var listTable = homeworkContainer.querySelector('#list-table tbody');
filterNameInput.addEventListener('input', function (e) {
  _cookwork__WEBPACK_IMPORTED_MODULE_1__["filterCookie"](e.target.value);
});
addButton.addEventListener('click', handlerAddClick);
listTable.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    var button = e.target;
    var key = button.dataset.key;
    _cookwork__WEBPACK_IMPORTED_MODULE_1__["deleteCookie"](key);
  }
});
homeworkContainer.addEventListener('keyup', function (e) {
  e.preventDefault();

  if (e.key === 'Enter') {
    switch (e.target.tagName) {
      case 'INPUT':
        {
          if (_cookwork__WEBPACK_IMPORTED_MODULE_1__["elmentValidateById"](e, 'add-name-input') || _cookwork__WEBPACK_IMPORTED_MODULE_1__["elmentValidateById"](e, 'add-value-input')) {
            handlerAddClick();
          } else if (_cookwork__WEBPACK_IMPORTED_MODULE_1__["elmentValidateById"](e, 'filter-name-input')) {
            _cookwork__WEBPACK_IMPORTED_MODULE_1__["filterCookie"](e.target.value);
          }
        }
    }
  }
});
/*-----------------------------------------------------------*/

function handlerAddClick() {
  if (_cookwork__WEBPACK_IMPORTED_MODULE_1__["inputValidator"](addNameInput.value) && _cookwork__WEBPACK_IMPORTED_MODULE_1__["inputValidator"](addValueInput.value)) {
    var name = addNameInput.value.trim();
    var value = addValueInput.value.trim();
    var filter = filterNameInput.value.trim();

    if (filter !== '' && (name.includes(filter) || value.includes(filter))) {
      _cookwork__WEBPACK_IMPORTED_MODULE_1__["createCookie"](name, value);
    } else if (filter !== '' && !(name.includes(filter) || value.includes(filter))) {
      _cookwork__WEBPACK_IMPORTED_MODULE_1__["createCookie"](name, value, false);
    } else {
      _cookwork__WEBPACK_IMPORTED_MODULE_1__["createCookie"](name, value);
    }

    addNameInput.value = '';
    addValueInput.value = '';
  }
}

_cookwork__WEBPACK_IMPORTED_MODULE_1__["readCookie"]();

/***/ })

/******/ });
//# sourceMappingURL=cookie.js.map
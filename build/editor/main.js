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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./editor.js":
/*!*******************!*\
  !*** ./editor.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_core_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/core/editor */ \"./modules/core/editor.js\");\n\n__webpack_require__(/*! ./less/editor.less */ \"./less/editor.less\")\nnew _modules_core_editor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#editor', '#config', {\n  menus: ['formatBlock', 'bold', 'italic', 'strike',\n    'horizontal', 'color', 'BackColor', 'href', 'face', 'font', 'undo', 'quote', 'publish'],\n  change () {\n\n  },\n  publish () {\n    document.querySelector('#content').innerHTML = document.querySelector('#editor').innerHTML\n    document.querySelector('#editor').innerHTML = ''\n    console.log('published')\n  }\n})\n\n//# sourceURL=webpack:///./editor.js?");

/***/ }),

/***/ "./less/editor.less":
/*!**************************!*\
  !*** ./less/editor.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./less/editor.less?");

/***/ }),

/***/ "./modules/Common/dialog.js":
/*!**********************************!*\
  !*** ./modules/Common/dialog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dialog; });\n/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dom */ \"./modules/util/dom.js\");\n\nclass Dialog {\n  init (tpl, cb, hidecb) {\n    if (!window.Dialog) {\n      document.body.appendChild(Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(`<div class=\"dialog\" id=\"dialog\">${tpl}</div>`)[0])\n      this.id = document.getElementById('dialog')\n      this.bind (hidecb)\n      cb && cb()\n      this.prevent()\n      return window.Dialog = this\n    }\n    window.Dialog.show(tpl, cb)\n  }\n  show (tpl, cb) {\n    this.id.innerHTML = tpl\n    this.id.style.display = 'block'\n    cb && cb()\n    this.prevent(tpl)\n  }\n  bind (cb) {\n    this.id.addEventListener('click', function () {\n       window.Dialog.hide(cb)\n    })\n  }\n  prevent () {\n   this.id.children[0].addEventListener('click', function (e) {\n      e.stopPropagation()\n    })\n  }\n  hide (cb) {\n    this.id.style.display = 'none'\n    console.log(cb)\n    cb && cb()\n  }\n\n\n}\n\n\n//# sourceURL=webpack:///./modules/Common/dialog.js?");

/***/ }),

/***/ "./modules/MenuList.js":
/*!*****************************!*\
  !*** ./modules/MenuList.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\n/* harmony import */ var _menus_color_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menus/color/color */ \"./modules/menus/color/color.js\");\n/* harmony import */ var _menus_bold_bold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menus/bold/bold */ \"./modules/menus/bold/bold.js\");\n/* harmony import */ var _menus_italic_italic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menus/italic/italic */ \"./modules/menus/italic/italic.js\");\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/dom */ \"./modules/util/dom.js\");\n/* harmony import */ var _menus_strike_strike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menus/strike/strike */ \"./modules/menus/strike/strike.js\");\n/* harmony import */ var _menus_header_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menus/header/header */ \"./modules/menus/header/header.js\");\n/* harmony import */ var _menus_horizontal_horizontal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menus/horizontal/horizontal */ \"./modules/menus/horizontal/horizontal.js\");\n/* harmony import */ var _dropList_droplist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropList/droplist */ \"./modules/dropList/droplist.js\");\n/* harmony import */ var _menus_bgColor_bgcolor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menus/bgColor/bgcolor */ \"./modules/menus/bgColor/bgcolor.js\");\n/* harmony import */ var _colorpanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./colorpanel */ \"./modules/colorpanel.js\");\n/* harmony import */ var _menus_face_face__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menus/face/face */ \"./modules/menus/face/face.js\");\n/* harmony import */ var _menus_href_href__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menus/href/href */ \"./modules/menus/href/href.js\");\n/* harmony import */ var _menus_font_font__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menus/font/font */ \"./modules/menus/font/font.js\");\n/* harmony import */ var _menus_undo_undo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menus/undo/undo */ \"./modules/menus/undo/undo.js\");\n/* harmony import */ var _menus_quote_quote__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./menus/quote/quote */ \"./modules/menus/quote/quote.js\");\n/* harmony import */ var _menus_publish_publish__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./menus/publish/publish */ \"./modules/menus/publish/publish.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Menu {\n  constructor (editor, opt) {\n    this.bold = _menus_bold_bold__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    this.italic = _menus_italic_italic__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    this.strike = _menus_strike_strike__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    this.formatBlock = _menus_header_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    this.color = _menus_color_color__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    this.horizontal = _menus_horizontal_horizontal__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    this.BackColor = _menus_bgColor_bgcolor__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    this.href = _menus_href_href__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    this.face = _menus_face_face__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n    this.undo = _menus_undo_undo__WEBPACK_IMPORTED_MODULE_14__[\"default\"]\n    this.font = _menus_font_font__WEBPACK_IMPORTED_MODULE_13__[\"default\"]\n    this.quote = _menus_quote_quote__WEBPACK_IMPORTED_MODULE_15__[\"default\"]\n    this.publish = _menus_publish_publish__WEBPACK_IMPORTED_MODULE_16__[\"default\"]\n    this.init(editor, opt)\n    _colorpanel__WEBPACK_IMPORTED_MODULE_10__[\"default\"].init(_util_util__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query(\"li[name='color']\"), editor, 'ForeColor')\n    _colorpanel__WEBPACK_IMPORTED_MODULE_10__[\"default\"].init(_util_util__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query(\"li[name='BackColor']\"), editor, 'BackColor')\n  }\n  init (editor, opt) {\n    let frag = document.createDocumentFragment()\n    for (let value of opt['menus'] ) {\n      _util_util__WEBPACK_IMPORTED_MODULE_3__[\"default\"].append(frag, Object(_util_dom__WEBPACK_IMPORTED_MODULE_4__[\"$\"])(this[value].tpl)[0])\n    }\n    _util_util__WEBPACK_IMPORTED_MODULE_3__[\"default\"].append(editor.configContainer, frag)\n    new _dropList_droplist__WEBPACK_IMPORTED_MODULE_8__[\"default\"]([{\n      html: 'H1',\n      value: \"<h1>\"\n    },{\n      html: 'H2',\n      value: \"<h2>\"\n    },{\n      html: 'H3',\n      value: \"<h3>\"\n    },{\n      html: 'H4',\n      value: \"<h4>\"\n    }], editor.configContainer.querySelector(\"li[name='formatBlock']\"), editor ,'formatBlock')\n    new _dropList_droplist__WEBPACK_IMPORTED_MODULE_8__[\"default\"]([{\n      html: '宋体',\n      value: \"宋体\"\n    },{\n      html: '微软雅黑',\n      value: \"微软雅黑\"\n    },{\n      html: 'Arial',\n      value: \"Arial\"\n    }], editor.configContainer.querySelector(\"li[name='font']\"), editor, 'FontName')\n    this.bind(editor, opt)\n  }\n  bind (editor, opt) {\n    let range = document.createRange()\n    for (let value of opt['menus']) {\n      let dom = editor.configContainer.querySelector(`li[name=${value}]`)\n      this[value].events.forEach(env => {\n        dom.addEventListener(env.type, (e) => {\n          env.cb(e, editor)\n        })\n      })\n    }\n  }\n}\n\n//# sourceURL=webpack:///./modules/MenuList.js?");

/***/ }),

/***/ "./modules/cmd/cmd.js":
/*!****************************!*\
  !*** ./modules/cmd/cmd.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  do (name, value,  editor) {\n    document.execCommand(name, false, value)\n    editor.change && editor.change(false)\n  }\n});\n\n//# sourceURL=webpack:///./modules/cmd/cmd.js?");

/***/ }),

/***/ "./modules/colorpanel.js":
/*!*******************************!*\
  !*** ./modules/colorpanel.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _selections_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selections/selection */ \"./modules/selections/selection.js\");\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _cmd_cmd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cmd/cmd */ \"./modules/cmd/cmd.js\");\n\n\n\nconst color = ['red', 'orange', 'yellow', 'green',\n  'cyan', 'blue', 'purple', 'pink', 'gray', 'brown', 'yellowgreen', 'skyblue']\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n init (container, editor, name) {\n   let frag = document.createDocumentFragment()\n   let colorContainer = document.createElement('ul')\n   colorContainer.className = 'color-container'\n   frag.appendChild(colorContainer)\n   for (let i = 0; i < color.length; i++) {\n     let span = document.createElement('li')\n     span.className = 'color-item'\n     span.style.backgroundColor = color[i]\n     colorContainer.appendChild(span)\n   }\n   container.appendChild(frag)\n   this.bind(editor, colorContainer, name)\n },\n bind(editor, container, name) {\n   container.addEventListener('click', e => {\n     if (_util_util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getRangeInContainer(editor, editor.orirange)) {\n       let color = e.target.style.backgroundColor\n       e.target.parentNode.style.display = 'none'\n       _selections_selection__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveRange(editor.orirange)\n       _cmd_cmd__WEBPACK_IMPORTED_MODULE_2__[\"default\"].do(name, color, editor)\n     }\n   })\n }\n});\n\n//# sourceURL=webpack:///./modules/colorpanel.js?");

/***/ }),

/***/ "./modules/core/editor.js":
/*!********************************!*\
  !*** ./modules/core/editor.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/dom */ \"./modules/util/dom.js\");\n/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MenuList */ \"./modules/MenuList.js\");\n/* harmony import */ var _selections_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selections/selection */ \"./modules/selections/selection.js\");\n\n\n\n\nclass Editor {\n  constructor (selector, menuContainer, opt = {}) {\n    this.container = _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(selector)\n    this.id = this.container.id\n    this.configContainer = _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(menuContainer)\n    this.change = _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].debounce(() => {\n      if (this.container.innerHTML != this.record[this.record.length - 1]) {\n        console.log('变了')\n        this.record.push(this.container.innerHTML)\n        opt.change && opt.change()\n      } else {\n        console.log('没变')\n      }\n    }, 500)\n    this.publish = opt.publish\n    this.container.focus()\n    this.record = ['<p><br></p>']\n    this.orirange = window.getSelection().getRangeAt(0)\n    new _MenuList__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, opt)\n    this._initDom(selector)\n    this._bindEvent(this)\n  }\n  _initDom (selector) {\n    _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].append(this.container, Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('<p><br></p>')[0])\n  }\n  _bindEvent (editor) {\n    let composition\n    this.container.addEventListener('mousedown', e => {\n      this.container.addEventListener('mouseleave', e => {\n        this.orirange = window.getSelection().getRangeAt(0)\n      })\n    })\n    this.container.addEventListener('compositionstart', () => {\n      composition = true\n    })\n    this.container.addEventListener('compositionend', () => {\n      composition = false\n      if (!composition) {\n        this.checkHtml(editor)\n      }\n    })\n    this.container.addEventListener('keyup', e => {\n      if (!composition) {\n        this.checkHtml(editor)\n      }\n    })\n    this.container.addEventListener('keydown', e => {\n      this.orirange = window.getSelection().getRangeAt(0)\n      if (e.keyCode == 8) {\n        if (_util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].trim(this.container.innerHTML) == '<p><br></p>') {\n          e.preventDefault()\n        }\n      }\n      if (e.keyCode == 13) {\n        e.preventDefault()\n        const $p = Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('<p><br></p>')[0]\n       if (this.orirange.commonAncestorContainer.nodeName.toUpperCase() == 'P' &&\n         this.orirange.commonAncestorContainer.parentNode.nodeName.toUpperCase() == 'BLOCKQUOTE') {\n         _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].append(editor.container, $p)\n       } else {\n          if (this.orirange.commonAncestorContainer.id == this.id) {\n            _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].append(this.container, $p)\n          } else {\n            _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].insertAfter($p, this.orirange.commonAncestorContainer)\n          }\n\n       }\n        if (this.orirange.commonAncestorContainer.nodeName.toUpperCase() == 'BLOCKQUOTE') {\n          _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(editor.container, 'BLOCKQUOTE')\n        }\n        _selections_selection__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createRange($p, false, editor)\n      }\n    })\n  }\n  checkHtml (editor) {\n    this.orirange = window.getSelection().getRangeAt(0)\n    if (_util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].trim(this.container.innerHTML) == '') {\n      const $p = Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__[\"$\"])('<p><br></p>')[0]\n      _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].append(editor.container, $p)\n      _selections_selection__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createRange($p, false, editor)\n    }\n    this.change()\n  }\n\n}\n\n//# sourceURL=webpack:///./modules/core/editor.js?");

/***/ }),

/***/ "./modules/dropList/droplist.js":
/*!**************************************!*\
  !*** ./modules/dropList/droplist.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DropList; });\n/* harmony import */ var _selections_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selections/selection */ \"./modules/selections/selection.js\");\n/* harmony import */ var _cmd_cmd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cmd/cmd */ \"./modules/cmd/cmd.js\");\n\n\nclass DropList {\n  constructor (list,  container, editor, name) {\n    let frag = document.createDocumentFragment()\n    let ul = document.createElement('ul')\n    ul.className = 'eleContainer'\n    ul.style.display = 'none'\n    frag.appendChild(ul)\n    for (let i = 0, len = list.length; i < len; i++) {\n      let li = document.createElement('li')\n      li.setAttribute('value', list[i].value)\n      li.innerHTML = list[i].html\n      ul.appendChild(li)\n    }\n    container.appendChild(frag)\n    this.bind(ul, editor, name)\n  }\n  bind (el, editor, name) {\n    el.addEventListener('click', function (e) {\n      e.stopPropagation()\n      _selections_selection__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveRange(editor.orirange)\n      _cmd_cmd__WEBPACK_IMPORTED_MODULE_1__[\"default\"].do(name, e.target.getAttribute('value'), editor)\n    })\n  }\n}\n\n//# sourceURL=webpack:///./modules/dropList/droplist.js?");

/***/ }),

/***/ "./modules/menus/bgColor/bgcolor.js":
/*!******************************************!*\
  !*** ./modules/menus/bgColor/bgcolor.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/dom */ \"./modules/util/dom.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'BackColor',\n  tpl: '<li name=\"BackColor\"><i class=\"i-bgcolor\"></i><i class=\"i-down\"></i> </li>',\n  events: [{\n    type: 'mouseenter',\n    cb (e) {\n      Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(e.currentTarget).children('ul').style.display = 'flex'\n    }\n  }, {\n    type: 'mouseleave',\n    cb (e) {\n      Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(e.currentTarget).children('ul').style.display = 'none'\n    }\n  }],\n});\n\n//# sourceURL=webpack:///./modules/menus/bgColor/bgcolor.js?");

/***/ }),

/***/ "./modules/menus/bold/bold.js":
/*!************************************!*\
  !*** ./modules/menus/bold/bold.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _cmd_cmd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cmd/cmd */ \"./modules/cmd/cmd.js\");\n/* harmony import */ var _selections_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selections/selection */ \"./modules/selections/selection.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'bold',\n  tpl: '<li name=\"bold\"><i class=\"i-bold\"></i> </li>',\n  events: [{\n    type: 'click',\n    cb (e, editor) {\n      if (_util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRangeInContainer(editor, editor.orirange)) {\n        _selections_selection__WEBPACK_IMPORTED_MODULE_2__[\"default\"].saveRange(editor.orirange)\n        _cmd_cmd__WEBPACK_IMPORTED_MODULE_1__[\"default\"].do('bold', window.getSelection(), editor)\n      }\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./modules/menus/bold/bold.js?");

/***/ }),

/***/ "./modules/menus/color/color.js":
/*!**************************************!*\
  !*** ./modules/menus/color/color.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/dom */ \"./modules/util/dom.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'color',\n  tpl: '<li name=\"color\"><i class=\"i-color\"></i> <i class=\"i-down\"></i> </li>',\n  events: [{\n    type: 'mouseenter',\n    cb (e) {\n      Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(e.currentTarget).children('ul').style.display = 'flex'\n    }\n  }, {\n    type: 'mouseleave',\n    cb (e) {\n      Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(e.currentTarget).children('ul').style.display = 'none'\n    }\n  }],\n});\n\n//# sourceURL=webpack:///./modules/menus/color/color.js?");

/***/ }),

/***/ "./modules/menus/face/face.js":
/*!************************************!*\
  !*** ./modules/menus/face/face.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _cmd_cmd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cmd/cmd */ \"./modules/cmd/cmd.js\");\n/* harmony import */ var _selections_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selections/selection */ \"./modules/selections/selection.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'face',\n  tpl: '<li name=\"face\"><i class=\"i-face\"></i> </li>',\n  events: [{\n    type: 'click',\n    cb (e, editor) {\n      if (_util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRangeInContainer(editor, editor.orirange)) {\n        _selections_selection__WEBPACK_IMPORTED_MODULE_2__[\"default\"].saveRange(editor.orirange)\n        if (!this.active) {\n          this.active = true\n          _cmd_cmd__WEBPACK_IMPORTED_MODULE_1__[\"default\"].do('italic', window.getSelection(), editor)\n        }\n      }\n    }\n  }],\n  active: false\n});\n\n//# sourceURL=webpack:///./modules/menus/face/face.js?");

/***/ }),

/***/ "./modules/menus/font/font.js":
/*!************************************!*\
  !*** ./modules/menus/font/font.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _cmd_cmd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cmd/cmd */ \"./modules/cmd/cmd.js\");\n/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/dom */ \"./modules/util/dom.js\");\n/* harmony import */ var _selections_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selections/selection */ \"./modules/selections/selection.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'font',\n  tpl: '<li name=\"font\"><i class=\"i-font\"></i><i class=\"i-down\"></i> </li>',\n  active: false,\n  events: [{\n    type: 'mouseenter',\n    cb (e) {\n      this.active = false\n      Object(_util_dom__WEBPACK_IMPORTED_MODULE_2__[\"$\"])(e.currentTarget).children('ul').style.display = this.active ? 'none' : 'block'\n    }\n  }, {\n    type: 'mouseleave',\n    cb (e) {\n      this.active = true\n      Object(_util_dom__WEBPACK_IMPORTED_MODULE_2__[\"$\"])(e.currentTarget).children('ul').style.display = this.active ? 'none' : 'block'\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./modules/menus/font/font.js?");

/***/ }),

/***/ "./modules/menus/header/header.js":
/*!****************************************!*\
  !*** ./modules/menus/header/header.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/dom */ \"./modules/util/dom.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'formatBlock',\n  events: [{\n    type: 'mouseenter',\n    cb (e) {\n      this.active = false\n      Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(e.currentTarget).children('ul').style.display = this.active ? 'none' : 'block'\n    }\n  }, {\n    type: 'mouseleave',\n    cb (e) {\n      this.active = true\n      Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(e.currentTarget).children('ul').style.display = this.active ? 'none' : 'block'\n    }\n  }],\n  tpl: '<li name=\"formatBlock\"><i class=\"i-header\"></i><i class=\"i-down\"></i> </li>',\n  active: false\n});\n\n//# sourceURL=webpack:///./modules/menus/header/header.js?");

/***/ }),

/***/ "./modules/menus/horizontal/horizontal.js":
/*!************************************************!*\
  !*** ./modules/menus/horizontal/horizontal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _selections_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selections/selection */ \"./modules/selections/selection.js\");\n/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/dom */ \"./modules/util/dom.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'horizontal',\n  tpl: '<li name=\"horizontal\"><i class=\"i-horizontal\"></i> </li>',\n  events: [{\n    type: 'click',\n    cb (e, eidtor) {\n      let frag = document.createDocumentFragment()\n      let hr = document.createElement('hr')\n      frag.appendChild(hr)\n      _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].append(frag, Object(_util_dom__WEBPACK_IMPORTED_MODULE_2__[\"$\"])('<p><br></p>')[0])\n      if (!eidtor.orirange) {\n        eidtor.container.appendChild(frag)\n        _selections_selection__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initRange(eidtor)\n        return eidtor.change(false)\n      }\n      if (!window.getSelection().toString() && !eidtor.orirange.commonAncestorContainer) {\n        _util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].insertAfter(frag, eidtor.orirange.commonAncestorContainer)\n        _selections_selection__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initRange(eidtor)\n        return eidtor.change(false)\n      }\n      eidtor.container.appendChild(frag)\n      _selections_selection__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initRange(eidtor)\n      return eidtor.change(false)\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./modules/menus/horizontal/horizontal.js?");

/***/ }),

/***/ "./modules/menus/href/href.js":
/*!************************************!*\
  !*** ./modules/menus/href/href.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _cmd_cmd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cmd/cmd */ \"./modules/cmd/cmd.js\");\n/* harmony import */ var _selections_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selections/selection */ \"./modules/selections/selection.js\");\n/* harmony import */ var _Common_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/dialog */ \"./modules/Common/dialog.js\");\n\n\n\n\nconst tpl = `<div class=\"container\">\n<h3>插入链接</h3>\n<div class=\"item\">\n<span><i class=\"i-href\"></i></span>\n<input type=\"text\" id=\"href\"/> \n</div>\n<div class=\"item\">\n<span><i class=\"i-charactor\"></i></span>\n<input type=\"text\" id=\"val\"> \n</div>\n<button id=\"sure\">确定</button></div>`\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'href',\n  active: false,\n  tpl: '<li name=\"href\"><i class=\"i-href\"></i> </li>',\n  events: [{\n    type: 'click',\n    cb (e, editor) {\n      new _Common_dialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().init(tpl, function () {\n        document.getElementById('sure').addEventListener('click', function () {\n          window.Dialog.hide()\n          _selections_selection__WEBPACK_IMPORTED_MODULE_2__[\"default\"].saveRange(editor.orirange)\n          _cmd_cmd__WEBPACK_IMPORTED_MODULE_1__[\"default\"].do('insertHTML', `<a href=\"${document.getElementById('href').value}\">${document.getElementById('val').value}</a>`, editor)\n        })\n      }, function () {\n        editor.container.focus()\n      })\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./modules/menus/href/href.js?");

/***/ }),

/***/ "./modules/menus/italic/italic.js":
/*!****************************************!*\
  !*** ./modules/menus/italic/italic.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _cmd_cmd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cmd/cmd */ \"./modules/cmd/cmd.js\");\n/* harmony import */ var _selections_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selections/selection */ \"./modules/selections/selection.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'italic',\n  tpl: '<li name=\"italic\"><i class=\"i-italic\"></i> </li>',\n  events: [{\n    type: 'click',\n    cb (e, editor) {\n      if (_util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRangeInContainer(editor, editor.orirange)) {\n        _selections_selection__WEBPACK_IMPORTED_MODULE_2__[\"default\"].saveRange(editor.orirange)\n        _cmd_cmd__WEBPACK_IMPORTED_MODULE_1__[\"default\"].do('italic', window.getSelection(), editor)\n      }\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./modules/menus/italic/italic.js?");

/***/ }),

/***/ "./modules/menus/publish/publish.js":
/*!******************************************!*\
  !*** ./modules/menus/publish/publish.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/util */ \"./modules/util/util.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'publish',\n  tpl: '<li name=\"publish\"><i class=\"i-publish\"></i>发布文章 </li>',\n  events: [{\n    type: 'click',\n    cb (e, editor) {\n     editor.publish()\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./modules/menus/publish/publish.js?");

/***/ }),

/***/ "./modules/menus/quote/quote.js":
/*!**************************************!*\
  !*** ./modules/menus/quote/quote.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _selections_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selections/selection */ \"./modules/selections/selection.js\");\n/* harmony import */ var _cmd_cmd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cmd/cmd */ \"./modules/cmd/cmd.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'quote',\n  tpl: '<li name=\"quote\"><i  class=\"i-quote\"></i> </li>',\n  events: [{\n    type: 'click',\n    cb (e, editor) {\n      if (_util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRangeInContainer(editor, editor.orirange)) {\n        _selections_selection__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveRange(editor.orirange)\n        _cmd_cmd__WEBPACK_IMPORTED_MODULE_2__[\"default\"].do('formatBlock', '<BLOCKQUOTE>', editor)\n      }\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./modules/menus/quote/quote.js?");

/***/ }),

/***/ "./modules/menus/strike/strike.js":
/*!****************************************!*\
  !*** ./modules/menus/strike/strike.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _selections_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selections/selection */ \"./modules/selections/selection.js\");\n/* harmony import */ var _cmd_cmd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cmd/cmd */ \"./modules/cmd/cmd.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'strike',\n  tpl: '<li name=\"strike\"><i  class=\"i-strike\"></i> </li>',\n  events: [{\n    type: 'click',\n    cb (e, editor) {\n      if (_util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRangeInContainer(editor, editor.orirange)) {\n        _selections_selection__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveRange(editor.orirange)\n        _cmd_cmd__WEBPACK_IMPORTED_MODULE_2__[\"default\"].do('StrikeThrough', window.getSelection(), editor)\n      }\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./modules/menus/strike/strike.js?");

/***/ }),

/***/ "./modules/menus/undo/undo.js":
/*!************************************!*\
  !*** ./modules/menus/undo/undo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/util */ \"./modules/util/util.js\");\n/* harmony import */ var _selections_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selections/selection */ \"./modules/selections/selection.js\");\n/* harmony import */ var _cmd_cmd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cmd/cmd */ \"./modules/cmd/cmd.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'undo',\n  tpl: '<li name=\"undo\"><i class=\"i-undo\"></i> </li>',\n  events: [{\n    type: 'click',\n    cb (e, editor) {\n      if (_util_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRangeInContainer(editor, editor.orirange)) {\n        _selections_selection__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveRange(editor.orirange)\n        if (editor.record.length > 1) {\n          editor.record.pop()\n        }\n        editor.container.innerHTML = editor.record[editor.record.length - 1]\n        _selections_selection__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initRange(editor)\n      }\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./modules/menus/undo/undo.js?");

/***/ }),

/***/ "./modules/selections/selection.js":
/*!*****************************************!*\
  !*** ./modules/selections/selection.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  saveRange (range) {\n    if (!range) {\n      return\n    }\n    let sc = window.getSelection()\n    sc.removeAllRanges()\n    sc.addRange(range)\n  },\n  createRange (node, iscontent = false, editor) {\n    const range = document.createRange()\n    if (iscontent) {\n      range.selectNode(node)\n    } else {\n      range.selectNodeContents(node)\n    }\n    range.collapse(iscontent)\n    editor.orirange = range\n    this.saveRange(range)\n    range.detach()\n  },\n  initRange (editor) {\n    /*有hr，最后一个是<p><br></p>*/\n    const range = document.createRange()\n    if (editor.container.lastChild.innerHTML.trim() == '<br>' && editor.container.lastChild.previousSibling.nodeName == 'HR') {\n      range.selectNode(editor.container.lastChild.previousSibling.previousSibling)\n    } else {\n      range.selectNode(editor.container.lastChild)\n    }\n\n    range.collapse(true)\n    editor.orirange = range\n    this.saveRange(range)\n    range.detach()\n  }\n});\n\n//# sourceURL=webpack:///./modules/selections/selection.js?");

/***/ }),

/***/ "./modules/util/dom.js":
/*!*****************************!*\
  !*** ./modules/util/dom.js ***!
  \*****************************/
/*! exports provided: $ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\nfunction generateHtml(selector) {\n  let div = document.createElement('div')\n  div.innerHTML = selector\n  return div.children\n}\nclass jQ {\n  constructor (selector) {\n    this.selector = selector\n    let result\n    if (selector instanceof jQ) {\n      return selector\n    }\n    const nodeType = selector.nodeType\n    if (nodeType == 1) {\n      result = [selector]\n    }\n    if (typeof selector == 'string') {\n      if (selector.indexOf('<') == 0) {\n        result = generateHtml(selector)\n      } else {\n        result = document.querySelectorAll(selector)\n      }\n    }\n    for (let i = 0, len = result.length; i < len; i++) {\n      this[i] = result[i]\n    }\n  }\n  children (tag) {\n    for (let i = 0, len = this[0].children.length; i < len; i++) {\n      if (tag.toUpperCase() == this[0].children[i].nodeName) {\n        return this[0].children[i]\n      }\n    }\n    return {}\n  }\n}\nlet $ = selector => new jQ(selector)\n\n//# sourceURL=webpack:///./modules/util/dom.js?");

/***/ }),

/***/ "./modules/util/util.js":
/*!******************************!*\
  !*** ./modules/util/util.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  query (selector) {\n    return document.querySelector(selector)\n  },\n  append (container, children) {\n    container.appendChild(children)\n  },\n  isDomList (dom) {\n    return dom instanceof HTMLCollection\n  },\n  getRangeInContainer (editor, range) {\n    if (!range) {\n      return\n    }\n    let node = range.commonAncestorContainer\n    /* 一开始进来 直接点击菜单 */\n    if (node.nodeType == 1 && node.id == editor.id) {\n      return true\n    }\n    while (node = node.parentNode) {\n      if (node.nodeType == 1 && node.id == editor.id) {\n       return true\n      }\n    }\n    return false\n  },\n  getNode (range) {\n    if (range.nodeType == 1) {\n      return range\n    }\n    return range.parentNode\n  },\n  insertAfter(newElement, targetElement){\n    let parent = targetElement.parentNode\n    if(parent.lastChild == targetElement){\n      parent.appendChild(newElement);\n    }else{\n      parent.insertBefore(newElement, targetElement.nextSibling);\n    }\n  },\n  trim (str) {\n    return str.trim()\n  },\n  remove (container, tag) {\n    for (let i = 0, len = container.children.length; i < len; i++) {\n      if (container.children[i].nodeName.toUpperCase() == tag.toUpperCase()) {\n        return container.removeChild(container.children[i])\n      }\n    }\n  },\n  debounce (fn, time) {\n    let t\n    return function (need = true) {\n     if (!need) {\n       return fn()\n     }\n      clearTimeout(t)\n      t = setTimeout(function () {\n        fn()\n      }, time)\n    }\n  }\n\n});\n\n\n//# sourceURL=webpack:///./modules/util/util.js?");

/***/ })

/******/ });
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n    vertical-align: baseline;\\n    box-sizing: border-box;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, \\nfooter, header, hgroup, menu, nav, section {\\n    display: block;\\n    box-sizing: border-box;\\n}\\nbody {\\n    line-height: 1;\\n    box-sizing: border-box;\\n}\\nol, ul {\\n    list-style: none;\\n    box-sizing: border-box;\\n}\\nblockquote, q {\\n    quotes: none;\\n    box-sizing: border-box;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\\n\\na{\\n    text-decoration: none;\\n    color: inherit;\\n}\\n\\nbutton {\\n    border-width: 0;\\n    cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".rounded {\\n  font-family: \\\"M PLUS Rounded 1c\\\", sans-serif;\\n}\\n\\n.bold {\\n  font-weight: 700;\\n}\\n\\n.extra-bold {\\n  font-weight: 800;\\n}\\n\\n.x-large {\\n  font-size: 40px;\\n}\\n\\n.medium {\\n  font-weight: 500;\\n  font-size: 25px;\\n}\\n\\n.regular {\\n  font-size: 20px;\\n}\\n\\n.flex {\\n  display: flex;\\n}\\n\\n.space-between {\\n  justify-content: space-between;\\n}\\n\\n.column {\\n  flex-direction: column;\\n}\\n\\n.inverse {\\n  flex-direction: row-reverse;\\n}\\n\\n.align-center {\\n  align-items: center;\\n}\\n\\n.fixed {\\n  position: fixed;\\n}\\n\\n.center-h {\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.fit-content {\\n  width: fit-content;\\n}\\n\\n.relative {\\n  position: relative;\\n}\\n\\n.absolute {\\n  position: absolute;\\n}\\n\\n.hidden-overflow {\\n  overflow: hidden;\\n}\\n\\n.none {\\n  display: none;\\n}\\n\\n.wrap {\\n  flex-wrap: wrap;\\n}\\n\\n@media (min-width: 768px) {\\n  .md-inline {\\n    display: inline;\\n  }\\n\\n  .md-block {\\n    display: block;\\n  }\\n\\n  .md-flex {\\n    display: flex;\\n  }\\n\\n  .md-align-center {\\n    align-items: center;\\n  }\\n}\\n.color-primary {\\n  color: #f1f7ed;\\n}\\n\\n.bg-color-primary {\\n  background-color: #f1f7ed;\\n}\\n\\n.color-secondary {\\n  color: #4b76b8;\\n}\\n\\n.bg-color-secondary {\\n  background-color: #4b76b8;\\n}\\n\\n.color-secondary-transparent {\\n  color: #4b77b8a8;\\n}\\n\\n.bg-color-secondary-transparent {\\n  background-color: #4b77b8a8;\\n}\\n\\n.color-supplementary {\\n  color: #f1f7ed;\\n}\\n\\n.bg-color-supplementary {\\n  background-color: #f1f7ed;\\n}\\n\\n.color-bl {\\n  color: #0f0a0a;\\n}\\n\\n.bg-color-bl {\\n  background-color: #0f0a0a;\\n}\\n\\n.color-cream {\\n  color: #f1f7ed;\\n}\\n\\n.bg-color-cream {\\n  background-color: #f1f7ed;\\n}\\n\\n@media (min-width: 768px) {\\n  .md-color-primary {\\n    color: #f1f7ed;\\n  }\\n}\\n.m-10 {\\n  margin: 10px;\\n}\\n\\n.m-left-10 {\\n  margin-left: 10px;\\n}\\n\\n.m-right-10 {\\n  margin-right: 10px;\\n}\\n\\n.m-top-10 {\\n  margin-top: 10px;\\n}\\n\\n.m-bottom-10 {\\n  margin-bottom: 10px;\\n}\\n\\n.m-x-10 {\\n  margin-left: 10px;\\n  margin-right: 10px;\\n}\\n\\n.m-y-10 {\\n  margin-top: 10px;\\n  margin-bottom: 10px;\\n}\\n\\n.p-10 {\\n  padding: 10px;\\n}\\n\\n.p-left-10 {\\n  padding-left: 10px;\\n}\\n\\n.p-right-10 {\\n  padding-right: 10px;\\n}\\n\\n.p-top-10 {\\n  padding-top: 10px;\\n}\\n\\n.p-bottom-10 {\\n  padding-bottom: 10px;\\n}\\n\\n.p-x-10 {\\n  padding-left: 10px;\\n  padding-right: 10px;\\n}\\n\\n.p-y-10 {\\n  padding-top: 10px;\\n  padding-bottom: 10px;\\n}\\n\\n.m-20 {\\n  margin: 20px;\\n}\\n\\n.m-left-20 {\\n  margin-left: 20px;\\n}\\n\\n.m-right-20 {\\n  margin-right: 20px;\\n}\\n\\n.m-top-20 {\\n  margin-top: 20px;\\n}\\n\\n.m-bottom-20 {\\n  margin-bottom: 20px;\\n}\\n\\n.m-x-20 {\\n  margin-left: 20px;\\n  margin-right: 20px;\\n}\\n\\n.m-y-20 {\\n  margin-top: 20px;\\n  margin-bottom: 20px;\\n}\\n\\n.p-20 {\\n  padding: 20px;\\n}\\n\\n.p-left-20 {\\n  padding-left: 20px;\\n}\\n\\n.p-right-20 {\\n  padding-right: 20px;\\n}\\n\\n.p-top-20 {\\n  padding-top: 20px;\\n}\\n\\n.p-bottom-20 {\\n  padding-bottom: 20px;\\n}\\n\\n.p-x-20 {\\n  padding-left: 20px;\\n  padding-right: 20px;\\n}\\n\\n.p-y-20 {\\n  padding-top: 20px;\\n  padding-bottom: 20px;\\n}\\n\\n.m-40 {\\n  margin: 40px;\\n}\\n\\n.m-left-40 {\\n  margin-left: 40px;\\n}\\n\\n.m-right-40 {\\n  margin-right: 40px;\\n}\\n\\n.m-top-40 {\\n  margin-top: 40px;\\n}\\n\\n.m-bottom-40 {\\n  margin-bottom: 40px;\\n}\\n\\n.m-x-40 {\\n  margin-left: 40px;\\n  margin-right: 40px;\\n}\\n\\n.m-y-40 {\\n  margin-top: 40px;\\n  margin-bottom: 40px;\\n}\\n\\n.p-40 {\\n  padding: 40px;\\n}\\n\\n.p-left-40 {\\n  padding-left: 40px;\\n}\\n\\n.p-right-40 {\\n  padding-right: 40px;\\n}\\n\\n.p-top-40 {\\n  padding-top: 40px;\\n}\\n\\n.p-bottom-40 {\\n  padding-bottom: 40px;\\n}\\n\\n.p-x-40 {\\n  padding-left: 40px;\\n  padding-right: 40px;\\n}\\n\\n.p-y-40 {\\n  padding-top: 40px;\\n  padding-bottom: 40px;\\n}\\n\\n.m-80 {\\n  margin: 80px;\\n}\\n\\n.m-left-80 {\\n  margin-left: 80px;\\n}\\n\\n.m-right-80 {\\n  margin-right: 80px;\\n}\\n\\n.m-top-80 {\\n  margin-top: 80px;\\n}\\n\\n.m-bottom-80 {\\n  margin-bottom: 80px;\\n}\\n\\n.m-x-80 {\\n  margin-left: 80px;\\n  margin-right: 80px;\\n}\\n\\n.m-y-80 {\\n  margin-top: 80px;\\n  margin-bottom: 80px;\\n}\\n\\n.p-80 {\\n  padding: 80px;\\n}\\n\\n.p-left-80 {\\n  padding-left: 80px;\\n}\\n\\n.p-right-80 {\\n  padding-right: 80px;\\n}\\n\\n.p-top-80 {\\n  padding-top: 80px;\\n}\\n\\n.p-bottom-80 {\\n  padding-bottom: 80px;\\n}\\n\\n.p-x-80 {\\n  padding-left: 80px;\\n  padding-right: 80px;\\n}\\n\\n.p-y-80 {\\n  padding-top: 80px;\\n  padding-bottom: 80px;\\n}\\n\\n.m-100 {\\n  margin: 100px;\\n}\\n\\n.m-left-100 {\\n  margin-left: 100px;\\n}\\n\\n.m-right-100 {\\n  margin-right: 100px;\\n}\\n\\n.m-top-100 {\\n  margin-top: 100px;\\n}\\n\\n.m-bottom-100 {\\n  margin-bottom: 100px;\\n}\\n\\n.m-x-100 {\\n  margin-left: 100px;\\n  margin-right: 100px;\\n}\\n\\n.m-y-100 {\\n  margin-top: 100px;\\n  margin-bottom: 100px;\\n}\\n\\n.p-100 {\\n  padding: 100px;\\n}\\n\\n.p-left-100 {\\n  padding-left: 100px;\\n}\\n\\n.p-right-100 {\\n  padding-right: 100px;\\n}\\n\\n.p-top-100 {\\n  padding-top: 100px;\\n}\\n\\n.p-bottom-100 {\\n  padding-bottom: 100px;\\n}\\n\\n.p-x-100 {\\n  padding-left: 100px;\\n  padding-right: 100px;\\n}\\n\\n.p-y-100 {\\n  padding-top: 100px;\\n  padding-bottom: 100px;\\n}\\n\\n.m-p10 {\\n  margin: 10%;\\n}\\n\\n.m-left-p10 {\\n  margin-left: 10%;\\n}\\n\\n.m-right-p10 {\\n  margin-right: 10%;\\n}\\n\\n.m-top-p10 {\\n  margin-top: 10%;\\n}\\n\\n.m-bottom-p10 {\\n  margin-bottom: 10%;\\n}\\n\\n.m-x-p10 {\\n  margin-left: 10%;\\n  margin-right: 10%;\\n}\\n\\n.m-y-p10 {\\n  margin-top: 10%;\\n  margin-bottom: 10%;\\n}\\n\\n.p-p10 {\\n  padding: 10%;\\n}\\n\\n.p-left-p10 {\\n  padding-left: 10%;\\n}\\n\\n.p-right-p10 {\\n  padding-right: 10%;\\n}\\n\\n.p-top-p10 {\\n  padding-top: 10%;\\n}\\n\\n.p-bottom-p10 {\\n  padding-bottom: 10%;\\n}\\n\\n.p-x-p10 {\\n  padding-left: 10%;\\n  padding-right: 10%;\\n}\\n\\n.p-y-p10 {\\n  padding-top: 10%;\\n  padding-bottom: 10%;\\n}\\n\\n.z-1 {\\n  z-index: 1;\\n}\\n\\n.z-2 {\\n  z-index: 2;\\n}\\n\\n.z-3 {\\n  z-index: 3;\\n}\\n\\n.z-4 {\\n  z-index: 4;\\n}\\n\\n@media (min-width: 768px) {\\n  .md-p-top-200 {\\n    padding-top: 200px;\\n  }\\n\\n  .md-m-left-20 {\\n    margin-left: 20px;\\n  }\\n}\\nnav {\\n  top: 0;\\n  left: 0;\\n  height: 80px;\\n}\\n\\n.nav-container {\\n  height: 80px;\\n  width: 100%;\\n}\\n\\n.intro {\\n  min-height: calc(100vh - 80px);\\n}\\n\\n.container {\\n  max-width: 1400px;\\n}\\n\\n.content {\\n  width: 100%;\\n}\\n@media (min-width: 768px) {\\n  .content {\\n    width: 50%;\\n  }\\n}\\n\\n.dot {\\n  border-radius: 50%;\\n  width: 10px;\\n  height: 10px;\\n}\\n\\n.circle {\\n  border-radius: 50%;\\n  width: 200px;\\n  height: 200px;\\n}\\n\\n.sm-circle {\\n  border-radius: 50%;\\n  height: 100px;\\n  width: 100px;\\n  top: calc(100px - 50px);\\n  left: calc(100px - 50px);\\n}\\n\\n.circle1 {\\n  bottom: -250px;\\n  right: 0;\\n}\\n\\n.circle2 {\\n  top: -150px;\\n  left: -50px;\\n}\\n\\n.dragable {\\n  cursor: pointer;\\n}\\n\\n.top-200 {\\n  top: 160px;\\n  left: 160px;\\n}\\n\\n.tag {\\n  border-radius: 10px;\\n}\\n\\n.img {\\n  top: 0;\\n  left: 0;\\n  min-width: 100%;\\n  height: 100%;\\n}\\n\\n.img-container {\\n  width: 100%;\\n  min-height: 100%;\\n  height: 400px;\\n}\\n\\n.about-me {\\n  max-width: 80%;\\n}\\n\\n.button {\\n  border: solid 1px;\\n  border-color: black;\\n  width: fit-content;\\n  width: -moz-fit-content;\\n}\\n\\n.lang-icon {\\n  width: 50px;\\n  height: 50px;\\n  border-radius: 50%;\\n}\\n\\n@media (min-width: 768px) {\\n  .main-tag:not(:first-of-type) {\\n    margin-left: 20px;\\n  }\\n}\\n.row {\\n  display: flex;\\n  width: 150px;\\n  height: 50px;\\n}\\n\\n.row div {\\n  height: 49px;\\n  width: 49px;\\n  text-align: center;\\n  font-size: 40px;\\n  cursor: pointer;\\n}\\n\\n.row:not(:last-of-type) div {\\n  border-bottom: 1px solid black;\\n}\\n\\n.row div:not(:last-of-type) {\\n  border-right: 1px solid black;\\n}\\n\\n.game {\\n  margin: auto;\\n}\\n\\n.reset-button {\\n  margin-left: 25px;\\n  margin-top: 20px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/reset.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://portfolio/./src/reset.css?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://portfolio/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/enigma.png":
/*!*******************************!*\
  !*** ./src/images/enigma.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4f0ac67fcd37d3307a1b.png\";\n\n//# sourceURL=webpack://portfolio/./src/images/enigma.png?");

/***/ }),

/***/ "./src/images/store.png":
/*!******************************!*\
  !*** ./src/images/store.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8a5e5a875bcf7526ce1c.png\";\n\n//# sourceURL=webpack://portfolio/./src/images/store.png?");

/***/ }),

/***/ "./src/images/weatherbot.png":
/*!***********************************!*\
  !*** ./src/images/weatherbot.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e496c6698a535068e62.png\";\n\n//# sourceURL=webpack://portfolio/./src/images/weatherbot.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _logic_dragable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/dragable */ \"./src/logic/dragable.js\");\n/* harmony import */ var _logic_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/display */ \"./src/logic/display.js\");\n/* harmony import */ var _logic_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic/items */ \"./src/logic/items.js\");\n/* harmony import */ var _logic_tictactoe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logic/tictactoe */ \"./src/logic/tictactoe.js\");\n\n\n\n\n\n\n\nconst elements = document.getElementsByClassName('dragable');\nfor (let i = 0; i < elements.length; i += 1) {\n  (0,_logic_dragable__WEBPACK_IMPORTED_MODULE_2__.default)(elements[i]);\n}\n\nconst item1 = (0,_logic_display__WEBPACK_IMPORTED_MODULE_3__.default)(_logic_items__WEBPACK_IMPORTED_MODULE_4__.enigma);\nconst item2 = (0,_logic_display__WEBPACK_IMPORTED_MODULE_3__.default)(_logic_items__WEBPACK_IMPORTED_MODULE_4__.weatherBot, true);\nconst item3 = (0,_logic_display__WEBPACK_IMPORTED_MODULE_3__.default)(_logic_items__WEBPACK_IMPORTED_MODULE_4__.store);\nconst item4 = (0,_logic_display__WEBPACK_IMPORTED_MODULE_3__.default)(_logic_items__WEBPACK_IMPORTED_MODULE_4__.tictactoeProject, true);\n\nconst projects = document.querySelector('#projects');\nprojects.appendChild(item1);\nprojects.appendChild(item2);\nprojects.appendChild(item3);\nprojects.appendChild(item4);\n\nconst gameBoard = (0,_logic_tictactoe__WEBPACK_IMPORTED_MODULE_5__.createBoard)();\nconst gameSpace = item4.querySelector('.img-container');\nconst resetButton = document.createElement('button');\nresetButton.classList.add('reset-button');\nresetButton.textContent = 'Reset Board';\ngameBoard.appendChild(resetButton);\ngameSpace.appendChild(gameBoard);\nconst board = document.querySelectorAll('.row div');\n\nfor (let i = 0; i < board.length; i += 1) {\n  board[i].addEventListener('click', (e) => {\n    _logic_tictactoe__WEBPACK_IMPORTED_MODULE_5__.tictactoe.handleClick(e);\n  });\n}\n\nresetButton.addEventListener('click', () => {\n  _logic_tictactoe__WEBPACK_IMPORTED_MODULE_5__.tictactoe.reset(board);\n});\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/logic/bot.js":
/*!**************************!*\
  !*** ./src/logic/bot.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/logic/player.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/logic/state.js\");\n\n\n\nconst bot = (name, symbol) => {\n  const enemy = (0,_player__WEBPACK_IMPORTED_MODULE_0__.default)('Player', 'X');\n  const { makeMove, getInfo } = (0,_player__WEBPACK_IMPORTED_MODULE_0__.default)(name, symbol);\n\n  const randomMove = (s) => {\n    let move = -1;\n    while (!s.checkMove(move)) {\n      move = Math.floor(Math.random() * 8);\n    }\n    return move;\n  };\n\n  const possibleMoves = (s) => {\n    const pm = [];\n    const board = s.getBoard();\n    for (let i = 0; i < board.length; i += 1) {\n      if (board[i] === '') pm.push(i);\n    }\n    return pm;\n  };\n\n  const rate = (s, turn) => {\n    const moves = possibleMoves(s);\n    if (moves.length === 0) return 0;\n    const ratings = [];\n    let score = 0;\n    if (turn === 'bot') {\n      for (let i = 0; i < moves.length; i += 1) {\n        makeMove(moves[i], s);\n        if (s.win()) {\n          s.setCell(moves[i], '');\n          return 1;\n        }\n        score = rate(s, 'player');\n        ratings.push(score);\n        s.setCell(moves[i], '');\n      }\n      const max = Math.max(...ratings);\n      return max;\n    }\n    for (let i = 0; i < moves.length; i += 1) {\n      enemy.makeMove(moves[i], s);\n      if (s.win()) {\n        s.setCell(moves[i], '');\n        return -1;\n      }\n      score = rate(s, 'bot');\n      ratings.push(score);\n      s.setCell(moves[i], '');\n    }\n    const min = Math.min(...ratings);\n    return min;\n  };\n\n  const bestMove = (moves) => {\n    let max = -10;\n    const best = [];\n    for (let i = 0; i < moves.length; i += 1) {\n      const { score } = moves[i];\n      max = score > max ? score : max;\n    }\n    for (let i = 0; i < moves.length; i += 1) {\n      const { move, score } = moves[i];\n      if (score === max) best.push(move);\n    }\n    const move = Math.floor(Math.random() * best.length);\n    return best[move];\n  };\n\n  const testMoves = (s) => {\n    const moves = possibleMoves(s);\n    const ratings = [];\n    for (let i = 0; i < moves.length; i += 1) {\n      let score = 0;\n      makeMove(moves[i], s);\n      if (s.win()) return moves[i];\n      score = rate(s, 'player');\n      ratings.push({ move: moves[i], score });\n      s.setCell(moves[i], '');\n    }\n    const move = bestMove(ratings);\n    return move;\n  };\n\n  const chooseMove = (s) => {\n    const botState = (0,_state__WEBPACK_IMPORTED_MODULE_1__.default)();\n    botState.setBoard(s.getBoard());\n    const move = testMoves(botState);\n    return move;\n  };\n\n  return {\n    makeMove, getInfo, randomMove, chooseMove,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bot);\n\n//# sourceURL=webpack://portfolio/./src/logic/bot.js?");

/***/ }),

/***/ "./src/logic/display.js":
/*!******************************!*\
  !*** ./src/logic/display.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createDot = () => {\n  const dot = document.createElement('div');\n  dot.classList.add('none', 'md-block', 'dot', 'bg-color-primary', 'm-left-20');\n  return dot;\n};\n\nconst createTag = (title) => {\n  const tag = document.createElement('div');\n  tag.classList.add('regular', 'main-tag');\n  tag.textContent = title;\n  return tag;\n};\n\nconst createTechTag = (title) => {\n  const techTag = document.createElement('div');\n  techTag.classList.add('bg-color-primary', 'fit-content', 'tag', 'm-right-20', 'm-top-20', 'p-10');\n  const tagTitle = document.createElement('span');\n  tagTitle.textContent = title;\n  techTag.appendChild(tagTitle);\n  return techTag;\n};\n\nconst createLink = (url, text) => {\n  const link = document.createElement('a');\n  link.classList.add('m-right-20');\n  link.href = url;\n  link.rel = 'noopener noreferrer';\n  link.target = '_blank';\n  const content = document.createElement('div');\n  content.classList.add('bg-color-primary', 'tag', 'p-10', 'regular', 'm-top-20');\n  content.textContent = text;\n  link.appendChild(content);\n  return link;\n};\n\nconst createItem = (element, inverse = false) => {\n  const {\n    imgUrl, contentTitle, tagsInfo, desc, techTagsInfo, linksInfo,\n  } = element;\n  const item = document.createElement('div');\n  item.classList.add('p-x-20', 'md-flex', 'space-between', 'm-top-100');\n\n  const imageWrapper = document.createElement('div');\n  imageWrapper.classList.add('content', 'bg-color-primary', 'hidden-overflow');\n  const imageContainer = document.createElement('div');\n  imageContainer.classList.add('img-container', 'flex', 'align-center', 'relative');\n  if (imgUrl !== '') {\n    const img = document.createElement('img');\n    img.classList.add('img', 'absolute');\n    img.src = imgUrl;\n    imageContainer.appendChild(img);\n  }\n  imageWrapper.appendChild(imageContainer);\n\n  const content = document.createElement('div');\n  content.classList.add('content', 'p-x-40', 'right-border', 'bottom-border', 'p-y-20', 'bg-color-secondary');\n  const title = document.createElement('p');\n  title.classList.add('x-large', 'm-top-20', 'extra-bold');\n  title.textContent = contentTitle;\n\n  const tags = document.createElement('div');\n  tags.classList.add('md-flex', 'align-center', 'm-top-20');\n  for (let i = 0; i < tagsInfo.length; i += 1) {\n    const tag = createTag(tagsInfo[i]);\n    const dot = createDot();\n    tags.appendChild(tag);\n    if (i !== tagsInfo.length - 1) tags.appendChild(dot);\n  }\n\n  const description = document.createElement('p');\n  description.classList.add('m-top-20', 'regular', 'medium');\n  description.textContent = desc;\n\n  const techTags = document.createElement('div');\n  techTags.classList.add('flex', 'wrap');\n  for (let i = 0; i < techTagsInfo.length; i += 1) {\n    const techTag = createTechTag(techTagsInfo[i]);\n    techTags.appendChild(techTag);\n  }\n\n  const links = document.createElement('div');\n  links.classList.add('flex', 'wrap');\n  for (let i = 0; i < linksInfo.length; i += 1) {\n    const { url, text } = linksInfo[i];\n    const link = createLink(url, text);\n    links.appendChild(link);\n  }\n\n  content.appendChild(title);\n  content.appendChild(tags);\n  content.appendChild(description);\n  content.appendChild(techTags);\n  content.appendChild(links);\n\n  if (inverse) {\n    item.appendChild(content);\n    item.appendChild(imageWrapper);\n  } else {\n    item.appendChild(imageWrapper);\n    item.appendChild(content);\n  }\n\n  return item;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createItem);\n\n\n//# sourceURL=webpack://portfolio/./src/logic/display.js?");

/***/ }),

/***/ "./src/logic/dragable.js":
/*!*******************************!*\
  !*** ./src/logic/dragable.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst move = (elem) => {\n  let mouseX = 0;\n  let mouseY = 0;\n\n  const ChangePosition = (e) => {\n    e.preventDefault();\n    const offsetX = mouseX - e.clientX;\n    const offsetY = mouseY - e.clientY;\n    mouseX = e.clientX;\n    mouseY = e.clientY;\n    elem.style.top = `${elem.offsetTop - offsetY}px`;\n    elem.style.left = `${elem.offsetLeft - offsetX}px`;\n  };\n\n  const Diselect = () => {\n    elem.style.cursor = 'pointer';\n    document.onmouseup = null;\n    document.onmousemove = null;\n  };\n\n  const Select = (e) => {\n    e.preventDefault();\n    mouseX = e.clientX;\n    mouseY = e.clientY;\n    elem.style.cursor = 'move';\n    document.onmouseup = Diselect;\n    document.onmousemove = ChangePosition;\n  };\n\n  elem.onmousedown = Select;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (move);\n\n//# sourceURL=webpack://portfolio/./src/logic/dragable.js?");

/***/ }),

/***/ "./src/logic/items.js":
/*!****************************!*\
  !*** ./src/logic/items.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enigma\": () => (/* binding */ enigma),\n/* harmony export */   \"weatherBot\": () => (/* binding */ weatherBot),\n/* harmony export */   \"store\": () => (/* binding */ store),\n/* harmony export */   \"tictactoeProject\": () => (/* binding */ tictactoeProject)\n/* harmony export */ });\n/* harmony import */ var _images_enigma_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/enigma.png */ \"./src/images/enigma.png\");\n/* harmony import */ var _images_weatherbot_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/weatherbot.png */ \"./src/images/weatherbot.png\");\n/* harmony import */ var _images_store_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/store.png */ \"./src/images/store.png\");\n\n\n\n\nconst enigma = {\n  imgUrl: _images_enigma_png__WEBPACK_IMPORTED_MODULE_0__,\n  contentTitle: 'Enigma?',\n  tagsInfo: ['Desktop app', 'Full Stack', '2021'],\n  desc: `EniGma? is a Desktop app where users can create and \n  view different scientific articles. Singed-in users can up-vote articles. \n  The one with the most votes will be on the home page.`,\n  techTagsInfo: ['RoR', 'HTML', 'SCSS'],\n  linksInfo: [\n    {\n      url: 'https://enigma-articles.herokuapp.com/',\n      text: 'See project',\n    },\n    {\n      url: 'https://github.com/patrick-angelos/Enigma',\n      text: 'Github',\n    },\n  ],\n};\n\nconst weatherBot = {\n  imgUrl: _images_weatherbot_png__WEBPACK_IMPORTED_MODULE_1__,\n  contentTitle: 'Weather Bot',\n  tagsInfo: ['Slack Bot', '2021'],\n  desc: `A weather bot that pulls from the OpenWeatherMap API to allow users \n  to view the forecast in cities worldwide using simple commands on Slack.`,\n  techTagsInfo: ['Slack API', 'Ruby'],\n  linksInfo: [\n    {\n      url: 'https://github.com/patrick-angelos/SlackBot',\n      text: 'Github',\n    },\n  ],\n};\n\nconst store = {\n  imgUrl: _images_store_png__WEBPACK_IMPORTED_MODULE_2__,\n  contentTitle: 'Zattix',\n  tagsInfo: ['HTML page', 'Frontend', '2020'],\n  desc: `An e-shop example page. It consists of a home page and a results page(static). \n  You can see the products in a carousel on the home page.`,\n  techTagsInfo: ['HTML', 'SCSS'],\n  linksInfo: [\n    {\n      url: 'https://patrick-angelos.github.io/onlineShop/',\n      text: 'See project',\n    },\n    {\n      url: 'https://github.com/patrick-angelos/onlineShop',\n      text: 'Github',\n    },\n  ],\n};\n\nconst tictactoeProject = {\n  imgUrl: '',\n  contentTitle: 'Tic Tac Toe bot',\n  tagsInfo: ['MINIMAX', '2021'],\n  desc: `A tic tac toe game featuring an unbeatable bot made using a simple MINIMAX algorithm. \n  Try it and play by clicking on the board`,\n  techTagsInfo: ['JavaScript'],\n  linksInfo: [\n    {\n      url: 'https://github.com/patrick-angelos/tic-tac-toe',\n      text: 'Github',\n    },\n  ],\n};\n\n\n\n//# sourceURL=webpack://portfolio/./src/logic/items.js?");

/***/ }),

/***/ "./src/logic/player.js":
/*!*****************************!*\
  !*** ./src/logic/player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst player = (name, symbol) => {\n  const getInfo = () => ({ name, symbol });\n\n  const makeMove = (move, state, cell = null) => {\n    state.setCell(move, symbol);\n    if (cell) cell.textContent = symbol;\n  };\n\n  return { getInfo, makeMove };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n\n//# sourceURL=webpack://portfolio/./src/logic/player.js?");

/***/ }),

/***/ "./src/logic/state.js":
/*!****************************!*\
  !*** ./src/logic/state.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst state = () => {\n  const WIN_CASES = [\n    [0, 1, 2],\n    [3, 4, 5],\n    [6, 7, 8],\n    [0, 3, 6],\n    [1, 4, 7],\n    [2, 5, 8],\n    [0, 4, 8],\n    [2, 4, 6]];\n  let board = ['', '', '', '', '', '', '', '', ''];\n\n  const checkMove = (move) => {\n    if (move < 0 || move > 8) return false;\n    if (board[move] === '') {\n      return true;\n    }\n    return false;\n  };\n\n  const getBoard = () => board;\n\n  const setBoard = (b) => {\n    board = [...b];\n  };\n\n  const setCell = (move, symbol) => {\n    board[move] = symbol;\n  };\n\n  const win = () => {\n    for (let w = 0; w < WIN_CASES.length; w += 1) {\n      const c = WIN_CASES[w];\n      if (board[c[0]] !== '' && board[c[0]] === board[c[1]] && board[c[0]] === board[c[2]]) {\n        return true;\n      }\n    }\n    return false;\n  };\n\n  return {\n    win, checkMove, setBoard, setCell, getBoard,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);\n\n//# sourceURL=webpack://portfolio/./src/logic/state.js?");

/***/ }),

/***/ "./src/logic/tictactoe.js":
/*!********************************!*\
  !*** ./src/logic/tictactoe.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBoard\": () => (/* binding */ createBoard),\n/* harmony export */   \"tictactoe\": () => (/* binding */ tictactoe)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/logic/player.js\");\n/* harmony import */ var _bot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bot */ \"./src/logic/bot.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ \"./src/logic/state.js\");\n\n\n\n\nconst createBoard = () => {\n  const game = document.createElement('div');\n  game.classList.add('game');\n  game.id = 'game';\n  for (let i = 0; i < 3; i += 1) {\n    const row = document.createElement('div');\n    row.classList.add('row');\n    for (let j = i * 3; j < i * 3 + 3; j += 1) {\n      const cell = document.createElement('div');\n      cell.id = j;\n      row.appendChild(cell);\n    }\n    game.appendChild(row);\n  }\n  return game;\n};\n\nconst tictactoe = (() => {\n  let game = (0,_state__WEBPACK_IMPORTED_MODULE_2__.default)();\n  const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.default)('Player1', 'X');\n  const player2 = (0,_bot__WEBPACK_IMPORTED_MODULE_1__.default)('Player2', 'O');\n  let currentPlayer = player1;\n  let winner = false;\n  let count = 0;\n\n  const reset = (board) => {\n    if (currentPlayer === player2 && !winner) return;\n    for (let i = 0; i < board.length; i += 1) {\n      board[i].textContent = '';\n    }\n    game = (0,_state__WEBPACK_IMPORTED_MODULE_2__.default)();\n    winner = false;\n    count = 0;\n    currentPlayer = player1;\n  };\n\n  const botTurn = () => {\n    setTimeout(() => {\n      const move = player2.chooseMove(game);\n      const cell = document.getElementById(`${move}`);\n      player2.makeMove(move, game, cell);\n      count += 1;\n      if (game.win()) {\n        winner = player2;\n        return winner;\n      }\n\n      currentPlayer = player1;\n      return false;\n    }, 1000);\n  };\n\n  const handleClick = (e) => {\n    if (winner) return winner;\n    if (currentPlayer === player2) return false;\n\n    const cell = e.target;\n    const move = cell.id;\n    if (!game.checkMove(move)) return false;\n\n    currentPlayer.makeMove(move, game, cell);\n    count += 1;\n    if (game.win()) {\n      winner = currentPlayer;\n      return winner;\n    }\n    if (count >= 9) {\n      winner = 'draw';\n      return winner;\n    }\n\n    currentPlayer = player2;\n    winner = botTurn();\n    return winner;\n  };\n\n  return { reset, botTurn, handleClick };\n})();\n\n\n\n//# sourceURL=webpack://portfolio/./src/logic/tictactoe.js?");

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
/******/ 			id: moduleId,
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./ArchitectsDaughter-Regular.woff */ "./src/ArchitectsDaughter-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./deskBackground.jpg */ "./src/deskBackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'ArchitectsDaughter';
  font-style: normal;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff');
  font-weight: 400;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
}

body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    background-color: #d1dae4;
    display: flex;
    flex-direction: column;
    font-family: 'ArchitectsDaughter';
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 20px 20px;
    height: 75px;
}

footer {
    position: fixed;
    bottom: 0;
}

footer a {
    text-decoration: none;
    color: black;
    height: 5vh;
}

h1 {
    font-size: 38px;
}

h2 {
    font-size: 30px;
    text-decoration: underline;
}

ul {
    width: 90%;
}

#content {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 75px);
}

#side-panel, #main-panel {
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 15px;
  height: 65%;
  border-radius: 8px;
}

#side-panel {
  width: 25vw;
  margin-left: 5px;
  background-color: rgba(169, 169, 169, 0.5);
}

#main-panel {
  width: 85vw;
  margin-left: 20px;
}

#main-panel-desc {
    align-self: center;
    margin: 150px auto 0 auto;
}

.add-button {
    height: 50px;
    width: 50px;
    font-family: 'ArchitectsDaughter';
    font-size: 18px;
    background-color: rgba(101, 136, 31, 1);
    color: white;
    border-radius: 6px;
}

/* Modal Styles */
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
  max-width: 500px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

/* Tab Styles */
.tab-buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.tab-buttons button {
  background-color: #f2f2f2;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  transition: 0.3s;
  border-radius: 5px;
}

.tab-buttons button.active {
  background-color: #4CAF50;
  color: white;
}

.tab {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
}

.tab.active {
  display: block;
}

/* Input Styles */
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/* Button Styles */
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

/* ToDo Item Styles */
li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

li input[type="checkbox"] {
  margin-right: 10px;
}

li .todo-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

li .todo-name {
  font-weight: bold;
  margin-bottom: 5px;
}

li .todo-description,
li .todo-due-date {
  margin-bottom: 2px;
}

li .priority-block {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 20px;
}

.priority-low {
  background-color: green;
}

.priority-medium {
  background-color: orange;
}

.priority-high {
  background-color: red;
}

/* Edit and Delete Button Styles */
.todo-controls {
  display: flex;
  align-items: center;
}

.todo-controls button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  font-size: 14px;
  color: #666;
}

.todo-controls button:hover {
  color: #333;
}

.todo-controls .edit-btn {
  color: #4CAF50;
}

.todo-controls .delete-btn {
  color: #f44336;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'ArchitectsDaughter';\n  font-style: normal;\n  src: url('./ArchitectsDaughter-Regular.woff') format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n    background-image: url('./deskBackground.jpg');\n    background-size: cover;\n    background-position: top;\n    background-repeat: no-repeat;\n    height: 100vh;\n    width: 100vw;\n    background-color: #d1dae4;\n    display: flex;\n    flex-direction: column;\n    font-family: 'ArchitectsDaughter';\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 20px 20px 20px;\n    height: 75px;\n}\n\nfooter {\n    position: fixed;\n    bottom: 0;\n}\n\nfooter a {\n    text-decoration: none;\n    color: black;\n    height: 5vh;\n}\n\nh1 {\n    font-size: 38px;\n}\n\nh2 {\n    font-size: 30px;\n    text-decoration: underline;\n}\n\nul {\n    width: 90%;\n}\n\n#content {\n    display: flex;\n    flex-direction: row;\n    height: calc(100vh - 75px);\n}\n\n#side-panel, #main-panel {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0 0 15px;\n  height: 65%;\n  border-radius: 8px;\n}\n\n#side-panel {\n  width: 25vw;\n  margin-left: 5px;\n  background-color: rgba(169, 169, 169, 0.5);\n}\n\n#main-panel {\n  width: 85vw;\n  margin-left: 20px;\n}\n\n#main-panel-desc {\n    align-self: center;\n    margin: 150px auto 0 auto;\n}\n\n.add-button {\n    height: 50px;\n    width: 50px;\n    font-family: 'ArchitectsDaughter';\n    font-size: 18px;\n    background-color: rgba(101, 136, 31, 1);\n    color: white;\n    border-radius: 6px;\n}\n\n/* Modal Styles */\n.modal {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal-content {\n  background-color: #fefefe;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 40%;\n  max-width: 500px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n}\n\n/* Tab Styles */\n.tab-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 20px;\n}\n\n.tab-buttons button {\n  background-color: #f2f2f2;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 10px 20px;\n  transition: 0.3s;\n  border-radius: 5px;\n}\n\n.tab-buttons button.active {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.tab {\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n  border-radius: 0 0 5px 5px;\n}\n\n.tab.active {\n  display: block;\n}\n\n/* Input Styles */\ninput[type=\"text\"] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n/* Button Styles */\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #45a049;\n}\n\n/* ToDo Item Styles */\nli {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  padding: 10px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\nli input[type=\"checkbox\"] {\n  margin-right: 10px;\n}\n\nli .todo-details {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\nli .todo-name {\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\nli .todo-description,\nli .todo-due-date {\n  margin-bottom: 2px;\n}\n\nli .priority-block {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin-left: 20px;\n}\n\n.priority-low {\n  background-color: green;\n}\n\n.priority-medium {\n  background-color: orange;\n}\n\n.priority-high {\n  background-color: red;\n}\n\n/* Edit and Delete Button Styles */\n.todo-controls {\n  display: flex;\n  align-items: center;\n}\n\n.todo-controls button {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  margin-left: 10px;\n  font-size: 14px;\n  color: #666;\n}\n\n.todo-controls button:hover {\n  color: #333;\n}\n\n.todo-controls .edit-btn {\n  color: #4CAF50;\n}\n\n.todo-controls .delete-btn {\n  color: #f44336;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _uIController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uIController */ "./src/uIController.js");



if (false) {}


/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromLocalStorage: () => (/* binding */ getFromLocalStorage),
/* harmony export */   getIdFromLocalStorage: () => (/* binding */ getIdFromLocalStorage),
/* harmony export */   getIncrementId: () => (/* binding */ getIncrementId),
/* harmony export */   saveIncrementId: () => (/* binding */ saveIncrementId),
/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)
/* harmony export */ });
const localStorageKey = "projects";
const localStorageIdKey = "projectId";

function saveToLocalStorage(projects, selectedProjectId) {
    localStorage.setItem(localStorageKey, JSON.stringify(projects));
    localStorage.setItem(localStorageIdKey, JSON.stringify(selectedProjectId));
}

function getFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(localStorageKey));
    return data;
}

function getIdFromLocalStorage() {
    const selectedProjectId = JSON.parse(localStorage.getItem(localStorageIdKey));
    return selectedProjectId;
}

function saveIncrementId(id) {
	localStorage.setItem('incrementId', JSON.stringify(id));
}

function getIncrementId() {
	const id = JSON.parse(localStorage.getItem('incrementId'));
	return id || 0;
}




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   editProjectName: () => (/* binding */ editProjectName),
/* harmony export */   getProject: () => (/* binding */ getProject),
/* harmony export */   getProjectIndex: () => (/* binding */ getProjectIndex),
/* harmony export */   projectsData: () => (/* binding */ projectsData),
/* harmony export */   selectedProjectId: () => (/* binding */ selectedProjectId)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");


const projectsData = {
	projects: (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)() || [],
	setProjects: function (newProjects) {
		this.projects = newProjects;
	},
};
let selectedProjectId = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.getIdFromLocalStorage)();

let incrementId = (function () {
	let id = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.getIncrementId)();
	return function () {
		id++;
		(0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveIncrementId)(id);
		return id;
	};
})();


const Project = (name) => {

    let id = incrementId();
    let toDoItems = [];
    let completed = [];
    return {
        id,
        name,
        toDoItems,
        completed,
    };

};

const createProject = (name) => {
	// Check if a project with the same name already exists
	const existingProject = projectsData.projects.find((project) => project.name === name);

	if (existingProject) {
		// If a project with the same name exists, add a number to the end of the name
		let counter = 1;
		let newName = `${name} (${counter})`;

		while (projectsData.projects.find((project) => project.name === newName)) {
			counter++;
			newName = `${name} (${counter})`;
		}

		const project = Project(newName);
		projectsData.projects.push(project);
		selectedProjectId = project.id;
	} else {
		// If no project with the same name exists, create a new project with the given name
		const project = Project(name);
		projectsData.projects.push(project);
		selectedProjectId = project.id;
	}

	(0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projectsData.projects, selectedProjectId);
};

const editProjectName = (projectId, newName) => {
    const project = getProject(projectId);
    project.name = newName;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projectsData.projects, projectId);
};

const deleteProject = (projectId) => {
    const projectIndex = getProjectIndex(projectId);
	const updatedProjects = [...projectsData.projects];
	updatedProjects.splice(projectIndex, 1);
	projectsData.setProjects(updatedProjects);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projectsData.projects, projectId);
};

const getProject = (projectId) => projectsData.projects.find((project) => project.id === projectId);

const getProjectIndex = (projectId) => projectsData.projects.findIndex((project) => project.id === projectId);




/***/ }),

/***/ "./src/toDoItem.js":
/*!*************************!*\
  !*** ./src/toDoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createToDoItem: () => (/* binding */ createToDoItem),
/* harmony export */   deleteToDoItem: () => (/* binding */ deleteToDoItem),
/* harmony export */   editToDoItem: () => (/* binding */ editToDoItem),
/* harmony export */   getToDoItem: () => (/* binding */ getToDoItem),
/* harmony export */   getToDoItemIndex: () => (/* binding */ getToDoItemIndex),
/* harmony export */   markComplete: () => (/* binding */ markComplete)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");



let incrementId = (function () {
	let id = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getIncrementId)();
	return function () {
		id++;
		(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveIncrementId)(id);
		return id;
	};
})();

const ToDoItem = (projectId, name, description, date, priority) => {

	let id = incrementId();
    let complete = false;
    return {
        id,
        projectId,
        name,
        description,
        date,
        priority,
        complete,
    };
};

const createToDoItem = (projectId, name, description, date, priority) => {
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId);
	const toDoItem = ToDoItem(projectId, name, description, date, priority);
	const updatedProject = {
		...project,
		toDoItems: [...project.toDoItems, toDoItem],
	};
	const updatedProjects = _project__WEBPACK_IMPORTED_MODULE_0__.projectsData.projects.map((p) =>
		p.id === projectId ? updatedProject : p
	);
	_project__WEBPACK_IMPORTED_MODULE_0__.projectsData.setProjects(updatedProjects);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(_project__WEBPACK_IMPORTED_MODULE_0__.projectsData.projects, projectId);
};

const editToDoItem = (
    projectId,
    toDoItemId,
    newName,
    newDescription,
    newDate,
    newPriority
) => {
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId);
	const updatedToDoItems = project.toDoItems.map((toDoItem) =>
		toDoItem.id === toDoItemId
			? {
					...toDoItem,
					name: newName,
					description: newDescription,
					date: newDate,
					priority: newPriority,
			  }
			: toDoItem
	);
	const updatedProject = { ...project, toDoItems: updatedToDoItems };
	const updatedProjects = _project__WEBPACK_IMPORTED_MODULE_0__.projectsData.projects.map((p) =>
		p.id === projectId ? updatedProject : p
	);
	_project__WEBPACK_IMPORTED_MODULE_0__.projectsData.setProjects(updatedProjects);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(_project__WEBPACK_IMPORTED_MODULE_0__.projectsData.projects, projectId);
};

const deleteToDoItem = (projectId, toDoItemId) => {
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId);
	const updatedToDoItems = project.toDoItems.filter(
		(toDoItem) => toDoItem.id !== toDoItemId
	);
	const updatedProject = { ...project, toDoItems: updatedToDoItems };
	const updatedProjects = _project__WEBPACK_IMPORTED_MODULE_0__.projectsData.projects.map((p) =>
		p.id === projectId ? updatedProject : p
	);
	_project__WEBPACK_IMPORTED_MODULE_0__.projectsData.setProjects(updatedProjects);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(_project__WEBPACK_IMPORTED_MODULE_0__.projectsData.projects, projectId);
};

const markComplete = (projectId, toDoItemId) => {
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId);
	const toDoItem = getToDoItem(projectId, toDoItemId);
	const toDoItemIndex = getToDoItemIndex(projectId, toDoItemId);
	const updatedToDoItems = [...project.toDoItems];
	updatedToDoItems.splice(toDoItemIndex, 1);
	const updatedProject = {
		...project,
		toDoItems: updatedToDoItems,
		completed: [toDoItem, ...project.completed],
	};
	const updatedProjects = _project__WEBPACK_IMPORTED_MODULE_0__.projectsData.projects.map((p) =>
		p.id === projectId ? updatedProject : p
	);
	_project__WEBPACK_IMPORTED_MODULE_0__.projectsData.setProjects(updatedProjects);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(_project__WEBPACK_IMPORTED_MODULE_0__.projectsData.projects, projectId);
};

const getToDoItem = (projectId, toDoItemId) => {
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId);
	return project.toDoItems.find((toDoItem) => toDoItem.id === toDoItemId);
};

const getToDoItemIndex = (projectId, toDoItemId) => {
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId);
	return project.toDoItems.findIndex(
		(toDoItem) => toDoItem.id === toDoItemId
	);
};




/***/ }),

/***/ "./src/uIController.js":
/*!*****************************!*\
  !*** ./src/uIController.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoItem */ "./src/toDoItem.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");




const UIController = (() => {
	const sidePanel = document.querySelector('#side-panel');
	const mainPanel = document.querySelector('#main-panel');
	const mainPanelDesc = document.querySelector('#main-panel-desc');
	const addButton = document.querySelector('button');

	const renderProjects = () => {
		const projectList = document.createElement('ul');
		_project__WEBPACK_IMPORTED_MODULE_0__.projectsData.projects.forEach((project) => {
			const projectItem = document.createElement('li');
			projectItem.textContent = project.name;

			const projectControls = document.createElement('div');
			projectControls.classList.add('todo-controls');

			// Edit button
			const editBtn = document.createElement('button');
			editBtn.classList.add('edit-btn');
			editBtn.textContent = 'Edit';
			editBtn.addEventListener('click', () => {
				showEditProjectModal(project.id);
			});

			// Delete button
			const deleteBtn = document.createElement('button');
			deleteBtn.classList.add('delete-btn');
			deleteBtn.textContent = 'X';
			deleteBtn.addEventListener('click', () => {
				showDeleteProjectModal(project.id);
			});

			projectControls.appendChild(editBtn);
			projectControls.appendChild(deleteBtn);

			projectItem.addEventListener('click', () => {
				renderToDos(project.id);
			});
			projectItem.appendChild(projectControls);
			projectList.appendChild(projectItem);
		});
		sidePanel.appendChild(projectList);
	};

	const renderToDos = (projectId) => {
		const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId);
		// Clear the existing content inside the mainPanel, except for the h2 element
		const mainPanelChildren = Array.from(mainPanel.children);
		mainPanelChildren.forEach((child) => {
			if (child.tagName !== 'H2') {
				child.remove();
			}
		});

		if (project.toDoItems && project.toDoItems.length > 0) {
			const toDoList = document.createElement('ul');
			project.toDoItems.forEach((toDoItem) => {
				const toDoItemElement = document.createElement('li');
				const checkbox = document.createElement('input');
				checkbox.type = 'checkbox';
				checkbox.checked = toDoItem.complete;
				checkbox.addEventListener('change', () => {
					toDoItem.complete = checkbox.checked;
					(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(_project__WEBPACK_IMPORTED_MODULE_0__.projectsData.projects, projectId);
				});
				const todoDetails = document.createElement('div');
				todoDetails.classList.add('todo-details');

				const name = document.createElement('span');
				name.classList.add('todo-name');
				name.textContent = toDoItem.name;

				const description = document.createElement('span');
				description.classList.add('todo-description');
				description.textContent = toDoItem.description;

				const date = document.createElement('span');
				date.classList.add('todo-due-date');
				date.textContent = `Due: ${toDoItem.date}`;

				const priorityBlock = document.createElement('div');
				priorityBlock.classList.add('priority-block');
				priorityBlock.classList.add(
					`priority-${toDoItem.priority.toLowerCase()}`
				);

				const todoControls = document.createElement('div');
				todoControls.classList.add('todo-controls');

				const editBtn = document.createElement('button');
				editBtn.classList.add('edit-btn');
				editBtn.textContent = 'Edit';
				editBtn.addEventListener('click', () => {
					showEditModal(projectId, toDoItem.id);
				});

				const deleteBtn = document.createElement('button');
				deleteBtn.classList.add('delete-btn');
				deleteBtn.textContent = 'X';
				deleteBtn.addEventListener('click', () => {
					showDeleteModal(projectId, toDoItem.id);
				});

				todoControls.appendChild(editBtn);
				todoControls.appendChild(deleteBtn);

				todoDetails.appendChild(name);
				todoDetails.appendChild(description);
				todoDetails.appendChild(date);

				toDoItemElement.appendChild(checkbox);
				toDoItemElement.appendChild(todoDetails);
				toDoItemElement.appendChild(priorityBlock);
				toDoItemElement.appendChild(todoControls);

				toDoList.appendChild(toDoItemElement);
			});
			mainPanel.appendChild(toDoList);
		} else {
			const noToDoMessage = document.createElement('p');
			noToDoMessage.textContent = 'No to-do items for this project.';
			mainPanel.appendChild(noToDoMessage);
		}

		mainPanelDesc.style.display = 'none';
	};

	const showModal = () => {
		const modal = document.createElement('div');
		modal.classList.add('modal');
		const modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');

		const projectTab = document.createElement('div');
		projectTab.classList.add('tab');
		const projectInput = document.createElement('input');
		projectInput.type = 'text';
		projectInput.placeholder = 'Project Name';
		const projectSubmitButton = document.createElement('button');
		projectSubmitButton.textContent = 'Add Project';
		projectSubmitButton.addEventListener('click', () => {
			(0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectInput.value);
			renderProjects();
			modal.remove();
		});
		projectTab.appendChild(projectInput);
		projectTab.appendChild(projectSubmitButton);

		const toDoTab = document.createElement('div');
		toDoTab.classList.add('tab');
		const toDoNameInput = document.createElement('input');
		toDoNameInput.type = 'text';
		toDoNameInput.placeholder = 'ToDo Name';
		const toDoDescInput = document.createElement('input');
		toDoDescInput.type = 'text';
		toDoDescInput.placeholder = 'ToDo Description';
		const toDoDateInput = document.createElement('input');
		toDoDateInput.type = 'date';
		const toDoPriorityInput = document.createElement('select');
		const priorityOptions = ['Low', 'Medium', 'High'];
		priorityOptions.forEach((option) => {
			const priorityOption = document.createElement('option');
			priorityOption.value = option.toLowerCase();
			priorityOption.textContent = option;
			toDoPriorityInput.appendChild(priorityOption);
		});
		const projectSelect = document.createElement('select');
		_project__WEBPACK_IMPORTED_MODULE_0__.projectsData.projects.forEach((project) => {
			const projectOption = document.createElement('option');
			projectOption.value = project.id;
			projectOption.textContent = project.name;
			projectSelect.appendChild(projectOption);
		});
		const toDoSubmitButton = document.createElement('button');
		toDoSubmitButton.textContent = 'Add ToDo';
		toDoSubmitButton.addEventListener('click', () => {
			const selectedProjectId = (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.getIdFromLocalStorage)();
			(0,_toDoItem__WEBPACK_IMPORTED_MODULE_1__.createToDoItem)(
				selectedProjectId,
				toDoNameInput.value,
				toDoDescInput.value,
				toDoDateInput.value,
				toDoPriorityInput.value
			);
			const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(selectedProjectId);
			if (project.toDoItems.length > 0) {
				renderToDos(selectedProjectId);
			} else {
				mainPanel.innerHTML = '';
				const noToDoMessage = document.createElement('p');
				noToDoMessage.textContent = 'No to-do items for this project.';
				mainPanel.appendChild(noToDoMessage);
				mainPanelDesc.style.display = 'none';
			}
			modal.remove();
		});
		toDoTab.appendChild(toDoNameInput);
		toDoTab.appendChild(toDoDescInput);
		toDoTab.appendChild(toDoDateInput);
		toDoTab.appendChild(toDoPriorityInput);
		toDoTab.appendChild(projectSelect);
		toDoTab.appendChild(toDoSubmitButton);

		const tabButtons = document.createElement('div');
		tabButtons.classList.add('tab-buttons');
		const projectTabButton = document.createElement('button');
		projectTabButton.textContent = 'Project';
		projectTabButton.classList.add('active');
		projectTabButton.addEventListener('click', () => {
			projectTab.style.display = 'block';
			toDoTab.style.display = 'none';
			projectTabButton.classList.add('active');
			toDoTabButton.classList.remove('active');
		});
		const toDoTabButton = document.createElement('button');
		toDoTabButton.textContent = 'ToDo';
		toDoTabButton.addEventListener('click', () => {
			projectTab.style.display = 'none';
			toDoTab.style.display = 'block';
			toDoTabButton.classList.add('active');
			projectTabButton.classList.remove('active');
		});
		tabButtons.appendChild(projectTabButton);
		tabButtons.appendChild(toDoTabButton);

		modalContent.appendChild(tabButtons);
		modalContent.appendChild(projectTab);
		modalContent.appendChild(toDoTab);
		modal.appendChild(modalContent);
		document.body.appendChild(modal);
	};

	const showEditModal = (projectId, toDoItemId) => {
		const toDoItem = (0,_toDoItem__WEBPACK_IMPORTED_MODULE_1__.getToDoItem)(projectId, toDoItemId);

		const editModal = document.createElement('div');
		editModal.classList.add('modal');

		const modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');

		const nameInput = document.createElement('input');
		nameInput.type = 'text';
		nameInput.placeholder = 'Name';
		nameInput.value = toDoItem.name;

		const descriptionInput = document.createElement('input');
		descriptionInput.type = 'text';
		descriptionInput.placeholder = 'Description';
		descriptionInput.value = toDoItem.description;

		const dateInput = document.createElement('input');
		dateInput.type = 'date';
		dateInput.value = toDoItem.date;

		const priorityInput = document.createElement('select');
		const priorityOptions = ['Low', 'Medium', 'High'];
		priorityOptions.forEach((option) => {
			const priorityOption = document.createElement('option');
			priorityOption.value = option.toLowerCase();
			priorityOption.textContent = option;
			if (option.toLowerCase() === toDoItem.priority.toLowerCase()) {
				priorityOption.selected = true;
			}
			priorityInput.appendChild(priorityOption);
		});

		const saveButton = document.createElement('button');
		saveButton.textContent = 'Save Changes';
		saveButton.addEventListener('click', () => {
			(0,_toDoItem__WEBPACK_IMPORTED_MODULE_1__.editToDoItem)(
				projectId,
				toDoItemId,
				nameInput.value,
				descriptionInput.value,
				dateInput.value,
				priorityInput.value
			);
			editModal.remove();
			renderToDos(projectId);
		});

		const cancelButton = document.createElement('button');
		cancelButton.textContent = 'Cancel';
		cancelButton.addEventListener('click', () => {
			editModal.remove();
		});

		modalContent.appendChild(nameInput);
		modalContent.appendChild(descriptionInput);
		modalContent.appendChild(dateInput);
		modalContent.appendChild(priorityInput);
		modalContent.appendChild(saveButton);
		modalContent.appendChild(cancelButton);

		editModal.appendChild(modalContent);
		document.body.appendChild(editModal);
	};

	const showDeleteModal = (projectId, toDoItemId) => {
		const deleteModal = document.createElement('div');
		deleteModal.classList.add('modal');

		const modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');

		const message = document.createElement('p');
		message.textContent =
			'Are you sure you want to delete this to-do item?';

		const confirmButton = document.createElement('button');
		confirmButton.textContent = 'Confirm';
		confirmButton.addEventListener('click', () => {
			(0,_toDoItem__WEBPACK_IMPORTED_MODULE_1__.deleteToDoItem)(projectId, toDoItemId);
			renderToDos(projectId);
			deleteModal.remove();
		});

		const cancelButton = document.createElement('button');
		cancelButton.textContent = 'Cancel';
		cancelButton.addEventListener('click', () => {
			deleteModal.remove();
		});

		modalContent.appendChild(message);
		modalContent.appendChild(confirmButton);
		modalContent.appendChild(cancelButton);

		deleteModal.appendChild(modalContent);
		document.body.appendChild(deleteModal);
	};

	const showEditProjectModal = (projectId) => {
		const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId);

		const editModal = document.createElement('div');
		editModal.classList.add('modal');

		const modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');

		const nameInput = document.createElement('input');
		nameInput.type = 'text';
		nameInput.placeholder = 'Project Name';
		nameInput.value = project.name || '';

		const saveButton = document.createElement('button');
		saveButton.textContent = 'Save Changes';
		saveButton.addEventListener('click', () => {
			const newName = nameInput.value;
			(0,_project__WEBPACK_IMPORTED_MODULE_0__.editProjectName)(projectId, newName);
			// Clear the existing content inside the sidePanel, except for the h2 element
			const sidePanelChildren = Array.from(sidePanel.children);
			sidePanelChildren.forEach((child) => {
				if (child.tagName !== 'H2') {
					child.remove();
				}
			});
			renderProjects();
			editModal.remove();
		});

		const cancelButton = document.createElement('button');
		cancelButton.textContent = 'Cancel';
		cancelButton.addEventListener('click', () => {
			editModal.remove();
		});

		modalContent.appendChild(nameInput);
		modalContent.appendChild(saveButton);
		modalContent.appendChild(cancelButton);

		editModal.appendChild(modalContent);
		document.body.appendChild(editModal);
	};

	const showDeleteProjectModal = (projectId) => {
		const deleteModal = document.createElement('div');
		deleteModal.classList.add('modal');

		const modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');

		const message = document.createElement('p');
		message.textContent = 'Are you sure you want to delete this project?';

		const confirmButton = document.createElement('button');
		confirmButton.textContent = 'Confirm';
		confirmButton.addEventListener('click', () => {
			(0,_project__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(projectId);
			renderProjects();
			deleteModal.remove();
		});

		const cancelButton = document.createElement('button');
		cancelButton.textContent = 'Cancel';
		cancelButton.addEventListener('click', () => {
			deleteModal.remove();
		});

		modalContent.appendChild(message);
		modalContent.appendChild(confirmButton);
		modalContent.appendChild(cancelButton);

		deleteModal.appendChild(modalContent);
		document.body.appendChild(deleteModal);
	};

	// Render projects and to-do items on initial load
	const initialize = () => {
		renderProjects();
		if (_project__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId !== null) {
			renderToDos(_project__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId);
		}
	};

	initialize();

	addButton.addEventListener('click', showModal);

	return {
		renderProjects,
		renderToDos,
	};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIController);


/***/ }),

/***/ "./src/ArchitectsDaughter-Regular.woff":
/*!*********************************************!*\
  !*** ./src/ArchitectsDaughter-Regular.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0fa6ae03f075ccc095f6.woff";

/***/ }),

/***/ "./src/deskBackground.jpg":
/*!********************************!*\
  !*** ./src/deskBackground.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2f84d34e4ca20cb16aa.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtJQUFvRDtBQUNoRyw0Q0FBNEMscUhBQXVDO0FBQ25GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZ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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0RBQVc7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUcsdURBQVk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLHlEQUFjO0FBQ2pCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLG9EQUFVOztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLHlEQUFlO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsdURBQWE7QUFDaEI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBaUI7QUFDdkIsZUFBZSx1REFBaUI7QUFDaEM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9JdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91SUNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQXJjaGl0ZWN0c0RhdWdodGVyLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZGVza0JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0c0RhdWdodGVyJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkYWU0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHNEYXVnaHRlcic7XG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xuICAgIGhlaWdodDogNzVweDtcbn1cblxuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xufVxuXG5mb290ZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDV2aDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxudWwge1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XG59XG5cbiNzaWRlLXBhbmVsLCAjbWFpbi1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMCAwIDE1cHg7XG4gIGhlaWdodDogNjUlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNzaWRlLXBhbmVsIHtcbiAgd2lkdGg6IDI1dnc7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY5LCAxNjksIDE2OSwgMC41KTtcbn1cblxuI21haW4tcGFuZWwge1xuICB3aWR0aDogODV2dztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbiNtYWluLXBhbmVsLWRlc2Mge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDE1MHB4IGF1dG8gMCBhdXRvO1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0c0RhdWdodGVyJztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDEzNiwgMzEsIDEpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi8qIE1vZGFsIFN0eWxlcyAqL1xuLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA0MCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4vKiBUYWIgU3R5bGVzICovXG4udGFiLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRhYi1idXR0b25zIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRhYi1idXR0b25zIGJ1dHRvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50YWIge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG59XG5cbi50YWIuYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIElucHV0IFN0eWxlcyAqL1xuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogQnV0dG9uIFN0eWxlcyAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XG59XG5cbi8qIFRvRG8gSXRlbSBTdHlsZXMgKi9cbmxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5saSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmxpIC50b2RvLWRldGFpbHMge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmxpIC50b2RvLW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5saSAudG9kby1kZXNjcmlwdGlvbixcbmxpIC50b2RvLWR1ZS1kYXRlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG5saSAucHJpb3JpdHktYmxvY2sge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ucHJpb3JpdHktbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5wcmlvcml0eS1tZWRpdW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5wcmlvcml0eS1oaWdoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4vKiBFZGl0IGFuZCBEZWxldGUgQnV0dG9uIFN0eWxlcyAqL1xuLnRvZG8tY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9kby1jb250cm9scyBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4udG9kby1jb250cm9scyBidXR0b246aG92ZXIge1xuICBjb2xvcjogIzMzMztcbn1cblxuLnRvZG8tY29udHJvbHMgLmVkaXQtYnRuIHtcbiAgY29sb3I6ICM0Q0FGNTA7XG59XG5cbi50b2RvLWNvbnRyb2xzIC5kZWxldGUtYnRuIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLDJEQUE0RDtFQUM1RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtJQUNJLHlEQUE2QztJQUM3QyxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1Q0FBdUM7QUFDekM7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0c0RhdWdodGVyJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHNyYzogdXJsKCcuL0FyY2hpdGVjdHNEYXVnaHRlci1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9kZXNrQmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWRhZTQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0c0RhdWdodGVyJztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxudWwge1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xcbn1cXG5cXG4jc2lkZS1wYW5lbCwgI21haW4tcGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4IDAgMCAxNXB4O1xcbiAgaGVpZ2h0OiA2NSU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNzaWRlLXBhbmVsIHtcXG4gIHdpZHRoOiAyNXZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY5LCAxNjksIDE2OSwgMC41KTtcXG59XFxuXFxuI21haW4tcGFuZWwge1xcbiAgd2lkdGg6IDg1dnc7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuI21haW4tcGFuZWwtZGVzYyB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxNTBweCBhdXRvIDAgYXV0bztcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHNEYXVnaHRlcic7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDEzNiwgMzEsIDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLyogTW9kYWwgU3R5bGVzICovXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4vKiBUYWIgU3R5bGVzICovXFxuLnRhYi1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi50YWItYnV0dG9ucyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFiLWJ1dHRvbnMgYnV0dG9uLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFiIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nOiA2cHggMTJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxufVxcblxcbi50YWIuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbnB1dCBTdHlsZXMgKi9cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICBtYXJnaW46IDhweCAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEJ1dHRvbiBTdHlsZXMgKi9cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIG1hcmdpbjogOHB4IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xcbn1cXG5cXG4vKiBUb0RvIEl0ZW0gU3R5bGVzICovXFxubGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG5saSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxubGkgLnRvZG8tZGV0YWlscyB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubGkgLnRvZG8tbmFtZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxubGkgLnRvZG8tZGVzY3JpcHRpb24sXFxubGkgLnRvZG8tZHVlLWRhdGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG5cXG5saSAucHJpb3JpdHktYmxvY2sge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZGl1bSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogRWRpdCBhbmQgRGVsZXRlIEJ1dHRvbiBTdHlsZXMgKi9cXG4udG9kby1jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tY29udHJvbHMgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzY2NjtcXG59XFxuXFxuLnRvZG8tY29udHJvbHMgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4udG9kby1jb250cm9scyAuZWRpdC1idG4ge1xcbiAgY29sb3I6ICM0Q0FGNTA7XFxufVxcblxcbi50b2RvLWNvbnRyb2xzIC5kZWxldGUtYnRuIHtcXG4gIGNvbG9yOiAjZjQ0MzM2O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBVSUNvbnRyb2xsZXIgZnJvbSAnLi91SUNvbnRyb2xsZXInO1xuXG5pZiAobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuIiwiY29uc3QgbG9jYWxTdG9yYWdlS2V5ID0gXCJwcm9qZWN0c1wiO1xuY29uc3QgbG9jYWxTdG9yYWdlSWRLZXkgPSBcInByb2plY3RJZFwiO1xuXG5mdW5jdGlvbiBzYXZlVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUlkS2V5LCBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFByb2plY3RJZCkpO1xufVxuXG5mdW5jdGlvbiBnZXRGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUtleSkpO1xuICAgIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBnZXRJZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUlkS2V5KSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkUHJvamVjdElkO1xufVxuXG5mdW5jdGlvbiBzYXZlSW5jcmVtZW50SWQoaWQpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luY3JlbWVudElkJywgSlNPTi5zdHJpbmdpZnkoaWQpKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5jcmVtZW50SWQoKSB7XG5cdGNvbnN0IGlkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5jcmVtZW50SWQnKSk7XG5cdHJldHVybiBpZCB8fCAwO1xufVxuXG5leHBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UsIGdldEZyb21Mb2NhbFN0b3JhZ2UsIGdldElkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZUluY3JlbWVudElkLCBnZXRJbmNyZW1lbnRJZCB9O1xuIiwiaW1wb3J0IHsgZ2V0RnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVRvTG9jYWxTdG9yYWdlLCBnZXRJZEZyb21Mb2NhbFN0b3JhZ2UsIHNhdmVJbmNyZW1lbnRJZCwgZ2V0SW5jcmVtZW50SWQgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuY29uc3QgcHJvamVjdHNEYXRhID0ge1xuXHRwcm9qZWN0czogZ2V0RnJvbUxvY2FsU3RvcmFnZSgpIHx8IFtdLFxuXHRzZXRQcm9qZWN0czogZnVuY3Rpb24gKG5ld1Byb2plY3RzKSB7XG5cdFx0dGhpcy5wcm9qZWN0cyA9IG5ld1Byb2plY3RzO1xuXHR9LFxufTtcbmxldCBzZWxlY3RlZFByb2plY3RJZCA9IGdldElkRnJvbUxvY2FsU3RvcmFnZSgpO1xuXG5sZXQgaW5jcmVtZW50SWQgPSAoZnVuY3Rpb24gKCkge1xuXHRsZXQgaWQgPSBnZXRJbmNyZW1lbnRJZCgpO1xuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlkKys7XG5cdFx0c2F2ZUluY3JlbWVudElkKGlkKTtcblx0XHRyZXR1cm4gaWQ7XG5cdH07XG59KSgpO1xuXG5cbmNvbnN0IFByb2plY3QgPSAobmFtZSkgPT4ge1xuXG4gICAgbGV0IGlkID0gaW5jcmVtZW50SWQoKTtcbiAgICBsZXQgdG9Eb0l0ZW1zID0gW107XG4gICAgbGV0IGNvbXBsZXRlZCA9IFtdO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBuYW1lLFxuICAgICAgICB0b0RvSXRlbXMsXG4gICAgICAgIGNvbXBsZXRlZCxcbiAgICB9O1xuXG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcblx0Ly8gQ2hlY2sgaWYgYSBwcm9qZWN0IHdpdGggdGhlIHNhbWUgbmFtZSBhbHJlYWR5IGV4aXN0c1xuXHRjb25zdCBleGlzdGluZ1Byb2plY3QgPSBwcm9qZWN0c0RhdGEucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcblxuXHRpZiAoZXhpc3RpbmdQcm9qZWN0KSB7XG5cdFx0Ly8gSWYgYSBwcm9qZWN0IHdpdGggdGhlIHNhbWUgbmFtZSBleGlzdHMsIGFkZCBhIG51bWJlciB0byB0aGUgZW5kIG9mIHRoZSBuYW1lXG5cdFx0bGV0IGNvdW50ZXIgPSAxO1xuXHRcdGxldCBuZXdOYW1lID0gYCR7bmFtZX0gKCR7Y291bnRlcn0pYDtcblxuXHRcdHdoaWxlIChwcm9qZWN0c0RhdGEucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuZXdOYW1lKSkge1xuXHRcdFx0Y291bnRlcisrO1xuXHRcdFx0bmV3TmFtZSA9IGAke25hbWV9ICgke2NvdW50ZXJ9KWA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcHJvamVjdCA9IFByb2plY3QobmV3TmFtZSk7XG5cdFx0cHJvamVjdHNEYXRhLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cdFx0c2VsZWN0ZWRQcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuXHR9IGVsc2Uge1xuXHRcdC8vIElmIG5vIHByb2plY3Qgd2l0aCB0aGUgc2FtZSBuYW1lIGV4aXN0cywgY3JlYXRlIGEgbmV3IHByb2plY3Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuXHRcdGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KG5hbWUpO1xuXHRcdHByb2plY3RzRGF0YS5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXHRcdHNlbGVjdGVkUHJvamVjdElkID0gcHJvamVjdC5pZDtcblx0fVxuXG5cdHNhdmVUb0xvY2FsU3RvcmFnZShwcm9qZWN0c0RhdGEucHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKTtcbn07XG5cbmNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IChwcm9qZWN0SWQsIG5ld05hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICAgIHByb2plY3QubmFtZSA9IG5ld05hbWU7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3RzRGF0YS5wcm9qZWN0cywgcHJvamVjdElkKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gZ2V0UHJvamVjdEluZGV4KHByb2plY3RJZCk7XG5cdGNvbnN0IHVwZGF0ZWRQcm9qZWN0cyA9IFsuLi5wcm9qZWN0c0RhdGEucHJvamVjdHNdO1xuXHR1cGRhdGVkUHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG5cdHByb2plY3RzRGF0YS5zZXRQcm9qZWN0cyh1cGRhdGVkUHJvamVjdHMpO1xuXHRzYXZlVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHNEYXRhLnByb2plY3RzLCBwcm9qZWN0SWQpO1xufTtcblxuY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHByb2plY3RzRGF0YS5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuXG5jb25zdCBnZXRQcm9qZWN0SW5kZXggPSAocHJvamVjdElkKSA9PiBwcm9qZWN0c0RhdGEucHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuXG5leHBvcnQgeyBwcm9qZWN0c0RhdGEsIGNyZWF0ZVByb2plY3QsIGVkaXRQcm9qZWN0TmFtZSwgZGVsZXRlUHJvamVjdCwgZ2V0UHJvamVjdCwgZ2V0UHJvamVjdEluZGV4LCBzZWxlY3RlZFByb2plY3RJZCB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdHNEYXRhLCBnZXRQcm9qZWN0LCBnZXRQcm9qZWN0SW5kZXggfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UsIHNhdmVJbmNyZW1lbnRJZCwgZ2V0SW5jcmVtZW50SWQgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxubGV0IGluY3JlbWVudElkID0gKGZ1bmN0aW9uICgpIHtcblx0bGV0IGlkID0gZ2V0SW5jcmVtZW50SWQoKTtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZCsrO1xuXHRcdHNhdmVJbmNyZW1lbnRJZChpZCk7XG5cdFx0cmV0dXJuIGlkO1xuXHR9O1xufSkoKTtcblxuY29uc3QgVG9Eb0l0ZW0gPSAocHJvamVjdElkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpID0+IHtcblxuXHRsZXQgaWQgPSBpbmNyZW1lbnRJZCgpO1xuICAgIGxldCBjb21wbGV0ZSA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBwcm9qZWN0SWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgY29tcGxldGUsXG4gICAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvRG9JdGVtID0gKHByb2plY3RJZCwgbmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdElkKTtcblx0Y29uc3QgdG9Eb0l0ZW0gPSBUb0RvSXRlbShwcm9qZWN0SWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XG5cdGNvbnN0IHVwZGF0ZWRQcm9qZWN0ID0ge1xuXHRcdC4uLnByb2plY3QsXG5cdFx0dG9Eb0l0ZW1zOiBbLi4ucHJvamVjdC50b0RvSXRlbXMsIHRvRG9JdGVtXSxcblx0fTtcblx0Y29uc3QgdXBkYXRlZFByb2plY3RzID0gcHJvamVjdHNEYXRhLnByb2plY3RzLm1hcCgocCkgPT5cblx0XHRwLmlkID09PSBwcm9qZWN0SWQgPyB1cGRhdGVkUHJvamVjdCA6IHBcblx0KTtcblx0cHJvamVjdHNEYXRhLnNldFByb2plY3RzKHVwZGF0ZWRQcm9qZWN0cyk7XG5cdHNhdmVUb0xvY2FsU3RvcmFnZShwcm9qZWN0c0RhdGEucHJvamVjdHMsIHByb2plY3RJZCk7XG59O1xuXG5jb25zdCBlZGl0VG9Eb0l0ZW0gPSAoXG4gICAgcHJvamVjdElkLFxuICAgIHRvRG9JdGVtSWQsXG4gICAgbmV3TmFtZSxcbiAgICBuZXdEZXNjcmlwdGlvbixcbiAgICBuZXdEYXRlLFxuICAgIG5ld1ByaW9yaXR5XG4pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuXHRjb25zdCB1cGRhdGVkVG9Eb0l0ZW1zID0gcHJvamVjdC50b0RvSXRlbXMubWFwKCh0b0RvSXRlbSkgPT5cblx0XHR0b0RvSXRlbS5pZCA9PT0gdG9Eb0l0ZW1JZFxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0Li4udG9Eb0l0ZW0sXG5cdFx0XHRcdFx0bmFtZTogbmV3TmFtZSxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb24sXG5cdFx0XHRcdFx0ZGF0ZTogbmV3RGF0ZSxcblx0XHRcdFx0XHRwcmlvcml0eTogbmV3UHJpb3JpdHksXG5cdFx0XHQgIH1cblx0XHRcdDogdG9Eb0l0ZW1cblx0KTtcblx0Y29uc3QgdXBkYXRlZFByb2plY3QgPSB7IC4uLnByb2plY3QsIHRvRG9JdGVtczogdXBkYXRlZFRvRG9JdGVtcyB9O1xuXHRjb25zdCB1cGRhdGVkUHJvamVjdHMgPSBwcm9qZWN0c0RhdGEucHJvamVjdHMubWFwKChwKSA9PlxuXHRcdHAuaWQgPT09IHByb2plY3RJZCA/IHVwZGF0ZWRQcm9qZWN0IDogcFxuXHQpO1xuXHRwcm9qZWN0c0RhdGEuc2V0UHJvamVjdHModXBkYXRlZFByb2plY3RzKTtcblx0c2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3RzRGF0YS5wcm9qZWN0cywgcHJvamVjdElkKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRvRG9JdGVtID0gKHByb2plY3RJZCwgdG9Eb0l0ZW1JZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3RJZCk7XG5cdGNvbnN0IHVwZGF0ZWRUb0RvSXRlbXMgPSBwcm9qZWN0LnRvRG9JdGVtcy5maWx0ZXIoXG5cdFx0KHRvRG9JdGVtKSA9PiB0b0RvSXRlbS5pZCAhPT0gdG9Eb0l0ZW1JZFxuXHQpO1xuXHRjb25zdCB1cGRhdGVkUHJvamVjdCA9IHsgLi4ucHJvamVjdCwgdG9Eb0l0ZW1zOiB1cGRhdGVkVG9Eb0l0ZW1zIH07XG5cdGNvbnN0IHVwZGF0ZWRQcm9qZWN0cyA9IHByb2plY3RzRGF0YS5wcm9qZWN0cy5tYXAoKHApID0+XG5cdFx0cC5pZCA9PT0gcHJvamVjdElkID8gdXBkYXRlZFByb2plY3QgOiBwXG5cdCk7XG5cdHByb2plY3RzRGF0YS5zZXRQcm9qZWN0cyh1cGRhdGVkUHJvamVjdHMpO1xuXHRzYXZlVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHNEYXRhLnByb2plY3RzLCBwcm9qZWN0SWQpO1xufTtcblxuY29uc3QgbWFya0NvbXBsZXRlID0gKHByb2plY3RJZCwgdG9Eb0l0ZW1JZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3RJZCk7XG5cdGNvbnN0IHRvRG9JdGVtID0gZ2V0VG9Eb0l0ZW0ocHJvamVjdElkLCB0b0RvSXRlbUlkKTtcblx0Y29uc3QgdG9Eb0l0ZW1JbmRleCA9IGdldFRvRG9JdGVtSW5kZXgocHJvamVjdElkLCB0b0RvSXRlbUlkKTtcblx0Y29uc3QgdXBkYXRlZFRvRG9JdGVtcyA9IFsuLi5wcm9qZWN0LnRvRG9JdGVtc107XG5cdHVwZGF0ZWRUb0RvSXRlbXMuc3BsaWNlKHRvRG9JdGVtSW5kZXgsIDEpO1xuXHRjb25zdCB1cGRhdGVkUHJvamVjdCA9IHtcblx0XHQuLi5wcm9qZWN0LFxuXHRcdHRvRG9JdGVtczogdXBkYXRlZFRvRG9JdGVtcyxcblx0XHRjb21wbGV0ZWQ6IFt0b0RvSXRlbSwgLi4ucHJvamVjdC5jb21wbGV0ZWRdLFxuXHR9O1xuXHRjb25zdCB1cGRhdGVkUHJvamVjdHMgPSBwcm9qZWN0c0RhdGEucHJvamVjdHMubWFwKChwKSA9PlxuXHRcdHAuaWQgPT09IHByb2plY3RJZCA/IHVwZGF0ZWRQcm9qZWN0IDogcFxuXHQpO1xuXHRwcm9qZWN0c0RhdGEuc2V0UHJvamVjdHModXBkYXRlZFByb2plY3RzKTtcblx0c2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3RzRGF0YS5wcm9qZWN0cywgcHJvamVjdElkKTtcbn07XG5cbmNvbnN0IGdldFRvRG9JdGVtID0gKHByb2plY3RJZCwgdG9Eb0l0ZW1JZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3RJZCk7XG5cdHJldHVybiBwcm9qZWN0LnRvRG9JdGVtcy5maW5kKCh0b0RvSXRlbSkgPT4gdG9Eb0l0ZW0uaWQgPT09IHRvRG9JdGVtSWQpO1xufTtcblxuY29uc3QgZ2V0VG9Eb0l0ZW1JbmRleCA9IChwcm9qZWN0SWQsIHRvRG9JdGVtSWQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuXHRyZXR1cm4gcHJvamVjdC50b0RvSXRlbXMuZmluZEluZGV4KFxuXHRcdCh0b0RvSXRlbSkgPT4gdG9Eb0l0ZW0uaWQgPT09IHRvRG9JdGVtSWRcblx0KTtcbn07XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlVG9Eb0l0ZW0sXG4gICAgZWRpdFRvRG9JdGVtLFxuICAgIGRlbGV0ZVRvRG9JdGVtLFxuICAgIG1hcmtDb21wbGV0ZSxcbiAgICBnZXRUb0RvSXRlbSxcbiAgICBnZXRUb0RvSXRlbUluZGV4LFxufTtcbiIsImltcG9ydCB7XG5cdGNyZWF0ZVByb2plY3QsXG5cdHByb2plY3RzRGF0YSxcblx0ZWRpdFByb2plY3ROYW1lLFxuXHRkZWxldGVQcm9qZWN0LFxuXHRnZXRQcm9qZWN0LFxuICAgIHNlbGVjdGVkUHJvamVjdElkXG59IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQge1xuXHRjcmVhdGVUb0RvSXRlbSxcblx0ZWRpdFRvRG9JdGVtLFxuXHRkZWxldGVUb0RvSXRlbSxcblx0bWFya0NvbXBsZXRlLFxuXHRnZXRUb0RvSXRlbSxcbn0gZnJvbSAnLi90b0RvSXRlbSc7XG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UsIGdldEZyb21Mb2NhbFN0b3JhZ2UsIGdldElkRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuY29uc3QgVUlDb250cm9sbGVyID0gKCgpID0+IHtcblx0Y29uc3Qgc2lkZVBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtcGFuZWwnKTtcblx0Y29uc3QgbWFpblBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tcGFuZWwnKTtcblx0Y29uc3QgbWFpblBhbmVsRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLXBhbmVsLWRlc2MnKTtcblx0Y29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5cblx0Y29uc3QgcmVuZGVyUHJvamVjdHMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXHRcdHByb2plY3RzRGF0YS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0XHRjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0XHRwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuXHRcdFx0Y29uc3QgcHJvamVjdENvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRwcm9qZWN0Q29udHJvbHMuY2xhc3NMaXN0LmFkZCgndG9kby1jb250cm9scycpO1xuXG5cdFx0XHQvLyBFZGl0IGJ1dHRvblxuXHRcdFx0Y29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0ZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bicpO1xuXHRcdFx0ZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0Jztcblx0XHRcdGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHNob3dFZGl0UHJvamVjdE1vZGFsKHByb2plY3QuaWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIERlbGV0ZSBidXR0b25cblx0XHRcdGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0ZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcblx0XHRcdGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcblx0XHRcdGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0c2hvd0RlbGV0ZVByb2plY3RNb2RhbChwcm9qZWN0LmlkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRwcm9qZWN0Q29udHJvbHMuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cdFx0XHRwcm9qZWN0Q29udHJvbHMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuXHRcdFx0cHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHJlbmRlclRvRG9zKHByb2plY3QuaWQpO1xuXHRcdFx0fSk7XG5cdFx0XHRwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udHJvbHMpO1xuXHRcdFx0cHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuXHRcdH0pO1xuXHRcdHNpZGVQYW5lbC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyVG9Eb3MgPSAocHJvamVjdElkKSA9PiB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdElkKTtcblx0XHQvLyBDbGVhciB0aGUgZXhpc3RpbmcgY29udGVudCBpbnNpZGUgdGhlIG1haW5QYW5lbCwgZXhjZXB0IGZvciB0aGUgaDIgZWxlbWVudFxuXHRcdGNvbnN0IG1haW5QYW5lbENoaWxkcmVuID0gQXJyYXkuZnJvbShtYWluUGFuZWwuY2hpbGRyZW4pO1xuXHRcdG1haW5QYW5lbENoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG5cdFx0XHRpZiAoY2hpbGQudGFnTmFtZSAhPT0gJ0gyJykge1xuXHRcdFx0XHRjaGlsZC5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmIChwcm9qZWN0LnRvRG9JdGVtcyAmJiBwcm9qZWN0LnRvRG9JdGVtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCB0b0RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdFx0XHRwcm9qZWN0LnRvRG9JdGVtcy5mb3JFYWNoKCh0b0RvSXRlbSkgPT4ge1xuXHRcdFx0XHRjb25zdCB0b0RvSXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdFx0XHRjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0XHRcdGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuXHRcdFx0XHRjaGVja2JveC5jaGVja2VkID0gdG9Eb0l0ZW0uY29tcGxldGU7XG5cdFx0XHRcdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0XHR0b0RvSXRlbS5jb21wbGV0ZSA9IGNoZWNrYm94LmNoZWNrZWQ7XG5cdFx0XHRcdFx0c2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3RzRGF0YS5wcm9qZWN0cywgcHJvamVjdElkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnN0IHRvZG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdHRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGV0YWlscycpO1xuXG5cdFx0XHRcdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdG5hbWUuY2xhc3NMaXN0LmFkZCgndG9kby1uYW1lJyk7XG5cdFx0XHRcdG5hbWUudGV4dENvbnRlbnQgPSB0b0RvSXRlbS5uYW1lO1xuXG5cdFx0XHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG5cdFx0XHRcdGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9Eb0l0ZW0uZGVzY3JpcHRpb247XG5cblx0XHRcdFx0Y29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0ZGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZS1kYXRlJyk7XG5cdFx0XHRcdGRhdGUudGV4dENvbnRlbnQgPSBgRHVlOiAke3RvRG9JdGVtLmRhdGV9YDtcblxuXHRcdFx0XHRjb25zdCBwcmlvcml0eUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdHByaW9yaXR5QmxvY2suY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYmxvY2snKTtcblx0XHRcdFx0cHJpb3JpdHlCbG9jay5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcdGBwcmlvcml0eS0ke3RvRG9JdGVtLnByaW9yaXR5LnRvTG93ZXJDYXNlKCl9YFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGNvbnN0IHRvZG9Db250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHR0b2RvQ29udHJvbHMuY2xhc3NMaXN0LmFkZCgndG9kby1jb250cm9scycpO1xuXG5cdFx0XHRcdGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRcdFx0ZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bicpO1xuXHRcdFx0XHRlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuXHRcdFx0XHRlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNob3dFZGl0TW9kYWwocHJvamVjdElkLCB0b0RvSXRlbS5pZCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0XHRkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuXHRcdFx0XHRkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnWCc7XG5cdFx0XHRcdGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRzaG93RGVsZXRlTW9kYWwocHJvamVjdElkLCB0b0RvSXRlbS5pZCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRvZG9Db250cm9scy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblx0XHRcdFx0dG9kb0NvbnRyb2xzLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cblx0XHRcdFx0dG9kb0RldGFpbHMuYXBwZW5kQ2hpbGQobmFtZSk7XG5cdFx0XHRcdHRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblx0XHRcdFx0dG9kb0RldGFpbHMuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cblx0XHRcdFx0dG9Eb0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblx0XHRcdFx0dG9Eb0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKHRvZG9EZXRhaWxzKTtcblx0XHRcdFx0dG9Eb0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5QmxvY2spO1xuXHRcdFx0XHR0b0RvSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb0NvbnRyb2xzKTtcblxuXHRcdFx0XHR0b0RvTGlzdC5hcHBlbmRDaGlsZCh0b0RvSXRlbUVsZW1lbnQpO1xuXHRcdFx0fSk7XG5cdFx0XHRtYWluUGFuZWwuYXBwZW5kQ2hpbGQodG9Eb0xpc3QpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBub1RvRG9NZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdFx0bm9Ub0RvTWVzc2FnZS50ZXh0Q29udGVudCA9ICdObyB0by1kbyBpdGVtcyBmb3IgdGhpcyBwcm9qZWN0Lic7XG5cdFx0XHRtYWluUGFuZWwuYXBwZW5kQ2hpbGQobm9Ub0RvTWVzc2FnZSk7XG5cdFx0fVxuXG5cdFx0bWFpblBhbmVsRGVzYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9O1xuXG5cdGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcblx0XHRjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cdFx0Y29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0bW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcblxuXHRcdGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRwcm9qZWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXHRcdGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0cHJvamVjdElucHV0LnR5cGUgPSAndGV4dCc7XG5cdFx0cHJvamVjdElucHV0LnBsYWNlaG9sZGVyID0gJ1Byb2plY3QgTmFtZSc7XG5cdFx0Y29uc3QgcHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHByb2plY3RTdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuXHRcdHByb2plY3RTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjcmVhdGVQcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSk7XG5cdFx0XHRyZW5kZXJQcm9qZWN0cygpO1xuXHRcdFx0bW9kYWwucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdFx0cHJvamVjdFRhYi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXHRcdHByb2plY3RUYWIuYXBwZW5kQ2hpbGQocHJvamVjdFN1Ym1pdEJ1dHRvbik7XG5cblx0XHRjb25zdCB0b0RvVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dG9Eb1RhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblx0XHRjb25zdCB0b0RvTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHR0b0RvTmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG5cdFx0dG9Eb05hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdUb0RvIE5hbWUnO1xuXHRcdGNvbnN0IHRvRG9EZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdHRvRG9EZXNjSW5wdXQudHlwZSA9ICd0ZXh0Jztcblx0XHR0b0RvRGVzY0lucHV0LnBsYWNlaG9sZGVyID0gJ1RvRG8gRGVzY3JpcHRpb24nO1xuXHRcdGNvbnN0IHRvRG9EYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdHRvRG9EYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcblx0XHRjb25zdCB0b0RvUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXHRcdGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XG5cdFx0cHJpb3JpdHlPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuXHRcdFx0Y29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdHByaW9yaXR5T3B0aW9uLnZhbHVlID0gb3B0aW9uLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRwcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbjtcblx0XHRcdHRvRG9Qcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uKTtcblx0XHR9KTtcblx0XHRjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cdFx0cHJvamVjdHNEYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRcdGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdHByb2plY3RPcHRpb24udmFsdWUgPSBwcm9qZWN0LmlkO1xuXHRcdFx0cHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblx0XHRcdHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG5cdFx0fSk7XG5cdFx0Y29uc3QgdG9Eb1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHRvRG9TdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRvRG8nO1xuXHRcdHRvRG9TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZFByb2plY3RJZCA9IGdldElkRnJvbUxvY2FsU3RvcmFnZSgpO1xuXHRcdFx0Y3JlYXRlVG9Eb0l0ZW0oXG5cdFx0XHRcdHNlbGVjdGVkUHJvamVjdElkLFxuXHRcdFx0XHR0b0RvTmFtZUlucHV0LnZhbHVlLFxuXHRcdFx0XHR0b0RvRGVzY0lucHV0LnZhbHVlLFxuXHRcdFx0XHR0b0RvRGF0ZUlucHV0LnZhbHVlLFxuXHRcdFx0XHR0b0RvUHJpb3JpdHlJbnB1dC52YWx1ZVxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdElkKTtcblx0XHRcdGlmIChwcm9qZWN0LnRvRG9JdGVtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJlbmRlclRvRG9zKHNlbGVjdGVkUHJvamVjdElkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1haW5QYW5lbC5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0Y29uc3Qgbm9Ub0RvTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRcdFx0bm9Ub0RvTWVzc2FnZS50ZXh0Q29udGVudCA9ICdObyB0by1kbyBpdGVtcyBmb3IgdGhpcyBwcm9qZWN0Lic7XG5cdFx0XHRcdG1haW5QYW5lbC5hcHBlbmRDaGlsZChub1RvRG9NZXNzYWdlKTtcblx0XHRcdFx0bWFpblBhbmVsRGVzYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0bW9kYWwucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdFx0dG9Eb1RhYi5hcHBlbmRDaGlsZCh0b0RvTmFtZUlucHV0KTtcblx0XHR0b0RvVGFiLmFwcGVuZENoaWxkKHRvRG9EZXNjSW5wdXQpO1xuXHRcdHRvRG9UYWIuYXBwZW5kQ2hpbGQodG9Eb0RhdGVJbnB1dCk7XG5cdFx0dG9Eb1RhYi5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHlJbnB1dCk7XG5cdFx0dG9Eb1RhYi5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcblx0XHR0b0RvVGFiLmFwcGVuZENoaWxkKHRvRG9TdWJtaXRCdXR0b24pO1xuXG5cdFx0Y29uc3QgdGFiQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRhYkJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgndGFiLWJ1dHRvbnMnKTtcblx0XHRjb25zdCBwcm9qZWN0VGFiQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0cHJvamVjdFRhYkJ1dHRvbi50ZXh0Q29udGVudCA9ICdQcm9qZWN0Jztcblx0XHRwcm9qZWN0VGFiQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdHByb2plY3RUYWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRwcm9qZWN0VGFiLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0dG9Eb1RhYi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0cHJvamVjdFRhYkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdHRvRG9UYWJCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0fSk7XG5cdFx0Y29uc3QgdG9Eb1RhYkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHRvRG9UYWJCdXR0b24udGV4dENvbnRlbnQgPSAnVG9Ebyc7XG5cdFx0dG9Eb1RhYkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdHByb2plY3RUYWIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRvRG9UYWIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHR0b0RvVGFiQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0cHJvamVjdFRhYkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHR9KTtcblx0XHR0YWJCdXR0b25zLmFwcGVuZENoaWxkKHByb2plY3RUYWJCdXR0b24pO1xuXHRcdHRhYkJ1dHRvbnMuYXBwZW5kQ2hpbGQodG9Eb1RhYkJ1dHRvbik7XG5cblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodGFiQnV0dG9ucyk7XG5cdFx0bW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RUYWIpO1xuXHRcdG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0b0RvVGFiKTtcblx0XHRtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXHR9O1xuXG5cdGNvbnN0IHNob3dFZGl0TW9kYWwgPSAocHJvamVjdElkLCB0b0RvSXRlbUlkKSA9PiB7XG5cdFx0Y29uc3QgdG9Eb0l0ZW0gPSBnZXRUb0RvSXRlbShwcm9qZWN0SWQsIHRvRG9JdGVtSWQpO1xuXG5cdFx0Y29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZWRpdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cblx0XHRjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuXG5cdFx0Y29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRuYW1lSW5wdXQudHlwZSA9ICd0ZXh0Jztcblx0XHRuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnTmFtZSc7XG5cdFx0bmFtZUlucHV0LnZhbHVlID0gdG9Eb0l0ZW0ubmFtZTtcblxuXHRcdGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0Jztcblx0XHRkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0Rlc2NyaXB0aW9uJztcblx0XHRkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdG9Eb0l0ZW0uZGVzY3JpcHRpb247XG5cblx0XHRjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuXHRcdGRhdGVJbnB1dC52YWx1ZSA9IHRvRG9JdGVtLmRhdGU7XG5cblx0XHRjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cdFx0Y29uc3QgcHJpb3JpdHlPcHRpb25zID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcblx0XHRwcmlvcml0eU9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG5cdFx0XHRjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0cHJpb3JpdHlPcHRpb24udmFsdWUgPSBvcHRpb24udG9Mb3dlckNhc2UoKTtcblx0XHRcdHByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uO1xuXHRcdFx0aWYgKG9wdGlvbi50b0xvd2VyQ2FzZSgpID09PSB0b0RvSXRlbS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRcdHByaW9yaXR5T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHNhdmVCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSBDaGFuZ2VzJztcblx0XHRzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0ZWRpdFRvRG9JdGVtKFxuXHRcdFx0XHRwcm9qZWN0SWQsXG5cdFx0XHRcdHRvRG9JdGVtSWQsXG5cdFx0XHRcdG5hbWVJbnB1dC52YWx1ZSxcblx0XHRcdFx0ZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcblx0XHRcdFx0ZGF0ZUlucHV0LnZhbHVlLFxuXHRcdFx0XHRwcmlvcml0eUlucHV0LnZhbHVlXG5cdFx0XHQpO1xuXHRcdFx0ZWRpdE1vZGFsLnJlbW92ZSgpO1xuXHRcdFx0cmVuZGVyVG9Eb3MocHJvamVjdElkKTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXHRcdGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGVkaXRNb2RhbC5yZW1vdmUoKTtcblx0XHR9KTtcblxuXHRcdG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXHRcdG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cdFx0bW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuXHRcdG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG5cdFx0ZWRpdE1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlZGl0TW9kYWwpO1xuXHR9O1xuXG5cdGNvbnN0IHNob3dEZWxldGVNb2RhbCA9IChwcm9qZWN0SWQsIHRvRG9JdGVtSWQpID0+IHtcblx0XHRjb25zdCBkZWxldGVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGRlbGV0ZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cblx0XHRjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuXG5cdFx0Y29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRtZXNzYWdlLnRleHRDb250ZW50ID1cblx0XHRcdCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdG8tZG8gaXRlbT8nO1xuXG5cdFx0Y29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG5cdFx0Y29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGRlbGV0ZVRvRG9JdGVtKHByb2plY3RJZCwgdG9Eb0l0ZW1JZCk7XG5cdFx0XHRyZW5kZXJUb0Rvcyhwcm9qZWN0SWQpO1xuXHRcdFx0ZGVsZXRlTW9kYWwucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblx0XHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRkZWxldGVNb2RhbC5yZW1vdmUoKTtcblx0XHR9KTtcblxuXHRcdG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG5cdFx0bW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cblx0XHRkZWxldGVNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVsZXRlTW9kYWwpO1xuXHR9O1xuXG5cdGNvbnN0IHNob3dFZGl0UHJvamVjdE1vZGFsID0gKHByb2plY3RJZCkgPT4ge1xuXHRcdGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3RJZCk7XG5cblx0XHRjb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRlZGl0TW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuXHRcdGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cblx0XHRjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuXHRcdG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IE5hbWUnO1xuXHRcdG5hbWVJbnB1dC52YWx1ZSA9IHByb2plY3QubmFtZSB8fCAnJztcblxuXHRcdGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUgQ2hhbmdlcyc7XG5cdFx0c2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGNvbnN0IG5ld05hbWUgPSBuYW1lSW5wdXQudmFsdWU7XG5cdFx0XHRlZGl0UHJvamVjdE5hbWUocHJvamVjdElkLCBuZXdOYW1lKTtcblx0XHRcdC8vIENsZWFyIHRoZSBleGlzdGluZyBjb250ZW50IGluc2lkZSB0aGUgc2lkZVBhbmVsLCBleGNlcHQgZm9yIHRoZSBoMiBlbGVtZW50XG5cdFx0XHRjb25zdCBzaWRlUGFuZWxDaGlsZHJlbiA9IEFycmF5LmZyb20oc2lkZVBhbmVsLmNoaWxkcmVuKTtcblx0XHRcdHNpZGVQYW5lbENoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG5cdFx0XHRcdGlmIChjaGlsZC50YWdOYW1lICE9PSAnSDInKSB7XG5cdFx0XHRcdFx0Y2hpbGQucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0cmVuZGVyUHJvamVjdHMoKTtcblx0XHRcdGVkaXRNb2RhbC5yZW1vdmUoKTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXHRcdGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGVkaXRNb2RhbC5yZW1vdmUoKTtcblx0XHR9KTtcblxuXHRcdG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXHRcdG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuXHRcdGVkaXRNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWRpdE1vZGFsKTtcblx0fTtcblxuXHRjb25zdCBzaG93RGVsZXRlUHJvamVjdE1vZGFsID0gKHByb2plY3RJZCkgPT4ge1xuXHRcdGNvbnN0IGRlbGV0ZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZGVsZXRlTW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuXHRcdGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cblx0XHRjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHByb2plY3Q/JztcblxuXHRcdGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuXHRcdGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRkZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG5cdFx0XHRyZW5kZXJQcm9qZWN0cygpO1xuXHRcdFx0ZGVsZXRlTW9kYWwucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblx0XHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRkZWxldGVNb2RhbC5yZW1vdmUoKTtcblx0XHR9KTtcblxuXHRcdG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG5cdFx0bW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cblx0XHRkZWxldGVNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVsZXRlTW9kYWwpO1xuXHR9O1xuXG5cdC8vIFJlbmRlciBwcm9qZWN0cyBhbmQgdG8tZG8gaXRlbXMgb24gaW5pdGlhbCBsb2FkXG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG5cdFx0cmVuZGVyUHJvamVjdHMoKTtcblx0XHRpZiAoc2VsZWN0ZWRQcm9qZWN0SWQgIT09IG51bGwpIHtcblx0XHRcdHJlbmRlclRvRG9zKHNlbGVjdGVkUHJvamVjdElkKTtcblx0XHR9XG5cdH07XG5cblx0aW5pdGlhbGl6ZSgpO1xuXG5cdGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNb2RhbCk7XG5cblx0cmV0dXJuIHtcblx0XHRyZW5kZXJQcm9qZWN0cyxcblx0XHRyZW5kZXJUb0Rvcyxcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJQ29udHJvbGxlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
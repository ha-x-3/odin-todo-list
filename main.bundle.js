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

.selected-project {
    background-color: #ebf900;
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

.add-button {
    height: 50px;
    width: 50px;
    font-family: 'ArchitectsDaughter';
    font-size: 18px;
    background-color: rgba(101, 136, 31, 1);
    color: white;
    border-radius: 6px;
}

/* Project and ToDo Item Styles */
li {
  display: flex;
  align-items: center;
  justify-content: flex-end;
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

li .project-details {
    flex-grow: 1;
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
.project-controls, .todo-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.project-controls button, .todo-controls button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  font-size: 14px;
  color: #666;
}

.project-controls button:hover, .todo-controls button:hover {
  color: #333;
}

.project-controls .edit-btn, .todo-controls .edit-btn {
  color: #4CAF50;
}

.project-controls .delete-btn, .todo-controls .delete-btn {
  color: #f44336;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'ArchitectsDaughter';\n  font-style: normal;\n  src: url('./ArchitectsDaughter-Regular.woff') format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n    background-image: url('./deskBackground.jpg');\n    background-size: cover;\n    background-position: top;\n    background-repeat: no-repeat;\n    height: 100vh;\n    width: 100vw;\n    background-color: #d1dae4;\n    display: flex;\n    flex-direction: column;\n    font-family: 'ArchitectsDaughter';\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 20px 20px 20px;\n    height: 75px;\n}\n\nfooter {\n    position: fixed;\n    bottom: 0;\n}\n\nfooter a {\n    text-decoration: none;\n    color: black;\n    height: 5vh;\n}\n\nh1 {\n    font-size: 38px;\n}\n\nh2 {\n    font-size: 30px;\n    text-decoration: underline;\n}\n\nul {\n    width: 90%;\n}\n\n#content {\n    display: flex;\n    flex-direction: row;\n    height: calc(100vh - 75px);\n}\n\n#side-panel, #main-panel {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0 0 15px;\n  height: 65%;\n  border-radius: 8px;\n}\n\n#side-panel {\n  width: 25vw;\n  margin-left: 5px;\n  background-color: rgba(169, 169, 169, 0.5);\n}\n\n#main-panel {\n  width: 85vw;\n  margin-left: 20px;\n}\n\n#main-panel-desc {\n    align-self: center;\n    margin: 150px auto 0 auto;\n}\n\n.selected-project {\n    background-color: #ebf900;\n}\n\n/* Modal Styles */\n.modal {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal-content {\n  background-color: #fefefe;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 40%;\n  max-width: 500px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n}\n\n/* Tab Styles */\n.tab-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 20px;\n}\n\n.tab-buttons button {\n  background-color: #f2f2f2;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 10px 20px;\n  transition: 0.3s;\n  border-radius: 5px;\n}\n\n.tab-buttons button.active {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.tab {\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n  border-radius: 0 0 5px 5px;\n}\n\n.tab.active {\n  display: block;\n}\n\n/* Input Styles */\ninput[type=\"text\"] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n/* Button Styles */\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #45a049;\n}\n\n.add-button {\n    height: 50px;\n    width: 50px;\n    font-family: 'ArchitectsDaughter';\n    font-size: 18px;\n    background-color: rgba(101, 136, 31, 1);\n    color: white;\n    border-radius: 6px;\n}\n\n/* Project and ToDo Item Styles */\nli {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-bottom: 10px;\n  padding: 10px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\nli input[type=\"checkbox\"] {\n  margin-right: 10px;\n}\n\nli .todo-details {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\nli .project-details {\n    flex-grow: 1;\n}\n\nli .todo-name {\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\nli .todo-description,\nli .todo-due-date {\n  margin-bottom: 2px;\n}\n\nli .priority-block {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin-left: 20px;\n}\n\n.priority-low {\n  background-color: green;\n}\n\n.priority-medium {\n  background-color: orange;\n}\n\n.priority-high {\n  background-color: red;\n}\n\n/* Edit and Delete Button Styles */\n.project-controls, .todo-controls {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.project-controls button, .todo-controls button {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  margin-left: 10px;\n  font-size: 14px;\n  color: #666;\n}\n\n.project-controls button:hover, .todo-controls button:hover {\n  color: #333;\n}\n\n.project-controls .edit-btn, .todo-controls .edit-btn {\n  color: #4CAF50;\n}\n\n.project-controls .delete-btn, .todo-controls .delete-btn {\n  color: #f44336;\n}\n"],"sourceRoot":""}]);
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

    const updateSelectedProjectColor = (projectId) => {
		// Remove the selected-project class from all project items
		sidePanel.querySelectorAll('li').forEach((item) => {
			item.classList.remove('selected-project');
		});
		// Add the selected-project class to the clicked project item
		const selectedProjectItem = sidePanel.querySelector(
			`li[data-id="${projectId}"]`
		);
		if (selectedProjectItem) {
			selectedProjectItem.classList.add('selected-project');
		}
	};

	const renderProjects = () => {
		const projectList = document.createElement('ul');
		_project__WEBPACK_IMPORTED_MODULE_0__.projectsData.projects.forEach((project) => {
			const projectItem = document.createElement('li');
            projectItem.dataset.id = project.id;
            const projectDetails = document.createElement('div');
            projectDetails.classList.add('project-details');

            const name = document.createElement('span');
            name.classList.add('project-name');
			name.textContent = project.name;
            

			const projectControls = document.createElement('div');
			projectControls.classList.add('project-controls');

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
                updateSelectedProjectColor(project.id);
			});
            projectDetails.appendChild(name);
            projectItem.appendChild(projectDetails);
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
				toDoItemElement.appendChild(todoControls);
                toDoItemElement.appendChild(priorityBlock);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtJQUFvRDtBQUNoRyw0Q0FBNEMscUhBQXVDO0FBQ25GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsc0NBQXNDLHNDQUFzQyx1QkFBdUIsaUVBQWlFLHFCQUFxQix1QkFBdUIsR0FBRyxPQUFPLGNBQWMsZUFBZSxHQUFHLFVBQVUsb0RBQW9ELDZCQUE2QiwrQkFBK0IsbUNBQW1DLG9CQUFvQixtQkFBbUIsZ0NBQWdDLG9CQUFvQiw2QkFBNkIsd0NBQXdDLEdBQUcsWUFBWSxvQkFBb0IsMEJBQTBCLHFDQUFxQyxnQ0FBZ0MsbUJBQW1CLEdBQUcsWUFBWSxzQkFBc0IsZ0JBQWdCLEdBQUcsY0FBYyw0QkFBNEIsbUJBQW1CLGtCQUFrQixHQUFHLFFBQVEsc0JBQXNCLEdBQUcsUUFBUSxzQkFBc0IsaUNBQWlDLEdBQUcsUUFBUSxpQkFBaUIsR0FBRyxjQUFjLG9CQUFvQiwwQkFBMEIsaUNBQWlDLEdBQUcsOEJBQThCLGtCQUFrQiwyQkFBMkIsMkJBQTJCLGdCQUFnQix1QkFBdUIsR0FBRyxpQkFBaUIsZ0JBQWdCLHFCQUFxQiwrQ0FBK0MsR0FBRyxpQkFBaUIsZ0JBQWdCLHNCQUFzQixHQUFHLHNCQUFzQix5QkFBeUIsZ0NBQWdDLEdBQUcsdUJBQXVCLGdDQUFnQyxHQUFHLGdDQUFnQyxvQkFBb0IsZUFBZSxZQUFZLFdBQVcsZ0JBQWdCLGlCQUFpQixtQkFBbUIseUNBQXlDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsb0JBQW9CLDhCQUE4QixrQkFBa0IsMkJBQTJCLGVBQWUscUJBQXFCLHVCQUF1Qiw0Q0FBNEMsR0FBRyxvQ0FBb0Msa0JBQWtCLGtDQUFrQyx3QkFBd0IsR0FBRyx5QkFBeUIsOEJBQThCLGlCQUFpQixrQkFBa0Isb0JBQW9CLHVCQUF1QixxQkFBcUIsdUJBQXVCLEdBQUcsZ0NBQWdDLDhCQUE4QixpQkFBaUIsR0FBRyxVQUFVLGtCQUFrQixzQkFBc0IsMkJBQTJCLHFCQUFxQiwrQkFBK0IsR0FBRyxpQkFBaUIsbUJBQW1CLEdBQUcsOENBQThDLGdCQUFnQix1QkFBdUIsa0JBQWtCLDBCQUEwQiwyQkFBMkIsdUJBQXVCLDJCQUEyQixHQUFHLGlDQUFpQyw4QkFBOEIsaUJBQWlCLHVCQUF1QixrQkFBa0IsaUJBQWlCLHVCQUF1QixvQkFBb0IsR0FBRyxrQkFBa0IsOEJBQThCLEdBQUcsaUJBQWlCLG1CQUFtQixrQkFBa0Isd0NBQXdDLHNCQUFzQiw4Q0FBOEMsbUJBQW1CLHlCQUF5QixHQUFHLDRDQUE0QyxrQkFBa0Isd0JBQXdCLDhCQUE4Qix3QkFBd0Isa0JBQWtCLDJCQUEyQix1QkFBdUIsNkNBQTZDLEdBQUcsaUNBQWlDLHVCQUF1QixHQUFHLHNCQUFzQixpQkFBaUIsa0JBQWtCLDJCQUEyQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyxtQkFBbUIsc0JBQXNCLHVCQUF1QixHQUFHLDhDQUE4Qyx1QkFBdUIsR0FBRyx3QkFBd0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsc0JBQXNCLEdBQUcsbUJBQW1CLDRCQUE0QixHQUFHLHNCQUFzQiw2QkFBNkIsR0FBRyxvQkFBb0IsMEJBQTBCLEdBQUcsNEVBQTRFLGtCQUFrQix3QkFBd0IsOEJBQThCLEdBQUcscURBQXFELGtDQUFrQyxpQkFBaUIsb0JBQW9CLHNCQUFzQixvQkFBb0IsZ0JBQWdCLEdBQUcsaUVBQWlFLGdCQUFnQixHQUFHLDJEQUEyRCxtQkFBbUIsR0FBRywrREFBK0QsbUJBQW1CLEdBQUcscUJBQXFCO0FBQ2h1TjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3pSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JxQjtBQUNxQjs7QUFFMUMsSUFBSSxLQUFVLEVBQUUsRUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUUyRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCc0I7O0FBRWpJO0FBQ0EsV0FBVyxrRUFBbUI7QUFDOUI7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLHdCQUF3QixvRUFBcUI7O0FBRTdDO0FBQ0EsVUFBVSw2REFBYztBQUN4QjtBQUNBO0FBQ0EsRUFBRSw4REFBZTtBQUNqQjtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSxHQUFHLFFBQVE7O0FBRXBDO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTSxHQUFHLFFBQVE7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxpRUFBa0I7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBa0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsaUVBQWtCO0FBQ25COztBQUVBOztBQUVBOztBQUV1SDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FakQ7QUFDZTs7QUFFckY7QUFDQSxVQUFVLDZEQUFjO0FBQ3hCO0FBQ0E7QUFDQSxFQUFFLDhEQUFlO0FBQ2pCO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFZO0FBQ3JDO0FBQ0E7QUFDQSxDQUFDLGtEQUFZO0FBQ2IsQ0FBQyxpRUFBa0IsQ0FBQyxrREFBWTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIseUJBQXlCLGtEQUFZO0FBQ3JDO0FBQ0E7QUFDQSxDQUFDLGtEQUFZO0FBQ2IsQ0FBQyxpRUFBa0IsQ0FBQyxrREFBWTtBQUNoQzs7QUFFQTtBQUNBLG9CQUFvQixvREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIseUJBQXlCLGtEQUFZO0FBQ3JDO0FBQ0E7QUFDQSxDQUFDLGtEQUFZO0FBQ2IsQ0FBQyxpRUFBa0IsQ0FBQyxrREFBWTtBQUNoQzs7QUFFQTtBQUNBLG9CQUFvQixvREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0RBQVk7QUFDckM7QUFDQTtBQUNBLENBQUMsa0RBQVk7QUFDYixDQUFDLGlFQUFrQixDQUFDLGtEQUFZO0FBQ2hDOztBQUVBO0FBQ0Esb0JBQW9CLG9EQUFVO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isb0RBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBU0U7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIaUI7QUFPQztBQUM0RTs7QUFFaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLFVBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxrREFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isb0RBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGlFQUFrQixDQUFDLGtEQUFZO0FBQ3BDLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixjQUFjOztBQUU3QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLHVEQUFhO0FBQ2hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSxrREFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvRUFBcUI7QUFDbEQsR0FBRyx5REFBYztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQVU7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0RBQVc7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUcsdURBQVk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLHlEQUFjO0FBQ2pCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLG9EQUFVOztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLHlEQUFlO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsdURBQWE7QUFDaEI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBaUI7QUFDdkIsZUFBZSx1REFBaUI7QUFDaEM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9JdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91SUNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQXJjaGl0ZWN0c0RhdWdodGVyLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZGVza0JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0c0RhdWdodGVyJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkYWU0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHNEYXVnaHRlcic7XG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xuICAgIGhlaWdodDogNzVweDtcbn1cblxuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xufVxuXG5mb290ZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDV2aDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxudWwge1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XG59XG5cbiNzaWRlLXBhbmVsLCAjbWFpbi1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMCAwIDE1cHg7XG4gIGhlaWdodDogNjUlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNzaWRlLXBhbmVsIHtcbiAgd2lkdGg6IDI1dnc7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY5LCAxNjksIDE2OSwgMC41KTtcbn1cblxuI21haW4tcGFuZWwge1xuICB3aWR0aDogODV2dztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbiNtYWluLXBhbmVsLWRlc2Mge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDE1MHB4IGF1dG8gMCBhdXRvO1xufVxuXG4uc2VsZWN0ZWQtcHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjkwMDtcbn1cblxuLyogTW9kYWwgU3R5bGVzICovXG4ubW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDQwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi8qIFRhYiBTdHlsZXMgKi9cbi50YWItYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGFiLWJ1dHRvbnMgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGFiLWJ1dHRvbnMgYnV0dG9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbn1cblxuLnRhYi5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogSW5wdXQgU3R5bGVzICovXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBCdXR0b24gU3R5bGVzICovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbn1cblxuLmFkZC1idXR0b24ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHNEYXVnaHRlcic7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAxLCAxMzYsIDMxLCAxKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4vKiBQcm9qZWN0IGFuZCBUb0RvIEl0ZW0gU3R5bGVzICovXG5saSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxubGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5saSAudG9kby1kZXRhaWxzIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5saSAucHJvamVjdC1kZXRhaWxzIHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbmxpIC50b2RvLW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5saSAudG9kby1kZXNjcmlwdGlvbixcbmxpIC50b2RvLWR1ZS1kYXRlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG5saSAucHJpb3JpdHktYmxvY2sge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ucHJpb3JpdHktbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5wcmlvcml0eS1tZWRpdW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5wcmlvcml0eS1oaWdoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4vKiBFZGl0IGFuZCBEZWxldGUgQnV0dG9uIFN0eWxlcyAqL1xuLnByb2plY3QtY29udHJvbHMsIC50b2RvLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnByb2plY3QtY29udHJvbHMgYnV0dG9uLCAudG9kby1jb250cm9scyBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ucHJvamVjdC1jb250cm9scyBidXR0b246aG92ZXIsIC50b2RvLWNvbnRyb2xzIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ucHJvamVjdC1jb250cm9scyAuZWRpdC1idG4sIC50b2RvLWNvbnRyb2xzIC5lZGl0LWJ0biB7XG4gIGNvbG9yOiAjNENBRjUwO1xufVxuXG4ucHJvamVjdC1jb250cm9scyAuZGVsZXRlLWJ0biwgLnRvZG8tY29udHJvbHMgLmRlbGV0ZS1idG4ge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsMkRBQTREO0VB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RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzRGF1Z2h0ZXInO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgc3JjOiB1cmwoJy4vQXJjaGl0ZWN0c0RhdWdodGVyLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Rlc2tCYWNrZ3JvdW5kLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZGFlNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzRGF1Z2h0ZXInO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XFxuICAgIGhlaWdodDogNzVweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogNXZoO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG51bCB7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XFxufVxcblxcbiNzaWRlLXBhbmVsLCAjbWFpbi1wYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHggMCAwIDE1cHg7XFxuICBoZWlnaHQ6IDY1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3NpZGUtcGFuZWwge1xcbiAgd2lkdGg6IDI1dnc7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjksIDE2OSwgMTY5LCAwLjUpO1xcbn1cXG5cXG4jbWFpbi1wYW5lbCB7XFxuICB3aWR0aDogODV2dztcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4jbWFpbi1wYW5lbC1kZXNjIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDE1MHB4IGF1dG8gMCBhdXRvO1xcbn1cXG5cXG4uc2VsZWN0ZWQtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmY5MDA7XFxufVxcblxcbi8qIE1vZGFsIFN0eWxlcyAqL1xcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogNDAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLyogVGFiIFN0eWxlcyAqL1xcbi50YWItYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGFiLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRhYi1idXR0b25zIGJ1dHRvbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhYiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbn1cXG5cXG4udGFiLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5wdXQgU3R5bGVzICovXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgbWFyZ2luOiA4cHggMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBCdXR0b24gU3R5bGVzICovXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBtYXJnaW46IDhweCAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHNEYXVnaHRlcic7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDEzNiwgMzEsIDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLyogUHJvamVjdCBhbmQgVG9EbyBJdGVtIFN0eWxlcyAqL1xcbmxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbmxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5saSAudG9kby1kZXRhaWxzIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5saSAucHJvamVjdC1kZXRhaWxzIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG5saSAudG9kby1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG5saSAudG9kby1kZXNjcmlwdGlvbixcXG5saSAudG9kby1kdWUtZGF0ZSB7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxufVxcblxcbmxpIC5wcmlvcml0eS1ibG9jayB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkaXVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBFZGl0IGFuZCBEZWxldGUgQnV0dG9uIFN0eWxlcyAqL1xcbi5wcm9qZWN0LWNvbnRyb2xzLCAudG9kby1jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRyb2xzIGJ1dHRvbiwgLnRvZG8tY29udHJvbHMgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzY2NjtcXG59XFxuXFxuLnByb2plY3QtY29udHJvbHMgYnV0dG9uOmhvdmVyLCAudG9kby1jb250cm9scyBidXR0b246aG92ZXIge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRyb2xzIC5lZGl0LWJ0biwgLnRvZG8tY29udHJvbHMgLmVkaXQtYnRuIHtcXG4gIGNvbG9yOiAjNENBRjUwO1xcbn1cXG5cXG4ucHJvamVjdC1jb250cm9scyAuZGVsZXRlLWJ0biwgLnRvZG8tY29udHJvbHMgLmRlbGV0ZS1idG4ge1xcbiAgY29sb3I6ICNmNDQzMzY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFVJQ29udHJvbGxlciBmcm9tICcuL3VJQ29udHJvbGxlcic7XG5cbmlmIChtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG4iLCJjb25zdCBsb2NhbFN0b3JhZ2VLZXkgPSBcInByb2plY3RzXCI7XG5jb25zdCBsb2NhbFN0b3JhZ2VJZEtleSA9IFwicHJvamVjdElkXCI7XG5cbmZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZShwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlSWRLZXksIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkUHJvamVjdElkKSk7XG59XG5cbmZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlS2V5KSk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGdldElkRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3RJZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlSWRLZXkpKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0SWQ7XG59XG5cbmZ1bmN0aW9uIHNhdmVJbmNyZW1lbnRJZChpZCkge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5jcmVtZW50SWQnLCBKU09OLnN0cmluZ2lmeShpZCkpO1xufVxuXG5mdW5jdGlvbiBnZXRJbmNyZW1lbnRJZCgpIHtcblx0Y29uc3QgaWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmNyZW1lbnRJZCcpKTtcblx0cmV0dXJuIGlkIHx8IDA7XG59XG5cbmV4cG9ydCB7IHNhdmVUb0xvY2FsU3RvcmFnZSwgZ2V0RnJvbUxvY2FsU3RvcmFnZSwgZ2V0SWRGcm9tTG9jYWxTdG9yYWdlLCBzYXZlSW5jcmVtZW50SWQsIGdldEluY3JlbWVudElkIH07XG4iLCJpbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlLCBzYXZlVG9Mb2NhbFN0b3JhZ2UsIGdldElkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZUluY3JlbWVudElkLCBnZXRJbmNyZW1lbnRJZCB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5jb25zdCBwcm9qZWN0c0RhdGEgPSB7XG5cdHByb2plY3RzOiBnZXRGcm9tTG9jYWxTdG9yYWdlKCkgfHwgW10sXG5cdHNldFByb2plY3RzOiBmdW5jdGlvbiAobmV3UHJvamVjdHMpIHtcblx0XHR0aGlzLnByb2plY3RzID0gbmV3UHJvamVjdHM7XG5cdH0sXG59O1xubGV0IHNlbGVjdGVkUHJvamVjdElkID0gZ2V0SWRGcm9tTG9jYWxTdG9yYWdlKCk7XG5cbmxldCBpbmNyZW1lbnRJZCA9IChmdW5jdGlvbiAoKSB7XG5cdGxldCBpZCA9IGdldEluY3JlbWVudElkKCk7XG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWQrKztcblx0XHRzYXZlSW5jcmVtZW50SWQoaWQpO1xuXHRcdHJldHVybiBpZDtcblx0fTtcbn0pKCk7XG5cblxuY29uc3QgUHJvamVjdCA9IChuYW1lKSA9PiB7XG5cbiAgICBsZXQgaWQgPSBpbmNyZW1lbnRJZCgpO1xuICAgIGxldCB0b0RvSXRlbXMgPSBbXTtcbiAgICBsZXQgY29tcGxldGVkID0gW107XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHRvRG9JdGVtcyxcbiAgICAgICAgY29tcGxldGVkLFxuICAgIH07XG5cbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuXHQvLyBDaGVjayBpZiBhIHByb2plY3Qgd2l0aCB0aGUgc2FtZSBuYW1lIGFscmVhZHkgZXhpc3RzXG5cdGNvbnN0IGV4aXN0aW5nUHJvamVjdCA9IHByb2plY3RzRGF0YS5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xuXG5cdGlmIChleGlzdGluZ1Byb2plY3QpIHtcblx0XHQvLyBJZiBhIHByb2plY3Qgd2l0aCB0aGUgc2FtZSBuYW1lIGV4aXN0cywgYWRkIGEgbnVtYmVyIHRvIHRoZSBlbmQgb2YgdGhlIG5hbWVcblx0XHRsZXQgY291bnRlciA9IDE7XG5cdFx0bGV0IG5ld05hbWUgPSBgJHtuYW1lfSAoJHtjb3VudGVyfSlgO1xuXG5cdFx0d2hpbGUgKHByb2plY3RzRGF0YS5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5ld05hbWUpKSB7XG5cdFx0XHRjb3VudGVyKys7XG5cdFx0XHRuZXdOYW1lID0gYCR7bmFtZX0gKCR7Y291bnRlcn0pYDtcblx0XHR9XG5cblx0XHRjb25zdCBwcm9qZWN0ID0gUHJvamVjdChuZXdOYW1lKTtcblx0XHRwcm9qZWN0c0RhdGEucHJvamVjdHMucHVzaChwcm9qZWN0KTtcblx0XHRzZWxlY3RlZFByb2plY3RJZCA9IHByb2plY3QuaWQ7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgbm8gcHJvamVjdCB3aXRoIHRoZSBzYW1lIG5hbWUgZXhpc3RzLCBjcmVhdGUgYSBuZXcgcHJvamVjdCB3aXRoIHRoZSBnaXZlbiBuYW1lXG5cdFx0Y29uc3QgcHJvamVjdCA9IFByb2plY3QobmFtZSk7XG5cdFx0cHJvamVjdHNEYXRhLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cdFx0c2VsZWN0ZWRQcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuXHR9XG5cblx0c2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3RzRGF0YS5wcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQpO1xufTtcblxuY29uc3QgZWRpdFByb2plY3ROYW1lID0gKHByb2plY3RJZCwgbmV3TmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgcHJvamVjdC5uYW1lID0gbmV3TmFtZTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHNEYXRhLnByb2plY3RzLCBwcm9qZWN0SWQpO1xufTtcblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBnZXRQcm9qZWN0SW5kZXgocHJvamVjdElkKTtcblx0Y29uc3QgdXBkYXRlZFByb2plY3RzID0gWy4uLnByb2plY3RzRGF0YS5wcm9qZWN0c107XG5cdHVwZGF0ZWRQcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcblx0cHJvamVjdHNEYXRhLnNldFByb2plY3RzKHVwZGF0ZWRQcm9qZWN0cyk7XG5cdHNhdmVUb0xvY2FsU3RvcmFnZShwcm9qZWN0c0RhdGEucHJvamVjdHMsIHByb2plY3RJZCk7XG59O1xuXG5jb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3RJZCkgPT4gcHJvamVjdHNEYXRhLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG5cbmNvbnN0IGdldFByb2plY3RJbmRleCA9IChwcm9qZWN0SWQpID0+IHByb2plY3RzRGF0YS5wcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG5cbmV4cG9ydCB7IHByb2plY3RzRGF0YSwgY3JlYXRlUHJvamVjdCwgZWRpdFByb2plY3ROYW1lLCBkZWxldGVQcm9qZWN0LCBnZXRQcm9qZWN0LCBnZXRQcm9qZWN0SW5kZXgsIHNlbGVjdGVkUHJvamVjdElkIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0c0RhdGEsIGdldFByb2plY3QsIGdldFByb2plY3RJbmRleCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHNhdmVUb0xvY2FsU3RvcmFnZSwgc2F2ZUluY3JlbWVudElkLCBnZXRJbmNyZW1lbnRJZCB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5sZXQgaW5jcmVtZW50SWQgPSAoZnVuY3Rpb24gKCkge1xuXHRsZXQgaWQgPSBnZXRJbmNyZW1lbnRJZCgpO1xuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlkKys7XG5cdFx0c2F2ZUluY3JlbWVudElkKGlkKTtcblx0XHRyZXR1cm4gaWQ7XG5cdH07XG59KSgpO1xuXG5jb25zdCBUb0RvSXRlbSA9IChwcm9qZWN0SWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkgPT4ge1xuXG5cdGxldCBpZCA9IGluY3JlbWVudElkKCk7XG4gICAgbGV0IGNvbXBsZXRlID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHByb2plY3RJZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBjb21wbGV0ZSxcbiAgICB9O1xufTtcblxuY29uc3QgY3JlYXRlVG9Eb0l0ZW0gPSAocHJvamVjdElkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuXHRjb25zdCB0b0RvSXRlbSA9IFRvRG9JdGVtKHByb2plY3RJZCwgbmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KTtcblx0Y29uc3QgdXBkYXRlZFByb2plY3QgPSB7XG5cdFx0Li4ucHJvamVjdCxcblx0XHR0b0RvSXRlbXM6IFsuLi5wcm9qZWN0LnRvRG9JdGVtcywgdG9Eb0l0ZW1dLFxuXHR9O1xuXHRjb25zdCB1cGRhdGVkUHJvamVjdHMgPSBwcm9qZWN0c0RhdGEucHJvamVjdHMubWFwKChwKSA9PlxuXHRcdHAuaWQgPT09IHByb2plY3RJZCA/IHVwZGF0ZWRQcm9qZWN0IDogcFxuXHQpO1xuXHRwcm9qZWN0c0RhdGEuc2V0UHJvamVjdHModXBkYXRlZFByb2plY3RzKTtcblx0c2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3RzRGF0YS5wcm9qZWN0cywgcHJvamVjdElkKTtcbn07XG5cbmNvbnN0IGVkaXRUb0RvSXRlbSA9IChcbiAgICBwcm9qZWN0SWQsXG4gICAgdG9Eb0l0ZW1JZCxcbiAgICBuZXdOYW1lLFxuICAgIG5ld0Rlc2NyaXB0aW9uLFxuICAgIG5ld0RhdGUsXG4gICAgbmV3UHJpb3JpdHlcbikgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3RJZCk7XG5cdGNvbnN0IHVwZGF0ZWRUb0RvSXRlbXMgPSBwcm9qZWN0LnRvRG9JdGVtcy5tYXAoKHRvRG9JdGVtKSA9PlxuXHRcdHRvRG9JdGVtLmlkID09PSB0b0RvSXRlbUlkXG5cdFx0XHQ/IHtcblx0XHRcdFx0XHQuLi50b0RvSXRlbSxcblx0XHRcdFx0XHRuYW1lOiBuZXdOYW1lLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvbixcblx0XHRcdFx0XHRkYXRlOiBuZXdEYXRlLFxuXHRcdFx0XHRcdHByaW9yaXR5OiBuZXdQcmlvcml0eSxcblx0XHRcdCAgfVxuXHRcdFx0OiB0b0RvSXRlbVxuXHQpO1xuXHRjb25zdCB1cGRhdGVkUHJvamVjdCA9IHsgLi4ucHJvamVjdCwgdG9Eb0l0ZW1zOiB1cGRhdGVkVG9Eb0l0ZW1zIH07XG5cdGNvbnN0IHVwZGF0ZWRQcm9qZWN0cyA9IHByb2plY3RzRGF0YS5wcm9qZWN0cy5tYXAoKHApID0+XG5cdFx0cC5pZCA9PT0gcHJvamVjdElkID8gdXBkYXRlZFByb2plY3QgOiBwXG5cdCk7XG5cdHByb2plY3RzRGF0YS5zZXRQcm9qZWN0cyh1cGRhdGVkUHJvamVjdHMpO1xuXHRzYXZlVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHNEYXRhLnByb2plY3RzLCBwcm9qZWN0SWQpO1xufTtcblxuY29uc3QgZGVsZXRlVG9Eb0l0ZW0gPSAocHJvamVjdElkLCB0b0RvSXRlbUlkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdElkKTtcblx0Y29uc3QgdXBkYXRlZFRvRG9JdGVtcyA9IHByb2plY3QudG9Eb0l0ZW1zLmZpbHRlcihcblx0XHQodG9Eb0l0ZW0pID0+IHRvRG9JdGVtLmlkICE9PSB0b0RvSXRlbUlkXG5cdCk7XG5cdGNvbnN0IHVwZGF0ZWRQcm9qZWN0ID0geyAuLi5wcm9qZWN0LCB0b0RvSXRlbXM6IHVwZGF0ZWRUb0RvSXRlbXMgfTtcblx0Y29uc3QgdXBkYXRlZFByb2plY3RzID0gcHJvamVjdHNEYXRhLnByb2plY3RzLm1hcCgocCkgPT5cblx0XHRwLmlkID09PSBwcm9qZWN0SWQgPyB1cGRhdGVkUHJvamVjdCA6IHBcblx0KTtcblx0cHJvamVjdHNEYXRhLnNldFByb2plY3RzKHVwZGF0ZWRQcm9qZWN0cyk7XG5cdHNhdmVUb0xvY2FsU3RvcmFnZShwcm9qZWN0c0RhdGEucHJvamVjdHMsIHByb2plY3RJZCk7XG59O1xuXG5jb25zdCBtYXJrQ29tcGxldGUgPSAocHJvamVjdElkLCB0b0RvSXRlbUlkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdElkKTtcblx0Y29uc3QgdG9Eb0l0ZW0gPSBnZXRUb0RvSXRlbShwcm9qZWN0SWQsIHRvRG9JdGVtSWQpO1xuXHRjb25zdCB0b0RvSXRlbUluZGV4ID0gZ2V0VG9Eb0l0ZW1JbmRleChwcm9qZWN0SWQsIHRvRG9JdGVtSWQpO1xuXHRjb25zdCB1cGRhdGVkVG9Eb0l0ZW1zID0gWy4uLnByb2plY3QudG9Eb0l0ZW1zXTtcblx0dXBkYXRlZFRvRG9JdGVtcy5zcGxpY2UodG9Eb0l0ZW1JbmRleCwgMSk7XG5cdGNvbnN0IHVwZGF0ZWRQcm9qZWN0ID0ge1xuXHRcdC4uLnByb2plY3QsXG5cdFx0dG9Eb0l0ZW1zOiB1cGRhdGVkVG9Eb0l0ZW1zLFxuXHRcdGNvbXBsZXRlZDogW3RvRG9JdGVtLCAuLi5wcm9qZWN0LmNvbXBsZXRlZF0sXG5cdH07XG5cdGNvbnN0IHVwZGF0ZWRQcm9qZWN0cyA9IHByb2plY3RzRGF0YS5wcm9qZWN0cy5tYXAoKHApID0+XG5cdFx0cC5pZCA9PT0gcHJvamVjdElkID8gdXBkYXRlZFByb2plY3QgOiBwXG5cdCk7XG5cdHByb2plY3RzRGF0YS5zZXRQcm9qZWN0cyh1cGRhdGVkUHJvamVjdHMpO1xuXHRzYXZlVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHNEYXRhLnByb2plY3RzLCBwcm9qZWN0SWQpO1xufTtcblxuY29uc3QgZ2V0VG9Eb0l0ZW0gPSAocHJvamVjdElkLCB0b0RvSXRlbUlkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdElkKTtcblx0cmV0dXJuIHByb2plY3QudG9Eb0l0ZW1zLmZpbmQoKHRvRG9JdGVtKSA9PiB0b0RvSXRlbS5pZCA9PT0gdG9Eb0l0ZW1JZCk7XG59O1xuXG5jb25zdCBnZXRUb0RvSXRlbUluZGV4ID0gKHByb2plY3RJZCwgdG9Eb0l0ZW1JZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3RJZCk7XG5cdHJldHVybiBwcm9qZWN0LnRvRG9JdGVtcy5maW5kSW5kZXgoXG5cdFx0KHRvRG9JdGVtKSA9PiB0b0RvSXRlbS5pZCA9PT0gdG9Eb0l0ZW1JZFxuXHQpO1xufTtcblxuZXhwb3J0IHtcbiAgICBjcmVhdGVUb0RvSXRlbSxcbiAgICBlZGl0VG9Eb0l0ZW0sXG4gICAgZGVsZXRlVG9Eb0l0ZW0sXG4gICAgbWFya0NvbXBsZXRlLFxuICAgIGdldFRvRG9JdGVtLFxuICAgIGdldFRvRG9JdGVtSW5kZXgsXG59O1xuIiwiaW1wb3J0IHtcblx0Y3JlYXRlUHJvamVjdCxcblx0cHJvamVjdHNEYXRhLFxuXHRlZGl0UHJvamVjdE5hbWUsXG5cdGRlbGV0ZVByb2plY3QsXG5cdGdldFByb2plY3QsXG4gICAgc2VsZWN0ZWRQcm9qZWN0SWRcbn0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7XG5cdGNyZWF0ZVRvRG9JdGVtLFxuXHRlZGl0VG9Eb0l0ZW0sXG5cdGRlbGV0ZVRvRG9JdGVtLFxuXHRtYXJrQ29tcGxldGUsXG5cdGdldFRvRG9JdGVtLFxufSBmcm9tICcuL3RvRG9JdGVtJztcbmltcG9ydCB7IHNhdmVUb0xvY2FsU3RvcmFnZSwgZ2V0RnJvbUxvY2FsU3RvcmFnZSwgZ2V0SWRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG5jb25zdCBVSUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuXHRjb25zdCBzaWRlUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZS1wYW5lbCcpO1xuXHRjb25zdCBtYWluUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1wYW5lbCcpO1xuXHRjb25zdCBtYWluUGFuZWxEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tcGFuZWwtZGVzYycpO1xuXHRjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcblxuICAgIGNvbnN0IHVwZGF0ZVNlbGVjdGVkUHJvamVjdENvbG9yID0gKHByb2plY3RJZCkgPT4ge1xuXHRcdC8vIFJlbW92ZSB0aGUgc2VsZWN0ZWQtcHJvamVjdCBjbGFzcyBmcm9tIGFsbCBwcm9qZWN0IGl0ZW1zXG5cdFx0c2lkZVBhbmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1wcm9qZWN0Jyk7XG5cdFx0fSk7XG5cdFx0Ly8gQWRkIHRoZSBzZWxlY3RlZC1wcm9qZWN0IGNsYXNzIHRvIHRoZSBjbGlja2VkIHByb2plY3QgaXRlbVxuXHRcdGNvbnN0IHNlbGVjdGVkUHJvamVjdEl0ZW0gPSBzaWRlUGFuZWwucXVlcnlTZWxlY3Rvcihcblx0XHRcdGBsaVtkYXRhLWlkPVwiJHtwcm9qZWN0SWR9XCJdYFxuXHRcdCk7XG5cdFx0aWYgKHNlbGVjdGVkUHJvamVjdEl0ZW0pIHtcblx0XHRcdHNlbGVjdGVkUHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJvamVjdCcpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCByZW5kZXJQcm9qZWN0cyA9ICgpID0+IHtcblx0XHRjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdFx0cHJvamVjdHNEYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRcdGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHByb2plY3RJdGVtLmRhdGFzZXQuaWQgPSBwcm9qZWN0LmlkO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3REZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGV0YWlscycpO1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcblx0XHRcdG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICBcblxuXHRcdFx0Y29uc3QgcHJvamVjdENvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRwcm9qZWN0Q29udHJvbHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250cm9scycpO1xuXG5cdFx0XHQvLyBFZGl0IGJ1dHRvblxuXHRcdFx0Y29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0ZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bicpO1xuXHRcdFx0ZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0Jztcblx0XHRcdGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHNob3dFZGl0UHJvamVjdE1vZGFsKHByb2plY3QuaWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIERlbGV0ZSBidXR0b25cblx0XHRcdGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0ZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcblx0XHRcdGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcblx0XHRcdGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0c2hvd0RlbGV0ZVByb2plY3RNb2RhbChwcm9qZWN0LmlkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRwcm9qZWN0Q29udHJvbHMuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG5cdFx0XHRwcm9qZWN0Q29udHJvbHMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuXHRcdFx0cHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHJlbmRlclRvRG9zKHByb2plY3QuaWQpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGVkUHJvamVjdENvbG9yKHByb2plY3QuaWQpO1xuXHRcdFx0fSk7XG4gICAgICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3REZXRhaWxzKTtcblx0XHRcdHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RDb250cm9scyk7XG5cdFx0XHRwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG5cdFx0fSk7XG5cdFx0c2lkZVBhbmVsLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcblx0fTtcblxuXHRjb25zdCByZW5kZXJUb0RvcyA9IChwcm9qZWN0SWQpID0+IHtcblx0XHRjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuXHRcdC8vIENsZWFyIHRoZSBleGlzdGluZyBjb250ZW50IGluc2lkZSB0aGUgbWFpblBhbmVsLCBleGNlcHQgZm9yIHRoZSBoMiBlbGVtZW50XG5cdFx0Y29uc3QgbWFpblBhbmVsQ2hpbGRyZW4gPSBBcnJheS5mcm9tKG1haW5QYW5lbC5jaGlsZHJlbik7XG5cdFx0bWFpblBhbmVsQ2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcblx0XHRcdGlmIChjaGlsZC50YWdOYW1lICE9PSAnSDInKSB7XG5cdFx0XHRcdGNoaWxkLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKHByb2plY3QudG9Eb0l0ZW1zICYmIHByb2plY3QudG9Eb0l0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblx0XHRcdHByb2plY3QudG9Eb0l0ZW1zLmZvckVhY2goKHRvRG9JdGVtKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRvRG9JdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0XHRcdGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRcdFx0Y2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG5cdFx0XHRcdGNoZWNrYm94LmNoZWNrZWQgPSB0b0RvSXRlbS5jb21wbGV0ZTtcblx0XHRcdFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdHRvRG9JdGVtLmNvbXBsZXRlID0gY2hlY2tib3guY2hlY2tlZDtcblx0XHRcdFx0XHRzYXZlVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHNEYXRhLnByb2plY3RzLCBwcm9qZWN0SWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc3QgdG9kb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0dG9kb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgndG9kby1kZXRhaWxzJyk7XG5cblx0XHRcdFx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0bmFtZS5jbGFzc0xpc3QuYWRkKCd0b2RvLW5hbWUnKTtcblx0XHRcdFx0bmFtZS50ZXh0Q29udGVudCA9IHRvRG9JdGVtLm5hbWU7XG5cblx0XHRcdFx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24nKTtcblx0XHRcdFx0ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b0RvSXRlbS5kZXNjcmlwdGlvbjtcblxuXHRcdFx0XHRjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRkYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlLWRhdGUnKTtcblx0XHRcdFx0ZGF0ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7dG9Eb0l0ZW0uZGF0ZX1gO1xuXG5cdFx0XHRcdGNvbnN0IHByaW9yaXR5QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0cHJpb3JpdHlCbG9jay5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1ibG9jaycpO1xuXHRcdFx0XHRwcmlvcml0eUJsb2NrLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFx0YHByaW9yaXR5LSR7dG9Eb0l0ZW0ucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1gXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Y29uc3QgdG9kb0NvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdHRvZG9Db250cm9scy5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRyb2xzJyk7XG5cblx0XHRcdFx0Y29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0XHRlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnRuJyk7XG5cdFx0XHRcdGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cdFx0XHRcdGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2hvd0VkaXRNb2RhbChwcm9qZWN0SWQsIHRvRG9JdGVtLmlkKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Y29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRcdGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7XG5cdFx0XHRcdGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcblx0XHRcdFx0ZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNob3dEZWxldGVNb2RhbChwcm9qZWN0SWQsIHRvRG9JdGVtLmlkKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dG9kb0NvbnRyb2xzLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXHRcdFx0XHR0b2RvQ29udHJvbHMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuXHRcdFx0XHR0b2RvRGV0YWlscy5hcHBlbmRDaGlsZChuYW1lKTtcblx0XHRcdFx0dG9kb0RldGFpbHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHR0b2RvRGV0YWlscy5hcHBlbmRDaGlsZChkYXRlKTtcblxuXHRcdFx0XHR0b0RvSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXHRcdFx0XHR0b0RvSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb0RldGFpbHMpO1xuXHRcdFx0XHR0b0RvSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQodG9kb0NvbnRyb2xzKTtcbiAgICAgICAgICAgICAgICB0b0RvSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlCbG9jayk7XG5cblx0XHRcdFx0dG9Eb0xpc3QuYXBwZW5kQ2hpbGQodG9Eb0l0ZW1FbGVtZW50KTtcblx0XHRcdH0pO1xuXHRcdFx0bWFpblBhbmVsLmFwcGVuZENoaWxkKHRvRG9MaXN0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3Qgbm9Ub0RvTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRcdG5vVG9Eb01lc3NhZ2UudGV4dENvbnRlbnQgPSAnTm8gdG8tZG8gaXRlbXMgZm9yIHRoaXMgcHJvamVjdC4nO1xuXHRcdFx0bWFpblBhbmVsLmFwcGVuZENoaWxkKG5vVG9Eb01lc3NhZ2UpO1xuXHRcdH1cblxuXHRcdG1haW5QYW5lbERlc2Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fTtcblxuXHRjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuXHRcdGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cblx0XHRjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0cHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblx0XHRjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdHByb2plY3RJbnB1dC50eXBlID0gJ3RleHQnO1xuXHRcdHByb2plY3RJbnB1dC5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IE5hbWUnO1xuXHRcdGNvbnN0IHByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRwcm9qZWN0U3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0Jztcblx0XHRwcm9qZWN0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0Y3JlYXRlUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuXHRcdFx0cmVuZGVyUHJvamVjdHMoKTtcblx0XHRcdG1vZGFsLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdHByb2plY3RUYWIuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcblx0XHRwcm9qZWN0VGFiLmFwcGVuZENoaWxkKHByb2plY3RTdWJtaXRCdXR0b24pO1xuXG5cdFx0Y29uc3QgdG9Eb1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRvRG9UYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cdFx0Y29uc3QgdG9Eb05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0dG9Eb05hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuXHRcdHRvRG9OYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnVG9EbyBOYW1lJztcblx0XHRjb25zdCB0b0RvRGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHR0b0RvRGVzY0lucHV0LnR5cGUgPSAndGV4dCc7XG5cdFx0dG9Eb0Rlc2NJbnB1dC5wbGFjZWhvbGRlciA9ICdUb0RvIERlc2NyaXB0aW9uJztcblx0XHRjb25zdCB0b0RvRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHR0b0RvRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG5cdFx0Y29uc3QgdG9Eb1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblx0XHRjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXHRcdHByaW9yaXR5T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcblx0XHRcdGNvbnN0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0XHRwcmlvcml0eU9wdGlvbi52YWx1ZSA9IG9wdGlvbi50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb247XG5cdFx0XHR0b0RvUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbik7XG5cdFx0fSk7XG5cdFx0Y29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXHRcdHByb2plY3RzRGF0YS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0XHRjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0XHRwcm9qZWN0T3B0aW9uLnZhbHVlID0gcHJvamVjdC5pZDtcblx0XHRcdHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cdFx0XHRwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuXHRcdH0pO1xuXHRcdGNvbnN0IHRvRG9TdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHR0b0RvU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUb0RvJztcblx0XHR0b0RvU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBnZXRJZEZyb21Mb2NhbFN0b3JhZ2UoKTtcblx0XHRcdGNyZWF0ZVRvRG9JdGVtKFxuXHRcdFx0XHRzZWxlY3RlZFByb2plY3RJZCxcblx0XHRcdFx0dG9Eb05hbWVJbnB1dC52YWx1ZSxcblx0XHRcdFx0dG9Eb0Rlc2NJbnB1dC52YWx1ZSxcblx0XHRcdFx0dG9Eb0RhdGVJbnB1dC52YWx1ZSxcblx0XHRcdFx0dG9Eb1ByaW9yaXR5SW5wdXQudmFsdWVcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChzZWxlY3RlZFByb2plY3RJZCk7XG5cdFx0XHRpZiAocHJvamVjdC50b0RvSXRlbXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRyZW5kZXJUb0RvcyhzZWxlY3RlZFByb2plY3RJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYWluUGFuZWwuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdGNvbnN0IG5vVG9Eb01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0XHRcdG5vVG9Eb01lc3NhZ2UudGV4dENvbnRlbnQgPSAnTm8gdG8tZG8gaXRlbXMgZm9yIHRoaXMgcHJvamVjdC4nO1xuXHRcdFx0XHRtYWluUGFuZWwuYXBwZW5kQ2hpbGQobm9Ub0RvTWVzc2FnZSk7XG5cdFx0XHRcdG1haW5QYW5lbERlc2Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdG1vZGFsLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdHRvRG9UYWIuYXBwZW5kQ2hpbGQodG9Eb05hbWVJbnB1dCk7XG5cdFx0dG9Eb1RhYi5hcHBlbmRDaGlsZCh0b0RvRGVzY0lucHV0KTtcblx0XHR0b0RvVGFiLmFwcGVuZENoaWxkKHRvRG9EYXRlSW5wdXQpO1xuXHRcdHRvRG9UYWIuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5SW5wdXQpO1xuXHRcdHRvRG9UYWIuYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdCk7XG5cdFx0dG9Eb1RhYi5hcHBlbmRDaGlsZCh0b0RvU3VibWl0QnV0dG9uKTtcblxuXHRcdGNvbnN0IHRhYkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0YWJCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ3RhYi1idXR0b25zJyk7XG5cdFx0Y29uc3QgcHJvamVjdFRhYkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHByb2plY3RUYWJCdXR0b24udGV4dENvbnRlbnQgPSAnUHJvamVjdCc7XG5cdFx0cHJvamVjdFRhYkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRwcm9qZWN0VGFiQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0cHJvamVjdFRhYi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdHRvRG9UYWIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHByb2plY3RUYWJCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XHR0b0RvVGFiQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdH0pO1xuXHRcdGNvbnN0IHRvRG9UYWJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHR0b0RvVGFiQnV0dG9uLnRleHRDb250ZW50ID0gJ1RvRG8nO1xuXHRcdHRvRG9UYWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRwcm9qZWN0VGFiLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0b0RvVGFiLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0dG9Eb1RhYkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdHByb2plY3RUYWJCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0fSk7XG5cdFx0dGFiQnV0dG9ucy5hcHBlbmRDaGlsZChwcm9qZWN0VGFiQnV0dG9uKTtcblx0XHR0YWJCdXR0b25zLmFwcGVuZENoaWxkKHRvRG9UYWJCdXR0b24pO1xuXG5cdFx0bW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHRhYkJ1dHRvbnMpO1xuXHRcdG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGFiKTtcblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodG9Eb1RhYik7XG5cdFx0bW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblx0fTtcblxuXHRjb25zdCBzaG93RWRpdE1vZGFsID0gKHByb2plY3RJZCwgdG9Eb0l0ZW1JZCkgPT4ge1xuXHRcdGNvbnN0IHRvRG9JdGVtID0gZ2V0VG9Eb0l0ZW0ocHJvamVjdElkLCB0b0RvSXRlbUlkKTtcblxuXHRcdGNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGVkaXRNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuXG5cdFx0Y29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0bW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcblxuXHRcdGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0bmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG5cdFx0bmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ05hbWUnO1xuXHRcdG5hbWVJbnB1dC52YWx1ZSA9IHRvRG9JdGVtLm5hbWU7XG5cblx0XHRjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRkZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XG5cdFx0ZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdEZXNjcmlwdGlvbic7XG5cdFx0ZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRvRG9JdGVtLmRlc2NyaXB0aW9uO1xuXG5cdFx0Y29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcblx0XHRkYXRlSW5wdXQudmFsdWUgPSB0b0RvSXRlbS5kYXRlO1xuXG5cdFx0Y29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXHRcdGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XG5cdFx0cHJpb3JpdHlPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuXHRcdFx0Y29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdHByaW9yaXR5T3B0aW9uLnZhbHVlID0gb3B0aW9uLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRwcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbjtcblx0XHRcdGlmIChvcHRpb24udG9Mb3dlckNhc2UoKSA9PT0gdG9Eb0l0ZW0ucHJpb3JpdHkudG9Mb3dlckNhc2UoKSkge1xuXHRcdFx0XHRwcmlvcml0eU9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uKTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUgQ2hhbmdlcyc7XG5cdFx0c2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdGVkaXRUb0RvSXRlbShcblx0XHRcdFx0cHJvamVjdElkLFxuXHRcdFx0XHR0b0RvSXRlbUlkLFxuXHRcdFx0XHRuYW1lSW5wdXQudmFsdWUsXG5cdFx0XHRcdGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG5cdFx0XHRcdGRhdGVJbnB1dC52YWx1ZSxcblx0XHRcdFx0cHJpb3JpdHlJbnB1dC52YWx1ZVxuXHRcdFx0KTtcblx0XHRcdGVkaXRNb2RhbC5yZW1vdmUoKTtcblx0XHRcdHJlbmRlclRvRG9zKHByb2plY3RJZCk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblx0XHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRlZGl0TW9kYWwucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cdFx0bW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cdFx0bW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXHRcdG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuXHRcdGVkaXRNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWRpdE1vZGFsKTtcblx0fTtcblxuXHRjb25zdCBzaG93RGVsZXRlTW9kYWwgPSAocHJvamVjdElkLCB0b0RvSXRlbUlkKSA9PiB7XG5cdFx0Y29uc3QgZGVsZXRlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRkZWxldGVNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuXG5cdFx0Y29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0bW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcblxuXHRcdGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0bWVzc2FnZS50ZXh0Q29udGVudCA9XG5cdFx0XHQnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRvLWRvIGl0ZW0/JztcblxuXHRcdGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuXHRcdGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRkZWxldGVUb0RvSXRlbShwcm9qZWN0SWQsIHRvRG9JdGVtSWQpO1xuXHRcdFx0cmVuZGVyVG9Eb3MocHJvamVjdElkKTtcblx0XHRcdGRlbGV0ZU1vZGFsLnJlbW92ZSgpO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0Y2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cdFx0Y2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0ZGVsZXRlTW9kYWwucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG5cdFx0bW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuXHRcdG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG5cdFx0ZGVsZXRlTW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlbGV0ZU1vZGFsKTtcblx0fTtcblxuXHRjb25zdCBzaG93RWRpdFByb2plY3RNb2RhbCA9IChwcm9qZWN0SWQpID0+IHtcblx0XHRjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuXG5cdFx0Y29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZWRpdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cblx0XHRjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuXG5cdFx0Y29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRuYW1lSW5wdXQudHlwZSA9ICd0ZXh0Jztcblx0XHRuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBOYW1lJztcblx0XHRuYW1lSW5wdXQudmFsdWUgPSBwcm9qZWN0Lm5hbWUgfHwgJyc7XG5cblx0XHRjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0c2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlIENoYW5nZXMnO1xuXHRcdHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBuZXdOYW1lID0gbmFtZUlucHV0LnZhbHVlO1xuXHRcdFx0ZWRpdFByb2plY3ROYW1lKHByb2plY3RJZCwgbmV3TmFtZSk7XG5cdFx0XHQvLyBDbGVhciB0aGUgZXhpc3RpbmcgY29udGVudCBpbnNpZGUgdGhlIHNpZGVQYW5lbCwgZXhjZXB0IGZvciB0aGUgaDIgZWxlbWVudFxuXHRcdFx0Y29uc3Qgc2lkZVBhbmVsQ2hpbGRyZW4gPSBBcnJheS5mcm9tKHNpZGVQYW5lbC5jaGlsZHJlbik7XG5cdFx0XHRzaWRlUGFuZWxDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdFx0XHRpZiAoY2hpbGQudGFnTmFtZSAhPT0gJ0gyJykge1xuXHRcdFx0XHRcdGNoaWxkLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHJlbmRlclByb2plY3RzKCk7XG5cdFx0XHRlZGl0TW9kYWwucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblx0XHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRlZGl0TW9kYWwucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG5cdFx0bW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cblx0XHRlZGl0TW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVkaXRNb2RhbCk7XG5cdH07XG5cblx0Y29uc3Qgc2hvd0RlbGV0ZVByb2plY3RNb2RhbCA9IChwcm9qZWN0SWQpID0+IHtcblx0XHRjb25zdCBkZWxldGVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGRlbGV0ZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cblx0XHRjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuXG5cdFx0Y29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRtZXNzYWdlLnRleHRDb250ZW50ID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwcm9qZWN0Pyc7XG5cblx0XHRjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0Y29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcblx0XHRjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0ZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xuXHRcdFx0cmVuZGVyUHJvamVjdHMoKTtcblx0XHRcdGRlbGV0ZU1vZGFsLnJlbW92ZSgpO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0Y2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cdFx0Y2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0ZGVsZXRlTW9kYWwucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG5cdFx0bW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuXHRcdG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG5cdFx0ZGVsZXRlTW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlbGV0ZU1vZGFsKTtcblx0fTtcblxuXHQvLyBSZW5kZXIgcHJvamVjdHMgYW5kIHRvLWRvIGl0ZW1zIG9uIGluaXRpYWwgbG9hZFxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuXHRcdHJlbmRlclByb2plY3RzKCk7XG5cdFx0aWYgKHNlbGVjdGVkUHJvamVjdElkICE9PSBudWxsKSB7XG5cdFx0XHRyZW5kZXJUb0RvcyhzZWxlY3RlZFByb2plY3RJZCk7XG5cdFx0fVxuXHR9O1xuXG5cdGluaXRpYWxpemUoKTtcblxuXHRhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TW9kYWwpO1xuXG5cdHJldHVybiB7XG5cdFx0cmVuZGVyUHJvamVjdHMsXG5cdFx0cmVuZGVyVG9Eb3MsXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBVSUNvbnRyb2xsZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
}

li input[type="checkbox"] {
  margin-right: 10px;
}

li span {
  margin-right: 10px;
}

li span:last-child {
  margin-right: 0;
}

/* Priority Styles */
select {
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

option[value="low"] {
  color: green;
}

option[value="medium"] {
  color: orange;
}

option[value="high"] {
  color: red;
}

.add-button {
    height: 50px;
    width: 50px;
    font-family: 'ArchitectsDaughter';
    font-size: 18px;
    background-color: rgba(101, 136, 31, 1);
    color: white;
    border-radius: 6px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,2DAA4D;EAC5D,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;IACI,yDAA6C;IAC7C,sBAAsB;IACtB,wBAAwB;IACxB,4BAA4B;IAC5B,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA,iBAAiB;AACjB;EACE,eAAe;EACf,UAAU;EACV,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA,eAAe;AACf;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;EACE,cAAc;AAChB;;AAEA,iBAAiB;AACjB;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,qBAAqB;EACrB,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA,kBAAkB;AAClB;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;AACA,qBAAqB;AACrB;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA,oBAAoB;AACpB;EACE,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,iCAAiC;IACjC,eAAe;IACf,uCAAuC;IACvC,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":["@font-face {\n  font-family: 'ArchitectsDaughter';\n  font-style: normal;\n  src: url('./ArchitectsDaughter-Regular.woff') format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n    background-image: url('./deskBackground.jpg');\n    background-size: cover;\n    background-position: top;\n    background-repeat: no-repeat;\n    height: 100vh;\n    width: 100vw;\n    background-color: #d1dae4;\n    display: flex;\n    flex-direction: column;\n    font-family: 'ArchitectsDaughter';\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 20px 20px 20px;\n    height: 75px;\n}\n\nfooter {\n    position: fixed;\n    bottom: 0;\n}\n\nfooter a {\n    text-decoration: none;\n    color: black;\n    height: 5vh;\n}\n\nh1 {\n    font-size: 38px;\n}\n\nh2 {\n    font-size: 30px;\n    text-decoration: underline;\n}\n\n#content {\n    display: flex;\n    flex-direction: row;\n    height: calc(100vh - 75px);\n}\n\n#side-panel, #main-panel {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0 0 15px;\n  height: 65%;\n  border-radius: 8px;\n}\n\n#side-panel {\n  width: 25vw;\n  margin-left: 5px;\n  background-color: rgba(169, 169, 169, 0.5);\n}\n\n#main-panel {\n  width: 85vw;\n  margin-left: 20px;\n}\n\n#main-panel-desc {\n    align-self: center;\n    margin: 150px auto 0 auto;\n}\n\n/* Modal Styles */\n.modal {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal-content {\n  background-color: #fefefe;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 40%;\n  max-width: 500px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n}\n\n/* Tab Styles */\n.tab-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 20px;\n}\n\n.tab-buttons button {\n  background-color: #f2f2f2;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 10px 20px;\n  transition: 0.3s;\n  border-radius: 5px;\n}\n\n.tab-buttons button.active {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.tab {\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n  border-radius: 0 0 5px 5px;\n}\n\n.tab.active {\n  display: block;\n}\n\n/* Input Styles */\ninput[type=\"text\"] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n/* Button Styles */\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #45a049;\n}\n/* ToDo Item Styles */\nli {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\nli input[type=\"checkbox\"] {\n  margin-right: 10px;\n}\n\nli span {\n  margin-right: 10px;\n}\n\nli span:last-child {\n  margin-right: 0;\n}\n\n/* Priority Styles */\nselect {\n  padding: 5px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n}\n\noption[value=\"low\"] {\n  color: green;\n}\n\noption[value=\"medium\"] {\n  color: orange;\n}\n\noption[value=\"high\"] {\n  color: red;\n}\n\n.add-button {\n    height: 50px;\n    width: 50px;\n    font-family: 'ArchitectsDaughter';\n    font-size: 18px;\n    background-color: rgba(101, 136, 31, 1);\n    color: white;\n    border-radius: 6px;\n}"],"sourceRoot":""}]);
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

(0,_uIController__WEBPACK_IMPORTED_MODULE_1__.UIController)();


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
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");


let projects = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)() || [];
let selectedProjectId = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.getIdFromLocalStorage)();

let incrementId = (function () {
		let id = 0;
		return function () {
			id++;
			return id;
		};
	})();

const Project = (name) => {

    let id = incrementId();
    let tasks = [];
    let completed = [];
    return {
        id,
        name,
        tasks,
        completed,
    };

};

const createProject = (name) => {
	// Check if a project with the same name already exists
	const existingProject = projects.find((project) => project.name === name);

	if (existingProject) {
		// If a project with the same name exists, add a number to the end of the name
		let counter = 1;
		let newName = `${name} (${counter})`;

		while (projects.find((project) => project.name === newName)) {
			counter++;
			newName = `${name} (${counter})`;
		}

		const project = Project(newName);
		projects.push(project);
	} else {
		// If no project with the same name exists, create a new project with the given name
		const project = Project(name);
		projects.push(project);
	}

	(0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projects);
};

const editProjectName = (projectId, newName) => {
    const project = getProject(projectId);
    project.name = newName;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projects, projectId);
};

const deleteProject = (projectId) => {
    const projectIndex = getProjectIndex(projectId);
    projects.splice(projectIndex, 1);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(projects, projectId);
};

const getProject = (projectId) => projects.find((project) => project.id === projectId);

const getProjectIndex = (projectId) => projects.findIndex((project) => project.id === projectId);




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



const ToDoItem = (projectId, name, description, date, priority) => {
    incrementId = (function () {
		let id = 0;
		return function () {
			id++;
			return id;
		};
	})();

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
    project.toDoItems.push(toDoItem);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(_project__WEBPACK_IMPORTED_MODULE_0__.projects, projectId);
};

const editToDoItem = (
    projectId,
    toDoItemId,
    newName,
    newDescription,
    newDate,
    newPriority
) => {
    const toDoItem = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId, toDoItemId);

    toDoItem.name = newName;
    toDoItem.description = newDescription;
    toDoItem.date = newDate;
    toDoItem.priority = newPriority;

    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(_project__WEBPACK_IMPORTED_MODULE_0__.projects, projectId);
};

const deleteToDoItem = (projectId, toDoItemId) => {
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId);
    const toDoItemIndex = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProjectIndex)(projectId, toDoItemId);
    project.toDoItems.splice(toDoItemIndex, 1);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(_project__WEBPACK_IMPORTED_MODULE_0__.projects, projectId);
};

const markComplete = (projectId, toDoItemId) => {
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId);
    const toDoItem = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId, toDoItemId);
    const toDoItemIndex = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProjectIndex)(projectId, toDoItemId);
    project.completed.unshift(toDoItem);
    project.toDoItems.splice(toDoItemIndex, 1);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(_project__WEBPACK_IMPORTED_MODULE_0__.projects, projectId);
};

const getToDoItem = (projectId, toDoItemId) => {
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId);
    for (const key in project) {
        if (key === "toDoItems") {
            const toDoItem = project[key].find((toDoItem) => toDoItem.id === toDoItemId);
            if (toDoItem) return toDoItem;
        }
    }
};

const getToDoItemIndex = (projectId, toDoItemId) => {
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId);
    for (let key in project) {
        if (key === "toDoItems") {
            const toDoItemIndex = project[key].findIndex((toDoItem) => toDoItem.id === toDoItemId);
            if (toDoItemIndex) return toDoItemIndex;
        }
    }
};




/***/ }),

/***/ "./src/uIController.js":
/*!*****************************!*\
  !*** ./src/uIController.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIController: () => (/* binding */ UIController)
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
		sidePanel.innerHTML = '';
		const projectList = document.createElement('ul');
		_project__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
			const projectItem = document.createElement('li');
			projectItem.textContent = project.name;
			projectItem.addEventListener('click', () => {
				renderToDos(project.id);
			});
			projectList.appendChild(projectItem);
		});
		sidePanel.appendChild(projectList);
	};

	const renderToDos = (projectId) => {
		const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectId);
		mainPanel.innerHTML = '';

		if (project.toDoItems && project.toDoItems.length > 0) {
			const toDoList = document.createElement('ul');
			project.toDoItems.forEach((toDoItem) => {
				const toDoItemElement = document.createElement('li');
				const checkbox = document.createElement('input');
				checkbox.type = 'checkbox';
				checkbox.checked = toDoItem.complete;
				checkbox.addEventListener('change', () => {
					toDoItem.complete = checkbox.checked;
					(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(_project__WEBPACK_IMPORTED_MODULE_0__.projects, projectId);
				});
				const name = document.createElement('span');
				name.textContent = toDoItem.name;
				const date = document.createElement('span');
				date.textContent = `Due: ${toDoItem.date}`;
				const priority = document.createElement('span');
				priority.textContent = `Priority: ${toDoItem.priority}`;
				toDoItemElement.appendChild(checkbox);
				toDoItemElement.appendChild(name);
				toDoItemElement.appendChild(date);
				toDoItemElement.appendChild(priority);
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
		_project__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
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
			renderToDos(selectedProjectId);
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
	// Render projects and to-do items on initial load
	const initialize = () => {
		renderProjects();
		const selectedProjectId = (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.getIdFromLocalStorage)();
		if (selectedProjectId) {
			renderToDos(selectedProjectId);
		}
	};

	initialize();

	addButton.addEventListener('click', showModal);

	return {
		renderProjects,
		renderToDos,
	};
})();




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtJQUFvRDtBQUNoRyw0Q0FBNEMscUhBQXVDO0FBQ25GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9B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O0FBQ0EsK0JBQStCLGNBQWM7QUFDN0M7QUFDQSx3Q0FBd0Msa0JBQWtCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLHVEQUFhO0FBQ2hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSw4Q0FBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvRUFBcUI7QUFDbEQsR0FBRyx5REFBYztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvRUFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUV1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b0RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdUlDb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0FyY2hpdGVjdHNEYXVnaHRlci1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Rlc2tCYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHNEYXVnaHRlcic7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZGFlNDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzRGF1Z2h0ZXInO1xufVxuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG59XG5cbmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbn1cblxuZm9vdGVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgaGVpZ2h0OiA1dmg7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDM4cHg7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XG59XG5cbiNzaWRlLXBhbmVsLCAjbWFpbi1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMCAwIDE1cHg7XG4gIGhlaWdodDogNjUlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNzaWRlLXBhbmVsIHtcbiAgd2lkdGg6IDI1dnc7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY5LCAxNjksIDE2OSwgMC41KTtcbn1cblxuI21haW4tcGFuZWwge1xuICB3aWR0aDogODV2dztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbiNtYWluLXBhbmVsLWRlc2Mge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDE1MHB4IGF1dG8gMCBhdXRvO1xufVxuXG4vKiBNb2RhbCBTdHlsZXMgKi9cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICB3aWR0aDogNDAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLyogVGFiIFN0eWxlcyAqL1xuLnRhYi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50YWItYnV0dG9ucyBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50YWItYnV0dG9ucyBidXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFiIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xufVxuXG4udGFiLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBJbnB1dCBTdHlsZXMgKi9cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIEJ1dHRvbiBTdHlsZXMgKi9cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xufVxuLyogVG9EbyBJdGVtIFN0eWxlcyAqL1xubGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5saSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmxpIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmxpIHNwYW46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLyogUHJpb3JpdHkgU3R5bGVzICovXG5zZWxlY3Qge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxub3B0aW9uW3ZhbHVlPVwibG93XCJdIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG5vcHRpb25bdmFsdWU9XCJtZWRpdW1cIl0ge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG5vcHRpb25bdmFsdWU9XCJoaWdoXCJdIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmFkZC1idXR0b24ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHNEYXVnaHRlcic7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAxLCAxMzYsIDMxLCAxKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2Vz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Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0c0RhdWdodGVyJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHNyYzogdXJsKCcuL0FyY2hpdGVjdHNEYXVnaHRlci1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9kZXNrQmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWRhZTQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0c0RhdWdodGVyJztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcXG59XFxuXFxuI3NpZGUtcGFuZWwsICNtYWluLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweCAwIDAgMTVweDtcXG4gIGhlaWdodDogNjUlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jc2lkZS1wYW5lbCB7XFxuICB3aWR0aDogMjV2dztcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2OSwgMTY5LCAxNjksIDAuNSk7XFxufVxcblxcbiNtYWluLXBhbmVsIHtcXG4gIHdpZHRoOiA4NXZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNtYWluLXBhbmVsLWRlc2Mge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTUwcHggYXV0byAwIGF1dG87XFxufVxcblxcbi8qIE1vZGFsIFN0eWxlcyAqL1xcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogNDAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLyogVGFiIFN0eWxlcyAqL1xcbi50YWItYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGFiLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRhYi1idXR0b25zIGJ1dHRvbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhYiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbn1cXG5cXG4udGFiLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5wdXQgU3R5bGVzICovXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgbWFyZ2luOiA4cHggMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBCdXR0b24gU3R5bGVzICovXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBtYXJnaW46IDhweCAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcXG59XFxuLyogVG9EbyBJdGVtIFN0eWxlcyAqL1xcbmxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxubGkgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbmxpIHNwYW4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5saSBzcGFuOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBQcmlvcml0eSBTdHlsZXMgKi9cXG5zZWxlY3Qge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG59XFxuXFxub3B0aW9uW3ZhbHVlPVxcXCJsb3dcXFwiXSB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbm9wdGlvblt2YWx1ZT1cXFwibWVkaXVtXFxcIl0ge1xcbiAgY29sb3I6IG9yYW5nZTtcXG59XFxuXFxub3B0aW9uW3ZhbHVlPVxcXCJoaWdoXFxcIl0ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHNEYXVnaHRlcic7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDEzNiwgMzEsIDEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuL3VJQ29udHJvbGxlcic7XG5cbmlmIChtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG5cblVJQ29udHJvbGxlcigpO1xuIiwiY29uc3QgbG9jYWxTdG9yYWdlS2V5ID0gXCJwcm9qZWN0c1wiO1xuY29uc3QgbG9jYWxTdG9yYWdlSWRLZXkgPSBcInByb2plY3RJZFwiO1xuXG5mdW5jdGlvbiBzYXZlVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUlkS2V5LCBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFByb2plY3RJZCkpO1xufVxuXG5mdW5jdGlvbiBnZXRGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUtleSkpO1xuICAgIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBnZXRJZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUlkS2V5KSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkUHJvamVjdElkO1xufVxuXG5leHBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UsIGdldEZyb21Mb2NhbFN0b3JhZ2UsIGdldElkRnJvbUxvY2FsU3RvcmFnZSB9O1xuIiwiaW1wb3J0IHsgZ2V0RnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVRvTG9jYWxTdG9yYWdlLCBnZXRJZEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxubGV0IHByb2plY3RzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgpIHx8IFtdO1xubGV0IHNlbGVjdGVkUHJvamVjdElkID0gZ2V0SWRGcm9tTG9jYWxTdG9yYWdlKCk7XG5cbmxldCBpbmNyZW1lbnRJZCA9IChmdW5jdGlvbiAoKSB7XG5cdFx0bGV0IGlkID0gMDtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWQrKztcblx0XHRcdHJldHVybiBpZDtcblx0XHR9O1xuXHR9KSgpO1xuXG5jb25zdCBQcm9qZWN0ID0gKG5hbWUpID0+IHtcblxuICAgIGxldCBpZCA9IGluY3JlbWVudElkKCk7XG4gICAgbGV0IHRhc2tzID0gW107XG4gICAgbGV0IGNvbXBsZXRlZCA9IFtdO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBuYW1lLFxuICAgICAgICB0YXNrcyxcbiAgICAgICAgY29tcGxldGVkLFxuICAgIH07XG5cbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuXHQvLyBDaGVjayBpZiBhIHByb2plY3Qgd2l0aCB0aGUgc2FtZSBuYW1lIGFscmVhZHkgZXhpc3RzXG5cdGNvbnN0IGV4aXN0aW5nUHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XG5cblx0aWYgKGV4aXN0aW5nUHJvamVjdCkge1xuXHRcdC8vIElmIGEgcHJvamVjdCB3aXRoIHRoZSBzYW1lIG5hbWUgZXhpc3RzLCBhZGQgYSBudW1iZXIgdG8gdGhlIGVuZCBvZiB0aGUgbmFtZVxuXHRcdGxldCBjb3VudGVyID0gMTtcblx0XHRsZXQgbmV3TmFtZSA9IGAke25hbWV9ICgke2NvdW50ZXJ9KWA7XG5cblx0XHR3aGlsZSAocHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuZXdOYW1lKSkge1xuXHRcdFx0Y291bnRlcisrO1xuXHRcdFx0bmV3TmFtZSA9IGAke25hbWV9ICgke2NvdW50ZXJ9KWA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcHJvamVjdCA9IFByb2plY3QobmV3TmFtZSk7XG5cdFx0cHJvamVjdHMucHVzaChwcm9qZWN0KTtcblx0fSBlbHNlIHtcblx0XHQvLyBJZiBubyBwcm9qZWN0IHdpdGggdGhlIHNhbWUgbmFtZSBleGlzdHMsIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IHdpdGggdGhlIGdpdmVuIG5hbWVcblx0XHRjb25zdCBwcm9qZWN0ID0gUHJvamVjdChuYW1lKTtcblx0XHRwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXHR9XG5cblx0c2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbn07XG5cbmNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IChwcm9qZWN0SWQsIG5ld05hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICAgIHByb2plY3QubmFtZSA9IG5ld05hbWU7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3RzLCBwcm9qZWN0SWQpO1xufTtcblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBnZXRQcm9qZWN0SW5kZXgocHJvamVjdElkKTtcbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHMsIHByb2plY3RJZCk7XG59O1xuXG5jb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3RJZCkgPT4gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcblxuY29uc3QgZ2V0UHJvamVjdEluZGV4ID0gKHByb2plY3RJZCkgPT4gcHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuXG5leHBvcnQgeyBwcm9qZWN0cywgY3JlYXRlUHJvamVjdCwgZWRpdFByb2plY3ROYW1lLCBkZWxldGVQcm9qZWN0LCBnZXRQcm9qZWN0LCBnZXRQcm9qZWN0SW5kZXggfTtcbiIsImltcG9ydCB7IHByb2plY3RzLCBnZXRQcm9qZWN0LCBnZXRQcm9qZWN0SW5kZXggfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuY29uc3QgVG9Eb0l0ZW0gPSAocHJvamVjdElkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBpbmNyZW1lbnRJZCA9IChmdW5jdGlvbiAoKSB7XG5cdFx0bGV0IGlkID0gMDtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWQrKztcblx0XHRcdHJldHVybiBpZDtcblx0XHR9O1xuXHR9KSgpO1xuXG5cdGxldCBpZCA9IGluY3JlbWVudElkKCk7XG4gICAgbGV0IGNvbXBsZXRlID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHByb2plY3RJZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBjb21wbGV0ZSxcbiAgICB9O1xufTtcblxuY29uc3QgY3JlYXRlVG9Eb0l0ZW0gPSAocHJvamVjdElkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICAgIGNvbnN0IHRvRG9JdGVtID0gVG9Eb0l0ZW0ocHJvamVjdElkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpO1xuICAgIHByb2plY3QudG9Eb0l0ZW1zLnB1c2godG9Eb0l0ZW0pO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZShwcm9qZWN0cywgcHJvamVjdElkKTtcbn07XG5cbmNvbnN0IGVkaXRUb0RvSXRlbSA9IChcbiAgICBwcm9qZWN0SWQsXG4gICAgdG9Eb0l0ZW1JZCxcbiAgICBuZXdOYW1lLFxuICAgIG5ld0Rlc2NyaXB0aW9uLFxuICAgIG5ld0RhdGUsXG4gICAgbmV3UHJpb3JpdHlcbikgPT4ge1xuICAgIGNvbnN0IHRvRG9JdGVtID0gZ2V0UHJvamVjdChwcm9qZWN0SWQsIHRvRG9JdGVtSWQpO1xuXG4gICAgdG9Eb0l0ZW0ubmFtZSA9IG5ld05hbWU7XG4gICAgdG9Eb0l0ZW0uZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB0b0RvSXRlbS5kYXRlID0gbmV3RGF0ZTtcbiAgICB0b0RvSXRlbS5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3RzLCBwcm9qZWN0SWQpO1xufTtcblxuY29uc3QgZGVsZXRlVG9Eb0l0ZW0gPSAocHJvamVjdElkLCB0b0RvSXRlbUlkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdElkKTtcbiAgICBjb25zdCB0b0RvSXRlbUluZGV4ID0gZ2V0UHJvamVjdEluZGV4KHByb2plY3RJZCwgdG9Eb0l0ZW1JZCk7XG4gICAgcHJvamVjdC50b0RvSXRlbXMuc3BsaWNlKHRvRG9JdGVtSW5kZXgsIDEpO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZShwcm9qZWN0cywgcHJvamVjdElkKTtcbn07XG5cbmNvbnN0IG1hcmtDb21wbGV0ZSA9IChwcm9qZWN0SWQsIHRvRG9JdGVtSWQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICAgIGNvbnN0IHRvRG9JdGVtID0gZ2V0UHJvamVjdChwcm9qZWN0SWQsIHRvRG9JdGVtSWQpO1xuICAgIGNvbnN0IHRvRG9JdGVtSW5kZXggPSBnZXRQcm9qZWN0SW5kZXgocHJvamVjdElkLCB0b0RvSXRlbUlkKTtcbiAgICBwcm9qZWN0LmNvbXBsZXRlZC51bnNoaWZ0KHRvRG9JdGVtKTtcbiAgICBwcm9qZWN0LnRvRG9JdGVtcy5zcGxpY2UodG9Eb0l0ZW1JbmRleCwgMSk7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHByb2plY3RzLCBwcm9qZWN0SWQpO1xufTtcblxuY29uc3QgZ2V0VG9Eb0l0ZW0gPSAocHJvamVjdElkLCB0b0RvSXRlbUlkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdElkKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9qZWN0KSB7XG4gICAgICAgIGlmIChrZXkgPT09IFwidG9Eb0l0ZW1zXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtID0gcHJvamVjdFtrZXldLmZpbmQoKHRvRG9JdGVtKSA9PiB0b0RvSXRlbS5pZCA9PT0gdG9Eb0l0ZW1JZCk7XG4gICAgICAgICAgICBpZiAodG9Eb0l0ZW0pIHJldHVybiB0b0RvSXRlbTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IGdldFRvRG9JdGVtSW5kZXggPSAocHJvamVjdElkLCB0b0RvSXRlbUlkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdElkKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvamVjdCkge1xuICAgICAgICBpZiAoa2V5ID09PSBcInRvRG9JdGVtc1wiKSB7XG4gICAgICAgICAgICBjb25zdCB0b0RvSXRlbUluZGV4ID0gcHJvamVjdFtrZXldLmZpbmRJbmRleCgodG9Eb0l0ZW0pID0+IHRvRG9JdGVtLmlkID09PSB0b0RvSXRlbUlkKTtcbiAgICAgICAgICAgIGlmICh0b0RvSXRlbUluZGV4KSByZXR1cm4gdG9Eb0l0ZW1JbmRleDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlVG9Eb0l0ZW0sXG4gICAgZWRpdFRvRG9JdGVtLFxuICAgIGRlbGV0ZVRvRG9JdGVtLFxuICAgIG1hcmtDb21wbGV0ZSxcbiAgICBnZXRUb0RvSXRlbSxcbiAgICBnZXRUb0RvSXRlbUluZGV4LFxufTtcbiIsImltcG9ydCB7XG5cdGNyZWF0ZVByb2plY3QsXG5cdHByb2plY3RzLFxuXHRlZGl0UHJvamVjdE5hbWUsXG5cdGRlbGV0ZVByb2plY3QsXG5cdGdldFByb2plY3QsXG59IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQge1xuXHRjcmVhdGVUb0RvSXRlbSxcblx0ZWRpdFRvRG9JdGVtLFxuXHRkZWxldGVUb0RvSXRlbSxcblx0bWFya0NvbXBsZXRlLFxuXHRnZXRUb0RvSXRlbSxcbn0gZnJvbSAnLi90b0RvSXRlbSc7XG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UsIGdldEZyb21Mb2NhbFN0b3JhZ2UsIGdldElkRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuY29uc3QgVUlDb250cm9sbGVyID0gKCgpID0+IHtcblx0Y29uc3Qgc2lkZVBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtcGFuZWwnKTtcblx0Y29uc3QgbWFpblBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tcGFuZWwnKTtcblx0Y29uc3QgbWFpblBhbmVsRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLXBhbmVsLWRlc2MnKTtcblx0Y29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5cblx0Y29uc3QgcmVuZGVyUHJvamVjdHMgPSAoKSA9PiB7XG5cdFx0c2lkZVBhbmVsLmlubmVySFRNTCA9ICcnO1xuXHRcdGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblx0XHRwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0XHRjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0XHRwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblx0XHRcdHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRyZW5kZXJUb0Rvcyhwcm9qZWN0LmlkKTtcblx0XHRcdH0pO1xuXHRcdFx0cHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuXHRcdH0pO1xuXHRcdHNpZGVQYW5lbC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyVG9Eb3MgPSAocHJvamVjdElkKSA9PiB7XG5cdFx0Y29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdElkKTtcblx0XHRtYWluUGFuZWwuaW5uZXJIVE1MID0gJyc7XG5cblx0XHRpZiAocHJvamVjdC50b0RvSXRlbXMgJiYgcHJvamVjdC50b0RvSXRlbXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXHRcdFx0cHJvamVjdC50b0RvSXRlbXMuZm9yRWFjaCgodG9Eb0l0ZW0pID0+IHtcblx0XHRcdFx0Y29uc3QgdG9Eb0l0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRcdFx0Y29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdFx0XHRjaGVja2JveC50eXBlID0gJ2NoZWNrYm94Jztcblx0XHRcdFx0Y2hlY2tib3guY2hlY2tlZCA9IHRvRG9JdGVtLmNvbXBsZXRlO1xuXHRcdFx0XHRjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0dG9Eb0l0ZW0uY29tcGxldGUgPSBjaGVja2JveC5jaGVja2VkO1xuXHRcdFx0XHRcdHNhdmVUb0xvY2FsU3RvcmFnZShwcm9qZWN0cywgcHJvamVjdElkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdG5hbWUudGV4dENvbnRlbnQgPSB0b0RvSXRlbS5uYW1lO1xuXHRcdFx0XHRjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRkYXRlLnRleHRDb250ZW50ID0gYER1ZTogJHt0b0RvSXRlbS5kYXRlfWA7XG5cdFx0XHRcdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRwcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0b0RvSXRlbS5wcmlvcml0eX1gO1xuXHRcdFx0XHR0b0RvSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXHRcdFx0XHR0b0RvSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQobmFtZSk7XG5cdFx0XHRcdHRvRG9JdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkYXRlKTtcblx0XHRcdFx0dG9Eb0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblx0XHRcdFx0dG9Eb0xpc3QuYXBwZW5kQ2hpbGQodG9Eb0l0ZW1FbGVtZW50KTtcblx0XHRcdH0pO1xuXHRcdFx0bWFpblBhbmVsLmFwcGVuZENoaWxkKHRvRG9MaXN0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3Qgbm9Ub0RvTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRcdG5vVG9Eb01lc3NhZ2UudGV4dENvbnRlbnQgPSAnTm8gdG8tZG8gaXRlbXMgZm9yIHRoaXMgcHJvamVjdC4nO1xuXHRcdFx0bWFpblBhbmVsLmFwcGVuZENoaWxkKG5vVG9Eb01lc3NhZ2UpO1xuXHRcdH1cblxuXHRcdG1haW5QYW5lbERlc2Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fTtcblxuXHRjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuXHRcdGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cblx0XHRjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0cHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblx0XHRjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdHByb2plY3RJbnB1dC50eXBlID0gJ3RleHQnO1xuXHRcdHByb2plY3RJbnB1dC5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IE5hbWUnO1xuXHRcdGNvbnN0IHByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRwcm9qZWN0U3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0Jztcblx0XHRwcm9qZWN0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0Y3JlYXRlUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuXHRcdFx0cmVuZGVyUHJvamVjdHMoKTtcblx0XHRcdG1vZGFsLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdHByb2plY3RUYWIuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcblx0XHRwcm9qZWN0VGFiLmFwcGVuZENoaWxkKHByb2plY3RTdWJtaXRCdXR0b24pO1xuXG5cdFx0Y29uc3QgdG9Eb1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRvRG9UYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cdFx0Y29uc3QgdG9Eb05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0dG9Eb05hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuXHRcdHRvRG9OYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnVG9EbyBOYW1lJztcblx0XHRjb25zdCB0b0RvRGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHR0b0RvRGVzY0lucHV0LnR5cGUgPSAndGV4dCc7XG5cdFx0dG9Eb0Rlc2NJbnB1dC5wbGFjZWhvbGRlciA9ICdUb0RvIERlc2NyaXB0aW9uJztcblx0XHRjb25zdCB0b0RvRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHR0b0RvRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG5cdFx0Y29uc3QgdG9Eb1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblx0XHRjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xuXHRcdHByaW9yaXR5T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcblx0XHRcdGNvbnN0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0XHRwcmlvcml0eU9wdGlvbi52YWx1ZSA9IG9wdGlvbi50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb247XG5cdFx0XHR0b0RvUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbik7XG5cdFx0fSk7XG5cdFx0Y29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXHRcdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRcdGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdHByb2plY3RPcHRpb24udmFsdWUgPSBwcm9qZWN0LmlkO1xuXHRcdFx0cHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblx0XHRcdHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG5cdFx0fSk7XG5cdFx0Y29uc3QgdG9Eb1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHRvRG9TdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRvRG8nO1xuXHRcdHRvRG9TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZFByb2plY3RJZCA9IGdldElkRnJvbUxvY2FsU3RvcmFnZSgpO1xuXHRcdFx0Y3JlYXRlVG9Eb0l0ZW0oXG5cdFx0XHRcdHNlbGVjdGVkUHJvamVjdElkLFxuXHRcdFx0XHR0b0RvTmFtZUlucHV0LnZhbHVlLFxuXHRcdFx0XHR0b0RvRGVzY0lucHV0LnZhbHVlLFxuXHRcdFx0XHR0b0RvRGF0ZUlucHV0LnZhbHVlLFxuXHRcdFx0XHR0b0RvUHJpb3JpdHlJbnB1dC52YWx1ZVxuXHRcdFx0KTtcblx0XHRcdHJlbmRlclRvRG9zKHNlbGVjdGVkUHJvamVjdElkKTtcblx0XHRcdG1vZGFsLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdHRvRG9UYWIuYXBwZW5kQ2hpbGQodG9Eb05hbWVJbnB1dCk7XG5cdFx0dG9Eb1RhYi5hcHBlbmRDaGlsZCh0b0RvRGVzY0lucHV0KTtcblx0XHR0b0RvVGFiLmFwcGVuZENoaWxkKHRvRG9EYXRlSW5wdXQpO1xuXHRcdHRvRG9UYWIuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5SW5wdXQpO1xuXHRcdHRvRG9UYWIuYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdCk7XG5cdFx0dG9Eb1RhYi5hcHBlbmRDaGlsZCh0b0RvU3VibWl0QnV0dG9uKTtcblxuXHRcdGNvbnN0IHRhYkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0YWJCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ3RhYi1idXR0b25zJyk7XG5cdFx0Y29uc3QgcHJvamVjdFRhYkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdHByb2plY3RUYWJCdXR0b24udGV4dENvbnRlbnQgPSAnUHJvamVjdCc7XG5cdFx0cHJvamVjdFRhYkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRwcm9qZWN0VGFiQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0cHJvamVjdFRhYi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdHRvRG9UYWIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHByb2plY3RUYWJCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XHR0b0RvVGFiQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdH0pO1xuXHRcdGNvbnN0IHRvRG9UYWJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHR0b0RvVGFiQnV0dG9uLnRleHRDb250ZW50ID0gJ1RvRG8nO1xuXHRcdHRvRG9UYWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRwcm9qZWN0VGFiLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0b0RvVGFiLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0dG9Eb1RhYkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdHByb2plY3RUYWJCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0fSk7XG5cdFx0dGFiQnV0dG9ucy5hcHBlbmRDaGlsZChwcm9qZWN0VGFiQnV0dG9uKTtcblx0XHR0YWJCdXR0b25zLmFwcGVuZENoaWxkKHRvRG9UYWJCdXR0b24pO1xuXG5cdFx0bW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHRhYkJ1dHRvbnMpO1xuXHRcdG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGFiKTtcblx0XHRtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodG9Eb1RhYik7XG5cdFx0bW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblx0fTtcblx0Ly8gUmVuZGVyIHByb2plY3RzIGFuZCB0by1kbyBpdGVtcyBvbiBpbml0aWFsIGxvYWRcblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcblx0XHRyZW5kZXJQcm9qZWN0cygpO1xuXHRcdGNvbnN0IHNlbGVjdGVkUHJvamVjdElkID0gZ2V0SWRGcm9tTG9jYWxTdG9yYWdlKCk7XG5cdFx0aWYgKHNlbGVjdGVkUHJvamVjdElkKSB7XG5cdFx0XHRyZW5kZXJUb0RvcyhzZWxlY3RlZFByb2plY3RJZCk7XG5cdFx0fVxuXHR9O1xuXG5cdGluaXRpYWxpemUoKTtcblxuXHRhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TW9kYWwpO1xuXG5cdHJldHVybiB7XG5cdFx0cmVuZGVyUHJvamVjdHMsXG5cdFx0cmVuZGVyVG9Eb3MsXG5cdH07XG59KSgpO1xuXG5leHBvcnQgeyBVSUNvbnRyb2xsZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/preview.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/form/external/bootstrap-datetimepicker.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/form/external/bootstrap-datetimepicker.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * Datetimepicker for Bootstrap\n *\n * Copyright 2012 Stefan Petre\n * Improvements by Andrew Rowls\n * Licensed under the Apache License v2.0\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n */\n.datetimepicker {\n\tpadding: 4px;\n\tmargin-top: 1px;\n\t-webkit-border-radius: 4px;\n\t-moz-border-radius: 4px;\n\tborder-radius: 4px;\n\tdirection: ltr;\n}\n\n.datetimepicker-inline {\n\twidth: 220px;\n}\n\n.datetimepicker.datetimepicker-rtl {\n\tdirection: rtl;\n}\n\n.datetimepicker.datetimepicker-rtl table tr td span {\n\tfloat: right;\n}\n\n.datetimepicker-dropdown, .datetimepicker-dropdown-left {\n\ttop: 0;\n\tleft: 0;\n}\n\n[class*=\" datetimepicker-dropdown\"]:before {\n\tcontent: '';\n\tdisplay: inline-block;\n\tborder-left: 7px solid transparent;\n\tborder-right: 7px solid transparent;\n\tborder-bottom: 7px solid #cccccc;\n\tborder-bottom-color: rgba(0, 0, 0, 0.2);\n\tposition: absolute;\n}\n\n[class*=\" datetimepicker-dropdown\"]:after {\n\tcontent: '';\n\tdisplay: inline-block;\n\tborder-left: 6px solid transparent;\n\tborder-right: 6px solid transparent;\n\tborder-bottom: 6px solid #ffffff;\n\tposition: absolute;\n}\n\n[class*=\" datetimepicker-dropdown-top\"]:before {\n\tcontent: '';\n\tdisplay: inline-block;\n\tborder-left: 7px solid transparent;\n\tborder-right: 7px solid transparent;\n\tborder-top: 7px solid #cccccc;\n\tborder-top-color: rgba(0, 0, 0, 0.2);\n\tborder-bottom: 0;\n}\n\n[class*=\" datetimepicker-dropdown-top\"]:after {\n\tcontent: '';\n\tdisplay: inline-block;\n\tborder-left: 6px solid transparent;\n\tborder-right: 6px solid transparent;\n\tborder-top: 6px solid #ffffff;\n\tborder-bottom: 0;\n}\n\n.datetimepicker-dropdown-bottom-left:before {\n\ttop: -7px;\n\tright: 6px;\n}\n\n.datetimepicker-dropdown-bottom-left:after {\n\ttop: -6px;\n\tright: 7px;\n}\n\n.datetimepicker-dropdown-bottom-right:before {\n\ttop: -7px;\n\tleft: 6px;\n}\n\n.datetimepicker-dropdown-bottom-right:after {\n\ttop: -6px;\n\tleft: 7px;\n}\n\n.datetimepicker-dropdown-top-left:before {\n\tbottom: -7px;\n\tright: 6px;\n}\n\n.datetimepicker-dropdown-top-left:after {\n\tbottom: -6px;\n\tright: 7px;\n}\n\n.datetimepicker-dropdown-top-right:before {\n\tbottom: -7px;\n\tleft: 6px;\n}\n\n.datetimepicker-dropdown-top-right:after {\n\tbottom: -6px;\n\tleft: 7px;\n}\n\n.datetimepicker > div {\n\tdisplay: none;\n}\n\n.datetimepicker.minutes div.datetimepicker-minutes {\n\tdisplay: block;\n}\n\n.datetimepicker.hours div.datetimepicker-hours {\n\tdisplay: block;\n}\n\n.datetimepicker.days div.datetimepicker-days {\n\tdisplay: block;\n}\n\n.datetimepicker.months div.datetimepicker-months {\n\tdisplay: block;\n}\n\n.datetimepicker.years div.datetimepicker-years {\n\tdisplay: block;\n}\n\n.datetimepicker table {\n\tmargin: 0;\n}\n\n.datetimepicker  td,\n.datetimepicker th {\n\ttext-align: center;\n\twidth: 20px;\n\theight: 20px;\n\t-webkit-border-radius: 4px;\n\t-moz-border-radius: 4px;\n\tborder-radius: 4px;\n\tborder: none;\n}\n\n.table-striped .datetimepicker table tr td,\n.table-striped .datetimepicker table tr th {\n\tbackground-color: transparent;\n}\n\n.datetimepicker table tr td.minute:hover {\n\tbackground: #eeeeee;\n\tcursor: pointer;\n}\n\n.datetimepicker table tr td.hour:hover {\n\tbackground: #eeeeee;\n\tcursor: pointer;\n}\n\n.datetimepicker table tr td.day:hover {\n\tbackground: #eeeeee;\n\tcursor: pointer;\n}\n\n.datetimepicker table tr td.old,\n.datetimepicker table tr td.new {\n\tcolor: #999999;\n}\n\n.datetimepicker table tr td.disabled,\n.datetimepicker table tr td.disabled:hover {\n\tbackground: none;\n\tcolor: #999999;\n\tcursor: default;\n}\n\n.datetimepicker table tr td.today,\n.datetimepicker table tr td.today:hover,\n.datetimepicker table tr td.today.disabled,\n.datetimepicker table tr td.today.disabled:hover {\n\tbackground-color: #fde19a;\n\tbackground-image: -moz-linear-gradient(top, #fdd49a, #fdf59a);\n\tbackground-image: -ms-linear-gradient(top, #fdd49a, #fdf59a);\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fdd49a), to(#fdf59a));\n\tbackground-image: -webkit-linear-gradient(top, #fdd49a, #fdf59a);\n\tbackground-image: -o-linear-gradient(top, #fdd49a, #fdf59a);\n\tbackground-image: linear-gradient(to bottom, #fdd49a, #fdf59a);\n\tbackground-repeat: repeat-x;\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fdd49a', endColorstr='#fdf59a', GradientType=0);\n\tborder-color: #fdf59a #fdf59a #fbed50;\n\tborder-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n\tfilter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n}\n\n.datetimepicker table tr td.today:hover,\n.datetimepicker table tr td.today:hover:hover,\n.datetimepicker table tr td.today.disabled:hover,\n.datetimepicker table tr td.today.disabled:hover:hover,\n.datetimepicker table tr td.today:active,\n.datetimepicker table tr td.today:hover:active,\n.datetimepicker table tr td.today.disabled:active,\n.datetimepicker table tr td.today.disabled:hover:active,\n.datetimepicker table tr td.today.active,\n.datetimepicker table tr td.today:hover.active,\n.datetimepicker table tr td.today.disabled.active,\n.datetimepicker table tr td.today.disabled:hover.active,\n.datetimepicker table tr td.today.disabled,\n.datetimepicker table tr td.today:hover.disabled,\n.datetimepicker table tr td.today.disabled.disabled,\n.datetimepicker table tr td.today.disabled:hover.disabled,\n.datetimepicker table tr td.today[disabled],\n.datetimepicker table tr td.today:hover[disabled],\n.datetimepicker table tr td.today.disabled[disabled],\n.datetimepicker table tr td.today.disabled:hover[disabled] {\n\tbackground-color: #fdf59a;\n}\n\n.datetimepicker table tr td.today:active,\n.datetimepicker table tr td.today:hover:active,\n.datetimepicker table tr td.today.disabled:active,\n.datetimepicker table tr td.today.disabled:hover:active,\n.datetimepicker table tr td.today.active,\n.datetimepicker table tr td.today:hover.active,\n.datetimepicker table tr td.today.disabled.active,\n.datetimepicker table tr td.today.disabled:hover.active {\n\tbackground-color: #fbf069;\n}\n\n.datetimepicker table tr td.active,\n.datetimepicker table tr td.active:hover,\n.datetimepicker table tr td.active.disabled,\n.datetimepicker table tr td.active.disabled:hover {\n\tbackground-color: #006dcc;\n\tbackground-image: -moz-linear-gradient(top, #0088cc, #0044cc);\n\tbackground-image: -ms-linear-gradient(top, #0088cc, #0044cc);\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%, from(#0088cc), to(#0044cc));\n\tbackground-image: -webkit-linear-gradient(top, #0088cc, #0044cc);\n\tbackground-image: -o-linear-gradient(top, #0088cc, #0044cc);\n\tbackground-image: linear-gradient(to bottom, #0088cc, #0044cc);\n\tbackground-repeat: repeat-x;\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0044cc', GradientType=0);\n\tborder-color: #0044cc #0044cc #002a80;\n\tborder-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n\tfilter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n\tcolor: #ffffff;\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n\n.datetimepicker table tr td.active:hover,\n.datetimepicker table tr td.active:hover:hover,\n.datetimepicker table tr td.active.disabled:hover,\n.datetimepicker table tr td.active.disabled:hover:hover,\n.datetimepicker table tr td.active:active,\n.datetimepicker table tr td.active:hover:active,\n.datetimepicker table tr td.active.disabled:active,\n.datetimepicker table tr td.active.disabled:hover:active,\n.datetimepicker table tr td.active.active,\n.datetimepicker table tr td.active:hover.active,\n.datetimepicker table tr td.active.disabled.active,\n.datetimepicker table tr td.active.disabled:hover.active,\n.datetimepicker table tr td.active.disabled,\n.datetimepicker table tr td.active:hover.disabled,\n.datetimepicker table tr td.active.disabled.disabled,\n.datetimepicker table tr td.active.disabled:hover.disabled,\n.datetimepicker table tr td.active[disabled],\n.datetimepicker table tr td.active:hover[disabled],\n.datetimepicker table tr td.active.disabled[disabled],\n.datetimepicker table tr td.active.disabled:hover[disabled] {\n\tbackground-color: #0044cc;\n}\n\n.datetimepicker table tr td.active:active,\n.datetimepicker table tr td.active:hover:active,\n.datetimepicker table tr td.active.disabled:active,\n.datetimepicker table tr td.active.disabled:hover:active,\n.datetimepicker table tr td.active.active,\n.datetimepicker table tr td.active:hover.active,\n.datetimepicker table tr td.active.disabled.active,\n.datetimepicker table tr td.active.disabled:hover.active {\n\tbackground-color: #003399;\n}\n\n.datetimepicker table tr td span {\n\tdisplay: block;\n\twidth: 23%;\n\theight: 54px;\n\tline-height: 54px;\n\tfloat: left;\n\tmargin: 1%;\n\tcursor: pointer;\n\t-webkit-border-radius: 4px;\n\t-moz-border-radius: 4px;\n\tborder-radius: 4px;\n}\n\n.datetimepicker .datetimepicker-hours span {\n\theight: 26px;\n\tline-height: 26px;\n}\n\n.datetimepicker .datetimepicker-hours table tr td span.hour_am,\n.datetimepicker .datetimepicker-hours table tr td span.hour_pm {\n\twidth: 14.6%;\n}\n\n.datetimepicker .datetimepicker-hours fieldset legend,\n.datetimepicker .datetimepicker-minutes fieldset legend {\n\tmargin-bottom: inherit;\n\tline-height: 30px;\n}\n\n.datetimepicker .datetimepicker-minutes span {\n\theight: 26px;\n\tline-height: 26px;\n}\n\n.datetimepicker table tr td span:hover {\n\tbackground: #eeeeee;\n}\n\n.datetimepicker table tr td span.disabled,\n.datetimepicker table tr td span.disabled:hover {\n\tbackground: none;\n\tcolor: #999999;\n\tcursor: default;\n}\n\n.datetimepicker table tr td span.active,\n.datetimepicker table tr td span.active:hover,\n.datetimepicker table tr td span.active.disabled,\n.datetimepicker table tr td span.active.disabled:hover {\n\tbackground-color: #006dcc;\n\tbackground-image: -moz-linear-gradient(top, #0088cc, #0044cc);\n\tbackground-image: -ms-linear-gradient(top, #0088cc, #0044cc);\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%, from(#0088cc), to(#0044cc));\n\tbackground-image: -webkit-linear-gradient(top, #0088cc, #0044cc);\n\tbackground-image: -o-linear-gradient(top, #0088cc, #0044cc);\n\tbackground-image: linear-gradient(to bottom, #0088cc, #0044cc);\n\tbackground-repeat: repeat-x;\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0044cc', GradientType=0);\n\tborder-color: #0044cc #0044cc #002a80;\n\tborder-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n\tfilter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n\tcolor: #ffffff;\n\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n\n.datetimepicker table tr td span.active:hover,\n.datetimepicker table tr td span.active:hover:hover,\n.datetimepicker table tr td span.active.disabled:hover,\n.datetimepicker table tr td span.active.disabled:hover:hover,\n.datetimepicker table tr td span.active:active,\n.datetimepicker table tr td span.active:hover:active,\n.datetimepicker table tr td span.active.disabled:active,\n.datetimepicker table tr td span.active.disabled:hover:active,\n.datetimepicker table tr td span.active.active,\n.datetimepicker table tr td span.active:hover.active,\n.datetimepicker table tr td span.active.disabled.active,\n.datetimepicker table tr td span.active.disabled:hover.active,\n.datetimepicker table tr td span.active.disabled,\n.datetimepicker table tr td span.active:hover.disabled,\n.datetimepicker table tr td span.active.disabled.disabled,\n.datetimepicker table tr td span.active.disabled:hover.disabled,\n.datetimepicker table tr td span.active[disabled],\n.datetimepicker table tr td span.active:hover[disabled],\n.datetimepicker table tr td span.active.disabled[disabled],\n.datetimepicker table tr td span.active.disabled:hover[disabled] {\n\tbackground-color: #0044cc;\n}\n\n.datetimepicker table tr td span.active:active,\n.datetimepicker table tr td span.active:hover:active,\n.datetimepicker table tr td span.active.disabled:active,\n.datetimepicker table tr td span.active.disabled:hover:active,\n.datetimepicker table tr td span.active.active,\n.datetimepicker table tr td span.active:hover.active,\n.datetimepicker table tr td span.active.disabled.active,\n.datetimepicker table tr td span.active.disabled:hover.active {\n\tbackground-color: #003399;\n}\n\n.datetimepicker table tr td span.old {\n\tcolor: #999999;\n}\n\n.datetimepicker th.switch {\n\twidth: 145px;\n}\n\n.datetimepicker th span.glyphicon {\n\tpointer-events: none;\n}\n\n.datetimepicker thead tr:first-child th,\n.datetimepicker tfoot th {\n\tcursor: pointer;\n}\n\n.datetimepicker thead tr:first-child th:hover,\n.datetimepicker tfoot th:hover {\n\tbackground: #eeeeee;\n}\n\n.input-append.date .add-on i,\n.input-prepend.date .add-on i,\n.input-group.date .input-group-addon span {\n\tcursor: pointer;\n\twidth: 14px;\n\theight: 14px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/*!************************************************!*\
  !*** ./node_modules/style-loader/addStyles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/undo-manager/lib/undomanager.js":
/*!******************************************************!*\
  !*** ./node_modules/undo-manager/lib/undomanager.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Simple Javascript undo and redo.
https://github.com/ArthurClemens/Javascript-Undo-Manager
*/

;(function() {

	'use strict';

    function removeFromTo(array, from, to) {
        array.splice(from,
            !to ||
            1 + to - from + (!(to < 0 ^ from >= 0) && (to < 0 || -1) * array.length));
        return array.length;
    }

    var UndoManager = function() {

        var commands = [],
            index = -1,
            limit = 0,
            isExecuting = false,
            callback,
            
            // functions
            execute;

        execute = function(command, action) {
            if (!command || typeof command[action] !== "function") {
                return this;
            }
            isExecuting = true;

            command[action]();

            isExecuting = false;
            return this;
        };

        return {

            /*
            Add a command to the queue.
            */
            add: function (command) {
                if (isExecuting) {
                    return this;
                }
                // if we are here after having called undo,
                // invalidate items higher on the stack
                commands.splice(index + 1, commands.length - index);

                commands.push(command);
                
                // if limit is set, remove items from the start
                if (limit && commands.length > limit) {
                    removeFromTo(commands, 0, -(limit+1));
                }
                
                // set the current index to the end
                index = commands.length - 1;
                if (callback) {
                    callback();
                }
                return this;
            },

            /*
            Pass a function to be called on undo and redo actions.
            */
            setCallback: function (callbackFunc) {
                callback = callbackFunc;
            },

            /*
            Perform undo: call the undo function at the current index and decrease the index by 1.
            */
            undo: function () {
                var command = commands[index];
                if (!command) {
                    return this;
                }
                execute(command, "undo");
                index -= 1;
                if (callback) {
                    callback();
                }
                return this;
            },

            /*
            Perform redo: call the redo function at the next index and increase the index by 1.
            */
            redo: function () {
                var command = commands[index + 1];
                if (!command) {
                    return this;
                }
                execute(command, "redo");
                index += 1;
                if (callback) {
                    callback();
                }
                return this;
            },

            /*
            Clears the memory, losing all stored states. Reset the index.
            */
            clear: function () {
                var prev_size = commands.length;

                commands = [];
                index = -1;

                if (callback && (prev_size > 0)) {
                    callback();
                }
            },

            hasUndo: function () {
                return index !== -1;
            },

            hasRedo: function () {
                return index < (commands.length - 1);
            },

            getCommands: function () {
                return commands;
            },

            getIndex: function() {
                return index;
            },
            
            setLimit: function (l) {
                limit = l;
            }
        };
    };

	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return UndoManager;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./src/MsgBox.js":
/*!***********************!*\
  !*** ./src/MsgBox.js ***!
  \***********************/
/*! exports provided: alert, confirm, dialog, showDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirm", function() { return confirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialog", function() { return dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDialog", function() { return showDialog; });
/**
 * Created by jacky on 2016/7/9.
 */
function alert(msg) {
    const dialog = buildDialog('消息提示', msg);
    dialog.modal('show');
};

function confirm(msg, callback) {
    const dialog = buildDialog('确认提示', msg, [{
        name: '确认',
        click: function () {
            callback.call(this);
        }
    }]);
    dialog.modal('show');
};

function dialog(title, content, callback) {
    const dialog = buildDialog(title, content, [{
        name: '确认',
        click: function () {
            callback.call(this);
        }
    }]);
    dialog.modal('show');
};

function showDialog(title, dialogContent, buttons, events, large) {
    const dialog = buildDialog(title, dialogContent, buttons, large);
    dialog.modal('show');
    if (events) {
        for (let event of events) {
            dialog.on(event.name, event.callback);
        }
    }
};

function buildDialog(title, dialogContent, buttons, large) {
    const className = 'modal-dialog' + (large ? ' modal-lg' : '');
    let modal = $(`<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true"></div>`);
    let dialog = $(`<div class="${className}"></div>`);
    modal.append(dialog);
    let content = $(`<div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
               &times;
            </button>
            <h4 class="modal-title">
               ${title}
            </h4>
         </div>
         <div class="modal-body">
            ${typeof dialogContent === 'string' ? dialogContent : ''}
         </div>`);
    if (typeof dialogContent === 'object') {
        content.find('.modal-body').append(dialogContent);
    }
    dialog.append(content);
    let footer = $(`<div class="modal-footer"></div>`);
    content.append(footer);
    if (buttons) {
        buttons.forEach((btn, index) => {
            let button = $(`<button type="button" class="btn btn-default">${btn.name}</button>`);
            button.click(function (e) {
                btn.click.call(this);
                if (!btn.holdDialog) {
                    modal.modal('hide');
                }
            }.bind(this));
            footer.append(button);
        });
    } else {
        let okBtn = $(`<button type="button" class="btn btn-default" data-dismiss="modal">确定</button>`);
        footer.append(okBtn);
    }

    modal.on("show.bs.modal", function () {
        var index = 1050;
        $(document).find('.modal').each(function (i, d) {
            var zIndex = $(d).css('z-index');
            if (zIndex && zIndex !== '' && !isNaN(zIndex)) {
                zIndex = parseInt(zIndex);
                if (zIndex > index) {
                    index = zIndex;
                }
            }
        });
        index++;
        modal.css({ 'z-index': index });
    });
    return modal;
};

/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/*! exports provided: showLoading, hideLoading, resetTableData, buildNewCellDef, tableToXml, encode, getParameter, mmToPoint, pointToMM, pointToPixel, pixelToPoint, setDirty, resetDirty, formatDate, buildPageSizeList, undoManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return hideLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetTableData", function() { return resetTableData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildNewCellDef", function() { return buildNewCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableToXml", function() { return tableToXml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameter", function() { return getParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mmToPoint", function() { return mmToPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointToMM", function() { return pointToMM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointToPixel", function() { return pointToPixel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pixelToPoint", function() { return pixelToPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDirty", function() { return setDirty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetDirty", function() { return resetDirty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPageSizeList", function() { return buildPageSizeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoManager", function() { return undoManager; });
/* harmony import */ var undo_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! undo-manager */ "./node_modules/undo-manager/lib/undomanager.js");
/* harmony import */ var undo_manager__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(undo_manager__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MsgBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgBox.js */ "./src/MsgBox.js");
/**
 * Created by Jacky.gao on 2016/7/27.
 */



function showLoading() {
    const url = window._server + '/res/ureport-asserts/icons/loading.gif';
    const h = $(window).height() / 2,
          w = $(window).width() / 2;
    const cover = $(`<div class="ureport-loading-cover" style="position: absolute;left: 0px;top: 0px;width:${w * 2}px;height:${h * 2}px;z-index: 1199;background:rgba(222,222,222,.5)"></div>`);
    $(document.body).append(cover);
    const loading = $(`<div class="ureport-loading" style="text-align: center;position: absolute;z-index: 1120;left: ${w - 35}px;top: ${h - 35}px;"><img src="${url}">
    <div style="margin-top: 5px">打印数据加载中...</div></div>`);
    $(document.body).append(loading);
};

function hideLoading() {
    $('.ureport-loading-cover').remove();
    $('.ureport-loading').remove();
};

function resetTableData(hot) {
    const countCols = hot.countCols(),
          countRows = hot.countRows(),
          context = hot.context,
          data = [];
    for (let i = 0; i < countRows; i++) {
        let rowData = [];
        for (let j = 0; j < countCols; j++) {
            let td = hot.getCell(i, j);
            if (!td) {
                rowData.push("");
                continue;
            }
            let cellDef = context.getCell(i, j);
            if (cellDef) {
                let valueType = cellDef.value.type,
                    value = cellDef.value;
                if (valueType === 'dataset') {
                    let text = value.datasetName + "." + value.aggregate + "(";
                    let prop = value.property;
                    if (prop.length > 13) {
                        text += prop.substring(0, 10) + '..)';
                    } else {
                        text += prop + ")";
                    }
                    rowData.push(text);
                } else if (valueType === 'expression') {
                    let v = value.value || '';
                    if (v.length > 16) {
                        v = v.substring(0, 13) + '...';
                    }
                    rowData.push(v);
                } else {
                    rowData.push(value.value || "");
                }
            } else {
                rowData.push("");
            }
        }
        data.push(rowData);
    }
    hot.loadData(data);
};

function buildNewCellDef(rowNumber, columnNumber) {
    let cellDef = { rowNumber, columnNumber, expand: 'None', cellStyle: { fontSize: 9, forecolor: '0,0,0', fontFamily: '宋体', align: 'center', valign: 'middle' }, value: { type: 'simple', value: '' } };
    return cellDef;
};

function tableToXml(context) {
    const hot = context.hot;
    const countRows = hot.countRows(),
          countCols = hot.countCols();
    let xml = `<?xml version="1.0" encoding="UTF-8"?><ureport>`;
    let rowsXml = '',
        columnXml = '';
    const rowHeaders = context.rowHeaders;
    for (let i = 0; i < countRows; i++) {
        let height = hot.getRowHeight(i) || 16;
        height = pixelToPoint(height);
        let band = null;
        for (let header of rowHeaders) {
            if (header.rowNumber === i) {
                band = header.band;
                break;
            }
        }
        if (band) {
            rowsXml += `<row row-number="${i + 1}" height="${height}" band="${band}"/>`;
        } else {
            rowsXml += `<row row-number="${i + 1}" height="${height}"/>`;
        }
    }
    for (let i = 0; i < countCols; i++) {
        let width = hot.getColWidth(i) || 30;
        width = pixelToPoint(width);
        columnXml += `<column col-number="${i + 1}" width="${width}"/>`;
    }
    let cellXml = '',
        spanData = [];
    for (let i = 0; i < countRows; i++) {
        for (let j = 0; j < countCols; j++) {
            if (spanData.indexOf(i + "," + j) > -1) {
                continue;
            }
            let cellDef = context.getCell(i, j);
            if (!cellDef) {
                continue;
            }
            let cellName = context.getCellName(i, j);
            cellXml += `<cell expand="${cellDef.expand}" name="${cellName}" row="${i + 1}" col="${j + 1}"`;
            if (cellDef.leftParentCellName && cellDef.leftParentCellName !== '') {
                cellXml += ` left-cell="${cellDef.leftParentCellName}"`;
            }
            if (cellDef.topParentCellName && cellDef.topParentCellName !== '') {
                cellXml += ` top-cell="${cellDef.topParentCellName}"`;
            }
            if (cellDef.fillBlankRows) {
                cellXml += ` fill-blank-rows="${cellDef.fillBlankRows}"`;
                if (cellDef.multiple) {
                    cellXml += ` multiple="${cellDef.multiple}"`;
                }
            }

            const span = getSpan(hot, i, j);
            let rowSpan = span.rowspan,
                colSpan = span.colspan;
            let startRow = i,
                endRow = i + rowSpan - 1,
                startCol = j,
                endCol = j + colSpan - 1;
            for (let r = startRow; r <= endRow; r++) {
                for (let c = startCol; c <= endCol; c++) {
                    spanData.push(r + "," + c);
                }
            }
            if (rowSpan > 1) {
                cellXml += ` row-span="${rowSpan}"`;
            }
            if (colSpan > 1) {
                cellXml += ` col-span="${colSpan}"`;
            }

            if (cellDef.linkUrl && cellDef.linkUrl !== '') {
                cellXml += ` link-url="${cellDef.linkUrl}"`;
            }
            if (cellDef.linkTargetWindow && cellDef.linkTargetWindow !== '') {
                cellXml += ` link-target-window="${cellDef.linkTargetWindow}"`;
            }

            cellXml += '>';
            let cellStyle = cellDef.cellStyle;
            cellXml += buildCellStyle(cellStyle);
            if (cellDef.linkParameters && cellDef.linkParameters.length > 0) {
                for (let param of cellDef.linkParameters) {
                    cellXml += `<link-parameter name="${param.name}">`;
                    cellXml += `<value><![CDATA[${param.value}]]></value>`;
                    cellXml += `</link-parameter>`;
                }
            }
            const value = cellDef.value;
            if (value.type === 'dataset') {
                let msg = null;
                if (!value.datasetName) {
                    msg = `${cellName}单元格数据集属性不能为空！`;
                }
                if (!msg && !value.property) {
                    msg = `${cellName}单元格属性不能为空！`;
                }
                if (!msg && !value.aggregate) {
                    msg = `${cellName}单元格聚合方式属性不能为空！`;
                }
                if (msg) {
                    Object(_MsgBox_js__WEBPACK_IMPORTED_MODULE_1__["alert"])(msg);
                    throw msg;
                }
                const mappingType = value.mappingType || 'simple';
                cellXml += `<dataset-value dataset-name="${encode(value.datasetName)}" aggregate="${value.aggregate}" property="${value.property}" order="${value.order}" mapping-type="${mappingType}"`;
                if (mappingType === 'dataset') {
                    cellXml += ` mapping-dataset="${value.mappingDataset}" mapping-key-property="${value.mappingKeyProperty}" mapping-value-property="${value.mappingValueProperty}"`;
                }
                cellXml += '>';
                cellXml += buildConditions(value.conditions);
                if (value.aggregate === 'customgroup') {
                    const groupItems = value.groupItems;
                    for (let groupItem of groupItems) {
                        cellXml += `<group-item name="${groupItem.name}">`;
                        for (let condition of groupItem.conditions) {
                            cellXml += `<condition property="${condition.left}" op="${encode(condition.operation || condition.op)}" id="${condition.id}"`;
                            if (condition.join) {
                                cellXml += ` join="${condition.join}">`;
                            } else {
                                cellXml += `>`;
                            }
                            cellXml += `<value><![CDATA[${condition.right}]]></value>`;
                            cellXml += `</condition>`;
                        }
                        cellXml += '</group-item>';
                    }
                }
                if (mappingType === 'simple') {
                    const mappingItems = value.mappingItems;
                    if (mappingItems && mappingItems.length > 0) {
                        for (let mappingItem of mappingItems) {
                            cellXml += `<mapping-item value="${encode(mappingItem.value)}" label="${encode(mappingItem.label)}"/>`;
                        }
                    }
                }
                cellXml += `</dataset-value>`;
            } else if (value.type === 'expression') {
                if (!value.value || value.value === '') {
                    const msg = `${cellName}单元格表达式不能为空`;
                    Object(_MsgBox_js__WEBPACK_IMPORTED_MODULE_1__["alert"])(msg);
                    throw msg;
                }
                cellXml += `<expression-value>`;
                cellXml += `<![CDATA[${value.value}]]>`;
                cellXml += `</expression-value>`;
            } else if (value.type === 'simple') {
                cellXml += `<simple-value>`;
                cellXml += `<![CDATA[${value.value || ''}]]>`;
                cellXml += `</simple-value>`;
            } else if (value.type === 'image') {
                cellXml += `<image-value source="${value.source}"`;
                if (value.width) {
                    cellXml += ` width="${value.width}"`;
                }
                if (value.height) {
                    cellXml += ` height="${value.height}"`;
                }
                cellXml += `>`;
                cellXml += `<text>`;
                cellXml += `<![CDATA[${value.value}]]>`;
                cellXml += `</text>`;
                cellXml += `</image-value>`;
            } else if (value.type === 'zxing') {
                cellXml += `<zxing-value source="${value.source}" category="${value.category}" width="${value.width}" height="${value.height}"`;
                if (value.format) {
                    cellXml += ` format="${value.format}"`;
                }
                cellXml += `>`;
                cellXml += `<text>`;
                cellXml += `<![CDATA[${value.value}]]>`;
                cellXml += `</text>`;
                cellXml += `</zxing-value>`;
            } else if (value.type === 'slash') {
                cellXml += `<slash-value>`;
                const slashes = value.slashes;
                for (let slash of slashes) {
                    cellXml += `<slash text="${slash.text}" x="${slash.x}" y="${slash.y}" degree="${slash.degree}"/>`;
                }
                cellXml += `<base64-data>`;
                cellXml += `<![CDATA[${value.base64Data}]]>`;
                cellXml += `</base64-data>`;
                cellXml += `</slash-value>`;
            } else if (value.type === 'chart') {
                cellXml += `<chart-value>`;
                const chart = value.chart;
                const dataset = chart.dataset;
                cellXml += `<dataset dataset-name="${dataset.datasetName}" type="${dataset.type}"`;
                if (dataset.categoryProperty) {
                    cellXml += ` category-property="${dataset.categoryProperty}"`;
                }
                if (dataset.seriesProperty) {
                    cellXml += ` series-property="${dataset.seriesProperty}"`;
                }
                if (dataset.seriesType) {
                    cellXml += ` series-type="${dataset.seriesType}"`;
                }
                if (dataset.seriesText) {
                    cellXml += ` series-text="${dataset.seriesText}"`;
                }
                if (dataset.valueProperty) {
                    cellXml += ` value-property="${dataset.valueProperty}"`;
                }
                if (dataset.rProperty) {
                    cellXml += ` r-property="${dataset.rProperty}"`;
                }
                if (dataset.xProperty) {
                    cellXml += ` x-property="${dataset.xProperty}"`;
                }
                if (dataset.yProperty) {
                    cellXml += ` y-property="${dataset.yProperty}"`;
                }
                if (dataset.collectType) {
                    cellXml += ` collect-type="${dataset.collectType}"`;
                }
                cellXml += `/>`;
                const xaxes = chart.xaxes;
                if (xaxes) {
                    cellXml += `<xaxes`;
                    if (xaxes.rotation) {
                        cellXml += ` rotation="${xaxes.rotation}"`;
                    }
                    cellXml += `>`;
                    const scaleLabel = xaxes.scaleLabel;
                    if (scaleLabel) {
                        cellXml += `<scale-label display="${scaleLabel.display}"`;
                        if (scaleLabel.labelString) {
                            cellXml += ` label-string="${scaleLabel.labelString}"`;
                        }
                        cellXml += `/>`;
                    }
                    cellXml += `</xaxes>`;
                }
                const yaxes = chart.yaxes;
                if (yaxes) {
                    cellXml += `<yaxes`;
                    if (yaxes.rotation) {
                        cellXml += ` rotation="${yaxes.rotation}"`;
                    }
                    cellXml += `>`;
                    const scaleLabel = yaxes.scaleLabel;
                    if (scaleLabel) {
                        cellXml += `<scale-label display="${scaleLabel.display}"`;
                        if (scaleLabel.labelString) {
                            cellXml += ` label-string="${scaleLabel.labelString}"`;
                        }
                        cellXml += `/>`;
                    }
                    cellXml += `</yaxes>`;
                }
                const options = chart.options;
                if (options) {
                    for (let option of options) {
                        cellXml += `<option type="${option.type}"`;
                        if (option.position) {
                            cellXml += ` position="${option.position}"`;
                        }
                        if (option.display !== undefined && option.display !== null) {
                            cellXml += ` display="${option.display}"`;
                        }
                        if (option.duration) {
                            cellXml += ` duration="${option.duration}"`;
                        }
                        if (option.easing) {
                            cellXml += ` easing="${option.easing}"`;
                        }
                        if (option.text) {
                            cellXml += ` text="${option.text}"`;
                        }
                        cellXml += `/>`;
                    }
                }
                const plugins = chart.plugins || [];
                for (let plugin of plugins) {
                    cellXml += `<plugin name="${plugin.name}" display="${plugin.display}"/>`;
                }
                if (plugins) {}
                cellXml += `</chart-value>`;
            }
            const propertyConditions = cellDef.conditionPropertyItems || [];
            for (let pc of propertyConditions) {
                cellXml += `<condition-property-item name="${pc.name}"`;
                const rowHeight = pc.rowHeight;
                if (rowHeight !== null && rowHeight !== undefined && rowHeight !== -1) {
                    cellXml += ` row-height="${rowHeight}"`;
                }
                const colWidth = pc.colWidth;
                if (colWidth !== null && colWidth !== undefined && colWidth !== -1) {
                    cellXml += ` col-width="${colWidth}"`;
                }
                if (pc.newValue && pc.newValue !== '') {
                    cellXml += ` new-value="${pc.newValue}"`;
                }
                if (pc.linkUrl && pc.linkUrl !== '') {
                    cellXml += ` link-url="${pc.linkUrl}"`;
                    let targetWindow = pc.linkTargetWindow;
                    if (!targetWindow || targetWindow === '') {
                        targetWindow = "_self";
                    }
                    cellXml += ` link-target-window="${pc.linkTargetWindow}"`;
                }
                cellXml += `>`;
                const paging = pc.paging;
                if (paging) {
                    cellXml += `<paging position="${paging.position}" line="${paging.line}"/>`;
                }
                if (pc.linkParameters && pc.linkParameters.length > 0) {
                    for (let param of pc.linkParameters) {
                        cellXml += `<link-parameter name="${param.name}">`;
                        cellXml += `<value><![CDATA[${param.value}]]></value>`;
                        cellXml += `</link-parameter>`;
                    }
                }
                const style = pc.cellStyle;
                if (style) {
                    cellXml += buildCellStyle(style, true);
                }
                cellXml += buildConditions(pc.conditions);
                cellXml += `</condition-property-item>`;
            }
            cellXml += '</cell>';
        }
    }
    xml += cellXml;
    xml += rowsXml;
    xml += columnXml;
    const header = context.reportDef.header;
    if (header && (header.left || header.center || header.right)) {
        xml += '<header ';
        if (header.fontFamily) {
            xml += ` font-family="${header.fontFamily}"`;
        }
        if (header.fontSize) {
            xml += ` font-size="${header.fontSize}"`;
        }
        if (header.forecolor) {
            xml += ` forecolor="${header.forecolor}"`;
        }
        if (header.bold) {
            xml += ` bold="${header.bold}"`;
        }
        if (header.italic) {
            xml += ` italic="${header.italic}"`;
        }
        if (header.underline) {
            xml += ` underline="${header.underline}"`;
        }
        if (header.margin) {
            xml += ` margin="${header.margin}"`;
        }
        xml += '>';
        if (header.left) {
            xml += `<left><![CDATA[${header.left}]]></left>`;
        }
        if (header.center) {
            xml += `<center><![CDATA[${header.center}]]></center>`;
        }
        if (header.right) {
            xml += `<right><![CDATA[${header.right}]]></right>`;
        }
        xml += '</header>';
    }
    const footer = context.reportDef.footer;
    if (footer && (footer.left || footer.center || footer.right)) {
        xml += '<footer ';
        if (footer.fontFamily) {
            xml += ` font-family="${footer.fontFamily}"`;
        }
        if (footer.fontSize) {
            xml += ` font-size="${footer.fontSize}"`;
        }
        if (footer.forecolor) {
            xml += ` forecolor="${footer.forecolor}"`;
        }
        if (footer.bold) {
            xml += ` bold="${footer.bold}"`;
        }
        if (footer.italic) {
            xml += ` italic="${footer.italic}"`;
        }
        if (footer.underline) {
            xml += ` underline="${footer.underline}"`;
        }
        if (footer.margin) {
            xml += ` margin="${footer.margin}"`;
        }
        xml += '>';
        if (footer.left) {
            xml += `<left><![CDATA[${footer.left}]]></left>`;
        }
        if (footer.center) {
            xml += `<center><![CDATA[${footer.center}]]></center>`;
        }
        if (footer.right) {
            xml += `<right><![CDATA[${footer.right}]]></right>`;
        }
        xml += '</footer>';
    }
    let datasourceXml = "";
    const datasources = context.reportDef.datasources;
    for (let datasource of datasources) {
        let ds = `<datasource name="${encode(datasource.name)}" type="${datasource.type}"`;
        let type = datasource.type;
        if (type === 'jdbc') {
            ds += ` username="${encode(datasource.username)}"`;
            ds += ` password="${encode(datasource.password)}"`;
            ds += ` url="${encode(datasource.url)}"`;
            ds += ` driver="${datasource.driver}"`;
            ds += '>';
            for (let dataset of datasource.datasets) {
                ds += `<dataset name="${encode(dataset.name)}" type="sql">`;
                ds += `<sql><![CDATA[${dataset.sql}]]></sql>`;
                for (let field of dataset.fields) {
                    ds += `<field name="${field.name}"/>`;
                }
                for (let parameter of dataset.parameters) {
                    ds += `<parameter name="${encode(parameter.name)}" type="${parameter.type}" default-value="${encode(parameter.defaultValue)}"/>`;
                }
                ds += `</dataset>`;
            }
        } else if (type === 'spring') {
            ds += ` bean="${datasource.beanId}">`;
            for (let dataset of datasource.datasets) {
                ds += `<dataset name="${encode(dataset.name)}" type="bean" method="${dataset.method}" clazz="${dataset.clazz}">`;
                for (let field of dataset.fields) {
                    ds += `<field name="${field.name}"/>`;
                }
                ds += `</dataset>`;
            }
        } else if (type === 'buildin') {
            ds += '>';
            for (let dataset of datasource.datasets) {
                ds += `<dataset name="${encode(dataset.name)}" type="sql">`;
                ds += `<sql><![CDATA[${dataset.sql}]]></sql>`;
                for (let field of dataset.fields) {
                    ds += `<field name="${field.name}"/>`;
                }
                for (let parameter of dataset.parameters) {
                    ds += `<parameter name="${parameter.name}" type="${parameter.type}" default-value="${parameter.defaultValue}"/>`;
                }
                ds += `</dataset>`;
            }
        }
        ds += "</datasource>";
        datasourceXml += ds;
    }
    xml += datasourceXml;
    const paper = context.reportDef.paper;
    let htmlIntervalRefreshValue = 0;
    if (paper.htmlIntervalRefreshValue !== null && paper.htmlIntervalRefreshValue !== undefined) {
        htmlIntervalRefreshValue = paper.htmlIntervalRefreshValue;
    }
    xml += `<paper type="${paper.paperType}" left-margin="${paper.leftMargin}" right-margin="${paper.rightMargin}"
    top-margin="${paper.topMargin}" bottom-margin="${paper.bottomMargin}" paging-mode="${paper.pagingMode}" fixrows="${paper.fixRows}"
    width="${paper.width}" height="${paper.height}" orientation="${paper.orientation}" html-report-align="${paper.htmlReportAlign}" bg-image="${paper.bgImage || ''}" html-interval-refresh-value="${htmlIntervalRefreshValue}" column-enabled="${paper.columnEnabled}"`;
    if (paper.columnEnabled) {
        xml += ` column-count="${paper.columnCount}" column-margin="${paper.columnMargin}"`;
    }
    xml += `></paper>`;
    if (context.reportDef.searchFormXml) {
        xml += context.reportDef.searchFormXml;
    }
    xml += `</ureport>`;
    xml = encodeURIComponent(xml);
    return xml;
};

function getSpan(hot, row, col) {
    const mergeCells = hot.getSettings().mergeCells || [];
    for (let item of mergeCells) {
        if (item.row === row && item.col === col) {
            return item;
        }
    }
    return { rowspan: 0, colspan: 0 };
}

function buildConditions(conditions) {
    let cellXml = '';
    if (conditions) {
        const size = conditions.length;
        for (let condition of conditions) {
            if (!condition.type || condition.type === 'property') {
                if (condition.left) {
                    cellXml += `<condition property="${condition.left}" op="${encode(condition.operation)}" id="${condition.id}"`;
                } else {
                    cellXml += `<condition op="${encode(condition.operation)}" id="${condition.id}"`;
                }
                cellXml += ` type="${condition.type}"`;
                if (condition.join && size > 1) {
                    cellXml += ` join="${condition.join}">`;
                } else {
                    cellXml += `>`;
                }
                cellXml += `<value><![CDATA[${condition.right}]]></value>`;
            } else {
                cellXml += `<condition type="${condition.type}" op="${encode(condition.operation)}" id="${condition.id}"`;
                if (condition.join && size > 1) {
                    cellXml += ` join="${condition.join}">`;
                } else {
                    cellXml += `>`;
                }
                cellXml += `<left><![CDATA[${condition.left}]]></left>`;
                cellXml += `<right><![CDATA[${condition.right}]]></right>`;
            }
            cellXml += `</condition>`;
        }
    }
    return cellXml;
};

function buildCellStyle(cellStyle, condition) {
    let cellXml = "<cell-style";
    if (condition) {
        cellXml += ` for-condition="true"`;
    }
    if (cellStyle.fontSize && cellStyle.fontSize !== '') {
        cellXml += ` font-size="${cellStyle.fontSize}"`;
    }
    if (cellStyle.fontSizeScope) {
        cellXml += ` font-size-scope="${cellStyle.fontSizeScope}"`;
    }
    if (cellStyle.forecolor && cellStyle.forecolor !== '') {
        cellXml += ` forecolor="${cellStyle.forecolor}"`;
    }
    if (cellStyle.forecolorScope) {
        cellXml += ` forecolor-scope="${cellStyle.forecolorScope}"`;
    }
    if (cellStyle.fontFamily) {
        if (cellStyle.fontFamily === '0') {
            cellXml += ` font-family=""`;
        } else {
            cellXml += ` font-family="${cellStyle.fontFamily}"`;
        }
    }
    if (cellStyle.fontFamilyScope) {
        cellXml += ` font-family-scope="${cellStyle.fontFamilyScope}"`;
    }
    if (cellStyle.bgcolor && cellStyle.bgcolor !== '') {
        cellXml += ` bgcolor="${cellStyle.bgcolor}"`;
    }
    if (cellStyle.bgcolorScope) {
        cellXml += ` bgcolor-scope="${cellStyle.bgcolorScope}"`;
    }
    if (cellStyle.format && cellStyle.format !== '') {
        cellXml += ` format="${cellStyle.format}"`;
    }
    if (cellStyle.bold !== undefined && cellStyle.bold !== null) {
        cellXml += ` bold="${cellStyle.bold}"`;
    }
    if (cellStyle.boldScope) {
        cellXml += ` bold-scope="${cellStyle.boldScope}"`;
    }
    if (cellStyle.italic !== undefined && cellStyle.italic !== null) {
        cellXml += ` italic="${cellStyle.italic}"`;
    }
    if (cellStyle.italicScope) {
        cellXml += ` italic-scope="${cellStyle.italicScope}"`;
    }
    if (cellStyle.underline !== undefined && cellStyle.underline !== null) {
        cellXml += ` underline="${cellStyle.underline}"`;
    }
    if (cellStyle.underlineScope) {
        cellXml += ` underline-scope="${cellStyle.underlineScope}"`;
    }
    if (cellStyle.wrapCompute !== undefined && cellStyle.wrapCompute !== null) {
        cellXml += ` wrap-compute="${cellStyle.wrapCompute}"`;
    }
    if (cellStyle.align && cellStyle.align !== '') {
        cellXml += ` align="${cellStyle.align}"`;
    }
    if (cellStyle.alignScope) {
        cellXml += ` align-scope="${cellStyle.alignScope}"`;
    }
    if (cellStyle.valign && cellStyle.valign !== '') {
        cellXml += ` valign="${cellStyle.valign}"`;
    }
    if (cellStyle.valignScope) {
        cellXml += ` valign-scope="${cellStyle.valignScope}"`;
    }
    if (cellStyle.lineHeight) {
        cellXml += ` line-height="${cellStyle.lineHeight}"`;
    }
    cellXml += '>';
    let leftBorder = cellStyle.leftBorder;
    if (leftBorder && leftBorder.style !== "none") {
        cellXml += `<left-border width="${leftBorder.width}" style="${leftBorder.style}" color="${leftBorder.color}"/>`;
    }
    let rightBorder = cellStyle.rightBorder;
    if (rightBorder && rightBorder.style !== "none") {
        cellXml += `<right-border width="${rightBorder.width}" style="${rightBorder.style}" color="${rightBorder.color}"/>`;
    }
    let topBorder = cellStyle.topBorder;
    if (topBorder && topBorder.style !== "none") {
        cellXml += `<top-border width="${topBorder.width}" style="${topBorder.style}" color="${topBorder.color}"/>`;
    }
    let bottomBorder = cellStyle.bottomBorder;
    if (bottomBorder && bottomBorder.style !== "none") {
        cellXml += `<bottom-border width="${bottomBorder.width}" style="${bottomBorder.style}" color="${bottomBorder.color}"/>`;
    }
    cellXml += '</cell-style>';
    return cellXml;
};

function encode(text) {
    let result = text.replace(/[<>&"]/g, function (c) {
        return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
    });
    return result;
};

function getParameter(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2];
    return null;
};

function mmToPoint(mm) {
    let value = mm * 2.834646;
    return Math.round(value);
};
function pointToMM(point) {
    let value = point * 0.352778;
    return Math.round(value);
};

function pointToPixel(point) {
    const value = point * 1.33;
    return Math.round(value);
};

function pixelToPoint(pixel) {
    const value = pixel * 0.75;
    return Math.round(value);
};

function setDirty() {
    $('#__save_btn').removeClass('disabled');
};

function resetDirty() {
    $('#__save_btn').addClass('disabled');
};

function formatDate(date, format) {
    if (typeof date === 'number') {
        date = new Date(date);
    }
    if (typeof date === 'string') {
        return date;
    }
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "H+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return format;
};

function buildPageSizeList() {
    return {
        A0: { width: 841, height: 1189 },
        A1: { width: 594, height: 841 },
        A2: { width: 420, height: 594 },
        A3: { width: 297, height: 420 },
        A4: { width: 210, height: 297 },
        A5: { width: 148, height: 210 },
        A6: { width: 105, height: 148 },
        A7: { width: 74, height: 105 },
        A8: { width: 52, height: 74 },
        A9: { width: 37, height: 52 },
        A10: { width: 26, height: 37 },
        B0: { width: 1000, height: 1414 },
        B1: { width: 707, height: 1000 },
        B2: { width: 500, height: 707 },
        B3: { width: 353, height: 500 },
        B4: { width: 250, height: 353 },
        B5: { width: 176, height: 250 },
        B6: { width: 125, height: 176 },
        B7: { width: 88, height: 125 },
        B8: { width: 62, height: 88 },
        B9: { width: 44, height: 62 },
        B10: { width: 31, height: 44 }
    };
}

const undoManager = new undo_manager__WEBPACK_IMPORTED_MODULE_0___default.a();

/***/ }),

/***/ "./src/dialog/PDFPrintDialog.js":
/*!**************************************!*\
  !*** ./src/dialog/PDFPrintDialog.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PDFPrintDialog; });
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils.js */ "./src/Utils.js");
/* harmony import */ var _MsgBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MsgBox.js */ "./src/MsgBox.js");
/**
 * Created by Jacky.Gao on 2017-02-07.
 */



class PDFPrintDialog {
    constructor() {
        const w = $(window).width(),
              h = $(window).height();
        this.paperSizeList = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["buildPageSizeList"])();
        this.dialog = $(`<div class="modal fade" role="dialog" aria-hidden="true" style="z-index: 1110">
            <div class="modal-dialog modal-lg" style="width: 1250px;">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            &times;
                        </button>
                        <h4 class="modal-title">
                            ${window.i18n.pdfPrint.title}
                        </h4>
                    </div>
                    <div class="modal-body" style="padding-top:5px"></div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>`);
        this.body = this.dialog.find('.modal-body');
        const footer = this.dialog.find(".modal-footer");
        this.initBody();
    }
    initBody() {
        const toolbar = $(`<fieldset style="width: 100%;height: 60px;font-size: 12px;border: solid 1px #ddd;border-radius: 5px;padding: 1px 8px;">
        <legend style="font-size: 12px;width: 60px;border-bottom: none;margin-bottom: 0;">${window.i18n.pdfPrint.setup}</legend>
        </fieldset>`);
        this.body.append(toolbar);
        const pageTypeGroup = $(`<div class="form-group" style="display: inline-block"><label>${window.i18n.pdfPrint.paper}</label></div>`);
        toolbar.append(pageTypeGroup);
        this.pageSelect = $(`<select class="form-control" style="display: inline-block;width: 68px;font-size: 12px;padding: 1px;height: 28px;">
            <option>A0</option>
            <option>A1</option>
            <option>A2</option>
            <option>A3</option>
            <option>A4</option>
            <option>A5</option>
            <option>A6</option>
            <option>A7</option>
            <option>A8</option>
            <option>A9</option>
            <option>A10</option>
            <option>B0</option>
            <option>B1</option>
            <option>B2</option>
            <option>B3</option>
            <option>B4</option>
            <option>B5</option>
            <option>B6</option>
            <option>B7</option>
            <option>B8</option>
            <option>B9</option>
            <option>B10</option>
            <option value="CUSTOM">${window.i18n.pdfPrint.custom}</option>
        </select>`);
        pageTypeGroup.append(this.pageSelect);
        const _this = this;
        this.pageSelect.change(function () {
            let value = $(this).val();
            if (value === 'CUSTOM') {
                _this.pageWidthEditor.prop('readonly', false);
                _this.pageHeightEditor.prop('readonly', false);
            } else {
                _this.pageWidthEditor.prop('readonly', true);
                _this.pageHeightEditor.prop('readonly', true);
                let pageSize = _this.paperSizeList[value];
                _this.pageWidthEditor.val(pageSize.width);
                _this.pageHeightEditor.val(pageSize.height);
                _this.paper.width = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["mmToPoint"])(pageSize.width);
                _this.paper.height = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["mmToPoint"])(pageSize.height);
            }
            _this.paper.paperType = value;
        });

        const pageWidthGroup = $(`<div class="form-group" style="display: inline-block;margin-left: 6px"><span>${window.i18n.pdfPrint.width}</span></div>`);
        toolbar.append(pageWidthGroup);
        this.pageWidthEditor = $(`<input type="number" class="form-control" readonly style="display: inline-block;width: 40px;font-size: 12px;padding: 1px;height: 28px">`);
        pageWidthGroup.append(this.pageWidthEditor);
        this.pageWidthEditor.change(function () {
            let value = $(this).val();
            if (!value || isNaN(value)) {
                Object(_MsgBox_js__WEBPACK_IMPORTED_MODULE_1__["alert"])(`${window.i18n.pdfPrint.numberTip}`);
                return;
            }
            _this.paper.width = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["mmToPoint"])(value);
            _this.context.printLine.refresh();
        });

        const pageHeightGroup = $(`<div class="form-group" style="display: inline-block;margin-left: 6px"><span>${window.i18n.pdfPrint.height}</span></div>`);
        toolbar.append(pageHeightGroup);
        this.pageHeightEditor = $(`<input type="number" class="form-control" readonly style="display: inline-block;width: 40px;font-size: 12px;padding: 1px;height: 28px">`);
        pageHeightGroup.append(this.pageHeightEditor);
        this.pageHeightEditor.change(function () {
            let value = $(this).val();
            if (!value || isNaN(value)) {
                Object(_MsgBox_js__WEBPACK_IMPORTED_MODULE_1__["alert"])(`${window.i18n.pdfPrint.numberTip}`);
                return;
            }
            _this.paper.height = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["mmToPoint"])(value);
        });

        const orientationGroup = $(`<div class="form-group" style="display: inline-block;margin-left: 6px"><label>${window.i18n.pdfPrint.orientation}</label></div>`);
        toolbar.append(orientationGroup);
        this.orientationSelect = $(`<select class="form-control" style="display:inline-block;width: 60px;font-size: 12px;padding: 1px;height: 28px">
            <option value="portrait">${window.i18n.pdfPrint.portrait}</option>
            <option value="landscape">${window.i18n.pdfPrint.landscape}</option>
        </select>`);
        orientationGroup.append(this.orientationSelect);
        this.orientationSelect.change(function () {
            let value = $(this).val();
            _this.paper.orientation = value;
        });

        const marginGroup = $(`<div style="display: inline-block"></div>`);
        toolbar.append(marginGroup);

        const leftMarginGroup = $(`<div class="form-group" style="display: inline-block;margin-left:6px"><label>${window.i18n.pdfPrint.leftMargin}</label></div>`);
        marginGroup.append(leftMarginGroup);
        this.leftMarginEditor = $(`<input type="number" class="form-control" style="display: inline-block;width: 40px;font-size: 12px;padding: 1px;height: 28px">`);
        leftMarginGroup.append(this.leftMarginEditor);
        this.leftMarginEditor.change(function () {
            let value = $(this).val();
            if (!value || isNaN(value)) {
                Object(_MsgBox_js__WEBPACK_IMPORTED_MODULE_1__["alert"])(`${window.i18n.pdfPrint.numberTip}`);
                return;
            }
            _this.paper.leftMargin = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["mmToPoint"])(value);
            _this.context.printLine.refresh();
        });

        const rightMarginGroup = $(`<div class="form-group" style="display: inline-block;margin-top: 5px;margin-left: 6px""><label>${window.i18n.pdfPrint.rightMargin}</label></div>`);
        marginGroup.append(rightMarginGroup);
        this.rightMarginEditor = $(`<input type="number" class="form-control" style="display: inline-block;width: 40px;font-size: 12px;padding: 1px;height: 28px">`);
        rightMarginGroup.append(this.rightMarginEditor);
        this.rightMarginEditor.change(function () {
            let value = $(this).val();
            if (!value || isNaN(value)) {
                Object(_MsgBox_js__WEBPACK_IMPORTED_MODULE_1__["alert"])(`${window.i18n.pdfPrint.numberTip}`);
                return;
            }
            _this.paper.rightMargin = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["mmToPoint"])(value);
            _this.context.printLine.refresh();
        });

        const topMarginGroup = $(`<div class="form-group" style="display: inline-block;margin-left: 6px;"><label>${window.i18n.pdfPrint.topMargin}</label></div>`);
        marginGroup.append(topMarginGroup);
        this.topMarginEditor = $(`<input type="number" class="form-control" style="display: inline-block;width: 40px;font-size: 12px;padding: 1px;height: 28px">`);
        topMarginGroup.append(this.topMarginEditor);
        this.topMarginEditor.change(function () {
            let value = $(this).val();
            if (!value || isNaN(value)) {
                Object(_MsgBox_js__WEBPACK_IMPORTED_MODULE_1__["alert"])(`${window.i18n.pdfPrint.numberTip}`);
                return;
            }
            _this.paper.topMargin = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["mmToPoint"])(value);
        });

        const bottomMarginGroup = $(`<div class="form-group" style="display: inline-block;margin-left: 6px""><label>${window.i18n.pdfPrint.bottomMargin}</label></div>`);
        marginGroup.append(bottomMarginGroup);
        this.bottomMarginEditor = $(`<input type="number" class="form-control" style="display: inline-block;width: 40px;font-size: 12px;padding: 1px;height: 28px">`);
        bottomMarginGroup.append(this.bottomMarginEditor);
        this.bottomMarginEditor.change(function () {
            let value = $(this).val();
            if (!value || isNaN(value)) {
                Object(_MsgBox_js__WEBPACK_IMPORTED_MODULE_1__["alert"])(`${window.i18n.pdfPrint.numberTip}`);
                return;
            }
            _this.paper.bottomMargin = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["mmToPoint"])(value);
        });
        const file = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["getParameter"])('_u');
        const urlParameters = window.location.search;
        const button = $(`<button class="btn btn-primary" style="padding-top:5px;height: 30px;margin-left: 10px;">${window.i18n.pdfPrint.apply}</button>`);
        toolbar.append(button);
        let index = 0;
        button.click(function () {
            Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["showLoading"])();
            const paperData = JSON.stringify(_this.paper);
            $.ajax({
                type: 'POST',
                data: { _paper: paperData },
                url: window._server + '/pdf/newPaging' + urlParameters,
                success: function () {
                    const newUrl = window._server + '/pdf/show' + urlParameters + '&_r=' + index++;
                    _this.iFrame.prop('src', newUrl);
                },
                error: function () {
                    Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["hideLoading"])();
                    Object(_MsgBox_js__WEBPACK_IMPORTED_MODULE_1__["alert"])(`${window.i18n.pdfPrint.fail}`);
                }
            });
        });

        const printButton = $(`<button class="btn btn-danger" style="padding-top:5px;height: 30px;margin-left: 10px;">${window.i18n.pdfPrint.print}</button>`);
        toolbar.append(printButton);
        printButton.click(function () {
            window.frames['_iframe_for_pdf_print'].window.print();
        });
    }

    initIFrame() {
        if (this.iFrame) {
            return;
        }
        const urlParameters = buildLocationSearchParameters();
        const h = $(window).height();
        const url = window._server + "/pdf/show" + urlParameters + "&_p=1";
        this.iFrame = $(`<iframe name="_iframe_for_pdf_print" style="width: 100%;height:${h}px;margin-top: 5px;border:solid 1px #c2c2c2" frameborder="0" src="${url}"></iframe>`);
        this.body.append(this.iFrame);
        const iframe = this.iFrame.get(0);
        const msie = window.navigator.appName.indexOf("Internet Explorer");
        const ie11 = !!window.MSInputMethodContext && !!document.documentMode;
        if (msie === -1 && !ie11) {
            Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["showLoading"])();
        }
        this.iFrame.on('load', function () {
            Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["hideLoading"])();
        });
    }

    show(paper) {
        this.paper = paper;
        this.pageSelect.val(this.paper.paperType);
        this.pageWidthEditor.val(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["pointToMM"])(this.paper.width));
        this.pageHeightEditor.val(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["pointToMM"])(this.paper.height));
        this.pageSelect.trigger('change');
        this.leftMarginEditor.val(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["pointToMM"])(this.paper.leftMargin));
        this.rightMarginEditor.val(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["pointToMM"])(this.paper.rightMargin));
        this.topMarginEditor.val(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["pointToMM"])(this.paper.topMargin));
        this.bottomMarginEditor.val(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["pointToMM"])(this.paper.bottomMargin));
        this.orientationSelect.val(this.paper.orientation);
        this.dialog.modal('show');
        this.initIFrame();
    }
};

/***/ }),

/***/ "./src/form/external/bootstrap-datetimepicker.css":
/*!********************************************************!*\
  !*** ./src/form/external/bootstrap-datetimepicker.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!./bootstrap-datetimepicker.css */ "./node_modules/css-loader/index.js!./src/form/external/bootstrap-datetimepicker.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/i18n/preview.json":
/*!*******************************!*\
  !*** ./src/i18n/preview.json ***!
  \*******************************/
/*! exports provided: pdfPrint, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"pdfPrint\":{\"title\":\"PDF在线打印\",\"setup\":\"打印配置\",\"paper\":\"纸张:\",\"custom\":\"自定义\",\"width\":\"宽(毫米):\",\"numberTip\":\"请输入数字！\",\"height\":\"高(毫米):\",\"orientation\":\"方向:\",\"portrait\":\"纵向\",\"landscape\":\"横向\",\"leftMargin\":\"左边距(毫米):\",\"rightMargin\":\"右边距(毫米):\",\"topMargin\":\"上边距(毫米):\",\"bottomMargin\":\"下边距(毫米):\",\"apply\":\"应用\",\"fail\":\"操作失败！\",\"print\":\"打印\"}}");

/***/ }),

/***/ "./src/i18n/preview_en.json":
/*!**********************************!*\
  !*** ./src/i18n/preview_en.json ***!
  \**********************************/
/*! exports provided: pdfPrint, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"pdfPrint\":{\"title\":\"pdf online print\",\"setup\":\"Print Setup\",\"paper\":\"Paper:\",\"custom\":\"Custom\",\"width\":\"Width(mm):\",\"numberTip\":\"Please input a number\",\"height\":\"Height(mm):\",\"orientation\":\"Orientation:\",\"portrait\":\"Portrait\",\"landscape\":\"Landscape\",\"leftMargin\":\"Left Margin(mm):\",\"rightMargin\":\"Right Margin(mm):\",\"topMargin\":\"Top Margin(mm):\",\"bottomMargin\":\"Bottom Margin(mm):\",\"apply\":\"Apply\",\"fail\":\"Apply fail!\",\"print\":\"Print\"}}");

/***/ }),

/***/ "./src/preview.js":
/*!************************!*\
  !*** ./src/preview.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_external_bootstrap_datetimepicker_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form/external/bootstrap-datetimepicker.css */ "./src/form/external/bootstrap-datetimepicker.css");
/* harmony import */ var _form_external_bootstrap_datetimepicker_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_external_bootstrap_datetimepicker_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils.js */ "./src/Utils.js");
/* harmony import */ var _MsgBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgBox.js */ "./src/MsgBox.js");
/* harmony import */ var _dialog_PDFPrintDialog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog/PDFPrintDialog.js */ "./src/dialog/PDFPrintDialog.js");
/* harmony import */ var _i18n_preview_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n/preview.json */ "./src/i18n/preview.json");
var _i18n_preview_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./i18n/preview.json */ "./src/i18n/preview.json", 1);
/* harmony import */ var _i18n_preview_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/preview_en.json */ "./src/i18n/preview_en.json");
var _i18n_preview_en_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./i18n/preview_en.json */ "./src/i18n/preview_en.json", 1);
/**
 * Created by Jacky.Gao on 2017-03-17.
 */






(function ($) {
    $.fn.datetimepicker.dates['zh-CN'] = {
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
        daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        today: "今天",
        suffix: [],
        meridiem: ["上午", "下午"]
    };
})(jQuery);

$(document).ready(function () {
    let language = window.navigator.language || window.navigator.browserLanguage;
    if (!language) {
        language = 'zh-cn';
    }
    language = language.toLowerCase();
    window.i18n = _i18n_preview_json__WEBPACK_IMPORTED_MODULE_4__;
    if (language !== 'zh-cn') {
        window.i18n = _i18n_preview_en_json__WEBPACK_IMPORTED_MODULE_5__;
    }
    $('.ureport-print').click(function () {
        const urlParameters = buildLocationSearchParameters();
        const url = window._server + '/preview/loadPrintPages' + urlParameters;
        Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["showLoading"])();
        $.ajax({
            url,
            type: 'POST',
            success: function (result) {
                $.get(window._server + '/preview/loadPagePaper' + urlParameters, function (paper) {
                    Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
                    const html = result.html;
                    const iFrame = window.frames['_print_frame'];
                    let styles = `<style type="text/css">`;
                    styles += buildPrintStyle(paper);
                    styles += $('#_ureport_table_style').html();
                    styles += `</style>`;
                    $(iFrame.document.body).html(styles + html);
                    iFrame.window.focus();
                    iFrame.window.print();
                });
            },
            error: function (response) {
                Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
                if (response && response.responseText) {
                    Object(_MsgBox_js__WEBPACK_IMPORTED_MODULE_2__["alert"])("服务端错误：" + response.responseText + "");
                } else {
                    Object(_MsgBox_js__WEBPACK_IMPORTED_MODULE_2__["alert"])("服务端出错！");
                }
            }
        });
    });
    let directPrintPdf = false,
        index = 0;
    const pdfPrintDialog = new _dialog_PDFPrintDialog_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    $(`.ureport-pdf-print`).click(function () {
        const urlParameters = buildLocationSearchParameters();
        $.get(window._server + '/preview/loadPagePaper' + urlParameters, function (paper) {
            pdfPrintDialog.show(paper);
        });
    });
    $(`.ureport-pdf-direct-print`).click(function () {
        Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["showLoading"])();
        const urlParameters = buildLocationSearchParameters();
        const url = window._server + '/pdf/show' + urlParameters + `&_i=${index++}`;
        const iframe = window.frames['_print_pdf_frame'];
        if (!directPrintPdf) {
            directPrintPdf = true;
            $("iframe[name='_print_pdf_frame']").on("load", function () {
                Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
                iframe.window.focus();
                iframe.window.print();
            });
        }
        iframe.window.focus();
        iframe.location.href = url;
    });
    $(`.ureport-export-pdf`).click(function () {
        const urlParameters = buildLocationSearchParameters();
        const url = window._server + '/pdf' + urlParameters;
        window.open(url, '_blank');
    });
    $(`.ureport-export-word`).click(function () {
        const urlParameters = buildLocationSearchParameters();
        const url = window._server + '/word' + urlParameters;
        window.open(url, '_blank');
    });
    $(`.ureport-export-excel`).click(function () {
        const urlParameters = buildLocationSearchParameters();
        const url = window._server + '/excel' + urlParameters;
        window.open(url, '_blank');
    });
    $(`.ureport-export-excel-paging`).click(function () {
        const urlParameters = buildLocationSearchParameters();
        const url = window._server + '/excel/paging' + urlParameters;
        window.open(url, '_blank');
    });
    $(`.ureport-export-excel-paging-sheet`).click(function () {
        const urlParameters = buildLocationSearchParameters();
        const url = window._server + '/excel/sheet' + urlParameters;
        window.open(url, '_blank');
    });
});

window._currentPageIndex = null;
window._totalPage = null;

window.buildLocationSearchParameters = function (exclude) {
    let urlParameters = window.location.search;
    if (urlParameters.length > 0) {
        urlParameters = urlParameters.substring(1, urlParameters.length);
    }
    let parameters = {};
    const pairs = urlParameters.split('&');
    for (let i = 0; i < pairs.length; i++) {
        const item = pairs[i];
        if (item === '') {
            continue;
        }
        const param = item.split('=');
        let key = param[0];
        if (exclude && key === exclude) {
            continue;
        }
        let value = param[1];
        parameters[key] = value;
    }
    if (window.searchFormParameters) {
        for (let key in window.searchFormParameters) {
            if (key === exclude) {
                continue;
            }
            const value = window.searchFormParameters[key];
            if (value) {
                parameters[key] = value;
            }
        }
    }
    let p = '?';
    for (let key in parameters) {
        if (p === '?') {
            p += key + '=' + parameters[key];
        } else {
            p += '&' + key + '=' + parameters[key];
        }
    }
    return p;
};

function buildPrintStyle(paper) {
    const marginLeft = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["pointToMM"])(paper.leftMargin);
    const marginTop = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["pointToMM"])(paper.topMargin);
    const marginRight = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["pointToMM"])(paper.rightMargin);
    const marginBottom = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["pointToMM"])(paper.bottomMargin);
    const paperType = paper.paperType;
    let page = paperType;
    if (paperType === 'CUSTOM') {
        page = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["pointToMM"])(paper.width) + 'mm ' + Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["pointToMM"])(paper.height) + 'mm';
    }
    const style = `
        @media print {
            .page-break{
                display: block;
                page-break-before: always;
            }
        }
        @page {
          size: ${page} ${paper.orientation};
          margin-left: ${marginLeft}mm;
          margin-top: ${marginTop}mm;
          margin-right:${marginRight}mm;
          margin-bottom:${marginBottom}mm;
        }
    `;
    return style;
};

window.buildPaging = function (pageIndex, totalPage) {
    if (totalPage === 0) {
        return;
    }
    if (!pageIndex) {
        return;
    }
    if (!window._currentPageIndex) {
        window._currentPageIndex = pageIndex;
    }
    pageIndex = window._currentPageIndex;
    if (!window._totalPage) {
        window._totalPage = totalPage;
    }

    const pageSelector = $('#pageSelector');
    pageSelector.change(function () {
        const parameters = window.buildLocationSearchParameters('_i');
        let url = window._server + `/preview${parameters}&_i=${$(this).val()}`;
        window.open(url, '_self');
    });
    pageSelector.val(pageIndex);
    if (totalPage === 1) {
        return;
    }
    const parameters = window.buildLocationSearchParameters('_i');
    const pagingContainer = $('#pageLinkContainer');
    pagingContainer.empty();
    if (pageIndex > 1) {
        let url = window._server + `/preview${parameters}&_i=${pageIndex - 1}`;
        const prevPage = $(`<button type="button" class="btn btn-link btn-sm">上一页</button>`);
        pagingContainer.append(prevPage);
        prevPage.click(function () {
            window.open(url, '_self');
        });
    }
    if (pageIndex < totalPage) {
        let url = window._server + `/preview${parameters}&_i=${pageIndex + 1}`;
        const nextPage = $(`<button type="button" class="btn btn-link btn-sm">下一页</button>`);
        pagingContainer.append(nextPage);
        nextPage.click(function () {
            window.open(url, '_self');
        });
    }
};

window._intervalRefresh = function (value, totalPage) {
    if (!value) {
        return;
    }
    window._totalPage = totalPage;
    const second = value * 1000;
    setTimeout(function () {
        _refreshData(second);
    }, second);
};

function _refreshData(second) {
    const params = buildLocationSearchParameters('_i');
    let url = window._server + `/preview/loadData${params}`;
    const totalPage = window._totalPage;
    if (totalPage > 0) {
        if (window._currentPageIndex) {
            if (window._currentPageIndex > totalPage) {
                window._currentPageIndex = 1;
            }
            url += "&_i=" + window._currentPageIndex + "";
        }
        $("#pageSelector").val(window._currentPageIndex);
    }
    $.ajax({
        url,
        type: 'GET',
        success: function (report) {
            const tableContainer = $(`#_ureport_table`);
            tableContainer.empty();
            window._totalPage = report.totalPageWithCol;
            tableContainer.append(report.content);
            _buildChartDatas(report.chartDatas);
            buildPaging(window._currentPageIndex, window._totalPage);
            if (window._currentPageIndex) {
                window._currentPageIndex++;
            }
            setTimeout(function () {
                _refreshData(second);
            }, second);
        },
        error: function (response) {
            const tableContainer = $(`#_ureport_table`);
            tableContainer.empty();
            if (response && response.responseText) {
                tableContainer.append("<h3 style='color: #d30e00;'>服务端错误：" + response.responseText + "</h3>");
            } else {
                tableContainer.append("<h3 style='color: #d30e00;'>加载数据失败</h3>");
            }
            setTimeout(function () {
                _refreshData(second);
            }, second);
        }
    });
};

window._buildChartDatas = function (chartData) {
    if (!chartData) {
        return;
    }
    for (let d of chartData) {
        let json = d.json;
        json = JSON.parse(json, function (k, v) {
            if (v.indexOf && v.indexOf('function') > -1) {
                return eval("(function(){return " + v + " })()");
            }
            return v;
        });
        _buildChart(d.id, json);
    }
};
window._buildChart = function (canvasId, chartJson) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) {
        return;
    }
    let options = chartJson.options;
    if (!options) {
        options = {};
        chartJson.options = options;
    }
    let animation = options.animation;
    if (!animation) {
        animation = {};
        options.animation = animation;
    }
    animation.onComplete = function (event) {
        const chart = event.chart;
        const base64Image = chart.toBase64Image();
        const urlParameters = window.location.search;
        const url = window._server + '/chart/storeData' + urlParameters;
        const canvas = $("#" + canvasId);
        const width = parseInt(canvas.css('width'));
        const height = parseInt(canvas.css('height'));
        $.ajax({
            type: 'POST',
            data: { _base64Data: base64Image, _chartId: canvasId, _width: width, _height: height },
            url
        });
    };
    const chart = new Chart(ctx, chartJson);
};

window.submitSearchForm = function (file, customParameters) {
    window.searchFormParameters = {};
    for (let fun of window.formElements) {
        const json = fun.call(this);
        for (let key in json) {
            let value = json[key];
            value = encodeURI(value);
            value = encodeURI(value);
            window.searchFormParameters[key] = value;
        }
    }
    const parameters = window.buildLocationSearchParameters('_i');
    let url = window._server + "/preview/loadData" + parameters;
    const pageSelector = $(`#pageSelector`);
    if (pageSelector.length > 0) {
        url += '&_i=1';
    }
    $.ajax({
        url,
        type: 'POST',
        success: function (report) {
            window._currentPageIndex = 1;
            const tableContainer = $(`#_ureport_table`);
            tableContainer.empty();
            tableContainer.append(report.content);
            _buildChartDatas(report.chartDatas);
            const totalPage = report.totalPage;
            window._totalPage = totalPage;
            if (pageSelector.length > 0) {
                pageSelector.empty();
                for (let i = 1; i <= totalPage; i++) {
                    pageSelector.append(`<option>${i}</option>`);
                }
                const pageIndex = report.pageIndex || 1;
                pageSelector.val(pageIndex);
                $('#totalPageLabel').html(totalPage);
                buildPaging(pageIndex, totalPage);
            }
        },
        error: function (response) {
            if (response && response.responseText) {
                Object(_MsgBox_js__WEBPACK_IMPORTED_MODULE_2__["alert"])("服务端错误：" + response.responseText + "");
            } else {
                Object(_MsgBox_js__WEBPACK_IMPORTED_MODULE_2__["alert"])('查询操作失败！');
            }
        }
    });
};

/***/ })

/******/ });
//# sourceMappingURL=preview.bundle.js.map
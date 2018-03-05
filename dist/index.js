(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("moment"), require("dyna-ui-field-wrapper"), require("dyna-ui-button"), require("dyna-ui-picker-container"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-ui-date", ["react", "moment", "dyna-ui-field-wrapper", "dyna-ui-button", "dyna-ui-picker-container"], factory);
	else if(typeof exports === 'object')
		exports["dyna-ui-date"] = factory(require("react"), require("moment"), require("dyna-ui-field-wrapper"), require("dyna-ui-button"), require("dyna-ui-picker-container"));
	else
		root["dyna-ui-date"] = factory(root["react"], root["moment"], root["dyna-ui-field-wrapper"], root["dyna-ui-button"], root["dyna-ui-picker-container"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var moment = __webpack_require__(1);
var dyna_ui_field_wrapper_1 = __webpack_require__(5);
var utils_1 = __webpack_require__(6);
var faIcon_1 = __webpack_require__(7);
__webpack_require__(10);
__webpack_require__(13);
var EColor;
(function (EColor) {
    EColor["GREY_GREEN"] = "GREY_GREEN";
})(EColor = exports.EColor || (exports.EColor = {}));
var EInRange;
(function (EInRange) {
    EInRange["START"] = "START";
    EInRange["END"] = "END";
    EInRange["START_END"] = "START_END";
    EInRange["OUT"] = "OUT";
    EInRange["MIDDLE"] = "MIDDLE";
})(EInRange = exports.EInRange || (exports.EInRange = {}));
var DynaMonthCalendar = /** @class */ (function (_super) {
    __extends(DynaMonthCalendar, _super);
    function DynaMonthCalendar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            viewport: utils_1.getDate0(_this.props.value || _this.props.values[0] || _this.props.viewport || new Date),
            calendarTable: null,
        };
        return _this;
    }
    DynaMonthCalendar.prototype.componentDidMount = function () {
        this.setStateCalendarTable(this.props);
    };
    DynaMonthCalendar.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.value !== this.props.value ||
            JSON.stringify(nextProps.values) !== JSON.stringify(this.props.values) ||
            nextProps.start !== this.props.start ||
            nextProps.end !== this.props.end) {
            this.setStateCalendarTable(nextProps);
        }
    };
    DynaMonthCalendar.prototype.setViewport = function (viewport) {
        var _this = this;
        this.setState({ viewport: viewport }, function () { return _this.setStateCalendarTable(_this.props); });
    };
    DynaMonthCalendar.prototype.setStateCalendarTable = function (props) {
        var min = props.min, max = props.max, start = props.start, end = props.end, value = props.value, values = props.values;
        min = utils_1.getDate0(min);
        max = utils_1.getDate0(max);
        start = utils_1.getDate0(start);
        end = utils_1.getDate0(end);
        value = utils_1.getDate0(value);
        values = values.map(utils_1.getDate0);
        var viewport = utils_1.getDate0(this.state.viewport || this.props.value || this.props.values[0] || this.props.viewport || new Date);
        var uiCalendarTable = [];
        var calendarTable = utils_1.createCalendarTable(viewport, this.props.staringFromWeekDay);
        calendarTable.forEach(function (calendarLine) {
            var lineCells = [];
            calendarLine.forEach(function (_cellDate) {
                var cellDate = moment(_cellDate);
                var calendarDayCell = {
                    date: cellDate.toDate(),
                    selected: null,
                    inCurrentMonth: null,
                    weekend: null,
                    disabled: null,
                    inRange: null,
                };
                // selected updated
                calendarDayCell.selected =
                    cellDate.isSame(value) ||
                        values.reduce(function (acc, valuesDate) {
                            if (moment(valuesDate).isSame(cellDate))
                                acc = true;
                            return acc;
                        }, false);
                // inCurrentMonth
                calendarDayCell.inCurrentMonth = cellDate.month() === moment(viewport).month();
                // disabled update
                calendarDayCell.disabled = false;
                if (min && cellDate.isBefore(min))
                    calendarDayCell.disabled = true;
                if (max && cellDate.isAfter(max))
                    calendarDayCell.disabled = true;
                // is weekend
                calendarDayCell.weekend = [6, 0].includes(cellDate.weekday());
                // range update by start and end
                if (start) {
                    if (cellDate.isBefore(start) || (end && cellDate.isAfter(end))) {
                        calendarDayCell.inRange = EInRange.OUT;
                    }
                    if (cellDate.isSame(start)) {
                        calendarDayCell.inRange = EInRange.START;
                    }
                    if (end && cellDate.isSame(end)) {
                        calendarDayCell.inRange = EInRange.END;
                    }
                    if (cellDate.isSame(start) && end && cellDate.isSame(end)) {
                        calendarDayCell.inRange = EInRange.START_END;
                    }
                    if (cellDate.isAfter(start) && end && cellDate.isBefore(end)) {
                        calendarDayCell.inRange = EInRange.MIDDLE;
                    }
                    if (!end && cellDate.isAfter(start)) {
                        calendarDayCell.inRange = EInRange.OUT;
                    }
                }
                else {
                    calendarDayCell.inRange = EInRange.OUT;
                }
                lineCells.push(calendarDayCell);
            });
            uiCalendarTable.push(lineCells);
        });
        this.setState({
            viewport: viewport,
            calendarTable: uiCalendarTable,
        });
    };
    DynaMonthCalendar.prototype.handleNavMonth = function (direction) {
        var _this = this;
        if (this.props.mode === dyna_ui_field_wrapper_1.EMode.VIEW)
            return;
        this.setState({
            viewport: moment(this.state.viewport).add(direction, 'months').toDate()
        }, function () {
            _this.setStateCalendarTable(_this.props);
        });
    };
    DynaMonthCalendar.prototype.handleDaySelect = function (calendarCell) {
        if (this.props.mode === dyna_ui_field_wrapper_1.EMode.VIEW)
            return;
        if (calendarCell.disabled)
            return;
        var _a = this.props, name = _a.name, onChange = _a.onChange;
        onChange(name, calendarCell.date);
    };
    DynaMonthCalendar.prototype.render = function () {
        var _this = this;
        var _a = this.props, mode = _a.mode, color = _a.color, staringFromWeekDay = _a.staringFromWeekDay, renderPickerWeekDay = _a.renderPickerWeekDay, renderPickerMonthYear = _a.renderPickerMonthYear, renderPickerDay = _a.renderPickerDay;
        var _b = this.state, viewport = _b.viewport, calendarTable = _b.calendarTable;
        var className = [
            'dyna-month-calendar',
            "dyna-month-calendar--mode-" + mode,
            "dyna-month-calendar--color-" + color,
        ].join(' ').trim();
        return (React.createElement("div", { className: className },
            React.createElement("div", { className: "dmc--header" },
                React.createElement("div", { className: "dmc--header--nav-prev", onClick: this.handleNavMonth.bind(this, -1) }, faIcon_1.faIcon('caret-left')),
                React.createElement("div", { className: "dmc--header--label" }, renderPickerMonthYear(moment(viewport).month(), moment(viewport).year())),
                React.createElement("div", { className: "dmc--header--nav-next", onClick: this.handleNavMonth.bind(this, +1) }, faIcon_1.faIcon('caret-right'))),
            React.createElement("div", { className: "dmc--week-days-header" }, Array(7).fill(null).map(function (v, index) {
                var weekDay = staringFromWeekDay + index;
                if (weekDay > 6)
                    weekDay -= 7;
                return React.createElement("div", { key: index, className: "dmc--calendar--cell" }, renderPickerWeekDay(weekDay));
            })),
            React.createElement("div", { className: "dmc--calendar" }, calendarTable && calendarTable.map(function (calendarLine, index) {
                return (React.createElement("div", { key: index, className: "dmc--calendar--line" }, calendarLine.map(function (calendarCell, index) {
                    var date = moment(calendarCell.date);
                    var className = [
                        "dmc--calendar--cell",
                        calendarCell.selected ? "dmc--calendar--cell--selected" : "",
                        calendarCell.inCurrentMonth ? "dmc--calendar--cell--month-in" : "dmc--calendar--cell--month-out",
                        calendarCell.disabled ? "dmc--calendar--cell--disabled" : "",
                        calendarCell.weekend ? "dmc--calendar--cell--weekend" : "",
                        "dmc--calendar--cell--range-" + calendarCell.inRange,
                    ].join(' ').trim();
                    return (React.createElement("div", { key: index, className: className, onClick: function () { return _this.handleDaySelect(calendarCell); } }, renderPickerDay(date.toDate(), date.get('D'), date.day(), calendarCell.inRange)));
                })));
            }))));
    };
    DynaMonthCalendar.defaultProps = {
        name: null,
        mode: dyna_ui_field_wrapper_1.EMode.EDIT,
        color: EColor.GREY_GREEN,
        start: null,
        end: null,
        value: moment().startOf('day').toDate(),
        values: [],
        min: null,
        max: null,
        weekDays: utils_1.weekDaysShortNames,
        months: utils_1.monthsLongNames,
        staringFromWeekDay: 1,
        renderPickerMonthYear: function (month, year) { return React.createElement("div", null,
            utils_1.monthsLongNames[month],
            " ",
            year); },
        renderPickerWeekDay: function (weekDay) { return React.createElement("div", null, utils_1.weekDaysShortNames[weekDay]); },
        renderPickerDay: function (date, dayInMonth, dayInWeek, inRange) { return React.createElement("div", null, dayInMonth); },
        onChange: function (name, date) { return undefined; },
    };
    return DynaMonthCalendar;
}(React.Component));
exports.DynaMonthCalendar = DynaMonthCalendar;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(1);
exports.monthsLongNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
exports.weekDaysShortNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
function getFirstDateOfMonth(date) {
    var dateString = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).substr(-2) + "-01";
    return new Date(dateString);
}
exports.getFirstDateOfMonth = getFirstDateOfMonth;
exports.getDate0 = function (date) {
    if (date == null)
        return date;
    return moment(date).startOf('day').toDate();
};
function getDaysArray(date) {
    date = getFirstDateOfMonth(date);
    var month = date.getMonth();
    var days = 0;
    while (date.getMonth() == month) {
        days++;
        date.setDate(date.getDate() + 1);
    }
    return days;
}
exports.getDaysArray = getDaysArray;
function createCalendarTable(date, startingFromWeekDay) {
    if (startingFromWeekDay === void 0) { startingFromWeekDay = 1; }
    date = exports.getDate0(date);
    var firstMonthDate = getFirstDateOfMonth(date);
    var startingMonthDay = firstMonthDate.getDay();
    var startingCalendarIndex = startingMonthDay - startingFromWeekDay;
    if (startingCalendarIndex < 0)
        startingCalendarIndex += 7;
    var monthDays = getDaysArray(date);
    var lines = [];
    // fill the month starting from the previous month's days
    var lineIndex = 0;
    var line = Array(7).fill(null);
    for (var iDay = -startingCalendarIndex; iDay < monthDays; iDay++) {
        var d = exports.getDate0(new Date(firstMonthDate));
        line[lineIndex] = exports.getDate0(new Date(d.setDate(d.getDate() + iDay)));
        lineIndex++;
        if (lineIndex > 6) {
            lines.push(line);
            line = Array(7).fill(null);
            lineIndex = 0;
        }
    }
    if (line.length)
        lines.push(line);
    // fill the rest days
    var fillFromIndex = lines[lines.length - 1].indexOf(null);
    for (var iDay = fillFromIndex; iDay < 7; iDay++) {
        var d = exports.getDate0(new Date(firstMonthDate));
        lines[lines.length - 1][iDay] = exports.getDate0(new Date(d.setDate(d.getDate() + (monthDays + iDay - fillFromIndex))));
    }
    return lines;
}
exports.createCalendarTable = createCalendarTable;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
exports.faIcon = function (awesomeFontIconName, className) {
    if (className === void 0) { className = ''; }
    return React.createElement("i", { className: ("fa fa-" + awesomeFontIconName + " " + className).trim(), "aria-hidden": "true" });
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynaMonthCalendar_1 = __webpack_require__(4);
exports.DynaMonthCalendar = DynaMonthCalendar_1.DynaMonthCalendar;
exports.EDynaMonthCalendarColor = DynaMonthCalendar_1.EColor;
var DynaDatePicker_1 = __webpack_require__(15);
exports.EMode = DynaDatePicker_1.EMode;
exports.ESize = DynaDatePicker_1.ESize;
exports.EStyle = DynaDatePicker_1.EStyle;
exports.EColor = DynaDatePicker_1.EColor;
exports.DynaDatePicker = DynaDatePicker_1.DynaDatePicker;
exports.EDynaDatePickerColor = DynaDatePicker_1.EColor;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../node_modules/less-loader/dist/cjs.js!./layout.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../node_modules/less-loader/dist/cjs.js!./layout.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".dyna-month-calendar {\n  padding: 8px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: calc(100% - 16px);\n  height: 100%;\n}\n@media (max-width: 768px) {\n  .dyna-month-calendar {\n    width: 100%;\n  }\n}\n.dyna-month-calendar--mode-VIEW {\n  pointer-events: none;\n}\n.dyna-month-calendar--mode-VIEW .dmc--header--nav-prev,\n.dyna-month-calendar--mode-VIEW .dmc--header--nav-next {\n  display: none !important;\n}\n.dyna-month-calendar .dmc--header {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 10%;\n          flex: 1 1 10%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.dyna-month-calendar .dmc--header > * {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.dyna-month-calendar .dmc--header--nav-prev,\n.dyna-month-calendar .dmc--header--nav-next {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 14.2857%;\n          flex: 1 1 14.2857%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: pointer;\n  font-size: 16px;\n}\n.dyna-month-calendar .dmc--header--label {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 85.7143%;\n          flex: 1 1 85.7143%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.dyna-month-calendar .dmc--week-days-header {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 10%;\n          flex: 1 1 10%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.dyna-month-calendar .dmc--week-days-header .dmc--calendar--cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.dyna-month-calendar .dmc--calendar {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 80%;\n          flex: 1 1 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.dyna-month-calendar .dmc--calendar .dmc--calendar--line {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.dyna-month-calendar .dmc--calendar .dmc--calendar--line .dmc--calendar--cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  cursor: pointer;\n}\n.dyna-month-calendar .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--disabled {\n  cursor: default;\n}\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../node_modules/less-loader/dist/cjs.js!./color.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../node_modules/less-loader/dist/cjs.js!./color.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".dyna-month-calendar--color-GREY_GREEN .dmc--header {\n  background-color: #191919;\n  color: white;\n  margin: 1px;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--header--nav-prev,\n.dyna-month-calendar--color-GREY_GREEN .dmc--header--nav-next {\n  background-color: #313131;\n  margin: 2px;\n  padding: 0 5px;\n  -webkit-transition: opacity ease-in-out 200ms;\n  transition: opacity ease-in-out 200ms;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--header--nav-prev:hover,\n.dyna-month-calendar--color-GREY_GREEN .dmc--header--nav-next:hover {\n  opacity: 0.7;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--header--label {\n  font-weight: bold;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--week-days-header .dmc--calendar--cell {\n  background-color: #353535;\n  margin: 1px;\n  color: white;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--week-days-header .dmc--calendar--cell:nth-child(6),\n.dyna-month-calendar--color-GREY_GREEN .dmc--week-days-header .dmc--calendar--cell:nth-child(7) {\n  background-color: #4c4c4c;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell {\n  margin: 1px;\n  color: black;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-in {\n  font-weight: bold;\n  background-color: #c3c3c3;\n  -webkit-transition: opacity ease-in-out 200ms;\n  transition: opacity ease-in-out 200ms;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-in:hover {\n  opacity: 0.7;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-out {\n  background-color: #f5f5f5;\n  -webkit-transition: opacity ease-in-out 200ms;\n  transition: opacity ease-in-out 200ms;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-out:hover {\n  opacity: 0.7;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell.dmc--calendar--cell--weekend {\n  background-color: #ccbd88;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--disabled {\n  color: #9c9c9c;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--selected {\n  -webkit-box-shadow: inset 0 0 0 2px #005000;\n          box-shadow: inset 0 0 0 2px #005000;\n  background-color: #3bad3b;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--selected.dmc--calendar--cell--weekend {\n  background-color: #44c844;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-START {\n  border-radius: 4px 0 0 4px;\n  background-color: #3bad3b;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-START.dmc--calendar--cell--weekend {\n  background-color: #44c844;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-MIDDLE {\n  background-color: #3bad3b;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-MIDDLE.dmc--calendar--cell--weekend {\n  background-color: #44c844;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-END {\n  border-radius: 0 4px 4px 0;\n  background-color: #3bad3b;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-END.dmc--calendar--cell--weekend {\n  background-color: #44c844;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-START_END {\n  border-radius: 4px;\n  background-color: #3bad3b;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-START_END.dmc--calendar--cell--weekend {\n  background-color: #44c844;\n}\n", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var moment = __webpack_require__(1);
var dyna_ui_field_wrapper_1 = __webpack_require__(5);
exports.EMode = dyna_ui_field_wrapper_1.EMode;
exports.EStyle = dyna_ui_field_wrapper_1.EStyle;
exports.ESize = dyna_ui_field_wrapper_1.ESize;
var dyna_ui_button_1 = __webpack_require__(16);
var dyna_ui_picker_container_1 = __webpack_require__(17);
var DynaMonthCalendar_1 = __webpack_require__(4);
exports.EInRange = DynaMonthCalendar_1.EInRange;
var utils_1 = __webpack_require__(6);
var faIcon_1 = __webpack_require__(7);
__webpack_require__(18);
var EColor;
(function (EColor) {
    EColor["GREY_ORANGE_GREEN"] = "GREY_ORANGE_GREEN";
    EColor["GREY_RED_GREEN"] = "GREY_RED_GREEN";
    EColor["WHITE_BLACK"] = "WHITE_BLACK";
})(EColor = exports.EColor || (exports.EColor = {}));
var colorMixer = function (color) {
    switch (color) {
        case EColor.GREY_RED_GREEN:
            return {
                calendarColor: DynaMonthCalendar_1.EColor.GREY_GREEN,
                fieldColor: dyna_ui_field_wrapper_1.EColor.RED_WHITE,
                pickerButtonColor: dyna_ui_button_1.EColor.RED_WHITE,
                pickerContainerColor: dyna_ui_picker_container_1.EColor.WHITE_RED,
            };
        case EColor.GREY_ORANGE_GREEN:
            return {
                calendarColor: DynaMonthCalendar_1.EColor.GREY_GREEN,
                fieldColor: dyna_ui_field_wrapper_1.EColor.ORANGE_WHITE,
                pickerButtonColor: dyna_ui_button_1.EColor.ORANGE_WHITE,
                pickerContainerColor: dyna_ui_picker_container_1.EColor.WHITE_ORANGE,
            };
        default:
        case EColor.WHITE_BLACK:
            return {
                calendarColor: DynaMonthCalendar_1.EColor.GREY_GREEN,
                fieldColor: dyna_ui_field_wrapper_1.EColor.ORANGE_WHITE,
                pickerButtonColor: dyna_ui_button_1.EColor.WHITE_BLACK,
                pickerContainerColor: dyna_ui_picker_container_1.EColor.WHITE_ORANGE,
            };
    }
};
var DynaDatePicker = /** @class */ (function (_super) {
    __extends(DynaDatePicker, _super);
    function DynaDatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.lastFocused = null;
        _this.state = {
            showPicker: false,
        };
        return _this;
    }
    DynaDatePicker.prototype.handleDaySelect = function (name, date) {
        if (this.props.closeOnSelect)
            this.setState({ showPicker: false });
        var onChange = this.props.onChange;
        onChange(name, date);
    };
    DynaDatePicker.prototype.renderPicker = function () {
        var _this = this;
        var _a = this.props, color = _a.color, size = _a.size, showCloseButton = _a.showCloseButton, closeButtonLabel = _a.closeButtonLabel;
        var _b = this.props, mode = _b.mode, label = _b.label, name = _b.name, value = _b.value, values = _b.values, start = _b.start, end = _b.end, min = _b.min, max = _b.max, pickerHeader = _b.pickerHeader, pickerFooter = _b.pickerFooter;
        var _c = this.props, staringFromWeekDay = _c.staringFromWeekDay, renderPickerMonthYear = _c.renderPickerMonthYear, renderPickerWeekDay = _c.renderPickerWeekDay, renderPickerDay = _c.renderPickerDay;
        var showPicker = this.state.showPicker;
        var show = mode === dyna_ui_field_wrapper_1.EMode.EDIT && showPicker;
        var colors = colorMixer(color);
        return (React.createElement(dyna_ui_picker_container_1.DynaPickerContainer, { style: dyna_ui_picker_container_1.EStyle.ROUNDED, color: colors.pickerContainerColor, show: show },
            React.createElement("div", { className: "ddp-picker-container" },
                React.createElement("div", { className: "ddp--calendar--label" },
                    React.createElement("h2", null, label)),
                pickerHeader,
                React.createElement(DynaMonthCalendar_1.DynaMonthCalendar, { ref: function (component) { return _this.monthCalendar = component; }, name: name, color: colors.calendarColor, start: start, end: end, min: min, max: max, value: value, values: values, staringFromWeekDay: staringFromWeekDay, onChange: this.handleDaySelect.bind(this), renderPickerDay: renderPickerDay, renderPickerWeekDay: renderPickerWeekDay, renderPickerMonthYear: renderPickerMonthYear }),
                React.createElement("div", { className: "ddp--calendar--button-bar" }, showCloseButton ?
                    React.createElement(dyna_ui_button_1.DynaButton, { style: dyna_ui_button_1.EStyle.ROUNDED, color: colors.pickerButtonColor, size: size, onClick: this.handlerUserCame.bind(this) }, closeButtonLabel)
                    : null),
                pickerFooter)));
    };
    DynaDatePicker.prototype.handlerUserCame = function () {
        if (this.props.mode === dyna_ui_field_wrapper_1.EMode.VIEW)
            return;
        if (this.lastFocused && Number(new Date) - Number(this.lastFocused) < 300)
            return;
        var value = this.props.value;
        var showPicker = !this.state.showPicker;
        this.setState({
            showPicker: showPicker,
        });
        if (showPicker)
            this.monthCalendar.setViewport(value);
        this.lastFocused = new Date;
    };
    DynaDatePicker.prototype.handlerOutsideClick = function () {
        this.setState({
            showPicker: false,
        });
    };
    DynaDatePicker.prototype.handlerInputKeyPress = function (event) {
        switch (event.keyCode) {
            case 32: // space
            case 13:// enter
                this.setState({ showPicker: !this.state.showPicker });
                break;
            case 27: // escape
            case 9:// tab
                this.setState({ showPicker: false });
                break;
        }
    };
    DynaDatePicker.prototype.renderInputDates = function () {
        var _a = this.props, value = _a.value, values = _a.values, renderInputDate = _a.renderInputDate;
        return []
            .concat(value, values)
            .filter(function (d) { return !!d; })
            .map(function (d) { return Number(d); })
            .sort(function (a, b) { return a - b; })
            .map(function (n) { return new Date(n); })
            .map(renderInputDate)
            .join(', ');
    };
    DynaDatePicker.prototype.render = function () {
        var _a = this.props, cn = _a.className, mode = _a.mode, style = _a.style, size = _a.size, color = _a.color, label = _a.label, required = _a.required, validationMessage = _a.validationMessage;
        var colors = colorMixer(color);
        var className = [
            'dyna-date-picker',
            cn,
            "dyna-date-picker-mode-" + mode,
            "dyna-date-picker-style-" + style,
            "dyna-date-picker-size-" + size,
        ].join(' ').trim();
        return (React.createElement("div", { className: className },
            React.createElement(dyna_ui_field_wrapper_1.DynaFieldWrapper, { mode: mode, style: style, color: colors.fieldColor, size: size, label: label, required: required, inputElementSelector: ".ddp-input-control", validationMessage: validationMessage, footer: this.renderPicker(), onOutsideClick: this.handlerOutsideClick.bind(this) },
                React.createElement("input", { className: "ddp-input-control", readOnly: true, value: this.renderInputDates(), onFocus: this.handlerUserCame.bind(this), onClick: this.handlerUserCame.bind(this), onKeyDown: this.handlerInputKeyPress.bind(this) }))));
    };
    DynaDatePicker.defaultProps = {
        className: '',
        name: null,
        label: null,
        mode: dyna_ui_field_wrapper_1.EMode.EDIT,
        size: dyna_ui_field_wrapper_1.ESize.MEDIUM,
        required: null,
        validationMessage: null,
        pickerHeader: null,
        pickerFooter: null,
        style: dyna_ui_field_wrapper_1.EStyle.INLINE_ROUNDED,
        color: EColor.GREY_ORANGE_GREEN,
        start: null,
        end: null,
        value: null,
        values: [],
        min: null,
        max: null,
        weekDays: utils_1.weekDaysShortNames,
        months: utils_1.monthsLongNames,
        staringFromWeekDay: 1,
        showCloseButton: true,
        closeOnSelect: true,
        closeButtonLabel: React.createElement("span", null,
            faIcon_1.faIcon('check'),
            " Ok"),
        renderInputDate: function (date) { return moment(date).format('dd DD MMM YY'); },
        renderPickerMonthYear: function (month, year) { return React.createElement("div", null,
            utils_1.monthsLongNames[month],
            " ",
            year); },
        renderPickerWeekDay: function (weekDay) { return React.createElement("div", null, utils_1.weekDaysShortNames[weekDay]); },
        renderPickerDay: function (date, dayInMonth, dayInWeek, inRange) { return React.createElement("div", null, dayInMonth); },
        onChange: function (name, date) { return undefined; },
    };
    return DynaDatePicker;
}(React.Component));
exports.DynaDatePicker = DynaDatePicker;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../node_modules/less-loader/dist/cjs.js!./style.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../node_modules/less-loader/dist/cjs.js!./style.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".dyna-date-picker .dyna-ui-field-wrapper-container .ddp-input-control {\n  outline: none;\n  border: 0;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: bold;\n  background-color: transparent;\n}\n.dyna-date-picker.dyna-date-picker {\n  outline: none;\n}\n.dyna-date-picker.dyna-date-picker-style-INLINE_ROUNDED .dyna-ui-field-wrapper-footer .dyna-ui-picker-container {\n  z-index: 1;\n}\n.dyna-date-picker.dyna-date-picker-style-INLINE_ROUNDED .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--label {\n  display: none;\n}\n@media (max-width: 768px) {\n  .dyna-date-picker.dyna-date-picker-style-INLINE_ROUNDED .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--label {\n    display: block;\n  }\n}\n.dyna-date-picker.dyna-date-picker-style-INLINE_ROUNDED .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--button-bar {\n  padding: 0 8px 8px 8px;\n}\n.dyna-date-picker.dyna-date-picker-style-INLINE_ROUNDED .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--button-bar .dyna-button button {\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .dyna-date-picker.dyna-date-picker-style-INLINE_ROUNDED .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    width: 100%;\n  }\n  .dyna-date-picker.dyna-date-picker-style-INLINE_ROUNDED .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--label {\n    display: none;\n  }\n  .dyna-date-picker.dyna-date-picker-style-INLINE_ROUNDED .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--button-bar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n}\n@media (max-width: 768px) and (max-width: 768px) {\n  .dyna-date-picker.dyna-date-picker-style-INLINE_ROUNDED .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--label {\n    display: block;\n  }\n  .dyna-date-picker.dyna-date-picker-style-INLINE_ROUNDED .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--label h2 {\n    margin: 8px 8px 0 8px;\n  }\n}\n@media (min-width: 768px) {\n  .dyna-date-picker.dyna-date-picker-size-XSMALL .dyna-ui-picker-container {\n    font-size: 11px;\n  }\n  .dyna-date-picker.dyna-date-picker-size-XSMALL .dyna-ui-picker-container .dyna-month-calendar {\n    width: 192px;\n    height: 192px;\n  }\n}\n@media (min-width: 768px) {\n  .dyna-date-picker.dyna-date-picker-size-SMALL .dyna-ui-picker-container {\n    font-size: 14px;\n  }\n  .dyna-date-picker.dyna-date-picker-size-SMALL .dyna-ui-picker-container .dyna-month-calendar {\n    width: 256px;\n    height: 256px;\n  }\n}\n@media (min-width: 768px) {\n  .dyna-date-picker.dyna-date-picker-size-MEDIUM .dyna-ui-picker-container {\n    font-size: 16px;\n  }\n  .dyna-date-picker.dyna-date-picker-size-MEDIUM .dyna-ui-picker-container .dyna-month-calendar {\n    width: 320px;\n    height: 320px;\n  }\n}\n@media (min-width: 768px) {\n  .dyna-date-picker.dyna-date-picker-size-LARGE .dyna-ui-picker-container {\n    font-size: 18px;\n  }\n  .dyna-date-picker.dyna-date-picker-size-LARGE .dyna-ui-picker-container .dyna-month-calendar {\n    width: 448px;\n    height: 448px;\n  }\n}\n@media (max-width: 768px) {\n  .dyna-date-picker.dyna-date-picker .dyna-month-calendar {\n    width: 98%;\n    padding: 1%;\n    height: 50%;\n  }\n}\n", ""]);

// exports


/***/ })
/******/ ]);
});
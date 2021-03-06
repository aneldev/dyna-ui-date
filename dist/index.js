(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("moment"), require("dyna-ui-field-wrapper"), require("dyna-ui-tooltip"), require("dyna-ui-button"), require("dyna-ui-picker-container"), require("dyna-ui-styles"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-ui-date", ["react", "moment", "dyna-ui-field-wrapper", "dyna-ui-tooltip", "dyna-ui-button", "dyna-ui-picker-container", "dyna-ui-styles"], factory);
	else if(typeof exports === 'object')
		exports["dyna-ui-date"] = factory(require("react"), require("moment"), require("dyna-ui-field-wrapper"), require("dyna-ui-tooltip"), require("dyna-ui-button"), require("dyna-ui-picker-container"), require("dyna-ui-styles"));
	else
		root["dyna-ui-date"] = factory(root["react"], root["moment"], root["dyna-ui-field-wrapper"], root["dyna-ui-tooltip"], root["dyna-ui-button"], root["dyna-ui-picker-container"], root["dyna-ui-styles"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_dyna_ui_field_wrapper__, __WEBPACK_EXTERNAL_MODULE_dyna_ui_tooltip__, __WEBPACK_EXTERNAL_MODULE_dyna_ui_button__, __WEBPACK_EXTERNAL_MODULE_dyna_ui_picker_container__, __WEBPACK_EXTERNAL_MODULE_dyna_ui_styles__) {
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/DynaDatePickers/style.less":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/less-loader/dist/cjs.js!./src/DynaDatePickers/style.less ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dyna-date-picker .dyna-ui-field-wrapper-container .ddp-input-control {\n  outline: none;\n  border: 0;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: bold;\n  background-color: transparent;\n}\n.dyna-date-picker.dyna-date-picker {\n  outline: none;\n}\n.dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container {\n  z-index: 1;\n}\n.dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container {\n  padding: 8px;\n}\n.dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--label {\n  display: none;\n}\n@media (max-width: 768px) {\n  .dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--label {\n    display: block;\n  }\n}\n.dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--picker-custom-content {\n  padding-bottom: 8px;\n}\n.dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--button-bar .dyna-button button {\n  margin-top: 8px;\n  width: 100%;\n}\n.dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--double-calendar-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--double-calendar-container .ddp--double-calendar-A {\n  padding-right: 8px;\n}\n.dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--double-calendar-container .ddp--double-calendar-A .dmc--header--nav-next {\n  visibility: hidden;\n}\n.dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--double-calendar-container .ddp--double-calendar-B {\n  padding-left: 0;\n}\n.dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--double-calendar-container .ddp--double-calendar-B .dmc--header--nav-prev {\n  visibility: hidden;\n}\n@media (max-width: 768px) {\n  .dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    font-size: 1.5rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 8px;\n  }\n  .dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--label {\n    display: none;\n  }\n  .dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--button-bar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n}\n@media (max-width: 768px) and (max-width: 768px) {\n  .dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--label {\n    display: block;\n  }\n  .dyna-date-picker.dyna-date-picker .dyna-ui-field-wrapper-footer .dyna-ui-picker-container .ddp-picker-container .ddp--calendar--label h2 {\n    margin: 0 0 8px 0;\n  }\n}\n@media (min-width: 769px) {\n  .dyna-date-picker.dyna-date-picker-size-XSMALL .dyna-ui-picker-container {\n    font-size: 11px;\n  }\n  .dyna-date-picker.dyna-date-picker-size-XSMALL .dyna-ui-picker-container .dyna-month-calendar {\n    width: 192px;\n    height: 192px;\n  }\n}\n@media (min-width: 769px) {\n  .dyna-date-picker.dyna-date-picker-size-SMALL .dyna-ui-picker-container {\n    font-size: 14px;\n  }\n  .dyna-date-picker.dyna-date-picker-size-SMALL .dyna-ui-picker-container .dyna-month-calendar {\n    width: 256px;\n    height: 256px;\n  }\n}\n@media (min-width: 769px) {\n  .dyna-date-picker.dyna-date-picker-size-MEDIUM .dyna-ui-picker-container {\n    font-size: 16px;\n  }\n  .dyna-date-picker.dyna-date-picker-size-MEDIUM .dyna-ui-picker-container .dyna-month-calendar {\n    width: 320px;\n    height: 320px;\n  }\n}\n@media (min-width: 769px) {\n  .dyna-date-picker.dyna-date-picker-size-LARGE .dyna-ui-picker-container {\n    font-size: 18px;\n  }\n  .dyna-date-picker.dyna-date-picker-size-LARGE .dyna-ui-picker-container .dyna-month-calendar {\n    width: 448px;\n    height: 448px;\n  }\n}\n@media (max-width: 768px) {\n  .dyna-date-picker.dyna-date-picker .ddp--double-calendar-container {\n    height: 70%;\n  }\n  .dyna-date-picker.dyna-date-picker .ddp--double-calendar-A {\n    padding-right: 0 !important;\n  }\n  .dyna-date-picker.dyna-date-picker .ddp--double-calendar-A .dmc--header--nav-next {\n    visibility: visible !important;\n  }\n  .dyna-date-picker.dyna-date-picker .ddp--double-calendar-B {\n    display: none;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/DynaMonthCalendar/color.less":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/less-loader/dist/cjs.js!./src/DynaMonthCalendar/color.less ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dyna-month-calendar--color-GREY_GREEN .dmc--header {\n  background-color: #191919;\n  color: white;\n  margin: 1px;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--header--nav-prev,\n.dyna-month-calendar--color-GREY_GREEN .dmc--header--nav-next {\n  background-color: #313131;\n  margin: 2px;\n  padding: 0 5px;\n  -webkit-transition: opacity ease-in-out 200ms;\n  transition: opacity ease-in-out 200ms;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--header--nav-prev:hover,\n.dyna-month-calendar--color-GREY_GREEN .dmc--header--nav-next:hover {\n  opacity: 0.7;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--header--label {\n  font-weight: bold;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--week-days-header .dmc--calendar--cell {\n  background-color: #353535;\n  margin: 1px;\n  color: white;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--week-days-header .dmc--calendar--cell:nth-child(6),\n.dyna-month-calendar--color-GREY_GREEN .dmc--week-days-header .dmc--calendar--cell:nth-child(7) {\n  background-color: #4c4c4c;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell {\n  margin: 1px;\n  color: black;\n  -webkit-transition: border-radius 150ms ease-in-out, color 150ms ease-in-out, background-color 150ms ease-in-out, opacity ease-in-out 200ms;\n  transition: border-radius 150ms ease-in-out, color 150ms ease-in-out, background-color 150ms ease-in-out, opacity ease-in-out 200ms;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-in {\n  font-weight: bold;\n  background-color: #c3c3c3;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-in:hover {\n  opacity: 0.7;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-in.dmc--calendar--cell--weekend {\n  background-color: #ccbd88;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-out {\n  background-color: #f5f5f5;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-out:hover {\n  opacity: 0.7;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-out.dmc--calendar--cell--weekend {\n  background-color: #eddb9e;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--disabled {\n  color: #9c9c9c;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--disabled.dmc--calendar--cell--weekend {\n  color: #676666;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-START {\n  border-radius: 16px 0 0 16px;\n  background-color: #3bad3b;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-START.dmc--calendar--cell--weekend {\n  background-color: #44c844;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-MIDDLE {\n  background-color: #3bad3b;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-MIDDLE.dmc--calendar--cell--weekend {\n  background-color: #44c844;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-END {\n  border-radius: 0 16px 16px 0;\n  background-color: #3bad3b;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-END.dmc--calendar--cell--weekend {\n  background-color: #44c844;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-START_END {\n  border-radius: 16px;\n  background-color: #3bad3b;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-START_END.dmc--calendar--cell--weekend {\n  background-color: #44c844;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-START {\n  background-color: #45cb45;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-START.dmc--calendar--cell--weekend {\n  background-color: #4ce04c;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-MIDDLE {\n  background-color: #45cb45;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-MIDDLE.dmc--calendar--cell--weekend {\n  background-color: #4ce04c;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-END {\n  background-color: #45cb45;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-END.dmc--calendar--cell--weekend {\n  background-color: #4ce04c;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-START_END {\n  background-color: #45cb45;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-START_END.dmc--calendar--cell--weekend {\n  background-color: #4ce04c;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--selected {\n  color: white;\n  background-color: #2c7e2c;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--selected.dmc--calendar--cell--weekend {\n  background-color: #44c844;\n}\n.dyna-month-calendar--color-GREY_GREEN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--today {\n  color: red;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--header {\n  background-color: #191919;\n  color: white;\n  margin: 1px;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--header--nav-prev,\n.dyna-month-calendar--color-GREY_CYAN .dmc--header--nav-next {\n  background-color: #313131;\n  margin: 2px;\n  padding: 0 5px;\n  -webkit-transition: opacity ease-in-out 200ms;\n  transition: opacity ease-in-out 200ms;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--header--nav-prev:hover,\n.dyna-month-calendar--color-GREY_CYAN .dmc--header--nav-next:hover {\n  opacity: 0.7;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--header--label {\n  font-weight: bold;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--week-days-header .dmc--calendar--cell {\n  background-color: #353535;\n  margin: 1px;\n  color: white;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--week-days-header .dmc--calendar--cell:nth-child(6),\n.dyna-month-calendar--color-GREY_CYAN .dmc--week-days-header .dmc--calendar--cell:nth-child(7) {\n  background-color: #4c4c4c;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell {\n  margin: 1px;\n  color: black;\n  -webkit-transition: border-radius 150ms ease-in-out, color 150ms ease-in-out, background-color 150ms ease-in-out, opacity ease-in-out 200ms;\n  transition: border-radius 150ms ease-in-out, color 150ms ease-in-out, background-color 150ms ease-in-out, opacity ease-in-out 200ms;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-in {\n  font-weight: bold;\n  background-color: #c3c3c3;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-in:hover {\n  opacity: 0.7;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-in.dmc--calendar--cell--weekend {\n  background-color: #ccbd88;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-out {\n  background-color: #f5f5f5;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-out:hover {\n  opacity: 0.7;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--month-out.dmc--calendar--cell--weekend {\n  background-color: #eddb9e;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--disabled {\n  color: #9c9c9c;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--disabled.dmc--calendar--cell--weekend {\n  color: #676666;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-START {\n  border-radius: 16px 0 0 16px;\n  background-color: #3EB1C8;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-START.dmc--calendar--cell--weekend {\n  background-color: #3EB1C8;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-MIDDLE {\n  background-color: #3EB1C8;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-MIDDLE.dmc--calendar--cell--weekend {\n  background-color: #3EB1C8;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-END {\n  border-radius: 0 16px 16px 0;\n  background-color: #3EB1C8;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-END.dmc--calendar--cell--weekend {\n  background-color: #3EB1C8;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-START_END {\n  border-radius: 16px;\n  background-color: #3EB1C8;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--range-START_END.dmc--calendar--cell--weekend {\n  background-color: #3EB1C8;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-START {\n  background-color: #46c8e1;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-START.dmc--calendar--cell--weekend {\n  background-color: #46c8e1;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-MIDDLE {\n  background-color: #46c8e1;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-MIDDLE.dmc--calendar--cell--weekend {\n  background-color: #46c8e1;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-END {\n  background-color: #46c8e1;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-END.dmc--calendar--cell--weekend {\n  background-color: #46c8e1;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-START_END {\n  background-color: #46c8e1;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--hover-START_END.dmc--calendar--cell--weekend {\n  background-color: #46c8e1;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--selected {\n  color: white;\n  background-color: #3699ad;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--selected.dmc--calendar--cell--weekend {\n  background-color: #3EB1C8;\n}\n.dyna-month-calendar--color-GREY_CYAN .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--today {\n  color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/DynaMonthCalendar/layout.less":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/less-loader/dist/cjs.js!./src/DynaMonthCalendar/layout.less ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dyna-month-calendar {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: calc(100% - 16px);\n  height: 100%;\n  margin: auto;\n}\n@media (max-width: 768px) {\n  .dyna-month-calendar {\n    width: 100%;\n  }\n}\n.dyna-month-calendar--mode-VIEW .dmc--header--nav-prev,\n.dyna-month-calendar--mode-VIEW .dmc--header--nav-next {\n  display: none !important;\n}\n.dyna-month-calendar--mode-VIEW .dmc--calendar .dmc--calendar--line .dmc--calendar--cell {\n  cursor: default !important;\n}\n.dyna-month-calendar .dmc--header {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 15%;\n          flex: 1 1 15%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.dyna-month-calendar .dmc--header > * {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.dyna-month-calendar .dmc--header--nav-prev,\n.dyna-month-calendar .dmc--header--nav-next {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 14.2857%;\n          flex: 1 1 14.2857%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: pointer;\n  font-size: 16px;\n}\n.dyna-month-calendar .dmc--header--label {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 85.7143%;\n          flex: 1 1 85.7143%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.dyna-month-calendar .dmc--week-days-header {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 10%;\n          flex: 1 1 10%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.dyna-month-calendar .dmc--week-days-header .dmc--calendar--cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.dyna-month-calendar .dmc--calendar {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 75%;\n          flex: 1 1 75%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.dyna-month-calendar .dmc--calendar .dmc--calendar--line {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.dyna-month-calendar .dmc--calendar .dmc--calendar--line .dmc--calendar--cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  cursor: pointer;\n}\n.dyna-month-calendar .dmc--calendar .dmc--calendar--line .dmc--calendar--cell--disabled {\n  cursor: default;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
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
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
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

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

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
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
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

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
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

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

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

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

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
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

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
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


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
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/DynaMonthCalendar/Tooltip.module.less":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib??ref--7-1!./node_modules/postcss-loader/lib??postcss!./node_modules/less-loader/dist/cjs.js!./src/DynaMonthCalendar/Tooltip.module.less ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Tooltip-module-root--13ruotryKz2d {\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n", ""]);

// exports
exports.locals = {
	"root": "Tooltip-module-root--13ruotryKz2d"
};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/DynaDatePickers/DynaDatePicker.tsx":
/*!************************************************!*\
  !*** ./src/DynaDatePickers/DynaDatePicker.tsx ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "react");

var moment = __webpack_require__(/*! moment */ "moment");

var dyna_ui_field_wrapper_1 = __webpack_require__(/*! dyna-ui-field-wrapper */ "dyna-ui-field-wrapper");

exports.EMode = dyna_ui_field_wrapper_1.EMode;
exports.EStyle = dyna_ui_field_wrapper_1.EStyle;
exports.ESize = dyna_ui_field_wrapper_1.ESize;

var dyna_ui_button_1 = __webpack_require__(/*! dyna-ui-button */ "dyna-ui-button");

var dyna_ui_picker_container_1 = __webpack_require__(/*! dyna-ui-picker-container */ "dyna-ui-picker-container");

var DynaMonthCalendar_1 = __webpack_require__(/*! ../DynaMonthCalendar/DynaMonthCalendar */ "./src/DynaMonthCalendar/DynaMonthCalendar.tsx");

exports.ERangePointMode = DynaMonthCalendar_1.ERangePointMode;

var utils_1 = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.tsx");

var colorMixer_1 = __webpack_require__(/*! ../colorMixer */ "./src/colorMixer.ts");

var faIcon_1 = __webpack_require__(/*! ../utils/faIcon */ "./src/utils/faIcon.tsx");

var utils_2 = __webpack_require__(/*! ./utils */ "./src/DynaDatePickers/utils.ts");

__webpack_require__(/*! ./style.less */ "./src/DynaDatePickers/style.less");

var DynaDatePicker =
/** @class */
function (_super) {
  __extends(DynaDatePicker, _super);

  function DynaDatePicker(props) {
    var _this = _super.call(this, props) || this;

    _this.handleDaySelect = function (name, date) {
      if (_this.props.closeOnSelect) _this.setState({
        showPicker: false
      });
      var onChange = _this.props.onChange;
      onChange(name, date);
    };

    _this.lastFocused = null;

    _this.handlerTodayClick = function () {
      var name = _this.props.name;

      _this.monthCalendar.setViewport(new Date());

      _this.handleDaySelect(name, utils_1.startOfDayDate(new Date()));
    };

    _this.handlerUserCame = function () {
      if (_this.props.mode === dyna_ui_field_wrapper_1.EMode.VIEW) return;
      if (_this.lastFocused && Number(new Date()) - Number(_this.lastFocused) < 300) return;
      var _a = _this.props,
          value = _a.value,
          onShowPicker = _a.onShowPicker;
      var showPicker = !_this.state.showPicker;

      _this.setState({
        showPicker: showPicker
      });

      if (showPicker) _this.monthCalendar.setViewport(value || _this.props.min || new Date()); // value might be null if not passed in the props

      if (showPicker && onShowPicker) onShowPicker();
      _this.lastFocused = new Date();
    };

    _this.handlerOutsideClick = function () {
      _this.setState({
        showPicker: false
      });
    };

    _this.handlerInputKeyPress = function (event) {
      var onShowPicker = _this.props.onShowPicker;
      var showPicker = utils_2.getShowPickerOnKeyPress(event, _this.state.showPicker);
      if (showPicker !== null) _this.setState({
        showPicker: showPicker
      });
      if (showPicker === true && onShowPicker) onShowPicker();
    };

    _this.state = {
      showPicker: false
    };
    return _this;
  }

  DynaDatePicker.prototype.renderPicker = function () {
    var _this = this;

    var _a = this.props,
        color = _a.color,
        showTodayButton = _a.showTodayButton,
        showCloseButton = _a.showCloseButton,
        todayButtonLabel = _a.todayButtonLabel,
        closeButtonLabel = _a.closeButtonLabel;
    var _b = this.props,
        mode = _b.mode,
        label = _b.label,
        size = _b.size,
        pickerSize = _b.pickerSize,
        name = _b.name,
        value = _b.value,
        values = _b.values,
        start = _b.start,
        end = _b.end,
        min = _b.min,
        max = _b.max,
        pickerHeader = _b.pickerHeader,
        pickerBody = _b.pickerBody,
        pickerFooter = _b.pickerFooter;
    var _c = this.props,
        staringFromWeekDay = _c.staringFromWeekDay,
        renderPickerMonthYear = _c.renderPickerMonthYear,
        renderPickerWeekDay = _c.renderPickerWeekDay,
        renderPickerDay = _c.renderPickerDay;
    var _d = this.props,
        renderTooltip = _d.renderTooltip,
        tooltipDirection = _d.tooltipDirection;
    var onViewportChange = this.props.onViewportChange;
    var showPicker = this.state.showPicker;
    var show = mode === dyna_ui_field_wrapper_1.EMode.EDIT && showPicker;
    var colors = colorMixer_1.colorMixer(color);
    var todayButtonDisabled = moment().isBefore(min || new Date()) || moment().isAfter(max || new Date());
    var buttonSize = utils_2.getPickerButtonSize(pickerSize || size);
    return React.createElement(dyna_ui_picker_container_1.DynaPickerContainer, {
      style: dyna_ui_picker_container_1.EStyle.ROUNDED,
      color: colors.pickerContainerColor,
      show: show
    }, React.createElement("div", {
      className: "ddp-picker-container"
    }, React.createElement("div", {
      className: "ddp--calendar--label"
    }, React.createElement("h2", null, label)), !!pickerHeader && React.createElement("div", {
      className: "ddp--picker-custom-content"
    }, pickerHeader), React.createElement(DynaMonthCalendar_1.DynaMonthCalendar, {
      ref: function ref(component) {
        return _this.monthCalendar = component;
      },
      name: name,
      color: colors.calendarColor,
      start: start,
      end: end,
      min: min,
      max: max,
      value: value,
      values: values,
      staringFromWeekDay: staringFromWeekDay,
      onViewportChange: onViewportChange,
      onChange: this.handleDaySelect,
      renderPickerDay: renderPickerDay,
      renderPickerWeekDay: renderPickerWeekDay,
      renderPickerMonthYear: renderPickerMonthYear,
      renderTooltip: renderTooltip,
      tooltipDirection: tooltipDirection
    }), !!pickerBody && React.createElement("div", {
      className: "ddp--picker-custom-content"
    }, pickerBody), React.createElement("div", {
      className: "ddp--calendar--button-bar"
    }, showTodayButton ? React.createElement("div", null, React.createElement(dyna_ui_button_1.DynaButton, {
      style: dyna_ui_button_1.EStyle.ROUNDED,
      color: colors.pickerButtonColor,
      size: buttonSize,
      disabled: todayButtonDisabled,
      onClick: this.handlerTodayClick
    }, todayButtonLabel)) : null, showCloseButton ? React.createElement("div", null, React.createElement(dyna_ui_button_1.DynaButton, {
      style: dyna_ui_button_1.EStyle.ROUNDED,
      color: colors.pickerButtonColor,
      size: buttonSize,
      onClick: this.handlerUserCame
    }, closeButtonLabel)) : null), !!pickerFooter && React.createElement("div", {
      className: "ddp--picker-custom-content"
    }, pickerFooter)));
  };

  DynaDatePicker.prototype.renderInputDates = function () {
    var _a = this.props,
        value = _a.value,
        values = _a.values,
        renderInputDate = _a.renderInputDate;
    return [].concat(value, values).filter(function (d) {
      return !!d;
    }).map(function (d) {
      return new Date(d);
    }).map(function (d) {
      return Number(d);
    }).sort(function (a, b) {
      return a - b;
    }).map(function (n) {
      return new Date(n);
    }).map(renderInputDate).join(', ');
  };

  DynaDatePicker.prototype.render = function () {
    var _a = this.props,
        userClassName = _a.className,
        mode = _a.mode,
        style = _a.style,
        size = _a.size,
        pickerSize = _a.pickerSize,
        color = _a.color,
        label = _a.label,
        required = _a.required,
        validationMessage = _a.validationMessage;
    var colors = colorMixer_1.colorMixer(color);
    var className = ['dyna-date-picker', userClassName, "dyna-date-picker-mode-" + mode, "dyna-date-picker-style-" + style, "dyna-date-picker-size-" + (pickerSize || size)].filter(Boolean).join(' ');
    return React.createElement("div", {
      className: className
    }, React.createElement(dyna_ui_field_wrapper_1.DynaFieldWrapper, {
      mode: mode,
      style: style,
      color: colors.fieldColor,
      size: size,
      label: label,
      required: required,
      inputElementSelector: ".ddp-input-control",
      validationMessage: validationMessage,
      footer: this.renderPicker(),
      onOutsideClick: this.handlerOutsideClick
    }, React.createElement("input", {
      className: "ddp-input-control",
      readOnly: true,
      value: this.renderInputDates(),
      onFocus: this.handlerUserCame,
      onClick: this.handlerUserCame,
      onKeyDown: this.handlerInputKeyPress
    })));
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
    pickerBody: null,
    pickerFooter: null,
    style: dyna_ui_field_wrapper_1.EStyle.INLINE_ROUNDED,
    color: colorMixer_1.EColor.GREY_ORANGE_GREEN,
    start: null,
    end: null,
    value: null,
    values: [],
    min: null,
    max: null,
    staringFromWeekDay: 1,
    showTodayButton: true,
    showCloseButton: true,
    closeOnSelect: true,
    todayButtonLabel: React.createElement("span", null, faIcon_1.faIcon('calendar'), " Today"),
    closeButtonLabel: React.createElement("span", null, faIcon_1.faIcon('check'), " Ok"),
    renderInputDate: function renderInputDate(date) {
      return date && moment(date).format("dd DD MMM YY") || "";
    },
    renderPickerMonthYear: function renderPickerMonthYear(month, year) {
      return React.createElement("div", null, utils_1.monthsLongNames[month], " ", year);
    },
    renderPickerWeekDay: function renderPickerWeekDay(weekDay) {
      return React.createElement("div", null, utils_1.weekDaysShortNames[weekDay]);
    },
    renderPickerDay: function renderPickerDay(date, dayNumber) {
      return React.createElement("div", null, dayNumber);
    },
    onChange: function onChange(name, date) {
      return undefined;
    }
  };
  return DynaDatePicker;
}(React.Component);

exports.DynaDatePicker = DynaDatePicker;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__extends, "__extends", "/Users/dennisat/dev/dyna/dyna-ui-date/src/DynaDatePickers/DynaDatePicker.tsx");
  reactHotLoader.register(DynaDatePicker, "DynaDatePicker", "/Users/dennisat/dev/dyna/dyna-ui-date/src/DynaDatePickers/DynaDatePicker.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/DynaDatePickers/DynaDateRangePicker.tsx":
/*!*****************************************************!*\
  !*** ./src/DynaDatePickers/DynaDateRangePicker.tsx ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "react");

var moment = __webpack_require__(/*! moment */ "moment");

var dyna_ui_field_wrapper_1 = __webpack_require__(/*! dyna-ui-field-wrapper */ "dyna-ui-field-wrapper");

var dyna_ui_button_1 = __webpack_require__(/*! dyna-ui-button */ "dyna-ui-button");

var dyna_ui_picker_container_1 = __webpack_require__(/*! dyna-ui-picker-container */ "dyna-ui-picker-container");

var DynaMonthCalendar_1 = __webpack_require__(/*! ../DynaMonthCalendar/DynaMonthCalendar */ "./src/DynaMonthCalendar/DynaMonthCalendar.tsx");

var utils_1 = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.tsx");

var colorMixer_1 = __webpack_require__(/*! ../colorMixer */ "./src/colorMixer.ts");

var faIcon_1 = __webpack_require__(/*! ../utils/faIcon */ "./src/utils/faIcon.tsx");

var utils_2 = __webpack_require__(/*! ./utils */ "./src/DynaDatePickers/utils.ts");

__webpack_require__(/*! ./style.less */ "./src/DynaDatePickers/style.less");

var EEditDate;

(function (EEditDate) {
  EEditDate["START"] = "START";
  EEditDate["END"] = "END";
})(EEditDate = exports.EEditDate || (exports.EEditDate = {}));

var DynaDateRangePicker =
/** @class */
function (_super) {
  __extends(DynaDateRangePicker, _super);

  function DynaDateRangePicker(props) {
    var _this = _super.call(this, props) || this;

    _this.handleHoverDate = function (name, date) {
      var hoverOn = undefined;
      if (_this.state.targetDate === EEditDate.END) hoverOn = date;
      if (hoverOn && hoverOn.valueOf() < _this.props.start.valueOf()) hoverOn = undefined;
      if (hoverOn !== _this.state.hoverOn) _this.setState({
        hoverOn: hoverOn
      });
    };

    _this.handleDaySelect = function (name, date) {
      var _a = _this.props,
          prevStart = _a.start,
          onChange = _a.onChange;
      var prevTargetDate = _this.state.targetDate;
      var start, end;
      var targetDate;
      var hoverOn = _this.state.hoverOn;

      switch (prevTargetDate) {
        case EEditDate.START:
          start = date;
          end = date;
          targetDate = EEditDate.END;
          break;

        case EEditDate.END:
          if (date.valueOf() >= prevStart.valueOf()) {
            hoverOn = undefined;
            start = prevStart;
            end = date;
            targetDate = EEditDate.START;
          } else {
            // is prior than start, behave like start is selected
            start = date;
            end = date;
            targetDate = EEditDate.END;
          }

          break;
      }

      onChange(name, start, end);

      _this.setState({
        targetDate: targetDate,
        hoverOn: hoverOn
      });
    };

    _this.handleMonthCalendarAViewportChange = function (name, date) {
      var onViewportChange = _this.props.onViewportChange;

      _this.monthCalendarB.setViewport(moment(date).add(1, 'month').toDate());

      onViewportChange && onViewportChange(name, date);
    };

    _this.handleMonthCalendarBViewportChange = function (name, date) {
      var onViewportChange = _this.props.onViewportChange;

      _this.monthCalendarA.setViewport(moment(date).add(-1, 'month').toDate());

      onViewportChange && onViewportChange(name, date);
    };

    _this.handleCalendarsMouseLeave = function () {
      _this.setState({
        hoverOn: null
      });
    };

    _this.lastFocused = null;

    _this.handlerTodayClick = function () {
      _this.setViewport(new Date());
    };

    _this.handlerUserCame = function () {
      if (_this.props.mode === dyna_ui_field_wrapper_1.EMode.VIEW) return;
      if (_this.lastFocused && Number(new Date()) - Number(_this.lastFocused) < 300) return;
      var _a = _this.props,
          editDate = _a.editDate,
          onShowPicker = _a.onShowPicker;
      var showPicker = !_this.state.showPicker;

      _this.setState({
        showPicker: showPicker,
        targetDate: editDate
      });

      if (showPicker && onShowPicker) onShowPicker();

      _this.setViewport(_this.viewport || _this.props.min || new Date());

      _this.lastFocused = new Date();
    };

    _this.handlerOutsideClick = function () {
      var editDate = _this.props.editDate;

      _this.setState({
        showPicker: false,
        targetDate: editDate
      });
    };

    _this.handlerInputKeyPress = function (event) {
      var _a = _this.props,
          editDate = _a.editDate,
          onShowPicker = _a.onShowPicker;
      var targetDate = _this.state.targetDate;
      var showPicker = utils_2.getShowPickerOnKeyPress(event, _this.state.showPicker);
      if (showPicker !== null) _this.setState({
        showPicker: showPicker,
        targetDate: showPicker ? targetDate // do not change it
        : editDate
      });
      if (showPicker === true && onShowPicker) onShowPicker();
    };

    _this.state = {
      showPicker: false,
      targetDate: props.editDate,
      hoverOn: undefined
    };
    return _this;
  }

  Object.defineProperty(DynaDateRangePicker.prototype, "viewport", {
    get: function get() {
      var _a = this.props,
          start = _a.start,
          end = _a.end,
          editDate = _a.editDate;
      return editDate === EEditDate.START ? start : end;
    },
    enumerable: true,
    configurable: true
  });

  DynaDateRangePicker.prototype.setViewport = function (date) {
    this.monthCalendarA.setViewport(date);
    this.monthCalendarB.setViewport(moment(date).add(1, 'month').toDate());
  };

  DynaDateRangePicker.prototype.renderPicker = function () {
    var _this = this;

    var _a = this.props,
        color = _a.color,
        showTodayButton = _a.showTodayButton,
        showCloseButton = _a.showCloseButton,
        todayButtonLabel = _a.todayButtonLabel,
        closeButtonLabel = _a.closeButtonLabel,
        mode = _a.mode,
        size = _a.size,
        pickerSize = _a.pickerSize,
        label = _a.label,
        name = _a.name,
        start = _a.start,
        end = _a.end,
        min = _a.min,
        max = _a.max,
        pickerHeader = _a.pickerHeader,
        pickerBody = _a.pickerBody,
        pickerFooter = _a.pickerFooter,
        staringFromWeekDay = _a.staringFromWeekDay,
        renderPickerMonthYear = _a.renderPickerMonthYear,
        renderPickerWeekDay = _a.renderPickerWeekDay,
        renderPickerDay = _a.renderPickerDay,
        renderTooltip = _a.renderTooltip,
        tooltipDirection = _a.tooltipDirection;
    var _b = this.state,
        showPicker = _b.showPicker,
        hoverOn = _b.hoverOn;
    var show = mode === dyna_ui_field_wrapper_1.EMode.EDIT && showPicker;
    var colors = colorMixer_1.colorMixer(color);
    var buttonSize = utils_2.getPickerButtonSize(pickerSize || size);
    return React.createElement(dyna_ui_picker_container_1.DynaPickerContainer, {
      style: dyna_ui_picker_container_1.EStyle.ROUNDED,
      color: colors.pickerContainerColor,
      show: show
    }, React.createElement("div", {
      className: "ddp-picker-container"
    }, React.createElement("div", {
      className: "ddp--calendar--label"
    }, React.createElement("h2", null, label)), !!pickerHeader && React.createElement("div", {
      className: "ddp--picker-custom-content"
    }, pickerHeader), React.createElement("div", {
      className: "ddp--double-calendar-container",
      onMouseLeave: this.handleCalendarsMouseLeave
    }, React.createElement(DynaMonthCalendar_1.DynaMonthCalendar, {
      className: "ddp--double-calendar-A",
      ref: function ref(component) {
        return _this.monthCalendarA = component;
      },
      name: name,
      color: colors.calendarColor,
      start: start,
      end: end,
      min: min,
      max: max,
      hoverStart: start,
      hoverOn: hoverOn,
      staringFromWeekDay: staringFromWeekDay,
      onViewportChange: this.handleMonthCalendarAViewportChange,
      onHover: this.handleHoverDate,
      onChange: this.handleDaySelect,
      renderPickerDay: renderPickerDay,
      renderPickerWeekDay: renderPickerWeekDay,
      renderPickerMonthYear: renderPickerMonthYear,
      renderTooltip: renderTooltip,
      tooltipDirection: tooltipDirection
    }), React.createElement(DynaMonthCalendar_1.DynaMonthCalendar, {
      className: "ddp--double-calendar-B",
      ref: function ref(component) {
        return _this.monthCalendarB = component;
      },
      name: name,
      color: colors.calendarColor,
      start: start,
      end: end,
      min: min,
      max: max,
      hoverStart: start,
      hoverOn: hoverOn,
      staringFromWeekDay: staringFromWeekDay,
      onViewportChange: this.handleMonthCalendarBViewportChange,
      onHover: this.handleHoverDate,
      onChange: this.handleDaySelect,
      renderPickerDay: renderPickerDay,
      renderPickerWeekDay: renderPickerWeekDay,
      renderPickerMonthYear: renderPickerMonthYear,
      renderTooltip: renderTooltip,
      tooltipDirection: tooltipDirection
    })), !!pickerBody && React.createElement("div", {
      className: "ddp--picker-custom-content"
    }, pickerBody), React.createElement("div", {
      className: "ddp--calendar--button-bar"
    }, showTodayButton ? React.createElement("div", null, React.createElement(dyna_ui_button_1.DynaButton, {
      style: dyna_ui_button_1.EStyle.ROUNDED,
      color: colors.pickerButtonColor,
      size: buttonSize,
      onClick: this.handlerTodayClick
    }, todayButtonLabel)) : null, showCloseButton ? React.createElement("div", null, React.createElement(dyna_ui_button_1.DynaButton, {
      style: dyna_ui_button_1.EStyle.ROUNDED,
      color: colors.pickerButtonColor,
      size: buttonSize,
      onClick: this.handlerUserCame
    }, closeButtonLabel)) : null), !!pickerFooter && React.createElement("div", {
      className: "ddp--picker-custom-content"
    }, pickerFooter)));
  };

  DynaDateRangePicker.prototype.renderInputDates = function () {
    var _a = this.props,
        start = _a.start,
        end = _a.end,
        editDate = _a.editDate,
        renderInputDate = _a.renderInputDate;

    switch (editDate) {
      case EEditDate.START:
        return renderInputDate(start);

      case EEditDate.END:
        return renderInputDate(end);
    }
  };

  DynaDateRangePicker.prototype.render = function () {
    var _a = this.props,
        userClassName = _a.className,
        mode = _a.mode,
        style = _a.style,
        size = _a.size,
        pickerSize = _a.pickerSize,
        color = _a.color,
        label = _a.label,
        required = _a.required,
        validationMessage = _a.validationMessage;
    var colors = colorMixer_1.colorMixer(color);
    var className = ['dyna-date-picker', userClassName, "dyna-date-picker-mode-" + mode, "dyna-date-picker-style-" + style, "dyna-date-picker-size-" + (pickerSize || size)].filter(Boolean).join(' ');
    return React.createElement("div", {
      className: className
    }, React.createElement(dyna_ui_field_wrapper_1.DynaFieldWrapper, {
      mode: mode,
      style: style,
      color: colors.fieldColor,
      size: size,
      label: label,
      required: required,
      inputElementSelector: ".ddp-input-control",
      validationMessage: validationMessage,
      footer: this.renderPicker(),
      onOutsideClick: this.handlerOutsideClick
    }, React.createElement("input", {
      className: "ddp-input-control",
      readOnly: true,
      value: this.renderInputDates(),
      onFocus: this.handlerUserCame,
      onClick: this.handlerUserCame,
      onKeyDown: this.handlerInputKeyPress
    })));
  };

  DynaDateRangePicker.defaultProps = {
    className: '',
    name: null,
    label: null,
    mode: dyna_ui_field_wrapper_1.EMode.EDIT,
    size: dyna_ui_field_wrapper_1.ESize.MEDIUM,
    required: null,
    validationMessage: null,
    pickerHeader: null,
    pickerBody: null,
    pickerFooter: null,
    style: dyna_ui_field_wrapper_1.EStyle.INLINE_ROUNDED,
    color: colorMixer_1.EColor.GREY_ORANGE_GREEN,
    start: null,
    end: null,
    min: null,
    max: null,
    staringFromWeekDay: 1,
    showTodayButton: true,
    showCloseButton: true,
    todayButtonLabel: React.createElement("span", null, faIcon_1.faIcon('calendar'), " Today"),
    closeButtonLabel: React.createElement("span", null, faIcon_1.faIcon('check'), " Ok"),
    renderInputDate: function renderInputDate(date) {
      return date && moment(date).format('dd DD MMM YY') || '';
    },
    renderPickerMonthYear: function renderPickerMonthYear(month, year) {
      return React.createElement("div", null, utils_1.monthsLongNames[month], " ", year);
    },
    renderPickerWeekDay: function renderPickerWeekDay(weekDay) {
      return React.createElement("div", null, utils_1.weekDaysShortNames[weekDay]);
    },
    renderPickerDay: function renderPickerDay(date, dayNumber) {
      return React.createElement("div", null, dayNumber);
    },
    onChange: function onChange(name, date) {
      return undefined;
    }
  };
  return DynaDateRangePicker;
}(React.Component);

exports.DynaDateRangePicker = DynaDateRangePicker;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__extends, "__extends", "/Users/dennisat/dev/dyna/dyna-ui-date/src/DynaDatePickers/DynaDateRangePicker.tsx");
  reactHotLoader.register(EEditDate, "EEditDate", "/Users/dennisat/dev/dyna/dyna-ui-date/src/DynaDatePickers/DynaDateRangePicker.tsx");
  reactHotLoader.register(DynaDateRangePicker, "DynaDateRangePicker", "/Users/dennisat/dev/dyna/dyna-ui-date/src/DynaDatePickers/DynaDateRangePicker.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/DynaDatePickers/style.less":
/*!****************************************!*\
  !*** ./src/DynaDatePickers/style.less ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/lib??ref--8-2!../../node_modules/less-loader/dist/cjs.js!./style.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/DynaDatePickers/style.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/DynaDatePickers/utils.ts":
/*!**************************************!*\
  !*** ./src/DynaDatePickers/utils.ts ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var dyna_ui_field_wrapper_1 = __webpack_require__(/*! dyna-ui-field-wrapper */ "dyna-ui-field-wrapper");

var dyna_ui_button_1 = __webpack_require__(/*! dyna-ui-button */ "dyna-ui-button");

exports.getShowPickerOnKeyPress = function (event, showPicker) {
  if (event.keyCode !== undefined) {
    switch (event.keyCode) {
      case 32: // space

      case 13:
        // enter
        return !showPicker;

      case 27: // escape

      case 9:
        // tab
        return false;

      default:
        return null;
    }
  } else {
    switch (event.code) {
      case 'Space':
      case 'Enter':
        return !showPicker;

      case 'Escape':
      case 'Tab':
        return false;

      default:
        return null;
    }
  }
};

exports.getPickerButtonSize = function (fieldSize) {
  switch (fieldSize) {
    case dyna_ui_field_wrapper_1.ESize.XSMALL:
      return dyna_ui_button_1.ESize.MEDIUM;

    case dyna_ui_field_wrapper_1.ESize.SMALL:
      return dyna_ui_button_1.ESize.LARGE;

    case dyna_ui_field_wrapper_1.ESize.MEDIUM:
      return dyna_ui_button_1.ESize.LARGE;

    case dyna_ui_field_wrapper_1.ESize.LARGE:
      return dyna_ui_button_1.ESize.LARGE;
  }
};

/***/ }),

/***/ "./src/DynaMonthCalendar/DynaMonthCalendar.tsx":
/*!*****************************************************!*\
  !*** ./src/DynaMonthCalendar/DynaMonthCalendar.tsx ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "react");

var moment = __webpack_require__(/*! moment */ "moment");

var dyna_ui_field_wrapper_1 = __webpack_require__(/*! dyna-ui-field-wrapper */ "dyna-ui-field-wrapper");

var interfaces_1 = __webpack_require__(/*! ../interfaces */ "./src/interfaces.ts");

var Tooltip_1 = __webpack_require__(/*! ./Tooltip */ "./src/DynaMonthCalendar/Tooltip.tsx");

var utils_1 = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.tsx");

var faIcon_1 = __webpack_require__(/*! ../utils/faIcon */ "./src/utils/faIcon.tsx");

__webpack_require__(/*! ./layout.less */ "./src/DynaMonthCalendar/layout.less");

__webpack_require__(/*! ./color.less */ "./src/DynaMonthCalendar/color.less");

var ERangePointMode;

(function (ERangePointMode) {
  ERangePointMode["START"] = "START";
  ERangePointMode["END"] = "END";
  ERangePointMode["START_END"] = "START_END";
  ERangePointMode["OUT"] = "OUT";
  ERangePointMode["MIDDLE"] = "MIDDLE";
})(ERangePointMode = exports.ERangePointMode || (exports.ERangePointMode = {}));

var DynaMonthCalendar =
/** @class */
function (_super) {
  __extends(DynaMonthCalendar, _super);

  function DynaMonthCalendar(props) {
    var _this = _super.call(this, props) || this;

    _this.handleNavMonthPrev = function () {
      _this.moveMonth(-1);
    };

    _this.handleNavMonthNext = function () {
      _this.moveMonth(+1);
    };

    _this.state = {
      viewport: null,
      calendarTable: null
    };
    return _this;
  }

  DynaMonthCalendar.prototype.componentDidMount = function () {
    this.checkProps({}, this.props);
  };

  DynaMonthCalendar.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
    this.checkProps(prevProps, this.props);
  };

  DynaMonthCalendar.prototype.checkProps = function (prevProps, nextProps) {
    if (nextProps.value !== prevProps.value || JSON.stringify(nextProps.values) !== JSON.stringify(prevProps.values) || nextProps.start !== prevProps.start || nextProps.end !== prevProps.end || nextProps.hoverOn !== prevProps.hoverOn) {
      this.setStateCalendarTable(nextProps);
    }
  };

  DynaMonthCalendar.prototype.setViewport = function (viewport) {
    var _this = this;

    var _a = this.props,
        name = _a.name,
        onViewportChange = _a.onViewportChange;
    if (moment(this.state.viewport).isSame(viewport, 'month')) return;
    this.setState({
      viewport: viewport
    }, function () {
      _this.setStateCalendarTable(_this.props, function () {
        onViewportChange(name, viewport);
      });
    });
  };

  DynaMonthCalendar.prototype.setStateCalendarTable = function (props, cbUpdated) {
    var min = props.min,
        max = props.max,
        rs = props.start,
        re = props.end,
        hf = props.hoverStart,
        ho = props.hoverOn,
        value = props.value,
        values = props.values;
    min = utils_1.startOfDayDate(min);
    max = utils_1.startOfDayDate(max);
    var rangeStart = utils_1.startOfDayMoment(rs);
    var rangeEnd = utils_1.startOfDayMoment(re);
    var hoverStart = utils_1.startOfDayMoment(hf);
    var hoverOn = utils_1.startOfDayMoment(ho);
    value = utils_1.startOfDayDate(value);
    values = values.map(utils_1.startOfDayDate);
    var viewport = utils_1.startOfDayDate(this.state.viewport || this.props.value || this.props.values[0] || new Date());
    var uiCalendarTable = [];
    var calendarTable = utils_1.createCalendarTable(viewport, this.props.staringFromWeekDay);
    calendarTable.forEach(function (calendarLine) {
      var lineCells = [];
      calendarLine.forEach(function (_cellDate) {
        var cellDate = moment(_cellDate);
        var calendarDayCell = {
          date: cellDate.toDate(),
          isToday: false,
          selected: null,
          inCurrentMonth: null,
          weekend: null,
          disabled: null,
          inRange: null,
          hovered: null
        }; // is today

        calendarDayCell.isToday = cellDate.isSame(new Date(), 'day'); // selected updated

        calendarDayCell.selected = cellDate.isSame(value) || values.reduce(function (acc, valuesDate) {
          if (moment(valuesDate).isSame(cellDate)) acc = true;
          return acc;
        }, false); // inCurrentMonth

        calendarDayCell.inCurrentMonth = cellDate.month() === moment(viewport).month(); // disabled update

        calendarDayCell.disabled = false;
        if (min && cellDate.isBefore(min)) calendarDayCell.disabled = true;
        if (max && cellDate.isAfter(max)) calendarDayCell.disabled = true; // is weekend

        calendarDayCell.weekend = [6, 0].includes(cellDate.weekday()); // range update by start and end of the range

        calendarDayCell.inRange = DynaMonthCalendar.getRangePointMode(rangeStart, rangeEnd, cellDate);
        calendarDayCell.hovered = DynaMonthCalendar.getRangePointMode(hoverStart, hoverOn, cellDate);
        lineCells.push(calendarDayCell);
      });
      uiCalendarTable.push(lineCells);
    });
    this.setState({
      viewport: viewport,
      calendarTable: uiCalendarTable
    }, cbUpdated);
  };

  DynaMonthCalendar.getRangePointMode = function (start, end, now) {
    if (!start || !end) return ERangePointMode.OUT;

    if (end.isBefore(start)) {
      var h = end;
      end = start;
      start = h;
    }

    var output;

    if (start) {
      if (now.isBefore(start) || end && now.isAfter(end)) {
        output = ERangePointMode.OUT;
      }

      if (now.isSame(start)) {
        output = ERangePointMode.START;
      }

      if (end && now.isSame(end)) {
        output = ERangePointMode.END;
      }

      if (now.isSame(start) && end && now.isSame(end)) {
        output = ERangePointMode.START_END;
      }

      if (now.isAfter(start) && end && now.isBefore(end)) {
        output = ERangePointMode.MIDDLE;
      }

      if (!end && now.isAfter(start)) {
        output = ERangePointMode.OUT;
      }
    } else {
      output = ERangePointMode.OUT;
    }

    return output;
  };

  DynaMonthCalendar.prototype.moveMonth = function (direction) {
    var _this = this;

    if (this.props.mode === dyna_ui_field_wrapper_1.EMode.VIEW) return;
    var _a = this.props,
        name = _a.name,
        onViewportChange = _a.onViewportChange;
    var viewport = moment(this.state.viewport).add(direction, 'months').toDate();
    if (this.state.viewport === viewport) return;
    this.setState({
      viewport: viewport
    }, function () {
      _this.setStateCalendarTable(_this.props);

      onViewportChange(name, viewport);
    });
  };

  DynaMonthCalendar.prototype.handleHoverDayCell = function (calendarCell) {
    var _a = this.props,
        name = _a.name,
        onHover = _a.onHover;
    onHover(name, calendarCell.date);
  };

  DynaMonthCalendar.prototype.handleDaySelect = function (calendarCell) {
    if (this.props.mode === dyna_ui_field_wrapper_1.EMode.VIEW) return;
    if (calendarCell.disabled) return;
    var _a = this.props,
        name = _a.name,
        onChange = _a.onChange;
    onChange(name, calendarCell.date);
  };

  DynaMonthCalendar.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        userClassName = _a.className,
        mode = _a.mode,
        color = _a.color,
        staringFromWeekDay = _a.staringFromWeekDay,
        renderPickerWeekDay = _a.renderPickerWeekDay,
        renderPickerMonthYear = _a.renderPickerMonthYear,
        renderPickerDay = _a.renderPickerDay,
        renderTooltip = _a.renderTooltip,
        tooltipDirection = _a.tooltipDirection;
    var _b = this.state,
        viewport = _b.viewport,
        calendarTable = _b.calendarTable;
    var className = [userClassName, 'dyna-month-calendar', "dyna-month-calendar--mode-" + mode, "dyna-month-calendar--color-" + color].filter(Boolean).join(' ');
    return React.createElement("div", {
      className: className
    }, React.createElement("div", {
      className: "dmc--header"
    }, React.createElement("div", {
      className: "dmc--header--nav-prev",
      onClick: this.handleNavMonthPrev
    }, faIcon_1.faIcon('caret-left')), React.createElement("div", {
      className: "dmc--header--label"
    }, renderPickerMonthYear(moment(viewport).month(), moment(viewport).year())), React.createElement("div", {
      className: "dmc--header--nav-next",
      onClick: this.handleNavMonthNext
    }, faIcon_1.faIcon('caret-right'))), React.createElement("div", {
      className: "dmc--week-days-header"
    }, Array(7).fill(null).map(function (v, index) {
      var weekDay = staringFromWeekDay + index;
      if (weekDay > 6) weekDay -= 7;
      return React.createElement("div", {
        key: index,
        className: "dmc--calendar--cell"
      }, renderPickerWeekDay(weekDay));
    })), React.createElement("div", {
      className: "dmc--calendar"
    }, calendarTable && calendarTable.map(function (calendarLine, index) {
      return React.createElement("div", {
        key: index,
        className: "dmc--calendar--line"
      }, calendarLine.map(function (calendarCell, index) {
        var date = moment(calendarCell.date);
        var className = ["dmc--calendar--cell", calendarCell.isToday ? "dmc--calendar--cell--today" : "", calendarCell.selected ? "dmc--calendar--cell--selected" : "", calendarCell.inCurrentMonth ? "dmc--calendar--cell--month-in" : "dmc--calendar--cell--month-out", calendarCell.disabled ? "dmc--calendar--cell--disabled" : "", calendarCell.weekend ? "dmc--calendar--cell--weekend" : "", "dmc--calendar--cell--range-" + calendarCell.inRange, "dmc--calendar--cell--hover-" + calendarCell.hovered].filter(Boolean).join(' ');
        return React.createElement("div", {
          key: index,
          className: className,
          onMouseEnter: function onMouseEnter() {
            return _this.handleHoverDayCell(calendarCell);
          },
          onClick: function onClick() {
            return _this.handleDaySelect(calendarCell);
          }
        }, React.createElement(Tooltip_1.Tooltip, {
          date: date.toDate(),
          color: color,
          tooltipDirection: tooltipDirection,
          renderTooltip: renderTooltip
        }, renderPickerDay(date.toDate(), date.get('D'), date.day(), calendarCell.inRange, calendarCell.hovered, calendarCell.inCurrentMonth)));
      }));
    })));
  };

  DynaMonthCalendar.defaultProps = {
    name: null,
    mode: dyna_ui_field_wrapper_1.EMode.EDIT,
    color: interfaces_1.EMonthCalendarColor.GREY_GREEN,
    start: null,
    end: null,
    value: null,
    values: [],
    min: null,
    max: null,
    hoverStart: null,
    hoverOn: null,
    staringFromWeekDay: 1,
    renderPickerMonthYear: function renderPickerMonthYear(month, year) {
      return React.createElement("div", null, utils_1.monthsLongNames[month], " ", year);
    },
    renderPickerWeekDay: function renderPickerWeekDay(weekDay) {
      return React.createElement("div", null, utils_1.weekDaysShortNames[weekDay]);
    },
    renderPickerDay: function renderPickerDay(date, dayNumber) {
      return React.createElement("div", null, dayNumber);
    },
    onViewportChange: function onViewportChange(name, date) {
      return undefined;
    },
    onHover: function onHover(name, date) {
      return undefined;
    },
    onChange: function onChange(name, date) {
      return undefined;
    }
  };
  return DynaMonthCalendar;
}(React.Component);

exports.DynaMonthCalendar = DynaMonthCalendar;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__extends, "__extends", "/Users/dennisat/dev/dyna/dyna-ui-date/src/DynaMonthCalendar/DynaMonthCalendar.tsx");
  reactHotLoader.register(ERangePointMode, "ERangePointMode", "/Users/dennisat/dev/dyna/dyna-ui-date/src/DynaMonthCalendar/DynaMonthCalendar.tsx");
  reactHotLoader.register(DynaMonthCalendar, "DynaMonthCalendar", "/Users/dennisat/dev/dyna/dyna-ui-date/src/DynaMonthCalendar/DynaMonthCalendar.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/DynaMonthCalendar/Tooltip.module.less":
/*!***************************************************!*\
  !*** ./src/DynaMonthCalendar/Tooltip.module.less ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/typings-for-css-modules-loader/lib??ref--7-1!../../node_modules/postcss-loader/lib??postcss!../../node_modules/less-loader/dist/cjs.js!./Tooltip.module.less */ "./node_modules/typings-for-css-modules-loader/lib/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/DynaMonthCalendar/Tooltip.module.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/DynaMonthCalendar/Tooltip.tsx":
/*!*******************************************!*\
  !*** ./src/DynaMonthCalendar/Tooltip.tsx ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "react");

var dyna_ui_tooltip_1 = __webpack_require__(/*! dyna-ui-tooltip */ "dyna-ui-tooltip");

var interfaces_1 = __webpack_require__(/*! ../interfaces */ "./src/interfaces.ts");

var styles = __webpack_require__(/*! ./Tooltip.module.less */ "./src/DynaMonthCalendar/Tooltip.module.less");

exports.Tooltip = function (props) {
  var className = props.className,
      date = props.date,
      calendarColor = props.color,
      renderTooltip = props.renderTooltip,
      tooltipDirection = props.tooltipDirection,
      children = props.children;
  if (!renderTooltip) return children;

  var color = function () {
    switch (calendarColor) {
      case interfaces_1.EMonthCalendarColor.GREY_CYAN:
        return dyna_ui_tooltip_1.EColor.WHITE_ORANGE;

      case interfaces_1.EMonthCalendarColor.GREY_GREEN:
        return dyna_ui_tooltip_1.EColor.WHITE_ORANGE;

      default:
        return dyna_ui_tooltip_1.EColor.WHITE_ORANGE;
    }
  }();

  return React.createElement(dyna_ui_tooltip_1.DynaTooltip, {
    className: [className, styles.root].filter(Boolean).join(' '),
    nodeType: "div",
    color: color,
    tooltipContent: renderTooltip(date),
    tooltipDirection: tooltipDirection
  }, children);
};

/***/ }),

/***/ "./src/DynaMonthCalendar/color.less":
/*!******************************************!*\
  !*** ./src/DynaMonthCalendar/color.less ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/lib??ref--8-2!../../node_modules/less-loader/dist/cjs.js!./color.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/DynaMonthCalendar/color.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/DynaMonthCalendar/layout.less":
/*!*******************************************!*\
  !*** ./src/DynaMonthCalendar/layout.less ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/lib??ref--8-2!../../node_modules/less-loader/dist/cjs.js!./layout.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/DynaMonthCalendar/layout.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/colorMixer.ts":
/*!***************************!*\
  !*** ./src/colorMixer.ts ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var dyna_ui_styles_1 = __webpack_require__(/*! dyna-ui-styles */ "dyna-ui-styles");

var interfaces_1 = __webpack_require__(/*! ./interfaces */ "./src/interfaces.ts");

var EColor;

(function (EColor) {
  EColor["GREY_ORANGE_GREEN_CALENDAR_GREEN"] = "GREY_ORANGE_GREEN_CALENDAR_GREEN";
  EColor["GREY_RED_GREEN_CALENDAR_GREEN"] = "GREY_RED_GREEN_CALENDAR_GREEN";
  EColor["WHITE_BLACK_CALENDAR_GREEN"] = "WHITE_BLACK_CALENDAR_GREEN";
  EColor["GREY_ORANGE_GREEN_CALENDAR_CYAN"] = "GREY_ORANGE_GREEN_CALENDAR_CYAN";
  EColor["GREY_RED_GREEN_CALENDAR_CYAN"] = "GREY_RED_GREEN_CALENDAR_CYAN";
  EColor["WHITE_BLACK_CALENDAR_CYAN"] = "WHITE_BLACK_CALENDAR_CYAN"; // this is the same with the xxx_CALENDAR_GREEN, is kept for backward compatibility

  EColor["GREY_ORANGE_GREEN"] = "GREY_ORANGE_GREEN";
  EColor["GREY_RED_GREEN"] = "GREY_RED_GREEN";
  EColor["WHITE_BLACK"] = "WHITE_BLACK";
})(EColor = exports.EColor || (exports.EColor = {}));

exports.colorMixer = function (color) {
  switch (color) {
    // green calendar
    case EColor.GREY_RED_GREEN_CALENDAR_GREEN:
    case EColor.GREY_RED_GREEN:
      return {
        calendarColor: interfaces_1.EMonthCalendarColor.GREY_GREEN,
        fieldColor: dyna_ui_styles_1.EColor.RED_WHITE,
        pickerButtonColor: dyna_ui_styles_1.EColor.RED_WHITE,
        pickerContainerColor: dyna_ui_styles_1.EColor.WHITE_RED
      };

    case EColor.GREY_ORANGE_GREEN_CALENDAR_GREEN:
    case EColor.GREY_ORANGE_GREEN:
      return {
        calendarColor: interfaces_1.EMonthCalendarColor.GREY_GREEN,
        fieldColor: dyna_ui_styles_1.EColor.ORANGE_WHITE,
        pickerButtonColor: dyna_ui_styles_1.EColor.ORANGE_WHITE,
        pickerContainerColor: dyna_ui_styles_1.EColor.WHITE_ORANGE
      };

    case EColor.WHITE_BLACK_CALENDAR_GREEN:
    case EColor.WHITE_BLACK:
      return {
        calendarColor: interfaces_1.EMonthCalendarColor.GREY_GREEN,
        fieldColor: dyna_ui_styles_1.EColor.BLACK_WHITE,
        pickerButtonColor: dyna_ui_styles_1.EColor.BLACK_WHITE,
        pickerContainerColor: dyna_ui_styles_1.EColor.WHITE_BLACK
      };
    // clean calendar

    case EColor.GREY_RED_GREEN_CALENDAR_CYAN:
      return {
        calendarColor: interfaces_1.EMonthCalendarColor.GREY_CYAN,
        fieldColor: dyna_ui_styles_1.EColor.RED_WHITE,
        pickerButtonColor: dyna_ui_styles_1.EColor.RED_WHITE,
        pickerContainerColor: dyna_ui_styles_1.EColor.WHITE_RED
      };

    case EColor.GREY_ORANGE_GREEN_CALENDAR_CYAN:
      return {
        calendarColor: interfaces_1.EMonthCalendarColor.GREY_CYAN,
        fieldColor: dyna_ui_styles_1.EColor.ORANGE_WHITE,
        pickerButtonColor: dyna_ui_styles_1.EColor.ORANGE_WHITE,
        pickerContainerColor: dyna_ui_styles_1.EColor.WHITE_ORANGE
      };

    case EColor.WHITE_BLACK_CALENDAR_CYAN:
      return {
        calendarColor: interfaces_1.EMonthCalendarColor.GREY_CYAN,
        fieldColor: dyna_ui_styles_1.EColor.BLACK_WHITE,
        pickerButtonColor: dyna_ui_styles_1.EColor.BLACK_WHITE,
        pickerContainerColor: dyna_ui_styles_1.EColor.WHITE_BLACK
      };
  }
};

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EColor, "EColor", "/Users/dennisat/dev/dyna/dyna-ui-date/src/colorMixer.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var DynaMonthCalendar_1 = __webpack_require__(/*! ./DynaMonthCalendar/DynaMonthCalendar */ "./src/DynaMonthCalendar/DynaMonthCalendar.tsx");

exports.DynaMonthCalendar = DynaMonthCalendar_1.DynaMonthCalendar;
exports.ERangePointMode = DynaMonthCalendar_1.ERangePointMode;

var interfaces_1 = __webpack_require__(/*! ./interfaces */ "./src/interfaces.ts");

exports.EDynaMonthCalendarColor = interfaces_1.EMonthCalendarColor;

var DynaDatePicker_1 = __webpack_require__(/*! ./DynaDatePickers/DynaDatePicker */ "./src/DynaDatePickers/DynaDatePicker.tsx");

exports.EMode = DynaDatePicker_1.EMode;
exports.ESize = DynaDatePicker_1.ESize;
exports.EStyle = DynaDatePicker_1.EStyle;
exports.DynaDatePicker = DynaDatePicker_1.DynaDatePicker;

var DynaDateRangePicker_1 = __webpack_require__(/*! ./DynaDatePickers/DynaDateRangePicker */ "./src/DynaDatePickers/DynaDateRangePicker.tsx");

exports.EEditDate = DynaDateRangePicker_1.EEditDate;
exports.DynaDateRangePicker = DynaDateRangePicker_1.DynaDateRangePicker;

var colorMixer_1 = __webpack_require__(/*! ./colorMixer */ "./src/colorMixer.ts");

exports.EColor = colorMixer_1.EColor;
exports.EDynaDatePickerColor = colorMixer_1.EColor;

/***/ }),

/***/ "./src/interfaces.ts":
/*!***************************!*\
  !*** ./src/interfaces.ts ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
var EMonthCalendarColor;

(function (EMonthCalendarColor) {
  EMonthCalendarColor["GREY_GREEN"] = "GREY_GREEN";
  EMonthCalendarColor["GREY_CYAN"] = "GREY_CYAN";
})(EMonthCalendarColor = exports.EMonthCalendarColor || (exports.EMonthCalendarColor = {}));

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EMonthCalendarColor, "EMonthCalendarColor", "/Users/dennisat/dev/dyna/dyna-ui-date/src/interfaces.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/utils/faIcon.tsx":
/*!******************************!*\
  !*** ./src/utils/faIcon.tsx ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "react");

exports.faIcon = function (awesomeFontIconName, className) {
  if (className === void 0) {
    className = '';
  }

  return React.createElement("i", {
    className: ("fa fa-" + awesomeFontIconName + " " + className).trim(),
    "aria-hidden": "true"
  });
};

/***/ }),

/***/ "./src/utils/utils.tsx":
/*!*****************************!*\
  !*** ./src/utils/utils.tsx ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var moment = __webpack_require__(/*! moment */ "moment");

exports.monthsLongNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
exports.weekDaysShortNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function getFirstDateOfMonth(date) {
  var dateString = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).substr(-2) + "-01";
  return new Date(dateString);
}

exports.getFirstDateOfMonth = getFirstDateOfMonth;

exports.startOfDayDate = function (date) {
  if (!date) return null;
  return moment(date).startOf('day').toDate();
};

exports.startOfDayMoment = function (date) {
  if (!date) return null;
  return moment(date).startOf('day');
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
  if (startingFromWeekDay === void 0) {
    startingFromWeekDay = 1;
  }

  date = exports.startOfDayDate(date);
  var firstMonthDate = getFirstDateOfMonth(date);
  var startingMonthDay = firstMonthDate.getDay();
  var startingCalendarIndex = startingMonthDay - startingFromWeekDay;
  if (startingCalendarIndex < 0) startingCalendarIndex += 7;
  var monthDays = getDaysArray(date);
  var lines = []; // fill the month starting from the previous month's days

  var lineIndex = 0;
  var line = Array(7).fill(null);

  for (var iDay = -startingCalendarIndex; iDay < monthDays; iDay++) {
    var d = exports.startOfDayDate(new Date(firstMonthDate));
    line[lineIndex] = exports.startOfDayDate(new Date(d.setDate(d.getDate() + iDay)));
    lineIndex++;

    if (lineIndex > 6) {
      lines.push(line);
      line = Array(7).fill(null);
      lineIndex = 0;
    }
  }

  if (line.length) lines.push(line); // fill the rest days

  var fillFromIndex = lines[lines.length - 1].indexOf(null);

  for (var iDay = fillFromIndex; iDay < 7; iDay++) {
    var d = exports.startOfDayDate(new Date(firstMonthDate));
    lines[lines.length - 1][iDay] = exports.startOfDayDate(new Date(d.setDate(d.getDate() + (monthDays + iDay - fillFromIndex))));
  }

  return lines;
}

exports.createCalendarTable = createCalendarTable;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getFirstDateOfMonth, "getFirstDateOfMonth", "/Users/dennisat/dev/dyna/dyna-ui-date/src/utils/utils.tsx");
  reactHotLoader.register(getDaysArray, "getDaysArray", "/Users/dennisat/dev/dyna/dyna-ui-date/src/utils/utils.tsx");
  reactHotLoader.register(createCalendarTable, "createCalendarTable", "/Users/dennisat/dev/dyna/dyna-ui-date/src/utils/utils.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dennisat/dev/dyna/dyna-ui-date/src/index.tsx */"./src/index.tsx");


/***/ }),

/***/ "dyna-ui-button":
/*!*********************************!*\
  !*** external "dyna-ui-button" ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dyna_ui_button__;

/***/ }),

/***/ "dyna-ui-field-wrapper":
/*!****************************************!*\
  !*** external "dyna-ui-field-wrapper" ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dyna_ui_field_wrapper__;

/***/ }),

/***/ "dyna-ui-picker-container":
/*!*******************************************!*\
  !*** external "dyna-ui-picker-container" ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dyna_ui_picker_container__;

/***/ }),

/***/ "dyna-ui-styles":
/*!*********************************!*\
  !*** external "dyna-ui-styles" ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dyna_ui_styles__;

/***/ }),

/***/ "dyna-ui-tooltip":
/*!**********************************!*\
  !*** external "dyna-ui-tooltip" ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dyna_ui_tooltip__;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
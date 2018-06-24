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
var React = require("react");
var moment = require("moment");
var dyna_ui_field_wrapper_1 = require("dyna-ui-field-wrapper");
exports.EMode = dyna_ui_field_wrapper_1.EMode;
exports.EStyle = dyna_ui_field_wrapper_1.EStyle;
exports.ESize = dyna_ui_field_wrapper_1.ESize;
var dyna_ui_button_1 = require("dyna-ui-button");
var dyna_ui_picker_container_1 = require("dyna-ui-picker-container");
var DynaMonthCalendar_1 = require("../DynaMonthCalendar/DynaMonthCalendar");
exports.EInRange = DynaMonthCalendar_1.EInRange;
var utils_1 = require("../utils/utils");
var faIcon_1 = require("../utils/faIcon");
require("./style.less");
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
        var _a = this.props, color = _a.color, size = _a.size, showTodayButton = _a.showTodayButton, showCloseButton = _a.showCloseButton, todayButtonLabel = _a.todayButtonLabel, closeButtonLabel = _a.closeButtonLabel;
        var _b = this.props, mode = _b.mode, label = _b.label, name = _b.name, value = _b.value, values = _b.values, start = _b.start, end = _b.end, min = _b.min, max = _b.max, pickerHeader = _b.pickerHeader, pickerFooter = _b.pickerFooter;
        var _c = this.props, staringFromWeekDay = _c.staringFromWeekDay, renderPickerMonthYear = _c.renderPickerMonthYear, renderPickerWeekDay = _c.renderPickerWeekDay, renderPickerDay = _c.renderPickerDay;
        var showPicker = this.state.showPicker;
        var show = mode === dyna_ui_field_wrapper_1.EMode.EDIT && showPicker;
        var colors = colorMixer(color);
        var todayButtonDisabled = moment().isBefore(min || new Date) || moment().isAfter(max || new Date);
        return (React.createElement(dyna_ui_picker_container_1.DynaPickerContainer, { style: dyna_ui_picker_container_1.EStyle.ROUNDED, color: colors.pickerContainerColor, show: show },
            React.createElement("div", { className: "ddp-picker-container" },
                React.createElement("div", { className: "ddp--calendar--label" },
                    React.createElement("h2", null, label)),
                pickerHeader,
                React.createElement(DynaMonthCalendar_1.DynaMonthCalendar, { ref: function (component) { return _this.monthCalendar = component; }, name: name, color: colors.calendarColor, start: start, end: end, min: min, max: max, value: value, values: values, staringFromWeekDay: staringFromWeekDay, onChange: this.handleDaySelect.bind(this), renderPickerDay: renderPickerDay, renderPickerWeekDay: renderPickerWeekDay, renderPickerMonthYear: renderPickerMonthYear }),
                React.createElement("div", { className: "ddp--calendar--button-bar" },
                    showTodayButton ?
                        React.createElement(dyna_ui_button_1.DynaButton, { style: dyna_ui_button_1.EStyle.ROUNDED, color: colors.pickerButtonColor, size: dyna_ui_field_wrapper_1.ESize.LARGE, disabled: todayButtonDisabled, touchTimeout: 0, onClick: this.handlerTodayClick.bind(this) }, todayButtonLabel)
                        : null,
                    showCloseButton ?
                        React.createElement(dyna_ui_button_1.DynaButton, { style: dyna_ui_button_1.EStyle.ROUNDED, color: colors.pickerButtonColor, size: dyna_ui_field_wrapper_1.ESize.LARGE, touchTimeout: 0, onClick: this.handlerUserCame.bind(this) }, closeButtonLabel)
                        : null),
                pickerFooter)));
    };
    DynaDatePicker.prototype.handlerTodayClick = function () {
        var name = this.props.name;
        this.handleDaySelect(name, utils_1.getDate0(new Date));
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
            case 13: // enter
                this.setState({ showPicker: !this.state.showPicker });
                break;
            case 27: // escape
            case 9: // tab
                this.setState({ showPicker: false });
                break;
        }
    };
    DynaDatePicker.prototype.renderInputDates = function () {
        var _a = this.props, value = _a.value, values = _a.values, renderInputDate = _a.renderInputDate;
        return []
            .concat(value, values)
            .filter(function (d) { return !!d; })
            .map(function (d) { return new Date(d); })
            .map(function (d) { return Number(d); })
            .sort(function (a, b) { return a - b; })
            .map(function (n) { return new Date(n); })
            .map(renderInputDate)
            .join(', ');
    };
    DynaDatePicker.prototype.render = function () {
        var _a = this.props, userClassName = _a.className, mode = _a.mode, style = _a.style, size = _a.size, color = _a.color, label = _a.label, required = _a.required, validationMessage = _a.validationMessage;
        var colors = colorMixer(color);
        var className = [
            'dyna-date-picker',
            userClassName,
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
        staringFromWeekDay: 1,
        showTodayButton: true,
        showCloseButton: true,
        closeOnSelect: true,
        todayButtonLabel: React.createElement("span", null,
            faIcon_1.faIcon('calendar'),
            " Today"),
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
//# sourceMappingURL=DynaDatePicker.js.map
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
var utils_1 = require("../utils/utils");
var faIcon_1 = require("../utils/faIcon");
require("./layout.less");
require("./color.less");
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
//# sourceMappingURL=DynaMonthCalendar.js.map
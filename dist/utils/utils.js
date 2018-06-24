"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
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
//# sourceMappingURL=utils.js.map
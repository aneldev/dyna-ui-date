import moment = require("moment");
export declare const monthsLongNames: string[];
export declare const weekDaysShortNames: string[];
export declare function getFirstDateOfMonth(date: Date): Date;
export declare const startOfDayDate: (date: Date) => Date;
export declare const startOfDayMoment: (date: Date | moment.Moment) => moment.Moment;
export declare function getDaysArray(date: Date): number;
export declare type TCalendarTable = Array<Array<Date>>;
export declare function createCalendarTable(date: Date, startingFromWeekDay?: number): TCalendarTable;

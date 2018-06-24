export declare const monthsLongNames: string[];
export declare const weekDaysShortNames: string[];
export declare function getFirstDateOfMonth(date: Date): Date;
export declare const getDate0: (date: Date) => Date;
export declare function getDaysArray(date: Date): number;
export declare type TCalendarTable = Array<Array<Date>>;
export declare function createCalendarTable(date: Date, startingFromWeekDay?: number): TCalendarTable;

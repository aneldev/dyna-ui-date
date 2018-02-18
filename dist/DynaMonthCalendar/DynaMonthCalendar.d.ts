import * as React from "react";
import { EColor, EMode } from "dyna-ui-field-wrapper";
import { TContent } from "../interfaces/interfaces";
import "./layout.less";
import "./color.less";
export declare enum EInRange {
    START = "START",
    END = "END",
    START_END = "START_END",
    OUT = "OUT",
    MIDDLE = "MIDDLE",
}
export interface IDynaMonthCalendarProps {
    name: string;
    mode?: EMode;
    color?: EColor;
    start?: Date;
    end?: Date;
    min?: Date;
    max?: Date;
    value?: Date;
    values?: Date[];
    viewport?: Date;
    weekDays?: string[];
    months?: string[];
    staringFromWeekDay?: number;
    renderPickerMonthYear?: (month: number, year: number) => TContent;
    renderPickerWeekDay?: (weekDay: number) => TContent;
    renderPickerDay?: (date: Date, dayInMonth: number, dayInWeek: number, inRange: EInRange) => TContent;
    onChange: (name: string, data: Date) => void;
}
export interface IDynaMonthCalendarState {
    viewport: Date;
    calendarTable: TUICalendarTable;
}
export declare type TUICalendarTable = Array<Array<IUICalendarTableDayCell>>;
export interface IUICalendarTableDayCell {
    date: Date;
    selected: boolean;
    disabled: boolean;
    weekend: boolean;
    inCurrentMonth: boolean;
    inRange: EInRange;
}
export declare class DynaMonthCalendar extends React.Component<IDynaMonthCalendarProps, IDynaMonthCalendarState> {
    static defaultProps: IDynaMonthCalendarProps;
    constructor(props: IDynaMonthCalendarProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IDynaMonthCalendarProps): void;
    setViewport(viewport: Date): void;
    private setStateCalendarTable(props);
    private handleNavMonth(direction);
    private handleDaySelect(calendarCell);
    render(): JSX.Element;
}

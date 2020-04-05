import * as React from "react";
import { Moment } from "moment";
import { EMode } from "dyna-ui-field-wrapper";
import { TContent, EMonthCalendarColor } from "../interfaces";
import { ETooltipDirection } from "dyna-ui-tooltip";
import "./layout.less";
import "./color.less";
export declare enum ERangePointMode {
    START = "START",
    END = "END",
    START_END = "START_END",
    OUT = "OUT",
    MIDDLE = "MIDDLE"
}
export interface IDynaMonthCalendarProps {
    className?: string;
    name: string;
    mode?: EMode;
    color?: EMonthCalendarColor;
    start?: Date;
    end?: Date;
    min?: Date;
    max?: Date;
    hoverStart?: Date;
    hoverOn?: Date;
    value?: Date;
    values?: Date[];
    staringFromWeekDay?: number;
    renderPickerMonthYear?: (month: number, year: number) => TContent;
    renderPickerWeekDay?: (weekDay: number) => TContent;
    renderPickerDay?: (date: Date, dayNumber: number, dayInWeek: number, inRange: ERangePointMode, hovered: ERangePointMode, inMonth: boolean) => TContent;
    renderTooltip?: (date: Date) => JSX.Element | string | number | null;
    tooltipDirection?: ETooltipDirection;
    onViewportChange: (name: string, date: Date) => void;
    onHover: (name: string, date: Date) => void;
    onChange: (name: string, date: Date) => void;
}
interface IDynaMonthCalendarState {
    viewport: Date;
    calendarTable: TUICalendarTable;
}
declare type TUICalendarTable = Array<Array<IUICalendarTableDayCell>>;
export interface IUICalendarTableDayCell {
    date: Date;
    isToday: boolean;
    selected: boolean;
    disabled: boolean;
    weekend: boolean;
    inCurrentMonth: boolean;
    inRange: ERangePointMode;
    hovered: ERangePointMode;
}
export declare class DynaMonthCalendar extends React.Component<IDynaMonthCalendarProps, IDynaMonthCalendarState> {
    static defaultProps: IDynaMonthCalendarProps;
    constructor(props: IDynaMonthCalendarProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<IDynaMonthCalendarProps>, prevState: Readonly<IDynaMonthCalendarState>, snapshot?: any): void;
    private checkProps;
    setViewport(viewport: Date): void;
    private setStateCalendarTable;
    static getRangePointMode(start: Moment, end: Moment, now: Moment): ERangePointMode;
    private moveMonth;
    private handleNavMonthPrev;
    private handleNavMonthNext;
    private handleHoverDayCell;
    private handleDaySelect;
    render(): JSX.Element;
}
export {};

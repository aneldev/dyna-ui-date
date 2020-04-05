import * as React from "react";
import { EMode, EStyle, ESize } from "dyna-ui-field-wrapper";
import { ETooltipDirection } from "dyna-ui-tooltip";
import { ERangePointMode } from "../DynaMonthCalendar/DynaMonthCalendar";
import { EColor } from "../colorMixer";
import "./style.less";
export interface IDynaDateRangePickerProps {
    className?: string;
    name: string;
    label?: TContent;
    mode?: EMode;
    size?: ESize;
    pickerSize?: ESize;
    required?: TContent;
    validationMessage?: TContent;
    pickerHeader?: TContent;
    pickerBody?: TContent;
    pickerFooter?: TContent;
    style?: EStyle;
    color?: EColor;
    start?: Date;
    end?: Date;
    min?: Date;
    max?: Date;
    editDate: EEditDate;
    showTodayButton?: boolean;
    showCloseButton?: boolean;
    closeButtonLabel?: TContent;
    todayButtonLabel?: TContent;
    staringFromWeekDay?: number;
    renderInputDate?: (value?: Date) => string;
    renderPickerMonthYear?: (month: number, year: number) => TContent;
    renderPickerWeekDay?: (weekDay: number) => TContent;
    renderPickerDay?: (date: Date, dayNumber: number, dayInWeek: number, inRange: ERangePointMode, hovered: ERangePointMode, inMonth: boolean) => TContent;
    renderTooltip?: (date: Date) => JSX.Element | string | number | null;
    tooltipDirection?: ETooltipDirection;
    onShowPicker?: () => void;
    onViewportChange?: (name: string, date: Date) => void;
    onChange: (name: string, start: Date, end: Date) => void;
}
export declare type TContent = JSX.Element | string;
export declare enum EEditDate {
    START = "START",
    END = "END"
}
interface IDynaDatePickerState {
    showPicker: boolean;
    targetDate: EEditDate;
    hoverOn: Date;
}
export declare class DynaDateRangePicker extends React.Component<IDynaDateRangePickerProps, IDynaDatePickerState> {
    static defaultProps: Partial<IDynaDateRangePickerProps>;
    private monthCalendarA;
    private monthCalendarB;
    constructor(props: IDynaDateRangePickerProps);
    private handleHoverDate;
    private handleDaySelect;
    private readonly viewport;
    private setViewport;
    private handleMonthCalendarAViewportChange;
    private handleMonthCalendarBViewportChange;
    private handleCalendarsMouseLeave;
    private renderPicker;
    private lastFocused;
    private handlerTodayClick;
    private handlerUserCame;
    private handlerOutsideClick;
    private handlerInputKeyPress;
    private renderInputDates;
    render(): JSX.Element;
}
export {};

import * as React from "react";
import { EMode, EStyle, ESize } from "dyna-ui-field-wrapper";
import { ETooltipDirection } from "dyna-ui-tooltip";
import { ERangePointMode } from "../DynaMonthCalendar/DynaMonthCalendar";
import { EColor } from "../colorMixer";
import "./style.less";
export { EMode, ESize, EStyle, ERangePointMode, };
export declare type TContent = JSX.Element | string;
export interface IDynaDatePickerProps {
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
    value?: Date;
    values?: Date[];
    min?: Date;
    max?: Date;
    showTodayButton?: boolean;
    showCloseButton?: boolean;
    closeOnSelect?: boolean;
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
    onChange: (name: string, date: Date) => void;
}
export interface IDynaDatePickerState {
    showPicker: boolean;
}
export declare class DynaDatePicker extends React.Component<IDynaDatePickerProps, IDynaDatePickerState> {
    static defaultProps: IDynaDatePickerProps;
    private monthCalendar;
    constructor(props: IDynaDatePickerProps);
    private handleDaySelect;
    private renderPicker;
    private lastFocused;
    private handlerTodayClick;
    private handlerUserCame;
    private handlerOutsideClick;
    private handlerInputKeyPress;
    private renderInputDates;
    render(): JSX.Element;
}

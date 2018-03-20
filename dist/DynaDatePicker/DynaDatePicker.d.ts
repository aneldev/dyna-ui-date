import * as React from "react";
import { EMode, EStyle, ESize } from "dyna-ui-field-wrapper";
import { EInRange } from "../DynaMonthCalendar/DynaMonthCalendar";
import "./style.less";
export { EMode, ESize, EStyle, EInRange };
export declare type TContent = JSX.Element | string;
export interface IDynaDatePickerProps {
    className?: string;
    name: string;
    label?: TContent;
    mode?: EMode;
    size?: ESize;
    required?: TContent;
    validationMessage?: TContent;
    pickerHeader?: TContent;
    pickerFooter?: TContent;
    style?: EStyle;
    color?: EColor;
    start?: Date;
    end?: Date;
    value?: Date;
    values?: Date[];
    min?: Date;
    max?: Date;
    showCloseButton?: boolean;
    closeOnSelect?: boolean;
    closeButtonLabel?: TContent;
    staringFromWeekDay?: number;
    renderInputDate?: (value: Date) => string;
    renderPickerMonthYear?: (month: number, year: number) => TContent;
    renderPickerWeekDay?: (weekDay: number) => TContent;
    renderPickerDay?: (date: Date, dayInMonth: number, dayInWeek: number, inRange: EInRange) => TContent;
    onChange: (name: string, date: Date) => void;
}
export declare enum EColor {
    GREY_ORANGE_GREEN = "GREY_ORANGE_GREEN",
    GREY_RED_GREEN = "GREY_RED_GREEN",
    WHITE_BLACK = "WHITE_BLACK",
}
export interface IDynaDatePickerState {
    showPicker: boolean;
}
export declare class DynaDatePicker extends React.Component<IDynaDatePickerProps, IDynaDatePickerState> {
    static defaultProps: IDynaDatePickerProps;
    private monthCalendar;
    constructor(props: IDynaDatePickerProps);
    private handleDaySelect(name, date);
    private renderPicker();
    private lastFocused;
    private handlerUserCame();
    private handlerOutsideClick();
    private handlerInputKeyPress(event);
    private renderInputDates();
    render(): JSX.Element;
}

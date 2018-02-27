import * as React from "react";
import { EColor, EMode, EStyle, ESize } from "dyna-ui-field-wrapper";
import "./style.less";
import "./color.less";
export { EMode };
export declare type TContent = JSX.Element | string;
export declare enum EInRange {
    START = "START",
    END = "END",
    START_END = "START_END",
    OUT = "OUT",
    MIDDLE = "MIDDLE",
}
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
    weekDays?: string[];
    months?: string[];
    showCloseButton?: boolean;
    closeOnSelect?: boolean;
    closeButtonLabel?: TContent;
    staringFromWeekDay?: number;
    renderInputDate?: (value: Date) => string;
    renderPickerMonthYear?: (month: number, year: number) => TContent;
    renderPickerWeekDay?: (weekDay: number) => TContent;
    renderPickerDay?: (date: Date, dayInMonth: number, dayInWeek: number, inRange: EInRange) => TContent;
    onChange: (name: string, data: Date) => void;
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
    private handlerInputKeyPress(event);
    private renderInputDates();
    render(): JSX.Element;
}

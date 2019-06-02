import { EColor as EPickerContainerColor, EColor as EPickerButtonColor, EColor as EFieldColor } from "dyna-ui-styles";
import { EColor as ECalendarColor } from "./DynaMonthCalendar/DynaMonthCalendar";
export interface IColorMixer {
    fieldColor?: EFieldColor;
    calendarColor?: ECalendarColor;
    pickerButtonColor?: EPickerButtonColor;
    pickerContainerColor?: EPickerContainerColor;
}
export declare enum EColor {
    GREY_ORANGE_GREEN = "GREY_ORANGE_GREEN",
    GREY_RED_GREEN = "GREY_RED_GREEN",
    WHITE_BLACK = "WHITE_BLACK"
}
export declare const colorMixer: (color: EColor) => IColorMixer;

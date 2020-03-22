import { EColor as EPickerContainerColor, EColor as EPickerButtonColor, EColor as EFieldColor } from "dyna-ui-styles";
import { EMonthCalendarColor } from "./interfaces";
export interface IColorMixer {
    fieldColor?: EFieldColor;
    calendarColor?: EMonthCalendarColor;
    pickerButtonColor?: EPickerButtonColor;
    pickerContainerColor?: EPickerContainerColor;
}
export declare enum EColor {
    GREY_ORANGE_GREEN_CALENDAR_GREEN = "GREY_ORANGE_GREEN_CALENDAR_GREEN",
    GREY_RED_GREEN_CALENDAR_GREEN = "GREY_RED_GREEN_CALENDAR_GREEN",
    WHITE_BLACK_CALENDAR_GREEN = "WHITE_BLACK_CALENDAR_GREEN",
    GREY_ORANGE_GREEN_CALENDAR_CYAN = "GREY_ORANGE_GREEN_CALENDAR_CYAN",
    GREY_RED_GREEN_CALENDAR_CYAN = "GREY_RED_GREEN_CALENDAR_CYAN",
    WHITE_BLACK_CALENDAR_CYAN = "WHITE_BLACK_CALENDAR_CYAN",
    GREY_ORANGE_GREEN = "GREY_ORANGE_GREEN",
    GREY_RED_GREEN = "GREY_RED_GREEN",
    WHITE_BLACK = "WHITE_BLACK"
}
export declare const colorMixer: (color: EColor) => IColorMixer;

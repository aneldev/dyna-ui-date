import {EColor as EPickerContainerColor, EColor as EPickerButtonColor, EColor as EFieldColor} from "dyna-ui-styles";
import {EMonthCalendarColor} from "./interfaces";

export interface IColorMixer {
  fieldColor?: EFieldColor;
  calendarColor?: EMonthCalendarColor,
  pickerButtonColor?: EPickerButtonColor,
  pickerContainerColor?: EPickerContainerColor,
}

export enum EColor {
  GREY_ORANGE_GREEN_CALENDAR_GREEN = "GREY_ORANGE_GREEN_CALENDAR_GREEN",
  GREY_RED_GREEN_CALENDAR_GREEN = "GREY_RED_GREEN_CALENDAR_GREEN",
  WHITE_BLACK_CALENDAR_GREEN = "WHITE_BLACK_CALENDAR_GREEN",

  GREY_ORANGE_GREEN_CALENDAR_CYAN = "GREY_ORANGE_GREEN_CALENDAR_CYAN",
  GREY_RED_GREEN_CALENDAR_CYAN = "GREY_RED_GREEN_CALENDAR_CYAN",
  WHITE_BLACK_CALENDAR_CYAN = "WHITE_BLACK_CALENDAR_CYAN",

  // this is the same with the xxx_CALENDAR_GREEN, is kept for backward compatibility
  GREY_ORANGE_GREEN = "GREY_ORANGE_GREEN",
  GREY_RED_GREEN = "GREY_RED_GREEN",
  WHITE_BLACK = "WHITE_BLACK",

}

export const colorMixer = (color: EColor): IColorMixer => {
  switch (color) {

    // green calendar
    case EColor.GREY_RED_GREEN_CALENDAR_GREEN:
    case EColor.GREY_RED_GREEN:
      return {
        calendarColor: EMonthCalendarColor.GREY_GREEN,
        fieldColor: EFieldColor.RED_WHITE,
        pickerButtonColor: EPickerButtonColor.RED_WHITE,
        pickerContainerColor: EPickerContainerColor.WHITE_RED,
      };
    case EColor.GREY_ORANGE_GREEN_CALENDAR_GREEN:
    case EColor.GREY_ORANGE_GREEN:
      return {
        calendarColor: EMonthCalendarColor.GREY_GREEN,
        fieldColor: EFieldColor.ORANGE_WHITE,
        pickerButtonColor: EPickerButtonColor.ORANGE_WHITE,
        pickerContainerColor: EPickerContainerColor.WHITE_ORANGE,
      };
    case EColor.WHITE_BLACK_CALENDAR_GREEN:
    case EColor.WHITE_BLACK:
      return {
        calendarColor: EMonthCalendarColor.GREY_GREEN,
        fieldColor: EFieldColor.BLACK_WHITE,
        pickerButtonColor: EPickerButtonColor.BLACK_WHITE,
        pickerContainerColor: EPickerContainerColor.WHITE_BLACK,
      };

    // clean calendar
    case EColor.GREY_RED_GREEN_CALENDAR_CYAN:
      return {
        calendarColor: EMonthCalendarColor.GREY_CYAN,
        fieldColor: EFieldColor.RED_WHITE,
        pickerButtonColor: EPickerButtonColor.RED_WHITE,
        pickerContainerColor: EPickerContainerColor.WHITE_RED,
      };
    case EColor.GREY_ORANGE_GREEN_CALENDAR_CYAN:
      return {
        calendarColor: EMonthCalendarColor.GREY_CYAN,
        fieldColor: EFieldColor.ORANGE_WHITE,
        pickerButtonColor: EPickerButtonColor.ORANGE_WHITE,
        pickerContainerColor: EPickerContainerColor.WHITE_ORANGE,
      };
    case EColor.WHITE_BLACK_CALENDAR_CYAN:
      return {
        calendarColor: EMonthCalendarColor.GREY_CYAN,
        fieldColor: EFieldColor.BLACK_WHITE,
        pickerButtonColor: EPickerButtonColor.BLACK_WHITE,
        pickerContainerColor: EPickerContainerColor.WHITE_BLACK,
      };
  }
};


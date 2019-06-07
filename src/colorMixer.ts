import {EColor as EPickerContainerColor, EColor as EPickerButtonColor, EColor as EFieldColor} from "dyna-ui-styles";
import {EColor as ECalendarColor} from "./DynaMonthCalendar/DynaMonthCalendar";

export interface IColorMixer {
  fieldColor?: EFieldColor;
  calendarColor?: ECalendarColor,
  pickerButtonColor?: EPickerButtonColor,
  pickerContainerColor?: EPickerContainerColor,
}

export enum EColor {
  GREY_ORANGE_GREEN = "GREY_ORANGE_GREEN",
  GREY_RED_GREEN = "GREY_RED_GREEN",
  WHITE_BLACK = "WHITE_BLACK",
}

export const colorMixer = (color: EColor): IColorMixer => {
  switch (color) {
    case EColor.GREY_RED_GREEN:
      return {
        calendarColor: ECalendarColor.GREY_GREEN,
        fieldColor: EFieldColor.RED_WHITE,
        pickerButtonColor: EPickerButtonColor.RED_WHITE,
        pickerContainerColor: EPickerContainerColor.WHITE_RED,
      };
    case EColor.GREY_ORANGE_GREEN:
      return {
        calendarColor: ECalendarColor.GREY_GREEN,
        fieldColor: EFieldColor.ORANGE_WHITE,
        pickerButtonColor: EPickerButtonColor.ORANGE_WHITE,
        pickerContainerColor: EPickerContainerColor.WHITE_ORANGE,
      };
    default:
    case EColor.WHITE_BLACK:
      return {
        calendarColor: ECalendarColor.GREY_GREEN,
        fieldColor: EFieldColor.BLACK_WHITE,
        pickerButtonColor: EPickerButtonColor.BLACK_WHITE,
        pickerContainerColor: EPickerContainerColor.WHITE_BLACK,
      };
  }
};


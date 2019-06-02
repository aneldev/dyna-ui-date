import {KeyboardEvent} from "react";

export const getShowPickerOnKeyPress = (event: KeyboardEvent<HTMLInputElement>, showPicker:boolean): boolean | null=> {
  if (event.keyCode !== undefined) {
    switch (event.keyCode) {
      case 32: // space
      case 13: // enter
        return !showPicker;
      case 27: // escape
      case 9: // tab
        return false;
      default:
        return null;
    }
  }
  else {
    switch ((event as any).code) {
      case 'Space':
      case 'Enter':
        return !showPicker;
      case 'Escape':
      case 'Tab':
        return false;
      default:
        return null;
    }
  }
};

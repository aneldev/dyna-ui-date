import {KeyboardEvent} from "react";
import {ESize, ESize as EFieldSize} from "dyna-ui-field-wrapper";
import {ESize as EButtonSize} from "dyna-ui-button";


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

export const getPickerButtonSize = (fieldSize:EFieldSize): EButtonSize =>{
  switch (fieldSize) {
    case ESize.XSMALL: return EButtonSize.MEDIUM;
    case ESize.SMALL: return EButtonSize.LARGE;
    case ESize.MEDIUM: return EButtonSize.LARGE;
    case ESize.LARGE: return EButtonSize.LARGE;
  }
};

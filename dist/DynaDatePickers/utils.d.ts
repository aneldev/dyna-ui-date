import { KeyboardEvent } from "react";
import { ESize } from "dyna-ui-field-wrapper";
import { ESize as EButtonSize } from "dyna-ui-button";
export declare const getShowPickerOnKeyPress: (event: KeyboardEvent<HTMLInputElement>, showPicker: boolean) => boolean;
export declare const getPickerButtonSize: (fieldSize: ESize) => EButtonSize;

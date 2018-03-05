import * as React from "react";
import moment = require("moment");

import {DynaFieldWrapper, EMode, EStyle, ESize, EColor as EFieldColor} from "dyna-ui-field-wrapper";
import {DynaButton, EStyle as EButtonStyle, EColor as EPickerButtonColor} from "dyna-ui-button";
import {DynaPickerContainer, EColor as EPickerContainerColor, EStyle as EPickerContainerStyle} from "dyna-ui-picker-container";

import {DynaMonthCalendar, EColor as ECalendarColor, EInRange} from "../DynaMonthCalendar/DynaMonthCalendar";
import {monthsLongNames, weekDaysShortNames} from "../utils/utils";
import {faIcon} from "../utils/faIcon";

import "./style.less";

export {
  EMode,
  ESize, EStyle,
  EInRange,
}

export type TContent = JSX.Element | string;

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
  showCloseButton?: boolean,
  closeOnSelect?: boolean;
  closeButtonLabel?: TContent,
  staringFromWeekDay?: number; // 0 = Sunday... default = 1 (Monday)
  renderInputDate?: (value: Date) => string;
  renderPickerMonthYear?: (month: number, year: number) => TContent;
  renderPickerWeekDay?: (weekDay: number) => TContent;
  renderPickerDay?: (date: Date, dayInMonth: number, dayInWeek: number, inRange: EInRange) => TContent;
  onChange: (name: string, date: Date) => void;
}

export enum EColor {
  GREY_ORANGE_GREEN = "GREY_ORANGE_GREEN",
  GREY_RED_GREEN = "GREY_RED_GREEN",
  WHITE_BLACK = "WHITE_BLACK",
}

interface IColorMixer {
  fieldColor?: EFieldColor;
  calendarColor?: ECalendarColor,
  pickerButtonColor?: EPickerButtonColor,
  pickerContainerColor?: EPickerContainerColor,
}

const colorMixer = (color: EColor): IColorMixer => {
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
        fieldColor: EFieldColor.ORANGE_WHITE,
        pickerButtonColor: EPickerButtonColor.WHITE_BLACK,
        pickerContainerColor: EPickerContainerColor.WHITE_ORANGE,
      };
  }
};

export interface IDynaDatePickerState {
  showPicker: boolean;
}

export class DynaDatePicker extends React.Component<IDynaDatePickerProps, IDynaDatePickerState> {
  static defaultProps: IDynaDatePickerProps = {
    className: '',
    name: null,
    label: null,
    mode: EMode.EDIT,
    size: ESize.MEDIUM,
    required: null,
    validationMessage: null,
    pickerHeader: null,
    pickerFooter: null,
    style: EStyle.INLINE_ROUNDED,
    color: EColor.GREY_ORANGE_GREEN,
    start: null,
    end: null,
    value: null,
    values: [],
    min: null,
    max: null,
    weekDays: weekDaysShortNames,
    months: monthsLongNames,
    staringFromWeekDay: 1,
    showCloseButton: true,
    closeOnSelect: true,
    closeButtonLabel: <span>{faIcon('check')} Ok</span>,
    renderInputDate: (date: Date) => moment(date).format('dd DD MMM YY'),
    renderPickerMonthYear: (month: number, year: number) => <div>{monthsLongNames[month]} {year}</div>,
    renderPickerWeekDay: (weekDay: number) => <div>{weekDaysShortNames[weekDay]}</div>,
    renderPickerDay: (date: Date, dayInMonth: number, dayInWeek: number, inRange: EInRange) => <div>{dayInMonth}</div>,
    onChange: (name: string, date: Date) => undefined,
  };

  private monthCalendar: DynaMonthCalendar;

  constructor(props: IDynaDatePickerProps) {
    super(props);
    this.state = {
      showPicker: false,
    }
  }

  private handleDaySelect(name:string, date:Date): void {
    if (this.props.closeOnSelect) this.setState({showPicker: false});
    const {onChange} = this.props;
    onChange(name, date);
  }

  private renderPicker(): JSX.Element {
    const {color, size, showCloseButton, closeButtonLabel} = this.props;
    const {mode, label, name, value, values, start, end, min, max, pickerHeader, pickerFooter} = this.props;
    const {staringFromWeekDay, renderPickerMonthYear, renderPickerWeekDay, renderPickerDay} = this.props;
    const {showPicker} = this.state;
    const show: boolean = mode === EMode.EDIT && showPicker;
    const colors: IColorMixer = colorMixer(color);

    return (
      <DynaPickerContainer
        style={EPickerContainerStyle.ROUNDED}
        color={colors.pickerContainerColor}
        show={show}
      >
        <div className="ddp-picker-container">
          <div className="ddp--calendar--label">
            <h2>{label}</h2>
          </div>
          {pickerHeader}
          <DynaMonthCalendar
            ref={(component: DynaMonthCalendar) => this.monthCalendar = component}
            name={name}
            color={colors.calendarColor}
            start={start}
            end={end}
            min={min}
            max={max}
            value={value}
            values={values}
            staringFromWeekDay={staringFromWeekDay}
            onChange={this.handleDaySelect.bind(this)}
            renderPickerDay={renderPickerDay}
            renderPickerWeekDay={renderPickerWeekDay}
            renderPickerMonthYear={renderPickerMonthYear}
          />
          <div className="ddp--calendar--button-bar">
            {showCloseButton ?
              <DynaButton
                style={EButtonStyle.ROUNDED}
                color={colors.pickerButtonColor}
                size={size}
                onClick={this.handlerUserCame.bind(this)}
              >{closeButtonLabel}</DynaButton>
              : null}
          </div>
          {pickerFooter}
        </div>
      </DynaPickerContainer>
    )
  }

  private lastFocused: Date = null;

  private handlerUserCame(): void {
    if (this.props.mode === EMode.VIEW) return;
    if (this.lastFocused && Number(new Date) - Number(this.lastFocused) < 300) return;

    const {value} = this.props;
    const showPicker: boolean = !this.state.showPicker;

    this.setState({
      showPicker,
    });

    if (showPicker) this.monthCalendar.setViewport(value);

    this.lastFocused = new Date;
  }

  private handlerOutsideClick(): void {
    this.setState({
      showPicker:false,
    });
  }

  private handlerInputKeyPress(event: KeyboardEvent): void {
    switch (event.keyCode) {
      case 32: // space
      case 13: // enter
        this.setState({showPicker: !this.state.showPicker});
        break;
      case 27: // escape
      case 9: // tab
        this.setState({showPicker: false});
        break;
    }
  }

  private renderInputDates(): string {
    const {
      value, values,
      renderInputDate,
    } = this.props;

    return []
      .concat(value, values)
      .filter(d => !!d)
      .map((d: Date) => Number(d))
      .sort((a: number, b: number) => a - b)
      .map((n: number) => new Date(n))
      .map(renderInputDate)
      .join(', ')
  }

  public render(): JSX.Element {
    const {
      className: cn,
      mode, style, size, color,
      label, required,
      validationMessage,
    } = this.props;
    const colors: IColorMixer = colorMixer(color);

    const className: string = [
      'dyna-date-picker',
      cn,
      `dyna-date-picker-mode-${mode}`,
      `dyna-date-picker-style-${style}`,
      `dyna-date-picker-size-${size}`,
    ].join(' ').trim();

    return (
      <div className={className}>
        <DynaFieldWrapper
          mode={mode}
          style={style}
          color={colors.fieldColor}
          size={size}
          label={label}
          required={required}
          inputElementSelector=".ddp-input-control"
          validationMessage={validationMessage}
          footer={this.renderPicker()}
          onOutsideClick={this.handlerOutsideClick.bind(this)}
        >
          <input
            className="ddp-input-control"
            readOnly
            value={this.renderInputDates()}
            onFocus={this.handlerUserCame.bind(this)}
            onClick={this.handlerUserCame.bind(this)}
            onKeyDown={this.handlerInputKeyPress.bind(this)}
          />
        </DynaFieldWrapper>
      </div>
    );
  }
}

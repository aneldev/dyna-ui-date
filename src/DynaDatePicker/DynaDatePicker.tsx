import * as React from "react";
import moment = require("moment");
import {DynaFieldWrapper, EMode} from "dyna-ui-field-wrapper";
import {DynaPickerContainer} from "dyna-ui-picker-container";

import {DynaMonthCalendar} from "../DynaMonthCalendar/DynaMonthCalendar";

import {monthsLongNames, weekDaysShortNames} from "../utils/utils";

import {faIcon} from "../utils/faIcon";

import "./style.less";
import "./color.less";
import {ESize} from "../";

export {EMode}

export enum EStyle {
  INLINE_ROUNDED = "INLINE_ROUNDED",
}

export enum EColor {
  WHITE_BLACK = "WHITE_BLACK",
  GRAY_WHITE_BLACK = "GRAY_WHITE_BLACK",
  WHITE_RED = "WHITE_RED",
  BLACK_WHITE = "BLACK_WHITE",
  ORANGE_WHITE = "ORANGE_WHITE",
  TRANSPARENT_WHITE = "TRANSPARENT_WHITE",
}

export type TContent = JSX.Element | string;

export enum EInRange {
  START = "START",
  END = "END",
  START_END = "START_END",
  OUT = "OUT",
  MIDDLE = "MIDDLE",
}

export interface IDynaDatePickerProps {
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
  onChange: (name: string, data: Date) => void;
}

export interface IDynaDatePickerState {
  showPicker: boolean;
}

export class DynaDatePicker extends React.Component<IDynaDatePickerProps, IDynaDatePickerState> {
  static defaultProps: IDynaDatePickerProps = {
    name: null,
    label: null,
    mode: EMode.EDIT,
    size: ESize.MEDIUM,
    required: null,
    validationMessage: null,
    pickerHeader: null,
    pickerFooter: null,
    style: EStyle.INLINE_ROUNDED,
    color: EColor.WHITE_BLACK,
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
    const {color, showCloseButton, closeButtonLabel} = this.props;
    const {mode, label, name, value, values, start, end} = this.props;
    const {staringFromWeekDay, renderPickerMonthYear, renderPickerWeekDay, renderPickerDay} = this.props;
    const {showPicker} = this.state;
    const show: boolean = mode === EMode.EDIT && showPicker;

    return (
      <DynaPickerContainer
        show={show}
      >
        <div className="ddp-picker-container">
          <div className="ddp--calendar--label">
            <h2>{label}</h2>
          </div>
          <DynaMonthCalendar
            ref={(component: DynaMonthCalendar) => this.monthCalendar = component}
            name={name}
            color={color}
            start={start}
            end={end}
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
              <div className="ddp--calendar--close-button" onClick={this.handlerUserCame.bind(this)}>{closeButtonLabel}</div>
              : null}
          </div>
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
      mode, style, color, size,
      label, required,
      validationMessage,
    } = this.props;

    const className: string = [
      'dyna-date-picker',
      `dyna-date-picker-mode-${mode}`,
      `dyna-date-picker-style-${style}`,
      `dyna-date-picker-color-${color}`,
      `dyna-date-picker-size-${size}`,
    ].join(' ').trim();

    return (
      <div className={className}>
        <DynaFieldWrapper
          mode={mode}
          style={style}
          color={color}
          label={label}
          required={required}
          inputElementSelector=".ddp-input-control"
          validationMessage={validationMessage}
          footer={this.renderPicker()}
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

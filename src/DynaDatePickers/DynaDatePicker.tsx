import * as React from "react";
import {KeyboardEvent} from "react";
import moment = require("moment");

import {DynaFieldWrapper, EMode, EStyle, ESize} from "dyna-ui-field-wrapper";
import {DynaButton, EStyle as EButtonStyle} from "dyna-ui-button";
import {DynaPickerContainer, EStyle as EPickerContainerStyle} from "dyna-ui-picker-container";
import { ETooltipDirection } from "dyna-ui-tooltip";

import {DynaMonthCalendar, ERangePointMode} from "../DynaMonthCalendar/DynaMonthCalendar";
import {startOfDayDate, monthsLongNames, weekDaysShortNames} from "../utils/utils";
import {colorMixer, EColor, IColorMixer} from "../colorMixer";
import {faIcon} from "../utils/faIcon";
import {getPickerButtonSize, getShowPickerOnKeyPress} from "./utils";

import "./style.less";

export {
  EMode,
  ESize, EStyle,
  ERangePointMode,
};

export type TContent = JSX.Element | string;

export interface IDynaDatePickerProps {
  className?: string;
  name: string;
  label?: TContent;
  mode?: EMode;
  size?: ESize;
  pickerSize?: ESize;
  required?: TContent;
  validationMessage?: TContent;
  pickerHeader?: TContent;
  pickerBody?: TContent;
  pickerFooter?: TContent;
  style?: EStyle;
  color?: EColor;
  start?: Date;
  end?: Date;
  value?: Date;
  values?: Date[];
  min?: Date;
  max?: Date;
  showTodayButton?: boolean;
  showCloseButton?: boolean;
  closeOnSelect?: boolean;
  closeButtonLabel?: TContent;
  todayButtonLabel?: TContent;
  staringFromWeekDay?: number; // 0 = Sunday... default = 1 (Monday)
  renderInputDate?: (value?: Date) => string;
  renderPickerMonthYear?: (month: number, year: number) => TContent;
  renderPickerWeekDay?: (weekDay: number) => TContent;
  renderPickerDay?: (date: Date, dayInMonth: number, dayInWeek: number, inRange: ERangePointMode) => TContent;
  renderTooltip?: (date: Date) => JSX.Element | string | number | null;
  tooltipDirection?: ETooltipDirection;
  onShowPicker?: () => void;
  onViewportChange?: (name: string, date: Date) => void;
  onChange: (name: string, date: Date) => void;
}

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
    pickerBody: null,
    pickerFooter: null,
    style: EStyle.INLINE_ROUNDED,
    color: EColor.GREY_ORANGE_GREEN,
    start: null,
    end: null,
    value: null,
    values: [],
    min: null,
    max: null,
    staringFromWeekDay: 1,
    showTodayButton: true,
    showCloseButton: true,
    closeOnSelect: true,
    todayButtonLabel: <span>{faIcon('calendar')} Today</span>,
    closeButtonLabel: <span>{faIcon('check')} Ok</span>,
    renderInputDate: (date?: Date) => date && moment(date).format("dd DD MMM YY") || "",
    renderPickerMonthYear: (month: number, year: number) => <div>{monthsLongNames[month]} {year}</div>,
    renderPickerWeekDay: (weekDay: number) => <div>{weekDaysShortNames[weekDay]}</div>,
    renderPickerDay: (date: Date, dayInMonth: number, dayInWeek: number, inRange: ERangePointMode) => <div>{dayInMonth}</div>,
    onChange: (name: string, date: Date) => undefined,
  };

  private monthCalendar: DynaMonthCalendar;

  constructor(props: IDynaDatePickerProps) {
    super(props);
    this.state = {
      showPicker: false,
    };
  }

  private handleDaySelect = (name: string, date: Date): void => {
    if (this.props.closeOnSelect) this.setState({showPicker: false});
    const {onChange} = this.props;
    onChange(name, date);
  };

  private renderPicker(): JSX.Element {
    const {color, showTodayButton, showCloseButton, todayButtonLabel, closeButtonLabel} = this.props;
    const {mode, label, size, pickerSize, name, value, values, start, end, min, max, pickerHeader, pickerBody, pickerFooter} = this.props;
    const {staringFromWeekDay, renderPickerMonthYear, renderPickerWeekDay, renderPickerDay} = this.props;
    const {renderTooltip, tooltipDirection} = this.props;
    const {onViewportChange} = this.props;
    const {showPicker} = this.state;
    const show: boolean = mode === EMode.EDIT && showPicker;
    const colors: IColorMixer = colorMixer(color);
    const todayButtonDisabled: boolean = moment().isBefore(min || new Date) || moment().isAfter(max || new Date);
    const buttonSize = getPickerButtonSize(pickerSize || size);

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
          {!!pickerHeader && <div className="ddp--picker-custom-content">{pickerHeader}</div>}
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
            onViewportChange={onViewportChange}
            onChange={this.handleDaySelect}
            renderPickerDay={renderPickerDay}
            renderPickerWeekDay={renderPickerWeekDay}
            renderPickerMonthYear={renderPickerMonthYear}
            renderTooltip={renderTooltip}
            tooltipDirection={tooltipDirection}
          />
          {!!pickerBody && <div className="ddp--picker-custom-content">{pickerBody}</div>}
          <div className="ddp--calendar--button-bar">
            {showTodayButton ?
              <div>
                <DynaButton
                  style={EButtonStyle.ROUNDED}
                  color={colors.pickerButtonColor}
                  size={buttonSize}
                  disabled={todayButtonDisabled}
                  onClick={this.handlerTodayClick}
                >{todayButtonLabel}</DynaButton>
              </div>
              : null}
            {showCloseButton ?
              <div>
                <DynaButton
                  style={EButtonStyle.ROUNDED}
                  color={colors.pickerButtonColor}
                  size={buttonSize}
                  onClick={this.handlerUserCame}
                >{closeButtonLabel}</DynaButton>
              </div>
              : null}
          </div>
          {!!pickerFooter && <div className="ddp--picker-custom-content">{pickerFooter}</div>}
        </div>
      </DynaPickerContainer>
    );
  }

  private lastFocused: Date = null;

  private handlerTodayClick = (): void => {
    const {name} = this.props;
    this.monthCalendar.setViewport(new Date);
    this.handleDaySelect(name, startOfDayDate(new Date));
  };

  private handlerUserCame = (): void => {
    if (this.props.mode === EMode.VIEW) return;
    if (this.lastFocused && Number(new Date) - Number(this.lastFocused) < 300) return;

    const {value, onShowPicker} = this.props;
    const showPicker: boolean = !this.state.showPicker;

    this.setState({
      showPicker,
    });

    if (showPicker) this.monthCalendar.setViewport(value || this.props.min || new Date); // value might be null if not passed in the props
    if (showPicker && onShowPicker) onShowPicker();

    this.lastFocused = new Date;
  };

  private handlerOutsideClick = (): void => {
    this.setState({
      showPicker: false,
    });
  };

  private handlerInputKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    const {onShowPicker} = this.props;
    const showPicker = getShowPickerOnKeyPress(event, this.state.showPicker);
    if (showPicker !== null) this.setState({showPicker});
    if (showPicker === true && onShowPicker) onShowPicker();
  };

  private renderInputDates(): string {
    const {
      value, values,
      renderInputDate,
    } = this.props;

    return []
      .concat(value, values)
      .filter(d => !!d)
      .map((d: any) => new Date(d))
      .map((d: Date) => Number(d))
      .sort((a: number, b: number) => a - b)
      .map((n: number) => new Date(n))
      .map(renderInputDate)
      .join(', ');
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
      mode, style, size, pickerSize, color,
      label, required,
      validationMessage,
    } = this.props;
    const colors: IColorMixer = colorMixer(color);

    const className: string = [
      'dyna-date-picker',
      userClassName,
      `dyna-date-picker-mode-${mode}`,
      `dyna-date-picker-style-${style}`,
      `dyna-date-picker-size-${pickerSize || size}`,
    ].filter(Boolean).join(' ');

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
          onOutsideClick={this.handlerOutsideClick}
        >
          <input
            className="ddp-input-control"
            readOnly
            value={this.renderInputDates()}
            onFocus={this.handlerUserCame}
            onClick={this.handlerUserCame}
            onKeyDown={this.handlerInputKeyPress}
          />
        </DynaFieldWrapper>
      </div>
    );
  }
}

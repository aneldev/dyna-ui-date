import * as React from "react";
import {KeyboardEvent} from "react";
import moment = require("moment");

import {DynaFieldWrapper, EMode, EStyle, ESize} from "dyna-ui-field-wrapper";
import {DynaButton, EStyle as EButtonStyle} from "dyna-ui-button";
import {DynaPickerContainer, EStyle as EPickerContainerStyle} from "dyna-ui-picker-container";
import { ETooltipDirection } from "dyna-ui-tooltip"; // borrow the styles from the DynaDatePicker since the component is almost the same

import {DynaMonthCalendar, ERangePointMode} from "../DynaMonthCalendar/DynaMonthCalendar";
import {monthsLongNames, weekDaysShortNames} from "../utils/utils";
import {colorMixer, EColor, IColorMixer} from "../colorMixer";
import {faIcon} from "../utils/faIcon";

import {getPickerButtonSize, getShowPickerOnKeyPress} from "./utils";

import "./style.less";

export interface IDynaDateRangePickerProps {
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
  min?: Date;
  max?: Date;
  editDate: EEditDate;    // For which date (Start or End) the component will work, this is the date will be shown on input field
  showTodayButton?: boolean;
  showCloseButton?: boolean;
  closeButtonLabel?: TContent;
  todayButtonLabel?: TContent;
  staringFromWeekDay?: number; // 0 = Sunday... default = 1 (Monday)
  renderInputDate?: (value: Date) => string;
  renderPickerMonthYear?: (month: number, year: number) => TContent;
  renderPickerWeekDay?: (weekDay: number) => TContent;
  renderPickerDay?: (date: Date, dayInMonth: number, dayInWeek: number, inRange: ERangePointMode) => TContent;
  renderTooltip?: (date: Date) => JSX.Element | string | number | null;
  tooltipDirection?: ETooltipDirection;
  onShowPicker?: () => void;
  onViewportChange?: (name: string, date: Date) => void;
  onChange: (name: string, start: Date, end: Date) => void;
}

export type TContent = JSX.Element | string;

export enum EEditDate {
  START = "START",
  END = "END",
}

interface IDynaDatePickerState {
  showPicker: boolean;
  targetDate: EEditDate;
  hoverOn: Date;
}

export class DynaDateRangePicker extends React.Component<IDynaDateRangePickerProps, IDynaDatePickerState> {
  static defaultProps: Partial<IDynaDateRangePickerProps> = {
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
    min: null,
    max: null,
    staringFromWeekDay: 1,
    showTodayButton: true,
    showCloseButton: true,
    todayButtonLabel: <span>{faIcon('calendar')} Today</span>,
    closeButtonLabel: <span>{faIcon('check')} Ok</span>,
    renderInputDate: (date: Date) => moment(date).format('dd DD MMM YY'),
    renderPickerMonthYear: (month: number, year: number) => <div>{monthsLongNames[month]} {year}</div>,
    renderPickerWeekDay: (weekDay: number) => <div>{weekDaysShortNames[weekDay]}</div>,
    renderPickerDay: (date: Date, dayInMonth: number, dayInWeek: number, inRange: ERangePointMode) => <div>{dayInMonth}</div>,
    onChange: (name: string, date: Date) => undefined,
  };

  private monthCalendarA: DynaMonthCalendar;
  private monthCalendarB: DynaMonthCalendar;

  constructor(props: IDynaDateRangePickerProps) {
    super(props);
    this.state = {
      showPicker: false,
      targetDate: props.editDate,
      hoverOn: undefined,
    };
  }

  private handleHoverDate = (name: string, date: Date): void => {
    let hoverOn: Date = undefined;
    if (this.state.targetDate === EEditDate.END) hoverOn = date;
    if (hoverOn && hoverOn.valueOf() < this.props.start.valueOf()) hoverOn = undefined;
    if (hoverOn !== this.state.hoverOn) this.setState({ hoverOn });
  };

  private handleDaySelect = (name: string, date: Date): void => {
    const { start: prevStart, onChange } = this.props;
    const { targetDate: prevTargetDate } = this.state;
    let start: Date, end: Date;
    let targetDate: EEditDate;
    let hoverOn = this.state.hoverOn;

    switch (prevTargetDate) {
      case EEditDate.START:
        start = date;
        end = date;
        targetDate = EEditDate.END;
        break;
      case EEditDate.END:
        if (date.valueOf() >= prevStart.valueOf()) {
          hoverOn = undefined;
          start = prevStart;
          end = date;
          targetDate = EEditDate.START;
        }
        else { // is prior than start, behave like start is selected
          start = date;
          end = date;
          targetDate = EEditDate.END;
        }
        break;
    }

    onChange(name, start, end);

    this.setState({
      targetDate,
      hoverOn,
    });
  };

  private get viewport(): Date {
    const { start, end, editDate } = this.props;
    return editDate === EEditDate.START ? start : end;
  }

  private setViewport(date: Date): void {
    this.monthCalendarA.setViewport(date);
    this.monthCalendarB.setViewport(moment(date).add(1, 'month').toDate());
  }

  private handleMonthCalendarAViewportChange = (name: string, date: Date): void => {
    this.monthCalendarB.setViewport(moment(date).add(1, 'month').toDate());
  };

  private handleMonthCalendarBViewportChange = (name: string, date: Date): void => {
    const {onViewportChange} = this.props;
    this.monthCalendarA.setViewport(moment(date).add(-1, 'month').toDate());
    onViewportChange && onViewportChange(name, date);
  };

  private handleCalendarsMouseLeave = (): void => {
    this.setState({ hoverOn: null });
  };

  private renderPicker(): JSX.Element {
    const {
      color, showTodayButton, showCloseButton, todayButtonLabel, closeButtonLabel,
      mode, size, pickerSize, label, name, start, end, min, max, pickerHeader, pickerBody, pickerFooter,
      staringFromWeekDay, renderPickerMonthYear, renderPickerWeekDay, renderPickerDay,
      renderTooltip, tooltipDirection,
    } = this.props;
    const {
      showPicker, hoverOn,
    } = this.state;
    const show: boolean = mode === EMode.EDIT && showPicker;
    const colors: IColorMixer = colorMixer(color);
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
          <div className="ddp--double-calendar-container" onMouseLeave={this.handleCalendarsMouseLeave}>
            <DynaMonthCalendar
              className="ddp--double-calendar-A"
              ref={(component: DynaMonthCalendar) => this.monthCalendarA = component}
              name={name}
              color={colors.calendarColor}
              start={start}
              end={end}
              min={min}
              max={max}
              hoverStart={start}
              hoverOn={hoverOn}
              staringFromWeekDay={staringFromWeekDay}
              onViewportChange={this.handleMonthCalendarAViewportChange}
              onHover={this.handleHoverDate}
              onChange={this.handleDaySelect}
              renderPickerDay={renderPickerDay}
              renderPickerWeekDay={renderPickerWeekDay}
              renderPickerMonthYear={renderPickerMonthYear}
              renderTooltip={renderTooltip}
              tooltipDirection={tooltipDirection}
            />
            <DynaMonthCalendar
              className="ddp--double-calendar-B"
              ref={(component: DynaMonthCalendar) => this.monthCalendarB = component}
              name={name}
              color={colors.calendarColor}
              start={start}
              end={end}
              min={min}
              max={max}
              hoverStart={start}
              hoverOn={hoverOn}
              staringFromWeekDay={staringFromWeekDay}
              onViewportChange={this.handleMonthCalendarBViewportChange}
              onHover={this.handleHoverDate}
              onChange={this.handleDaySelect}
              renderPickerDay={renderPickerDay}
              renderPickerWeekDay={renderPickerWeekDay}
              renderPickerMonthYear={renderPickerMonthYear}
              renderTooltip={renderTooltip}
              tooltipDirection={tooltipDirection}
            />
          </div>
          {!!pickerBody && <div className="ddp--picker-custom-content">{pickerBody}</div>}
          <div className="ddp--calendar--button-bar">
            {showTodayButton ?
              <div>
                <DynaButton
                  style={EButtonStyle.ROUNDED}
                  color={colors.pickerButtonColor}
                  size={buttonSize}
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
    this.setViewport(new Date);
  };

  private handlerUserCame = (): void => {
    if (this.props.mode === EMode.VIEW) return;
    if (this.lastFocused && Number(new Date) - Number(this.lastFocused) < 300) return;

    const {
      editDate,
      onShowPicker,
    } = this.props;
    const showPicker = !this.state.showPicker;

    this.setState({
      showPicker,
      targetDate: editDate,
    });

    if (showPicker && onShowPicker) onShowPicker();
    this.setViewport(this.viewport);

    this.lastFocused = new Date;
  };

  private handlerOutsideClick = (): void => {
    const { editDate } = this.props;
    this.setState({
      showPicker: false,
      targetDate: editDate,
    });
  };

  private handlerInputKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    const {editDate, onShowPicker} = this.props;
    const { targetDate } = this.state;
    const showPicker = getShowPickerOnKeyPress(event, this.state.showPicker);
    if (showPicker !== null) this.setState({
      showPicker,
      targetDate: showPicker
        ? targetDate  // do not change it
        : editDate,   // reset it passing the prop value
    });
    if (showPicker === true && onShowPicker) onShowPicker();
  };

  private renderInputDates(): string {
    const {
      start, end,
      editDate,
      renderInputDate,
    } = this.props;

    switch (editDate) {
      case EEditDate.START:
        return renderInputDate(start);
      case EEditDate.END:
        return renderInputDate(end);
    }
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

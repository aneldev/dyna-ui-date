import * as React from "react";
import moment = require("moment");
import {Moment} from "moment";
import {EMode} from "dyna-ui-field-wrapper";

import {
  TContent,
  EMonthCalendarColor,
} from "../interfaces";

import {
  ETooltipDirection,
} from "dyna-ui-tooltip";

import { Tooltip } from "./Tooltip";

import {
  createCalendarTable,
  startOfDayMoment,
  startOfDayDate,
  monthsLongNames,
  TCalendarTable,
  weekDaysShortNames
} from "../utils/utils";

import {faIcon} from "../utils/faIcon";

import "./layout.less";
import "./color.less";

export enum ERangePointMode {
  START = "START",
  END = "END",
  START_END = "START_END",
  OUT = "OUT",
  MIDDLE = "MIDDLE",
}

export interface IDynaMonthCalendarProps {
  className?: string;
  name: string;
  mode?: EMode;
  color?: EMonthCalendarColor;
  start?: Date;
  end?: Date;
  min?: Date;
  max?: Date;
  hoverStart?: Date;    // From which day the hover will start
  hoverOn?: Date;       // On which day the user is hovering (the hover might came from another calendar)
  value?: Date;
  values?: Date[];
  staringFromWeekDay?: number; // 0 = Sunday... default = 1 (Monday)
  renderPickerMonthYear?: (month: number, year: number) => TContent;
  renderPickerWeekDay?: (weekDay: number) => TContent;
  renderPickerDay?: (date: Date, dayNumber: number, dayInWeek: number, inRange: ERangePointMode, hovered: ERangePointMode, inMonth: boolean) => TContent;
  renderTooltip?: (date: Date) => JSX.Element | string | number | null;
  tooltipDirection?: ETooltipDirection;
  onViewportChange: (name: string, date: Date) => void;
  onHover: (name: string, date: Date) => void;
  onChange: (name: string, date: Date) => void;
}

interface IDynaMonthCalendarState {
  viewport: Date;
  calendarTable: TUICalendarTable;
}

type TUICalendarTable = Array<Array<IUICalendarTableDayCell>>;

export interface IUICalendarTableDayCell {
  date: Date;
  isToday: boolean;
  selected: boolean;
  disabled: boolean;
  weekend: boolean; // is Sat or Sun
  inCurrentMonth: boolean;
  inRange: ERangePointMode;
  hovered: ERangePointMode;
}

export class DynaMonthCalendar extends React.Component<IDynaMonthCalendarProps, IDynaMonthCalendarState> {
  static defaultProps: IDynaMonthCalendarProps = {
    name: null,
    mode: EMode.EDIT,
    color: EMonthCalendarColor.GREY_GREEN,
    start: null,
    end: null,
    value: null,
    values: [],
    min: null,
    max: null,
    hoverStart: null,
    hoverOn: null,
    staringFromWeekDay: 1,
    renderPickerMonthYear: (month: number, year: number) => <div>{monthsLongNames[month]} {year}</div>,
    renderPickerWeekDay: (weekDay: number) => <div>{weekDaysShortNames[weekDay]}</div>,
    renderPickerDay: (date, dayNumber) => <div>{dayNumber}</div>,
    onViewportChange: (name: string, date: Date) => undefined,
    onHover: (name: string, date: Date) => undefined,
    onChange: (name: string, date: Date) => undefined,
  };

  constructor(props: IDynaMonthCalendarProps) {
    super(props);
    this.state = {
      viewport: null,
      calendarTable: null,
    };
  }

  public componentDidMount(): void {
    this.checkProps({} as any, this.props);
  }

  public componentDidUpdate(prevProps: Readonly<IDynaMonthCalendarProps>, prevState: Readonly<IDynaMonthCalendarState>, snapshot?: any): void {
    this.checkProps(prevProps, this.props);
  }

  private checkProps(prevProps: IDynaMonthCalendarProps, nextProps: IDynaMonthCalendarProps): void {
    if (nextProps.value !== prevProps.value ||
      JSON.stringify(nextProps.values) !== JSON.stringify(prevProps.values) ||
      nextProps.start !== prevProps.start ||
      nextProps.end !== prevProps.end ||
      nextProps.hoverOn !== prevProps.hoverOn
    ) {
      this.setStateCalendarTable(nextProps);
    }
  }

  public setViewport(viewport: Date): void {
    const { name, onViewportChange } = this.props;
    if (moment(this.state.viewport).isSame(viewport, 'month')) return;

    this.setState(
      { viewport },
      () => {
        this.setStateCalendarTable(this.props, () => {
          onViewportChange(name, viewport);
        });

      },
    );
  }

  private setStateCalendarTable(props: IDynaMonthCalendarProps, cbUpdated?: () => void): void {
    let {
      min, max,
      start: rs, end: re,
      hoverStart: hf, hoverOn: ho,
      value, values,
    } = props;
    min = startOfDayDate(min);
    max = startOfDayDate(max);
    const rangeStart = startOfDayMoment(rs);
    const rangeEnd =  startOfDayMoment(re);
    const hoverStart = startOfDayMoment(hf);
    const hoverOn = startOfDayMoment(ho);
    value = startOfDayDate(value);
    values = values.map(startOfDayDate);

    const viewport: Date = startOfDayDate(this.state.viewport || this.props.value || this.props.values[0] || new Date);
    const uiCalendarTable: TUICalendarTable = [];
    const calendarTable: TCalendarTable = createCalendarTable(viewport, this.props.staringFromWeekDay);

    calendarTable.forEach((calendarLine: Date[]) => {
      const lineCells: IUICalendarTableDayCell[] = [];
      calendarLine.forEach((_cellDate: Date) => {
        const cellDate: Moment = moment(_cellDate);
        const calendarDayCell: IUICalendarTableDayCell = {
          date: cellDate.toDate(),
          isToday: false,
          selected: null,
          inCurrentMonth: null,
          weekend: null,
          disabled: null,
          inRange: null,
          hovered: null,
        };

        // is today
        calendarDayCell.isToday = cellDate.isSame(new Date, 'day');

        // selected updated
        calendarDayCell.selected =
          cellDate.isSame(value) ||
          values.reduce((acc: boolean, valuesDate: Date) => {
            if (moment(valuesDate).isSame(cellDate)) acc = true;
            return acc;
          }, false);

        // inCurrentMonth
        calendarDayCell.inCurrentMonth = cellDate.month() === moment(viewport).month();

        // disabled update
        calendarDayCell.disabled = false;
        if (min && cellDate.isBefore(min)) calendarDayCell.disabled = true;
        if (max && cellDate.isAfter(max)) calendarDayCell.disabled = true;

        // is weekend
        calendarDayCell.weekend = [6, 0].includes(cellDate.weekday());

        // range update by start and end of the range
        calendarDayCell.inRange = DynaMonthCalendar.getRangePointMode(rangeStart, rangeEnd, cellDate);
        calendarDayCell.hovered = DynaMonthCalendar.getRangePointMode(hoverStart, hoverOn, cellDate);

        lineCells.push(calendarDayCell);
      });
      uiCalendarTable.push(lineCells);
    });

    this.setState({
      viewport,
      calendarTable: uiCalendarTable,
    }, cbUpdated);
  }

  static getRangePointMode(start: Moment, end: Moment, now: Moment): ERangePointMode {
    if (!start || !end) return ERangePointMode.OUT;

    if (end.isBefore(start)) {
      const h = end;
      end = start;
      start = h;
    }

    let output: ERangePointMode;
    if (start) {
      if (now.isBefore(start) || (end && now.isAfter(end))) {
        output = ERangePointMode.OUT;
      }
      if (now.isSame(start)) {
        output = ERangePointMode.START;
      }
      if (end && now.isSame(end)) {
        output = ERangePointMode.END;
      }
      if (now.isSame(start) && end && now.isSame(end)) {
        output = ERangePointMode.START_END;
      }
      if (now.isAfter(start) && end && now.isBefore(end)) {
        output = ERangePointMode.MIDDLE;
      }
      if (!end && now.isAfter(start)) {
        output = ERangePointMode.OUT;
      }
    }
    else {
      output = ERangePointMode.OUT;
    }

    return output;
  }

  private moveMonth(direction: number): void {
    if (this.props.mode === EMode.VIEW) return;

    const { name, onViewportChange } = this.props;
    const viewport = moment(this.state.viewport).add(direction, 'months').toDate();
    if (this.state.viewport === viewport) return;

    this.setState({ viewport }, () => {
      this.setStateCalendarTable(this.props);
      onViewportChange(name, viewport);
    });
  }

  private handleNavMonthPrev = (): void => {
    this.moveMonth(-1);
  };

  private handleNavMonthNext = (): void => {
    this.moveMonth(+1);
  };

  private handleHoverDayCell(calendarCell: IUICalendarTableDayCell) {
    const {
      name,
      onHover,
    } = this.props;
    onHover(name, calendarCell.date);
  }

  private handleDaySelect(calendarCell: IUICalendarTableDayCell): void {
    if (this.props.mode === EMode.VIEW) return;
    if (calendarCell.disabled) return;
    const {name, onChange} = this.props;
    onChange(name, calendarCell.date);
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
      mode,
      color,
      staringFromWeekDay,
      renderPickerWeekDay,
      renderPickerMonthYear,
      renderPickerDay,
      renderTooltip,
      tooltipDirection,
    } = this.props;

    const {
      viewport,
      calendarTable,
    } = this.state;

    const className: string = [
      userClassName,
      'dyna-month-calendar',
      `dyna-month-calendar--mode-${mode}`,
      `dyna-month-calendar--color-${color}`,
    ].filter(Boolean).join(' ');

    return (
      <div className={className}>
        <div className="dmc--header">
          <div
            className="dmc--header--nav-prev" onClick={this.handleNavMonthPrev}>{faIcon('caret-left')}</div>
          <div className="dmc--header--label">{renderPickerMonthYear(moment(viewport).month(), moment(viewport).year())}</div>
          <div className="dmc--header--nav-next" onClick={this.handleNavMonthNext}>{faIcon('caret-right')}</div>
        </div>
        <div className="dmc--week-days-header">
          {Array(7).fill(null).map((v: any, index: number) => {
            let weekDay: number = staringFromWeekDay + index;
            if (weekDay > 6) weekDay -= 7;
            return <div key={index} className="dmc--calendar--cell">{renderPickerWeekDay(weekDay)}</div>
          })}
        </div>
        <div className="dmc--calendar">
          {calendarTable && calendarTable.map((calendarLine: Array<IUICalendarTableDayCell>, index: number) => {
            return (
              <div key={index} className="dmc--calendar--line">
                {calendarLine.map((calendarCell: IUICalendarTableDayCell, index: number) => {
                  const date: Moment = moment(calendarCell.date);
                  const className: string = [
                    "dmc--calendar--cell",
                    calendarCell.isToday ? "dmc--calendar--cell--today" : "",
                    calendarCell.selected ? "dmc--calendar--cell--selected" : "",
                    calendarCell.inCurrentMonth ? "dmc--calendar--cell--month-in" : "dmc--calendar--cell--month-out",
                    calendarCell.disabled ? "dmc--calendar--cell--disabled" : "",
                    calendarCell.weekend ? "dmc--calendar--cell--weekend" : "",
                    `dmc--calendar--cell--range-${calendarCell.inRange}`,
                    `dmc--calendar--cell--hover-${calendarCell.hovered}`,
                  ].filter(Boolean).join(' ');
                  return (
                    <div
                      key={index}
                      className={className}
                      onMouseEnter={() => this.handleHoverDayCell(calendarCell)}
                      onClick={() => this.handleDaySelect(calendarCell)}
                    >
                      <Tooltip
                        date={date.toDate()}
                        color={color}
                        tooltipDirection={tooltipDirection}
                        renderTooltip={renderTooltip}
                      >
                        {renderPickerDay(date.toDate(), date.get('D'), date.day(), calendarCell.inRange, calendarCell.hovered, calendarCell.inCurrentMonth)}
                      </Tooltip>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

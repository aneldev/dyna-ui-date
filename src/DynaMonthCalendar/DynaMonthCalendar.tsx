import * as React from "react";
import moment = require("moment");
import {Moment} from "moment";
import {EMode} from "dyna-ui-field-wrapper";

import {TContent} from "../interfaces/interfaces";

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

export enum EColor {
  GREY_GREEN = "GREY_GREEN",
}

export enum ERangePointMode {
  START = "START",
  END = "END",
  START_END = "START_END",
  OUT = "OUT",
  MIDDLE = "MIDDLE",
}

export interface IDynaMonthCalendarProps {
  name: string;
  mode?: EMode;
  color?: EColor;
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
  renderPickerDay?: (date: Date, dayInMonth: number, dayInWeek: number, inRange: ERangePointMode, hovered: ERangePointMode) => TContent;
  onHover: (name: string, date: Date) => void;
  onChange: (name: string, date: Date) => void;
}

export interface IDynaMonthCalendarState {
  viewport: Date;
  calendarTable: TUICalendarTable;
}

export type TUICalendarTable = Array<Array<IUICalendarTableDayCell>>;

export interface IUICalendarTableDayCell {
  date: Date;
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
    color: EColor.GREY_GREEN,
    start: null,
    end: null,
    value: moment().startOf('day').toDate(),
    values: [],
    min: null,
    max: null,
    hoverStart: null,
    hoverOn: null,
    staringFromWeekDay: 1,
    renderPickerMonthYear: (month: number, year: number) => <div>{monthsLongNames[month]} {year}</div>,
    renderPickerWeekDay: (weekDay: number) => <div>{weekDaysShortNames[weekDay]}</div>,
    renderPickerDay: (date: Date, dayInMonth: number, dayInWeek: number, inRange: ERangePointMode) =>
      <div>{dayInMonth}</div>,
    onHover: (name: string, date: Date) => undefined,
    onChange: (name: string, date: Date) => undefined,
  };

  constructor(props: IDynaMonthCalendarProps) {
    super(props);
    this.state = {
      viewport: null,
      calendarTable: null,
    }
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
    this.setState({ viewport }, () => this.setStateCalendarTable(this.props));
  }

  private setStateCalendarTable(props: IDynaMonthCalendarProps): void {
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
          selected: null,
          inCurrentMonth: null,
          weekend: null,
          disabled: null,
          inRange: null,
          hovered: null,
        };

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
    });
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
    this.setState({
        viewport: moment(this.state.viewport).add(direction, 'months').toDate()
      }
      , () => {
        this.setStateCalendarTable(this.props);
      })
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
  };

  private handleDaySelect(calendarCell: IUICalendarTableDayCell): void {
    if (this.props.mode === EMode.VIEW) return;
    if (calendarCell.disabled) return;
    const {name, onChange} = this.props;
    onChange(name, calendarCell.date);
  }

  public render(): JSX.Element {
    const {
      mode,
      color,
      staringFromWeekDay,
      renderPickerWeekDay,
      renderPickerMonthYear,
      renderPickerDay,
    } = this.props;

    const {
      viewport,
      calendarTable,
    } = this.state;

    const className: string = [
      'dyna-month-calendar',
      `dyna-month-calendar--mode-${mode}`,
      `dyna-month-calendar--color-${color}`,
    ].join(' ').trim();

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
          {calendarTable && calendarTable.map((calendarLine: Array<IUICalendarTableDayCell>, index:number) => {
            return (
              <div key={index} className="dmc--calendar--line">
                {calendarLine.map((calendarCell: IUICalendarTableDayCell, index:number) => {
                  const date: Moment = moment(calendarCell.date);
                  const className: string = [
                    "dmc--calendar--cell",
                    calendarCell.selected ? "dmc--calendar--cell--selected" : "",
                    calendarCell.inCurrentMonth ? "dmc--calendar--cell--month-in" : "dmc--calendar--cell--month-out",
                    calendarCell.disabled ? "dmc--calendar--cell--disabled" : "",
                    calendarCell.weekend ? "dmc--calendar--cell--weekend" : "",
                    `dmc--calendar--cell--range-${calendarCell.inRange}`,
                    `dmc--calendar--cell--hover-${calendarCell.hovered}`,
                  ].join(' ').trim();
                  return (
                    <div
                      key={index}
                      className={className}
                      onMouseEnter={() => this.handleHoverDayCell(calendarCell)}
                      onClick={() => this.handleDaySelect(calendarCell)}
                    >
                      {renderPickerDay(date.toDate(), date.get('D'), date.day(), calendarCell.inRange, calendarCell.hovered)}
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

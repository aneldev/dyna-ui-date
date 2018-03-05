import * as React from "react";
import moment = require("moment");
import {Moment} from "moment";
import {EMode} from "dyna-ui-field-wrapper";

import {TContent} from "../interfaces/interfaces";

import {createCalendarTable, getDate0, monthsLongNames, TCalendarTable, weekDaysShortNames} from "../utils/utils";

import {faIcon} from "../utils/faIcon";

import "./layout.less";
import "./color.less";

export enum EColor {
  GREY_GREEN = "GREY_GREEN",
}

export enum EInRange {
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
  value?: Date;
  values?: Date[];
  viewport?: Date;      // for the first render only!
  weekDays?: string[];  // week days (2 chars)
  months?: string[];    // month names
  staringFromWeekDay?: number; // 0 = Sunday... default = 1 (Monday)
  renderPickerMonthYear?: (month: number, year: number) => TContent;
  renderPickerWeekDay?: (weekDay: number) => TContent;
  renderPickerDay?: (date: Date, dayInMonth: number, dayInWeek: number, inRange: EInRange) => TContent;
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
  inRange: EInRange;
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
    weekDays: weekDaysShortNames,
    months: monthsLongNames,
    staringFromWeekDay: 1,
    renderPickerMonthYear: (month: number, year: number) => <div>{monthsLongNames[month]} {year}</div>,
    renderPickerWeekDay: (weekDay: number) => <div>{weekDaysShortNames[weekDay]}</div>,
    renderPickerDay: (date: Date, dayInMonth: number, dayInWeek: number, inRange: EInRange) => <div>{dayInMonth}</div>,
    onChange: (name: string, date: Date) => undefined,
  };

  constructor(props: IDynaMonthCalendarProps) {
    super(props);
    this.state = {
      viewport: getDate0(this.props.value || this.props.values[0] || this.props.viewport || new Date),
      calendarTable: null,
    }
  }

  public componentDidMount(): void {
    this.setStateCalendarTable(this.props);
  }

  public componentWillReceiveProps(nextProps: IDynaMonthCalendarProps): void {
    if (nextProps.value !== this.props.value ||
      JSON.stringify(nextProps.values) !== JSON.stringify(this.props.values) ||
      nextProps.start !== this.props.start ||
      nextProps.end !== this.props.end
    ) {
      this.setStateCalendarTable(nextProps);
    }
  }

  public setViewport(viewport:Date):void{
    this.setState({viewport},()=>this.setStateCalendarTable(this.props));
  }

  private setStateCalendarTable(props: IDynaMonthCalendarProps): void {
    let {min, max, start, end, value, values} = props;
    min = getDate0(min);
    max = getDate0(max);
    start = getDate0(start);
    end = getDate0(end);
    value = getDate0(value);
    values = values.map(getDate0);

    const viewport: Date = getDate0(this.state.viewport || this.props.value || this.props.values[0] || this.props.viewport || new Date);
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

        // range update by start and end
        if (start) {
          if (cellDate.isBefore(start) || (end && cellDate.isAfter(end))) {
            calendarDayCell.inRange = EInRange.OUT;
          }
          if (cellDate.isSame(start)) {
            calendarDayCell.inRange = EInRange.START;
          }
          if (end && cellDate.isSame(end)) {
            calendarDayCell.inRange = EInRange.END;
          }
          if (cellDate.isSame(start) && end && cellDate.isSame(end)) {
            calendarDayCell.inRange = EInRange.START_END;
          }
          if (cellDate.isAfter(start) && end && cellDate.isBefore(end)) {
            calendarDayCell.inRange = EInRange.MIDDLE;
          }
          if (!end && cellDate.isAfter(start)) {
            calendarDayCell.inRange = EInRange.OUT;
          }
        }
        else {
          calendarDayCell.inRange = EInRange.OUT;
        }

        lineCells.push(calendarDayCell);
      });
      uiCalendarTable.push(lineCells);
    });

    this.setState({
      viewport,
      calendarTable: uiCalendarTable,
    });
  }

  private handleNavMonth(direction: number): void {
    if (this.props.mode === EMode.VIEW) return;
    this.setState({
        viewport: moment(this.state.viewport).add(direction, 'months').toDate()
      }
      , () => {
        this.setStateCalendarTable(this.props);
      })
  }

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
          <div className="dmc--header--nav-prev" onClick={this.handleNavMonth.bind(this, -1)}>{faIcon('caret-left')}</div>
          <div className="dmc--header--label">{renderPickerMonthYear(moment(viewport).month(), moment(viewport).year())}</div>
          <div className="dmc--header--nav-next" onClick={this.handleNavMonth.bind(this, +1)}>{faIcon('caret-right')}</div>
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
                  ].join(' ').trim();
                  return (
                    <div key={index} className={className} onClick={() => this.handleDaySelect(calendarCell)}>
                      {renderPickerDay(date.toDate(), date.get('D'), date.day(), calendarCell.inRange)}
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

import * as React from "react";
import moment = require("moment");
import {EMode} from "dyna-ui-field-wrapper";

import {
  monthsLongNames,
  weekDaysShortNames
} from "../utils/utils";

import {
  EColor,
  ERangePointMode,
} from "../DynaMonthCalendar/DynaMonthCalendar";

import {TContent} from "../interfaces/interfaces";

import "./layout.less";

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

interface IDynaMonthCalendarSlideState {

}

export class DynaMonthCalendarSlide extends React.Component<IDynaMonthCalendarProps, IDynaMonthCalendarSlideState> {
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

  public render(): JSX.Element {
    return <>In progress</>
  }
}

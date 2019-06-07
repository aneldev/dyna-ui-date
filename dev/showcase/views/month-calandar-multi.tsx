import * as React from "react";
import {IShowcaseView} from "dyna-showcase";
import moment = require("moment");
import {DynaMonthCalendar, EDynaMonthCalendarColor} from "../../../src";

export const monthCalendarMulti: IShowcaseView = {
  slug: 'month-calendar-multi',
  faIconName: 'flask',
  title: 'Month calendar, multi selection',
  center: true,
  component: (() => {

    interface IMyTestComponentProps {
      color?: EDynaMonthCalendarColor,
    }

    interface IMyTestComponentState {
      dates: Date[];
    }

    class MyTestComponent extends React.Component<IMyTestComponentProps, IMyTestComponentState> {
      constructor(props: IMyTestComponentProps) {
        super(props);
        this.state = {
          dates: [],
        }
      }

      private existDate(date: Date, inDates: Date[]): boolean {
        return inDates.reduce((acc: boolean, scanDate: Date) => {
          acc = acc || moment(scanDate).isSame(date);
          return acc;
        }, false);
      }

      private removeDate(date: Date, fromDates: Date[]): Date[] {
        return fromDates.filter((scanDate: Date) => {
          return !moment(scanDate).isSame(date);
        });
      }

      private handleChange = (name: string, date: Date): void => {
        if (this.existDate(date, this.state.dates)) {
          this.setState({
            dates: this.removeDate(date, this.state.dates)
          });
        }
        else {
          const dates: Date[] = [].concat(this.state.dates, date);
          this.setState({ dates });
        }
      };

      public render(): JSX.Element {
        const { color } = this.props;
        const { dates } = this.state;
        return (
          <DynaMonthCalendar
            color={color}
            name="date"
            values={dates}
            onChange={this.handleChange}
          />
        )
      }
    }

    return <MyTestComponent/>

  })(),
  wrapperStyle: {
    width: "70%",
    height: "50%",
  },
  props: (() => {
    const output: any[] = [];
    Object.keys(EDynaMonthCalendarColor).map((color: EDynaMonthCalendarColor) => {
      output.push({
        slug: `color-${color}`,
        title: `Date picker in ${color.replace(/_/g, ' ').toLowerCase()} color`,
        props: {
          color,
        }
      });
    });
    return output
  })(),

};

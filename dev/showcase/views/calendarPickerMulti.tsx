import * as React from "react";
import moment = require("moment");
import {IShowcaseView} from "dyna-showcase";
import {EMode, ESize, EStyle} from "dyna-ui-field-wrapper";
import {DynaDatePicker, EDynaDatePickerColor} from "../../../src";

export const calendarPickerMulti: IShowcaseView =  {
  slug: 'calendar-picker-multi',
  faIconName: 'flask',
  title: 'Calendar multi date picker',
  center: true,
  component: (() => {

    interface IMyTestComponentProps {
      mode?: EMode,
      style?: EStyle,
      color?: EDynaDatePickerColor,
      size?: ESize,
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
        } else {
          const dates: Date[] = [].concat(this.state.dates, date);
          this.setState({dates});
        }
      };

      public render(): JSX.Element {
        const {mode, style, color, size} = this.props;
        const {dates} = this.state;
        return (
          <DynaDatePicker
            mode={mode}
            label="Select days"
            style={style}
            color={color}
            size={size}
            name="start"
            values={dates}
            closeOnSelect={false}
            onChange={this.handleChange}
          />
        )
      }
    }

    return <MyTestComponent/>

  })(),
  wrapperStyle: {
    width: '100%',
  },
  props: (() => {
    const output: any[] = [];
    Object.keys(ESize).map((size: ESize) => {
      Object.keys(EDynaDatePickerColor).map((color: EDynaDatePickerColor) => {
        Object.keys(EMode).map((mode: EMode) => {
          output.push({
            slug: `inline-rounded-${color}-${mode}-${size}`,
            title: `Date picker ${size.toLowerCase()} in ${color.replace(/_/g, ' ').toLowerCase()} color, ${mode.toLowerCase()}`,
            props: {
              mode,
              style: EStyle.INLINE_ROUNDED,
              color,
              size,
            }
          });
        });
      });
    });
    return output
  })(),
};

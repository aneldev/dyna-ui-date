import * as React from "react";
import {IShowcaseView} from "dyna-showcase";
import {EMode, ESize, EStyle} from "dyna-ui-field-wrapper";
import {DynaDateRangePicker, EDynaDatePickerColor, EEditDate} from "../../../src";

export const calendarPicker: IShowcaseView = {
  slug: 'calendar-picker',
  faIconName: 'flask',
  title: 'Calendar range picker',
  description: `Available 05/12/17-13/01/15 selected 13/12/17-10/01/18`,
  center: true,
  component: (() => {

    interface IMyTestComponentProps {
      mode?: EMode,
      style?: EStyle,
      color?: EDynaDatePickerColor,
      size?: ESize,
    }

    interface IMyTestComponentState {
      start: Date;
      end: Date;
    }

    class MyTestComponent extends React.Component<IMyTestComponentProps, IMyTestComponentState> {
      constructor(props: IMyTestComponentProps) {
        super(props);
        this.state = {
          start: new Date('2017-12-13'),
          end: new Date('2018-01-10'),
        }
      }

      private handleChange = (name: string, start: Date, end: Date): void => {
        console.log('on change', name, start, end);
        this.setState({start, end});
      };

      public render(): JSX.Element {
        const {mode, style, color, size} = this.props;
        const {start, end} = this.state;
        return (
          <div>
            <DynaDateRangePicker
              mode={mode}
              editDate={EEditDate.START}
              label="From date"
              style={style}
              color={color}
              size={size}
              name="start"
              min={new Date("2017-12-05")}
              max={new Date("2018-01-13")}
              start={start}
              end={end}
              onChange={this.handleChange}
            />
            <DynaDateRangePicker
              mode={mode}
              editDate={EEditDate.END}
              label="To date"
              style={style}
              color={color}
              size={size}
              name="end"
              min={new Date("2017-12-05")}
              max={new Date("2018-01-13")}
              start={start}
              end={end}
              onChange={this.handleChange}
            />
          </div>
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
    Object.keys(EStyle).map((style: EStyle) => {
      Object.keys(ESize).map((size: ESize) => {
        Object.keys(EDynaDatePickerColor).map((color: EDynaDatePickerColor) => {
          Object.keys(EMode).map((mode: EMode) => {
            output.push({
              slug: `inline-rounded-${color}-${mode}-${size}-${style}`,
              title: `Date picker ${size.toLowerCase()} in ${color.replace(/_/g, ' ').toLowerCase()} color, with ${style.replace(/_/g, ' ').toLowerCase()} style, ${mode.toLowerCase()}`,
              props: {
                mode,
                style,
                color,
                size,
              }
            });
          });
        });
      });
    });
    return output
  })(),
};

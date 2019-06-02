import * as React from "react";
import {IShowcaseView} from "dyna-showcase";
import {ESize} from "dyna-ui-field-wrapper";
import moment = require("moment");

import {DynaDatePicker, EColor} from "../../../src";

export const calendarPickerNow: IShowcaseView ={
  slug: 'calendar-picker-now',
  faIconName: 'flask',
  title: 'Calendar range picker',
  description: `Available range +/-3 days, select +/-2 days`,
  center: true,
  component: (() => {

    interface IMyTestComponentProps {
    }

    interface IMyTestComponentState {
      start: Date;
      end: Date;
    }

    class MyTestComponent extends React.Component<IMyTestComponentProps, IMyTestComponentState> {
      constructor(props: IMyTestComponentProps) {
        super(props);
        this.state = {
          start: moment().subtract({days: 2}).toDate(),
          end: moment().add({days: 2}).toDate(),
        }
      }

      private handleChange = (name: string, date: Date): void => {
        console.log('on change', name, date);
        const newState: IMyTestComponentState = {
          ...this.state,
          [name]: date,
        };
        if (newState.start > newState.end) {
          let helper: Date = newState.end;
          newState.end = newState.start;
          newState.start = helper;
        }
        this.setState(newState);
      };

      public render(): JSX.Element {
        const {start, end} = this.state;
        return (
          <div>
            <DynaDatePicker
              label="From date"
              color={EColor.GREY_ORANGE_GREEN}
              size={ESize.MEDIUM}
              name="start"
              min={moment().subtract({days: 3}).toDate()}
              max={moment().add({days: 3}).toDate()}
              start={start}
              end={end}
              value={start}
              onChange={this.handleChange}
            />
            <DynaDatePicker
              label="To date"
              color={EColor.GREY_ORANGE_GREEN}
              size={ESize.MEDIUM}
              name="end"
              min={moment().subtract({days: 3}).toDate()}
              max={moment().add({days: 3}).toDate()}
              start={start}
              end={end}
              value={end}
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
};

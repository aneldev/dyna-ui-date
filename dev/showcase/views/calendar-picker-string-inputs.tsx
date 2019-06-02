import * as React from "react";
import {IShowcaseView} from "dyna-showcase";
import {DynaDatePicker, EColor} from "../../../src";
import {ESize} from "dyna-ui-field-wrapper";

export const calendarPickerStringInput: IShowcaseView = {
  slug: 'calendar-picker-string-inputs',
  faIconName: 'flask',
  title: 'Calendar string inputs',
  center: true,
  component: (() => {

    interface IMyTestComponentProps {
      start?: Date;
      end?: Date;
    }

    interface IMyTestComponentState {
      start: Date;
      end: Date;
    }

    class MyTestComponent extends React.Component<IMyTestComponentProps, IMyTestComponentState> {
      constructor(props: IMyTestComponentProps) {
        super(props);
        this.state = {
          start: this.props.start,
          end: this.props.end,
        }
      }

      public componentDidMount(): void {
        this.checkProps({} as any, this.props);
      }

      public componentDidUpdate(prevProps: Readonly<IMyTestComponentProps>, prevState: Readonly<IMyTestComponentProps>, snapshot?: any): void {
        this.checkProps(prevProps, this.props);
      }

      private checkProps(prevProps: IMyTestComponentProps, nextProps: IMyTestComponentProps): void {
        if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) return;
        this.setState({
          start: nextProps.start,
          end: nextProps.end,
        })
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
  props: [
    {
      slug: 'yyyy-mm-dd',
      title: 'yyyy-mm-dd format',
      props: {
        start: '2017-12-01',
        end: '2017-12-31',
      },
    },
    {
      slug: 'iso-string',
      title: 'iso string',
      props: {
        start: (new Date('2017-12-01')).toISOString(),
        end: (new Date('2017-12-31')).toISOString(),
      },
    },
    {
      slug: 'number',
      title: 'number',
      props: {
        start: Number(new Date('2017-12-01')),
        end: Number(new Date('2017-12-31')),
      },
    },
  ],
  wrapperStyle: {
    width: '100%',
  },
};

import * as React from "react";
import { IShowcaseView } from "dyna-showcase";
import {
  DynaMonthCalendar,
  EDynaMonthCalendarColor
} from "../../../src";
import { EMode } from "dyna-ui-field-wrapper";
import { ETooltipDirection } from "dyna-ui-tooltip";

export const monthCalendar: IShowcaseView = {
  slug: 'month-calendar',
  faIconName: 'flask',
  title: 'Month calendar, range selection',
  description: `Select a range between 13-12-2017 - 10-01-2018`,
  center: true,
  component: (() => {

    interface IMyTestComponentProps {
      color?: EDynaMonthCalendarColor;
      mode?: EMode;
    }

    interface IMyTestComponentState {
      start: Date;
      end: Date;
      hoverOn: Date;
      hoverStart: Date;
      liveInSeconds: number;
    }

    class MyTestComponent extends React.Component<IMyTestComponentProps, IMyTestComponentState> {
      constructor(props: IMyTestComponentProps) {
        super(props);
        this.state = {
          start: new Date('2017-12-13'),
          end: new Date('2018-01-10'),
          hoverOn: undefined,
          hoverStart: undefined,
          liveInSeconds: 0,
        };
      }

      public componentDidMount(): void {
        setInterval(() => this.setState({liveInSeconds: this.state.liveInSeconds + 1}), 1000);
      }

      private renderTooltip = (date: Date): JSX.Element | null => {
        if (date.getDate() === 7) return null;
        return (
          <div>
            <div>{date.toLocaleDateString()}</div>
            <div>{this.state.liveInSeconds} seconds after launch</div>
          </div>
        );
      };

      private handleHover = (name: string, date: Date): void => {
        this.setState({
          hoverOn: date,
        });
      };

      private handleChange = (name: string, date: Date): void => {
        this.setState({
          start: date,
          end: date,
          hoverStart: date,
        });
      };

      public render(): JSX.Element {
        const { mode, color } = this.props;
        const { start, end, hoverOn, hoverStart } = this.state;
        return (
          <>
            <DynaMonthCalendar
              mode={mode}
              color={color}
              name="date"
              min={new Date("2017-12-05")}
              max={new Date("2018-01-13")}
              start={start}
              end={end}
              value={start}
              renderTooltip={this.renderTooltip}
              tooltipDirection={ETooltipDirection.NORTH}
              hoverStart={hoverStart}
              hoverOn={hoverOn}
              onHover={this.handleHover}
              onChange={this.handleChange}
            />
            <i>With tooltip except the 7th</i>
          </>
        );
      }
    }

    return <MyTestComponent/>;

  })(),
  wrapperStyle: {
    width: "70%",
    height: "50%",
  },
  props: (() => {
    const output: any[] = [];
    Object.keys(EDynaMonthCalendarColor).map((color: EDynaMonthCalendarColor) => {
      Object.keys(EMode).map((mode: EMode) => {
        output.push({
          slug: `color-${color}-mode-${mode}`,
          title: `Date picker in ${color.replace(/_/g, ' ').toLowerCase()} color, ${mode} mode`,
          props: {
            color,
            mode,
          }
        });
      });
    });
    return output;
  })(),
};


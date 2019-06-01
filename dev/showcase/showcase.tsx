import * as React from 'react';
import moment = require("moment");

import {faIcon, IShowcase} from "dyna-showcase";

import {
  EMode, EStyle,
  EDynaMonthCalendarColor, EDynaDatePickerColor,
  DynaMonthCalendar,
  DynaDatePicker, ESize, EColor,
} from "../../src";

import {Logo} from "../logo";

require('./showcase.less');

export default {
  logo: <Logo/>,
  views: [
    {
      slug: 'intro',
      faIconName: 'circle-o-notch',
      title: 'Introduction',
      center: true,
      component: (
        <div>
          <h3>dyna-ui-date</h3>
          <h4>simple date picker</h4>
          <p>simple!</p>
        </div>
      ),
    },

    {
      slug: 'month-calendar',
      faIconName: 'flask',
      title: 'Month calendar, range selection',
      description: `Select a range between 13-12-2017 - 10-01-2018`,
      center: true,
      component: (() => {

        interface IMyTestComponentProps {
          color?: EDynaMonthCalendarColor,
          mode?: EMode,
        }

        interface IMyTestComponentState {
          start: Date;
          end: Date;
          hoverOn: Date;
          hoverStart: Date;
        }

        class MyTestComponent extends React.Component<IMyTestComponentProps, IMyTestComponentState> {
          constructor(props: IMyTestComponentProps) {
            super(props);
            this.state = {
              start: new Date('2017-12-13'),
              end: new Date('2018-01-10'),
              hoverOn: undefined,
              hoverStart: undefined,
            }
          }

          private handleHover(name: string, date: Date): void {
            this.setState({
              hoverOn: date,
            });
            console.debug('hover on', date.toString());
          }

          private handleChange(name: string, date: Date): void {
            this.setState({
              start: date,
              end: date,
              hoverStart: date,
            })
          }

          public render(): JSX.Element {
            const {mode, color} = this.props;
            const {start, end, hoverOn, hoverStart} = this.state;
            return (
              <DynaMonthCalendar
                mode={mode}
                color={color}
                name="date"
                min={new Date("2017-12-05")}
                max={new Date("2018-01-13")}
                start={start}
                end={end}
                value={start}
                hoverStart={hoverStart}
                hoverOn={hoverOn}
                onHover={this.handleHover.bind(this)}
                onChange={this.handleChange.bind(this)}
              />
            )
          }
        }

        return <MyTestComponent/>

      })(),
      wrapperStyle: {
        width: "50%",
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
        return output
      })(),
    },

    {
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

          private handleChange(name: string, date: Date): void {
            if (this.existDate(date, this.state.dates)) {
              this.setState({
                dates: this.removeDate(date, this.state.dates)
              });
            } else {
              const dates: Date[] = [].concat(this.state.dates, date);
              this.setState({dates});
            }
          }

          public render(): JSX.Element {
            const {color} = this.props;
            const {dates} = this.state;
            return (
              <DynaMonthCalendar
                color={color}
                name="date"
                values={dates}
                onChange={this.handleChange.bind(this)}
              />
            )
          }
        }

        return <MyTestComponent/>

      })(),
      wrapperStyle: {
        width: "50%",
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

    },

    {
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

          private handleChange(name: string, date: Date): void {
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
          }

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
                  onChange={this.handleChange.bind(this)}
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
                  onChange={this.handleChange.bind(this)}
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
    },

    {
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

          public componentWillReceiveProps(nextProps: IMyTestComponentProps): void {
            this.setState({
              start: nextProps.start,
              end: nextProps.end,
            })
          }

          private handleChange(name: string, date: Date): void {
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
          }

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
                  onChange={this.handleChange.bind(this)}
                />
                <DynaDatePicker
                  label="To date"
                  color={EColor.GREY_ORANGE_GREEN}
                  size={ESize.MEDIUM}
                  name="end"
                  start={start}
                  end={end}
                  value={end}
                  onChange={this.handleChange.bind(this)}
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
    },

    {
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

          private handleChange(name: string, date: Date): void {
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
          }

          public render(): JSX.Element {
            const {mode, style, color, size} = this.props;
            const {start, end} = this.state;
            return (
              <div>
                <DynaDatePicker
                  mode={mode}
                  label="From date"
                  style={style}
                  color={color}
                  size={size}
                  name="start"
                  min={new Date("2017-12-05")}
                  max={new Date("2018-01-13")}
                  start={start}
                  end={end}
                  value={start}
                  onChange={this.handleChange.bind(this)}
                />
                <DynaDatePicker
                  mode={mode}
                  label="To date"
                  style={style}
                  color={color}
                  size={size}
                  name="end"
                  min={new Date("2017-12-05")}
                  max={new Date("2018-01-13")}
                  start={start}
                  end={end}
                  value={end}
                  onChange={this.handleChange.bind(this)}
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
    },

    {
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

          private handleChange(name: string, date: Date): void {
            if (this.existDate(date, this.state.dates)) {
              this.setState({
                dates: this.removeDate(date, this.state.dates)
              });
            } else {
              const dates: Date[] = [].concat(this.state.dates, date);
              this.setState({dates});
            }
          }

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
                onChange={this.handleChange.bind(this)}
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
    },

    {
      slug: 'the-end',
      title: 'the end',
      description: 'Thank you',
      center: true,
      component: (
        <div style={{textAlign: 'center'}}>
          <h1>The end</h1>
          <div style={{fontSize: '20px'}}>
            <p><a href="https://github.com/aneldev/dyna-ui-date">{faIcon('github')} Github</a></p>
            <p><a href="https://www.npmjs.com/package/dyna-ui-date">{faIcon('square')} npm</a></p>
          </div>
        </div>
      ),
    },
  ]
}as IShowcase;

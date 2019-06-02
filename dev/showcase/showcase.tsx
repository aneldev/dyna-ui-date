import * as React from 'react';

import {faIcon, IShowcase} from "dyna-showcase";

import {Logo} from "../logo";
import {monthCalendar} from "./views/month-calendar";
import {monthCalendarMulti} from "./views/month-calandar-multi";
import {calendarPickerNow} from "./views/calendar-picker-now";
import {calendarPickerStringInput} from "./views/calendar-picker-string-inputs";
import {calendarPicker} from "./views/calendar-picker";
import {calendarPickerMulti} from "./views/calendarPickerMulti";

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

    monthCalendar,

    monthCalendarMulti,

    calendarPickerNow,

    calendarPickerStringInput,

    calendarPicker,

    calendarPickerMulti,

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

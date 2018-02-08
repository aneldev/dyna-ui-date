import moment = require("moment");

declare let window: any;
declare let global: any, jasmine: any, describe: any, clearTest: any, it: any, expect: any;
if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

import {createCalendarTable, getDaysArray, getFirstDateOfMonth, TCalendarTable, weekDaysShortNames} from "../../src/utils/utils";

describe('Utils test', () => {

  it('should getFirstDateOfMonth', () => {
    expect(moment(getFirstDateOfMonth(new Date('2018-01-01'))).format('YYYY-MM-DD')).toBe("2018-01-01");
    expect(moment(getFirstDateOfMonth(new Date('2018-12-31'))).format('YYYY-MM-DD')).toBe("2018-12-01");
    expect(moment(getFirstDateOfMonth(new Date('1976-01-02'))).format('YYYY-MM-DD')).toBe("1976-01-01");
    expect(moment(getFirstDateOfMonth(new Date('2018-12-01'))).format('YYYY-MM-DD')).toBe("2018-12-01");
    expect(moment(getFirstDateOfMonth(new Date('2018-02-28'))).format('YYYY-MM-DD')).toBe("2018-02-01");
  });

  it('should getDaysArray', () => {
    expect(getDaysArray(new Date('2016-02-01'))).toBe(29);
    expect(getDaysArray(new Date('2016-02-29'))).toBe(29);
    expect(getDaysArray(new Date('2018-02-15'))).toBe(28);
    expect(getDaysArray(new Date('2018-02-28'))).toBe(28);
    expect(getDaysArray(new Date('2016-09-09'))).toBe(30);
    expect(getDaysArray(new Date('2016-10-10'))).toBe(31);
    expect(getDaysArray(new Date('2016-12-31'))).toBe(31);
  });

  for (let iStartingDay: number = 0; iStartingDay <= 6; iStartingDay++) {
    for (let iYear: number = 2000; iYear <= 2020; iYear++) {
      for (let iMonth: number = 1; iMonth <= 12; iMonth++) {
        const dateString: string = `${iYear}-${iMonth}-17`;
        const expectedDateDifferences: number = [3, 4, 10, 11].indexOf(iMonth) > -1 ? 2 : 1;
        it(`should create the calendar table of ${dateString} with starting day ${weekDaysShortNames[iStartingDay]}`, () => {
          const calendar: TCalendarTable = createCalendarTable(new Date(dateString), iStartingDay);
          testCalendar(calendar, expectedDateDifferences, iStartingDay);
        });
      }
    }
  }
});

function testCalendar(calendar: TCalendarTable, expectedDateDifferences: number, startingDay: number): void {
  // the difference between the dates should be equal
  var dateDifferences: number =
    [].concat(...calendar)
      .map((date, index, array) => {
        if (index === 0) return;
        return {date, diff: String(Number(date) - Number(array[index - 1]))};
      })
      .slice(1)
      .reduce((acc, v) => {
        if (acc.indexOf(v.diff) === -1) acc.push(v.diff);
        return acc;
      }, [])
      .length;
  expect(dateDifferences <= expectedDateDifferences).toBe(true);
  if (dateDifferences > expectedDateDifferences) {
    const debugObject: any = [].concat(...calendar)
      .map((date, index, array) => {
        if (index === 0) return;
        return {date, diff: String(Number(date) - Number(array[index - 1]))};
      });

    console.log('debug info: unexpected diffs', JSON.stringify(debugObject, null, 2));
  }

  // should start with the same day
  expect(calendar.map(line => line[0].getDay()).join('')).toBe(Array(calendar.length).fill(String(startingDay)).join(''));
}

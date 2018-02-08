export const monthsLongNames: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const weekDaysShortNames: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export function getFirstDateOfMonth(date: Date): Date {
  const dateString: string = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).substr(-2)}-01`;
  return new Date(dateString);
}

export function getDaysArray(date: Date): number {
  date = getFirstDateOfMonth(date);
  let month: number = date.getMonth();
  let days: number = 0;
  while (date.getMonth() == month) {
    days++;
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export type TCalendarTable = Array<Array<Date>>;

export function createCalendarTable(date: Date, startingFromWeekDay: number = 1): TCalendarTable {
  let firstMonthDate: Date = getFirstDateOfMonth(date);
  let startingMonthDay: number = firstMonthDate.getDay();
  let startingCalendarIndex: number = startingMonthDay - startingFromWeekDay;
  if (startingCalendarIndex < 0) startingCalendarIndex += 7;
  let monthDays: number = getDaysArray(date);
  let lines: TCalendarTable = [];

  // fill the month starting from the previous month's days
  let lineIndex: number = 0;
  let line: Array<Date> = Array(7).fill(null);
  for (let iDay: number = -startingCalendarIndex; iDay < monthDays; iDay++) {
    let d: Date = new Date(firstMonthDate);
    line[lineIndex] = new Date(d.setDate(d.getDate() + iDay));
    lineIndex++;
    if (lineIndex > 6) {
      lines.push(line);
      line = Array(7).fill(null);
      lineIndex = 0;
    }
  }
  if (line.length) lines.push(line);

  // fill the rest days
  const fillFromIndex: number = lines[lines.length - 1].indexOf(null);
  for (let iDay: number = fillFromIndex; iDay < 7; iDay++) {
    let d: Date = new Date(firstMonthDate);
    lines[lines.length - 1][iDay] = new Date(d.setDate(d.getDate() + (monthDays + iDay - fillFromIndex)));
  }

  return lines;
}





import {currDate} from './../constants/index';
import moment from 'moment';

export const checkFocus = (pathName: string, path: string): boolean => {
  if (pathName.indexOf(path) !== -1) {
    return true;
  }

  return false;
};

export const isLeapYear = (year: any) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};

export const getFebDays = (year: any) => {
  return isLeapYear(year) ? 29 : 28;
};

export const daysOfMonth = (month: any, year: any) => {
  let first_day = new Date(year, month, 1);
  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  let arrayDays = [];

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 2; i++) {
    const timeData = {
      day: i - first_day.getDay() + 2,
      month,
      year,
    };
    arrayDays.push(timeData);
  }

  return arrayDays;
};

export const checkEqualDate = (time: Date) => {
  if (
    time.getFullYear() === currDate.getFullYear() &&
    time.getDate() === currDate.getDate() &&
    time.getMonth() === currDate.getMonth()
  ) {
    return true;
  }
  return false;
};

export const generateYearNextPerivous = (year?: number) => {
  let currYear = year || currDate.getFullYear();
  const years = [];

  for (let i = 0; i < 6; i++) {
    years.push(currYear + i);
    years.unshift(currYear - i);
  }

  return years;
};

export const objToQuery = (obj: any): string => {
  if (!obj) return '';

  var query = [];

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      query.push(
        encodeURIComponent(prop) + '=' + encodeURIComponent(obj[prop]),
      );
    }
  }

  return '?' + query.join('&');
};

export const defaultParamsAPI = (
  currentpage?: number | string,
  limit?: number | string,
) => {
  return {
    currentpage: currentpage ? currentpage.toString() : 0,
    currentdate: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    limit: limit ? limit.toString() : 10,
  };
};

export const checkDaysOfMonth = (day: any, month: any, year: any) => {
  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  if (day > days_of_month[month - 1]) return false;
  return true;
};

export const formatTimeVideo = (
  timeInSeconds: number,
): {minutes: string; seconds: string} => {
  const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

  return {
    minutes: result.substr(3, 2),
    seconds: result.substr(6, 2),
  };
};

export const cumulativeOffsetElement = (
  element: any,
): {top: number; left: number} => {
  let top = 0,
    left = 0;
  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left,
  };
};

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export const convertDayFormat = (date: Date | string) => {
  const dayOfWeek = moment(date).weekday() + 1;
  return `${dayOfWeek === 1 ? 'CN' : `T${dayOfWeek}`} ${moment(date).format(
    'DD/MM/YYYY',
  )}`;
};

export const convertDayFromServer = (date: Date | string) => {
  return `${moment(date).format('DD/MM/YYYY')}`;
};

export const changeDayFormatToServer = (date: string): Date => {
  const tokens = date.split('/');
  return new Date(
    Number.parseInt(tokens[2]),
    Number.parseInt(tokens[1]) - 1,
    Number.parseInt(tokens[0]),
  );
};

export const objToFormData = (object: any): FormData => {
  let fd = new FormData();
  for (const key in object) {
    if (
      object.hasOwnProperty(key) &&
      key !== 'rLicenseLists' &&
      key !== 'license'
    ) {
      fd.append(key, object[key]);
    }
  }

  return fd;
};

export const formDate = (time: any): any => {
  return moment(time).format('DD/MM/YYYY');
};

export const readMore = (string?: string, length?: number): string => {
  if (string && length && string.length > length) {
    const newString = string.substring(0, length) + '...';
    return newString;
  }
  return string || '';
};

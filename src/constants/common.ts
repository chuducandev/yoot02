import {TransitionPresets} from '@react-navigation/stack';
import {Dimensions} from 'react-native';

export const widthScreen = Dimensions.get('screen').width;
export const heightScreen = Dimensions.get('screen').height;

export const monthNames = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12',
];
export let currDate = new Date();

export const titleDaysOfWeek = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

export enum EFormtDate {
  paramsFormat = 'YYYY-MM-DD HH:mm:ss',
}

export const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS, 
};

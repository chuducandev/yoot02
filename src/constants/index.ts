export enum EColors {
  focusColor = '#0065FF',
  primaryColor = '#1B223E',
  greenColor = 'rgba(0,255,188,1)',
  statusBarColor = '#1B223E',
  darkBlue = 'rgba(0,48,140,1)',
  yellowColor = '#FFBF43',
  bgMainCorlor = 'rgba(23, 20, 70, 1)',
  dropdownColor = 'rgba(78, 88, 159, 1)',
  redColor = 'rgba(255, 57, 57, 1)',
  tabBarColor = '#222745',
  grayColor = '#B6B6B6',
  colorTextCV1 = 'rgba(0, 51, 124, 1)',
  colorHeaderCV1 = 'rgba(234, 234, 234, 1)',
  colorCurrentDay = 'rgba(255, 191, 67, 1)',
}
export enum EAsyncStorageKey {
  accessToken = 'access_token',
  email = 'email',
  password = 'password'
}
export const colorGradient = {
  greenGradient: ['rgba(139,255,165,1)', 'rgba(0,192,42,1)'],
  blueGradient: ['rgba(145, 239, 255, 1)', 'rgba(57, 85, 255, 1)'],
  whiteGradient: ['rgba(255,255,255,0.35)', 'rgba(255,255,255,0.2)'],
  yellowGraient: ['rgba(255, 153, 0, 1)', 'rgba(239, 255, 139, 1)'],
  redGradient: ['rgba(255, 145, 145, 1)', 'rgba(255, 57, 57, 1)'],
  grayGradient: ['rgba(106, 106, 106, 1)', 'rgba(255, 255, 255, 1)'],
  blackGradient: [
    'rgba(255, 255, 255, 0.12)',
    'rgba(255, 255, 255, 0.08)',
    'rgba(255, 255, 255, 0.276)',
  ],
  blueWhiteGradient: ['rgba(71, 131, 255, 1)', 'rgba(77, 170, 255, 1)'],
  whiteBlackGradient: ['rgba(241, 241, 241, 1)', 'rgba(114, 114, 114, 1)'],
  blackPurpleGradient: [
    'rgba(255, 255, 255, 0.35)',
    'rgba(255, 255, 255, 0.2)',
  ],
  purpleWhiteGradien: [
    'rgba(105, 101, 186, 1)',
    'rgba(51, 49, 109, 1)',
    'rgba(62, 60, 144, 1)',
  ],
  blueWhiteWeight: ['rgba(67, 251, 255, 1)', 'rgba(10, 44, 255, 1)'],
};
export const regDateInput = /^[0-9/]+$/;

export enum ELimit {
  limitCommon = 10,
  limitShort = 6,
}

export * from './common';
export * from './image';

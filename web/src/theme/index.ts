import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    main: '#FFE600',
    black: '#333333',
    gray: '#EEEEEE',
    gray200: '#666666',
    gray300: '#999999',
    blue: '#3483FA',
  },
  space: {
    $1: '16px',
    $2: '32px',
  },
  fontSize: {
    $1: '12px',
    $2: '14px',
    $3: '18px',
    $4: '24px',
    $5: '28px',
    $6: '46px',
  },
};

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    main: '#212121',
    black: '#131313',
    gray: '#EEEEEE',
    gray200: '#999999',
    gray300: '#444444',
    blue: '#3483FA',
  },
  space: {
    $1: '16px',
    $2: '32px',
  },
  fontSize: {
    $1: '12px',
    $2: '14px',
    $3: '18px',
    $4: '24px',
    $5: '28px',
    $6: '46px',
  },
};

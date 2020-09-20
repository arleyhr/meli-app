import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      black: string;
      gray: string;
      gray200: string;
      gray300: string;
      blue: string;
    };
    space: {
      $1: string;
      $2: string;
    };
    fontSize: {
      $1: string;
      $2: string;
      $3: string;
      $4: string;
      $5: string;
      $6: string;
    };
  }
}

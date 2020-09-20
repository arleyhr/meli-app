import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) =>
          theme.name === 'dark' ? theme.colors.black : theme.colors.gray};
        color: ${({ theme }) =>
          theme.name === 'dark' ? 'white' : theme.colors.black};
        font-family: 'Lato', sans-serif;
        font-size: 16px;
    }
`;

export default GlobalStyle;

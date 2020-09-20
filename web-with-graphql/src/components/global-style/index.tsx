import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.colors.gray};
        color: ${(props) => props.theme.colors.black};
        font-family: 'Lato', sans-serif;
        font-size: 16px;
    }
`;

export default GlobalStyle;

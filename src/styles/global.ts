import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #1d1d20;
    color: #e9e9e9;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

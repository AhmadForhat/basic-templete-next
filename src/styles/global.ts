import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:400,500,700');
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray};
    box-sizing: border-box;
  }

  button {
    font-size: 12px;
  }
`

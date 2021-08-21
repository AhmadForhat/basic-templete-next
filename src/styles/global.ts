import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button {
    font-size: 12px;
  }
`

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-family: 'Ubuntu', sans-serif;
    box-sizing: border-box;
    color: #FFFFFF;
  }

  body{
    background-color: #040011;
  }

  html{
    font-size: 62.5%;
  }

  img{
      max-width: 100%;
      display: block;
  }
`

export default GlobalStyles;
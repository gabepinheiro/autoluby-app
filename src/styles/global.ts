import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing:  border-box;
  }

  html {
    font-size: 62.5%;
    @media (max-width: 1080px) {
      font-size: 56.25%;
    }
    @media (max-width: 720px) {
      font-size: 50%;
    }
  }

  body {
    font-size: 1.6rem;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

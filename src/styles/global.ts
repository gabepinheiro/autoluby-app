import { createGlobalStyle, css } from 'styled-components'

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

  ${({ theme }) => css`
    body {
      font-size: 1.6rem;
      background-color: ${theme.colors.mainBg};
    }

    body, input, textarea, button {
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight.medium};
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: ${theme.font.weight.semiBold};
    }

    #nprogress .bar {
      background: ${theme.colors.primary} !important;
    }

    #nprogress .peg {
      box-shadow: 0 0 10px ${theme.colors.primary}, 0 0 5px ${theme.colors.primary} !important;
    }

    #nprogress .spinner-icon {
      border-top-color: ${theme.colors.primary};
      border-left-color: ${theme.colors.primary};
    }
  `}



  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

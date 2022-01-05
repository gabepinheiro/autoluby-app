import { App } from 'app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/global'
import { theme } from 'styles/theme'

export const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

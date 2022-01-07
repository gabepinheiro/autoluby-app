import { BrowserRouter } from 'react-router-dom'
import { App } from 'app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/global'
import { theme } from 'styles/theme'
import { UserAuthProvider } from 'contexts/user-auth'

export const Root = () => {
  return (
    <UserAuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </UserAuthProvider>
  )
}

import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Root } from './root'
import reportWebVitals from 'reportWebVitals'

ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.querySelector('[data-js=root]'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

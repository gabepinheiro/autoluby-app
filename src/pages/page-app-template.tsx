import { Outlet } from 'react-router-dom'
import { Header } from 'layout'

const PageTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default PageTemplate

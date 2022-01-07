import { Outlet, Navigate } from 'react-router-dom'
import { Header } from 'layout'
import { useUserAuth } from 'contexts/user-auth'

const PageTemplate = () => {
  const { isLoggedIn } = useUserAuth()

  if (!isLoggedIn) {
    return <Navigate to='/' />
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default PageTemplate

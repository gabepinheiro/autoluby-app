import { lazy, Suspense } from 'react'

const Login = lazy(() => import('pages/login'))
const Home = lazy(() => import('pages/home'))

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Login />
      <Home />
    </Suspense>
  )
}

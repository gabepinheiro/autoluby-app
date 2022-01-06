import { lazy, Suspense } from 'react'

const Login = lazy(() => import('pages/login'))

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Login />
    </Suspense>
  )
}

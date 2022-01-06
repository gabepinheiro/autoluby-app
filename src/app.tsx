import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Login = lazy(() => import('pages/login'))
const Home = lazy(() => import('pages/home'))
const PageAppTemplate = lazy(() => import('pages/page-app-template'))

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/app' element={<PageAppTemplate />}>
          <Route index element={<Home />} />
          <Route path='employees' element={<h1>Employees</h1>} />
          <Route path='vehicles' element={<h1>Vehicles</h1>} />
          <Route path='reserved-sold' element={<h1>Reserved and sold</h1>} />
        </Route>
      </Routes>
    </Suspense>
  )
}

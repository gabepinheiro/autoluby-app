import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { LazyLoad } from 'shared/lazy-load'

const Login = lazy(() => import('pages/login'))
const Home = lazy(() => import('pages/home'))
const PageAppTemplate = lazy(() => import('pages/page-app-template'))
const VehiclesPage = lazy(() => import('pages/vehicles'))
const EmployeesPage = lazy(() => import('pages/employees'))
const ReservedSoldPage = lazy(() => import('pages/reserved-sold'))

export const App = () => {
  return (
    <Suspense fallback={<LazyLoad />}>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/app' element={<PageAppTemplate />}>
          <Route index element={<Home />} />
          <Route path='employees' element={<EmployeesPage />} />
          <Route path='vehicles' element={<VehiclesPage />} />
          <Route path='reserved-sold' element={<ReservedSoldPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

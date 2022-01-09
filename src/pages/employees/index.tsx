import { useUserAuth } from 'contexts/user-auth'
import { usePagination } from 'hooks/use-pagination'
import { LayoutPage } from 'layout/layout-page'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Employee } from 'resources/types'
import { Data, getEmployees } from 'services/api'
import { Table } from 'shared/table'

// import { employees } from './mock'

const EmployeesPage = () => {
  const { isLoggedIn } = useUserAuth()
  const { currentPage, perPage, handleChangePage } = usePagination()
  const [data, setData] = useState<Data<Employee[]>>()
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    if (!isLoggedIn) return

    const fetch = async () => {
      setIsFetching(true)
      const data = await getEmployees(null, false, {
        page: currentPage + 1,
      })

      setData({
        totalRecords: data.totalRecords,
        records: data.employees,
      })
      setIsFetching(false)
    }

    fetch()
  }, [currentPage, isLoggedIn])

  if (!isLoggedIn) {
    return <Navigate to='/' />
  }

  return (
    <LayoutPage heading='Funcionários'>
      {(isFetching && !data) && <h3>Carregando...</h3>}
      {!!data && (
        <Table
          title='Listagem de funcionários da empresa'
          type='employee'
          data={data.records}
          paginate={{
            currentPage,
            perPage,
            handleChangePage,
            totalRecords: data.totalRecords,
          }}
        />
      )}
    </LayoutPage>
  )
}

export default EmployeesPage

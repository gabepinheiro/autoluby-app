import { usePagination } from 'hooks/use-pagination'
import { LayoutPage } from 'layout/layout-page'
import { useEffect, useState } from 'react'
import { Employee } from 'resources/types'
import { Data, getEmployees } from 'services/api'
import { Table } from 'shared/table'

// import { employees } from './mock'

const EmployeesPage = () => {
  const { currentPage, perPage, handleChangePage } = usePagination()
  const [data, setData] = useState<Data<Employee[]>>()
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
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
  }, [currentPage])

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

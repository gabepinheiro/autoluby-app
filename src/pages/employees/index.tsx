import { usePagination } from 'hooks/use-pagination'
import { LayoutPage } from 'layout/layout-page'
import { Table } from 'shared/table'

import { employees } from './mock'

const EmployeesPage = () => {
  const { currentPage, perPage, handleChangePage } = usePagination()

  return (
    <LayoutPage heading='Funcionários'>
      <Table
        title='Listagem de funcionários da empresa'
        type='employee'
        data={employees}
        paginate={{
          currentPage,
          perPage,
          handleChangePage,
          totalRecords: employees.length,
        }}
      />
    </LayoutPage>
  )
}

export default EmployeesPage

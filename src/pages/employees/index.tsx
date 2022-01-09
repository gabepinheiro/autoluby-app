import { useEmployees } from 'hooks/use-employees'
import { LayoutPage } from 'layout/layout-page'
import { Navigate } from 'react-router-dom'
import { Table } from 'shared/table'

const EmployeesPage = () => {
  const {
    employees,
    totalRecords,
    isFetching,
    currentPage,
    perPage,
    handleChangePage,
    isLoggedIn,
  } = useEmployees()

  if (!isLoggedIn) {
    return <Navigate to='/' />
  }

  return (
    <LayoutPage heading='Funcionários'>
      {(isFetching && !employees) && <h3>Carregando...</h3>}
      {!!employees && (
        <Table
          title='Listagem de funcionários da empresa'
          type='employee'
          data={employees}
          paginate={{
            currentPage,
            perPage,
            handleChangePage,
            totalRecords: totalRecords!,
          }}
        />
      )}
    </LayoutPage>
  )
}

export default EmployeesPage

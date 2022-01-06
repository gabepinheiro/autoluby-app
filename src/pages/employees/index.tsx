import { LayoutPage } from 'layout/layout-page'
import { Table } from 'shared/table'

import { employees } from './mock'

const EmployeesPage = () => {
  return (
    <LayoutPage heading='Funcionários'>
      <Table
        title='Listagem de funcionários da empresa'
        type='employee'
        data={employees}
      />
    </LayoutPage>
  )
}

export default EmployeesPage

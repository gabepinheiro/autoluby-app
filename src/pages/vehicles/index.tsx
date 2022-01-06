import { LayoutPage } from 'layout/layout-page'
import { Table } from 'shared/table'

import { vehicles } from './mock'

const VehiclesPage = () => {
  return (
    <LayoutPage heading='Todos Veículos'>
      <Table
        title='Listagem geral de veículos'
        type='vehicle'
        data={vehicles}
      />
    </LayoutPage>
  )
}

export default VehiclesPage

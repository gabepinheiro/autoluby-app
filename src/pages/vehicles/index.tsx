import { usePagination } from 'hooks/use-pagination'
import { LayoutPage } from 'layout/layout-page'
import { Table } from 'shared/table'

import { vehicles } from './mock'

const VehiclesPage = () => {
  const { currentPage, perPage, handleChangePage } = usePagination()

  return (
    <LayoutPage heading='Todos Veículos'>
      <Table
        title='Listagem geral de veículos'
        type='vehicle'
        data={vehicles}
        paginate={{
          currentPage,
          perPage,
          handleChangePage,
          totalRecords: vehicles.length,
        }}
      />
    </LayoutPage>
  )
}

export default VehiclesPage

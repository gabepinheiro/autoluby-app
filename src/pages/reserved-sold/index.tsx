import { usePagination } from 'hooks/use-pagination'
import { LayoutPage } from 'layout/layout-page'
import { Table } from 'shared/table'

import { reservedSold } from './mock'

const ReservedSoldPage = () => {
  const { currentPage, perPage, handleChangePage } = usePagination()

  return (
    <LayoutPage heading='Seus veículos'>
      <Table
        title='Listagem de veículos reservados e vendidos'
        type='vehicle'
        data={reservedSold.slice(0, 5)}
        paginate={{
          currentPage,
          perPage,
          handleChangePage,
          totalRecords: 5,
        }}
      />
    </LayoutPage>
  )
}

export default ReservedSoldPage

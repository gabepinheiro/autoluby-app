import { Navigate } from 'react-router-dom'
import { LayoutPage } from 'layout/layout-page'
import { Table } from 'shared/table'
import { useReservedSold } from 'hooks/use-reserved-sold'

const ReservedSoldPage = () => {
  const {
    vehicles,
    isLoggedIn,
    currentPage,
    perPage,
    itemOffset,
    handleChangePage,
  } = useReservedSold()

  if (!isLoggedIn) {
    return <Navigate to='/' />
  }

  return (
    <LayoutPage heading='Seus veículos'>
      {!!vehicles && (
        <Table
          title='Listagem de veículos reservados e vendidos'
          type='vehicle'
          data={vehicles.slice(itemOffset, itemOffset + perPage)}
          paginate={{
            currentPage,
            perPage,
            handleChangePage,
            totalRecords: vehicles.length,
          }}
        />
      )}
    </LayoutPage>
  )
}

export default ReservedSoldPage

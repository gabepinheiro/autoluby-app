import { useVehicles } from 'hooks/use-vehicles'
import { LayoutPage } from 'layout/layout-page'
import { Navigate } from 'react-router-dom'
import { Table } from 'shared/table'

const VehiclesPage = () => {
  const {
    vehicles,
    totalRecords,
    isFetching,
    currentPage,
    perPage,
    handleChangePage,
    isLoggedIn,
  } = useVehicles()

  if (!isLoggedIn) {
    return <Navigate to='/' />
  }

  return (
    <LayoutPage heading='Todos Veículos'>
      {(isFetching && !vehicles) && <h3>Carregando...</h3>}
      {!!vehicles && (
        <Table
          title='Listagem geral de veículos'
          type='vehicle'
          data={vehicles}
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

export default VehiclesPage

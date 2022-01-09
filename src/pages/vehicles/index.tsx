import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { LayoutPage } from 'layout/layout-page'
import { Vehicle } from 'resources/types'
import { useUserAuth } from 'contexts/user-auth'
import { Data, getVehicles } from 'services/api'
import { usePagination } from 'hooks/use-pagination'
import { Table } from 'shared/table'

const VehiclesPage = () => {
  const { isLoggedIn } = useUserAuth()
  const { currentPage, perPage, handleChangePage } = usePagination()
  const [data, setData] = useState<Data<Vehicle[]>>()
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    if (!isLoggedIn) return

    const fetch = async () => {
      setIsFetching(true)
      const data = await getVehicles(null, false, {
        page: currentPage + 1,
      })

      setData({
        totalRecords: data.totalRecords,
        records: data.vehicles,
      })
      setIsFetching(false)
    }

    fetch()
  }, [currentPage, isLoggedIn])

  if (!isLoggedIn) {
    return <Navigate to='/' />
  }

  return (
    <LayoutPage heading='Todos Veículos'>
      {(isFetching && !data) && <h3>Carregando...</h3>}
      {!!data && (
        <Table
          title='Listagem geral de veículos'
          type='vehicle'
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

export default VehiclesPage

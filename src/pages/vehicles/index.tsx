import { usePagination } from 'hooks/use-pagination'
import { LayoutPage } from 'layout/layout-page'
import { useEffect, useState } from 'react'
import { Vehicle } from 'resources/types'
import { getVehicles } from 'services/api'
import { Table } from 'shared/table'

// import { vehicles } from './mock'

type Data<T> = {
  totalRecords: number
  records: T
}

const VehiclesPage = () => {
  const { currentPage, perPage, handleChangePage } = usePagination()
  const [data, setData] = useState<Data<Vehicle[]>>()
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
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
  }, [currentPage])

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

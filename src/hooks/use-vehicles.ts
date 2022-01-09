import { useEffect, useState } from 'react'

import { usePagination } from 'hooks/use-pagination'
import { Data, getVehicles } from 'services/api'
import { Vehicle } from 'resources/types'
import { useUserAuth } from 'contexts/user-auth'

export const useVehicles = () => {
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

  return {
    vehicles: data?.records,
    totalRecords: data?.totalRecords,
    isFetching,
    handleChangePage,
    currentPage,
    perPage,
    isLoggedIn,
  }
}

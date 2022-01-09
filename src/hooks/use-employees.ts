import { useEffect, useState } from 'react'

import { usePagination } from 'hooks/use-pagination'
import { Data, getEmployees } from 'services/api'
import { Employee } from 'resources/types'
import { useUserAuth } from 'contexts/user-auth'

export const useEmployees = () => {
  const { isLoggedIn } = useUserAuth()
  const { currentPage, perPage, handleChangePage } = usePagination()
  const [data, setData] = useState<Data<Employee[]>>()
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    if (!isLoggedIn) return

    const fetch = async () => {
      setIsFetching(true)
      const data = await getEmployees(null, false, {
        page: currentPage + 1,
      })

      setData({
        totalRecords: data.totalRecords,
        records: data.employees,
      })
      setIsFetching(false)
    }

    fetch()
  }, [currentPage, isLoggedIn])

  return {
    employees: data?.records,
    totalRecords: data?.totalRecords,
    isFetching,
    handleChangePage,
    currentPage,
    perPage,
    isLoggedIn,
  }
}

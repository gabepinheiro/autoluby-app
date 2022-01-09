import { useEffect, useState } from 'react'
import { useUserAuth } from 'contexts/user-auth'
import { usePagination } from 'hooks/use-pagination'

export const useReservedSold = () => {
  const { user, isLoggedIn } = useUserAuth()
  const { currentPage, perPage, handleChangePage } = usePagination()
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    if (!isLoggedIn) return
    const newOffset = (currentPage * perPage) % user?.vehicles.length!
    setItemOffset(newOffset)
  }, [currentPage, perPage, user?.vehicles, isLoggedIn])

  return {
    isLoggedIn,
    currentPage,
    perPage,
    itemOffset,
    handleChangePage,
    vehicles: user?.vehicles,
  }
}

import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from 'contexts/user-auth'
import { usePagination } from 'hooks/use-pagination'
import { LayoutPage } from 'layout/layout-page'
import { Table } from 'shared/table'

// import { reservedSold } from './mock'

const ReservedSoldPage = () => {
  const { user, isLoggedIn } = useUserAuth()
  const { currentPage, perPage, handleChangePage } = usePagination()
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    if (!isLoggedIn) return
    const newOffset = (currentPage * perPage) % user?.vehicles.length!
    setItemOffset(newOffset)
  }, [currentPage, perPage, user?.vehicles, isLoggedIn])

  if (!isLoggedIn) {
    return <Navigate to='/' />
  }

  return (
    <LayoutPage heading='Seus veículos'>
      {!!user?.vehicles && (
        <Table
          title='Listagem de veículos reservados e vendidos'
          type='vehicle'
          data={user.vehicles.slice(itemOffset, itemOffset + perPage)}
          paginate={{
            currentPage,
            perPage,
            handleChangePage,
            totalRecords: user.vehicles.length,
          }}
        />
      )}
    </LayoutPage>
  )
}

export default ReservedSoldPage

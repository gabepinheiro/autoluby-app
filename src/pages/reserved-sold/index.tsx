import { useEffect, useState } from 'react'
import { useUserAuth } from 'contexts/user-auth'
import { usePagination } from 'hooks/use-pagination'
import { LayoutPage } from 'layout/layout-page'
import { Table } from 'shared/table'

// import { reservedSold } from './mock'

const ReservedSoldPage = () => {
  const { user } = useUserAuth()
  const { currentPage, perPage, handleChangePage } = usePagination()
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const newOffset = (currentPage * perPage) % user?.vehicles.length!
    setItemOffset(newOffset)
  }, [currentPage, perPage, user?.vehicles])

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

import { LayoutPage } from 'layout/layout-page'
import { Table } from 'shared/table'

import { reservedSold } from './mock'

const ReservedSoldPage = () => {
  return (
    <LayoutPage heading='Seus veículos'>
      <Table
        title='Listagem de veículos reservados e vendidos'
        type='vehicle'
        data={reservedSold}
      />
    </LayoutPage>
  )
}

export default ReservedSoldPage

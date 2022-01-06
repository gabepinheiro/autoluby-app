import { Table } from 'shared/table'
import * as S from './styles'

import { vehicles } from './mock'

const VehiclesPage = () => {
  return (
    <S.Wrapper>
      <S.Heading>Todos Veículos</S.Heading>
      <Table
        title='Listagem geral de veículos'
        type='vehicle'
        data={vehicles}
      />
    </S.Wrapper>
  )
}

export default VehiclesPage

import { Vehicle, Employee } from 'resources/types'
import { TableBody } from './table-body'
import { TableHead } from './table-head'
import * as S from './styles'
import { Pagination } from 'shared/pagination'

export type TableData = Vehicle[] | Employee[]

export type TableType = 'vehicle' | 'employee'

type TableProps = {
  title: string
  type: TableType
  data: TableData
}

export const Table = ({ title, type, data }: TableProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.TableTitle>{title}</S.TableTitle>
        <Pagination />
      </S.Header>

      <S.Table>
        <TableHead type={type} />
        <TableBody data={data} />
      </S.Table>
    </S.Wrapper>
  )
}

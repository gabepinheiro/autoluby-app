import { Vehicle, Employee } from 'resources/types'
import { TableBody } from './table-body'
import { TableHead } from './table-head'
import * as S from './styles'
import { Pagination } from 'shared/pagination'
import { onPageChangeEvent, PaginationProps } from 'hooks/use-pagination'

export type TableData = Vehicle[] | Employee[]

export type TableType = 'vehicle' | 'employee'

type TableProps = {
  title: string
  type: TableType
  data: TableData
  paginate: PaginationProps & {
    handleChangePage: onPageChangeEvent,
    totalRecords: number
  }
}

export const Table = ({
  title,
  type,
  data,
  paginate,
}: TableProps) => {
  const { currentPage, perPage, handleChangePage, totalRecords } = paginate
  return (
    <S.Wrapper>
      <S.Header>
        <S.TableTitle>{title}</S.TableTitle>
        <Pagination
          currentPage={currentPage}
          perPage={perPage}
          onPageChange={handleChangePage}
          totalRecords={totalRecords}
        />
      </S.Header>

      <S.Table>
        <TableHead type={type} />
        <TableBody data={data} />
      </S.Table>
    </S.Wrapper>
  )
}

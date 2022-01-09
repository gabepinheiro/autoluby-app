import ReactPaginate from 'react-paginate'
import { onPageChangeEvent } from 'hooks/use-pagination'
import * as S from './styles'

import { ReactComponent as ArrowLeftIcon } from 'assets/imgs/arrow-left.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/imgs/arrow-right.svg'

type PaginationProps = {
  perPage: number
  totalRecords: number
  currentPage: number
  onPageChange: onPageChangeEvent
}

export const Pagination = ({
  perPage,
  totalRecords,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const pageCount = Math.ceil(totalRecords / perPage)

  return (
    <S.Wrapper>
      <ReactPaginate
        containerClassName='pagination'
        previousLabel={
          <S.Button disabled={currentPage === 0}>
            <ArrowLeftIcon /> Anterior
          </S.Button>
        }
        nextLabel={
          <S.Button disabled={currentPage === pageCount - 1}>
            Proximo <ArrowRightIcon />
          </S.Button>
        }
        pageCount={pageCount}
        breakLabel='...'
        onPageChange={onPageChange}
        pageLinkClassName='page-link'
        breakLinkClassName='page-link'
        activeClassName='active'
        forcePage={(currentPage - 1) < 0 ? 0 : currentPage}
      />
    </S.Wrapper>
  )
}

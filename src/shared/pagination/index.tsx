import { useState } from 'react'
import ReactPaginate from 'react-paginate'

import * as S from './styles'

import { ReactComponent as ArrowLeftIcon } from 'assets/imgs/arrow-left.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/imgs/arrow-right.svg'

type onPageChangeEvent = (event: { selected: number }) => void

type PaginationProps = {
  perPage?: number
  totalRecords?: number
  currentPage?: number
}

export const Pagination = ({
  perPage = 5,
  totalRecords = 20,
  currentPage = 0,
}: PaginationProps) => {
  const [pagination, setPagination] = useState({ currentPage, perPage })

  const handleChangePage: onPageChangeEvent = (event) => {
    setPagination(pagination => ({
      ...pagination,
      currentPage: event.selected,
    }))
  }

  const pageCount = Math.ceil(totalRecords / perPage)

  return (
    <S.Wrapper>
      <ReactPaginate
        containerClassName='pagination'
        previousLabel={
          <S.Button disabled={pagination.currentPage === 0}>
            <ArrowLeftIcon /> Anterior
          </S.Button>
        }
        nextLabel={
          <S.Button disabled={pagination.currentPage === pageCount - 1}>
            Proximo <ArrowRightIcon />
          </S.Button>
        }
        pageCount={pageCount}
        breakLabel='...'
        onPageChange={handleChangePage}
        pageLinkClassName='page-link'
        breakLinkClassName='page-link'
        activeClassName='active'
        forcePage={(pagination.currentPage - 1) < 0 ? 0 : pagination.currentPage}
      />
    </S.Wrapper>
  )
}

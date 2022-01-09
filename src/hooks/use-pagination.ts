import { useState } from 'react'

export type onPageChangeEvent = (event: { selected: number }) => void

export type PaginationProps = {
    currentPage: number
    perPage: number
    handleChangePage: onPageChangeEvent
}

type usePaginationFn = (currentPage?: number, perPage?: number) => PaginationProps

export const usePagination: usePaginationFn =
  (currentPage = 0, perPage = 5) => {
    const [state, setState] = useState(currentPage)
    const handleChangePage: onPageChangeEvent = (event) => {
      setState(event.selected)
    }

    return {
      currentPage: state,
      perPage,
      handleChangePage,
    }
  }

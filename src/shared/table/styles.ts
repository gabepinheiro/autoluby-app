import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: ${theme.border.sizes.small} solid ${theme.colors.gray200};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadows.small};
    padding: 2.5rem 3.0rem;
    overflow: auto;
  `}
`

export const Header = styled.div``

export const TableTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 2.0rem;
    color: ${theme.colors.black100};
  `}
`

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-spacing: 0;

    margin-top: 2.5rem;

    thead {
      border-radius: ${theme.border.radius};
      background-color: ${theme.colors.gray100};
      color: ${theme.colors.gray400};
      font-size: 1.3rem;
      height: 7rem;
      padding:0 3.5rem;
      text-align: left;
      text-transform: uppercase;
    }

    td, th{
     padding: 3.0rem;
    }

    td {
      font-size: 1.6rem;
      color: ${theme.colors.black100};
      font-weight: ${theme.font.weight.medium};
    }
  `}

`

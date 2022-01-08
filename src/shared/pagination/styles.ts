import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .pagination {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      list-style: none;
      color: ${theme.colors.gray400};
    }

    .active {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      border-radius: 3px;
    }

    .page-link {
      width: 2.4rem;
      height: 2.4rem;
      display:flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3rem;
      cursor: pointer;
      border-radius: 3px;

      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    height: 2.8rem;
    border:0;
    color: ${theme.colors.gray400};
    font-weight: ${theme.font.weight.semiBold};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 0.85rem;
    border-radius: 3px;
    background-color: transparent;

    transition: all 0.4s;

    &:hover {
      background-color: #EDEDED;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #EDEDED;
    }
  `}

`

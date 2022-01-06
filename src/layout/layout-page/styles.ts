import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.container};
    margin: 0 auto;
    padding: 0 3.2rem 3.2rem;
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: 3.0rem;
    color: ${theme.colors.black100};
    font-weight: ${theme.font.weight.semiBold};
    margin: 4.7rem 0 3.8rem;
  `}
`

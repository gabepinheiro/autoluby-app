import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  padding: 6rem 0;
  width: max-content;
  margin: 0 auto;
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: 3.0rem;
    color: ${theme.colors.black100};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray400};
    font-size: 1.8rem;
  `}
`

export const Content = styled.section`
  margin-top: 3.0rem;
`

export const Card = styled.article`
  ${({ theme }) => css`
    height: 20rem;
    width: 80rem;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.small};
    border-radius: ${theme.border.radius};
    border: ${theme.border.sizes.small} solid ${theme.colors.gray200};

    display: flex;

    & + & {
      margin-top: 2.0rem;
    }
  `}
`

export const CardContent = styled.div`
  flex: 1;
  height: 100%;
  padding: 3.0rem;
  p {
    text-align: right;
  }
`

export const CardTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black100};
    font-size: 2.6rem;
    line-height: 39px;
  `}
`

export const CardDescription = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray400};
    font-size: 1.8rem;
    font-weight: ${theme.font.weight.medium};
    line-height: 27px;
  `}
`

export const CardHero = styled.img`
`

export const Total = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: ${theme.font.weight.bold};
    margin-top: 4.5rem;
  `}
`

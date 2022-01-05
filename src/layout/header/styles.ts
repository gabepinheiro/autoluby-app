import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    height: 12rem;
    box-shadow: ${theme.shadows.medium};
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.container};
    width: 100%;
    height: 100%;
    padding: 3.2rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.gray300};
    box-shadow: ${theme.shadows.small};
    border: ${theme.border.sizes.small} solid ${theme.colors.gray200};
    background-color: ${theme.colors.gray100};
    padding: 1.6rem;
    padding-right: 3.8rem;
    display: inline-block;
    height: 100%;
    width: 100%;
  `}
  `

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 4rem;
  width: 43rem;

  svg {
    margin-left: -3.2rem;
    transition: transform 0.3s;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      transform: translateY(-3px);
    }

    &:active {
      transform: translateY(-1px);
    }
  }
`

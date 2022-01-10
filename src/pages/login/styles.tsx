import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  min-height: 100vh;

  img {
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`

export const WelcomeContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Content = styled.div`
  @media (max-height: 700px) {
    margin-top: 12rem;
  }
`

export const LogoWrapper = styled.div`
  position: absolute;
  top: 8rem;
  left: 12rem;

  @media (max-height: 700px) {
    top: 4rem;
    left: 5rem;
  }
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black200};
    font-size: 3.8rem;
  `}
`

export const SubHeading = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray300};
    font-size: 1.4rem;
  `}
`

export const Form = styled.form`
    margin-top: 7rem;
`

export const FormGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    &:not(:last-child) {
        margin-bottom: 3rem;
    }

    label {
      font-size: 1.4rem;
      color: ${theme.colors.black450};
      font-weight: ${theme.font.weight.semiBold};
    }
  `}
`

export const RadioGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${theme.colors.primary};
    font-size: 1.4rem;
    font-weight: ${theme.font.weight.medium};
    margin-bottom: 4rem;

    input[type=checkbox]{
      display: inline-block;
      height: 20px;
      width: 20px;
      accent-color: ${theme.colors.primary};
    }

    a {
      margin-left: auto;
      text-decoration: none;
      &:visited, &:link {
        color: inherit;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`

type TextProps = {
  color?: 'error'
}

export const Text = styled.p<TextProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors.black450};
    font-size: 1.4rem;
    font-weight: ${theme.font.weight.medium};
    margin-top: 4rem;

    a {
      text-decoration: none;
      color: ${theme.colors.primary};
    }

    ${color === 'error' && css`
      color: ${theme.colors.secondary};
    `}
  `}
`

export const MessageErrorWrapper = styled.div`
  margin-bottom: .8rem;

  ${Text} {
    margin: 0
  }
`

import styled, { css } from 'styled-components'
import { LogoProps } from '.'

type WrapperProps = Pick<LogoProps, 'size'>

const LogoModifiers = {
  small: () => css`
    width: 180px;
    height: 30px;
  `,

  medium: () => css`
    width: 233px;
    height: 41px;
  `,
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ size }) => css`
    ${!!size && LogoModifiers[size]}
  `}
`

import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = {
  withIcon?: ReactNode
  fullWidth?: boolean
  reverse?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  withIcon,
  fullWidth,
  children,
  reverse = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      withIcon={!!withIcon}
      fullWidth={!!fullWidth}
      reverse={reverse}
      {...props}
    >
      {children}
      {!!withIcon && <span>{withIcon}</span>}
    </S.Wrapper>
  )
}

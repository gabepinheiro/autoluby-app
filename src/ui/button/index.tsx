import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = {
  withIcon?: ReactNode
  fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ withIcon, fullWidth, children }: ButtonProps) => {
  return (
    <S.Wrapper
      withIcon={!!withIcon}
      fullWidth={!!fullWidth}
    >
      {children}
      {!!withIcon && <span>{withIcon}</span>}
    </S.Wrapper>
  )
}

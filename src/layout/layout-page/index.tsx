import { ReactNode } from 'react'
import * as S from './styles'

type LayoutPageProps = {
  heading: string
  children: ReactNode
}

export const LayoutPage = ({ heading, children }: LayoutPageProps) => {
  return (
    <S.Wrapper>
      <S.Heading>{heading}</S.Heading>
      {children}
    </S.Wrapper>
  )
}

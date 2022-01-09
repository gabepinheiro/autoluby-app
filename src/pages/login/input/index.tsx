import { InputHTMLAttributes } from 'react'
import { ReactComponent as CheckIcon } from 'assets/imgs/check.svg'
import { ReactComponent as InvalidIcon } from 'assets/imgs/invalid.svg'

import * as S from './styles'

export type Status = 'invalid' | 'check' | 'empty'

type InputProps = {
  status?: Status
} & InputHTMLAttributes<HTMLInputElement>

const elements = {
  check: <CheckIcon />,
  invalid: <InvalidIcon />,
  empty: '',
}

export const Input = ({ status = 'empty', ...props }: InputProps) => {
  const element = elements[status]
  return (
    <S.Wrapper>
      <S.Input status={status} {...props} />
      <span>
        {element}
      </span>
    </S.Wrapper>
  )
}

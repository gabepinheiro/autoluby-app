import { Logo, Button } from 'ui'
import { ReactComponent as LogOutIcon } from 'assets/imgs/log-out.svg'
import { ReactComponent as SearchIcon } from 'assets/imgs/search.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Logo />
        <S.InputWrapper>
          <S.Input type='text' />
          <SearchIcon />
        </S.InputWrapper>
        <Button withIcon={<LogOutIcon />}>Sair</Button>
      </S.Container>
    </S.Wrapper>
  )
}

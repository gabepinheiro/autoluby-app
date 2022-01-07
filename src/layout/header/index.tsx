import { useNavigate } from 'react-router-dom'
import { useUserAuth } from 'contexts/user-auth'
import { Logo, Button } from 'ui'
import * as S from './styles'

import { ReactComponent as LogOutIcon } from 'assets/imgs/log-out.svg'
import { ReactComponent as SearchIcon } from 'assets/imgs/search.svg'

export const Header = () => {
  const { logout } = useUserAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <S.Wrapper>
      <S.Container>
        <Logo />
        <S.InputWrapper>
          <S.Input type='text' />
          <SearchIcon />
        </S.InputWrapper>
        <Button
          withIcon={<LogOutIcon />}
          onClick={handleLogout}
        >
          Sair
        </Button>
      </S.Container>
    </S.Wrapper>
  )
}

import { useNavigate, useLocation } from 'react-router-dom'
import { useUserAuth } from 'contexts/user-auth'
import { Logo, Button } from 'ui'
import * as S from './styles'

import { ReactComponent as LogOutIcon } from 'assets/imgs/log-out.svg'
import { ReactComponent as SearchIcon } from 'assets/imgs/search.svg'
import { ReactComponent as ArrowLeftIcon } from 'assets/imgs/arrow-left.svg'

export const Header = () => {
  const { logout } = useUserAuth()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleBackMenu = () => {
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
        <S.ButtonsWrapper>
          <Button
            withIcon={<ArrowLeftIcon />}
            onClick={handleBackMenu}
            reverse
            disabled={pathname === '/app'}
          >
            Voltar ao menu
          </Button>
          <Button
            withIcon={<LogOutIcon />}
            onClick={handleLogout}
          >
            Sair
          </Button>
        </S.ButtonsWrapper>
      </S.Container>
    </S.Wrapper>
  )
}

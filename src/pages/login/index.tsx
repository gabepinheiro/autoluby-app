import { useState, FormEvent, ChangeEvent } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useUserAuth } from 'contexts/user-auth'
import { Button, Logo } from 'ui'
import * as S from './styles'

import carBg from 'assets/imgs/car-login.jpg'

const Login = () => {
  const { isLoggedIn, login } = useUserAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    login({
      email,
      password,
      token: 'token123',
      name: 'Gabriel',
    })

    navigate('/app')
  }

  if (isLoggedIn) {
    return <Navigate to='/app' />
  }

  return (
    <S.Wrapper>
      <S.WelcomeContent>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        <S.Content>
          <S.Heading>Bem-vindo à AutoLuby</S.Heading>
          <S.SubHeading>Faça login para acessar sua conta.</S.SubHeading>

          <S.Form onSubmit={handleSubmit}>
            <S.FormGroup>
              <label htmlFor='email'>Endereço de email:</label>
              <input
                type='text'
                id='email'
                placeholder='name@email.com'
                value={email}
                onChange={handleChangeEmail}
              />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor='senha'>Senha:</label>
              <input
                type='password'
                id='senha'
                placeholder='senha'
                value={password}
                onChange={handleChangePassword}
              />
            </S.FormGroup>

            <S.RadioGroup>
              <input type='checkbox' id='lembrar-senha' value='false' />
              <label htmlFor='lembrar-senha'>Lembrar minha senha</label>

              <a href='#test'>Esqueceu senha?</a>
            </S.RadioGroup>

            <Button type='submit' fullWidth>
              Entrar
            </Button>
          </S.Form>

          <S.Text>
            Ainda não tem uma conta? <a href='#test'>Criar Conta</a>
          </S.Text>
        </S.Content>
      </S.WelcomeContent>
      <img src={carBg} alt='Imagem de carro azul' />
    </S.Wrapper>
  )
}

export default Login

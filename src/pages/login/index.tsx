import { useState, FormEvent, ChangeEvent } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useUserAuth } from 'contexts/user-auth'
import { Button, Logo } from 'ui'
import { Status, Input } from './input'
import * as S from './styles'

import carBg from 'assets/imgs/car-login.jpg'

const regexValidEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

const Login = () => {
  const { isLoggedIn, login } = useUserAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [statusInputEmail, setStatusInputEmail] = useState<Status>('empty')
  const [statusInputPassword, setStatusInputPassword] = useState<Status>('empty')
  const [error, setError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false)

    const emailValue = e.target.value
    setEmail(emailValue)

    if (!regexValidEmail.test(emailValue)) {
      setStatusInputEmail('invalid')
      return
    }

    if (emailValue.length === 0) {
      setStatusInputEmail('empty')
      return
    }

    setStatusInputEmail('check')
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    setSubmitting(true)
    e.preventDefault()

    const response = await login({
      email,
      password,
    })

    if (response.error) {
      setError(true)
      setStatusInputEmail('invalid')
      setStatusInputPassword('invalid')
      setSubmitting(false)

      return
    }

    setSubmitting(false)

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
            {error && (
              <S.MessageErrorWrapper>
                <S.Text color='error'>Falha na autenticação de login do usuário.</S.Text>
              </S.MessageErrorWrapper>
            )}
            <S.FormGroup>
              <label htmlFor='email'>Endereço de email:</label>
              <Input
                type='email'
                id='email'
                name='email'
                placeholder='name@email.com.br'
                title='Informe o email com formato: exemplo@exemplo.com.br'
                required
                value={email}
                onChange={handleChangeEmail}
                status={statusInputEmail}
              />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor='senha'>Senha:</label>
              <Input
                type='password'
                id='senha'
                placeholder='senha'
                required
                value={password}
                onChange={handleChangePassword}
                status={statusInputPassword}
              />
            </S.FormGroup>

            <S.RadioGroup>
              <input type='checkbox' id='lembrar-senha' value='false' />
              <label htmlFor='lembrar-senha'>Lembrar minha senha</label>

              <a href='#test'>Esqueceu senha?</a>
            </S.RadioGroup>

            <Button type='submit' fullWidth disabled={submitting}>
              {submitting
                ? 'Autenticando...'
                : 'Entrar'}
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

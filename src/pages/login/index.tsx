import { Button, Logo } from 'ui'

import carBg from 'assets/imgs/car-login.jpg'

import * as S from './styles'

const Login = () => {
  return (
    <S.Wrapper>
      <S.WelcomeContent>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        <S.Content>
          <S.Heading>Bem-vindo à AutoLuby</S.Heading>
          <S.SubHeading>Faça login para acessar sua conta.</S.SubHeading>

          <S.Form onSubmit={(e) => e.preventDefault()}>
            <S.FormGroup>
              <label htmlFor='email'>Endereço de email:</label>
              <input type='text' id='email' placeholder='name@email.com' />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor='senha'>Senha:</label>
              <input type='text' id='senha' placeholder='senha' />
            </S.FormGroup>

            <S.RadioGroup>
              <input type='checkbox' id='lembrar-senha' value='false' />
              <label htmlFor='lembrar-senha'>Lembrar minha senha</label>

              <a href='#test'>Esqueceu senha?</a>
            </S.RadioGroup>

            <Button type='button' fullWidth>Entrar</Button>
          </S.Form>

          <S.Text>Ainda não tem uma conta? <a href='#test'>Criar Conta</a></S.Text>
        </S.Content>
      </S.WelcomeContent>
      <img src={carBg} alt='Imagem de carro azul' />
    </S.Wrapper>
  )
}

export default Login

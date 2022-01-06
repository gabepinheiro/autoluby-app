import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import carImg from 'assets/imgs/car.jpg'
import carsImg from 'assets/imgs/cars.jpg'
import employeeImg from 'assets/imgs/employee.jpg'

const username = 'Gabe'

const cards = [
  {
    title: 'Veículos reservados e vendidos',
    description: 'Veículos reservados e vendidos por você',
    total: '147 veículos',
    heroSrc: carImg,
    heroAlt: 'Imagem de um carro',
    slug: 'reserved-sold',
  },
  {
    title: 'Listagem geral de veículos',
    description: 'Listagem geral de veículos de toda a empresa.',
    total: '180 veículos',
    heroSrc: carsImg,
    heroAlt: 'Imagem com alguns carros',
    slug: 'vehicles',
  },
  {
    title: 'Funcionários da empresa',
    description: 'Listagem de todos os funcionários da empresa.',
    total: '147 funcionários',
    heroSrc: employeeImg,
    heroAlt: 'Imagem de um funcionário da empresa',
    slug: 'employees',
  },
]

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <S.Wrapper>
        <S.Heading>Bem vindo, {username}</S.Heading>
        <S.Text>Menu</S.Text>

        <S.Content>
          {cards.map((card, index) => (
            <S.Card key={index} onClick={() => navigate(card.slug)}>
              <S.CardContent>
                <S.CardTitle>{card.title}</S.CardTitle>
                <S.CardDescription>{card.description}</S.CardDescription>
                <S.Total>{card.total}</S.Total>
              </S.CardContent>
              <S.CardHero
                src={card.heroSrc}
                alt={card.heroAlt}
              />
            </S.Card>
          ))}
        </S.Content>

      </S.Wrapper>
    </>
  )
}

export default Home

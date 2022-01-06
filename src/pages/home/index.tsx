import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { cards } from './card-mock'

const username = 'Gabe'

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

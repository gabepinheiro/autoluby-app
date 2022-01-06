import carImg from 'assets/imgs/car.jpg'
import carsImg from 'assets/imgs/cars.jpg'
import employeeImg from 'assets/imgs/employee.jpg'

type Card = {
  title: string
  description: string
  total: string
  heroSrc: string
  heroAlt: string
  slug: string
}

export const cards: Card[] = [
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

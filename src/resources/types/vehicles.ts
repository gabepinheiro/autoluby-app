export type StatusCar = 'Vendido' | 'Reservado' | 'Disponível'

export type Vehicle = {
  chassi: string
  brand: string
  model: string
  value: number
  yer: string
  km: number
  color: string
  status: StatusCar
}

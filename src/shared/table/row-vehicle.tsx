import { Vehicle } from 'resources/types'

import * as S from './styles'

type RowVehicleProps = {
  vehicle: Vehicle
}

export const RowVehicle = ({ vehicle }: RowVehicleProps) => {
  return (
    <tr>
      <td>{vehicle.brand}</td>
      <td>{vehicle.model}</td>
      <td>{vehicle.yer}</td>
      <td>{vehicle.km}</td>
      <td>{vehicle.color}</td>
      <td>
        <S.Status status={vehicle.status}>
          {vehicle.status}
        </S.Status>
      </td>
      <td>{vehicle.chassi}</td>
      <td>{vehicle.value}</td>
    </tr>
  )
}

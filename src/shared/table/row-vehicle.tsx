import { Vehicle } from 'resources/types'

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
      <td>{vehicle.status}</td>
      <td>{vehicle.chassi}</td>
      <td>{vehicle.value}</td>
    </tr>
  )
}

import { ReactNode } from 'react'
import { RowVehicle } from './row-vehicle'
import { Vehicle } from 'resources/types'
import { TableData } from '.'
import { RowEmployee } from './row-employee'

type TableBodyProps = {
  data: TableData
}

const isVehicle = (data: TableData): data is Vehicle[] => {
  return (data[0] as Vehicle).brand !== undefined
}

export const TableBody = ({ data }: TableBodyProps) => {
  let rows: ReactNode[] = []

  if (isVehicle(data)) {
    rows = data.map((vehicle) => (
      <RowVehicle
        key={vehicle.chassi}
        vehicle={vehicle}
      />
    ))
  } else {
    rows = data.map((employee, index) => (
      <RowEmployee
        key={`${employee.email}-${index}`}
        employee={employee}
      />
    ))
  }

  return (
    <tbody>
      {rows}
    </tbody>
  )
}

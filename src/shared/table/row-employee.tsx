import { Employee } from 'resources/types'
import { getCurrencyFormatted } from 'resources/utils'

type RowEmployeeProps = {
  employee: Employee
}

export const RowEmployee = ({ employee }: RowEmployeeProps) => {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.cpf}</td>
      <td>{getCurrencyFormatted(employee.salary)}</td>
      <td>{employee.bio}</td>
    </tr>
  )
}

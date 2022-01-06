import { Employee} from 'resources/types'

type RowEmployeeProps = {
  employee: Employee
}

export const RowEmployee = ({ employee }: RowEmployeeProps) => {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.cpf}</td>
      <td>{employee.salary}</td>
      <td>{employee.bio}</td>
    </tr>
  )
}

import { TableType } from '.'

type TableHeadProps = {
  type: TableType
}

export const TableHead = ({ type }: TableHeadProps) => {
  const heads = {
    employee: ['Nome', 'Email', 'CPF', 'Salary', 'BIO'],
    vehicle: [
      'Marca', 'Modelo', 'Ano', 'KM',
      'Cor', 'Status', 'Chassi', 'Valor',
    ],
  }

  return (
    <thead>
      <tr>
        {heads[type].map(head => (
          <th key={head}>{head}</th>
        ))}
      </tr>
    </thead>
  )
}

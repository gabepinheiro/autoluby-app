export const getCurrencyFormatted = (money: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    .format(money)

export const getCPFFormatted = (cpf: string) => {
  return cpf
    .replace(/\D/g, '')
    .replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
}

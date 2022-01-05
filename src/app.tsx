import { Logo, Button } from 'ui'

import { ReactComponent as LogOutIcon } from './assets/imgs/log-out.svg'

export const App = () => {
  return (
    <>
      <Logo />
      <Button withIcon={<LogOutIcon />}>Sair</Button>
    </>
  )
}

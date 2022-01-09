import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { getItem, setItem, removeItem } from 'storage'

import { Employee, Vehicle } from 'resources/types'

import { ErrorResponseData, getLogin } from 'services/api'

type User = Pick<Employee, keyof Employee> & {
  vehicles: Vehicle[]
}

export type AuthResponseData = {
  message: string
  token: string
  totalEmployees: number
  totalVehicles: number
  totalVehiclesLoggedUser: number
  user: User
}

type Response = AuthResponseData | ErrorResponseData

export const isErrorResponseData = (data: Response): data is ErrorResponseData => {
  return (data as ErrorResponseData).error !== undefined
}

export type Login = {
  email: string
  password: string
}

type AutoLuby = {
  totalEmployees: number
  totalVehicles: number
  totalVehiclesLoggedUser: number
}

type UserAuthState = {
  message: string
  token: string
  user: User | undefined
  autoluby: AutoLuby
  isLoggedIn: boolean
  login: (login: Login) => Promise<{error: boolean}>
  logout: () => void
}

type UserAuthProviderProps = {
  children: ReactNode
}

const UserAuth = createContext<UserAuthState | undefined>(undefined)

export const UserAuthProvider = ({ children }: UserAuthProviderProps) => {
  const [authData, setAuthData] = useState<AuthResponseData>(
    {} as AuthResponseData)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    async function getAuthStorage () {
      const authStorage = await getItem<AuthResponseData>('@autoluby:auth')

      if (!authStorage) {
        return
      }

      setAuthData(authStorage)
      setIsLoggedIn(true)
    }

    getAuthStorage()
  }, [])

  const login = async (login: Login) => {
    const data: Response = await getLogin(login)

    if (isErrorResponseData(data)) {
      return { error: true }
    }

    setAuthData(data)
    setIsLoggedIn(true)

    await setItem('@autoluby:auth', data)

    return { error: false }
  }

  const logout = () => {
    setIsLoggedIn(false)
    removeItem('@autoluby:auth')
  }

  const value = {
    message: authData.message,
    user: authData.user,
    token: authData.token,
    autoluby: {
      totalEmployees: authData.totalEmployees,
      totalVehicles: authData.totalVehicles,
      totalVehiclesLoggedUser: authData.totalVehiclesLoggedUser,
    },
    isLoggedIn,
    login,
    logout,
  }

  return (
    <UserAuth.Provider value={value}>
      {children}
    </UserAuth.Provider>
  )
}

export const useUserAuth = () => {
  const context = useContext(UserAuth)

  if (context === undefined) {
    throw new Error('useUserAuth must be used within a UserAuthProvider')
  }

  return context
}

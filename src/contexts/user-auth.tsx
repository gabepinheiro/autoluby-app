import { createContext, ReactNode, useContext, useState } from 'react'

type User = {
  name: string
  email: string
  password: string
  token: string
}

type UserAuthState = {
  user: User | undefined
  isLoggedIn: boolean,
  login: (user: User) => void
  logout: () => void
}

type UserAuthProviderProps = {
  children: ReactNode
}

const UserAuth = createContext<UserAuthState | undefined>(undefined)

export const UserAuthProvider = ({ children }: UserAuthProviderProps) => {
  const [user, setUser] = useState<User>()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = (user: User) => {
    setUser(user)
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  const value = {
    user,
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

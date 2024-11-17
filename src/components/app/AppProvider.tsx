import React, { createContext, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Route } from '~/constants'
import { actions, useAppDispatch } from '~/store'

interface IProps {
  children: React.ReactNode
}

export interface IAppContext {
  logout: () => void
  setIsTwink: React.Dispatch<React.SetStateAction<boolean>>
  isTwink: boolean
}

export const AppContext: React.Context<IAppContext> = createContext<IAppContext>({
  logout: () => {},
  setIsTwink: () => {},
  isTwink: false,
})

const AppProvider: React.FC<IProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [isTwink, setIsTwink] = useState(false)

  const logout = useCallback(() => {
    setIsTwink(false)
    dispatch(actions.user.cleanUser())
    navigate(Route.Connect)
  }, [])

  return (
    <AppContext.Provider value={{ logout, isTwink, setIsTwink }}>{children}</AppContext.Provider>
  )
}

export default React.memo(AppProvider)

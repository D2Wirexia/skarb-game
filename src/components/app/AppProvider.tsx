import React, { createContext, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
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
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const [isTwink, setIsTwink] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language)
  }, [i18n.language])

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

import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Wrapper } from './styles'

import { AppContext } from '~/components/app/AppProvider'
import { ConnectionScreen, NewSessionDetectedScreen } from '~/components/screens'
import { actions, useAppDispatch, useAppSelector } from '~/store'

const ConnectionLayout: React.FC = () => {
  const { isInitialized } = useAppSelector((state) => state.user)
  const { isTwink } = useContext(AppContext)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isInitialized) {
      dispatch(actions.app.initialize())
    }
  }, [isInitialized])

  if (!isInitialized) {
    return <ConnectionScreen />
  }

  // if (isAuthenticated && !emailConfirmed) {
  //   return <ConfirmAccountScreen />
  // }

  if (isTwink) {
    return <NewSessionDetectedScreen />
  }

  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}

export default React.memo(ConnectionLayout)

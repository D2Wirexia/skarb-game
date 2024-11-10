import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Wrapper } from './styles'

import { Button } from '~/components/shared'
import { Route } from '~/constants'
import { actions, useAppDispatch } from '~/store'

const Profile: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = useCallback(() => {
    dispatch(actions.user.cleanUser())
    navigate(Route.Connect)
  }, [])

  return (
    <Wrapper>
      <Button.Simple label="Logout" onClick={handleLogout} />
    </Wrapper>
  )
}

export default React.memo(Profile)

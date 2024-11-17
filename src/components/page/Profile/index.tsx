import React, { useContext } from 'react'

import { Wrapper } from './styles'

import { AppContext } from '~/components/app/AppProvider'
import { Button } from '~/components/shared'

const Profile: React.FC = () => {
  const { logout } = useContext(AppContext)

  return (
    <Wrapper>
      <Button.Simple label="Logout" onClick={logout} />
    </Wrapper>
  )
}

export default React.memo(Profile)

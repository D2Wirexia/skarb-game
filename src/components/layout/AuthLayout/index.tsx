import React, { useCallback, useState } from 'react'

import { Wrapper, Title, Description, GroupButtons, Astronaut } from './styles'

import astronaut from '@/images/astronaut.png'
import { Button } from '~/components/shared'
import { actions, useAppDispatch } from '~/store'

const AuthLayout: React.FC = () => {
  const [isLoading, setLoading] = useState<string | null>(null)
  const dispatch = useAppDispatch()

  const handleSignIn = useCallback(async () => {
    setLoading('sign_in')
    await new Promise((res) => setTimeout(res, 1000))
    dispatch(actions.user.updateToken('token'))
    dispatch(
      actions.user.updateUser({
        email: 'example@gmail.com',
        nickname: 'Wirexia',
        photo:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSJhcetOBwA-I9T3Jud_ScdMlVEs5UD09XXZXD_7RomhU6cjA_t',
        identifier: 'b9E5-cKf4-q3N',
        createdAt: new Date(),
      }),
    )
  }, [])

  const handleSignUp = useCallback(async () => {
    setLoading('sign_up')
    await new Promise((res) => setTimeout(res, 1000))
    dispatch(actions.user.updateToken('token'))
    dispatch(
      actions.user.updateUser({
        email: 'example@gmail.com',
        nickname: 'Wirexia',
        photo:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSJhcetOBwA-I9T3Jud_ScdMlVEs5UD09XXZXD_7RomhU6cjA_t',
        identifier: 'b9E5-cKf4-q3N',
        createdAt: new Date(),
      }),
    )
  }, [])

  return (
    <Wrapper>
      <Title>Welcome to skarb game</Title>
      <Description>
        Get ready for an exciting mix of team games, quizzes, and fun challenges that test your
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        knowledge and creativity. Whether you're here to compete, collaborate, or simply have fun,
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        we've got something for everyone. Let’s get started!
      </Description>
      <GroupButtons>
        <Button.Simple
          size={[205, 52]}
          label="Sign in"
          isLoading={isLoading === 'sign_in'}
          onClick={handleSignIn}
        />
        <Button.Simple
          size={[205, 52]}
          label="Sign up"
          isLoading={isLoading === 'sign_up'}
          onClick={handleSignUp}
        />
      </GroupButtons>
      <Astronaut src={astronaut} alt="astronaut" />
    </Wrapper>
  )
}

export default React.memo(AuthLayout)

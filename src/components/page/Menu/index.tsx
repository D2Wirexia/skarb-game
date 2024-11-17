import React, { useContext } from 'react'

import {
  Wrapper,
  Header,
  Navbar,
  LeftSide,
  RightSide,
  Logo,
  UserContainer,
  UserInfo,
  Nickname,
  Identifier,
  Content,
} from './styles'

import { AppContext } from '~/components/app/AppProvider'
import { AppConstructor, LanguagePicker, UserConstructor } from '~/components/widget'
import { Route } from '~/constants'
import { replaceParams } from '~/functions'
import { useAppSelector } from '~/store'

const transition = { duration: 0.5, type: 'tween', stiffness: 500, delay: 0.3 }

const Menu: React.FC = () => {
  const { identifier, photo, nickname } = useAppSelector((state) => state.user)
  const { setIsTwink } = useContext(AppContext)

  return (
    <Wrapper>
      <Header
        initial={{
          opacity: 0,
          transform: 'translate(0, -140px)',
        }}
        animate={{
          opacity: 1,
          transform: 'translate(0, 0)',
        }}
        exit={{
          opacity: 0,
          transform: 'translate(0, -140px)',
          transition: { delay: 0 },
        }}
        transition={transition}
      >
        <LeftSide>
          <Logo onClick={() => setIsTwink(true)}>Skarb Game</Logo>
        </LeftSide>
        <RightSide>
          <LanguagePicker />
          <AppConstructor.Notification />
          <UserContainer to={replaceParams(Route.Profile, { id: identifier as string })}>
            <UserConstructor.Avatar.SmallMenu photo={photo} />
            <UserInfo>
              <Nickname>{nickname}</Nickname>
              <Identifier>@{identifier}</Identifier>
            </UserInfo>
          </UserContainer>
        </RightSide>
      </Header>
      <Navbar
        initial={{
          opacity: 0,
          transform: 'translate(-300px, 0)',
        }}
        animate={{
          opacity: 1,
          transform: 'translate(0, 0)',
        }}
        exit={{
          opacity: 0,
          transform: 'translate(-300px, 0)',
          transition: { delay: 0 },
        }}
        transition={transition}
      >
        &nbsp;
      </Navbar>
      <Content
        initial={{
          opacity: 0,
          transform: 'translate(440px, 840px)',
        }}
        animate={{
          opacity: 1,
          transform: 'translate(0, 0)',
        }}
        exit={{
          opacity: 0,
          transform: 'translate(440px, 840px)',
          transition: { delay: 0 },
        }}
        transition={transition}
      >
        &nbsp;
      </Content>
    </Wrapper>
  )
}

export default React.memo(Menu)

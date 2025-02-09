import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  Content,
  Footer,
  Header,
  Identifier,
  LeftSide,
  Name,
  Navbar,
  Nickname,
  RightSide,
  Title,
  UserContainer,
  UserInfo,
  Version,
  Wrapper,
} from './styles'

import { Button, Icon, IconType } from '~/components/shared'
import { AppConstructor, UserConstructor } from '~/components/widget'
import { Route } from '~/constants'
import { replaceParams } from '~/functions'
import { Word } from '~/i18n'
import { EnvService } from '~/services'
import { useAppSelector } from '~/store'

const transition = { duration: 0.5, type: 'tween', stiffness: 500, delay: 0.3 }

const Menu: React.FC = () => {
  const { identifier, photo, nickname } = useAppSelector((state) => state.user)

  const { t } = useTranslation()

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
          <Icon icon={IconType.Logo} width={52} height={52} />
          <Title>
            <Name>Skarb Game</Name>
            <Version>Version: {EnvService.appVersion}</Version>
          </Title>
        </LeftSide>
        <RightSide>
          <AppConstructor.Discord />
          <AppConstructor.Settings />
          <AppConstructor.Notification />
          <UserContainer
            shape={'square'}
            to={replaceParams(Route.Profile, { id: identifier as string })}
          >
            <UserConstructor.Avatar.SmallMenu photo={photo} />
            <UserInfo>
              <Nickname>{nickname}</Nickname>
              <Identifier>#{identifier}</Identifier>
            </UserInfo>
          </UserContainer>
        </RightSide>
      </Header>
      <Navbar
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: { delay: 0 },
        }}
        transition={transition}
      >
        <Button.MenuButton shape={1} to={'/'} text={t(Word.Menu.CreateRoom)} />
        <Button.MenuButton shape={2} to={'/'} text={t(Word.Menu.JoinToRoom)} />
        <Button.MenuButton shape={3} to={'/'} text={t(Word.Menu.PackageEditor)} />
        <Button.MenuButton shape={4} to={'/'} text={t(Word.Menu.Rules)} />
      </Navbar>
      <Content
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: { delay: 0 },
        }}
        transition={transition}
      >
        <AppConstructor.SubscriptionBanner />
      </Content>
      <Footer
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: { delay: 0 },
        }}
        transition={transition}
      >
        <AppConstructor.Footer />
      </Footer>
    </Wrapper>
  )
}

export default React.memo(Menu)

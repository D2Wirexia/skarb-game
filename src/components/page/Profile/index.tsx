import React, { useCallback, useContext, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Wrapper,
  UserSection,
  InfoSection,
  FirstItem,
  Nickname,
  SecondItem,
  Flag,
  CountryName,
  ThirdItem,
  FourthItem,
  StatisticItem,
  StatisticIcon,
  StatisticValue,
  IdentifierLabel,
  CopyIDContainer,
  CopyTooltip,
  AdditionSection,
  DateOfRegistration,
  Content,
  ScrollBody,
} from './styles'

import ua from '@/images/flags/ua.png'
import announcerIcon from '@/images/statistics/announcer.png'
import packageCreatedIcon from '@/images/statistics/package-created.png'
import totalGamesIcon from '@/images/statistics/total-games.png'
import winsIcon from '@/images/statistics/wins.png'
import { AppContext } from '~/components/app/AppProvider'
import { ProfileTabSection } from '~/components/screens'
import { Button, Icon, IconType, TabBar } from '~/components/shared'
import { UserConstructor } from '~/components/widget'
import { Color } from '~/constants'
import { Word } from '~/i18n'
import { useAppSelector } from '~/store'

const ProfileTab = {
  general: 'general',
  avatar: 'avatar',
  subscription: 'subscription',
  account: 'account',
} as const

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(ProfileTab.general)
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const { identifier, photo, nickname, createdAt } = useAppSelector((state) => state.user)
  const { logout } = useContext(AppContext)
  const {
    t,
    i18n: { language },
  } = useTranslation()

  const handleCopyIdentifier = useCallback(() => {
    navigator.clipboard.writeText(identifier!).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 1500)
    })
  }, [identifier])

  const formatDate = useMemo(() => {
    return new Intl.DateTimeFormat(language, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(createdAt)
  }, [createdAt, language])

  return (
    <Wrapper>
      <UserSection>
        <UserConstructor.Avatar.Big photo={photo} />
        <InfoSection>
          <FirstItem>
            <Nickname>{nickname}</Nickname>
            <UserConstructor.SubscriptionLabel />
          </FirstItem>
          <SecondItem>
            <Flag src={ua} alt="Flag" />
            <CountryName>Ukraine</CountryName>
          </SecondItem>
          <ThirdItem>
            <IdentifierLabel>{t(Word.General.Identifier)}:</IdentifierLabel>
            <CopyIDContainer onClick={handleCopyIdentifier}>
              {identifier}
              <Icon icon={IconType.Copy} width={24} height={24} fill={Color.White} />
            </CopyIDContainer>
            {isCopied && <CopyTooltip>{t(Word.General.Copied)}!</CopyTooltip>}
          </ThirdItem>
          <FourthItem>
            <StatisticItem>
              <StatisticIcon src={totalGamesIcon} alt="Total Games" />
              <StatisticValue>0</StatisticValue>
            </StatisticItem>
            <StatisticItem>
              <StatisticIcon src={winsIcon} alt="Wins" />
              <StatisticValue>0</StatisticValue>
            </StatisticItem>
            <StatisticItem>
              <StatisticIcon src={announcerIcon} alt="Announcer" />
              <StatisticValue>0</StatisticValue>
            </StatisticItem>
            <StatisticItem>
              <StatisticIcon src={packageCreatedIcon} alt="Package Created" />
              <StatisticValue>0</StatisticValue>
            </StatisticItem>
          </FourthItem>
        </InfoSection>
        <AdditionSection>
          <Button.Simple label="Logout" onClick={logout} size={[100, 40]} />
          <DateOfRegistration>
            {t(Word.Profile.DateOfRegistration)} <br />
            {formatDate}
          </DateOfRegistration>
        </AdditionSection>
      </UserSection>
      <TabBar activeTab={activeTab} onChange={setActiveTab}>
        <TabBar.Item
          icon={IconType.Tools}
          label={t(Word.Profile.General)}
          value={ProfileTab.general}
        />
        <TabBar.Item
          icon={IconType.FaceID}
          label={t(Word.Profile.Avatar)}
          value={ProfileTab.avatar}
        />
        <TabBar.Item
          icon={IconType.Gift}
          label={t(Word.Profile.Subscription)}
          value={ProfileTab.subscription}
        />
        <TabBar.Item
          icon={IconType.SecurityUser}
          label={t(Word.Profile.Account)}
          value={ProfileTab.account}
        />
      </TabBar>
      <Content>
        <ScrollBody>
          {activeTab === ProfileTab.general && <div>General</div>}
          {activeTab === ProfileTab.avatar && <ProfileTabSection.Avatar />}
          {activeTab === ProfileTab.subscription && <div>subscription</div>}
          {activeTab === ProfileTab.account && <div>account</div>}
        </ScrollBody>
      </Content>
    </Wrapper>
  )
}

export default Profile

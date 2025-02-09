import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Container, Header, Body } from './styles'

import { Language, Audio } from '~/components/screens/Settings/_Sections'
import { IconType, TabBar } from '~/components/shared'
import { Word } from '~/i18n'

const SettingsTab = {
  game: 'game',
  controller: 'controller',
  language: 'language',
  audio: 'audio',
} as const

const SettingsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(SettingsTab.game)
  const { t } = useTranslation()
  return (
    <Container>
      <Header>
        <TabBar activeTab={activeTab} onChange={setActiveTab}>
          <TabBar.Item
            value={SettingsTab.game}
            label={t(Word.Settings.Game)}
            icon={IconType.Puzzle}
          />
          <TabBar.Item
            value={SettingsTab.controller}
            label={t(Word.Settings.Controller)}
            icon={IconType.Gamepad}
          />
          <TabBar.Item
            value={SettingsTab.language}
            label={t(Word.Settings.Language)}
            icon={IconType.Lang}
          />
          <TabBar.Item
            value={SettingsTab.audio}
            label={t(Word.Settings.Audio)}
            icon={IconType.SpeakerMax}
          />
        </TabBar>
      </Header>
      <Body>
        {activeTab === SettingsTab.game && <h1>Game</h1>}
        {activeTab === SettingsTab.controller && <h1>Controller</h1>}
        {activeTab === SettingsTab.language && <Language />}
        {activeTab === SettingsTab.audio && <Audio />}
      </Body>
    </Container>
  )
}

export default React.memo(SettingsScreen)

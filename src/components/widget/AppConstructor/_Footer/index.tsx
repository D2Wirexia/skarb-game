import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container, Text, SupButton, Label } from './styles'

import { Icon, IconType, Link } from '~/components/shared'
import { Color } from '~/constants'
import { Word } from '~/i18n'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Link.AppNavigation to={'/'}>
        <Text>Terms & Conditions</Text>
      </Link.AppNavigation>
      <Link.AppNavigation to={'/'}>
        <Text>Privacy & Policy</Text>
      </Link.AppNavigation>
      <SupButton href="mailto:skarb.game.support@gmail.com" target="_blank">
        <Icon icon={IconType.Debug} width={16} height={16} fill={Color.White} />
        <Label>{t(Word.General.Support)}</Label>
      </SupButton>
    </Container>
  )
}

export default React.memo(Footer)

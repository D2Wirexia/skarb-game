import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container, Text } from './styles'

import { Link } from '~/components/shared'
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
      <Text>{t(Word.General.Support)}</Text>
    </Container>
  )
}

export default React.memo(Footer)

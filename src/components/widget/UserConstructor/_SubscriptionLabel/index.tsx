import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container, Diamond, Label } from './styles'

import diamond from '@/images/diamond.png'
import { Word } from '~/i18n'

const SubscriptionLabel: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Diamond src={diamond} alt="Diamond" />
      <Label>{t(Word.General.Premium)}</Label>
    </Container>
  )
}

export default React.memo(SubscriptionLabel)

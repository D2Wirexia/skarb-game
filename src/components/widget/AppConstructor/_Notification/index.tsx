import React from 'react'

import { Container } from './styles'

import { Icon, IconType } from '~/components/shared'

const Notification: React.FC = () => {
  return (
    <Container>
      <Icon icon={IconType.Notification} width={24} height={24} />
    </Container>
  )
}

export default React.memo(Notification)

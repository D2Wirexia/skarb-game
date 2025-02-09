import React from 'react'

import { Mark } from './styles'

import { Icon, IconType, Sculpt } from '~/components/shared'

const Notification: React.FC = () => {
  return (
    <Sculpt.FocHovContainer.Button>
      <Icon icon={IconType.Notification} width={24} height={24} />
      <Mark />
    </Sculpt.FocHovContainer.Button>
  )
}

export default React.memo(Notification)

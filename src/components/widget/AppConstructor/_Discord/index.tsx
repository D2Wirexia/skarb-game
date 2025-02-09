import React from 'react'

import { Icon, IconType, Sculpt } from '~/components/shared'
import { Color, Links } from '~/constants'

const Discord: React.FC = () => {
  return (
    <Sculpt.FocHovContainer.Anchor href={Links.Discord} target="_blank" rel="noopener noreferrer">
      <Icon icon={IconType.Discord} width={24} height={24} fill={Color.White} />
    </Sculpt.FocHovContainer.Anchor>
  )
}

export default React.memo(Discord)

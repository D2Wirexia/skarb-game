import React from 'react'

import { AvatarSmall, AvatarBig } from './_Avatar'
import SubscriptionLabel from './_SubscriptionLabel'

const UserConstructor: React.FC = () => {
  return undefined
}

export default Object.assign(React.memo(UserConstructor), {
  Avatar: {
    Small: AvatarSmall,
    Big: AvatarBig,
  },
  SubscriptionLabel,
})

import React from 'react'

import { AvatarSmallMenu } from './_Avatar'

const UserConstructor: React.FC = () => {
  return undefined
}

export default Object.assign(React.memo(UserConstructor), {
  Avatar: {
    SmallMenu: AvatarSmallMenu,
  },
})

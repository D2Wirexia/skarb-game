import React from 'react'

import LinkAnchor from './LinkAnchor'
import LinkAppNavigation from './LinkAppNavigation'

const Link: React.FC = () => {
  return null
}

export default Object.assign(Link, {
  AppNavigation: LinkAppNavigation,
  Anchor: LinkAnchor,
})

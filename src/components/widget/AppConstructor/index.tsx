import React from 'react'

import Discord from './_Discord'
import Footer from './_Footer'
import Notification from './_Notification'
import Settings from './_Settings'
import SubscriptionBanner from './_SubscriptionBanner'

const AppConstructor: React.FC = () => {
  return undefined
}

export default Object.assign(React.memo(AppConstructor), {
  Notification,
  Discord,
  SubscriptionBanner,
  Settings,
  Footer,
})

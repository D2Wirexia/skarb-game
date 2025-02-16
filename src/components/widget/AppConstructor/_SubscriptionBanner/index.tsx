import React from 'react'

import { Container, Banner } from './styles'

import banner from '@/images/subscription-banner.jpg'

const SubscriptionBanner: React.FC = () => {
  return (
    <Container to={'/'}>
      <Banner src={banner} alt="banner" />
    </Container>
  )
}

export default React.memo(SubscriptionBanner)

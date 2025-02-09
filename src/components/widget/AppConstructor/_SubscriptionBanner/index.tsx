import React from 'react'

import { Container, Banner } from './styles'

import banner from '@/images/subscription-banner.jpg'
import { Link } from '~/components/shared'

const SubscriptionBanner: React.FC = () => {
  return (
    <Link.AppNavigation to={'/'}>
      <Container>
        <Banner src={banner} alt="banner" />
      </Container>
    </Link.AppNavigation>
  )
}

export default React.memo(SubscriptionBanner)

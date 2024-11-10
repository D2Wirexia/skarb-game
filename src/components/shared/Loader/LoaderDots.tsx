import React from 'react'

import { ILoaderProps } from './Loader'
import { Container, Bounce } from './LoaderDots.styles'

const LoaderDots: React.FC<ILoaderProps> = ({ size }) => {
  return (
    <Container $size={size}>
      <Bounce />
      <Bounce />
      <Bounce />
    </Container>
  )
}

export default React.memo(LoaderDots)

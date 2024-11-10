import React from 'react'

import { Container } from './styles'

interface IProps {
  w?: number
  h?: number
}

const Shimmer: React.FC<IProps> = ({ w, h, ...props }) => {
  return <Container $w={w} $h={h} {...props} />
}

export default React.memo(Shimmer)

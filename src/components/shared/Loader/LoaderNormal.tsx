import React from 'react'

import { ILoaderProps } from './Loader'
import { Bar, BarContainer } from './LoaderNormal.styles'

const LoaderNormal: React.FC<ILoaderProps> = ({ size }) => {
  return (
    <BarContainer $size={size}>
      {Array.from({ length: 12 }, (_, index) => (
        <Bar key={index} $index={index} $size={size} />
      ))}
    </BarContainer>
  )
}

export default React.memo(LoaderNormal)

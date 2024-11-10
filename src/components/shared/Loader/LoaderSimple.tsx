import React from 'react'

import { ILoaderProps } from './Loader'
import { LoaderWrapper, LoaderContainer, LoaderItem } from './LoaderSimple.styles'

const LoaderSimple: React.FC<ILoaderProps> = ({ size, pageLoader = false }) => {
  return (
    <LoaderWrapper $size={size} $pageLoader={pageLoader}>
      <LoaderContainer $size={size}>
        <LoaderItem />
      </LoaderContainer>
    </LoaderWrapper>
  )
}

export default React.memo(LoaderSimple)

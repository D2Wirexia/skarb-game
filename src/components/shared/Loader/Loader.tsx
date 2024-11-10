import React from 'react'

import LoaderDots from './LoaderDots'
import LoaderNormal from './LoaderNormal'
import LoaderSimple from './LoaderSimple'

export interface ILoaderProps {
  size: number
  pageLoader?: boolean
}
export interface IWrapperLoaderProps {
  $size: number
  $pageLoader?: boolean
}

const Loader: React.FC<ILoaderProps & { view: 'simple' | 'normal' | 'dots' }> = ({
  view,
  ...props
}) => {
  switch (view) {
    case 'simple':
      return <LoaderSimple {...props} />
    case 'normal':
      return <LoaderNormal {...props} />
    case 'dots':
      return <LoaderDots {...props} />
  }
}

export default Object.assign(Loader, {
  Simple: LoaderSimple,
  Normal: LoaderNormal,
  Dots: LoaderDots,
})

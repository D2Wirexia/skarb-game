import React from 'react'

export enum IconType {
  Notification = 'notification',
  Close = 'close',
  Arrow = 'arrow',
  Checkmark = 'checkmark',
}

interface IProps extends React.ComponentPropsWithoutRef<'svg'> {
  width: number
  height: number
  icon: IconType
}

const Icon: React.FC<IProps> = ({ icon, width, height, ...rest }) => {
  return (
    <svg width={width} height={height} {...rest}>
      <use xlinkHref={`sprite.svg#${icon}`} />
    </svg>
  )
}

export default React.memo(Icon)

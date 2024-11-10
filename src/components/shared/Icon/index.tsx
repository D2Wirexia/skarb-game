import React from 'react'

export enum IconType {
  Notification = 'notification',
}

interface IProps {
  width: number
  height: number
  icon: IconType
}

const Icon: React.FC<IProps> = ({ icon, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`sprite.svg#${icon}`} />
    </svg>
  )
}

export default React.memo(Icon)

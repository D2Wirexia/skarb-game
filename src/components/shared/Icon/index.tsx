import React from 'react'
import styled, { css } from 'styled-components'

export enum IconType {
  Notification = 'notification',
  Close = 'close',
  Arrow = 'arrow',
  Checkmark = 'checkmark',
  Envelope = 'envelope',
}

interface IProps extends React.ComponentPropsWithoutRef<'svg'> {
  width: number
  height: number
  icon: IconType
}

const Icon: React.FC<IProps> = ({ icon, width, height, ...rest }) => {
  return (
    <SVG width={width} height={height} {...rest}>
      <use xlinkHref={`sprite.svg#${icon}`} />
    </SVG>
  )
}

const SVG = styled.svg`
  ${({ theme, width, height }) => css`
    width: ${theme.responsive(Number(width))};
    height: ${theme.responsive(Number(height))};
  `}
`

export default React.memo(Icon)

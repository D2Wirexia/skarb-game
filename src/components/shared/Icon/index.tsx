import React from 'react'
import styled, { css } from 'styled-components'

export enum IconType {
  Logo = 'logo',
  Notification = 'notification',
  Close = 'close',
  Arrow = 'arrow',
  Checkmark = 'checkmark',
  Envelope = 'envelope',
  Discord = 'discord',
  Gear = 'gear',
  CircleQuestion = 'circle-question',
  Lang = 'lang',
  Gamepad = 'gamepad',
  SpeakerMax = 'speaker-max',
  SpeakerMedium = 'speaker-medium',
  SpeakerMin = 'speaker-min',
  SpeakerEmpty = 'speaker-empty',
  Puzzle = 'puzzle',
  CircleCheckmark = 'circle-checkmark',
  Debug = 'debug',
  CloudUpload = 'cloud-upload',
  Grip = 'grip',
  Copy = 'copy',
  FaceID = 'face-id',
  Gift = 'gift',
  SecurityUser = 'security-user',
  Tools = 'tools',
  MenuButtonShape1F = 'main-button-shape-1f',
  MenuButtonShape1B = 'main-button-shape-1b',
  MenuButtonShape2F = 'main-button-shape-2f',
  MenuButtonShape2B = 'main-button-shape-2b',
  MenuButtonShape3F = 'main-button-shape-3f',
  MenuButtonShape3B = 'main-button-shape-3b',
  MenuButtonShape4F = 'main-button-shape-4f',
  MenuButtonShape4B = 'main-button-shape-4b',
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
    width: ${theme.responsive(width)};
    height: ${theme.responsive(height)};
  `}
`

export default React.memo(Icon)

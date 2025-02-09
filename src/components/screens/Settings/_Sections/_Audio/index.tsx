import React from 'react'

import { Container, Section, Label, TargetContainer, IconFrame, Value } from './styles'

import { Icon, IconType } from '~/components/shared'
import { Color } from '~/constants'
import { actions, useAppDispatch, useAppSelector } from '~/store'

const Audio: React.FC = () => {
  const { mainMenuVolume } = useAppSelector((state) => state.settings)
  const dispatch = useAppDispatch()
  return (
    <Container>
      <Section>
        <Label>Sound in the main menu</Label>
        <TargetContainer>
          <IconFrame>
            <_AudioIcon value={mainMenuVolume} />
          </IconFrame>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={mainMenuVolume}
            onChange={(e) => dispatch(actions.settings.setMainMenuVolume(Number(e.target.value)))}
          />
          <Value>{Math.round(mainMenuVolume * 100)}%</Value>
        </TargetContainer>
      </Section>
    </Container>
  )
}

const _AudioIcon: React.FC<{ value: number }> = ({ value }) => {
  if (value > 0.75) {
    return <Icon icon={IconType.SpeakerMax} width={31} height={22} fill={Color.White} />
  }
  if (value > 0.25) {
    return <Icon icon={IconType.SpeakerMedium} width={31} height={22} fill={Color.AtomicOrange} />
  }
  if (value == 0) {
    return <Icon icon={IconType.SpeakerEmpty} width={31} height={22} fill={Color.UproarRed} />
  }
  return <Icon icon={IconType.SpeakerMin} width={30} height={22} fill={Color.UproarRed} />
}

export default React.memo(Audio)

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { LinkProps } from 'react-router-dom'

import { TargetContainer, Front, Back, Label } from './styles'

import hovered from '@/audio/menu-hover-btn.mp3'
import pressed from '@/audio/transition-sceene.mp3'
import { Icon, IconType } from '~/components/shared'
import { useAudio } from '~/hooks'
import { useAppSelector } from '~/store'

interface Props extends LinkProps {
  shape: number
  text: string
}

type ShapeType = {
  front: IconType
  back: IconType
  width: number
  height: number
  offset: number
}

const MenuButton: React.FC<Props> = ({ shape, text, onClick, ...props }) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const [behaviorActive, setBehaviorActive] = useState<boolean>(false)
  const volume = useAppSelector((state) => state.settings.mainMenuVolume)

  const [audioHovering] = useAudio(hovered, 0.5 * volume)
  const [audioPressed] = useAudio(pressed, 0.3 * volume)

  const onClickButton = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.stopPropagation()
      audioPressed()
      ref.current?.blur()
      if (!!onClick) onClick(e)
    },
    [onClick],
  )

  useEffect(() => {
    if (behaviorActive) audioHovering()
  }, [behaviorActive])

  const getShape: ShapeType = useMemo(() => {
    switch (shape) {
      case 4:
        return {
          front: IconType.MenuButtonShape4F,
          back: IconType.MenuButtonShape4B,
          width: 346,
          height: 86,
          offset: 46,
        }
      case 3:
        return {
          front: IconType.MenuButtonShape3F,
          back: IconType.MenuButtonShape3B,
          width: 414,
          height: 100,
          offset: 44,
        }
      case 2:
        return {
          front: IconType.MenuButtonShape2F,
          back: IconType.MenuButtonShape2B,
          width: 442,
          height: 104,
          offset: 40,
        }
      default:
        return {
          front: IconType.MenuButtonShape1F,
          back: IconType.MenuButtonShape1B,
          width: 402,
          height: 92,
          offset: 44,
        }
    }
  }, [shape])

  return (
    <TargetContainer
      ref={ref}
      {...props}
      onClick={onClickButton}
      onMouseEnter={() => setBehaviorActive(true)}
      onMouseLeave={() => setBehaviorActive(false)}
      onFocus={() => setBehaviorActive(true)}
      onBlur={() => setBehaviorActive(false)}
      $size={[getShape.width, getShape.height]}
      $offset={getShape.offset}
    >
      <Front>
        <Icon icon={getShape.front} width={getShape.width} height={getShape.height} />
        <Label>{text}</Label>
      </Front>
      <Back>
        <Icon icon={getShape.back} width={getShape.width} height={getShape.height} />
      </Back>
    </TargetContainer>
  )
}

export default React.memo(MenuButton)

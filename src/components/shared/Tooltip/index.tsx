import React, { ReactNode } from 'react'
import { type PlacesType } from 'react-tooltip'

import { TooltipContainer } from './styles'

import { Color } from '~/constants'

interface IProps {
  tooltipId: string
  children: string | ReactNode
  openOnClick?: boolean
  disabled?: boolean
  clickable?: boolean
  noArrow?: boolean
  place?: PlacesType
  defaultIsOpen?: boolean
  isOpen?: boolean
  toggleIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
  maxWidth?: number
  delayShow?: number
}

const Tooltip: React.FC<IProps> = ({
  tooltipId,
  children,
  openOnClick = false,
  disabled = false,
  clickable = false,
  noArrow = false,
  place = 'bottom',
  defaultIsOpen = false,
  isOpen,
  toggleIsOpen = () => {},
  maxWidth,
  delayShow,
}) => {
  return (
    <TooltipContainer
      variant="light"
      id={tooltipId}
      openOnClick={openOnClick}
      hidden={disabled}
      noArrow={noArrow}
      clickable={clickable}
      place={place}
      arrowColor={Color.White}
      opacity={1}
      defaultIsOpen={defaultIsOpen}
      isOpen={isOpen}
      $maxWidth={maxWidth}
      style={{
        borderRadius: '8px',
        padding: '0',
        background: 'transparent',
        fontFamily: 'var(--font-roboto)',
      }}
      setIsOpen={(isOpen: boolean) => !isOpen && toggleIsOpen(isOpen)}
      globalCloseEvents={{
        escape: true,
        scroll: true,
        resize: true,
        clickOutsideAnchor: true,
      }}
      delayShow={delayShow}
    >
      {children}
    </TooltipContainer>
  )
}

export default React.memo(Tooltip)

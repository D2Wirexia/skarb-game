import React, { useCallback, useRef } from 'react'
import { LinkProps } from 'react-router-dom'

import { ContainerAnchor, ContainerAppNavigation, ContainerButton } from './styles'

interface IAnchorProps extends React.ComponentPropsWithoutRef<'a'> {
  children: React.ReactNode
  shape?: 'circle' | 'square'
}

interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode
  shape?: 'circle' | 'square'
}

interface IAppNavigationProps extends LinkProps {
  children: React.ReactNode
  shape?: 'circle' | 'square'
}

const FocHovContainer: React.FC = () => {
  return null
}

const _FocHovContainerAnchor: React.FC<IAnchorProps> = ({
  children,
  shape = 'circle',
  onClick,
  ...props
}) => {
  const aRef = useRef<HTMLAnchorElement>(null)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!!onClick) onClick(e)
      aRef.current?.blur()
    },
    [onClick],
  )

  return (
    <ContainerAnchor ref={aRef} shape={shape} {...props} onClick={handleClick}>
      {children}
    </ContainerAnchor>
  )
}

const _FocHovContainerAppNavigation: React.FC<IAppNavigationProps> = ({
  children,
  shape = 'circle',
  onClick,
  ...props
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!!onClick) onClick(e)
      linkRef.current?.blur()
    },
    [onClick],
  )

  return (
    <ContainerAppNavigation ref={linkRef} shape={shape} {...props} onClick={handleClick}>
      {children}
    </ContainerAppNavigation>
  )
}

const _FocHovContainerButton: React.FC<IButtonProps> = ({
  children,
  shape = 'circle',
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!!onClick) onClick(e)
      buttonRef.current?.blur()
    },
    [onClick],
  )

  return (
    <ContainerButton ref={buttonRef} shape={shape} {...props} onClick={handleClick}>
      {children}
    </ContainerButton>
  )
}

export default Object.assign(FocHovContainer, {
  Anchor: _FocHovContainerAnchor,
  AppNavigation: _FocHovContainerAppNavigation,
  Button: _FocHovContainerButton,
})

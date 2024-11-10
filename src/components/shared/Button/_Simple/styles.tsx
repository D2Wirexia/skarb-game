import React from 'react'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

interface IContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: [w: number, h: number]
  $isLoading?: boolean
}

export const TargetContainer = styled.button<IContainerProps>`
  border-radius: 40px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  background: ${Color.White};
  color: ${Color.PurpleNoir};
  border: 2px solid transparent;
  transition: var(--transition);

  &:disabled {
    opacity: 0.5;
  }

  &:disabled {
    cursor: default;
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background: ${Color.BubblegumCrisis};
  }

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      background: ${Color.BubblegumCrisis};
    `}

  ${({ size }) => css`
    min-width: ${size ? size[0] ?? 308 : 308}px;
    width: ${size ? size[0] ?? 308 : 308}px;
    height: ${size ? size[1] ?? 42 : 42}px;
  `}
`

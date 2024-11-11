import React from 'react'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

interface IContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: [w: number, h: number]
  $isLoading?: boolean
}

export const TargetContainer = styled.button<IContainerProps>`
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  background: ${Color.White};
  color: ${Color.PurpleNoir};
  transition: var(--transition);

  ${({ theme, size }) => css`
    width: ${theme.responsive(size ? size[0] ?? 308 : 308)};
    height: ${theme.responsive(size ? size[1] ?? 42 : 42)};

    font-size: ${theme.responsive(16)};
    border-radius: ${theme.responsive(40)};
    border: ${theme.responsive(2)} solid transparent;
  `}

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
`

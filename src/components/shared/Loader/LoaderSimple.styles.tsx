import hexToRgba from 'hex-to-rgba'
import styled, { css, keyframes } from 'styled-components'

import { IWrapperLoaderProps } from './Loader'

import { Color } from '~/constants'

const SpinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoaderItem = styled.div``

export const LoaderContainer = styled.div<IWrapperLoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  ${LoaderItem} {
    ${({ $size }) =>
      $size &&
      css`
        width: ${$size}px;
        height: ${$size}px;
        border-radius: 50%;
        border-top: ${$size * 0.15}px solid ${Color.White};
        border-right: ${$size * 0.15}px solid ${hexToRgba(Color.White, 0.4)};
        border-bottom: ${$size * 0.15}px solid ${hexToRgba(Color.White, 0.4)};
        border-left: ${$size * 0.15}px solid ${hexToRgba(Color.White, 0.4)};
        animation: ${SpinnerAnimation} 1.2s linear infinite;
      `}
  }
`

export const LoaderWrapper = styled.div<IWrapperLoaderProps>`
  ${({ $pageLoader }) =>
    $pageLoader &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 100px auto;
    `}
`

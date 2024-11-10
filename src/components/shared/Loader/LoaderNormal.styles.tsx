import styled, { keyframes } from 'styled-components'

import { IWrapperLoaderProps } from './Loader'

import { Color } from '~/constants'

const spin = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const Bar = styled.span<IWrapperLoaderProps & { $index: number }>`
  animation: ${spin} 1.2s linear infinite;
  transform-origin: 50% 50%;
  animation-delay: ${({ $index }) => `${$index * 0.1}s`};
  transform: rotate(${({ $index }) => $index * 30}deg);

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: ${({ $size }) => $size / 10}px;
    height: ${({ $size }) => $size / 4}px;
    border-radius: 50%;
    background: ${Color.White};
  }
`

export const BarContainer = styled.div<IWrapperLoaderProps>`
  position: relative;
  color: ${Color.White};
  display: flex;
  justify-content: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
`

import styled, { css, keyframes } from 'styled-components'

import { Icon } from '~/components/shared'
import { Color } from '~/constants'

const shake = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  3%, 9%, 15% {
    transform: rotateZ(4deg);
  }
  6%, 12%, 18% {
    transform: rotateZ(-4deg);
  }
  21%, 100% {
    transform: rotateZ(0deg);
  }
`

export const TooltipContent = styled.div`
  background: ${Color.White};
  text-align: center;

  ${({ theme }) => css`
    padding: ${theme.responsive(12, 16)};
    font-size: ${theme.responsive(14)};
    border-radius: ${theme.responsive(7)};
  `}
`

export const Actions = styled.div`
  display: flex;

  ${({ theme }) => css`
    gap: ${theme.responsive(18)};
  `}
`

export const Status = styled.div`
  color: ${Color.White};
  font-family: var(--font-monserrat);
  letter-spacing: 0.1em;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.responsive(24)};
    margin-bottom: ${theme.responsive(40)};
  `}
`

export const AnimationIcon = styled(Icon)`
  fill: ${Color.White};
  animation: ${shake} 3s ease-in-out infinite;

  ${({ theme }) => css`
    margin-bottom: ${theme.responsive(40)};
  `}
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100lvh;
  background-color: ${Color.LostInSadness};

  ${({ theme }) => css`
    gap: ${theme.responsive(20)};
    padding: ${theme.responsive(28)};
  `}
`

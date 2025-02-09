import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const Version = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${hexToRgba(Color.White, 0.66)};
  font-family: var(--font-roboto) !important;

  ${({ theme }) => css`
    font-size: ${theme.responsive(14)};
    padding: ${theme.responsive(32)};
  `}
`

export const Status = styled.div`
  color: ${Color.White};
  font-family: var(--font-roboto) !important;
  font-weight: 400;

  ${({ theme }) => css`
    font-size: ${theme.responsive(20)};
  `}
`

export const Name = styled.h2`
  color: ${Color.White};
  font-weight: 400;
  font-family: var(--font-katibeh) !important;
  line-height: 0.8;

  ${({ theme }) => css`
    font-size: ${theme.responsive(58)};
    margin: ${theme.responsive(20, 0, 78)};
  `}
`

export const Wrapper = styled.div`
  cursor: wait;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100lvh;
  background-color: ${Color.LostInSadness};

  ${({ theme }) => css`
    padding: ${theme.responsive(28)};
  `}
`

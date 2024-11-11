import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Color, MEDIA } from '~/constants'
import { EnvService } from '~/services'

export const MainWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: url(${EnvService.appURL + '/background.png'});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Version = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${hexToRgba(Color.White, 0.66)};

  ${({ theme }) => css`
    font-size: ${theme.responsive(14)};
    padding: ${theme.responsive(32)};
  `}
`

export const Status = styled.div`
  color: ${Color.White};
  font-family: var(--font-monserrat);
  letter-spacing: 0.1em;

  ${({ theme }) => css`
    font-size: ${theme.responsive(24)};
  `}
`

export const ConnectionAnimation = styled.div`
  max-height: 50vh;
  aspect-ratio: 1920 / 1080;

  ${({ theme }) => css`
    min-height: ${theme.responsive(210)};
    margin-top: ${theme.responsive(-100)};
  `}
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100lvh;
  background-color: ${Color.LostInSadness};
  user-select: none;

  ${({ theme }) => css`
    gap: ${theme.responsive(20)};
    padding: ${theme.responsive(28)};
  `}
`

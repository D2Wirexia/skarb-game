import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const Description = styled.div`
  color: ${Color.White};
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.responsive(24)};
  `}
`

export const Status = styled.div`
  color: ${Color.White};
  font-family: var(--font-monserrat);
  font-weight: 500;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.responsive(32)};
  `}
`

export const Astronaut = styled.div`
  position: absolute;
  height: 180%;
  width: auto;
  top: -10%;
  transform: translateX(-20%);
`

export const AstronautsContainer = styled.div`
  position: relative;
  max-height: 50vh;
  max-width: 70vw;
  aspect-ratio: 1920 / 1080;

  ${({ theme }) => css`
    min-height: ${theme.responsive(210)};
    margin-top: ${theme.responsive(-100)};

    ${Astronaut}:nth-child(2) {
      position: absolute;
      transform: rotateY(180deg) translateX(-20%);
    }
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
    gap: ${theme.responsive(35)};
    padding: ${theme.responsive(28)};
  `}
`

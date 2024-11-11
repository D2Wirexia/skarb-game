import styled, { css } from 'styled-components'

import { Color, MEDIA } from '~/constants'

export const Astronaut = styled.img`
  position: absolute;
  left: 0;
  max-height: 40vh;
  aspect-ratio: 1;

  ${({ theme }) => css`
    max-width: ${theme.responsive(400)};
    bottom: ${theme.responsive(40)};
  `}

  ${MEDIA.MW} {
    display: none;
  }
`

export const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    gap: ${theme.responsive(18)};
  `}
`
export const Description = styled.h4`
  width: 100%;
  font-weight: 400;
  text-align: center;
  color: ${Color.White};

  ${({ theme }) => css`
    max-width: ${theme.responsive(634)};
    font-size: ${theme.responsive(20)};
    margin: ${theme.responsive(80, 0, 40)};
  `}
`
export const Title = styled.h2`
  font-family: var(--font-kimberley);
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: ${Color.White};

  ${({ theme }) => css`
    font-size: ${theme.responsive(96)};
  `}
`
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    padding: ${theme.responsive(32)};
  `}
`

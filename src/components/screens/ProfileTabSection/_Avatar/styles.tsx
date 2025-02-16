import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const Description = styled.span`
  color: ${Color.BlueDolphin};

  ${({ theme }) => css`
    font-size: ${theme.responsive(14)};
    width: ${theme.responsive(184)};
  `}
`

export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Color.BlackHowl};
  color: ${Color.White};
  transition: var(--transition);

  ${({ theme }) => css`
    height: ${theme.responsive(42)};
    width: ${theme.responsive(184)};
    border-radius: ${theme.responsive(7)};
    font-size: ${theme.responsive(18)};
    border: ${theme.responsive(1)} solid ${Color.White};
  `}

  &:hover, &:focus {
    background-color: ${hexToRgba(Color.LostInSadness, 0.8)};

    ${({ theme }) => css`
      border: ${theme.responsive(1)} solid ${Color.White};
    `}
  }
`

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;

  ${({ theme }) => css`
    height: ${theme.responsive(208)};
    gap: ${theme.responsive(10)};
  `}
`

export const PhotoSmall = styled.img`
  border-radius: 50%;
  object-fit: cover;
  aspect-ratio: 1;

  ${({ theme }) => css`
    width: ${theme.responsive(108)};
  `}
`

export const PhotoBig = styled.img`
  object-fit: cover;
  aspect-ratio: 1;

  ${({ theme }) => css`
    width: ${theme.responsive(208)};
    border-radius: ${theme.responsive(24)};
  `}
`

export const Container = styled.div`
  display: flex;
  align-items: end;
  width: 100%;

  ${({ theme }) => css`
    gap: ${theme.responsive(40)};
  `}
`

export const Wrapper = styled.section``

import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Color, MEDIA } from '~/constants'

export const TabBarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', serif !important;
  background-color: transparent;
  color: ${Color.White};
  overflow-y: hidden;
  white-space: nowrap;
  transition: var(--transition);

  ${({ theme }) => css`
    gap: ${theme.responsive(12)};
    font-size: ${theme.responsive(20)};
    height: ${theme.responsive(60)};
    width: ${theme.responsive(254)};
    border: ${theme.responsive(1)} solid transparent;
    border-radius: ${theme.responsive(7)};
  `}

  &:disabled {
    background-color: ${hexToRgba(Color.BluePlaza, 0.6)};
    color: ${Color.White};
    border-color: ${Color.BluePlaza};
  }

  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: ${hexToRgba(Color.BluePlaza, 0.3)};
    }
  }
`

export const TabBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: fit-content;

  ${({ theme }) => css`
    gap: ${theme.responsive(4)};
  `}

  ${MEDIA.MOB_LARGE} {
    justify-content: center;
  }
`

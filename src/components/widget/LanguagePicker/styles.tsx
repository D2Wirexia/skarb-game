import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const Flag = styled.img`
  width: 100%;
  height: auto;

  ${({ theme }) => css`
    max-width: ${theme.responsive(20)};
    max-height: ${theme.responsive(24)};
  `}
`
export const Label = styled.div`
  color: ${Color.White};
  text-transform: uppercase;

  ${({ theme }) => css`
    font-size: ${theme.responsive(15)};
  `}
`
export const TargetButton = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ theme }) => css`
    width: ${theme.responsive(75)};
    height: ${theme.responsive(38)};
    border-radius: ${theme.responsive(8)};
    gap: ${theme.responsive(2)};
    border: ${theme.responsive(1)} solid ${Color.White};

    &:hover,
    &:focus {
      border: ${theme.responsive(1)} solid ${Color.White};
      background-color: ${hexToRgba(Color.White, 0.24)};
    }
  `}

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${hexToRgba(Color.White, 0.24)};
    `}
`

export const Groups = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid ${Color.White};
  background-color: ${hexToRgba(Color.LostInSadness, 0.66)};

  ${({ theme }) => css`
    border-radius: ${theme.responsive(8)};
    gap: ${theme.responsive(10)};
    padding: ${theme.responsive(10)};
    border: ${theme.responsive(1)} solid ${Color.White};
  `}

  ${TargetButton} {
    ${({ theme }) => css`
      width: ${theme.responsive(50)};
      height: ${theme.responsive(24)};
      border-radius: ${theme.responsive(3)};
      border: ${theme.responsive(1)} solid transparent;
    `}
  }
`

export const Container = styled.div`
  position: relative;
`

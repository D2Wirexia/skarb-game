import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const Flag = styled.img`
  max-width: 20px;
  max-height: 24px;
  width: 100%;
  height: auto;
`
export const Label = styled.div`
  color: ${Color.White};
  font-size: 15px;
  line-height: 120%;
  text-transform: uppercase;
`
export const TargetButton = styled.button<{ $isActive: boolean }>`
  width: 75px;
  height: 38px;
  border-radius: 8px;
  border: 1px solid ${Color.White};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 2px;

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${hexToRgba(Color.White, 0.24)};
    `}

  &:hover,
  &:focus {
    border: 1px solid ${Color.White};
    background-color: ${hexToRgba(Color.White, 0.24)};
  }
`

export const Groups = styled.div`
  display: grid;
  gap: 10px;
  width: fit-content;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid ${Color.White};
  background-color: ${hexToRgba(Color.LostInSadness, 0.66)};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 8px;
  padding: 10px;
  isolation: isolate;

  ${TargetButton} {
    width: 50px;
    height: 24px;
    border-radius: 3px;
    border: 1px solid transparent;
  }
`

export const Container = styled.div`
  position: relative;
`

import styled from 'styled-components'

import { Color } from '~/constants'

export const LabelName = styled.span`
  display: inline-block;
  font-size: 16px;
  color: ${Color.White};
  padding-right: 6px;
`

export const ToggleLabel = styled.label`
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;

  &::after {
    content: '';
    min-width: 38px;
    max-width: 38px;
    width: 38px;
    height: 20px;
    border-radius: 10px;
    background-color: ${Color.White};
    transition: var(--transition);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${Color.White};
    transition: var(--transition);
  }
`

export const ToggleInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  appearance: none;

  &:checked {
    & + ${ToggleLabel}::after {
      background-color: ${Color.White};
    }

    & + ${ToggleLabel}::before {
      right: 2px;
    }
  }
`

export const ToggleContainer = styled.div`
  width: fit-content;
  min-width: fit-content;
`

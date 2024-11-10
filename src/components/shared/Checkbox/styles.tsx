import styled from 'styled-components'

import { Icon } from '~/components/shared'
import { Color } from '~/constants'

export const LabelName = styled.span`
  margin-left: 6px;
`

export const CheckmarkIcon = styled(Icon)`
  position: absolute;
  top: 6px;
  left: 4px;
  width: 12px;
  height: auto;
  opacity: 0;
`

export const CheckboxLabel = styled.label`
  display: flex;
  cursor: pointer;
  max-width: 100%;
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  color: ${Color.White};
  position: relative;

  &::before {
    content: '';
    min-width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid ${Color.White};
    background: ${Color.White};
  }
`

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked {
    & + ${CheckboxLabel}::before {
      background-color: ${Color.White};
      border: 1px solid ${Color.White};
    }

    & + ${CheckboxLabel} ${CheckmarkIcon} {
      opacity: 1;
    }
  }

  &:disabled:checked {
    & + ${CheckboxLabel}::before {
      background-color: ${Color.White};
      border: 1px solid ${Color.White};
    }

    & + ${CheckboxLabel} ${CheckmarkIcon} {
      opacity: 1;

      path {
        stroke: ${Color.White};
      }
    }
  }

  &:disabled + ${CheckboxLabel}::before {
    background-color: ${Color.White};
    border: 1px solid ${Color.White};
  }
`

export const CheckboxContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`

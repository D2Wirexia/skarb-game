import styled, { css } from 'styled-components'

import { Icon } from '~/components/shared'
import { CheckboxInput, CheckboxLabel } from '~/components/shared/Checkbox/styles'
import { Color } from '~/constants'

interface IContainerProps {
  $isActive: boolean
  $multi?: boolean
  $width?: number
}

export const UpIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  transform: rotateZ(90deg);

  path {
    fill: ${Color.White};
  }
`

export const DownIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  transform: rotateZ(-90deg);

  path {
    fill: ${Color.White};
  }
`

export const CloseIcon = styled(Icon)`
  width: 16px;
  height: 16px;

  path {
    fill: ${Color.White};
  }
`

export const Option = styled.div<IContainerProps>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ $isActive }) => ($isActive ? Color.White : Color.White)};
  padding: 4px 0;

  &:hover {
    color: ${Color.White};
  }
`

export const Placeholder = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${Color.White};
`

export const DropDownContainer = styled.div<IContainerProps>`
  min-width: 154px;
  width: ${({ $width }) => ($width ? `${$width}px` : 'fit-content')};
  height: 42px;

  div:first-of-type {
    height: 100%;
  }

  div {
    width: 100%;
  }

  .react-dropdown-select {
    border: 1px solid ${({ $isActive }) => ($isActive ? Color.White : Color.White)};
    border-radius: 7px;
    background: ${Color.White};
    padding: 0 12px;
    outline: none;
    box-shadow: none;
    height: 100%;

    &:hover,
    &:focus {
      border-color: ${Color.White};
      box-shadow: none;
    }

    .react-dropdown-select-content {
      ${Placeholder} {
        display: flex;
        align-items: center;
        color: ${({ $isActive }) => $isActive && Color.White};
      }
    }

    .react-dropdown-select-dropdown {
      width: ${({ $multi }) => ($multi ? '300px' : '154px')};
      max-height: max-content;
      padding: 14px;
      border: 1px solid ${Color.White};
      border-radius: 7px;
      box-shadow: none;
      display: flex;
      gap: 8px;

      ${CheckboxLabel} {
        font-weight: 600;
        color: ${Color.White};

        &:hover {
          color: ${Color.White};
        }
      }

      ${CheckboxInput}:checked {
        & + ${CheckboxLabel} {
          color: ${Color.White};
        }
      }
    }

    .react-dropdown-select-dropdown-handle {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      position: relative;
      width: 16px;
      height: 16px;

      ${({ $isActive }) =>
        $isActive &&
        css`
          svg path {
            fill: ${Color.White};
          }
        `}
    }
  }
`

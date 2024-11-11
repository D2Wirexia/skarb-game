import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

interface IInputField {
  $isError: boolean
  $isFocus: boolean
}

export const Error = styled.div`
  color: ${Color.White};
`
export const Info = styled.div`
  color: ${Color.White};
`
export const BottomContainer = styled.div`
  width: 100%;
  min-height: 16px;
  height: auto;
  font-size: 12px;
  padding: 0 6px;
`
export const ActionContainer = styled.div<{ $isHandle: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 15px;
  width: fit-content;

  ${({ $isHandle }) =>
    $isHandle &&
    css`
      cursor: pointer;

      &:hover {
        background: ${hexToRgba(Color.White, 0.15)};
      }
    `}
`

export const InnerInput = styled.div`
  width: 100%;
  padding: 0 15px;
`

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  border: none;
  padding: 0 10px 0 15px;
  font-size: 16px;

  &::placeholder {
    color: ${Color.White};
    font-size: 16px;
  }

  &:-webkit-autofill {
    box-shadow: inset 0 0 20px 20px ${Color.White};
  }
`

export const InputContainer = styled.div<IInputField>`
  position: relative;
  width: 100%;
  height: 42px;
  border-radius: 7px;
  background: ${Color.White};
  display: flex;
  border: 1px solid ${({ $isError }) => ($isError ? Color.White : 'transparent')};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: text;

  ${({ $isFocus }) =>
    $isFocus &&
    css`
      border: 1px solid ${Color.White};
      box-shadow: 0 0 0 2px ${hexToRgba(Color.White, 0.2)};
    `}
`
export const Hint = styled.div`
  color: ${Color.White};
  font-size: 12px;
`
export const Label = styled.div`
  color: ${Color.White};
  font-size: 16px;
`
export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const InputWrapper = styled.div`
  position: relative;
  max-width: 308px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

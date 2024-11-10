import hexToRgba from 'hex-to-rgba'
import styled from 'styled-components'

import { Color } from '~/constants'

export const Container = styled.button`
  position: relative;
  background-color: transparent;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    background-color: ${hexToRgba(Color.White, 0.24)};
  }

  &::after {
    position: absolute;
    content: '';
    top: 8px;
    right: 10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${Color.AtomicOrange};
  }
`

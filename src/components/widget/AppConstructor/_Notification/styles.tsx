import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const Container = styled.button`
  position: relative;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    width: ${theme.responsive(42)};
    height: ${theme.responsive(42)};
  `}

  &:hover,
  &:focus {
    background-color: ${hexToRgba(Color.White, 0.24)};
  }

  &::after {
    position: absolute;
    content: '';
    border-radius: 50%;
    background: ${Color.AtomicOrange};

    ${({ theme }) => css`
      top: ${theme.responsive(8)};
      right: ${theme.responsive(10)};
      width: ${theme.responsive(8)};
      height: ${theme.responsive(8)};
    `}
  }
`

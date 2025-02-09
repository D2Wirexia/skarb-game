import hexToRgba from 'hex-to-rgba'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

interface IProps {
  shape: 'circle' | 'square'
}

const styles = css<IProps>`
  position: relative;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  ${({ theme, shape }) => css`
    ${shape === 'circle' &&
    css`
      width: ${theme.responsive(42)};
      height: ${theme.responsive(42)};
      border-radius: 50%;
    `}

    ${shape === 'square' &&
    css`
      width: fit-content;
      height: fit-content;
      border-radius: ${theme.responsive(7)};
    `}
  `}

  &:hover,
  &:focus {
    background-color: ${hexToRgba(Color.White, 0.24)};
  }
`

export const ContainerAnchor = styled.a<IProps>`
  ${styles};
`

export const ContainerAppNavigation = styled(Link)<IProps>`
  ${styles};
`

export const ContainerButton = styled.button<IProps>`
  ${styles};
`

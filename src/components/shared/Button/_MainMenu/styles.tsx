import { Link, LinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'
import { Lang } from '~/i18n'

interface IContainerProps extends LinkProps {
  $size?: [w: number, h: number]
  $offset: number
}

export const Label = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${Color.ChaosBlack};
  white-space: nowrap;
  font-weight: 500;
`

export const Back = styled.div`
  position: relative;
  z-index: -1;
  transition: all 0.3s linear;

  ${({ theme }) => css`
    top: ${({ theme }) => theme.responsive(2)};
    left: ${({ theme }) => theme.responsive(-3)};

    svg {
      filter: drop-shadow(${theme.responsive(1, 1, 4)} #544f4f);
    }
  `}
`

export const Front = styled.div`
  position: absolute;
  transition: all 0.3s linear;

  ${({ theme }) => css`
    top: ${({ theme }) => theme.responsive(-2)};
    left: ${({ theme }) => theme.responsive(3)};

    svg {
      filter: drop-shadow(${theme.responsive(1, 1, 4)} #544f4f);
    }
  `}
`

export const TargetContainer = styled(Link)<IContainerProps>`
  position: relative;
  transition: all 0.3s linear;

  ${({ theme, $size, $offset }) => css`
    width: ${theme.responsive($size![0])};
    height: ${theme.responsive($size![1])};

    &:hover ${Front}, &:focus ${Front} {
      top: ${theme.responsive(1)};
      left: ${theme.responsive(-1)};
    }

    &:hover ${Back}, &:focus ${Back} {
      svg {
        filter: drop-shadow(${theme.responsive(-2, 2, 4)} #ee9612);
      }
    }

    ${Label} {
      top: ${theme.language == Lang.English ? 40 : $offset}%;
      font-size: ${theme.language == Lang.English ? theme.responsive(46) : theme.responsive(32)};
      font-family: ${theme.language == Lang.English
        ? 'var(--font-katibeh)'
        : 'var(--font-alegreya)'};
    }
  `}
`

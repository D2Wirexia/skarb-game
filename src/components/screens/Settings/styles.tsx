import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.responsive(56)};
  `}
`

export const Header = styled.div`
  background: ${hexToRgba(Color.BluePlaza, 0.5)};

  ${({ theme }) => css`
    padding: ${theme.responsive(20)};
  `}
`

export const Container = styled.section`
  background: ${Color.RiverStyx};
  overflow: hidden;

  ${({ theme }) => css`
    border-radius: ${theme.responsive(15)};
    max-height: ${theme.responsive(802)};
    min-height: 94vh;
    height: 100%;
    width: 100%;
  `}
`

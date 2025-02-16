import styled, { css } from 'styled-components'

import { Sculpt } from '~/components/shared'
import { Color } from '~/constants'

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
`

export const Container = styled(Sculpt.FocHovContainer.AppNavigation)`
  overflow: hidden;

  ${({ theme }) => css`
    width: ${theme.responsive(460)};
    height: ${theme.responsive(460)};
    border-radius: ${theme.responsive(24)};
    box-shadow: ${theme.responsive(0, 2, 4)} ${Color.LostInSadness};

    &:hover ${Banner}, &:focus ${Banner} {
      transform: scale(1.03);
      box-shadow: ${theme.responsive(0, 0, 8)} ${Color.AtomicOrange};
    }
  `}
`

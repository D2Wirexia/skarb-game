import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const Mark = styled.div`
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
`

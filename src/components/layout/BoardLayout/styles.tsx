import styled, { css } from 'styled-components'

import { Sculpt } from '~/components/shared'

export const Wrapper = styled(Sculpt.BoardSection)`
  ${({ theme }) => css`
    width: calc(100% - ${theme.responsive(80)});
    height: calc(100% - ${theme.responsive(80)});
  `}
`

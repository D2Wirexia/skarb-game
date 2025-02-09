import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const Text = styled.div`
  color: ${Color.White};
  font-family: var(--font-katibeh);
  font-weight: 400;

  ${({ theme }) => css`
    font-size: ${theme.responsive(24)};
  `}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > :last-child {
    margin-left: auto;
  }

  ${({ theme }) => css`
    gap: ${theme.responsive(45)};
  `}
`

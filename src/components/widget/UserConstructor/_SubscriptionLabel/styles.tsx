import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const Label = styled.div`
  color: ${Color.White};

  ${({ theme }) => css`
    font-size: ${theme.responsive(20)};
  `}
`

export const Diamond = styled.img`
  ${({ theme }) => css`
    width: ${theme.responsive(28)};
    height: ${theme.responsive(28)};
  `}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e01378 0%, #e1002d 100%);

  ${({ theme }) => css`
    gap: ${theme.responsive(8)};
    padding: ${theme.responsive(6, 10)};
    border-radius: ${theme.responsive(7)};
  `}
`

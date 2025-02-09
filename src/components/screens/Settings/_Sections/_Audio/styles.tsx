import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const Value = styled.div`
  color: ${Color.White};
  font-family: var(--font-roboto);

  ${({ theme }) => css`
    font-family: ${theme.responsive(16)};
  `}
`

export const IconFrame = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;

  ${({ theme }) => css`
    width: ${theme.responsive(32)};
    height: ${theme.responsive(22)};
  `}
`

export const TargetContainer = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.responsive(12)};
  `}
`

export const Label = styled.div`
  color: ${Color.White};
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.responsive(20)};
  `}
`

export const Container = styled.div`
  display: flex;

  ${({ theme }) => css`
    gap: ${theme.responsive(30)};
  `}
`

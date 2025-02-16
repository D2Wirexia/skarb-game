import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const Label = styled.div`
  color: ${Color.White};
  ${({ theme }) => css`
    font-size: ${theme.responsive(16)};
  `}
`

export const SupButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Color.BlackHowl};
  transition: var(--transition);

  ${({ theme }) => css`
    gap: ${theme.responsive(10)};
    padding: ${theme.responsive(8, 14)};
    border-radius: ${theme.responsive(7)};
    border: ${theme.responsive(2)} solid ${Color.BluePlaza};
  `}

  &:hover, &:focus {
    background-color: ${Color.BluePlaza};

    ${({ theme }) => css`
      border: ${theme.responsive(2)} solid ${Color.BluePlaza};
    `}
  }
`

export const Text = styled.div`
  color: ${Color.White};
  font-family: var(--font-katibeh) !important;
  font-weight: 400;
  white-space: nowrap;
  transition: var(--transition);

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

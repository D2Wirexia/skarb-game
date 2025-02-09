import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Color } from '~/constants'

export const StyledAnchor = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: ${Color.White};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

export const StyledLink = styled(Link)<{ $ignoreUnderline: boolean }>`
  font-size: 14px;
  font-weight: 600;
  color: ${Color.White};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: ${({ $ignoreUnderline }) => ($ignoreUnderline ? 'none' : 'underline')};
  }
`

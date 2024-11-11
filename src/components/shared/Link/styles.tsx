import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

interface IStyledAnchorProps {
  $small: boolean
}

export const StyledAnchor = styled.a<IStyledAnchorProps>`
  font-size: 14px;
  font-weight: 400;
  color: ${Color.White};
  text-decoration: none;

  ${({ $small }) =>
    $small &&
    css`
      font-size: 16px;
      font-weight: 600;
    `}

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

export const StyledLink = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  color: ${Color.White};
  text-decoration: none;
`

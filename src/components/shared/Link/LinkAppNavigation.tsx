import React from 'react'
import { LinkProps } from 'react-router-dom'

import { StyledLink } from './styles'

interface IProps extends LinkProps {
  children: React.ReactNode
  ignoreUnderline?: boolean
}

const LinkAppNavigation: React.FC<IProps> = ({ children, ignoreUnderline = false, ...props }) => {
  return (
    <StyledLink $ignoreUnderline={ignoreUnderline} {...props}>
      {children}
    </StyledLink>
  )
}

export default React.memo(LinkAppNavigation)

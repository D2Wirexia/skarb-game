import React from 'react'
import { LinkProps } from 'react-router-dom'

import { StyledLink } from './styles'

interface IProps extends LinkProps {
  children: React.ReactNode
}

const LinkAppNavigation: React.FC<IProps> = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>
}

export default React.memo(LinkAppNavigation)

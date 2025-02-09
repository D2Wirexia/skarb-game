import React from 'react'

import { StyledAnchor } from './styles'

interface IProps extends React.ComponentPropsWithoutRef<'a'> {
  children?: React.ReactNode
}

const LinkAnchor: React.FC<IProps> = ({ children, ...props }) => {
  return <StyledAnchor {...props}>{children}</StyledAnchor>
}

export default React.memo(LinkAnchor)

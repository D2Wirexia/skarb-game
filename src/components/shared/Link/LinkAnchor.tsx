import React from 'react'

import { StyledAnchor } from './styles'

interface IProps extends React.ComponentPropsWithoutRef<'a'> {
  children?: React.ReactNode
  small?: boolean
}

const LinkAnchor: React.FC<IProps> = ({ children, small = false, ...props }) => {
  return (
    <StyledAnchor $small={small} {...props}>
      {children}
    </StyledAnchor>
  )
}

export default React.memo(LinkAnchor)

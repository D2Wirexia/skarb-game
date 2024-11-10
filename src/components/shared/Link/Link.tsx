import React from 'react'
import { LinkProps } from 'react-router-dom'

import LinkAnchor from './LinkAnchor'
import LinkAppNavigation from './LinkAppNavigation'

export interface ILinkProps extends LinkProps, React.ComponentPropsWithoutRef<'a'> {
  children: React.ReactNode
}

const Link: React.FC<ILinkProps & { view: 'nav-link' | 'anchor' }> = ({
  children,
  view,
  ...props
}) => {
  switch (view) {
    case 'nav-link':
      return <LinkAppNavigation {...props}>{children}</LinkAppNavigation>
    case 'anchor':
      return <LinkAnchor {...props}>{children}</LinkAnchor>
  }
}

export default Object.assign(Link, {
  AppNavigation: LinkAppNavigation,
  Anchor: LinkAnchor,
})

import type { Meta, StoryObj } from '@storybook/react'

import Link from './Link'

const meta: Meta<typeof Link> = {
  title: 'Shared/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
}

export default meta

type StoryLink = StoryObj<typeof Link>

export const AppNavigation: StoryLink = {
  args: {
    view: 'nav-link',
    to: '/test',
    children: 'app-navigation',
  },
}

export const Anchor: StoryLink = {
  args: {
    view: 'anchor',
    href: '/test',
    children: 'anchor',
  },
}

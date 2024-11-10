import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Button from './index'

const meta: Meta<typeof Button> = {
  title: 'Shared/BadgeButton',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    isLoading: {
      control: 'boolean',
      defaultValue: false,
    },
    size: {
      control: 'object',
      defaultValue: [308, 64],
      options: [],
    },
  },
  args: { onClick: fn() },
}

export default meta
type StoryPrimary = StoryObj<typeof Button>

export const Simple: StoryPrimary = {
  args: {
    view: 'simple',
    label: 'Button',
    isLoading: false,
    disabled: false,
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Shared/Checkbox',
  component: Checkbox,
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
    },
  },
  args: {},
}

export default meta
type StoryCheckbox = StoryObj<typeof Checkbox>

export const Default: StoryCheckbox = {
  args: {
    label: 'MSA',
  },
}

export const Empty: StoryCheckbox = {
  args: {},
}

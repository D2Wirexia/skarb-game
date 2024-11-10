import type { Meta } from '@storybook/react'
import React, { useState } from 'react'

import SelectorButton from './SelectorButton'

const meta: Meta<typeof SelectorButton> = {
  title: 'Shared/Selector BadgeButton',
  component: SelectorButton,
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

export const View = () => {
  const [activeValue, setActiveValue] = useState<string | null>(null)

  return (
    <SelectorButton
      activeValue={activeValue}
      onChange={setActiveValue}
      values={[
        { value: 'beginner', label: 'Beginner' },
        { value: 'intermediate', label: 'Intermediate' },
        { value: 'advanced', label: 'Advanced' },
        { value: 'expert', label: 'Expert' },
        { value: 'divine', label: 'Divine' },
        { value: 'immortal', label: 'Immortal' },
        { value: 'arcane', label: 'Arcane' },
        { value: 'large', label: 'Дуже довга назва для тестування переносу тексту на новий рядок' },
        { value: 'sex', label: 'Sex' },
      ]}
    />
  )
}

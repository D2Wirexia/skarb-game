import type { Meta } from '@storybook/react'
import React, { useState } from 'react'

import DropDown from './DropDown'

const meta: Meta<typeof DropDown> = {
  title: 'Shared/Drop Down',
  component: DropDown,
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

export const Multi = () => {
  const [dialects, setDialects] = useState<string[]>([])

  return (
    <DropDown
      placeholder="Dialects"
      options={[]}
      activeOptions={dialects}
      onChange={setDialects}
      multi
    />
  )
}

export const Single = () => {
  const [sort, setSort] = useState<string[]>([])

  return <DropDown placeholder="Sort" options={[]} activeOptions={sort} onChange={setSort} />
}

import type { Meta } from '@storybook/react'
import React, { useState } from 'react'

import TabBar from './TabBar'

const meta: Meta<typeof TabBar> = {
  title: 'Shared/Tab Bar',
  component: TabBar,
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
  const [activeTab, setActiveTab] = useState<string | null>(null)

  return (
    <TabBar activeTab={activeTab} onChange={setActiveTab}>
      <TabBar.Item value="0" label="Word sets by function (22)" />
      <TabBar.Item value="1" label="Al-Kitaab Alif Baa (10)" />
      <TabBar.Item value="2" label="Al-Kitaab Part One (13)" />
      <TabBar.Item value="3" label="Al-Kitaab Part Two (10)" />
      <TabBar.Item value="4" label="Al-Kitaab Part Three (10)" />
    </TabBar>
  )
}

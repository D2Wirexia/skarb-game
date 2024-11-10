import type { Meta } from '@storybook/react'
import React, { useId } from 'react'

import Tooltip from './index'

import { Button } from '~/components/shared'

const meta: Meta<typeof Tooltip> = {
  title: 'Shared/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    openOnClick: {
      control: 'boolean',
      defaultValue: false,
    },
    clickable: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    noArrow: {
      control: 'boolean',
      defaultValue: false,
    },
    place: {
      control: 'radio',
      defaultValue: 'bottom',
      options: ['bottom', 'top', 'left', 'right'],
    },
  },
  args: {},
}

export default meta

export const Black = () => {
  const id: string = useId()
  return (
    <>
      <Button.Simple data-tooltip-id={id} label="Hovering target" />
      <Tooltip tooltipId={id}>Tooltip Content!</Tooltip>
    </>
  )
}

export const White = () => {
  const id: string = useId()

  return (
    <>
      <Button.Simple data-tooltip-id={id} label="Clickable target" />
      <Tooltip tooltipId={id} openOnClick clickable>
        Tooltip Content!
      </Tooltip>
    </>
  )
}

export const Multi = () => {
  const hoverId: string = useId()
  const clickId: string = useId()

  return (
    <>
      <Button.Simple data-tooltip-id={hoverId} label="Hovering target" />
      <Tooltip tooltipId={hoverId} clickable>
        <Button.Simple data-tooltip-id={clickId} label="Clickable target" />
        <Tooltip tooltipId={clickId} openOnClick clickable>
          Tooltip Content!
        </Tooltip>
      </Tooltip>
    </>
  )
}

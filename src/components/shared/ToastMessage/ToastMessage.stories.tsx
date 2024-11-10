import type { Meta } from '@storybook/react'
import React, { useCallback } from 'react'

import ToastMessage, { TMType } from './ToastMessage'

import { Button } from '~/components/shared'
import { actions, useAppDispatch } from '~/store'

const meta: Meta<typeof ToastMessage> = {
  title: 'Shared/Toast Message',
  component: ToastMessage,
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
  const dispatch = useAppDispatch()

  const pushMessage = useCallback(
    (type: TMType) => {
      dispatch(
        actions.ui.addToastMessage({
          message: `Test ${type} message!`,
          type,
        }),
      )
    },
    [dispatch],
  )

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
      }}
    >
      <Button.Simple onClick={() => pushMessage(TMType.Default)} label="Push default message" />
      <Button.Simple onClick={() => pushMessage(TMType.Success)} label="Push success message" />
      <ToastMessage />
    </div>
  )
}

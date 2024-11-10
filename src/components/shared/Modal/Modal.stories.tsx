import type { Meta } from '@storybook/react'
import React, { useState } from 'react'

import Modal from './Modal'

import { Button } from '~/components/shared'

const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal',
  component: Modal,
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
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onOpen = () => setIsModalOpen(true)
  const onClose = () => setIsModalOpen(false)

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={onClose} triggerClose>
        <Button.Simple label="Close Modal" onClick={onClose} />
      </Modal>
      <Button.Simple label="Open Modal" onClick={onOpen} />
    </>
  )
}

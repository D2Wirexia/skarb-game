import type { Meta } from '@storybook/react'
import React from 'react'
import { useForm } from 'react-hook-form'

import Input from './Input'

import { alphabeticRegex } from '~/constants'

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
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

interface IPasswordForm {
  password: string
}

export const Password = () => {
  const {
    register,
    formState: { errors },
  } = useForm<IPasswordForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      password: '',
    },
    shouldFocusError: true,
  })

  return (
    <Input
      label="Password"
      type="password"
      placeholder="Password"
      max={32}
      register={register('password', {
        required: 'Password is required',
        minLength: {
          value: 8,
          message: 'More then 8',
        },
      })}
      error={errors.password?.message}
    />
  )
}

interface INameForm {
  name: string
}

export const Name = () => {
  const {
    register,
    formState: { errors },
    clearErrors,
  } = useForm<INameForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      name: '',
    },
    shouldFocusError: true,
  })

  return (
    <Input
      label="Name"
      placeholder="Name"
      max={32}
      register={register('name', {
        required: 'Name is required',
        pattern: {
          value: alphabeticRegex,
          message: 'Only characters',
        },
      })}
      error={errors.name?.message}
      clearError={() => clearErrors('name')}
    />
  )
}

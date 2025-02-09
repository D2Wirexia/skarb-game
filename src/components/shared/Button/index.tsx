import React from 'react'

import MenuButton from './_MainMenu'
import ButtonSimple from './_Simple'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  label: string
  size?: [w: number, h: number]
  isLoading?: boolean
}

const Button: React.FC = () => {
  return undefined
}

export default Object.assign(Button, {
  Simple: ButtonSimple,
  MenuButton: MenuButton,
})

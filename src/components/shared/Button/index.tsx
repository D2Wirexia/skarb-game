import React from 'react'

import ButtonSimple from './_Simple'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  label: string
  size?: [w: number, h: number]
  isLoading?: boolean
}

const Button: React.FC<ButtonProps & { view: 'simple' }> = ({ view, ...props }) => {
  switch (view) {
    case 'simple':
      return <ButtonSimple {...props} />
  }
}

export default Object.assign(Button, {
  Simple: ButtonSimple,
})

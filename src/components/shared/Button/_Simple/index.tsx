import React, { useMemo } from 'react'

import { ButtonProps } from '../index'

import { TargetContainer } from './styles'

import { Loader } from '~/components/shared'

const ButtonSimple: React.FC<ButtonProps> = ({ label, isLoading, ...props }) => {
  const loaderDotsSize: number = useMemo(() => {
    const { size } = props
    if (!size) return 18
    return Math.min(size[0], size[1]) * 0.35
  }, [props.size])

  return (
    <TargetContainer $isLoading={isLoading} {...props}>
      {isLoading && <Loader.Dots size={loaderDotsSize} />}
      {!isLoading && label}
    </TargetContainer>
  )
}

export default React.memo(ButtonSimple)

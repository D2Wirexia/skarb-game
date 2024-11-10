import React, { useId } from 'react'

import { LabelName, ToggleContainer, ToggleInput, ToggleLabel } from './styles'

interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
}

const Toggle: React.FC<IProps> = ({ label, ...props }) => {
  const toggleId: string = useId()

  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" {...props} id={toggleId} />
      <ToggleLabel htmlFor={toggleId}>{label && <LabelName>{label}</LabelName>}</ToggleLabel>
    </ToggleContainer>
  )
}

export default React.memo(Toggle)

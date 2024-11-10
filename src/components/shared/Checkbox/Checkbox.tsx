import React, { useId } from 'react'

import { CheckboxContainer, CheckboxInput, CheckboxLabel, CheckmarkIcon, LabelName } from './styles'

interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
}

const Checkbox: React.FC<IProps> = ({ label, ...props }) => {
  const checkboxId: string = useId()

  return (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" {...props} id={checkboxId} />
      <CheckboxLabel htmlFor={checkboxId}>
        <CheckmarkIcon />
        {label && <LabelName>{label}</LabelName>}
      </CheckboxLabel>
    </CheckboxContainer>
  )
}

export default React.memo(Checkbox)

import React, { useCallback, useId, useState } from 'react'

import { SelectorButtonContainer, SelectorButtonLabel, SelectorButtonRadio } from './styles'

export interface ISelectorButtonValues<K> {
  value: K
  label: string
}

interface IProps<K> {
  values: ISelectorButtonValues<K>[]
  activeValue: K | null
  onChange: (value: K) => void
}

const SelectorButton = <K extends NonNullable<string>>({
  activeValue,
  values,
  onChange,
}: IProps<K>) => {
  const name: string = useId()
  const [focusedKey, setFocusedKey] = useState<K | null>(null)

  const handleFocus = useCallback(
    (key: K) => {
      setFocusedKey(key)
      onChange(key)
    },
    [onChange],
  )

  const handleBlur = useCallback(() => {
    setFocusedKey(null)
  }, [])

  return (
    <SelectorButtonContainer>
      {values.map(({ value, label }) => {
        return (
          <SelectorButtonLabel
            key={value}
            $isActive={activeValue === value}
            $isFocus={focusedKey === value}
            onChange={() => onChange(value)}
            onClick={handleBlur}
          >
            <SelectorButtonRadio
              type="radio"
              name={name}
              checked={activeValue === value}
              onChange={() => onChange(value)}
              onFocus={() => handleFocus(value)}
              onBlur={handleBlur}
            />
            {label}
          </SelectorButtonLabel>
        )
      })}
    </SelectorButtonContainer>
  )
}

export default React.memo(SelectorButton)

import React, { useCallback, useState } from 'react'

import {
  BottomContainer,
  Error,
  Hint,
  Info,
  InputContainer,
  InputField,
  InputWrapper,
  Label,
  ActionContainer,
  TopContent,
} from './styles'

import { emojiRegex } from '~/constants'

interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  register: any
  hint?: string | React.ReactNode
  action?: React.ReactNode
  actionCallback?: () => void
  info?: string | null
  error?: string | null
  clearError?: () => void
  simpleShape?: boolean
}

const Input: React.FC<IProps> = ({
  label,
  register,
  hint,
  action,
  actionCallback,
  type,
  info,
  error,
  clearError,
  simpleShape = false,
  onFocus,
  ...props
}) => {
  const { onChange, onBlur, ...restRegister } = register

  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [inputType, setInputType] = useState<React.HTMLInputTypeAttribute | undefined>(type)

  const handleChangeShowPassword = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setInputType((prev) => (prev === 'text' ? 'password' : 'text'))
  }, [])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      e.target.value = e.target.value.replace(emojiRegex, '')
      !!clearError && clearError()
      onChange(e)
    },
    [onChange, clearError],
  )

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocus(true)
      if (!!onFocus) onFocus(e)
    },
    [onFocus],
  )

  const handleBlur = useCallback(
    (e: React.FocusEventHandler<HTMLInputElement>) => {
      setIsFocus(false)
      onBlur(e)
    },
    [onBlur],
  )

  return (
    <InputWrapper>
      {!simpleShape && (
        <TopContent>
          <Label>{label}</Label>
          {hint && <Hint>{hint}</Hint>}
        </TopContent>
      )}
      <InputContainer $isError={!!error} $isFocus={isFocus}>
        <InputField
          {...props}
          type={inputType}
          {...restRegister}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {!!action && (
          <ActionContainer onClick={actionCallback} $isHandle={!!actionCallback}>
            {action}
          </ActionContainer>
        )}
        {type === 'password' && (
          <ActionContainer onClick={handleChangeShowPassword} $isHandle>
            {inputType === 'text' && <span>Hide</span>}
            {inputType === 'password' && <span>Show</span>}
          </ActionContainer>
        )}
      </InputContainer>
      {!simpleShape && (
        <BottomContainer>
          {info && <Info>{info}</Info>}
          {error && <Error>{error}</Error>}
        </BottomContainer>
      )}
    </InputWrapper>
  )
}

export default React.memo(Input)

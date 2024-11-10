import type { FieldPath, FieldValues, UseFormSetError } from 'react-hook-form'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Color } from '~/constants'
import { ApiException } from '~/services'

export const applyErrors = <F extends FieldValues>(
  errors: ApiException,
  setError: UseFormSetError<F>,
  setRootError?: (v: any) => void,
  fields?: F,
): void => {
  Object.entries(errors.error).forEach(([key, value]) => {
    const message = Array.isArray(value) ? value[0] : (value as string)
    setError(key as FieldPath<F>, { message })
    if (!!setRootError) setRootError((prev: any) => ({ ...prev, [key]: message }))
  })
}

const ErrorLink = styled(Link)`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: ${Color.White};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

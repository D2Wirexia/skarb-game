import type { FieldPath, FieldValues, UseFormSetError } from 'react-hook-form'

import { ApiException } from '~/services'

export const applyErrors = <F extends FieldValues>(
  errors: ApiException,
  setError: UseFormSetError<F>,
  setRootError?: (v: any) => void,
): void => {
  Object.entries(errors.error).forEach(([key, value]) => {
    const message = Array.isArray(value) ? value[0] : (value as string)
    setError(key as FieldPath<F>, { message })
    if (!!setRootError) setRootError((prev: any) => ({ ...prev, [key]: message }))
  })
}

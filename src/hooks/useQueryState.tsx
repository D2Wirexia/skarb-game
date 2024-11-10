'use client'

import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

type useSearchParamsHookType = [string, (v: string) => void]

export default function useQueryState(key: string, initialValue: string): useSearchParamsHookType {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [value, setValue] = useState<string>(searchParams.get(key) ?? initialValue)

  useEffect(() => {
    const current: URLSearchParams = new URLSearchParams(Array.from(searchParams.entries()))

    if (!value) {
      current.delete(key)
    } else {
      current.set(key, value)
    }

    const search: string = current.toString()
    const query: string = search ? `?${search}` : ''

    navigate(`${pathname}${query}`)
  }, [key, pathname, navigate, searchParams, value])

  const handleChange = useCallback((v: string) => {
    setValue(v)
  }, [])

  return [value, handleChange]
}

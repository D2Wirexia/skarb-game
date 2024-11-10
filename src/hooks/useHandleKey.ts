import { useCallback, useEffect } from 'react'

export default function useHandleKey(
  keys: string[] | string,
  callback: (key: string) => void,
): void {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (Array.isArray(keys)) {
        if (keys.includes(e.key)) {
          callback(e.key)
        }
      } else {
        if (e.key === keys) {
          callback(e.key)
        }
      }
    },
    [keys, callback],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [handleKeyDown])
}

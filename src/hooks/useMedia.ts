import { useEffect, useState } from 'react'

import { MEDIA } from '~/constants'

export default function useMedia(query: MEDIA): boolean {
  const [state, setState] = useState<boolean>(false)

  useEffect(() => {
    let mounted = true
    const mq = query.startsWith('@media') ? query.slice(7) : query
    const mediaQueryList = window.matchMedia(mq)

    const handleChange = () => {
      if (!mounted) {
        return
      }
      setState(mediaQueryList.matches)
    }

    handleChange()

    // Using deprecated listeners to ensure compatibility with older Safari versions
    mediaQueryList.addListener(handleChange)

    return () => {
      mounted = false
      mediaQueryList.removeListener(handleChange)
    }
  }, [query])

  return state
}

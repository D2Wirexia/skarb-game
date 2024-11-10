import { useEffect, useMemo, useState } from 'react'

import { Media } from '~/constants'

interface IWindowSize {
  isMobileLayout: boolean
}

const getSize = (): string => {
  if (window.innerWidth <= +Media.mobile.replace('px', '')) {
    return 'mobile'
  } else if (
    window.innerWidth > +Media.mobile.replace('px', '') &&
    window.innerWidth <= +Media.tablet.replace('px', '')
  ) {
    return 'tablet'
  } else if (
    window.innerWidth > +Media.tablet.replace('px', '') &&
    window.innerWidth <= +Media.laptop.replace('px', '')
  ) {
    return 'laptop'
  } else {
    return 'desktop'
  }
}

export default function useWindowSize(): IWindowSize {
  const [media, setMedia] = useState<string>(getSize())

  useEffect(() => {
    const handleResize = () => {
      setMedia(getSize())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isMobileLayout: boolean = useMemo(() => {
    return ['mobile', 'tablet'].includes(media)
  }, [media])

  return { isMobileLayout }
}

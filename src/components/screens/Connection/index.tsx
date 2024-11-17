import lottie, { AnimationItem } from 'lottie-web'
import React, { useEffect, useRef } from 'react'

import { Animation, Status, Version, Wrapper } from './styles'

import astronaut from '@/lottie/astronaut.json'
import { EnvService } from '~/services'

const ConnectionScreen: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const animationRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    animationRef.current = lottie.loadAnimation({
      container: containerRef.current as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: astronaut,
    })

    return () => animationRef.current?.destroy()
  }, [])

  return (
    <Wrapper>
      <Animation ref={containerRef} />
      <Status>Initialization...</Status>
      <Version>Version: {EnvService.appVersion}</Version>
    </Wrapper>
  )
}

export default React.memo(ConnectionScreen)

import lottie, { AnimationItem } from 'lottie-web'
import React, { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'

import { Wrapper, ConnectionAnimation, Status, Version, MainWrapper } from './styles'

import astronaut from '@/lottie/astronaut.json'
import { EnvService } from '~/services'
import { actions, useAppDispatch, useAppSelector } from '~/store'

const ConnectionLayout: React.FC = () => {
  const isInitialized = useAppSelector((state) => state.user.isInitialized)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const animationRef = useRef<AnimationItem | null>(null)

  const dispatch = useAppDispatch()

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

  useEffect(() => {
    if (!isInitialized) {
      dispatch(actions.app.initialize())
    }
  }, [isInitialized])

  if (!isInitialized) {
    return (
      <Wrapper>
        <ConnectionAnimation ref={containerRef} />
        <Status>Initialization...</Status>
        <Version>Version: {EnvService.appVersion}</Version>
      </Wrapper>
    )
  }

  return (
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  )
}

export default React.memo(ConnectionLayout)

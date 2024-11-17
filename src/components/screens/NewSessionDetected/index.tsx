import lottie, { AnimationItem } from 'lottie-web'
import React, { useContext, useEffect, useRef } from 'react'

import { AstronautsContainer, Astronaut, Status, Wrapper, Description } from './styles'

import astronaut from '@/lottie/astronaut-twink.json'
import { AppContext } from '~/components/app/AppProvider'
import { Button } from '~/components/shared'

const NewSessionDetectedScreen: React.FC = () => {
  const container1Ref = useRef<HTMLDivElement | null>(null)
  const animation1Ref = useRef<AnimationItem | null>(null)
  const container2Ref = useRef<HTMLDivElement | null>(null)
  const animation2Ref = useRef<AnimationItem | null>(null)

  const { logout } = useContext(AppContext)

  useEffect(() => {
    animation1Ref.current = lottie.loadAnimation({
      container: container1Ref.current as Element,
      renderer: 'svg',
      autoplay: false,
      animationData: astronaut,
    })
    animation2Ref.current = lottie.loadAnimation({
      container: container2Ref.current as Element,
      renderer: 'svg',
      autoplay: false,
      animationData: astronaut,
    })

    return () => {
      animation1Ref.current?.destroy()
      animation2Ref.current?.destroy()
    }
  }, [])

  return (
    <Wrapper>
      <AstronautsContainer>
        <Astronaut ref={container1Ref} />
        <Astronaut ref={container2Ref} />
      </AstronautsContainer>

      <Status>New session detected!</Status>
      <Description>To restore the session, please re-authorize.</Description>
      <Button.Simple size={[324, 52]} label="Sign in" onClick={logout} />
    </Wrapper>
  )
}

export default React.memo(NewSessionDetectedScreen)

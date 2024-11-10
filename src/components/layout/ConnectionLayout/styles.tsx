import styled from 'styled-components'

import { Color, Media } from '~/constants'
import { EnvService } from '~/services'

export const MainWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: url(${EnvService.appURL + '/background.png'});
  backdrop-filter: blur(10px);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Version = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  color: ${Color.White};
  font-size: 16px;
`

export const Status = styled.div`
  color: ${Color.White};
  font-size: 24px;
  line-height: 120%;
  font-family: var(--font-monserrat);
  letter-spacing: 0.1em;
`

export const ConnectionAnimation = styled.div`
  max-height: 50%;
  max-width: 100%;
  height: auto;
  width: auto;
  aspect-ratio: 1920 / 1080;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100lvh;
  background-color: ${Color.LostInSadness};

  @media (max-width: ${Media.tablet}) {
    background: ${Color.LostInSadness};
  }
`

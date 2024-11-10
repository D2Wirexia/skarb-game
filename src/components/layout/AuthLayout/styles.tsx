import styled from 'styled-components'

import { Color } from '~/constants'

export const Astronaut = styled.img`
  position: absolute;
  bottom: 5vh;
  left: 0;
  max-height: 40vh;
  max-width: 400px;
  height: 100%;
  width: 100%;
  aspect-ratio: 1;
`

export const GroupButtons = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: center;
`
export const Description = styled.h4`
  max-width: 634px;
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: ${Color.White};
  margin: 80px 0 40px;
`
export const Title = styled.h2`
  font-family: var(--font-kimberley);
  font-size: 96px;
  font-weight: 700;
  line-height: 115.2px;
  text-align: center;
  text-transform: uppercase;
  color: ${Color.White};
`
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px;
`

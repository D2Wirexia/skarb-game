import styled from 'styled-components'

import { EnvService } from '~/services'

export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: url(${EnvService.appURL + '/background.png'});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

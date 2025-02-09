import hexToRgba from 'hex-to-rgba'
import ReactModal from 'react-modal'
import styled from 'styled-components'

import { Color } from '~/constants'

export const Content = styled.div`
  outline: none;
`

export const Overlay = styled.div`
  background-color: ${hexToRgba(Color.BlackHowl, 0.8)} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  z-index: 99;
`

export const StyledReactModal = styled(ReactModal)``

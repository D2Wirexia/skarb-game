import styled from 'styled-components'

import { Color } from '~/constants'

export const MessageContainer = styled.div`
  position: fixed;
  left: 50%;
  z-index: 9999;
  width: fit-content;
  padding: 9px 24px;
  border-radius: 7px;
  font-size: 16px;
  color: ${Color.White};
`

import styled from 'styled-components'

import { Color, Media } from '~/constants'

export const Message = styled.span`
  font-size: 18px;
  line-height: 24px;
`
export const StyledTitle = styled.h3`
  max-width: 700px;
  min-width: 300px;
  width: 100%;
  font-size: 22px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: 0.4px;
  border-radius: 7px;
  text-align: center;
  padding: 50px;
  color: ${Color.White};
  border: 1px solid ${Color.White};
  background: ${Color.White};
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: ${Media.tablet}) {
    min-width: 100%;
    padding: 30px;
  }
`

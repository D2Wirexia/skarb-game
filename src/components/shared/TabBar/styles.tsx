import styled from 'styled-components'

import { Color } from '~/constants'

export const TabBarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  height: 36px;
  min-width: 230px;
  width: fit-content;
  cursor: pointer;
  border-radius: 7px;
  background-color: transparent;
  color: ${Color.White};
  overflow-y: hidden;
  transition: var(--transition);

  &:disabled {
    background-color: ${Color.White};
    color: ${Color.White};
  }

  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: ${Color.White};
    }
  }
`

export const TabBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: fit-content;
  background-color: ${Color.White};
  border-radius: 7px;
  padding: 4px;
  gap: 4px;
  white-space: nowrap;
`

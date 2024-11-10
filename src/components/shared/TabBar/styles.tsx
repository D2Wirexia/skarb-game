import hexToRgba from 'hex-to-rgba'
import styled from 'styled-components'

import { Color, Media } from '~/constants'

export const TabBarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
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

  @media (max-width: ${Media.tablet}) {
    min-width: fit-content;
    color: ${Color.White};
    line-height: 16px;
    font-weight: 500;
    padding: 0 14px;
  }

  &:disabled {
    background-color: ${Color.White};
    color: ${Color.White};

    @media (max-width: ${Media.tablet}) {
      background-color: ${Color.White};
      color: ${Color.White};
    }
  }

  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: ${Color.White};

      @media (max-width: ${Media.tablet}) {
        background-color: ${hexToRgba(Color.White, 0.2)};
      }
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

  @media (max-width: ${Media.tablet}) {
    flex-wrap: nowrap;
    overflow-x: auto;
    width: 100%;
    border-radius: 0;
    background-color: transparent;
    padding: 4px 12px;
    gap: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Icon } from '~/components/shared'
import { Color } from '~/constants'

export const ActiveIcon = styled(Icon)`
  position: absolute;
  display: none;

  ${({ theme }) => css`
    top: ${theme.responsive(-10)};
    right: ${theme.responsive(-10)};
  `}
`

export const Name = styled.div`
  color: ${Color.White};
  font-family: 'Inter', serif !important;
  font-weight: 400;

  ${({ theme }) => css`
    font-size: ${theme.responsive(20)};
    line-height: ${theme.responsive(34)};
    padding: ${theme.responsive(0, 6, 0, 18)};
  `}
`

export const Flag = styled.img`
  ${({ theme }) => css`
    height: ${theme.responsive(34)};
    width: ${theme.responsive(50)};
  `}
`

export const LangPicker = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  background-color: transparent;
  transition: var(--transition);

  ${({ theme }) => css`
    height: ${theme.responsive(64)};
    width: ${theme.responsive(220)};
    border-radius: ${theme.responsive(15)};
    border: ${theme.responsive(1)} solid ${hexToRgba(Color.White, 0.08)};
    padding-left: ${theme.responsive(18)};
  `}

  &:disabled {
    background-color: ${hexToRgba(Color.White, 0.08)};

    ${ActiveIcon} {
      display: block;
    }
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: ${hexToRgba(Color.White, 0.04)};
  }
`

export const Container = styled.div`
  display: grid;
  justify-content: center;

  ${({ theme }) => css`
    grid-template-columns: repeat(auto-fill, ${theme.responsive(220)});
    gap: ${theme.responsive(28)};
    padding: ${theme.responsive(24)};
  `}
`

import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const ScrollBody = styled.div`
  width: 100%;

  ${({ theme }) => css`
    max-width: ${theme.responsive(948)};
  `}
`

export const Content = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-y: auto;

  ${({ theme }) => css`
    padding: ${theme.responsive(40, 0)};
    margin-top: ${theme.responsive(10)};
  `}

  &:before {
    position: absolute;
    content: '';
    top: 0;
    width: 100%;
    background: ${Color.BluePlaza};

    ${({ theme }) => css`
      height: ${theme.responsive(1)};
    `}
  }
`

export const DateOfRegistration = styled.div`
  color: ${hexToRgba(Color.White, 0.8)};
  font-family: 'Inter' !important;
  text-align: end;

  ${({ theme }) => css`
    font-size: ${theme.responsive(14)};
  `}
`

export const AdditionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  margin-left: auto;
`

export const CopyTooltip = styled.div`
  position: absolute;
  background-color: ${hexToRgba(Color.ChaosBlack, 0.8)};
  color: ${Color.White};
  white-space: nowrap;

  ${({ theme }) => css`
    border-radius: ${theme.responsive(4)};
    font-size: ${theme.responsive(14)};
    padding: ${theme.responsive(5, 10)};
    top: ${theme.responsive(50)};
    right: ${theme.responsive(20)};
  `}
`

export const CopyIDContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  background-color: ${Color.BluePlaza};
  font-family: var(--font-roboto) !important;
  color: ${Color.White};
  font-weight: 400;
  white-space: nowrap;
  text-transform: uppercase;

  ${({ theme }) => css`
    border-radius: ${theme.responsive(7)};
    gap: ${theme.responsive(12)};
    font-size: ${theme.responsive(18)};
    padding: ${theme.responsive(10, 14)};
  `}
`
export const IdentifierLabel = styled.div`
  font-family: 'Inter' !important;
  color: ${hexToRgba(Color.White, 0.8)};

  ${({ theme }) => css`
    font-size: ${theme.responsive(18)};
  `}
`

export const StatisticValue = styled.div`
  font-family: 'Inter' !important;
  color: ${Color.White};

  ${({ theme }) => css`
    font-family: ${theme.responsive(22)};
  `}
`

export const StatisticIcon = styled.img`
  width: auto;

  ${({ theme }) => css`
    height: ${theme.responsive(28)};
  `}
`

export const StatisticItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    gap: ${theme.responsive(6)};
  `}
`

export const FourthItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${hexToRgba(Color.White, 0.4)};

  ${({ theme }) => css`
    gap: ${theme.responsive(28)};
    padding: ${theme.responsive(10, 14)};
    border-radius: ${theme.responsive(7)};
  `}
`

export const ThirdItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.responsive(12)};
  `}
`
export const CountryName = styled.div`
  font-family: 'Inter' !important;
  color: ${hexToRgba(Color.White, 0.8)};

  ${({ theme }) => css`
    font-size: ${theme.responsive(16)};
  `}
`
export const Flag = styled.img`
  ${({ theme }) => css`
    width: ${theme.responsive(24)};
    height: ${theme.responsive(18)};
    border-radius: ${theme.responsive(4)};
  `}
`
export const SecondItem = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.responsive(6)};
  `}
`
export const Nickname = styled.div`
  color: ${Color.White};

  ${({ theme }) => css`
    font-size: ${theme.responsive(34)};
  `}
`
export const FirstItem = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.responsive(20)};
  `}
`
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.responsive(14)};
  `}
`
export const UserSection = styled.section`
  display: flex;
  width: 100%;

  ${({ theme }) => css`
    max-width: ${theme.responsive(1052)};
    margin: ${theme.responsive(30, 0, 30)};
    gap: ${theme.responsive(34)};
    height: ${theme.responsive(208)};
  `}
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

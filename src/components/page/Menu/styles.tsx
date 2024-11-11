import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Link, Sculpt } from '~/components/shared'
import { Color, MEDIA } from '~/constants'

export const Identifier = styled.div`
  color: ${hexToRgba(Color.White, 0.77)};

  ${({ theme }) => css`
    font-size: ${theme.responsive(15)};
  `}
`
export const Nickname = styled.div`
  color: ${Color.White};

  ${({ theme }) => css`
    font-size: ${theme.responsive(20)};
  `}
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  ${({ theme }) => css`
    gap: ${theme.responsive(5)};
  `}
`
export const UserContainer = styled(Link.AppNavigation)`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;

  ${({ theme }) => css`
    gap: ${theme.responsive(8)};
    border-radius: ${theme.responsive(8)};
    padding: ${theme.responsive(4, 10)};
  `}

  &:hover,
  &:focus {
    background-color: ${hexToRgba(Color.White, 0.24)};
  }
`

export const Logo = styled.div`
  color: ${Color.White};

  ${({ theme }) => css`
    font-size: ${theme.responsive(22)};
  `}
`

export const Content = styled(Sculpt.BoardSection)`
  grid-area: content;
`

export const Navbar = styled(Sculpt.BoardSection)`
  grid-area: navbar;
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.responsive(24)};
  `}
`
export const LeftSide = styled.div``

export const Header = styled(Sculpt.BoardSection)`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    padding: ${theme.responsive(0, 42)};
    gap: ${theme.responsive(24)};
    height: ${theme.responsive(88)};
  `}
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header'
    'navbar content';

  ${({ theme }) => css`
    padding: ${theme.responsive(45, 40, 40)};
    gap: ${theme.responsive(40)};
    grid-template-columns: ${theme.responsive(280)} 1fr;

    ${MEDIA.MW} {
      grid-template-columns: ${theme.responsive(90)} 1fr;
      gap: ${theme.responsive(18)};
      padding: ${theme.responsive(24)};
    }
  `}
`

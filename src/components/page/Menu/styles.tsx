import { motion } from 'framer-motion'
import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Sculpt } from '~/components/shared'
import { Color, MEDIA } from '~/constants'

export const Footer = styled(motion.footer)`
  grid-area: footer;
`

export const Identifier = styled.div`
  color: ${hexToRgba(Color.White, 0.77)};
  font-family: var(--font-roboto) !important;
  line-height: 120%;
  font-weight: 400;

  ${({ theme }) => css`
    font-size: ${theme.responsive(15)};
  `}
`
export const Nickname = styled.div`
  color: ${Color.White};
  font-family: var(--font-alegreya) !important;

  ${({ theme }) => css`
    font-size: ${theme.responsive(22)};
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
export const UserContainer = styled(Sculpt.FocHovContainer.AppNavigation)`
  ${({ theme }) => css`
    gap: ${theme.responsive(8)};
    padding: ${theme.responsive(4, 10)};
  `}
`

export const Version = styled.div`
  position: relative;
  color: ${hexToRgba(Color.White, 0.6)};
  font-family: var(--font-katibeh);

  ${({ theme }) => css`
    font-size: ${theme.responsive(18)};
    bottom: ${theme.responsive(18)};
  `}
`

export const Name = styled.div`
  color: ${Color.White};

  ${({ theme }) => css`
    font-size: ${theme.responsive(38)};
  `}
`

export const Title = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: var(--font-katibeh);

  ${({ theme }) => css`
    gap: ${theme.responsive(8)};
  `}
`

export const Content = styled(motion.section)`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${MEDIA.MW} {
    display: none;
  }
`

export const Navbar = styled(motion.nav)`
  grid-area: navbar;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    gap: ${theme.responsive(20)};
  `}
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.responsive(24)};
  `}
`
export const LeftSide = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.responsive(12)};
  `}
`

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
    'navbar content'
    'footer footer';

  ${({ theme }) => css`
    padding: ${theme.responsive(45, 40, 30)};
    gap: ${theme.responsive(40)};
    grid-template-columns: min(${theme.responsive(674)}, 1fr) 1fr;

    ${MEDIA.MW} {
      grid-template-areas:
        'header'
        'navbar'
        'footer';
      grid-template-columns: 1fr;
      gap: ${theme.responsive(18)};
      padding: ${theme.responsive(24)};
    }
  `}
`

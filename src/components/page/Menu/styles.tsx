import { motion } from 'framer-motion'
import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Link } from '~/components/shared'
import { Color } from '~/constants'

const widgetStyle = css`
  background-color: ${hexToRgba(Color.LostInSadness, 0.66)};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 28px;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 4px 50px 1px ${hexToRgba(Color.LostInSadness, 0.75)};
`

export const Identifier = styled.div`
  font-size: 15px;
  color: ${hexToRgba(Color.White, 0.77)};
  line-height: 120%;
`
export const Nickname = styled.div`
  font-size: 20px;
  color: ${Color.White};
  line-height: 120%;
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: start;
`
export const UserContainer = styled(Link.AppNavigation)`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  padding: 4px 10px;

  &:hover,
  &:focus {
    background-color: ${hexToRgba(Color.White, 0.24)};
  }
`

export const Logo = styled.div`
  font-size: 22px;
  color: ${Color.White};
`

export const Content = styled(motion.section)`
  ${widgetStyle};
`

export const Navbar = styled(motion.nav)`
  ${widgetStyle};
`

export const RightSide = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`
export const LeftSide = styled.div``

export const Header = styled(motion.header)`
  ${widgetStyle};
  grid-area: header;
  padding: 0 42px;
  min-height: 92px;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 45px 40px 40px;
  display: grid;
  gap: 40px;
  grid-template-columns: 280px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header'
    'navbar content';
`

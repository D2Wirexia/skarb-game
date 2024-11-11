import { motion } from 'framer-motion'
import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const Section = styled(motion.section)`
  background-color: ${hexToRgba(Color.LostInSadness, 0.66)};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    border-radius: ${theme.responsive(28)};
    box-shadow: inset ${theme.responsive(0, 4, 50, 1)} ${hexToRgba(Color.LostInSadness, 0.75)};
  `}
`

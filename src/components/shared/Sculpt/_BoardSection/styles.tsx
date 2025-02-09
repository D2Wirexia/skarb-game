import { motion } from 'framer-motion'
import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

export const Section = styled(motion.section)`
  background-color: ${hexToRgba(Color.ChaosBlack, 0.5)};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    border-radius: ${theme.responsive(28)};
    border: ${theme.responsive(1)} solid ${Color.DynamicBlack};
  `}
`

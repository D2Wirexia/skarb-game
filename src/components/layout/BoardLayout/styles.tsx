import { motion } from 'framer-motion'
import hexToRgba from 'hex-to-rgba'
import styled from 'styled-components'

import { Color } from '~/constants'

export const Wrapper = styled(motion.div)`
  background-color: ${hexToRgba(Color.LostInSadness, 0.66)};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 28px;
  width: calc(100% - 80px);
  height: calc(100% - 80px);
  box-shadow: inset 0 4px 50px 1px ${hexToRgba(Color.LostInSadness, 0.75)};
`

import { motion } from 'framer-motion'
import React from 'react'

import { Section } from './styles'

interface IProps extends React.ComponentPropsWithoutRef<typeof motion.section> {
  children: React.ReactNode
}

const BoardSection: React.FC<IProps> = ({ children, ...rest }) => {
  return <Section {...rest}>{children}</Section>
}

export default React.memo(BoardSection)

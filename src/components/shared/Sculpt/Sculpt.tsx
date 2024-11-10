import React from 'react'

import { BoardError } from './BoardError'
import { Space } from './Space'

interface IProps {
  children: React.ReactNode
}

const Sculpt: React.FC<IProps> = ({ children }) => {
  return children
}

export default Object.assign(React.memo(Sculpt), {
  BoardError,
  Space,
})

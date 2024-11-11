import React from 'react'

import BoardSection from './_BoardSection'
import { BoardError } from './BoardError'
import { Space } from './Space'

interface IProps {
  children: React.ReactNode
}

const Index: React.FC<IProps> = ({ children }) => {
  return children
}

export default Object.assign(React.memo(Index), {
  BoardError,
  Space,
  BoardSection,
})

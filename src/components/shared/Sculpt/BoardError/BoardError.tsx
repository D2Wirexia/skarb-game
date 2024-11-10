import React from 'react'

import { StyledTitle, Message } from './styles'

interface IProps {
  children: React.ReactNode
  message?: string | null
}

const BoardError: React.FC<IProps> = ({ children, message }) => {
  return (
    <StyledTitle>
      {children}
      {!!message && <Message>{message}</Message>}
    </StyledTitle>
  )
}

export default React.memo(BoardError)

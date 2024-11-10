import React from 'react'
import { Outlet } from 'react-router-dom'

import { Wrapper } from './styles'

const BoardLayout: React.FC = () => {
  return (
    <Wrapper
      initial={{
        opacity: 0,
        transform: 'scale(0)',
      }}
      animate={{
        opacity: 1,
        transform: 'scale(1)',
      }}
      exit={{
        opacity: 0,
        transform: 'scale(0)',
        transition: { delay: 0 },
      }}
      transition={{ duration: 0.3, type: 'tween', stiffness: 500, delay: 0.2 }}
    >
      <Outlet />
    </Wrapper>
  )
}

export default React.memo(BoardLayout)

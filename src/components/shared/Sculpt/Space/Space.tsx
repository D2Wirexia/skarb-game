import React from 'react'
import styled from 'styled-components'

interface IProps {
  height: number
}

const Space: React.FC<IProps> = ({ height }) => {
  return <Block height={height} />
}

const Block = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
`

export default React.memo(Space)

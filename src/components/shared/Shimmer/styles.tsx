import styled, { keyframes } from 'styled-components'

interface IProps {
  $w?: number
  $h?: number
}

const shimmer = keyframes`
  to {
    background-position-x: 0;
  }
`

export const Container = styled.div<IProps>`
  display: inline-block;
  position: relative;
  width: ${({ $w }) => ($w ? `${$w}px` : `${280}px`)};
  height: ${({ $h }) => ($h ? `${$h}px` : `${200}px`)};
  border-radius: 7px;

  background: linear-gradient(-45deg, #eee 40%, #fafafa 50%, #eee 60%);
  background-size: 300%;
  background-position-x: 100%;
  animation: ${shimmer} 1s infinite linear;
`

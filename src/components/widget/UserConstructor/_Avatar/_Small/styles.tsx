import styled, { css } from 'styled-components'

export const Photo = styled.img`
  position: absolute;
  border-radius: 50%;
  object-fit: cover;
  aspect-ratio: 1;

  ${({ theme }) => css`
    width: calc(100% - ${theme.responsive(10)});
  `}
`

export const Horseshoe = styled.div`
  position: absolute;
  top: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${({ theme }) => css`
    width: ${theme.responsive(68)};
    min-width: ${theme.responsive(68)};
    height: ${theme.responsive(68)};
  `}
`

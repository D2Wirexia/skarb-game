import styled, { css } from 'styled-components'

export const Photo = styled.img`
  object-fit: cover;
  aspect-ratio: 1;

  ${({ theme }) => css`
    width: ${theme.responsive(208)};
    border-radius: ${theme.responsive(24)};
  `}
`

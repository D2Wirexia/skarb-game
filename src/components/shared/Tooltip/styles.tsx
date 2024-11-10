import { Tooltip as ReactTooltip } from 'react-tooltip'
import styled from 'styled-components'

interface ITooltipProps {
  $maxWidth?: number
}

export const TooltipContainer = styled(ReactTooltip)<ITooltipProps>`
  width: 100%;
  z-index: 3;
`

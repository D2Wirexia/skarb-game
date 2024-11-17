import React, { useCallback, useContext, useId } from 'react'

import { Actions, AnimationIcon, Status, Wrapper, TooltipContent } from './styles'

import { AppContext } from '~/components/app/AppProvider'
import { Button, IconType, Tooltip } from '~/components/shared'
import { TimerKey, useTimer } from '~/hooks'

const ConfirmAccountScreen: React.FC = () => {
  const sendAgainTooltipId: string = useId()
  const { time, startTimer } = useTimer(TimerKey.ConfirmEmail, 10)
  const { logout } = useContext(AppContext)

  const handleSendAgain = useCallback(() => {
    startTimer()
  }, [])

  return (
    <Wrapper>
      <AnimationIcon icon={IconType.Envelope} width={280} height={220} />
      <Status>Confirm your account to continue</Status>
      <Actions>
        <Button.Simple
          size={[205, 52]}
          label="Send again"
          onClick={handleSendAgain}
          disabled={typeof time === 'number'}
          data-tooltip-id={sendAgainTooltipId}
        />
        <Tooltip disabled={typeof time !== 'number'} tooltipId={sendAgainTooltipId} noArrow>
          <TooltipContent>Retry in {time} sec</TooltipContent>
        </Tooltip>
        <Button.Simple size={[205, 52]} label="Logout" onClick={logout} />
      </Actions>
    </Wrapper>
  )
}

export default React.memo(ConfirmAccountScreen)

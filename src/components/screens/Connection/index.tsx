import React from 'react'

import { Name, Status, Version, Wrapper } from './styles'

import { Icon, IconType } from '~/components/shared'
import { EnvService } from '~/services'

const ConnectionScreen: React.FC = () => {
  return (
    <Wrapper>
      <Icon icon={IconType.Logo} width={284} height={284} />
      <Name>Skarb Game</Name>
      <Status>Connecting...</Status>
      <Version>Version: {EnvService.appVersion}</Version>
    </Wrapper>
  )
}

export default React.memo(ConnectionScreen)

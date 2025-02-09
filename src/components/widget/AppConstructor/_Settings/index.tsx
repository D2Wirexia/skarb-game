import React, { useState } from 'react'

import { SettingsScreen } from '~/components/screens'
import { Icon, IconType, Modal, Sculpt } from '~/components/shared'
import { Color } from '~/constants'

const Settings: React.FC = () => {
  const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false)

  return (
    <>
      <Sculpt.FocHovContainer.Button onClick={() => setIsOpenSettings(true)}>
        <Icon icon={IconType.Gear} width={24} height={24} fill={Color.White} />
      </Sculpt.FocHovContainer.Button>
      <Modal isOpen={isOpenSettings} onClose={() => setIsOpenSettings(false)} triggerClose>
        <SettingsScreen />
      </Modal>
    </>
  )
}

export default React.memo(Settings)

import React, { useCallback, useId, useState } from 'react'

import { Container, TargetButton, Label, Flag, Groups } from './styles'

import ENFlag from '@/images/flags/en.png'
import { Tooltip } from '~/components/shared'
import { i18n, Lang } from '~/i18n'

const LanguagePicker: React.FC = () => {
  const [isShowTooltip, setIsShowTooltip] = useState<boolean>(false)
  const tooltipId: string = useId()

  const changeLanguage = useCallback((lang: Lang) => {
    i18n.changeLanguage(lang).then((_) => setIsShowTooltip(false))
  }, [])

  return (
    <Container>
      <TargetButton
        data-tooltip-id={tooltipId}
        onClick={() => setIsShowTooltip((prev) => !prev)}
        $isActive={isShowTooltip}
      >
        <Label>{i18n.language}</Label>
        <Flag src={ENFlag} alt={i18n.language} />
      </TargetButton>
      <Tooltip
        tooltipId={tooltipId}
        place="bottom"
        clickable
        openOnClick
        noArrow
        toggleIsOpen={setIsShowTooltip}
        isOpen={isShowTooltip}
      >
        <Groups>
          <TargetButton $isActive={false} onClick={() => changeLanguage(Lang.English)}>
            <Label>{Lang.English}</Label>
            <Flag src={ENFlag} alt={Lang.English} />
          </TargetButton>
          <TargetButton $isActive={false} onClick={() => changeLanguage(Lang.Ukraine)}>
            <Label>{Lang.Ukraine}</Label>
            <Flag src={ENFlag} alt={Lang.Ukraine} />
          </TargetButton>
        </Groups>
      </Tooltip>
    </Container>
  )
}

export default React.memo(LanguagePicker)

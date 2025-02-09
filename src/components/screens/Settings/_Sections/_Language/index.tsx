import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container, LangPicker, Flag, Name, ActiveIcon } from './styles'

import en from '@/images/flags/en.png'
import ua from '@/images/flags/ua.png'
import { Icon, IconType } from '~/components/shared'
import { Color } from '~/constants'
import { i18n, Lang } from '~/i18n'

const langTarget = [
  { value: Lang.Ukraine, label: 'Українська', flag: ua, tooltipContent: null },
  { value: Lang.English, label: 'English', flag: en, tooltipContent: 'Latin version' },
] as const

const Language: React.FC = () => {
  const {
    i18n: { language },
  } = useTranslation()

  return (
    <Container>
      {langTarget.map((lang) => {
        return (
          <LangPicker
            key={lang.value}
            onClick={() => i18n.changeLanguage(lang.value)}
            disabled={language == lang.value}
          >
            <Flag src={lang.flag} alt={lang.value} />
            <Name>{lang.label}</Name>
            {!!lang.tooltipContent && (
              <Icon icon={IconType.CircleQuestion} width={16} height={16} fill={Color.White} />
            )}
            <ActiveIcon
              icon={IconType.CircleCheckmark}
              width={24}
              height={24}
              fill={Color.Gamboge}
            />
          </LangPicker>
        )
      })}
    </Container>
  )
}

export default React.memo(Language)

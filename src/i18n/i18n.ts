import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { en, ua } from './languages'

export enum Lang {
  English = 'en',
  Ukraine = 'ua',
}

const resources = {
  [Lang.English]: {
    translation: en,
  },
  [Lang.Ukraine]: {
    translation: ua,
  },
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    supportedLngs: [Lang.English, Lang.Ukraine],
    fallbackLng: Lang.English,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

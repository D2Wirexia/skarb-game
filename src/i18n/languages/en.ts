import { Word } from '~/i18n/word.key'

export const en: { [key: string]: string } = {
  [Word.General.Support]: 'Support',

  [Word.Menu.CreateRoom]: 'Create Room',
  [Word.Menu.JoinToRoom]: 'Join to Room',
  [Word.Menu.PackageEditor]: 'Package Editor',
  [Word.Menu.Rules]: 'Rules',

  [Word.Settings.Game]: 'Game',
  [Word.Settings.Controller]: 'Controller',
  [Word.Settings.Language]: 'Language',
  [Word.Settings.Audio]: 'Audio',
} as const

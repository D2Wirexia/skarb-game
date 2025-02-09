import { Word } from '~/i18n/word.key'

export const ua: { [key: string]: string } = {
  [Word.General.Support]: 'Підтримка',

  [Word.Menu.CreateRoom]: 'Створити Кімнату',
  [Word.Menu.JoinToRoom]: 'Приєднатись до кімнати',
  [Word.Menu.PackageEditor]: 'Редактор Паків',
  [Word.Menu.Rules]: 'Правила',

  [Word.Settings.Game]: 'Гра',
  [Word.Settings.Controller]: 'Управління',
  [Word.Settings.Language]: 'Мова',
  [Word.Settings.Audio]: 'Звук',
} as const

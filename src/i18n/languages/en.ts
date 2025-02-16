import { Word } from '~/i18n/word.key'

export const en: { [key: string]: string } = {
  [Word.General.Support]: 'Support',
  [Word.General.Premium]: 'Premium',
  [Word.General.Identifier]: 'Identifier',
  [Word.General.Copied]: 'Copied',

  [Word.Menu.CreateRoom]: 'Create Room',
  [Word.Menu.JoinToRoom]: 'Join to Room',
  [Word.Menu.PackageEditor]: 'Package Editor',
  [Word.Menu.Rules]: 'Rules',

  [Word.Settings.Game]: 'Game',
  [Word.Settings.Controller]: 'Controller',
  [Word.Settings.Language]: 'Language',
  [Word.Settings.Audio]: 'Audio',

  [Word.Profile.DateOfRegistration]: 'Date of registration',
  [Word.Profile.General]: 'General',
  [Word.Profile.Avatar]: 'Avatar',
  [Word.Profile.Subscription]: 'Subscription',
  [Word.Profile.Account]: 'Account',
  [Word.Profile.UploadYourAvatar]: 'Upload your avatar',
  [Word.Profile.UploadYourAvatarDesk]:
    'Upload a file from your device. Image should not be larger then {{size}} MB',
} as const

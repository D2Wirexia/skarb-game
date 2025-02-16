import React from 'react'

import { Photo } from './styles'

import defaultAvatar from '@/images/default-avatar.png'

interface IProps {
  photo: string | null
}

const AvatarBig: React.FC<IProps> = ({ photo }) => {
  return <Photo src={photo ?? defaultAvatar} alt="avatar" />
}

export default React.memo(AvatarBig)

import React, { useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Wrapper,
  Container,
  PhotoBig,
  PhotoSmall,
  ActionContainer,
  UploadButton,
  Description,
} from './styles'

import defaultPhoto from '@/images/default-avatar.png'
import { Word } from '~/i18n'
import { useAppSelector } from '~/store'

const Avatar: React.FC = () => {
  const [image, setImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const photo: string | null = useAppSelector((state) => state.user.photo)

  const { t } = useTranslation()

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleButtonClick = useCallback(() => {
    fileInputRef.current?.click()
  }, [fileInputRef.current])

  return (
    <Wrapper>
      <Container>
        <PhotoBig src={image ?? photo ?? defaultPhoto} alt={'Big'} />
        <PhotoSmall src={image ?? photo ?? defaultPhoto} alt={'Small'} />
        <ActionContainer>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} />
          <UploadButton onClick={handleButtonClick}>
            {t(Word.Profile.UploadYourAvatar)}
          </UploadButton>
          <Description>{t(Word.Profile.UploadYourAvatarDesk, { size: 40 })}</Description>
        </ActionContainer>
      </Container>
    </Wrapper>
  )
}

export default React.memo(Avatar)

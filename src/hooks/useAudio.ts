import { useEffect, useState } from 'react'

const useAudio = (
  url: string,
  volume: number = 1,
  isLoop: boolean = false,
  progress: number = 0,
) => {
  const [audio, setAudio] = useState<HTMLAudioElement>(new Audio(url))

  useEffect(() => {
    setAudio(new Audio(url))
  }, [url])

  const play = () => {
    audio.loop = isLoop
    audio.currentTime = progress
    audio.volume = volume
    audio.play().then(() => {})
  }

  const pause = () => {
    audio.pause()
  }

  return [play, pause]
}

export default useAudio

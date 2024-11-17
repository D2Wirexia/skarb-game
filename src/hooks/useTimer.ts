import { useCallback, useEffect, useRef, useState } from 'react'

import { LocalStorageKeys } from '~/constants'

export enum TimerKey {
  ConfirmEmail = LocalStorageKeys.ConfirmEmailTimer,
}

interface ITimer {
  time: number | null
  startTimer: () => void
  onEnd: (callback: () => void) => void
}

const getTime = (key: TimerKey): Date | null => {
  const savedEndTime = localStorage.getItem(key)

  return savedEndTime ? new Date(savedEndTime) : null
}

export default function useTimer(key: TimerKey, initialTime: number = 60): ITimer {
  const [endTime, setEndTime] = useState<Date | null>(getTime(key))
  const [time, setTime] = useState<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout>()
  const callbackRef = useRef<() => void>()

  const calculateRemainingTime = (endTime: Date): number => {
    const now = new Date()

    return Math.max(Math.floor((endTime.getTime() - now.getTime()) / 1000), 0)
  }

  const decreaseNum = () => {
    const newTime = calculateRemainingTime(endTime!)

    if (newTime <= 0) {
      clearInterval(intervalRef.current)
      localStorage.removeItem(key)
      setTime(null)
      if (callbackRef.current) callbackRef.current()
    } else {
      setTime(newTime)
    }
  }

  const onEnd = (callback: () => void): void => {
    callbackRef.current = callback
  }

  useEffect(() => {
    endTime && setTime(calculateRemainingTime(endTime))
  }, [key])

  useEffect(() => {
    if (!endTime) return

    intervalRef.current = setInterval(decreaseNum, 1000)

    return () => clearInterval(intervalRef.current)
  }, [endTime, onEnd])

  const startTimer = useCallback(() => {
    const newEndTime = new Date()
    newEndTime.setSeconds(newEndTime.getSeconds() + initialTime + 1)
    setEndTime(newEndTime)
    setTime(initialTime)
    localStorage.setItem(key, newEndTime.toISOString())
  }, [endTime, key])

  return { time, startTimer, onEnd }
}

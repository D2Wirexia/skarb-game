import { MEDIA } from '~/constants'
import { useMedia } from '~/hooks'

interface ITheme {
  responsive: (...r: number[]) => string
}

export default function useTheme(): ITheme {
  const tv = useMedia(MEDIA.VWD_TV)
  const desktopLarge = useMedia(MEDIA.VWD_DESKTOP)
  const desktopMedium = useMedia(MEDIA.VWD85_DESKTOP)
  const laptop = useMedia(MEDIA.VWD_LAPTOP)
  const tablet = useMedia(MEDIA.TABLET_V_MAX)
  const mobile = useMedia(MEDIA.MOB_LARGE)

  function responsive(...sizes: number[]): string {
    const cssString = (cb: (s: number) => string) => sizes.map(cb).join(' ')

    if (tv) {
      return cssString(calcMedia[MEDIA.VWD_TV])
    }
    if (laptop || desktopLarge) {
      return cssString(calcMedia[MEDIA.VWD_DESKTOP])
    }
    if (desktopMedium) {
      return cssString(calcMedia[MEDIA.VWD85_DESKTOP])
    }
    if (tablet) {
      return cssString(calcMedia[MEDIA.TABLET_V_MAX])
    }
    if (mobile) {
      return cssString(calcMedia[MEDIA.MOB_LARGE])
    }
    return cssString((size: number) => `${size}px`)
  }

  return { responsive }
}

const calcMedia = {
  [MEDIA.VWD_TV]: (size: any): string => {
    // aspect-ratio = 16:9

    const ratio: number = 1.77777778
    const ratioVWD: number = 0.02625
    const vwd = Number(size) * ratioVWD * ratio

    return `${vwd}vw`
  },
  [MEDIA.VWD_DESKTOP]: (size: any): string => {
    // 1440px = 75% but we should use 85% !!!
    // 1920px = 100vw
    // 1px = 0,0520833333333333vw

    const ratio: number = 1.1333333333333333
    const ratioVWD: number = 0.0520833333333333
    const vwd = Number(size) * ratioVWD * ratio

    return `${vwd}vw`
  },

  // This scaling method for the Responsive 1280px - 1439px
  [MEDIA.VWD85_DESKTOP]: (size: any): string => {
    const ratio: number = 0.85
    const vwd: number = Number(size) * ratio

    return `${vwd}px`
  },

  [MEDIA.TABLET_V_MAX]: (size: any): string => {
    // 768px = 100vw
    // 1px = 0,130208333vw
    const ratio: number = 0.85
    const ratioVWD: number = 0.130208333
    const vwd: number = Number(size) * ratio * ratioVWD

    return `${vwd}vw`
  },

  [MEDIA.MOB_LARGE]: (size: any): string => {
    // 426px = 100vw
    // 1px = 0,130208333vw
    const ratio: number = 0.85
    const ratioVWD: number = 0.234741784
    const vwd: number = Number(size) * ratio * ratioVWD

    return `${vwd}vw`
  },
}

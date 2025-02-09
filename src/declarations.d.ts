declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
    APP_URL: string
    SERVER_URL: string
  }
}

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.png' {
  const png: string
  export default png
}

declare module '*.jpg' {
  const jpg: string
  export default jpg
}

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.mp3' {
  const value: any
  export default value
}

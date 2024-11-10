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

import packageJson from '../../package.json'

interface EnvConfig {
  NODE_ENV: 'development' | 'production'
  APP_URL: string
  SERVER_URL: string
}

class EnvService {
  env: EnvConfig
  constructor() {
    this.env = {
      NODE_ENV: process.env.NODE_ENV as 'development' | 'production',
      APP_URL: process.env.APP_URL as string,
      SERVER_URL: process.env.SERVER_URL as string,
    }
  }

  public get appVersion(): string {
    return packageJson.version
  }

  public get isDevMode(): boolean {
    return this.env.NODE_ENV === 'development'
  }

  public get appURL(): string {
    return this.env.APP_URL
  }

  public get serverURL(): string {
    return this.env.SERVER_URL
  }
}

export default new EnvService()

import UAParser from 'ua-parser-js'

class DeviceService {
  parser: UAParser.UAParserInstance

  constructor() {
    this.parser = new UAParser()
  }

  public get isTouchDevice(): boolean {
    return this.parser.getDevice().type === 'mobile' || this.parser.getDevice().type === 'tablet'
  }
}

export default new DeviceService()

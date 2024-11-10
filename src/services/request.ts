import axios, { type AxiosInstance } from 'axios'

import { LocalStorageKeys } from '~/constants'
import EnvService from '~/services/env'
import { actions, store } from '~/store'

const baseHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

class Api {
  instance: AxiosInstance

  constructor() {
    let option = {}
    const token: string | null = localStorage.getItem(LocalStorageKeys.Session)
    if (token) {
      option = {
        Authorization: `Bearer ${token}`,
      }
    }
    this.instance = axios.create({
      baseURL: EnvService.serverURL,
      headers: {
        ...baseHeader,
        ...option,
      },
    })

    this.instance.interceptors.response.use(
      (response) => response.data,
      (error) => {
        if (error.response.status === 401) {
          store.dispatch(actions.app.logout())
        }
        throw new ApiException(error.response.data)
      },
    )
  }
}

const Request = {}

export default Request

export class ApiException extends Error {
  error: { data: any; message: string }

  constructor(data: { data: any; message: string }) {
    super('ApiException')
    this.message = data.message
    this.error = data.data
  }
}

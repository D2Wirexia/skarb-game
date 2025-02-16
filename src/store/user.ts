import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { IUser } from '~/@types'
import { LocalStorageKeys } from '~/constants'

export interface IUserState extends IUser {
  isInitialized: boolean
  isAuthenticated: boolean
}

const initialState: IUserState = {
  isInitialized: false,
  isAuthenticated: !!localStorage.getItem(LocalStorageKeys.Session),
  email: '',
  nickname: '',
  photo: null,
  identifier: null,
  createdAt: new Date(),
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    init: (state: IUserState): void => {
      state.isInitialized = true
    },
    cleanUser: (): IUserState => {
      localStorage.removeItem(LocalStorageKeys.Session)
      return { ...initialState, isInitialized: true, isAuthenticated: false }
    },
    updateToken: (state: IUserState, action: PayloadAction<string>): void => {
      localStorage.setItem(LocalStorageKeys.Session, action.payload)
      state.isAuthenticated = !!action.payload
    },
    updateUser: (state: IUserState, action: PayloadAction<IUser>): IUserState => {
      return { ...state, ...action.payload }
    },
  },
})

export const userActions = userReducer.actions

export default userReducer.reducer

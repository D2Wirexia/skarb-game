import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { type IToastMessage } from '~/components/shared'

export interface IUIState {
  toastMessages: IToastMessage[]
}

const initialState: IUIState = {
  toastMessages: [],
}

export const uiReducer = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    addToastMessage: (state: IUIState, action: PayloadAction<IToastMessage>): void => {
      state.toastMessages = [...state.toastMessages, action.payload]
    },
    removeToastMessage: (state: IUIState, action: PayloadAction<string>): void => {
      state.toastMessages = state.toastMessages.filter(
        (mes: IToastMessage) => mes.message !== action.payload,
      )
    },
  },
})

export const uiActions = uiReducer.actions

export default uiReducer.reducer

import { createSlice } from '@reduxjs/toolkit'

export interface ISettingsState {}

const initialState: ISettingsState = {}

export const settingsReducer = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    clean: (): ISettingsState => initialState,
  },
})

export const settingsActions = settingsReducer.actions

export default settingsReducer.reducer

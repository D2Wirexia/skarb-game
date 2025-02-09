import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface ISettingsState {
  mainMenuVolume: number
}

const initialState: ISettingsState = {
  mainMenuVolume: 0.7,
}

export const settingsReducer = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    clean: (): ISettingsState => initialState,
    setMainMenuVolume: (state: ISettingsState, action: PayloadAction<number>) => {
      state.mainMenuVolume = action.payload
    },
  },
})

export const settingsActions = settingsReducer.actions

export default settingsReducer.reducer

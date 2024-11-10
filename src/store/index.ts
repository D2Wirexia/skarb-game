import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import settings, { settingsActions } from './settings'
import ui, { uiActions } from './ui'
import user, { userActions } from './user'

import * as selectors from '~/store/selector'
import { appActions } from '~/store/thunk'

const persistedSettingsReducer = persistReducer(
  {
    key: 'settings',
    version: 1,
    storage,
  },
  settings,
)

export const store = configureStore({
  reducer: {
    ui,
    user,
    settings: persistedSettingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const actions = {
  ui: uiActions,
  user: userActions,
  settings: settingsActions,
  app: appActions,
}

export const selector = selectors

import { createSelector } from '@reduxjs/toolkit'

import { type RootState } from '~/store/index'
import { type IUserState } from '~/store/user'

export const getSubscriptionState = createSelector(
  (state: RootState) => state.user,
  (state: IUserState): boolean => {
    return state.isAuthenticated
  },
)
